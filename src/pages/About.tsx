import { motion } from "motion/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { primaryAuthor } from "../data/authors";
import { siteConfig } from "../data/siteConfig";
import { FadeImage } from "../components/FadeImage";

export function About() {
  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <Header />
      <main className="flex-1">
        <article className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row gap-12 lg:gap-20 items-start"
          >
            <div className="w-full md:w-1/2">
              <div className="aspect-[4/5] overflow-hidden rounded-sm bg-ink/5 sticky top-24">
                <FadeImage 
                  src={primaryAuthor.avatar} 
                  alt={primaryAuthor.name} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="w-full md:w-1/2 flex flex-col justify-center pt-8 md:pt-0">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-ink mb-8 tracking-tight">
                {siteConfig.about.headline}
              </h1>
              <div className="prose prose-stone prose-lg prose-p:leading-relaxed prose-p:text-ink-light">
                <p className="text-2xl font-serif italic text-ink mb-8 leading-snug">
                  {siteConfig.about.introQuote}
                </p>
                {siteConfig.about.storyParagraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
              
              <div className="mt-16 pt-12 border-t border-ink/10">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-ink mb-6">Connect & Inquiries</h3>
                <div className="flex flex-col gap-4">
                  {siteConfig.about.contactEmail && (
                    <a 
                      href={`mailto:${siteConfig.about.contactEmail}`} 
                      className="text-ink-light hover:text-accent transition-colors font-medium"
                    >
                      {siteConfig.about.contactEmail}
                    </a>
                  )}
                  {siteConfig.socialLinks.map((social, idx) => (
                    <a 
                      key={idx} 
                      href={social.url} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-ink-light hover:text-accent transition-colors font-medium"
                    >
                      {social.platform}: {social.handle || social.url}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
