import { motion, AnimatePresence } from "motion/react";
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, Info } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { PhotoItem } from "../types";

interface PlateLightboxProps {
  plates: PhotoItem[];
  selectedIndex: number | null;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export function PlateLightbox({
  plates,
  selectedIndex,
  onClose,
  onSelectIndex,
}: PlateLightboxProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [showDossier, setShowDossier] = useState(true);

  const isOpen = selectedIndex !== null && Boolean(plates[selectedIndex]);
  const currentPlate = selectedIndex !== null ? plates[selectedIndex] : null;

  useEffect(() => {
    setIsZoomed(false);
  }, [selectedIndex]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || selectedIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        onSelectIndex((selectedIndex - 1 + plates.length) % plates.length);
      }
      if (e.key === "ArrowRight") {
        onSelectIndex((selectedIndex + 1) % plates.length);
      }
      if (e.key === "z" || e.key === "Z") {
        setIsZoomed((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selectedIndex, plates.length, onClose, onSelectIndex]);

  if (!currentPlate || selectedIndex === null) return null;

  const formattedNumber =
    selectedIndex + 1 < 10 ? `0${selectedIndex + 1}` : `${selectedIndex + 1}`;
  const formattedTotal =
    plates.length < 10 ? `0${plates.length}` : `${plates.length}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[110] flex flex-col bg-[#0F0E0D]/98 text-[#EAE6DF] backdrop-blur-md"
        >
          {/* Museum Inspection Top Bar */}
          <div className="flex h-14 shrink-0 items-center justify-between border-b border-white/12 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-[#A6A198] tabular-nums">
              <span className="text-[#D46A5E] font-semibold">
                Plate {formattedNumber} / {formattedTotal}
              </span>
              {currentPlate.accessionId && (
                <>
                  <span className="text-white/20">&middot;</span>
                  <span className="hidden sm:inline">
                    Accession {currentPlate.accessionId}
                  </span>
                </>
              )}
              {currentPlate.medium && (
                <>
                  <span className="hidden md:inline text-white/20">&middot;</span>
                  <span className="hidden md:inline text-[#EAE6DF]/80">
                    {currentPlate.medium}
                  </span>
                </>
              )}
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() => setIsZoomed((prev) => !prev)}
                className="inline-flex items-center gap-1.5 border border-white/15 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#EAE6DF] hover:border-[#D46A5E] hover:text-[#D46A5E] transition-colors duration-150"
              >
                {isZoomed ? (
                  <>
                    <ZoomOut className="h-3.5 w-3.5" />
                    <span>1.0× Fit</span>
                  </>
                ) : (
                  <>
                    <ZoomIn className="h-3.5 w-3.5" />
                    <span>1.75× Detail</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => setShowDossier((prev) => !prev)}
                className={`inline-flex items-center gap-1.5 border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors duration-150 ${
                  showDossier
                    ? "border-[#D46A5E] bg-[#D46A5E]/15 text-[#EAE6DF]"
                    : "border-white/15 text-[#A6A198] hover:text-[#EAE6DF]"
                }`}
              >
                <Info className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Archival Record</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-8 w-8 items-center justify-center border border-white/15 text-[#A6A198] hover:border-white/40 hover:text-white transition-colors duration-150"
                aria-label="Close plate viewer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Main Inspection Stage + Archival Dossier Sidebar */}
          <div className="flex flex-1 min-h-0 flex-col lg:flex-row">
            {/* Image Canvas */}
            <div
              className="relative flex-1 overflow-auto flex items-center justify-center p-4 sm:p-8 select-none"
              onClick={() => setIsZoomed((prev) => !prev)}
            >
              {/* Previous Plate Button */}
              {plates.length > 1 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectIndex(
                      (selectedIndex - 1 + plates.length) % plates.length
                    );
                  }}
                  className="fixed lg:absolute left-4 top-1/2 -translate-y-1/2 z-20 inline-flex h-10 w-10 items-center justify-center border border-white/15 bg-[#141312]/90 text-[#EAE6DF] hover:border-[#D46A5E] hover:text-[#D46A5E] transition-colors duration-150"
                  aria-label="Previous plate"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
              )}

              <motion.img
                key={currentPlate.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{
                  opacity: 1,
                  scale: isZoomed ? 1.75 : 1,
                }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                src={currentPlate.src}
                alt={currentPlate.alt}
                referrerPolicy="no-referrer"
                className={`max-h-[72vh] w-auto object-contain border border-white/12 bg-[#181614] transition-transform ${
                  isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
                }`}
              />

              {/* Next Plate Button */}
              {plates.length > 1 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectIndex((selectedIndex + 1) % plates.length);
                  }}
                  className="fixed lg:absolute right-4 top-1/2 -translate-y-1/2 z-20 inline-flex h-10 w-10 items-center justify-center border border-white/15 bg-[#141312]/90 text-[#EAE6DF] hover:border-[#D46A5E] hover:text-[#D46A5E] transition-colors duration-150"
                  aria-label="Next plate"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              )}
            </div>

            {/* Museum Accession Dossier Panel */}
            {showDossier && (
              <aside className="w-full lg:w-96 shrink-0 border-t lg:border-t-0 lg:border-l border-white/12 bg-[#141312] overflow-y-auto p-6 sm:p-7 flex flex-col justify-between">
                <div className="space-y-5">
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D46A5E] mb-1.5 tabular-nums">
                      {currentPlate.accessionId || `JUALS-PLT-0${selectedIndex + 1}`}
                    </div>
                    <h2 className="font-serif text-2xl font-medium text-[#EAE6DF] leading-snug">
                      {currentPlate.title}
                    </h2>
                    <p className="mt-2.5 text-sm text-[#B8B3A8] leading-relaxed">
                      {currentPlate.caption}
                    </p>
                  </div>

                  {/* Technical Specification Table */}
                  <dl className="divide-y divide-white/10 border-y border-white/12 text-xs">
                    {currentPlate.artistName && (
                      <div className="py-2.5 flex justify-between gap-4">
                        <dt className=" uppercase tracking-[0.14em] text-[10px] text-[#8C877E] shrink-0">
                          Artist / Lens
                        </dt>
                        <dd className="text-right font-medium text-[#EAE6DF]">
                          {currentPlate.artistSlug ? (
                            <Link
                              to={`/contributors/${currentPlate.artistSlug}`}
                              onClick={onClose}
                              className="underline decoration-[#D46A5E] underline-offset-4 hover:text-[#D46A5E]"
                            >
                              {currentPlate.artistName}
                            </Link>
                          ) : (
                            currentPlate.artistName
                          )}
                        </dd>
                      </div>
                    )}

                    {currentPlate.medium && (
                      <div className="py-2.5 flex justify-between gap-4">
                        <dt className="uppercase tracking-[0.14em] text-[10px] text-[#8C877E] shrink-0">
                          Medium
                        </dt>
                        <dd className="text-right font-serif italic text-[#EAE6DF]">
                          {currentPlate.medium}
                        </dd>
                      </div>
                    )}

                    {currentPlate.dimensions && (
                      <div className="py-2.5 flex justify-between gap-4">
                        <dt className="uppercase tracking-[0.14em] text-[10px] text-[#8C877E] shrink-0">
                          Dimensions
                        </dt>
                        <dd className="text-right text-[#B8B3A8] tabular-nums">
                          {currentPlate.dimensions}
                        </dd>
                      </div>
                    )}

                    {currentPlate.cameraOrProcess && (
                      <div className="py-2.5 flex justify-between gap-4">
                        <dt className="uppercase tracking-[0.14em] text-[10px] text-[#8C877E] shrink-0">
                          Process
                        </dt>
                        <dd className="text-right text-[#B8B3A8]">
                          {currentPlate.cameraOrProcess}
                        </dd>
                      </div>
                    )}

                    {currentPlate.location && (
                      <div className="py-2.5 flex justify-between gap-4">
                        <dt className="uppercase tracking-[0.14em] text-[10px] text-[#8C877E] shrink-0">
                          Provenance
                        </dt>
                        <dd className="text-right text-[#B8B3A8]">
                          {currentPlate.location} &middot; {currentPlate.date}
                        </dd>
                      </div>
                    )}

                    {currentPlate.issueSlug && (
                      <div className="py-2.5 flex justify-between gap-4">
                        <dt className="uppercase tracking-[0.14em] text-[10px] text-[#8C877E] shrink-0">
                          Periodical Folio
                        </dt>
                        <dd className="text-right">
                          <Link
                            to={`/issues/${currentPlate.issueSlug}`}
                            onClick={onClose}
                            className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#D46A5E] hover:underline tabular-nums"
                          >
                            {currentPlate.issueLabel} &rarr;
                          </Link>
                        </dd>
                      </div>
                    )}
                  </dl>

                  {currentPlate.curatorialNote && (
                    <div className="bg-white/4 border border-white/10 p-3.5">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8C877E] mb-1">
                        Curatorial Note
                      </div>
                      <p className="font-serif italic text-xs text-[#B8B3A8] leading-relaxed">
                        {currentPlate.curatorialNote}
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-[#8C877E]">
                  <span>Use ← → keys to step plates</span>
                  <span>Press Z to zoom</span>
                </div>
              </aside>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
