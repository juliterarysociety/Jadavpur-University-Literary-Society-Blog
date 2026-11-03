import { useState } from "react";
import { Copy, Check, Printer } from "lucide-react";
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
      // Fallback copy if clipboard permission is restricted
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
      className="my-12 border-y border-ink/15 bg-paper-muted/45 py-6 px-5 sm:px-7 print:break-inside-avoid"
    >
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ink/10 pb-4">
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

        {/* Format Switcher & Print Broadsheet Button */}
        <div className="flex flex-wrap items-center gap-2 print:hidden">
          <div
            role="group"
            aria-label="Citation format"
            className="inline-flex border border-ink/15 bg-paper p-0.5"
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
                className={`px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] whitespace-nowrap transition-colors duration-150 cursor-pointer ${
                  style === item.id
                    ? "bg-ink text-paper"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 border border-ink/15 bg-paper px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink hover:border-accent hover:text-accent transition-colors duration-150 whitespace-nowrap cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-accent" />
                <span className="text-accent">Copied</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>Copy Citation</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 border border-ink bg-ink px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-paper hover:bg-accent hover:border-accent transition-colors duration-150 whitespace-nowrap cursor-pointer"
          >
            <Printer className="h-3.5 w-3.5" />
            <span>Print Broadsheet</span>
          </button>
        </div>
      </div>

      {/* Formatted Citation Output */}
      <div className="mt-4">
        {style === "bibtex" ? (
          <pre className="overflow-x-auto bg-paper border border-ink/10 p-4 font-mono text-xs leading-relaxed text-ink-light">
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
