interface QuoteEmbedProps {
  quote: string;
  author?: string;
  source?: string;
}

export function QuoteEmbed({ quote, author, source }: QuoteEmbedProps) {
  return (
    <blockquote className="my-12 mx-auto max-w-2xl border-y border-ink/12 py-8 px-2 sm:px-6 not-prose">
      <p className="font-serif text-2xl italic leading-relaxed text-ink md:text-[1.75rem]">
        &ldquo;{quote}&rdquo;
      </p>
      {(author || source) && (
        <footer className="mt-5 flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-ink-muted">
          <span>&mdash;</span>
          {author && <span className="text-ink">{author}</span>}
          {author && source && <span>&middot;</span>}
          {source && <cite className="normal-case italic text-ink-light">{source}</cite>}
        </footer>
      )}
    </blockquote>
  );
}
