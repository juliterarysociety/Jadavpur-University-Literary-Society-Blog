import { motion, AnimatePresence } from "motion/react";
import { Search, X, ArrowUpRight } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { articles } from "../data/articles";
import { contributors } from "../data/authors";
import { issues } from "../data/issues";
import { chronicleEvents } from "../data/chronicle";
import { siteConfig } from "../data/siteConfig";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

type SearchFacet =
  | "all"
  | "poetry"
  | "prose"
  | "reviews"
  | "contributors"
  | "issues"
  | "chronicle";

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const [activeFacet, setActiveFacet] = useState<SearchFacet>("all");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setQuery("");
      setActiveFacet("all");
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const normalizedQuery = query.trim().toLowerCase();

  // Search across articles (including title, excerpt, author, tags, issue, and full text blocks)
  const matchingArticles = useMemo(() => {
    const base = articles.filter((a) => {
      if (activeFacet === "poetry" && !a.tags.some((t) => t.toLowerCase() === "poetry")) {
        return false;
      }
      if (
        activeFacet === "prose" &&
        !a.tags.some((t) => ["prose", "fiction", "essays"].includes(t.toLowerCase()))
      ) {
        return false;
      }
      if (
        activeFacet === "reviews" &&
        !a.tags.some((t) => ["reviews", "opinion", "literary criticism"].includes(t.toLowerCase()))
      ) {
        return false;
      }
      if (["contributors", "issues", "chronicle"].includes(activeFacet)) {
        return false;
      }

      if (!normalizedQuery) return true;

      const inHeader =
        a.title.toLowerCase().includes(normalizedQuery) ||
        a.excerpt.toLowerCase().includes(normalizedQuery) ||
        a.author.name.toLowerCase().includes(normalizedQuery) ||
        (a.issueLabel && a.issueLabel.toLowerCase().includes(normalizedQuery)) ||
        (a.doiOrAccession && a.doiOrAccession.toLowerCase().includes(normalizedQuery)) ||
        a.tags.some((t) => t.toLowerCase().includes(normalizedQuery));

      if (inHeader) return true;

      const inAnnotations = a.annotations?.some(
        (ann) =>
          ann.label.toLowerCase().includes(normalizedQuery) ||
          ann.text.toLowerCase().includes(normalizedQuery)
      );
      if (inAnnotations) return true;

      const inBlocks = a.contentBlocks?.some((b) => {
        if (b.type === "paragraph" || b.type === "heading" || b.type === "callout") {
          return b.text.toLowerCase().includes(normalizedQuery);
        }
        if (b.type === "quote") {
          return b.quote.toLowerCase().includes(normalizedQuery);
        }
        if (b.type === "poetry") {
          return (
            (b.title && b.title.toLowerCase().includes(normalizedQuery)) ||
            b.stanzas.some((st) =>
              st.some((line) =>
                (typeof line === "string" ? line : line.text)
                  .toLowerCase()
                  .includes(normalizedQuery)
              )
            )
          );
        }
        if (b.type === "translation") {
          return (
            (b.title && b.title.toLowerCase().includes(normalizedQuery)) ||
            b.originalAuthor.toLowerCase().includes(normalizedQuery) ||
            b.stanzas.some(
              (st) =>
                st.english.some((l) => l.toLowerCase().includes(normalizedQuery)) ||
                st.original.some((l) => l.toLowerCase().includes(normalizedQuery))
            )
          );
        }
        return false;
      });

      return Boolean(inBlocks);
    });

    return normalizedQuery ? base : base.slice(0, 4);
  }, [normalizedQuery, activeFacet]);

  const matchingContributors = useMemo(() => {
    if (!["all", "contributors"].includes(activeFacet)) return [];
    if (!normalizedQuery && activeFacet !== "contributors") return [];

    return contributors.filter((c) => {
      if (!normalizedQuery) return true;
      return (
        c.name.toLowerCase().includes(normalizedQuery) ||
        (c.department && c.department.toLowerCase().includes(normalizedQuery)) ||
        c.bio.toLowerCase().includes(normalizedQuery) ||
        (c.disciplines &&
          c.disciplines.some((d) => d.toLowerCase().includes(normalizedQuery)))
      );
    });
  }, [normalizedQuery, activeFacet]);

  const matchingIssues = useMemo(() => {
    if (!["all", "issues"].includes(activeFacet)) return [];
    if (!normalizedQuery && activeFacet !== "issues") return [];

    return issues.filter((iss) => {
      if (!normalizedQuery) return true;
      return (
        iss.title.toLowerCase().includes(normalizedQuery) ||
        iss.subtitle.toLowerCase().includes(normalizedQuery) ||
        iss.volume.toLowerCase().includes(normalizedQuery) ||
        iss.season.toLowerCase().includes(normalizedQuery) ||
        iss.editorsSignoff.toLowerCase().includes(normalizedQuery)
      );
    });
  }, [normalizedQuery, activeFacet]);

  const matchingEvents = useMemo(() => {
    if (!["all", "chronicle"].includes(activeFacet)) return [];
    if (!normalizedQuery && activeFacet !== "chronicle") return [];

    return chronicleEvents.filter((ev) => {
      if (!normalizedQuery) return true;
      return (
        ev.title.toLowerCase().includes(normalizedQuery) ||
        ev.summary.toLowerCase().includes(normalizedQuery) ||
        ev.venue.toLowerCase().includes(normalizedQuery) ||
        ev.category.toLowerCase().includes(normalizedQuery) ||
        (ev.speakers &&
          ev.speakers.some((s) => s.toLowerCase().includes(normalizedQuery)))
      );
    });
  }, [normalizedQuery, activeFacet]);

  const totalResults =
    matchingArticles.length +
    matchingContributors.length +
    matchingIssues.length +
    matchingEvents.length;

  const facets: { label: string; value: SearchFacet }[] = [
    { label: "All Archive", value: "all" },
    { label: "Poetry", value: "poetry" },
    { label: "Prose", value: "prose" },
    { label: "Reviews & Essays", value: "reviews" },
    { label: "Contributors", value: "contributors" },
    { label: "Issues", value: "issues" },
    { label: "Chronicle", value: "chronicle" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.16 }}
          className="fixed inset-0 z-[100] bg-paper/98 backdrop-blur-md flex flex-col"
        >
          {/* Top Bar */}
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between border-b border-ink/12">
            <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.16em] text-ink-muted tabular-nums">
              <span className="text-accent font-semibold">JUALS Archival Index</span>
              <span>&middot;</span>
              <span>Full-Text &amp; Dossier Search</span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 border border-ink/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-light hover:border-ink hover:text-ink transition-colors duration-150"
              aria-label="Close search"
            >
              <span>Close</span>
              <X className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 pb-24">
            <div className="mx-auto max-w-4xl pt-10">
              {/* Search Input */}
              <div className="relative">
                <Search className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-6 text-ink-muted" />
                <input
                  type="text"
                  placeholder="Search poems, stories, marginalia, contributors, or campus venues..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  autoFocus
                  className="w-full bg-transparent border-b-2 border-ink/20 py-4 pl-10 pr-16 text-2xl sm:text-3xl font-serif text-ink placeholder:text-ink/30 focus:border-accent focus:outline-none transition-colors duration-150"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-muted hover:text-accent"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Curated Quick-Queries when input is empty */}
              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
                  Archival Index Terms:
                </span>
                {siteConfig.colophon.searchCuratedQueries.map((term) => (
                  <button
                    key={term}
                    type="button"
                    onClick={() => setQuery(term)}
                    className={`font-serif italic transition-colors duration-150 cursor-pointer ${
                      query.toLowerCase() === term.toLowerCase()
                        ? "text-accent underline underline-offset-4"
                        : "text-ink-light hover:text-accent"
                    }`}
                  >
                    {term}
                  </button>
                ))}
              </div>

              {/* Genre & Department Facet Bar */}
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-b border-ink/12 pb-3">
                <div className="flex flex-wrap items-center gap-5">
                  {facets.map((facet) => {
                    const active = activeFacet === facet.value;
                    return (
                      <button
                        key={facet.value}
                        type="button"
                        onClick={() => setActiveFacet(facet.value)}
                        className={`text-xs uppercase tracking-[0.15em] transition-colors duration-150 cursor-pointer ${
                          active
                            ? "text-accent font-semibold underline decoration-2 underline-offset-[14px]"
                            : "text-ink-muted hover:text-ink font-medium"
                        }`}
                      >
                        {facet.label}
                      </button>
                    );
                  })}
                </div>
                <span className="text-[11px] uppercase tracking-[0.14em] text-ink-muted tabular-nums">
                  {totalResults} {totalResults === 1 ? "Entry" : "Entries"}
                </span>
              </div>

              {normalizedQuery.length > 0 && totalResults === 0 && (
                <div className="py-14 text-center border-b border-ink/10">
                  <p className="font-serif text-xl text-ink">
                    No archival entries match &ldquo;{query}&rdquo; in this folio facet.
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.15em] text-ink-muted">
                    Try switching to &ldquo;All Archive&rdquo; or selecting one of the index terms above.
                  </p>
                </div>
              )}

              {/* Matching Seasonal Issues */}
              {matchingIssues.length > 0 && (
                <div className="mt-10">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted mb-3 tabular-nums">
                    Seasonal Issues &amp; Folios ({matchingIssues.length})
                  </div>
                  <div className="divide-y divide-ink/10 border-y border-ink/12">
                    {matchingIssues.map((iss) => (
                      <div key={iss.id} className="py-4">
                        <Link
                          to={`/issues/${iss.slug}`}
                          onClick={onClose}
                          className="group flex items-baseline justify-between gap-4"
                        >
                          <div>
                            <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent tabular-nums">
                              {iss.volume} &middot; {iss.issueNumber} &middot; {iss.season}
                            </div>
                            <h3 className="font-serif text-xl text-ink group-hover:text-accent transition-colors duration-150 mt-0.5">
                              {iss.title}
                            </h3>
                            <p className="text-xs text-ink-light mt-1 line-clamp-1">
                              {iss.subtitle}
                            </p>
                          </div>
                          <span className="text-[11px] uppercase tracking-[0.14em] text-accent font-semibold shrink-0">
                            Open Folio &rarr;
                          </span>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Matching Contributors */}
              {matchingContributors.length > 0 && (
                <div className="mt-10">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted mb-3 tabular-nums">
                    Contributors &amp; Artists ({matchingContributors.length})
                  </div>
                  <div className="divide-y divide-ink/10 border-y border-ink/12">
                    {matchingContributors.map((person) => (
                      <div key={person.id} className="py-4">
                        <Link
                          to={`/contributors/${person.slug}`}
                          onClick={onClose}
                          className="group flex items-baseline justify-between gap-4"
                        >
                          <div>
                            <h3 className="font-serif text-xl text-ink group-hover:text-accent transition-colors duration-150">
                              {person.name}
                            </h3>
                            <p className="text-xs text-ink-muted mt-0.5">
                              {person.department} &middot;{" "}
                              {person.disciplines?.join(", ")}
                            </p>
                          </div>
                          <span className="text-[11px] uppercase tracking-[0.14em] text-accent font-semibold shrink-0">
                            Dossier &rarr;
                          </span>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Matching Published Writings */}
              {matchingArticles.length > 0 && (
                <div className="mt-10">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted mb-3 tabular-nums">
                    {normalizedQuery
                      ? `Published Writings (${matchingArticles.length})`
                      : "Featured Archival Writings"}
                  </div>
                  <div className="divide-y divide-ink/10 border-y border-ink/12">
                    {matchingArticles.map((article) => (
                      <div key={article.id} className="py-5">
                        <Link
                          to={`/post/${article.slug}`}
                          onClick={onClose}
                          className="group block"
                        >
                          <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted mb-1.5 tabular-nums">
                            <span className="text-accent font-semibold">
                              {article.tags[0]}
                            </span>
                            <span className="mx-2">&middot;</span>
                            <span>{article.author.name}</span>
                            {article.issueLabel && (
                              <>
                                <span className="mx-2">&middot;</span>
                                <span>{article.issueLabel}</span>
                              </>
                            )}
                            {article.pages && (
                              <>
                                <span className="mx-2">&middot;</span>
                                <span>{article.pages}</span>
                              </>
                            )}
                          </div>
                          <h3 className="font-serif text-2xl text-ink group-hover:text-accent transition-colors duration-150 mb-1.5">
                            {article.title}
                          </h3>
                          <p className="text-sm text-ink-light line-clamp-2 leading-relaxed">
                            {article.excerpt}
                          </p>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Matching Campus Chronicle Dispatches */}
              {matchingEvents.length > 0 && (
                <div className="mt-10">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted mb-3 tabular-nums">
                    Campus Literary Chronicle ({matchingEvents.length})
                  </div>
                  <div className="divide-y divide-ink/10 border-y border-ink/12">
                    {matchingEvents.map((ev) => (
                      <div key={ev.id} className="py-4">
                        <Link
                          to="/chronicle"
                          onClick={onClose}
                          className="group flex items-baseline justify-between gap-4"
                        >
                          <div>
                            <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-muted tabular-nums">
                              <span className="text-accent">{ev.code}</span> &middot;{" "}
                              {ev.category} &middot; {ev.date} &middot; {ev.venue}
                            </div>
                            <h3 className="font-serif text-lg text-ink group-hover:text-accent transition-colors duration-150 mt-0.5">
                              {ev.title}
                            </h3>
                          </div>
                          <ArrowUpRight className="h-4 w-4 text-ink-muted group-hover:text-accent shrink-0" />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
