import { motion } from "motion/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { siteConfig } from "../data/siteConfig";
import { Mail, Instagram, MapPin, Send, MessageSquare } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <Header />

      <main className="flex-1">
        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <h1 className="font-serif text-5xl font-medium tracking-tight text-ink sm:text-6xl">
              Contact Us
            </h1>
            <p className="mt-6 text-lg text-ink-light">
              Connect with the Jadavpur University Arts and Literary Society (JUALS). Whether you have inquiries regarding collaborations, submission guidelines, society membership, or literary events, we’d love to hear from you.
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Contact details */}
            <div className="space-y-8 lg:col-span-5">
              <div className="flex items-start gap-4">
                <div className="rounded-md bg-ink/5 p-3 text-accent shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-ink">Official Email</h3>
                  <p className="text-sm text-ink-light mt-1">General inquiries, submissions & events</p>
                  <a
                    href="mailto:ju.literarysociety@gmail.com"
                    className="text-sm font-medium text-accent hover:underline mt-1 block"
                  >
                    ju.literarysociety@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-md bg-ink/5 p-3 text-accent shrink-0">
                  <Instagram className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-ink">Instagram</h3>
                  <p className="text-sm text-ink-light mt-1">Announcements, event photos & updates</p>
                  <a
                    href="https://www.instagram.com/juliterarysociety/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-accent hover:underline mt-1 block"
                  >
                    @juliterarysociety
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-md bg-ink/5 p-3 text-accent shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-ink">Campus Location</h3>
                  <p className="text-sm text-ink-light mt-1 leading-relaxed">
                    Jadavpur University<br />
                    188 Raja S.C. Mallick Road<br />
                    Kolkata, West Bengal 700032, India
                  </p>
                </div>
              </div>

              <div className="rounded-lg border border-ink/10 bg-ink/5 p-6">
                <h4 className="font-serif text-base font-medium text-ink flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-accent" />
                  Looking to Submit a Piece?
                </h4>
                <p className="text-xs text-ink-light mt-2 leading-relaxed">
                  Please visit our <a href="/submissions" className="text-accent underline font-medium">Call for Submissions</a> page for formatting rules, genre specifications, and rolling deadlines before emailing your drafts.
                </p>
              </div>
            </div>

            {/* Quick message form */}
            <div className="lg:col-span-7">
              <div className="rounded-lg border border-ink/10 bg-paper p-8 shadow-xs">
                <h3 className="font-serif text-2xl font-medium text-ink mb-2">
                  Send a Message
                </h3>
                <p className="text-sm text-ink-light mb-6">
                  Drop a note directly to our editorial and coordination team.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="rounded-md bg-accent/10 border border-accent/20 p-6 text-center"
                  >
                    <h4 className="font-serif text-xl font-medium text-ink">Thank you for reaching out!</h4>
                    <p className="text-sm text-ink-light mt-2">
                      Your message has been recorded. Our editorial board will get back to you shortly at {formData.email || "your email"}.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 text-xs font-semibold uppercase tracking-wider text-accent hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-ink-light mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Debanjan Mukherjee"
                        className="w-full rounded-sm border border-ink/20 bg-transparent px-4 py-2.5 text-sm text-ink focus:border-accent focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-ink-light mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full rounded-sm border border-ink/20 bg-transparent px-4 py-2.5 text-sm text-ink focus:border-accent focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-ink-light mb-1">
                        Subject / Query Type
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g., Event Collaboration / General Question"
                        className="w-full rounded-sm border border-ink/20 bg-transparent px-4 py-2.5 text-sm text-ink focus:border-accent focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-ink-light mb-1">
                        Message
                      </label>
                      <textarea
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Write your message here..."
                        className="w-full rounded-sm border border-ink/20 bg-transparent px-4 py-2.5 text-sm text-ink focus:border-accent focus:outline-none transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-sm bg-ink px-6 py-3 text-xs font-semibold uppercase tracking-wider text-paper hover:bg-accent transition-colors"
                    >
                      <Send className="h-4 w-4" />
                      Send Note
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
