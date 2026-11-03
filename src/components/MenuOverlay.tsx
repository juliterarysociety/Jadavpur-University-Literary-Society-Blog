import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { X, ArrowUpRight, Sun, Moon } from "lucide-react";
import { siteConfig } from "../data/siteConfig";
import { currentIssue } from "../data/issues";
import { useTheme } from "../context/ThemeContext";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  const location = useLocation();
  const currentPath = location.pathname;
  const { theme, toggleTheme } = useTheme();

  const primaryGenres = [
    { name: "Seasonal Issues & Folios", path: "/issues" },
    { name: "Poetry & Verse Translation", path: "/category/poetry" },
    { name: "Prose & Short Fiction", path: "/category/prose" },
    { name: "Artwork & Visual Plates", path: "/artwork" },
    { name: "Reviews & Criticism", path: "/category/reviews" },
    { name: "Opinion & Cultural Dissent", path: "/category/opinion" },
  ];

  const societyPages = [
    { name: "Contributors & Artists Roster", path: "/contributors" },
    { name: "Campus Literary Chronicle", path: "/chronicle" },
    { name: "Call for Submissions", path: "/submissions" },
    { name: "About & Editorial Masthead", path: "/about" },
    { name: "Editorial Correspondence", path: "/contact" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={onClose}
            className="fixed inset-0 z-[90] bg-ink/30 backdrop-blur-xs"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-y-0 right-0 z-[100] w-full max-w-md bg-paper flex flex-col justify-between border-l border-ink/12"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 h-16 border-b border-ink/12">
              <div className="flex items-baseline gap-2.5">
                <span className="font-serif text-lg font-medium tracking-[0.22em] text-ink uppercase block leading-none">
                  {siteConfig.brandMark}
                </span>
                <span className="text-[10px] uppercase tracking-[0.16em] text-ink-muted">
                  Periodical Directory
                </span>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="h-9 w-9 inline-flex items-center justify-center text-ink-light hover:text-ink transition-colors duration-150"
                aria-label="Close Navigation"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Navigation Body */}
            <div className="flex-1 overflow-y-auto px-6 py-7 space-y-8">
              {/* Reading Atmosphere Switcher inside Drawer */}
              <div className="flex items-center justify-between border border-ink/12 bg-paper-muted/50 px-4 py-3">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
                    Reading Atmosphere
                  </div>
                  <div className="font-serif text-sm text-ink mt-0.5">
                    {theme === "daylight"
                      ? siteConfig.colophon.daylightLabel
                      : siteConfig.colophon.eveningLabel}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="inline-flex items-center gap-1.5 border border-ink/15 bg-paper px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink hover:border-accent hover:text-accent transition-colors duration-150"
                >
                  {theme === "daylight" ? (
                    <>
                      <Moon className="h-3 w-3 text-accent" />
                      <span>Switch to {siteConfig.colophon.eveningLabel}</span>
                    </>
                  ) : (
                    <>
                      <Sun className="h-3 w-3 text-accent" />
                      <span>Switch to {siteConfig.colophon.daylightLabel}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Current Issue Spotlight Card */}
              <div className="border-y border-ink/12 py-4">
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent mb-1 tabular-nums">
                  Current Folio &middot; {currentIssue.volume}, {currentIssue.issueNumber}
                </div>
                <Link
                  to={`/issues/${currentIssue.slug}`}
                  onClick={onClose}
                  className="group block"
                >
                  <h3 className="font-serif text-lg font-medium text-ink group-hover:text-accent transition-colors duration-150">
                    {currentIssue.title}
                  </h3>
                  <p className="text-xs text-ink-muted mt-1 line-clamp-2">
                    {currentIssue.subtitle}
                  </p>
                </Link>
              </div>

              {/* Primary Genres */}
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-muted mb-3">
                  Folios &amp; Departments
                </div>

                <div className="divide-y divide-ink/8 border-y border-ink/10">
                  <Link
                    to="/"
                    onClick={onClose}
                    className={`group flex items-baseline justify-between py-2.5 transition-colors duration-150 ${
                      currentPath === "/"
                        ? "text-accent"
                        : "text-ink hover:text-accent"
                    }`}
                  >
                    <span className="font-serif text-lg font-normal">
                      Front Page &amp; Complete Index
                    </span>
                    <span className="text-[11px] tabular-nums text-ink-muted group-hover:text-accent transition-colors duration-150">
                      00
                    </span>
                  </Link>

                  {primaryGenres.map((genre, idx) => {
                    const isActive =
                      currentPath === genre.path ||
                      currentPath.startsWith(`${genre.path}/`);
                    return (
                      <Link
                        key={genre.name}
                        to={genre.path}
                        onClick={onClose}
                        className={`group flex items-baseline justify-between py-2.5 transition-colors duration-150 ${
                          isActive
                            ? "text-accent"
                            : "text-ink hover:text-accent"
                        }`}
                      >
                        <span className="font-serif text-lg font-normal">
                          {genre.name}
                        </span>
                        <span className="text-[11px] tabular-nums text-ink-muted group-hover:text-accent transition-colors duration-150">
                          0{idx + 1}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Society Apparatus */}
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-muted mb-3">
                  Society, Roster &amp; Colophon
                </div>

                <div className="divide-y divide-ink/8 border-y border-ink/10">
                  {societyPages.map((page) => {
                    const isActive =
                      currentPath === page.path ||
                      currentPath.startsWith(`${page.path}/`);
                    return (
                      <Link
                        key={page.name}
                        to={page.path}
                        onClick={onClose}
                        className={`group flex items-center justify-between py-2.5 text-xs uppercase tracking-[0.14em] transition-colors duration-150 ${
                          isActive
                            ? "text-accent font-semibold"
                            : "text-ink-light hover:text-ink font-medium"
                        }`}
                      >
                        <span>{page.name}</span>
                        <ArrowUpRight className="h-3.5 w-3.5 text-ink-muted group-hover:text-accent transition-colors duration-150" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Bottom Colophon */}
            <div className="px-6 py-4 border-t border-ink/12 bg-paper-muted/50 space-y-1">
              <div className="text-[10px] uppercase tracking-[0.16em] text-ink-muted">
                Editorial Desk &middot; Jadavpur University, Kolkata
              </div>
              <a
                href={`mailto:${siteConfig.about.contactEmail}`}
                className="block text-xs font-medium text-ink hover:text-accent transition-colors duration-150"
              >
                {siteConfig.about.contactEmail}
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
