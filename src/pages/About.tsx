import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { primaryAuthor } from "../data/authors";
import { mastheadSections } from "../data/masthead";
import { siteConfig } from "../data/siteConfig";
import { FadeImage } from "../components/FadeImage";

export function About() {
  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <Header />
      <main className="flex-1">
        {/* Top Heritage & Colophon Narrative */}
        <article className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20 border-b border-ink/12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Framed Archival Plate */}
            <figure className="lg:col-span-5 lg:sticky lg:top-24">
              <div className="aspect-[4/5] overflow-hidden rounded-none border border-ink/10 bg-paper-muted">
                <FadeImage
                  src={primaryAuthor.avatar}
                  alt={primaryAuthor.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between border-b border-ink/10 pb-2.5 text-xs text-ink-muted">
                <span className="font-serif italic text-ink-light">
                  {primaryAuthor.name} &mdash; Jadavpur University, Kolkata
                </span>
                <span className="uppercase tracking-[0.14em] text-[10px] tabular-nums">
                  Plate I
                </span>
              </figcaption>
            </figure>

            {/* Right Column: Editorial Narrative & Colophon */}
            <div className="lg:col-span-7 lg:border-l lg:border-ink/10 lg:pl-12">
              <div className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-muted">
                Colophon &amp; Heritage
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-ink mb-8 tracking-tight">
                {siteConfig.about.headline}
              </h1>

              <blockquote className="my-8 border-y border-ink/12 py-6">
                <p className="text-xl sm:text-2xl font-serif italic text-ink leading-relaxed">
                  &ldquo;{siteConfig.about.introQuote}&rdquo;
                </p>
              </blockquote>

              <div className="space-y-6 text-base sm:text-[17px] text-ink-light leading-[1.75] max-w-[65ch]">
                {siteConfig.about.storyParagraphs.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className={idx === 0 ? "editorial-dropcap" : undefined}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-14 pt-10 border-t border-ink/12">
                <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted mb-6">
                  Editorial Desk &amp; Channels
                </h2>
                <div className="divide-y divide-ink/10 border-y border-ink/12">
                  {siteConfig.about.contactEmail && (
                    <div className="py-3.5 flex items-baseline justify-between text-sm">
                      <span className="text-xs uppercase tracking-[0.14em] text-ink-muted">
                        Official Email
                      </span>
                      <a
                        href={`mailto:${siteConfig.about.contactEmail}`}
                        className="text-ink hover:text-accent transition-colors duration-150 font-medium"
                      >
                        {siteConfig.about.contactEmail}
                      </a>
                    </div>
                  )}
                  {siteConfig.socialLinks.map((social, idx) => (
                    <div
                      key={idx}
                      className="py-3.5 flex items-baseline justify-between text-sm"
                    >
                      <span className="text-xs uppercase tracking-[0.14em] text-ink-muted">
                        {social.platform}
                      </span>
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-ink hover:text-accent transition-colors duration-150 font-medium"
                      >
                        {social.handle || social.url}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Student Editorial Board & Society Masthead */}
        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-ink/12 pb-8">
            <div className="max-w-2xl">
              <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                Institutional Colophon &middot; 2025&ndash;2026 Session
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-ink tracking-tight">
                Editorial Board &amp; Masthead
              </h2>
              <p className="mt-3 text-sm sm:text-base text-ink-light leading-relaxed">
                The periodical and campus symposia of JUALS are edited, designed, and produced entirely by undergraduate and postgraduate students across Jadavpur University.
              </p>
            </div>
            <Link
              to="/contributors"
              className="text-[11px] font-semibold uppercase tracking-[0.15em] text-accent hover:text-ink transition-colors duration-150 shrink-0"
            >
              View All Contributor Dossiers &rarr;
            </Link>
          </div>

          <div className="space-y-14">
            {mastheadSections.map((section) => (
              <div
                key={section.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                {/* Left 4 Columns: Board Desk Title & Mandate */}
                <div className="lg:col-span-4">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted tabular-nums mb-1">
                    Section {section.code}
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-ink mb-2">
                    {section.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-light leading-relaxed">
                    {section.description}
                  </p>
                </div>

                {/* Right 8 Columns: Members Hairline Ledger */}
                <div className="lg:col-span-8 lg:border-l lg:border-ink/10 lg:pl-10">
                  <div className="divide-y divide-ink/10 border-y border-ink/12">
                    {section.members.map((member) => (
                      <div
                        key={member.id}
                        className="py-4 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-baseline"
                      >
                        <div className="sm:col-span-4">
                          {member.contributorSlug ? (
                            <Link
                              to={`/contributors/${member.contributorSlug}`}
                              className="font-serif text-lg font-medium text-ink hover:text-accent transition-colors duration-150"
                            >
                              {member.name}
                            </Link>
                          ) : (
                            <span className="font-serif text-lg font-medium text-ink">
                              {member.name}
                            </span>
                          )}
                          {member.note && (
                            <span className="block text-[11px] text-ink-muted mt-0.5">
                              {member.note}
                            </span>
                          )}
                        </div>

                        <div className="sm:col-span-4 text-xs font-medium uppercase tracking-[0.14em] text-accent">
                          {member.role}
                        </div>

                        <div className="sm:col-span-4 sm:text-right text-xs text-ink-light tabular-nums">
                          <span>{member.department}</span>
                          {member.year && (
                            <>
                              <span className="mx-1.5">&middot;</span>
                              <span className="text-ink-muted">{member.year}</span>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
