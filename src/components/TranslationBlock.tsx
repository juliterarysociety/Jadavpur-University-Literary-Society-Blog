import { useState } from "react";
import type { TranslationStanza } from "../types";

type TranslationViewMode = "side-by-side" | "stacked" | "original" | "english";

interface TranslationBlockProps {
  title?: string;
  originalLanguage: string;
  originalAuthor: string;
  translatorName: string;
  historicalNote?: string;
  stanzas: TranslationStanza[];
}

export function TranslationBlock({
  title,
  originalLanguage,
  originalAuthor,
  translatorName,
  historicalNote,
  stanzas,
}: TranslationBlockProps) {
  const [viewMode, setViewMode] = useState<TranslationViewMode>("side-by-side");
  const [showTransliteration, setShowTransliteration] = useState<boolean>(false);

  const hasTransliteration = stanzas.some(
    (s) => s.transliteration && s.transliteration.length > 0
  );

  return (
    <section className="not-prose my-12 border-y border-ink/15 bg-paper-muted/40 py-8 px-5 sm:px-8 print:break-inside-avoid">
      {/* Top Attribution & Mode Bar */}
      <div className="border-b border-ink/12 pb-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
              Bilingual Folio &middot; {originalLanguage} &amp; English
            </div>
            {title && (
              <h3 className="mt-1 font-serif text-xl sm:text-2xl font-medium text-ink">
                {title}
              </h3>
            )}
            <p className="mt-1 text-xs text-ink-muted">
              Original by <span className="font-medium text-ink">{originalAuthor}</span>{" "}
              &middot; {translatorName}
            </p>
          </div>

          {/* Interactive View Switcher (Hidden in Print) */}
          <div className="flex flex-wrap items-center gap-2 print:hidden">
            <div
              role="group"
              aria-label="Translation display mode"
              className="inline-flex border border-ink/15 bg-paper p-0.5"
            >
              {(
                [
                  { id: "side-by-side", label: "Side-by-Side" },
                  { id: "stacked", label: "Stacked" },
                  { id: "original", label: "Original" },
                  { id: "english", label: "English" },
                ] as const
              ).map((tab) => {
                const active = viewMode === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setViewMode(tab.id)}
                    className={`px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] whitespace-nowrap transition-colors duration-150 cursor-pointer ${
                      active
                        ? "bg-ink text-paper"
                        : "text-ink-muted hover:text-ink"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {hasTransliteration && viewMode !== "english" && (
              <button
                type="button"
                onClick={() => setShowTransliteration((prev) => !prev)}
                className={`border px-2.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] whitespace-nowrap transition-colors duration-150 cursor-pointer ${
                  showTransliteration
                    ? "border-accent bg-accent-soft text-accent"
                    : "border-ink/15 bg-paper text-ink-muted hover:text-ink"
                }`}
              >
                {showTransliteration ? "Hide Phonetics" : "Roman Transliteration"}
              </button>
            )}
          </div>
        </div>

        {historicalNote && (
          <p className="mt-3 font-serif text-sm italic text-ink-light leading-relaxed">
            {historicalNote}
          </p>
        )}
      </div>

      {/* Stanza Rendering */}
      <div className="mt-7 space-y-8">
        {stanzas.map((stanza, sIdx) => (
          <div
            key={sIdx}
            className={
              sIdx > 0 ? "border-t border-ink/10 pt-7" : undefined
            }
          >
            {viewMode === "side-by-side" && (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                {/* Original Vernacular Column */}
                <div className="md:border-r md:border-ink/10 md:pr-6">
                  <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                    {originalLanguage}
                  </div>
                  <div className="space-y-1.5 font-serif text-lg leading-[1.85] text-ink">
                    {stanza.original.map((line, lIdx) => (
                      <p key={lIdx} className="pl-4 -indent-4">
                        {line}
                      </p>
                    ))}
                  </div>
                  {showTransliteration && stanza.transliteration && (
                    <div className="mt-4 border-t border-ink/8 pt-3 space-y-1 font-serif text-sm italic text-ink-muted leading-relaxed">
                      {stanza.transliteration.map((tLine, tIdx) => (
                        <p key={tIdx}>{tLine}</p>
                      ))}
                    </div>
                  )}
                </div>

                {/* English Translation Column */}
                <div>
                  <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
                    English Translation
                  </div>
                  <div className="space-y-1.5 font-serif text-lg leading-[1.85] text-ink">
                    {stanza.english.map((line, lIdx) => (
                      <p key={lIdx} className="pl-4 -indent-4">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {viewMode === "stacked" && (
              <div className="space-y-5">
                {stanza.original.map((origLine, lIdx) => (
                  <div
                    key={lIdx}
                    className="border-b border-ink/8 pb-3.5 last:border-b-0 last:pb-0"
                  >
                    <p className="font-serif text-lg text-ink leading-relaxed">
                      {origLine}
                    </p>
                    {showTransliteration &&
                      stanza.transliteration?.[lIdx] && (
                        <p className="mt-0.5 font-serif text-xs italic text-ink-muted">
                          {stanza.transliteration[lIdx]}
                        </p>
                      )}
                    {stanza.english[lIdx] && (
                      <p className="mt-1.5 font-serif text-base sm:text-lg italic text-ink-light leading-relaxed">
                        {stanza.english[lIdx]}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {viewMode === "original" && (
              <div>
                <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                  {originalLanguage}
                </div>
                <div className="space-y-1.5 font-serif text-lg sm:text-xl leading-[1.9] text-ink">
                  {stanza.original.map((line, lIdx) => (
                    <p key={lIdx} className="pl-4 -indent-4">
                      {line}
                    </p>
                  ))}
                </div>
                {showTransliteration && stanza.transliteration && (
                  <div className="mt-4 border-t border-ink/10 pt-3 space-y-1 font-serif text-sm italic text-ink-muted leading-relaxed">
                    {stanza.transliteration.map((tLine, tIdx) => (
                      <p key={tIdx}>{tLine}</p>
                    ))}
                  </div>
                )}
              </div>
            )}

            {viewMode === "english" && (
              <div>
                <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
                  English Translation
                </div>
                <div className="space-y-1.5 font-serif text-lg sm:text-xl leading-[1.9] text-ink">
                  {stanza.english.map((line, lIdx) => (
                    <p key={lIdx} className="pl-4 -indent-4">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Translator Gloss for Stanza */}
            {stanza.note && (
              <div className="mt-4 border-t border-ink/8 pt-2.5 text-xs text-ink-muted">
                <span className="font-semibold uppercase tracking-[0.14em] text-accent mr-2">
                  Translator’s Gloss:
                </span>
                <span className="font-serif italic text-ink-light">
                  {stanza.note}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
