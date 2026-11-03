import { Link } from "react-router-dom";
import type { Author } from "../data/articles";

interface AuthorInfoProps {
  author: Author;
}

export function AuthorInfo({ author }: AuthorInfoProps) {
  return (
    <div className="mt-16 border-t border-ink/12 pt-10">
      <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
        <Link to={`/contributors/${author.slug}`} className="shrink-0 group">
          <img
            src={author.avatar}
            alt={author.name}
            referrerPolicy="no-referrer"
            className="h-20 w-20 rounded-none border border-ink/15 object-cover grayscale transition-opacity duration-150 group-hover:opacity-85"
          />
        </Link>
        <div className="flex flex-col">
          <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted mb-1">
            Contributor Dossier
          </div>
          <h3 className="font-serif text-xl font-medium text-ink">
            <Link
              to={`/contributors/${author.slug}`}
              className="hover:text-accent transition-colors duration-150"
            >
              {author.name}
            </Link>
            {author.role && (
              <span className="font-sans text-xs font-normal text-ink-muted ml-2">
                &middot; {author.role}
              </span>
            )}
          </h3>
          <p className="mt-2 max-w-xl text-sm text-ink-light leading-relaxed">
            {author.bio}
          </p>
          <div className="mt-3">
            <Link
              to={`/contributors/${author.slug}`}
              className="text-[11px] font-semibold uppercase tracking-[0.15em] text-accent hover:text-ink transition-colors duration-150"
            >
              View All Works &amp; Profile &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
