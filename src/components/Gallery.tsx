import { useState } from "react";
import { Lightbox } from "./Lightbox";
import { FadeImage } from "./FadeImage";

interface GalleryProps {
  images: { src: string; alt: string; caption?: string }[];
}

export function Gallery({ images }: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <>
      <figure className="my-12 w-full not-prose">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              className={`overflow-hidden rounded-none border border-ink/10 bg-paper-muted cursor-zoom-in group ${
                idx === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
            >
              <FadeImage
                src={img.src}
                alt={img.alt}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover transition-opacity duration-200 group-hover:opacity-90"
                style={{ minHeight: idx === 0 ? "100%" : "280px" }}
              />
            </button>
          ))}
        </div>
        {images.some((img) => img.caption) && (
          <figcaption className="mt-3 border-b border-ink/8 pb-2.5 text-sm font-serif italic text-ink-light">
            {images.find((img) => img.caption)?.caption}
          </figcaption>
        )}
      </figure>

      <Lightbox
        isOpen={selectedIndex !== null}
        onClose={() => setSelectedIndex(null)}
        src={selectedIndex !== null ? images[selectedIndex].src : ""}
        alt={selectedIndex !== null ? images[selectedIndex].alt : ""}
        caption={selectedIndex !== null ? images[selectedIndex].caption : ""}
      />
    </>
  );
}
