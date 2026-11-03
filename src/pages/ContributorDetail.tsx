import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FadeImage } from "../components/FadeImage";
import { PlateLightbox } from "../components/PlateLightbox";
import { authorsBySlug } from "../data/authors";
import { articles } from "../data/articles";
import { photoGallery } from "../data/photography";

export function ContributorDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [selectedPlateIdx, setSelectedPlateIdx] = useState<number | null>(null);

  const author = slug ? authorsBySlug[slug] : undefined;

  if (!author) {
    return <Navigate to="/contributors" replace />;
  }

  const authoredArticles = articles.filter((a) => a.author.slug === author.slug);
  const authoredPlates = photoGallery.filter((p) => p.artistSlug === author.slug);

  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <Header />

      <main className="flex-1">
        {/* Top Breadcrumb Bar */}
        <div className="border-b border-ink/10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-ink-muted">
            <Link
              to="/contributors"
              className="hover:text-accent transition-colors duration-150"
            >
              &larr; All Contributors &amp; Artists
            </Link>
            <span className="tabular-nums">JUALS Contributor Dossier</span>
          </div>
        </div>

        {/* Biographical Header */}
        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16 border-b border-ink/12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left 4 Columns: Framed Portrait Plate */}
            <figure className="lg:col-span-4">
              <div className="aspect-[4/5] overflow-hidden rounded-none border border-ink/12 bg-paper-muted">
                <FadeImage
                  src={author.avatar}
                  alt={author.name}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover grayscale"
                />
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between border-b border-ink/10 pb-2.5 text-xs text-ink-muted">
                <span className="font-serif italic text-ink-light">
                  {author.name}
                </span>
                <span className="uppercase tracking-[0.14em] text-[10px] tabular-nums">
                  Portrait Plate
                </span>
              </figcaption>
            </figure>

            {/* Right 8 Columns: Dossier Details */}
            <div className="lg:col-span-8 lg:border-l lg:border-ink/10 lg:pl-12">
              <div className="mb-3 flex flex-wrap items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-ink-muted">
                <span className="text-accent font-semibold">
                  {author.department || author.role}
                </span>
                {author.graduationYear && (
                  <>
                    <span>&middot;</span>
                    <span>{author.graduationYear}</span>
                  </>
                )}
                {author.disciplines && author.disciplines.length > 0 && (
                  <>
                    <span>&middot;</span>
                    <span>{author.disciplines.join(" · ")}</span>
                  </>
                )}
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-ink mb-6">
                {author.name}
              </h1>

              {author.featuredQuote && (
                <blockquote className="my-6 border-y border-ink/12 py-5">
                  <p className="font-serif text-xl sm:text-2xl italic text-ink leading-relaxed">
                    &ldquo;{author.featuredQuote}&rdquo;
                  </p>
                </blockquote>
              )}

              <p className="text-base sm:text-[17px] text-ink-light leading-[1.75] max-w-[65ch]">
                {author.bio}
              </p>

              {/* Metadata Summary Strip */}
              <div className="mt-8 pt-6 border-t border-ink/10 grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.16em] text-ink-muted block mb-1">
                    Faculty / Department
                  </span>
                  <span className="font-medium text-ink">
                    {author.department || "Jadavpur University"}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.16em] text-ink-muted block mb-1">
                    Archive Contributions
                  </span>
                  <span className="font-medium text-ink tabular-nums">
                    {authoredArticles.length} Writings &middot; {authoredPlates.length} Plates
                  </span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.16em] text-ink-muted block mb-1">
                    Editorial Correspondence
                  </span>
                  <a
                    href={`mailto:${author.email || "ju.literarysociety@gmail.com"}`}
                    className="font-medium text-accent hover:text-ink transition-colors duration-150"
                  >
                    Via JUALS Desk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Published Writings Section */}
        {authoredArticles.length > 0 && (
          <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16 border-b border-ink/12">
            <div className="mb-8 flex items-baseline justify-between">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted block mb-1">
                  Bibliography
                </span>
                <h2 className="font-serif text-3xl font-medium text-ink">
                  Published Writings by {author.name}
                </h2>
              </div>
              <span className="text-xs uppercase tracking-[0.15em] text-ink-muted tabular-nums">
                {authoredArticles.length}{" "}
                {authoredArticles.length === 1 ? "Entry" : "Entries"}
              </span>
            </div>

            <div className="divide-y divide-ink/10 border-y border-ink/12">
              {authoredArticles.map((article, idx) => (
                <article
                  key={article.id}
                  className="group py-7 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-baseline"
                >
                  <div className="md:col-span-2 flex items-baseline gap-3 text-[11px] uppercase tracking-[0.15em] text-ink-muted tabular-nums">
                    <span>0{idx + 1}</span>
                    <span>&middot;</span>
                    <span className="text-accent font-semibold">
                      {article.tags[0]}
                    </span>
                  </div>

                  <div className="md:col-span-7">
                    <Link
                      to={`/post/${article.slug}`}
                      className="block group-hover:text-accent transition-colors duration-150"
                    >
                      <h3 className="font-serif text-2xl text-ink leading-snug">
                        {article.title}
                      </h3>
                    </Link>
                    <p className="mt-2 text-sm text-ink-light leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="md:col-span-3 md:text-right text-xs text-ink-muted tabular-nums">
                    {article.issueSlug && (
                      <Link
                        to={`/issues/${article.issueSlug}`}
                        className="block font-medium text-ink hover:text-accent transition-colors duration-150 mb-1"
                      >
                        {article.issueLabel}
                      </Link>
                    )}
                    <span>{article.date}</span>
                    <span className="mx-1.5">&middot;</span>
                    <span>{article.readTime}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Visual Plates Section */}
        {authoredPlates.length > 0 && (
          <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="mb-8 flex items-baseline justify-between">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted block mb-1">
                  Visual Archive
                </span>
                <h2 className="font-serif text-3xl font-medium text-ink">
                  Exhibited Plates &amp; Studies
                </h2>
              </div>
              <span className="text-xs uppercase tracking-[0.15em] text-ink-muted tabular-nums">
                {authoredPlates.length}{" "}
                {authoredPlates.length === 1 ? "Plate" : "Plates"}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {authoredPlates.map((plate, idx) => (
                <figure key={plate.id} className="flex flex-col">
                  <button
                    onClick={() => setSelectedPlateIdx(idx)}
                    className="group block w-full overflow-hidden rounded-none border border-ink/10 bg-paper-muted aspect-[4/3] cursor-zoom-in text-left"
                  >
                    <FadeImage
                      src={plate.src}
                      alt={plate.alt}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition-opacity duration-200 group-hover:opacity-90"
                    />
                  </button>
                  <figcaption className="mt-3 border-b border-ink/10 pb-3">
                    <div className="flex items-baseline justify-between gap-2">
                      <p className="font-serif text-base font-medium text-ink">
                        {plate.title}
                      </p>
                      <span className="text-[10px] uppercase tracking-[0.15em] text-ink-muted tabular-nums shrink-0">
                        Plate 0{idx + 1}
                      </span>
                    </div>
                    {plate.medium && (
                      <p className="text-xs italic font-serif text-ink-light mt-0.5">
                        {plate.medium}
                      </p>
                    )}
                    <p className="text-xs text-ink-muted mt-1.5 leading-relaxed">
                      {plate.caption}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />

      <PlateLightbox
        plates={authoredPlates}
        selectedIndex={selectedPlateIdx}
        onClose={() => setSelectedPlateIdx(null)}
        onSelectIndex={(idx) => setSelectedPlateIdx(idx)}
      />
    </div>
  );
}
