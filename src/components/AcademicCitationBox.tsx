import { useState } from "react";
import type { Article } from "../types";

type CitationStyle = "mla" | "chicago" | "bibtex";

interface AcademicCitationBoxProps {
  article: Article;
}

export function AcademicCitationBox({ article }: AcademicCitationBoxProps) {
  const [style, setStyle] = useState<CitationStyle>("mla");
  const [copied, setCopied] = useState(false);

  // Format Author Name (Last, First)
  const nameParts = article.author.name.trim().split(" ");
  const lastName =
    nameParts.length > 1 ? nameParts[nameParts.length - 1] : article.author.name;
  const firstName =
    nameParts.length > 1
      ? nameParts.slice(0, nameParts.length - 1).join(" ")
      : "";
  const invertedAuthor = firstName ? `${lastName}, ${firstName}` : lastName;

  const yearMatch = article.date.match(/\b(20\d{2}|19\d{2})\b/);
  const pubYear = yearMatch ? yearMatch[1] : "2025";
  const issueVolumeText = article.issueLabel || "Vol. XIV, Issue I";
  const pageText = article.pages || "pp. 1–12";
  const accessionText = article.doiOrAccession || `JUALS-${article.id}`;

  const citations: Record<CitationStyle, string> = {
    mla: `${invertedAuthor}. "${article.title}." Jadavpur University Arts & Literary Society Periodical, ${issueVolumeText}, ${article.date}, ${pageText}. Archival Ref. ${accessionText}.`,
    chicago: `${invertedAuthor}. "${article.title}." Jadavpur University Arts & Literary Society (JUALS) (${issueVolumeText}, ${article.date}): ${pageText.replace("pp. ", "")}.`,
    bibtex: `@article{juals_${lastName.toLowerCase()}_${pubYear},
  author  = {${invertedAuthor}},
  title   = {${article.title}},
  journal = {Jadavpur University Arts \\& Literary Society Periodical},
  volume  = {${issueVolumeText}},
  year    = {${pubYear}},
  pages   = {${pageText.replace("pp. ", "")}},
  note    = {Accession: ${accessionText}}
}`,
  };

  const currentCitation = citations[style];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentCitation);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = currentCitation;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section
      aria-label="Academic citation and offprint tools"
      className="my-12 border-y border-ink/15 py-6 print:break-inside-avoid"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-ink/10 pb-4">
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
            Scholarly Offprint &amp; Bibliographic Record
          </div>
          <div className="mt-1 text-xs text-ink-muted tabular-nums">
            Accession <span className="font-medium text-ink">{accessionText}</span>
            {article.pages && (
              <>
                {" "}
                &middot; Folio <span className="font-medium text-ink">{article.pages}</span>
              </>
            )}
          </div>
        </div>

        {/* Typographic Format Switcher & Actions */}
        <div className="flex flex-wrap items-center gap-4 print:hidden">
          <div
            role="group"
            aria-label="Citation format"
            className="flex items-center gap-3.5"
          >
            {(
              [
                { id: "mla", label: "MLA 9th" },
                { id: "chicago", label: "Chicago 17th" },
                { id: "bibtex", label: "BibTeX" },
              ] as const
            ).map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setStyle(item.id)}
                className={`pb-1 text-[11px] uppercase tracking-[0.14em] whitespace-nowrap border-b-2 transition-colors duration-150 cursor-pointer ${
                  style === item.id
                    ? "border-accent text-accent font-semibold"
                    : "border-transparent text-ink-muted hover:text-ink"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <span className="text-ink/20" aria-hidden="true">
            |
          </span>

          <button
            type="button"
            onClick={handleCopy}
            className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink hover:text-accent transition-colors duration-150 whitespace-nowrap cursor-pointer"
          >
            {copied ? "Copied" : "Copy Citation"}
          </button>

          <button
            type="button"
            onClick={handlePrint}
            className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent hover:text-ink transition-colors duration-150 whitespace-nowrap cursor-pointer"
          >
            Print Offprint
          </button>
        </div>
      </div>

      {/* Formatted Citation Output */}
      <div className="mt-4">
        {style === "bibtex" ? (
          <pre className="overflow-x-auto border-l-2 border-ink/15 pl-4 py-1 font-mono text-xs leading-relaxed text-ink-light">
            {currentCitation}
          </pre>
        ) : (
          <p className="font-serif text-sm sm:text-base leading-relaxed text-ink pl-6 -indent-6">
            {currentCitation}
          </p>
        )}
      </div>
    </section>
  );
}
