import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { siteConfig } from "../data/siteConfig";

export function Submissions() {
  const { submissions, about } = siteConfig;

  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <Header />

      <main className="flex-1">
        <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
          {/* Broadsheet Masthead */}
          <div className="border-b border-ink/12 pb-10">
            <div className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-muted tabular-nums">
              Editorial Dispatch &middot; Volume 2026&ndash;27
            </div>

            <h1 className="font-serif text-4xl font-medium tracking-tight text-ink sm:text-5xl lg:text-6xl">
              {submissions.headline}
            </h1>

            <p className="mt-5 max-w-3xl text-lg sm:text-xl leading-relaxed text-ink-light">
              {submissions.subtext}
            </p>
          </div>

          {/* Two-Column Architectural Specification Strip */}
          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-ink/12 divide-y md:divide-y-0 md:divide-x divide-ink/10">
            <div className="py-8 md:pr-10">
              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted mb-2">
                {submissions.readingPeriodLabel}
              </div>
              <p className="text-sm sm:text-base text-ink-light leading-relaxed">
                {submissions.readingPeriodValue}
              </p>
            </div>

            <div className="py-8 md:pl-10">
              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted mb-2">
                {submissions.dispatchLabel}
              </div>
              <p className="text-sm sm:text-base text-ink-light leading-relaxed">
                {submissions.dispatchFormat}{" "}
                <a
                  href={`mailto:${about.contactEmail}?subject=JUALS — [Genre] — [Author Name]`}
                  className="font-medium text-accent underline underline-offset-4 hover:text-ink transition-colors duration-150"
                >
                  {about.contactEmail}
                </a>
              </p>
            </div>
          </div>

          {/* Numbered Genre Specifications (01–04) */}
          <div className="mt-14">
            <div className="mb-6 flex items-baseline justify-between">
              <h2 className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
                Department Specifications
              </h2>
              <span className="text-[11px] uppercase tracking-[0.16em] text-ink-muted tabular-nums">
                01 &ndash; 0{submissions.categories.length}
              </span>
            </div>

            <div className="divide-y divide-ink/10 border-y border-ink/12">
              {submissions.categories.map((cat) => (
                <div
                  key={cat.code}
                  className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline"
                >
                  <div className="md:col-span-4 flex items-baseline gap-4">
                    <span className="text-xs font-medium uppercase tracking-[0.16em] text-ink-muted tabular-nums">
                      {cat.code}
                    </span>
                    <h3 className="font-serif text-2xl font-medium text-ink">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="md:col-span-8">
                    <div className="text-xs font-medium uppercase tracking-[0.14em] text-accent mb-2.5 tabular-nums">
                      {cat.specification}
                    </div>
                    <p className="text-sm sm:text-base text-ink-light leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Editorial Protocol & Rights */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-ink/12 pb-14">
            <div className="md:col-span-4">
              <h2 className="font-serif text-2xl font-medium text-ink">
                Editorial Protocol
              </h2>
              <p className="mt-2 text-xs text-ink-muted leading-relaxed">
                Standard manuscript preparation and archival terms for contributors.
              </p>
            </div>

            <div className="md:col-span-8 divide-y divide-ink/10 border-t border-ink/10 md:border-t-0">
              {submissions.editorialNotes.map((note, idx) => (
                <div key={idx} className="py-4 first:pt-0 last:pb-0 flex items-baseline gap-4">
                  <span className="text-xs font-medium uppercase tracking-[0.14em] text-ink-muted tabular-nums shrink-0">
                    0{idx + 1}.
                  </span>
                  <p className="text-sm text-ink-light leading-relaxed">{note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Direct Dispatch Footer */}
          <div className="pt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl font-medium text-ink">
                Ready to submit a manuscript or visual folio?
              </h3>
              <p className="mt-1 text-sm text-ink-light">
                Address your dispatch directly to the editorial board at{" "}
                <span className="text-ink font-medium">{about.contactEmail}</span>.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <a
                href={`mailto:${about.contactEmail}?subject=JUALS — [Genre] — [Author Name]`}
                className="inline-flex h-10 items-center justify-center bg-ink px-5 text-[11px] font-medium uppercase tracking-[0.15em] text-paper hover:bg-accent transition-colors duration-150"
              >
                Dispatch via Email &rarr;
              </a>
              <a
                href="https://www.instagram.com/juliterarysociety/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 items-center justify-center border border-ink/25 px-5 text-[11px] font-medium uppercase tracking-[0.15em] text-ink hover:border-accent hover:text-accent transition-colors duration-150"
              >
                Instagram
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
