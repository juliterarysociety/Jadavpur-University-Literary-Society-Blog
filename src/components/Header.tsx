import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { SearchOverlay } from "./SearchOverlay";
import { MenuOverlay } from "./MenuOverlay";
import { siteConfig } from "../data/siteConfig";
import { useTheme } from "../context/ThemeContext";

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  // Global keyboard shortcut: press "/" to open the Archival Search Overlay
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const isInput =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);

      if (e.key === "/" && !isInput && !isSearchOpen && !isMenuOpen) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSearchOpen, isMenuOpen]);

  const primaryDepartments = [
    { name: "Issues", path: "/issues" },
    { name: "Poetry", path: "/category/poetry" },
    { name: "Prose", path: "/category/prose" },
    { name: "Artwork", path: "/artwork" },
    { name: "Chronicle", path: "/chronicle" },
  ];

  const isDepartmentActive = (path: string) => {
    if (path === "/issues") {
      return location.pathname.startsWith("/issues");
    }
    return location.pathname === path;
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-paper/95 backdrop-blur-xs border-b border-ink/12 transition-colors duration-200">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Zone 1: Left — Masthead Identity */}
          <div className="flex items-center gap-4">
            <Link to="/" className="group inline-flex items-baseline gap-3">
              <span className="font-serif text-xl sm:text-2xl font-medium tracking-[0.22em] text-ink uppercase">
                {siteConfig.brandMark}
              </span>
              <span className="hidden xl:inline-block border-l border-ink/15 pl-3 text-[11px] font-normal uppercase tracking-[0.15em] text-ink-muted">
                Jadavpur University Arts &amp; Literary Society
              </span>
            </Link>
          </div>

          {/* Zone 2: Center — Single-Line Periodical Section Links */}
          <nav
            aria-label="Primary Periodical Sections"
            className="hidden md:flex items-center gap-7 lg:gap-8"
          >
            {primaryDepartments.map((dept) => {
              const active = isDepartmentActive(dept.path);
              return (
                <Link
                  key={dept.name}
                  to={dept.path}
                  className={`relative py-1 text-xs uppercase tracking-[0.16em] whitespace-nowrap transition-colors duration-150 ${
                    active
                      ? "text-accent font-semibold"
                      : "text-ink-light hover:text-ink font-medium"
                  }`}
                >
                  {dept.name}
                  {active && (
                    <span className="absolute inset-x-0 -bottom-[19px] h-[1.5px] bg-accent" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: Right — Quiet Typographic Utilities */}
          <div className="flex items-center gap-5 sm:gap-6">
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search Archive (Shortcut /)"
              className="text-xs font-medium uppercase tracking-[0.16em] text-ink-light hover:text-accent transition-colors duration-150 cursor-pointer whitespace-nowrap"
            >
              Search
            </button>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle reading atmosphere"
              className="hidden sm:inline-block text-xs font-medium uppercase tracking-[0.16em] text-ink-muted hover:text-ink transition-colors duration-150 cursor-pointer whitespace-nowrap"
            >
              {theme === "daylight" ? "Evening" : "Daylight"}
            </button>

            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open Complete Periodical Index"
              className="text-xs font-medium uppercase tracking-[0.16em] text-ink hover:text-accent transition-colors duration-150 cursor-pointer whitespace-nowrap"
            >
              Index
            </button>
          </div>
        </div>
      </header>

      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
