import { Link } from "react-router-dom";
import type { Article } from "../data/articles";
import { cn } from "../lib/utils";
import { FadeImage } from "./FadeImage";

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
  index?: number;
}

export function ArticleCard({ article, featured = false }: ArticleCardProps) {
  if (featured) {
    return (
      <article className="group grid grid-cols-1 lg:grid-cols-12 lg:gap-10 items-start">
        <div className="lg:col-span-7">
          <Link
            to={`/post/${article.slug}`}
            className="block overflow-hidden rounded-none border border-ink/10 bg-paper-muted aspect-[16/10]"
          >
            <FadeImage
              src={article.coverImage}
              alt={article.title}
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover transition-opacity duration-200 group-hover:opacity-90"
            />
          </Link>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-between pt-6 lg:pt-1 lg:border-l lg:border-ink/10 lg:pl-10 h-full">
          <div>
            <div className="mb-4 flex flex-wrap items-center gap-2 text-[11px] font-medium uppercase tracking-[0.15em] text-ink-muted tabular-nums">
              <span className="text-accent font-semibold">
                {article.tags[0]}
              </span>
              <span>&middot;</span>
              <span>{article.date}</span>
              <span>&middot;</span>
              <span>{article.readTime}</span>
              {article.issueSlug && article.issueLabel && (
                <>
                  <span>&middot;</span>
                  <Link
                    to={`/issues/${article.issueSlug}`}
                    className="text-ink hover:text-accent transition-colors duration-150"
                  >
                    {article.issueLabel}
                  </Link>
                </>
              )}
            </div>

            <Link
              to={`/post/${article.slug}`}
              className="block group-hover:text-accent transition-colors duration-150"
            >
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] leading-[1.14] tracking-tight text-ink mb-5">
                {article.title}
              </h2>
            </Link>

            <p className="text-base sm:text-lg text-ink-light leading-relaxed mb-8">
              {article.excerpt}
            </p>
          </div>

          <div className="pt-5 border-t border-ink/10 flex items-center justify-between text-xs">
            <div>
              <Link
                to={`/contributors/${article.author.slug}`}
                className="font-medium text-ink hover:text-accent transition-colors duration-150"
              >
                {article.author.name}
              </Link>
              {article.author.role && (
                <span className="text-ink-muted block mt-0.5">
                  {article.author.role}
                </span>
              )}
            </div>
            <Link
              to={`/post/${article.slug}`}
              className="text-[11px] font-semibold uppercase tracking-[0.15em] text-accent hover:text-ink transition-colors duration-150"
            >
              Read Piece &rarr;
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className={cn("group flex flex-col h-full")}>
      <Link
        to={`/post/${article.slug}`}
        className="block overflow-hidden rounded-none border border-ink/10 bg-paper-muted aspect-[16/10] mb-5"
      >
        <FadeImage
          src={article.coverImage}
          alt={article.title}
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover transition-opacity duration-200 group-hover:opacity-90"
          loading="lazy"
        />
      </Link>

      <div className="flex flex-col flex-1">
        <div className="mb-2.5 flex flex-wrap items-center gap-2 text-[11px] font-medium uppercase tracking-[0.15em] text-ink-muted tabular-nums">
          <span className="text-accent font-semibold">{article.tags[0]}</span>
          <span>&middot;</span>
          <span>{article.date}</span>
          {article.issueSlug && article.issueLabel && (
            <>
              <span>&middot;</span>
              <Link
                to={`/issues/${article.issueSlug}`}
                className="text-ink-light hover:text-accent transition-colors duration-150"
              >
                {article.issueLabel}
              </Link>
            </>
          )}
        </div>

        <Link
          to={`/post/${article.slug}`}
          className="group-hover:text-accent transition-colors duration-150"
        >
          <h3 className="font-serif text-2xl sm:text-[1.65rem] leading-[1.2] text-ink mb-3">
            {article.title}
          </h3>
        </Link>

        <p className="text-sm sm:text-[15px] text-ink-light leading-relaxed mb-6 line-clamp-3">
          {article.excerpt}
        </p>

        <div className="mt-auto pt-4 border-t border-ink/8 flex items-center justify-between text-xs text-ink-muted tabular-nums">
          <Link
            to={`/contributors/${article.author.slug}`}
            className="font-medium text-ink hover:text-accent transition-colors duration-150"
          >
            {article.author.name}
          </Link>
          <span>{article.readTime}</span>
        </div>
      </div>
    </article>
  );
}
