import type { VerseLine } from "../types";

interface PoetryBlockProps {
  title?: string;
  epigraph?: string;
  epigraphAttribution?: string;
  stanzas: Array<Array<string | VerseLine>>;
  showLineNumbers?: boolean;
  footnote?: string;
  activeAnnotation?: number | null;
  onSelectAnnotation?: (id: number) => void;
}

export function PoetryBlock({
  title,
  epigraph,
  epigraphAttribution,
  stanzas,
  showLineNumbers = true,
  footnote,
  activeAnnotation,
  onSelectAnnotation,
}: PoetryBlockProps) {
  let globalLineCounter = 0;

  const getIndentClass = (indent?: 0 | 1 | 2 | 3) => {
    switch (indent) {
      case 1:
        return "ml-6 sm:ml-10";
      case 2:
        return "ml-12 sm:ml-20";
      case 3:
        return "ml-16 sm:ml-28";
      default:
        return "";
    }
  };

  return (
    <figure className="not-prose my-12 border-y border-ink/15 bg-paper-muted/35 py-8 px-5 sm:px-10 print:break-inside-avoid">
      {/* Poem Header / Title */}
      {title && (
        <header className="mb-6 border-b border-ink/10 pb-4">
          <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent mb-1.5">
            Verse Folio
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-medium text-ink tracking-tight">
            {title}
          </h3>
        </header>
      )}

      {/* Optional Epigraph */}
      {epigraph && (
        <blockquote className="mb-8 max-w-lg font-serif text-sm sm:text-base italic text-ink-light leading-relaxed">
          <p>{epigraph}</p>
          {epigraphAttribution && (
            <footer className="mt-1 font-sans not-italic text-[11px] uppercase tracking-[0.14em] text-ink-muted">
              &mdash; {epigraphAttribution}
            </footer>
          )}
        </blockquote>
      )}

      {/* Stanzas Container */}
      <div className="space-y-7 font-serif text-lg sm:text-[1.22rem] leading-[1.85] text-ink">
        {stanzas.map((stanza, stanzaIdx) => (
          <div key={stanzaIdx} className="space-y-1">
            {stanza.map((rawLine, lineIdx) => {
              globalLineCounter += 1;
              const lineNum = globalLineCounter;
              const isNumberedLine =
                showLineNumbers && (lineNum === 1 || lineNum % 5 === 0);

              const lineObj: VerseLine =
                typeof rawLine === "string" ? { text: rawLine, indent: 0 } : rawLine;

              const isAnnotated = typeof lineObj.annotationId === "number";
              const isSelected =
                isAnnotated && activeAnnotation === lineObj.annotationId;

              return (
                <div
                  key={lineIdx}
                  className="group flex items-baseline gap-3 sm:gap-5"
                >
                  {/* Left Gutter Tabular Line Number */}
                  {showLineNumbers && (
                    <span
                      aria-hidden="true"
                      className="w-6 shrink-0 select-none text-right font-sans text-[10px] tabular-nums tracking-wider text-ink-muted/70"
                    >
                      {isNumberedLine ? lineNum : ""}
                    </span>
                  )}

                  {/* Verse Line with Hanging Indent (-indent-6 pl-6) so wrapped lines on mobile never masquerade as new verse lines */}
                  <div
                    className={`flex-1 pl-6 -indent-6 ${getIndentClass(
                      lineObj.indent
                    )} ${
                      isSelected
                        ? "bg-accent-soft/80 text-ink px-1.5 -mx-1.5 transition-colors duration-150"
                        : ""
                    }`}
                  >
                    <span>{lineObj.text}</span>
                    {isAnnotated && lineObj.annotationId !== undefined && (
                      <button
                        type="button"
                        onClick={() =>
                          onSelectAnnotation?.(lineObj.annotationId!)
                        }
                        aria-label={`View editorial note ${lineObj.annotationId}`}
                        className={`ml-1.5 inline-flex items-center font-sans text-[11px] font-semibold tabular-nums align-super transition-colors duration-150 cursor-pointer ${
                          isSelected
                            ? "text-accent underline"
                            : "text-accent hover:text-ink"
                        }`}
                      >
                        [{lineObj.annotationId}]
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Optional Compositional Footnote */}
      {footnote && (
        <figcaption className="mt-8 border-t border-ink/10 pt-3 font-serif text-xs italic text-ink-muted">
          {footnote}
        </figcaption>
      )}
    </figure>
  );
}
