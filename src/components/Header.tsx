import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { Search, Menu, Feather } from "lucide-react";
import { useState } from "react";
import { MenuOverlay } from "./MenuOverlay";
import { SearchOverlay } from "./SearchOverlay";
import { siteConfig } from "../data/siteConfig";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const currentPath = location.pathname;

  // The 5 Core Literary Genres
  const genres = [
    { name: "Poetry", path: "/category/poetry" },
    { name: "Prose", path: "/category/prose" },
    { name: "Artwork", path: "/artwork" },
    { name: "Reviews", path: "/category/reviews" },
    { name: "Opinion", path: "/category/opinion" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-[#FBF9F5]/95 backdrop-blur-md border-b border-ink/10 transition-all">
        {/* Main Clean Editorial Bar */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 sm:h-20 items-center justify-between gap-4">
            {/* Left: Clean Menu Button + Society Subtext on desktop */}
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setIsMenuOpen(true)}
                className="inline-flex h-9 w-9 sm:h-10 sm:w-auto items-center justify-center gap-2 rounded-sm border border-ink/15 sm:px-3 text-xs font-medium uppercase tracking-wider text-ink hover:border-accent hover:text-accent transition-colors"
                aria-label="Open Navigation Menu"
              >
                <Menu className="h-4 w-4" />
                <span className="hidden sm:inline font-sans text-[11px] tracking-[0.14em]">Index</span>
              </button>
              
              <div className="hidden lg:block border-l border-ink/10 pl-3">
                <span className="text-[10px] uppercase tracking-widest text-ink/40 font-semibold block leading-none">
                  Jadavpur University
                </span>
                <span className="text-[10px] text-ink-light tracking-wider uppercase block mt-1 leading-none">
                  Kolkata
                </span>
              </div>
            </div>

            {/* Center: Authoritative Literary Brandplate */}
            <div className="flex flex-col items-center justify-center text-center">
              <Link 
                to="/" 
                className="group flex flex-col items-center"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <span className="font-serif text-2xl sm:text-3xl tracking-[0.24em] font-medium text-ink transition-colors group-hover:text-accent leading-none">
                  {siteConfig.brandMark}
                </span>
                <span className="font-serif text-[9px] sm:text-[11px] tracking-[0.16em] uppercase text-ink-light mt-1 group-hover:text-ink transition-colors leading-none">
                  Arts & Literary Society
                </span>
              </Link>
            </div>

            {/* Right: Search & Direct Action */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="h-9 w-9 sm:h-10 sm:w-10 inline-flex items-center justify-center text-ink-light hover:text-ink transition-colors rounded-sm hover:bg-ink/5"
                title="Search publications"
                aria-label="Search publications"
              >
                <Search className="h-4 w-4" />
              </button>

              <Link
                to="/submissions"
                className="inline-flex h-9 sm:h-10 items-center justify-center gap-1.5 rounded-sm bg-ink px-3 sm:px-4 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-paper hover:bg-accent transition-all shadow-xs"
                title="Submit your work to JUALS"
              >
                <Feather className="h-3 w-3 text-paper/80" />
                <span className="hidden sm:inline">Submit</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Streamlined Horizontal Genre Ribbon */}
        <div className="border-t border-ink/8 bg-[#FBF9F5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav 
              className="flex items-center justify-center gap-6 sm:gap-10 py-2.5 overflow-x-auto no-scrollbar scroll-smooth"
              aria-label="Editorial genres"
            >
              <Link
                to="/"
                className={`relative py-1 text-[11px] sm:text-[12px] font-medium uppercase tracking-[0.16em] transition-colors shrink-0 whitespace-nowrap ${
                  currentPath === "/" 
                    ? "text-accent font-semibold" 
                    : "text-ink/70 hover:text-ink"
                }`}
              >
                All Works
                {currentPath === "/" && (
                  <motion.div 
                    layoutId="header-active-tab" 
                    className="absolute -bottom-2.5 left-0 right-0 h-[2px] bg-accent" 
                  />
                )}
              </Link>

              {genres.map((tab) => {
                const isActive = currentPath === tab.path;
                return (
                  <Link
                    key={tab.name}
                    to={tab.path}
                    className={`relative py-1 text-[11px] sm:text-[12px] font-medium uppercase tracking-[0.16em] transition-colors shrink-0 whitespace-nowrap ${
                      isActive 
                        ? "text-accent font-semibold" 
                        : "text-ink/70 hover:text-ink"
                    }`}
                  >
                    {tab.name}
                    {isActive && (
                      <motion.div 
                        layoutId="header-active-tab" 
                        className="absolute -bottom-2.5 left-0 right-0 h-[2px] bg-accent" 
                      />
                    )}
                  </Link>
                );
              })}

              <div className="h-3 w-[1px] bg-ink/15 shrink-0 hidden sm:block" />

              <Link
                to="/about"
                className={`relative py-1 text-[11px] sm:text-[12px] font-medium uppercase tracking-[0.16em] transition-colors shrink-0 whitespace-nowrap hidden sm:inline-block ${
                  currentPath === "/about" 
                    ? "text-accent font-semibold" 
                    : "text-ink/50 hover:text-ink"
                }`}
              >
                About
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
