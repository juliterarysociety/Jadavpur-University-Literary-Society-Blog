import { Link } from "react-router-dom";
import { siteConfig } from "../data/siteConfig";

export function Footer() {
  return (
    <footer className="border-t border-ink/12 bg-paper py-14 lg:py-16 mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5 flex flex-col gap-3">
            <span className="font-serif text-xl font-medium tracking-[0.22em] text-ink uppercase">
              {siteConfig.brandMark}
            </span>
            <p className="text-sm text-ink-light max-w-sm leading-relaxed">
              {siteConfig.footer.description}
            </p>
          </div>
          
          <div className="md:col-span-4 flex flex-col gap-3">
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
              Index & Departments
            </h4>
            <nav className="grid grid-cols-2 gap-x-6 gap-y-2">
              {siteConfig.navigation.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.path}
                  className="text-xs text-ink-light hover:text-accent transition-colors duration-150"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
              Editorial Desk
            </h4>
            <nav className="flex flex-col gap-2">
              {siteConfig.socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-ink-light hover:text-accent transition-colors duration-150"
                >
                  {social.platform} &middot; {social.handle}
                </a>
              ))}
            </nav>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-ink/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-ink-muted tabular-nums">
            {siteConfig.footer.copyrightNotice}
          </p>
          <p className="text-xs text-ink-muted max-w-md sm:text-right">
            {siteConfig.footer.creditsNotice}
          </p>
        </div>
      </div>
    </footer>
  );
}
