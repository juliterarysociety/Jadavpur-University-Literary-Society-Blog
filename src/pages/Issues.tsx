import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FadeImage } from "../components/FadeImage";
import { PlateLightbox } from "../components/PlateLightbox";
import { issues, currentIssue } from "../data/issues";
import { articles } from "../data/articles";
import { photoGallery } from "../data/photography";

export function Issues() {
  const { slug } = useParams<{ slug?: string }>();
  const [selectedPlateIndex, setSelectedPlateIndex] = useState<number | null>(null);

  const activeIssue = slug
    ? issues.find((i) => i.slug === slug)
    : currentIssue;

  if (slug && !activeIssue) {
    return <Navigate to="/issues" replace />;
  }

  const issue = activeIssue || currentIssue;
  const issueArticles = articles.filter((a) => a.issueSlug === issue.slug);
  const issuePlates = photoGallery.filter((p) => p.issueSlug === issue.slug);

  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <Header />

      <main className="flex-1">
        {/* Issue Switcher Hairline Row */}
        <div className="border-b border-ink/12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
              Seasonal Folios &amp; Archival Volumes
            </span>
            <div className="flex flex-wrap items-center gap-5 sm:gap-7">
              {issues.map((item) => {
                const isSelected = item.slug === issue.slug;
                return (
                  <Link
                    key={item.id}
                    to={`/issues/${item.slug}`}
                    className={`pb-1 text-[11px] uppercase tracking-[0.15em] tabular-nums border-b-2 transition-colors duration-150 ${
                      isSelected
                        ? "border-accent text-accent font-semibold"
                        : "border-transparent text-ink-light hover:text-ink"
                    }`}
                  >
                    {item.volume} &middot; {item.issueNumber}
                    {item.featured ? " (Current)" : ""}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Broadsheet Issue Cover Header */}
        <section className="mx-auto max-w-7xl px-4 pt-12 pb-14 sm:px-6 lg:px-8 lg:pt-16 lg:pb-20 border-b border-ink/12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left 7 Columns: Issue Masthead & Editor's Note Preview */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="mb-4 flex flex-wrap items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-muted tabular-nums">
                  <span className="text-accent font-semibold">
                    {issue.volume} &middot; {issue.issueNumber}
                  </span>
                  <span>&middot;</span>
                  <span>{issue.season}</span>
                  <span>&middot;</span>
                  <span>{issue.publishedDate}</span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.08] tracking-tight text-ink mb-6">
                  {issue.title}
                </h1>

                <p className="font-serif text-xl sm:text-2xl italic text-ink-light leading-relaxed max-w-2xl mb-10">
                  {issue.subtitle}
                </p>
              </div>

              {/* Editor's Note */}
              <div className="border-t border-ink/12 pt-8 mt-2">
                <div className="mb-3 flex items-baseline justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                    Editorial Note
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.15em] text-ink-muted">
                    Colophon
                  </span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-5">
                  {issue.editorsNoteTitle}
                </h2>
                <div className="space-y-4 text-base text-ink-light leading-[1.75] max-w-[65ch]">
                  {issue.editorsNote.map((paragraph, idx) => (
                    <p
                      key={idx}
                      className={idx === 0 ? "editorial-dropcap" : undefined}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-ink/10 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs">
                  <span className="font-serif italic text-base text-ink">
                    &mdash; {issue.editorsSignoff}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.14em] text-ink-muted">
                    {issue.editorsRole}
                  </span>
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Framed Cover Plate */}
            <figure className="lg:col-span-5 lg:sticky lg:top-24">
              <div className="aspect-[4/5] overflow-hidden rounded-none border border-ink/12 bg-paper-muted">
                <FadeImage
                  src={issue.coverImage}
                  alt={issue.title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 border-b border-ink/10 pb-3 text-xs text-ink-muted">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-serif italic text-ink-light">
                    {issue.coverCaption}
                  </span>
                  <span className="uppercase tracking-[0.15em] text-[10px] tabular-nums shrink-0">
                    Folio Cover
                  </span>
                </div>
                {issue.coverArtist && (
                  <div className="mt-1 text-[11px] text-ink-muted">
                    Cover Plate by{" "}
                    <span className="text-ink font-medium">{issue.coverArtist}</span>
                  </div>
                )}
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Table of Contents — Writings in this Issue */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16 border-b border-ink/12">
          <div className="mb-8 flex items-baseline justify-between">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted block mb-1">
                Table of Contents &middot; {issue.volume}, {issue.issueNumber}
              </span>
              <h2 className="font-serif text-3xl font-medium text-ink">
                Literary Dispatches &amp; Criticism
              </h2>
            </div>
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-ink-muted tabular-nums">
              {issueArticles.length} {issueArticles.length === 1 ? "Entry" : "Entries"}
            </span>
          </div>

          <div className="divide-y divide-ink/10 border-y border-ink/12">
            {issueArticles.map((article, idx) => (
              <article
                key={article.id}
                className="group py-7 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-baseline"
              >
                <div className="md:col-span-2 flex items-baseline gap-3 text-[11px] uppercase tracking-[0.15em] text-ink-muted tabular-nums">
                  <span>0{idx + 1}</span>
                  <span>&middot;</span>
                  <span className="text-accent font-semibold">{article.tags[0]}</span>
                </div>

                <div className="md:col-span-6">
                  <Link
                    to={`/post/${article.slug}`}
                    className="block group-hover:text-accent transition-colors duration-150"
                  >
                    <h3 className="font-serif text-2xl text-ink leading-snug">
                      {article.title}
                    </h3>
                  </Link>
                  <p className="mt-2 text-sm text-ink-light leading-relaxed max-w-2xl">
                    {article.excerpt}
                  </p>
                </div>

                <div className="md:col-span-2 text-xs">
                  <Link
                    to={`/contributors/${article.author.slug}`}
                    className="font-medium text-ink hover:text-accent transition-colors duration-150 block"
                  >
                    {article.author.name}
                  </Link>
                  {article.author.department && (
                    <span className="text-ink-muted text-[11px] block mt-0.5">
                      {article.author.department}
                    </span>
                  )}
                </div>

                <div className="md:col-span-2 md:text-right text-xs text-ink-muted tabular-nums">
                  <span>{article.date}</span>
                  <span className="mx-1.5">&middot;</span>
                  <span>{article.readTime}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Visual Plates Exhibited in this Issue */}
        {issuePlates.length > 0 && (
          <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16 border-b border-ink/12">
            <div className="mb-8 flex items-baseline justify-between">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted block mb-1">
                  Exhibition Folio &middot; {issue.volume}
                </span>
                <h2 className="font-serif text-3xl font-medium text-ink">
                  Visual Plates in this Issue
                </h2>
              </div>
              <Link
                to="/artwork"
                className="text-[11px] font-semibold uppercase tracking-[0.15em] text-accent hover:text-ink transition-colors duration-150"
              >
                Full Exhibition Catalog &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {issuePlates.map((plate, idx) => (
                <figure key={plate.id} className="flex flex-col">
                  <button
                    onClick={() => setSelectedPlateIndex(idx)}
                    className="group block w-full overflow-hidden rounded-none border border-ink/10 bg-paper-muted aspect-[4/3] cursor-zoom-in text-left"
                  >
                    <FadeImage
                      src={plate.src}
                      alt={plate.alt}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition-opacity duration-200 group-hover:opacity-90"
                    />
                  </button>
                  <figcaption className="mt-3 border-b border-ink/10 pb-3 flex-1 flex flex-col justify-between">
                    <div>
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
                    </div>
                    {plate.artistName && (
                      <div className="mt-2 flex items-center justify-between text-[11px] text-ink-muted">
                        {plate.artistSlug ? (
                          <Link
                            to={`/contributors/${plate.artistSlug}`}
                            className="font-medium text-ink hover:text-accent transition-colors duration-150"
                          >
                            {plate.artistName}
                          </Link>
                        ) : (
                          <span className="font-medium text-ink">{plate.artistName}</span>
                        )}
                        <span>{plate.location}</span>
                      </div>
                    )}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* Past Issues Vault (Unboxed 3-Column Hairline Ledger) */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mb-8 flex items-baseline justify-between">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted block mb-1">
                Complete Editions
              </span>
              <h2 className="font-serif text-3xl font-medium text-ink">
                Archival Volumes &amp; Folios
              </h2>
            </div>
            <span className="text-xs uppercase tracking-[0.15em] text-ink-muted tabular-nums">
              {issues.length} Volumes Indexed
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-ink/12 border-y border-ink/12">
            {issues.map((vol, idx) => {
              const isCurrentView = vol.slug === issue.slug;
              const volArticleCount = articles.filter(
                (a) => a.issueSlug === vol.slug
              ).length;
              const volPlateCount = photoGallery.filter(
                (p) => p.issueSlug === vol.slug
              ).length;

              return (
                <article
                  key={vol.id}
                  className={`py-8 flex flex-col justify-between ${
                    idx === 0
                      ? "md:pr-8"
                      : idx === 1
                      ? "md:px-8"
                      : "md:pl-8"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.15em] text-ink-muted tabular-nums mb-3">
                      <span className="text-accent font-semibold">
                        {vol.volume} &middot; {vol.issueNumber}
                      </span>
                      <span>{vol.publishedDate}</span>
                    </div>
                    <Link
                      to={`/issues/${vol.slug}`}
                      className="block group"
                    >
                      <h3 className="font-serif text-2xl font-medium text-ink group-hover:text-accent transition-colors duration-150 mb-2">
                        {vol.title}
                      </h3>
                    </Link>
                    <p className="text-xs uppercase tracking-[0.14em] text-ink-muted mb-3">
                      {vol.season}
                    </p>
                    <p className="text-sm text-ink-light leading-relaxed mb-6">
                      {vol.subtitle}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-ink/10 flex items-center justify-between text-xs">
                    <span className="text-ink-muted tabular-nums">
                      {volArticleCount} Writings &middot; {volPlateCount} Plates
                    </span>
                    <Link
                      to={`/issues/${vol.slug}`}
                      className={`text-[11px] font-semibold uppercase tracking-[0.15em] transition-colors duration-150 ${
                        isCurrentView
                          ? "text-ink-muted"
                          : "text-accent hover:text-ink"
                      }`}
                    >
                      {isCurrentView ? "Viewing Folio" : "Open Folio →"}
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />

      <PlateLightbox
        plates={issuePlates}
        selectedIndex={selectedPlateIndex}
        onClose={() => setSelectedPlateIndex(null)}
        onSelectIndex={(idx) => setSelectedPlateIndex(idx)}
      />
    </div>
  );
}
