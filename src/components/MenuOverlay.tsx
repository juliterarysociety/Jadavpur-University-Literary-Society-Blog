import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { X, Instagram, Mail, ArrowUpRight } from "lucide-react";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  const location = useLocation();
  const currentPath = location.pathname;

  // The 8 Canonical Sections of JUALS
  const primaryGenres = [
    { name: "Poetry", path: "/category/poetry" },
    { name: "Prose", path: "/category/prose" },
    { name: "Artwork", path: "/artwork" },
    { name: "Reviews", path: "/category/reviews" },
    { name: "Opinion", path: "/category/opinion" },
  ];

  const societyPages = [
    { name: "Call for Submissions", path: "/submissions", badge: "Open" },
    { name: "About the Society", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-[90] bg-ink/30 backdrop-blur-xs"
          />

          {/* Clean Editorial Drawer */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 280 }}
            className="fixed inset-y-0 left-0 z-[100] w-full max-w-sm bg-[#FBF9F5] shadow-xl flex flex-col justify-between border-r border-ink/10"
          >
            {/* Top Bar: Minimal Brand Mark & Dismiss Button */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-ink/10">
              <div>
                <span className="font-serif text-lg font-semibold tracking-[0.2em] text-ink uppercase block leading-none">
                  JUALS
                </span>
                <span className="text-[10px] uppercase tracking-[0.14em] text-ink-light block mt-1">
                  Arts & Literary Society
                </span>
              </div>
              <button 
                onClick={onClose} 
                className="h-9 w-9 inline-flex items-center justify-center text-ink-light hover:text-ink transition-colors rounded-sm hover:bg-ink/5"
                aria-label="Close Navigation"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Navigation Body: Spaced & Uncluttered */}
            <div className="flex-1 overflow-y-auto px-6 py-8">
              {/* Primary Reading Genres */}
              <div className="space-y-1">
                <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ink/40 mb-3">
                  Index
                </div>
                
                <Link
                  to="/"
                  onClick={onClose}
                  className={`group flex items-center justify-between py-2 transition-colors ${
                    currentPath === "/" ? "text-accent" : "text-ink hover:text-accent"
                  }`}
                >
                  <span className="font-serif text-xl sm:text-2xl font-normal tracking-wide">
                    All Publications
                  </span>
                  <span className="text-xs text-ink/30 group-hover:text-accent transition-colors font-mono">
                    00
                  </span>
                </Link>

                {primaryGenres.map((genre, idx) => {
                  const isActive = currentPath === genre.path;
                  return (
                    <Link
                      key={genre.name}
                      to={genre.path}
                      onClick={onClose}
                      className={`group flex items-center justify-between py-2 transition-colors ${
                        isActive ? "text-accent" : "text-ink hover:text-accent"
                      }`}
                    >
                      <span className="font-serif text-xl sm:text-2xl font-normal tracking-wide">
                        {genre.name}
                      </span>
                      <span className="text-xs text-ink/30 group-hover:text-accent transition-colors font-mono">
                        0{idx + 1}
                      </span>
                    </Link>
                  );
                })}
              </div>

              {/* Thin hairline divider */}
              <div className="my-6 h-[1px] bg-ink/10" />

              {/* Society & Submissions */}
              <div className="space-y-2">
                <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ink/40 mb-3">
                  Society
                </div>

                {societyPages.map((page) => {
                  const isActive = currentPath === page.path;
                  return (
                    <Link
                      key={page.name}
                      to={page.path}
                      onClick={onClose}
                      className={`group flex items-center justify-between py-1.5 text-[13px] uppercase tracking-[0.14em] font-medium transition-colors ${
                        isActive ? "text-accent font-semibold" : "text-ink/75 hover:text-ink"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {page.name}
                        {page.badge && (
                          <span className="text-[9px] font-sans font-bold tracking-widest text-accent border border-accent/30 bg-accent/10 px-1.5 py-0.2 rounded-xs">
                            {page.badge}
                          </span>
                        )}
                      </span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-ink/25 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Bottom Institutional Info & Direct Email */}
            <div className="px-6 py-5 border-t border-ink/10 bg-ink/[0.02] space-y-2">
              <a 
                href="mailto:ju.literarysociety@gmail.com" 
                className="group flex items-center gap-2 text-xs font-medium text-ink hover:text-accent transition-colors"
                title="Email JUALS Editorial Desk"
              >
                <Mail className="h-3.5 w-3.5 text-accent" />
                <span className="font-sans">ju.literarysociety@gmail.com</span>
              </a>

              <a 
                href="https://www.instagram.com/juliterarysociety/" 
                target="_blank" 
                rel="noreferrer" 
                className="group flex items-center gap-2 text-xs text-ink-light hover:text-accent transition-colors"
              >
                <Instagram className="h-3.5 w-3.5" />
                <span>@juliterarysociety</span>
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
