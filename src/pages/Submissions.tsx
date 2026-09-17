import { motion } from "motion/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { siteConfig } from "../data/siteConfig";
import { Mail, Calendar, FileText, CheckCircle2, Instagram } from "lucide-react";

export function Submissions() {
  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <Header />

      <main className="flex-1">
        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Open Call for Volume 2026-27
            </div>

            <h1 className="font-serif text-5xl font-medium tracking-tight text-ink sm:text-6xl">
              Call for Submissions
            </h1>

            <p className="mt-6 text-xl leading-relaxed text-ink-light">
              The Jadavpur University Arts and Literary Society (JUALS) invites original, unpublished submissions of poetry, short prose, critical reviews, commentary, and artwork for our upcoming digital edition and annual print anthology.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-ink/10 bg-paper p-6 shadow-xs">
              <div className="flex items-center gap-3 text-ink mb-3">
                <Calendar className="h-5 w-5 text-accent" />
                <h3 className="font-serif text-xl font-semibold">Timeline & Deadlines</h3>
              </div>
              <p className="text-sm text-ink-light leading-relaxed">
                Submissions are reviewed on a rolling basis. Works received by the <strong>last Sunday of each month</strong> are considered for the immediate issue.
              </p>
            </div>

            <div className="rounded-lg border border-ink/10 bg-paper p-6 shadow-xs">
              <div className="flex items-center gap-3 text-ink mb-3">
                <Mail className="h-5 w-5 text-accent" />
                <h3 className="font-serif text-xl font-semibold">How to Submit</h3>
              </div>
              <p className="text-sm text-ink-light leading-relaxed">
                Email your work as an attachment (.docx, .pdf, or high-res image) to{" "}
                <a 
                  href={`mailto:${siteConfig.about.contactEmail}?subject=JUALS Submission - [Genre] - [Your Name]`} 
                  className="font-medium text-accent underline hover:text-ink transition-colors"
                >
                  {siteConfig.about.contactEmail}
                </a>
              </p>
            </div>
          </div>

          {/* Submission Guidelines */}
          <div className="mt-16 space-y-12">
            <div>
              <h2 className="font-serif text-3xl font-medium text-ink mb-6">
                Category Guidelines
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-2 border-accent pl-6 py-1">
                  <h4 className="font-serif text-xl font-medium text-ink">Poetry</h4>
                  <p className="mt-1 text-sm text-ink-light leading-relaxed">
                    Submit up to 3 poems in a single document. Both English and translated Bengali/vernacular poems (accompanied by original text) are welcome. No strict form constraints.
                  </p>
                </div>

                <div className="border-l-2 border-ink/30 pl-6 py-1">
                  <h4 className="font-serif text-xl font-medium text-ink">Prose & Short Fiction</h4>
                  <p className="mt-1 text-sm text-ink-light leading-relaxed">
                    Short stories, memoirs, and narrative non-fiction. Suggested length: 800 to 2,500 words. Flash fiction pieces under 500 words are also encouraged.
                  </p>
                </div>

                <div className="border-l-2 border-ink/30 pl-6 py-1">
                  <h4 className="font-serif text-xl font-medium text-ink">Reviews & Critical Essays</h4>
                  <p className="mt-1 text-sm text-ink-light leading-relaxed">
                    Critical evaluations of books, cinema, theatrical productions, music, or translations. Suggested length: 1,000 to 1,800 words.
                  </p>
                </div>

                <div className="border-l-2 border-ink/30 pl-6 py-1">
                  <h4 className="font-serif text-xl font-medium text-ink">Artwork & Visual Media</h4>
                  <p className="mt-1 text-sm text-ink-light leading-relaxed">
                    High-resolution sketches, paintings, digital art, photography, or comic strips (minimum 300 DPI, JPG or PNG format). Please include a title and brief artist's note.
                  </p>
                </div>
              </div>
            </div>

            {/* General Rules */}
            <div className="rounded-lg bg-ink/5 p-8">
              <h3 className="font-serif text-2xl font-medium text-ink mb-4">
                General Submission Rules
              </h3>
              <ul className="space-y-3 text-sm text-ink-light">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>All work must be original and free from plagiarism. Simultaneous submissions are permitted, provided you notify us immediately upon acceptance elsewhere.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>Include a brief 50-word author bio and your department/affiliation in the email body.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>Submissions are open to Jadavpur University students, alumni, and creative writers/artists from university circles across India.</span>
                </li>
              </ul>
            </div>

            {/* Call to action */}
            <div className="text-center py-8 border-t border-ink/10">
              <h3 className="font-serif text-2xl font-medium text-ink mb-3">
                Have a piece ready for consideration?
              </h3>
              <p className="text-sm text-ink-light mb-6">
                Send your drafts or inquiries directly to our editorial inbox or reach out via Instagram.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href={`mailto:${siteConfig.about.contactEmail}?subject=JUALS Submission - [Genre]`}
                  className="inline-flex items-center gap-2 rounded-sm bg-ink px-6 py-3 text-xs font-semibold uppercase tracking-wider text-paper hover:bg-accent transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  Email Your Submission
                </a>
                <a
                  href="https://www.instagram.com/juliterarysociety/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm border border-ink/20 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-ink hover:border-accent hover:text-accent transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                  DM on Instagram
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
