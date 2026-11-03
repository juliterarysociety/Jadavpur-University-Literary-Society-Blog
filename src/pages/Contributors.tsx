import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FadeImage } from "../components/FadeImage";
import { contributors } from "../data/authors";
import { articles } from "../data/articles";
import { photoGallery } from "../data/photography";

const DISCIPLINE_FILTERS = [
  "All",
  "Poetry",
  "Prose",
  "Reviews",
  "Artwork",
  "Translation",
  "Essays",
];

export function Contributors() {
  const [activeDiscipline, setActiveDiscipline] = useState<string>("All");

  const filteredContributors =
    activeDiscipline === "All"
      ? contributors
      : contributors.filter((c) =>
          c.disciplines?.some(
            (d) => d.toLowerCase() === activeDiscipline.toLowerCase()
          )
        );

  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <Header />

      <main className="flex-1">
        {/* Broadsheet Directory Header */}
        <section className="mx-auto max-w-7xl px-4 pt-12 pb-10 sm:px-6 lg:px-8 lg:pt-16 lg:pb-12 border-b border-ink/12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="mb-2 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-muted">
                Index of Voices &middot; Jadavpur University
              </div>
              <h1 className="font-serif text-4xl font-medium tracking-tight text-ink sm:text-5xl">
                Contributors &amp; Artists
              </h1>
              <p className="mt-3 text-base sm:text-lg text-ink-light leading-relaxed">
                Poets, fiction writers, translators, critics, and visual artists contributing to the Jadavpur University Arts and Literary Society across faculties.
              </p>
            </div>
            <div className="text-xs font-medium uppercase tracking-[0.16em] text-ink-muted tabular-nums shrink-0">
              {filteredContributors.length}{" "}
              {filteredContributors.length === 1 ? "Contributor" : "Contributors"}{" "}
              Indexed
            </div>
          </div>

          {/* Discipline Filter Tabs (Typographic Underline Tabs) */}
          <div className="mt-8 pt-6 border-t border-ink/10 flex flex-wrap items-center gap-5">
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
              Discipline:
            </span>
            {DISCIPLINE_FILTERS.map((discipline) => {
              const isActive = activeDiscipline === discipline;
              return (
                <button
                  key={discipline}
                  type="button"
                  onClick={() => setActiveDiscipline(discipline)}
                  className={`pb-1.5 text-[11px] uppercase tracking-[0.15em] border-b-2 transition-colors duration-150 cursor-pointer ${
                    isActive
                      ? "border-accent text-accent font-semibold"
                      : "border-transparent text-ink-light hover:text-ink"
                  }`}
                >
                  {discipline}
                </button>
              );
            })}
          </div>
        </section>

        {/* Contributors Dossier Ledger */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="divide-y divide-ink/12 border-y border-ink/12">
            {filteredContributors.map((person, idx) => {
              const authoredArticles = articles.filter(
                (a) => a.author.slug === person.slug
              );
              const authoredPlates = photoGallery.filter(
                (p) => p.artistSlug === person.slug
              );

              return (
                <article
                  key={person.id}
                  className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
                >
                  {/* Column 1: Portrait Plate & Numeral */}
                  <div className="lg:col-span-3 flex sm:flex-row lg:flex-col gap-5 items-start">
                    <Link
                      to={`/contributors/${person.slug}`}
                      className="block w-28 sm:w-36 lg:w-full aspect-[4/5] overflow-hidden rounded-none border border-ink/12 bg-paper-muted shrink-0 group"
                    >
                      <FadeImage
                        src={person.avatar}
                        alt={person.name}
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover grayscale transition-opacity duration-200 group-hover:opacity-90"
                      />
                    </Link>
                    <div className="text-[11px] uppercase tracking-[0.15em] text-ink-muted tabular-nums">
                      <span>Dossier 0{idx + 1}</span>
                      {person.graduationYear && (
                        <>
                          <span className="mx-1.5">&middot;</span>
                          <span>{person.graduationYear}</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Column 2: Biographical Note & Epigraph */}
                  <div className="lg:col-span-5 lg:border-l lg:border-ink/10 lg:pl-8">
                    <div className="mb-2 flex flex-wrap items-center gap-2 text-[11px] font-medium uppercase tracking-[0.15em] text-ink-muted">
                      <span className="text-accent font-semibold">
                        {person.department || person.role}
                      </span>
                      {person.disciplines && person.disciplines.length > 0 && (
                        <>
                          <span>&middot;</span>
                          <span>{person.disciplines.join(" / ")}</span>
                        </>
                      )}
                    </div>

                    <Link
                      to={`/contributors/${person.slug}`}
                      className="group inline-block"
                    >
                      <h2 className="font-serif text-3xl font-medium text-ink group-hover:text-accent transition-colors duration-150">
                        {person.name}
                      </h2>
                    </Link>

                    <p className="mt-3 text-sm sm:text-base text-ink-light leading-relaxed">
                      {person.bio}
                    </p>

                    {person.featuredQuote && (
                      <blockquote className="mt-5 border-y border-ink/10 py-3.5">
                        <p className="font-serif italic text-sm sm:text-base text-ink leading-relaxed">
                          &ldquo;{person.featuredQuote}&rdquo;
                        </p>
                      </blockquote>
                    )}
                  </div>

                  {/* Column 3: Indexed Works in JUALS */}
                  <div className="lg:col-span-4 lg:border-l lg:border-ink/10 lg:pl-8 flex flex-col justify-between h-full">
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted mb-3 tabular-nums">
                        Published in Archive ({authoredArticles.length} Writings &middot;{" "}
                        {authoredPlates.length} Plates)
                      </div>

                      {authoredArticles.length > 0 && (
                        <ul className="divide-y divide-ink/8 border-y border-ink/10 mb-4">
                          {authoredArticles.map((art) => (
                            <li key={art.id} className="py-2.5">
                              <Link
                                to={`/post/${art.slug}`}
                                className="group block"
                              >
                                <span className="text-[10px] uppercase tracking-[0.14em] text-accent font-semibold block">
                                  {art.tags[0]} &middot; {art.issueLabel || art.date}
                                </span>
                                <span className="font-serif text-base text-ink group-hover:text-accent transition-colors duration-150">
                                  {art.title}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}

                      {authoredPlates.length > 0 && (
                        <div className="text-xs text-ink-light">
                          <span className="text-[10px] uppercase tracking-[0.14em] text-ink-muted block mb-1">
                            Exhibited Visual Plates:
                          </span>
                          <p className="font-serif italic text-ink">
                            {authoredPlates.map((p) => p.title).join("; ")}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="mt-6 pt-3">
                      <Link
                        to={`/contributors/${person.slug}`}
                        className="inline-flex items-center text-[11px] font-semibold uppercase tracking-[0.15em] text-accent hover:text-ink transition-colors duration-150"
                      >
                        Open Complete Dossier &rarr;
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
