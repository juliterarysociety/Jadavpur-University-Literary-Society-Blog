import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { chronicleEvents } from "../data/chronicle";

export function Chronicle() {
  const [filter, setFilter] = useState<"All" | "Upcoming" | "Archival Dispatch">(
    "All"
  );

  const filteredEvents =
    filter === "All"
      ? chronicleEvents
      : chronicleEvents.filter((e) => e.status === filter);

  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <Header />

      <main className="flex-1">
        {/* Broadsheet Chronicle Header */}
        <section className="mx-auto max-w-7xl px-4 pt-12 pb-10 sm:px-6 lg:px-8 lg:pt-16 lg:pb-12 border-b border-ink/12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="mb-2 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-muted">
                Symposia, Readings &amp; Dispatches &middot; Jadavpur University
              </div>
              <h1 className="font-serif text-4xl font-medium tracking-tight text-ink sm:text-5xl">
                Campus Literary Chronicle
              </h1>
              <p className="mt-3 text-base sm:text-lg text-ink-light leading-relaxed">
                A living calendar and archival record of JUALS poetry readings at the Open Air Theatre, translation workshops, small-press colloquia, and annual literary festivals in Kolkata.
              </p>
            </div>
            <div className="text-xs font-medium uppercase tracking-[0.16em] text-ink-muted tabular-nums shrink-0">
              {filteredEvents.length}{" "}
              {filteredEvents.length === 1 ? "Gathering" : "Gatherings"} Logged
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="mt-8 pt-6 border-t border-ink/10 flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted mr-3">
              Chronicle View:
            </span>
            {(["All", "Upcoming", "Archival Dispatch"] as const).map((tab) => {
              const isActive = filter === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`px-3.5 py-1.5 text-[11px] uppercase tracking-[0.15em] border transition-colors duration-150 ${
                    isActive
                      ? "border-accent bg-accent text-paper font-semibold"
                      : "border-ink/15 text-ink-light hover:border-ink hover:text-ink"
                  }`}
                >
                  {tab === "All" ? "All Gatherings" : tab}
                </button>
              );
            })}
          </div>
        </section>

        {/* Chronicle Ledger */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="divide-y divide-ink/12 border-y border-ink/12">
            {filteredEvents.map((event) => (
              <article
                key={event.id}
                className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                {/* Left 3 Columns: Date, Status & Venue */}
                <div className="lg:col-span-3 space-y-2">
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] tabular-nums">
                    <span className="font-semibold text-ink-muted">
                      {event.code}
                    </span>
                    <span>&middot;</span>
                    <span
                      className={
                        event.status === "Upcoming"
                          ? "text-accent font-semibold"
                          : "text-ink-muted"
                      }
                    >
                      {event.status}
                    </span>
                  </div>

                  <div className="font-serif text-xl font-medium text-ink tabular-nums">
                    {event.date}
                  </div>
                  <div className="text-xs text-ink-muted tabular-nums">
                    {event.time}
                  </div>
                  <div className="pt-2 text-xs font-medium text-ink-light">
                    {event.venue}
                  </div>
                </div>

                {/* Middle 6 Columns: Title, Summary & Dispatch Notes */}
                <div className="lg:col-span-6 lg:border-l lg:border-ink/10 lg:pl-8">
                  <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                    {event.category}
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-medium text-ink leading-snug mb-3">
                    {event.title}
                  </h2>
                  <p className="text-sm sm:text-base text-ink-light leading-relaxed mb-4">
                    {event.summary}
                  </p>

                  {event.dispatchNotes && (
                    <div className="border-y border-ink/10 bg-paper-muted/50 py-3 px-4 text-xs text-ink-light leading-relaxed">
                      <span className="font-semibold uppercase tracking-[0.14em] text-ink mr-2">
                        Note:
                      </span>
                      {event.dispatchNotes}
                    </div>
                  )}
                </div>

                {/* Right 3 Columns: Speakers & Related Issue */}
                <div className="lg:col-span-3 lg:border-l lg:border-ink/10 lg:pl-8 flex flex-col justify-between h-full">
                  {event.speakers && event.speakers.length > 0 && (
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted mb-2.5">
                        Readers &amp; Conveners
                      </div>
                      <ul className="space-y-1.5 text-xs text-ink-light">
                        {event.speakers.map((speaker, idx) => (
                          <li key={idx} className="leading-relaxed">
                            &mdash; {speaker}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {event.relatedIssueSlug && (
                    <div className="mt-6 pt-4 border-t border-ink/10">
                      <span className="text-[10px] uppercase tracking-[0.15em] text-ink-muted block mb-1">
                        Associated Publication
                      </span>
                      <Link
                        to={`/issues/${event.relatedIssueSlug}`}
                        className="text-[11px] font-semibold uppercase tracking-[0.15em] text-accent hover:text-ink transition-colors duration-150"
                      >
                        Inspect Companion Folio &rarr;
                      </Link>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
