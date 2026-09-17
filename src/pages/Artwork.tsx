import { motion } from "motion/react";
import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Lightbox } from "../components/Lightbox";
import { FadeImage } from "../components/FadeImage";
import { photoGallery } from "../data/photography";

export function Artwork() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const artworks = photoGallery;

  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12"
          >
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
              Visual Expressions
            </div>
            <h1 className="font-serif text-5xl font-medium tracking-tight text-ink md:text-6xl">
              Artwork & Visual Media
            </h1>
            <p className="mt-4 text-lg text-ink-light max-w-2xl leading-relaxed">
              Sketches, paintings, photography, and graphic narratives contributed by members and friends of the Jadavpur University Arts and Literary Society (JUALS).
            </p>
          </motion.div>
        </div>

        {/* Masonry Grid */}
        <div className="w-full px-1 pb-1">
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-1 space-y-1">
            {artworks.map((artwork, idx) => (
              <motion.button
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "100px" }}
                transition={{ duration: 0.6, delay: (idx % 4) * 0.1 }}
                onClick={() => setSelectedIndex(idx)}
                className="group relative block w-full break-inside-avoid overflow-hidden bg-ink/5 cursor-zoom-in"
              >
                <FadeImage
                  src={artwork.src}
                  alt={artwork.alt}
                  width={artwork.width}
                  height={artwork.height}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-auto object-cover group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 text-left">
                  <p className="text-paper font-serif text-lg tracking-wide">{artwork.caption}</p>
                  {artwork.location && (
                    <p className="text-paper/80 text-xs mt-1">{artwork.location}</p>
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </main>

      <Footer />

      <Lightbox
        isOpen={selectedIndex !== null}
        src={selectedIndex !== null ? artworks[selectedIndex].src : ""}
        alt={selectedIndex !== null ? artworks[selectedIndex].alt : ""}
        caption={selectedIndex !== null ? artworks[selectedIndex].caption : undefined}
        onClose={() => setSelectedIndex(null)}
      />
    </div>
  );
}

// Backward compatibility alias for /photography
export const Photography = Artwork;
