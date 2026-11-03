import { useParams, Link } from "react-router-dom";
import { articles } from "../data/articles";
import { currentIssue } from "../data/issues";
import { chronicleEvents } from "../data/chronicle";
import { ArticleCard } from "../components/ArticleCard";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { siteConfig } from "../data/siteConfig";

export function Home() {
  const { category } = useParams<{ category?: string }>();

  const filteredArticles = category
    ? articles.filter((a) =>
        a.tags.some((t) => t.toLowerCase() === category.toLowerCase())
      )
    : articles;

  const activeCategoryTitle = category
    ? category.charAt(0).toUpperCase() + category.slice(1)
    : null;

  const leadArticle =
    !category && filteredArticles.length > 0 ? filteredArticles[0] : null;
  const secondaryArticles = !category
    ? filteredArticles.slice(1, 3)
    : filteredArticles;
  const archiveArticles = !category ? filteredArticles.slice(3) : [];

  const currentIssueArticles = articles.filter(
    (a) => a.issueSlug === currentIssue.slug
  );
  const upcomingEvents = chronicleEvents
    .filter((e) => e.status === "Upcoming")
    .slice(0, 3);

  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <Header />

      <main className="flex-1">
        {/* Editorial Masthead Statement */}
        <section className="mx-auto max-w-7xl px-4 pt-12 pb-10 sm:px-6 lg:px-8 lg:pt-16 lg:pb-12 border-b border-ink/12">
          {category ? (
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl">
                <div className="mb-2 text-[11px] font-medium uppercase tracking-[0.16em] text-ink-muted">
                  Department &middot; JUALS Archive
                </div>
                <h1 className="font-serif text-4xl font-medium tracking-tight text-ink sm:text-5xl">
                  {activeCategoryTitle}
                </h1>
                <p className="mt-3 text-base sm:text-lg text-ink-light leading-relaxed">
                  Selected works in {activeCategoryTitle?.toLowerCase()} published by the Jadavpur University Arts and Literary Society.
                </p>
              </div>
              <div className="text-xs font-medium uppercase tracking-[0.16em] text-ink-muted tabular-nums shrink-0">
                {filteredArticles.length}{" "}
                {filteredArticles.length === 1 ? "Entry" : "Entries"} Indexed
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8">
                <div className="mb-3 flex flex-wrap items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-muted tabular-nums">
                  <Link
                    to={`/issues/${currentIssue.slug}`}
                    className="text-accent font-semibold hover:text-ink transition-colors duration-150"
                  >
                    {currentIssue.volume} &middot; {currentIssue.issueNumber}
                  </Link>
                  <span>&middot;</span>
                  <span>{currentIssue.season}</span>
                  <span>&middot;</span>
                  <span>Jadavpur University, Kolkata</span>
                </div>
                <h1 className="font-serif text-4xl font-medium leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-6xl">
                  {siteConfig.hero.headline}
                </h1>
              </div>
              <div className="lg:col-span-4 lg:border-l lg:border-ink/10 lg:pl-8">
                <p className="text-sm sm:text-base leading-relaxed text-ink-light">
                  {siteConfig.hero.subtext}
                </p>
              </div>
            </div>
          )}
        </section>

        {/* Tier 1: Lead Editorial Split (Root Home Only) */}
        {leadArticle && (
          <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16 border-b border-ink/12">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
                Lead Dispatch
              </span>
              <span className="text-[11px] uppercase tracking-[0.16em] text-ink-muted tabular-nums">
                No. 01 &middot; {leadArticle.issueLabel}
              </span>
            </div>
            <ArticleCard article={leadArticle} featured />
          </section>
        )}

        {/* Tier 1.5: Current Issue Spotlight (Root Home Only) */}
        {!category && (
          <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16 border-b border-ink/12 bg-paper-muted/30">
            <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4 border-b border-ink/10 pb-3.5">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                  Current Issue Folio
                </span>
                <span className="text-ink-muted">&middot;</span>
                <span className="text-[11px] uppercase tracking-[0.16em] text-ink-muted tabular-nums">
                  {currentIssue.volume}, {currentIssue.issueNumber} ({currentIssue.publishedDate})
                </span>
              </div>
              <Link
                to={`/issues/${currentIssue.slug}`}
                className="text-[11px] font-semibold uppercase tracking-[0.15em] text-ink hover:text-accent transition-colors duration-150"
              >
                Read Complete Issue &amp; Editor&rsquo;s Note &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left 5 Columns: Issue Theme & Editorial Excerpt */}
              <div className="lg:col-span-5">
                <div className="text-[11px] uppercase tracking-[0.16em] text-ink-muted mb-2">
                  {currentIssue.season}
                </div>
                <Link
                  to={`/issues/${currentIssue.slug}`}
                  className="group inline-block"
                >
                  <h2 className="font-serif text-3xl sm:text-4xl font-medium text-ink group-hover:text-accent transition-colors duration-150 leading-tight mb-4">
                    {currentIssue.title}
                  </h2>
                </Link>
                <p className="font-serif italic text-base sm:text-lg text-ink-light leading-relaxed mb-6">
                  {currentIssue.subtitle}
                </p>
                <div className="border-t border-ink/10 pt-4 text-sm text-ink-light leading-relaxed">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink block mb-1.5">
                    From the Editor&rsquo;s Note &mdash; &ldquo;{currentIssue.editorsNoteTitle}&rdquo;
                  </span>
                  <p className="line-clamp-3">{currentIssue.editorsNote[0]}</p>
                </div>
              </div>

              {/* Right 7 Columns: Issue Table of Contents */}
              <div className="lg:col-span-7 lg:border-l lg:border-ink/10 lg:pl-10">
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted mb-3">
                  In This Folio &middot; Selected Contents
                </div>
                <div className="divide-y divide-ink/10 border-y border-ink/12">
                  {currentIssueArticles.map((art, i) => (
                    <div
                      key={art.id}
                      className="py-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2"
                    >
                      <div className="flex items-baseline gap-3">
                        <span className="text-[11px] uppercase tracking-[0.15em] text-ink-muted tabular-nums">
                          0{i + 1}
                        </span>
                        <div>
                          <Link
                            to={`/post/${art.slug}`}
                            className="font-serif text-lg font-medium text-ink hover:text-accent transition-colors duration-150"
                          >
                            {art.title}
                          </Link>
                          <span className="mx-2 text-ink-muted">&middot;</span>
                          <span className="text-[11px] uppercase tracking-[0.14em] text-accent font-semibold">
                            {art.tags[0]}
                          </span>
                        </div>
                      </div>
                      <Link
                        to={`/contributors/${art.author.slug}`}
                        className="text-xs text-ink-light hover:text-accent transition-colors duration-150 shrink-0 sm:ml-4"
                      >
                        {art.author.name}
                      </Link>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-4 text-xs">
                  <span className="text-ink-muted">
                    Edited by {currentIssue.editorsSignoff}
                  </span>
                  <Link
                    to="/issues"
                    className="text-[11px] font-semibold uppercase tracking-[0.15em] text-accent hover:text-ink transition-colors duration-150"
                  >
                    Browse All 3 Archival Volumes &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Tier 2: Curated Feature Columns */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mb-8 flex items-center justify-between border-b border-ink/10 pb-3.5">
            <h2 className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
              {category ? `${activeCategoryTitle} Folio` : "Selected Features"}
            </h2>
            {!category && (
              <span className="text-[11px] uppercase tracking-[0.16em] text-ink-muted tabular-nums">
                No. 02 &ndash; 0{1 + secondaryArticles.length}
              </span>
            )}
          </div>

          {secondaryArticles.length > 0 ? (
            <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-10 lg:gap-x-12">
              {secondaryArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="border-y border-ink/12 py-12 text-left my-4">
              <h3 className="font-serif text-2xl font-medium text-ink mb-2">
                No entries archived in this department yet
              </h3>
              <p className="text-sm text-ink-light max-w-lg mb-6 leading-relaxed">
                We are currently reading manuscripts in{" "}
                {activeCategoryTitle?.toLowerCase()} for our upcoming issue.
              </p>
              <Link
                to="/submissions"
                className="inline-flex items-center border border-ink px-4 py-2 text-[11px] font-medium uppercase tracking-[0.15em] text-ink hover:border-accent hover:text-accent transition-colors duration-150"
              >
                Review Submission Guidelines &rarr;
              </Link>
            </div>
          )}
        </section>

        {/* Tier 3: The Archive Index (Ledger Rows) */}
        {!category && archiveArticles.length > 0 && (
          <section className="mx-auto max-w-7xl px-4 pb-12 pt-4 sm:px-6 lg:px-8 lg:pb-16">
            <div className="border-t border-ink/12 pt-12">
              <div className="mb-6 flex items-baseline justify-between">
                <h2 className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
                  From the Archive &middot; Reading Index
                </h2>
                <span className="text-[11px] uppercase tracking-[0.16em] text-ink-muted tabular-nums">
                  {articles.length} Works Total
                </span>
              </div>

              <div className="divide-y divide-ink/10 border-y border-ink/12">
                {archiveArticles.map((article, idx) => {
                  const indexNumber =
                    idx + 1 + secondaryArticles.length + (leadArticle ? 1 : 0);
                  return (
                    <article
                      key={article.id}
                      className="group py-6 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-baseline"
                    >
                      <div className="md:col-span-2 flex items-baseline gap-3 text-[11px] uppercase tracking-[0.15em] text-ink-muted tabular-nums">
                        <span>0{indexNumber}</span>
                        <span>&middot;</span>
                        <span className="text-accent font-semibold">
                          {article.tags[0]}
                        </span>
                      </div>

                      <div className="md:col-span-6">
                        <Link
                          to={`/post/${article.slug}`}
                          className="block group-hover:text-accent transition-colors duration-150"
                        >
                          <h3 className="font-serif text-xl sm:text-2xl text-ink leading-snug">
                            {article.title}
                          </h3>
                        </Link>
                        <p className="mt-1.5 text-sm text-ink-light line-clamp-2 leading-relaxed">
                          {article.excerpt}
                        </p>
                      </div>

                      <div className="md:col-span-2 text-xs text-ink-light">
                        <Link
                          to={`/contributors/${article.author.slug}`}
                          className="font-medium text-ink hover:text-accent transition-colors duration-150 block"
                        >
                          {article.author.name}
                        </Link>
                        {article.author.role && (
                          <span className="text-ink-muted text-[11px]">
                            {article.author.role}
                          </span>
                        )}
                      </div>

                      <div className="md:col-span-2 md:text-right text-xs text-ink-muted tabular-nums">
                        {article.issueSlug && (
                          <Link
                            to={`/issues/${article.issueSlug}`}
                            className="block text-[11px] font-medium text-ink-light hover:text-accent transition-colors duration-150 mb-0.5"
                          >
                            {article.issueLabel}
                          </Link>
                        )}
                        <span>{article.date}</span>
                        <span className="mx-1.5">&middot;</span>
                        <span>{article.readTime}</span>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Tier 4: Campus Literary Chronicle Preview (Root Home Only) */}
        {!category && upcomingEvents.length > 0 && (
          <section className="mx-auto max-w-7xl px-4 pb-16 pt-4 sm:px-6 lg:px-8 lg:pb-20">
            <div className="border-t border-ink/12 pt-12">
              <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent block mb-1">
                    Campus Chronicle &middot; Jadavpur University
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-medium text-ink">
                    Upcoming Readings, Colloquia &amp; Workshops
                  </h2>
                </div>
                <Link
                  to="/chronicle"
                  className="text-[11px] font-semibold uppercase tracking-[0.15em] text-ink hover:text-accent transition-colors duration-150"
                >
                  Full Campus Chronicle &rarr;
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {upcomingEvents.map((ev) => (
                  <article
                    key={ev.id}
                    className="border border-ink/12 p-6 flex flex-col justify-between bg-paper"
                  >
                    <div>
                      <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-ink-muted tabular-nums mb-3">
                        <span className="text-accent font-semibold">
                          {ev.category}
                        </span>
                        <span>{ev.date}</span>
                      </div>
                      <Link to="/chronicle" className="group block">
                        <h3 className="font-serif text-xl font-medium text-ink group-hover:text-accent transition-colors duration-150 leading-snug mb-2.5">
                          {ev.title}
                        </h3>
                      </Link>
                      <p className="text-xs text-ink-light leading-relaxed mb-4">
                        {ev.summary}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-ink/10 text-[11px] text-ink-muted">
                      <span className="font-medium text-ink block">
                        {ev.venue}
                      </span>
                      <span className="tabular-nums">{ev.time}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
