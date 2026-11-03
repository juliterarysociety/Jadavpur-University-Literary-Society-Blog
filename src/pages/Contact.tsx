import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { siteConfig } from "../data/siteConfig";
import { useState } from "react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <Header />

      <main className="flex-1">
        <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
          {/* Broadsheet Header */}
          <div className="border-b border-ink/12 pb-10">
            <div className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-muted">
              Editorial Desk &middot; Jadavpur University
            </div>
            <h1 className="font-serif text-4xl font-medium tracking-tight text-ink sm:text-5xl lg:text-6xl">
              {siteConfig.contact.headline}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-ink-light leading-relaxed">
              {siteConfig.contact.subtext}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Left Column: Editorial Directory */}
            <div className="lg:col-span-5 divide-y divide-ink/10 border-b border-ink/12 lg:border-b-0">
              <div className="py-6 first:pt-0">
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted mb-2">
                  01 &middot; Electronic Mail
                </div>
                <h2 className="font-serif text-xl font-medium text-ink">
                  Editorial &amp; General Inquiries
                </h2>
                <a
                  href={`mailto:${siteConfig.about.contactEmail}`}
                  className="mt-2 inline-block text-sm font-medium text-accent underline underline-offset-4 hover:text-ink transition-colors duration-150"
                >
                  {siteConfig.about.contactEmail}
                </a>
              </div>

              <div className="py-6">
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted mb-2">
                  02 &middot; Dispatches &amp; Events
                </div>
                <h2 className="font-serif text-xl font-medium text-ink">
                  Instagram Chronicle
                </h2>
                <a
                  href="https://www.instagram.com/juliterarysociety/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-sm font-medium text-accent underline underline-offset-4 hover:text-ink transition-colors duration-150"
                >
                  @juliterarysociety
                </a>
              </div>

              <div className="py-6">
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted mb-2">
                  03 &middot; Campus Address
                </div>
                <h2 className="font-serif text-xl font-medium text-ink">
                  Jadavpur University
                </h2>
                <p className="mt-2 text-sm text-ink-light leading-relaxed">
                  {siteConfig.contact.addressLines.map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>

              <div className="py-6">
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted mb-2">
                  04 &middot; Literary Submissions
                </div>
                <p className="text-xs text-ink-light leading-relaxed">
                  Submitting poetry, fiction, reviews, or visual art? Please review our{" "}
                  <Link
                    to="/submissions"
                    className="text-accent underline underline-offset-4 font-medium hover:text-ink transition-colors duration-150"
                  >
                    Call for Submissions
                  </Link>{" "}
                  for manuscript specifications prior to dispatch.
                </p>
              </div>
            </div>

            {/* Right Column: Correspondence Note Form */}
            <div className="lg:col-span-7 lg:border-l lg:border-ink/10 lg:pl-12">
              <div className="mb-8">
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted mb-2">
                  Direct Note
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-medium text-ink">
                  Write to the Editors
                </h2>
              </div>

              {submitted ? (
                <div className="border-y border-ink/15 bg-paper-muted/60 py-8 px-6">
                  <h3 className="font-serif text-2xl font-medium text-ink">
                    Correspondence Recorded
                  </h3>
                  <p className="text-sm text-ink-light mt-2 leading-relaxed">
                    Thank you for writing to JUALS. Our editorial board will respond to{" "}
                    <span className="text-ink font-medium">{formData.email || "your address"}</span>{" "}
                    shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-[11px] font-semibold uppercase tracking-[0.15em] text-accent hover:text-ink transition-colors duration-150"
                  >
                    Compose another note &rarr;
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] font-medium uppercase tracking-[0.15em] text-ink-muted mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Debanjan Mukherjee"
                        className="w-full rounded-none border-b border-ink/25 bg-transparent py-2.5 text-sm text-ink placeholder:text-ink/30 focus:border-accent focus:outline-none transition-colors duration-150"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium uppercase tracking-[0.15em] text-ink-muted mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full rounded-none border-b border-ink/25 bg-transparent py-2.5 text-sm text-ink placeholder:text-ink/30 focus:border-accent focus:outline-none transition-colors duration-150"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium uppercase tracking-[0.15em] text-ink-muted mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Symposium Inquiry / Editorial Question"
                      className="w-full rounded-none border-b border-ink/25 bg-transparent py-2.5 text-sm text-ink placeholder:text-ink/30 focus:border-accent focus:outline-none transition-colors duration-150"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium uppercase tracking-[0.15em] text-ink-muted mb-2">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Enter your correspondence..."
                      className="w-full rounded-none border border-ink/20 bg-transparent p-3.5 text-sm text-ink placeholder:text-ink/30 focus:border-accent focus:outline-none transition-colors duration-150"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex h-10 items-center justify-center bg-ink px-6 text-[11px] font-medium uppercase tracking-[0.15em] text-paper hover:bg-accent transition-colors duration-150"
                  >
                    Dispatch Note &rarr;
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
