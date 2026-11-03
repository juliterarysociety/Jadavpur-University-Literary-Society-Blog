import { Link, useLocation } from "react-router-dom";
import { Search, Menu, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { SearchOverlay } from "./SearchOverlay";
import { MenuOverlay } from "./MenuOverlay";
import { siteConfig } from "../data/siteConfig";
import { currentIssue } from "../data/issues";
import { useTheme } from "../context/ThemeContext";

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const { theme, toggleTheme } = useTheme();

  // Support "/" or Cmd/Ctrl+K to open the live archival search folio
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const isInput =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      } else if (!isInput && e.key === "/" && !isSearchOpen && !isMenuOpen) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSearchOpen, isMenuOpen]);

  const navItems = siteConfig.colophon.primaryNavLinks;

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-paper/95 backdrop-blur-sm border-b border-ink/12 transition-colors duration-200 print:hidden">
        {/* Top Archival Colophon Strip */}
        <div className="border-b border-ink/8 bg-paper-muted/45">
          <div className="mx-auto flex h-8 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 text-[10px] uppercase tracking-[0.16em] text-ink-muted tabular-nums">
            <div className="flex items-center gap-3 truncate">
              <span className="font-medium text-ink-light truncate">
                {siteConfig.colophon.dateline}
              </span>
              <span className="hidden md:inline text-ink/25">&middot;</span>
              <Link
                to={`/issues/${currentIssue.slug}`}
                className="hidden md:inline-flex items-center gap-1.5 text-ink-muted hover:text-accent transition-colors duration-150"
              >
                <span className="font-semibold text-accent">
                  {currentIssue.volume} &middot; {currentIssue.issueNumber}
                </span>
                <span>&mdash; {currentIssue.title}</span>
              </Link>
            </div>

            {/* Daylight Archival Paper / Evening Ink Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex items-center gap-1.5 pl-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-light hover:text-accent transition-colors duration-150 shrink-0 cursor-pointer"
              title="Switch reading atmosphere between Daylight Archival Paper and Evening Ink"
            >
              {theme === "daylight" ? (
                <>
                  <Moon className="h-3 w-3 text-accent" />
                  <span>{siteConfig.colophon.eveningLabel}</span>
                </>
              ) : (
                <>
                  <Sun className="h-3 w-3 text-accent" />
                  <span>{siteConfig.colophon.daylightLabel}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Main Streamlined 5-Link Broadsheet Masthead Bar */}
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Left: Brand Mark */}
          <Link to="/" className="group flex items-baseline gap-3 shrink-0">
            <span className="font-serif text-2xl font-medium tracking-[0.22em] text-ink uppercase group-hover:text-accent transition-colors duration-150">
              {siteConfig.brandMark}
            </span>
            <span className="hidden xl:inline-block text-[11px] uppercase tracking-[0.14em] text-ink-muted border-l border-ink/15 pl-3">
              Jadavpur University Arts &amp; Literary Society
            </span>
          </Link>

          {/* Center: 5 Streamlined Primary Links */}
          <nav
            aria-label="Primary Periodical Navigation"
            className="hidden md:flex items-center gap-7 lg:gap-9"
          >
            {navItems.map((item) => {
              const isActive =
                currentPath === item.path ||
                currentPath.startsWith(`${item.path}/`);
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative py-1 text-xs uppercase tracking-[0.16em] whitespace-nowrap transition-colors duration-150 ${
                    isActive
                      ? "text-accent font-semibold"
                      : "text-ink-light hover:text-ink font-medium"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute inset-x-0 -bottom-[19px] h-[2px] bg-accent" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right: Live Archive Search & Full Index Drawer Trigger */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search Archive"
              className="inline-flex items-center gap-2 border border-ink/12 bg-paper-muted/40 px-2.5 py-1.5 text-ink-light hover:border-ink/30 hover:text-ink transition-colors duration-150 cursor-pointer"
            >
              <Search className="h-3.5 w-3.5" />
              <span className="hidden sm:inline text-[10px] font-medium uppercase tracking-[0.16em]">
                Search
              </span>
              <kbd className="hidden lg:inline text-[10px] font-sans text-ink-muted border-l border-ink/12 pl-1.5 tabular-nums">
                /
              </kbd>
            </button>

            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open Periodical Index"
              className="inline-flex items-center gap-2 py-1.5 pl-1 text-xs font-medium uppercase tracking-[0.16em] text-ink-light hover:text-ink transition-colors duration-150 cursor-pointer"
            >
              <Menu className="h-4 w-4" />
              <span className="hidden sm:inline">Index</span>
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
