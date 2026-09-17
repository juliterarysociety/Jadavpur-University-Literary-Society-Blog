import { Link } from "react-router-dom";
import { siteConfig } from "../data/siteConfig";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper py-12 mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <span className="font-serif text-xl font-semibold tracking-wide uppercase">{siteConfig.brandMark}</span>
            <p className="text-sm text-ink-light max-w-xs">
              {siteConfig.footer.description}
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-light">Sections</h4>
            <nav className="grid grid-cols-2 gap-x-6 gap-y-2">
              {siteConfig.navigation.map((link, idx) => (
                <Link key={idx} to={link.path} className="text-sm hover:text-accent transition-colors">
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-light">Connect</h4>
            <nav className="flex flex-col gap-2">
              {siteConfig.socialLinks.map((social, idx) => (
                <a key={idx} href={social.url} target="_blank" rel="noreferrer" className="text-sm hover:text-accent transition-colors">
                  {social.platform}
                </a>
              ))}
            </nav>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink/5 pt-8 sm:flex-row text-center sm:text-left">
          <p className="text-xs text-ink-light">
            {siteConfig.footer.copyrightNotice}
          </p>
          <p className="text-xs text-ink-light max-w-md sm:text-right">
            {siteConfig.footer.creditsNotice}
          </p>
        </div>
      </div>
    </footer>
  );
}
