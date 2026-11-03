import { motion, AnimatePresence } from "motion/react";
import { X, ZoomIn, ZoomOut } from "lucide-react";
import { useEffect, useState } from "react";
import { FadeImage } from "./FadeImage";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  caption?: string;
}

export function Lightbox({ isOpen, onClose, src, alt, caption }: LightboxProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsZoomed(false);
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
      if (e.key === "z" || e.key === "Z") setIsZoomed((prev) => !prev);
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex flex-col bg-[#0F0E0D]/96 text-[#EAE6DF] backdrop-blur-md"
          onClick={onClose}
        >
          <div
            className="flex h-14 items-center justify-between border-b border-white/12 px-4 sm:px-8"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#A6A198]">
              Archival Plate Inspection
            </span>
            <div className="flex items-center gap-3">
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
                className="inline-flex h-8 w-8 items-center justify-center border border-white/15 text-[#A6A198] hover:text-white transition-colors"
                onClick={onClose}
                aria-label="Close lightbox"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div
            className="flex-1 overflow-auto flex flex-col items-center justify-center p-4 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              onClick={() => setIsZoomed((prev) => !prev)}
              className={isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"}
            >
              <FadeImage
                src={src}
                alt={alt}
                referrerPolicy="no-referrer"
                className={`max-h-[74vh] w-auto object-contain border border-white/12 transition-transform duration-200 ${
                  isZoomed ? "scale-150" : "scale-100"
                }`}
              />
            </div>
            {caption && (
              <div className="mt-6 max-w-2xl text-center border-t border-white/12 pt-4">
                <p className="text-[#EAE6DF]/90 font-serif text-base sm:text-lg italic leading-relaxed">
                  {caption}
                </p>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
