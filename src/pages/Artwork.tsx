import { useState } from "react";
import { Link } from "react-router-dom";
import { ZoomIn } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { PlateLightbox } from "../components/PlateLightbox";
import { FadeImage } from "../components/FadeImage";
import { photoGallery } from "../data/photography";

export function Artwork() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [selectedIssueFilter, setSelectedIssueFilter] = useState<string>("all");
  const artworks = photoGallery;

  const filteredArtworks =
    selectedIssueFilter === "all"
      ? artworks
      : artworks.filter((item) => item.issueSlug === selectedIssueFilter);

  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <Header />
      <main className="flex-1">
        {/* Broadsheet Exhibition Header */}
        <section className="mx-auto max-w-7xl px-4 pt-12 pb-10 sm:px-6 lg:px-8 lg:pt-16 lg:pb-12 border-b border-ink/12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <div className="mb-2 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-muted">
                Visual Plates &amp; Archival Cabinet &middot; Jadavpur University
              </div>
              <h1 className="font-serif text-4xl font-medium tracking-tight text-ink sm:text-5xl">
                Artwork &amp; Visual Plates
              </h1>
              <p className="mt-3 text-base sm:text-lg text-ink-light leading-relaxed">
                Architectural monotypes, letterpress foundry specimens, woodblock prints, and 35mm darkroom studies contributed by student artists of the Jadavpur University Arts and Literary Society. Select any plate for museum inspection and accession details.
              </p>
            </div>

            {/* Issue Filter Tabs */}
            <div className="flex flex-wrap items-center gap-4 border-t lg:border-t-0 pt-4 lg:pt-0 border-ink/10">
              {[
                { label: "All Plates", value: "all" },
                { label: "Vol. XIV · Issue I", value: "vol-14-issue-1" },
                { label: "Vol. XIII · Issue II", value: "vol-13-issue-2" },
                { label: "Vol. XIII · Issue I", value: "vol-13-issue-1" },
              ].map((tab) => {
                const active = selectedIssueFilter === tab.value;
                return (
                  <button
                    key={tab.value}
                    type="button"
                    onClick={() => {
                      setSelectedIssueFilter(tab.value);
                      setSelectedIndex(null);
                    }}
                    className={`pb-1.5 text-xs uppercase tracking-[0.15em] transition-colors duration-150 tabular-nums border-b-2 ${
                      active
                        ? "border-accent text-accent font-semibold"
                        : "border-transparent text-ink-muted hover:text-ink font-medium"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Museum Plate Grid */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-12">
            {filteredArtworks.map((artwork, idx) => (
              <figure key={artwork.id} className="break-inside-avoid">
                <button
                  type="button"
                  onClick={() => setSelectedIndex(idx)}
                  className="group relative block w-full overflow-hidden rounded-none border border-ink/12 bg-paper-muted cursor-zoom-in text-left"
                >
                  <FadeImage
                    src={artwork.src}
                    alt={artwork.alt}
                    width={artwork.width}
                    height={artwork.height}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-auto object-cover transition-opacity duration-200 group-hover:opacity-90"
                  />
                  <div className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 bg-paper/95 border border-ink/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    <ZoomIn className="h-3 w-3 text-accent" />
                    <span>Inspect Plate</span>
                  </div>
                </button>
                <figcaption className="mt-3.5 border-b border-ink/10 pb-4">
                  <div className="flex items-baseline justify-between gap-3">
                    <h2 className="font-serif text-lg font-medium text-ink leading-snug">
                      {artwork.title}
                    </h2>
                    <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-accent tabular-nums shrink-0">
                      Plate {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>
                  </div>

                  {artwork.medium && (
                    <p className="text-xs font-serif italic text-ink-light mt-0.5">
                      {artwork.medium}
                      {artwork.dimensions ? ` · ${artwork.dimensions}` : ""}
                    </p>
                  )}

                  <p className="text-xs text-ink-light mt-1.5 leading-relaxed">
                    {artwork.caption}
                  </p>

                  <div className="mt-2.5 pt-2 border-t border-ink/8 flex flex-wrap items-center justify-between gap-2 text-[11px] text-ink-muted">
                    <div>
                      {artwork.artistSlug ? (
                        <Link
                          to={`/contributors/${artwork.artistSlug}`}
                          className="font-medium text-ink hover:text-accent transition-colors duration-150"
                        >
                          {artwork.artistName}
                        </Link>
                      ) : (
                        <span className="font-medium text-ink">
                          {artwork.artistName}
                        </span>
                      )}
                      {artwork.location && (
                        <span> &middot; {artwork.location}</span>
                      )}
                    </div>
                    {artwork.issueSlug && (
                      <Link
                        to={`/issues/${artwork.issueSlug}`}
                        className="text-[10px] uppercase tracking-[0.14em] text-accent font-semibold hover:text-ink transition-colors duration-150 tabular-nums"
                      >
                        {artwork.issueLabel}
                      </Link>
                    )}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      <PlateLightbox
        plates={filteredArtworks}
        selectedIndex={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        onSelectIndex={(idx) => setSelectedIndex(idx)}
      />
    </div>
  );
}

// Backward compatibility alias for /photography
export const Photography = Artwork;
