import { useState, useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { Printer } from "lucide-react";
import { articles } from "../data/articles";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { AuthorInfo } from "../components/AuthorInfo";
import { QuoteEmbed } from "../components/QuoteEmbed";
import { ImageEmbed } from "../components/ImageEmbed";
import { Gallery } from "../components/Gallery";
import { FadeImage } from "../components/FadeImage";
import { PoetryBlock } from "../components/PoetryBlock";
import { TranslationBlock } from "../components/TranslationBlock";
import { AcademicCitationBox } from "../components/AcademicCitationBox";

export function Post() {
  const { slug } = useParams<{ slug: string }>();
  const articleIndex = articles.findIndex((a) => a.slug === slug);
  const article = articleIndex >= 0 ? articles[articleIndex] : undefined;

  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeAnnotation, setActiveAnnotation] = useState<number | null>(null);

  useEffect(() => {
    setActiveAnnotation(null);
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) {
        setScrollProgress(0);
        return;
      }
      const percentage = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
      setScrollProgress(percentage);
    };

    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    updateScrollProgress();
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, [slug]);

  if (!article) {
    return <Navigate to="/" replace />;
  }

  // Sequential Folio Navigation within the same Issue (or archive fallback)
  const issuePool = article.issueSlug
    ? articles.filter((a) => a.issueSlug === article.issueSlug)
    : articles;
  const currentInPoolIndex = issuePool.findIndex((a) => a.slug === article.slug);
  const previousArticle =
    currentInPoolIndex > 0 ? issuePool[currentInPoolIndex - 1] : null;
  const nextArticle =
    currentInPoolIndex >= 0 && currentInPoolIndex < issuePool.length - 1
      ? issuePool[currentInPoolIndex + 1]
      : null;

  const annotations = article.annotations || [];
  const hasAnnotations = annotations.length > 0;

  const handleToggleAnnotation = (id: number) => {
    setActiveAnnotation((prev) => (prev === id ? null : id));
  };

  let firstParagraphRendered = false;

  return (
    <div className="flex min-h-screen flex-col bg-paper">
      {/* Top 2px Oxblood Reading Progress Hairline */}
      <div
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-ink/8 print:hidden"
      >
        <div
          className="h-full bg-accent transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="print:hidden">
        <Header />
      </div>

      <main className="flex-1">
        {/* Print-Only Institutional Masthead Banner */}
        <div className="hidden print:block mx-auto max-w-4xl px-4 pt-4 pb-4 border-b border-ink/25 text-xs uppercase tracking-[0.16em] text-ink-muted">
          <div className="flex items-center justify-between">
            <span>
              Jadavpur University Arts &amp; Literary Society (JUALS) &middot;{" "}
              {article.issueLabel || "Archival Offprint"}
            </span>
            <span>
              {article.doiOrAccession || `JUALS-${article.id}`} &middot;{" "}
              {article.pages || "pp. 1–8"}
            </span>
          </div>
        </div>

        {/* Daylight Editorial Broadsheet Header */}
        <header className="mx-auto max-w-5xl px-4 pt-12 pb-10 sm:px-6 lg:px-8 lg:pt-20">
          <div className="mb-5 flex flex-wrap items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-ink-muted tabular-nums">
            <Link
              to={`/category/${article.tags[0].toLowerCase()}`}
              className="text-accent font-semibold hover:text-ink transition-colors duration-150"
            >
              {article.tags[0]}
            </Link>
            <span>&middot;</span>
            <span>{article.date}</span>
            <span>&middot;</span>
            <span>{article.readTime}</span>
            {article.pages && (
              <>
                <span>&middot;</span>
                <span>{article.pages}</span>
              </>
            )}
            {article.issueSlug && article.issueLabel && (
              <>
                <span>&middot;</span>
                <Link
                  to={`/issues/${article.issueSlug}`}
                  className="text-ink hover:text-accent transition-colors duration-150 font-semibold"
                >
                  {article.issueLabel}
                </Link>
              </>
            )}
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-[3.5rem] font-medium leading-[1.1] tracking-tight text-ink">
            {article.title}
          </h1>

          <p className="mt-6 font-serif text-xl sm:text-2xl italic text-ink-light leading-relaxed max-w-3xl">
            {article.excerpt}
          </p>

          {/* Author & Offprint Utility Strip */}
          <div className="mt-8 py-4 border-y border-ink/12 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-ink-muted uppercase tracking-[0.14em] text-[10px]">
                By
              </span>
              <Link
                to={`/contributors/${article.author.slug}`}
                className="font-medium text-ink hover:text-accent transition-colors duration-150"
              >
                {article.author.name}
              </Link>
              {article.author.role && (
                <>
                  <span className="text-ink-muted">&middot;</span>
                  <span className="text-ink-light">{article.author.role}</span>
                </>
              )}
              {article.translator && (
                <>
                  <span className="text-ink-muted">&middot;</span>
                  <span className="text-ink-muted italic font-serif">
                    Trans. {article.translator}
                  </span>
                </>
              )}
            </div>

            <div className="flex items-center gap-4">
              {article.issueSlug ? (
                <Link
                  to={`/issues/${article.issueSlug}`}
                  className="text-[11px] uppercase tracking-[0.14em] text-accent hover:text-ink font-semibold tabular-nums transition-colors duration-150"
                >
                  {article.issueLabel} &rarr;
                </Link>
              ) : (
                <div className="text-[11px] uppercase tracking-[0.14em] text-ink-muted tabular-nums">
                  JUALS Archival Folio
                </div>
              )}

              <button
                type="button"
                onClick={() => window.print()}
                className="print:hidden inline-flex items-center gap-1.5 border border-ink/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-muted hover:border-ink hover:text-ink transition-colors duration-150 cursor-pointer"
                title="Print broadsheet offprint"
              >
                <Printer className="h-3 w-3" />
                <span>Offprint</span>
              </button>
            </div>
          </div>

          {/* Framed Cover Plate */}
          <figure className="mt-10 print:hidden">
            <div className="overflow-hidden rounded-none border border-ink/10 bg-paper-muted aspect-[16/9]">
              <FadeImage
                src={article.coverImage}
                alt={article.title}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
              />
            </div>
            <figcaption className="mt-3 flex items-baseline justify-between border-b border-ink/8 pb-2.5 text-xs text-ink-muted">
              <span className="font-serif italic text-ink-light">
                Fig. 1 &mdash; {article.title}
              </span>
              <span className="uppercase tracking-[0.14em] text-[10px] tabular-nums shrink-0 ml-4">
                Plate I &middot; {article.doiOrAccession || `JUALS-${article.id}`}
              </span>
            </figcaption>
          </figure>
        </header>

        {/* Asymmetric Reading Canvas (Primary 65ch Column + Right Margin Sidenotes Rail on Desktop) */}
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          <div
            className={
              hasAnnotations
                ? "grid grid-cols-1 lg:grid-cols-12 lg:gap-12 items-start"
                : "mx-auto max-w-[65ch]"
            }
          >
            {/* Primary 65ch Reading Column */}
            <article
              className={
                hasAnnotations
                  ? "lg:col-span-8 max-w-[65ch]"
                  : "w-full"
              }
            >
              <div className="prose prose-lg prose-stone max-w-none prose-headings:font-serif prose-headings:font-medium prose-headings:tracking-tight prose-p:leading-[1.8] prose-p:text-ink-light prose-a:text-accent prose-a:no-underline hover:prose-a:underline">
                {article.contentBlocks && article.contentBlocks.length > 0 ? (
                  article.contentBlocks.map((block, idx) => {
                    switch (block.type) {
                      case "paragraph": {
                        const isFirstParagraph = !firstParagraphRendered;
                        firstParagraphRendered = true;
                        const blockNotes = (block.annotationIds || [])
                          .map((id) => annotations.find((a) => a.number === id))
                          .filter(Boolean);
                        const activeInlineNote = blockNotes.find(
                          (n) => n && n.number === activeAnnotation
                        );

                        return (
                          <div key={idx} className="my-6">
                            <p
                              className={`m-0 ${
                                isFirstParagraph ? "editorial-dropcap" : ""
                              }`}
                            >
                              {block.text}
                              {block.annotationIds &&
                                block.annotationIds.map((noteId) => {
                                  const isSelected = activeAnnotation === noteId;
                                  return (
                                    <button
                                      key={noteId}
                                      type="button"
                                      onClick={() =>
                                        handleToggleAnnotation(noteId)
                                      }
                                      aria-expanded={isSelected}
                                      aria-label={`Toggle editorial note ${noteId}`}
                                      className={`ml-1 inline-flex items-center font-sans text-xs font-semibold tabular-nums align-super transition-colors duration-150 cursor-pointer print:text-ink ${
                                        isSelected
                                          ? "text-accent underline"
                                          : "text-accent hover:text-ink"
                                      }`}
                                    >
                                      [{noteId}]
                                    </button>
                                  );
                                })}
                            </p>

                            {/* Mobile / Tablet Inline Annotation Drawer */}
                            {activeInlineNote && (
                              <aside className="lg:hidden print:hidden not-prose mt-4 border-y border-accent/35 bg-accent-soft/50 py-4 px-4">
                                <div className="flex items-baseline justify-between gap-2">
                                  <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent tabular-nums">
                                    Marginalia [{activeInlineNote.number}] &middot;{" "}
                                    {activeInlineNote.label}
                                  </div>
                                  <button
                                    type="button"
                                    onClick={() => setActiveAnnotation(null)}
                                    className="text-[10px] uppercase tracking-[0.14em] text-ink-muted hover:text-ink cursor-pointer"
                                  >
                                    Close
                                  </button>
                                </div>
                                <p className="mt-1.5 text-xs sm:text-sm text-ink leading-relaxed">
                                  {activeInlineNote.text}
                                </p>
                                {activeInlineNote.source && (
                                  <div className="mt-2 font-serif text-xs italic text-ink-muted">
                                    Source: {activeInlineNote.source}
                                  </div>
                                )}
                              </aside>
                            )}
                          </div>
                        );
                      }

                      case "poetry": {
                        // Collect any annotations referenced inside this poem for mobile inline drawer
                        const poemNoteIds: number[] = [];
                        block.stanzas.forEach((stanza) =>
                          stanza.forEach((line) => {
                            if (
                              typeof line !== "string" &&
                              typeof line.annotationId === "number"
                            ) {
                              poemNoteIds.push(line.annotationId);
                            }
                          })
                        );
                        const activePoemNote =
                          activeAnnotation && poemNoteIds.includes(activeAnnotation)
                            ? annotations.find((a) => a.number === activeAnnotation)
                            : undefined;

                        return (
                          <div key={idx}>
                            <PoetryBlock
                              title={block.title}
                              epigraph={block.epigraph}
                              epigraphAttribution={block.epigraphAttribution}
                              stanzas={block.stanzas}
                              showLineNumbers={block.showLineNumbers}
                              footnote={block.footnote}
                              activeAnnotation={activeAnnotation}
                              onSelectAnnotation={handleToggleAnnotation}
                            />
                            {activePoemNote && (
                              <aside className="lg:hidden print:hidden not-prose -mt-6 mb-8 border-y border-accent/35 bg-accent-soft/50 py-4 px-4">
                                <div className="flex items-baseline justify-between gap-2">
                                  <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent tabular-nums">
                                    Verse Note [{activePoemNote.number}] &middot;{" "}
                                    {activePoemNote.label}
                                  </div>
                                  <button
                                    type="button"
                                    onClick={() => setActiveAnnotation(null)}
                                    className="text-[10px] uppercase tracking-[0.14em] text-ink-muted hover:text-ink cursor-pointer"
                                  >
                                    Close
                                  </button>
                                </div>
                                <p className="mt-1.5 text-xs sm:text-sm text-ink leading-relaxed">
                                  {activePoemNote.text}
                                </p>
                                {activePoemNote.source && (
                                  <div className="mt-2 font-serif text-xs italic text-ink-muted">
                                    Source: {activePoemNote.source}
                                  </div>
                                )}
                              </aside>
                            )}
                          </div>
                        );
                      }

                      case "translation":
                        return (
                          <TranslationBlock
                            key={idx}
                            title={block.title}
                            originalLanguage={block.originalLanguage}
                            originalAuthor={block.originalAuthor}
                            translatorName={block.translatorName}
                            historicalNote={block.historicalNote}
                            stanzas={block.stanzas}
                          />
                        );

                      case "heading":
                        return block.level === 3 ? (
                          <h3 key={idx} className="text-2xl mt-12 mb-4 text-ink">
                            {block.text}
                          </h3>
                        ) : (
                          <h2 key={idx} className="text-3xl mt-14 mb-6 text-ink">
                            {block.text}
                          </h2>
                        );

                      case "quote":
                        return (
                          <QuoteEmbed
                            key={idx}
                            quote={block.quote}
                            author={block.author}
                          />
                        );

                      case "image":
                        return (
                          <ImageEmbed
                            key={idx}
                            src={block.src}
                            alt={block.alt}
                            caption={block.caption}
                            size="wide"
                          />
                        );

                      case "gallery":
                        return <Gallery key={idx} images={block.images} />;

                      case "callout":
                        return (
                          <aside
                            key={idx}
                            className="my-10 border-y border-ink/15 bg-paper-muted/60 py-6 px-6 not-prose"
                          >
                            {block.title && (
                              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent mb-2">
                                {block.title}
                              </div>
                            )}
                            <p className="text-sm sm:text-base text-ink-light leading-relaxed m-0">
                              {block.text}
                            </p>
                          </aside>
                        );

                      default:
                        return null;
                    }
                  })
                ) : (
                  <p>No content has been added to this entry yet.</p>
                )}
              </div>

              {/* Consolidated Notes & Archival Sources Ledger (Visible on Mobile/Print & for Complete Reference) */}
              {hasAnnotations && (
                <section
                  aria-label="Notes and archival sources"
                  className="mt-14 border-t border-ink/15 pt-8"
                >
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted mb-5">
                    Notes &amp; Archival Apparatus
                  </div>
                  <ol className="space-y-4">
                    {annotations.map((note) => {
                      const isSelected = activeAnnotation === note.number;
                      return (
                        <li
                          key={note.number}
                          className={`border-b border-ink/8 pb-4 last:border-b-0 transition-colors duration-150 ${
                            isSelected ? "bg-accent-soft/50 p-3 -mx-3" : ""
                          }`}
                        >
                          <div className="flex items-baseline gap-2 text-xs">
                            <span className="font-semibold text-accent tabular-nums">
                              [{note.number}]
                            </span>
                            <span className="font-semibold text-ink">
                              {note.label}
                            </span>
                          </div>
                          <p className="mt-1 text-xs sm:text-sm text-ink-light leading-relaxed">
                            {note.text}
                          </p>
                          {note.source && (
                            <div className="mt-1 font-serif text-xs italic text-ink-muted">
                              {note.source}
                            </div>
                          )}
                        </li>
                      );
                    })}
                  </ol>
                </section>
              )}

              {/* Academic Citation & Offprint Box */}
              <AcademicCitationBox article={article} />

              <div className="print:hidden">
                <AuthorInfo author={article.author} />
              </div>
            </article>

            {/* Desktop Right-Margin Sidenotes Rail */}
            {hasAnnotations && (
              <aside
                aria-label="Margin sidenotes"
                className="hidden lg:block lg:col-span-4 lg:sticky lg:top-24 border-t border-ink/15 pt-5 print:hidden"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                    Scholarly Marginalia
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.14em] text-ink-muted tabular-nums">
                    {annotations.length}{" "}
                    {annotations.length === 1 ? "Gloss" : "Glosses"}
                  </span>
                </div>
                <p className="mb-5 text-xs text-ink-muted leading-relaxed">
                  Select any numbered reference <span className="text-accent font-semibold">[n]</span> in the text or inspect the editorial apparatus below.
                </p>

                <div className="divide-y divide-ink/10 border-y border-ink/12">
                  {annotations.map((note) => {
                    const isSelected = activeAnnotation === note.number;
                    return (
                      <div
                        key={note.number}
                        onClick={() => handleToggleAnnotation(note.number)}
                        className={`py-4 transition-colors duration-150 cursor-pointer ${
                          isSelected
                            ? "bg-accent-soft/70 px-3 -mx-3"
                            : "hover:bg-paper-muted/60"
                        }`}
                      >
                        <div className="flex items-baseline justify-between gap-2">
                          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent tabular-nums">
                            [{note.number}] {note.label}
                          </span>
                          {isSelected && (
                            <span className="text-[10px] uppercase tracking-[0.12em] text-ink-muted">
                              Active
                            </span>
                          )}
                        </div>
                        <p className="mt-1.5 text-xs text-ink-light leading-relaxed">
                          {note.text}
                        </p>
                        {note.source && (
                          <div className="mt-2 font-serif text-[11px] italic text-ink-muted">
                            &mdash; {note.source}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </aside>
            )}
          </div>

          {/* Sequential Issue Folio Pager (Previous / Next Work in Volume) */}
          <nav
            aria-label="Issue folio navigation"
            className="mt-16 border-t border-ink/15 pt-10 print:hidden"
          >
            <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                Sequential Reading &middot;{" "}
                {article.issueLabel || "JUALS Periodical Archive"}
              </div>
              {article.issueSlug && (
                <Link
                  to={`/issues/${article.issueSlug}`}
                  className="text-xs font-semibold uppercase tracking-[0.14em] text-accent hover:text-ink transition-colors duration-150"
                >
                  View Full Issue Table of Contents &rarr;
                </Link>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 border-y border-ink/12 divide-y md:divide-y-0 md:divide-x divide-ink/12">
              {/* Previous in Issue */}
              <div className="py-6 md:pr-8">
                {previousArticle ? (
                  <Link
                    to={`/post/${previousArticle.slug}`}
                    className="group block"
                  >
                    <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-muted group-hover:text-accent transition-colors duration-150">
                      &larr; Previous in {article.issueLabel || "Archive"}
                    </div>
                    <h3 className="mt-2 font-serif text-xl sm:text-2xl font-medium text-ink group-hover:text-accent transition-colors duration-150">
                      {previousArticle.title}
                    </h3>
                    <div className="mt-2 text-xs text-ink-muted">
                      By {previousArticle.author.name} &middot;{" "}
                      {previousArticle.tags[0]}
                    </div>
                  </Link>
                ) : (
                  <div className="text-xs text-ink-muted py-2">
                    Opening entry of {article.issueLabel || "this volume"}.
                  </div>
                )}
              </div>

              {/* Next in Issue */}
              <div className="py-6 md:pl-8 md:text-right">
                {nextArticle ? (
                  <Link
                    to={`/post/${nextArticle.slug}`}
                    className="group block"
                  >
                    <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-muted group-hover:text-accent transition-colors duration-150">
                      Next in {article.issueLabel || "Archive"} &rarr;
                    </div>
                    <h3 className="mt-2 font-serif text-xl sm:text-2xl font-medium text-ink group-hover:text-accent transition-colors duration-150">
                      {nextArticle.title}
                    </h3>
                    <div className="mt-2 text-xs text-ink-muted">
                      By {nextArticle.author.name} &middot; {nextArticle.tags[0]}
                    </div>
                  </Link>
                ) : (
                  <div className="text-xs text-ink-muted py-2">
                    Closing entry of {article.issueLabel || "this volume"}.
                  </div>
                )}
              </div>
            </div>
          </nav>
        </div>
      </main>

      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
}
