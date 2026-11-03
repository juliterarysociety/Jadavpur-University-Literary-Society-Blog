import { useState } from "react";
import { cn } from "../lib/utils";
import { Lightbox } from "./Lightbox";
import { FadeImage } from "./FadeImage";

interface ImageEmbedProps {
  src: string;
  alt: string;
  caption?: string;
  size?: "default" | "wide" | "full";
}

export function ImageEmbed({ src, alt, caption, size = "default" }: ImageEmbedProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <>
      <figure
        className={cn(
          "my-12 mx-auto not-prose",
          size === "default" && "max-w-3xl",
          size === "wide" && "max-w-4xl",
          size === "full" && "w-full max-w-none"
        )}
      >
        <button
          onClick={() => setIsLightboxOpen(true)}
          className="w-full overflow-hidden rounded-none border border-ink/10 bg-paper-muted cursor-zoom-in group block"
        >
          <FadeImage
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            className="w-full h-auto object-cover transition-opacity duration-200 group-hover:opacity-92"
            loading="lazy"
          />
        </button>
        {caption && (
          <figcaption className="mt-3 flex items-baseline justify-between border-b border-ink/8 pb-2.5 text-xs text-ink-muted">
            <span className="font-serif italic text-ink-light text-sm">{caption}</span>
            <span className="uppercase tracking-[0.14em] text-[10px] shrink-0 ml-4">Plate</span>
          </figcaption>
        )}
      </figure>

      <Lightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        src={src}
        alt={alt}
        caption={caption}
      />
    </>
  );
}
