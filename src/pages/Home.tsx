import { motion } from "motion/react";
import { useParams, Link } from "react-router-dom";
import { articles } from "../data/articles";
import { ArticleCard } from "../components/ArticleCard";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { siteConfig } from "../data/siteConfig";

export function Home() {
  const { category } = useParams<{ category?: string }>();

  // Filter articles if a category parameter is specified
  const filteredArticles = category
    ? articles.filter((a) =>
        a.tags.some((t) => t.toLowerCase() === category.toLowerCase())
      )
    : articles;

  const activeCategoryTitle = category
    ? category.charAt(0).toUpperCase() + category.slice(1)
    : null;

  const featuredArticle = category ? null : filteredArticles[0];
  const listArticles = category ? filteredArticles : filteredArticles.slice(1);

  const filterTabs = [
    { label: "All Works", path: "/", isActive: !category },
    { label: "Poetry", path: "/category/poetry", isActive: category?.toLowerCase() === "poetry" },
    { label: "Prose", path: "/category/prose", isActive: category?.toLowerCase() === "prose" },
    { label: "Artwork", path: "/artwork", isActive: false },
    { label: "Reviews", path: "/category/reviews", isActive: category?.toLowerCase() === "reviews" },
    { label: "Opinion", path: "/category/opinion", isActive: category?.toLowerCase() === "opinion" },
    { label: "Call for Submissions", path: "/submissions", isActive: false },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section (only on home root, or streamlined on category pages) */}
        <section className="mx-auto max-w-7xl px-4 pt-12 pb-8 sm:px-6 lg:px-8 lg:pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 max-w-3xl"
          >
            {category ? (
              <>
                <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">
                  Category Archive
                </div>
                <h1 className="font-serif text-4xl font-medium tracking-tight text-ink sm:text-5xl md:text-6xl">
                  {activeCategoryTitle}
                </h1>
                <p className="mt-4 text-lg text-ink-light">
                  Curated entries in {activeCategoryTitle} published by the Jadavpur University Arts and Literary Society (JUALS).
                </p>
              </>
            ) : (
              <>
                <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
                  Official Publication
                </div>
                <h1 className="font-serif text-5xl font-medium leading-tight tracking-tight text-ink sm:text-6xl md:text-7xl">
                  {siteConfig.hero.leadText}{" "}
                  <span className="italic text-accent">{siteConfig.hero.accentWord}</span>{" "}
                  {siteConfig.hero.tailText}
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-ink-light sm:text-xl">
                  {siteConfig.hero.subtext}
                </p>
              </>
            )}
          </motion.div>

          {/* Quick Category Navigation Bar */}
          <div className="flex items-center gap-1 overflow-x-auto pb-3 pt-2 border-b border-ink/10 no-scrollbar">
            <span className="text-[11px] uppercase tracking-widest text-ink/40 font-semibold mr-3 hidden sm:inline">Filter:</span>
            {filterTabs.map((tab, idx) => (
              <Link
                key={idx}
                to={tab.path}
                className={`whitespace-nowrap rounded-sm px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] transition-all ${
                  tab.isActive
                    ? "bg-ink text-paper shadow-xs"
                    : "text-ink-light hover:text-ink hover:bg-ink/5"
                }`}
              >
                {tab.label}
              </Link>
            ))}
          </div>
          
          {/* Featured Article on Root Home */}
          {!category && featuredArticle && (
            <div className="mt-12">
              <ArticleCard article={featuredArticle} featured index={0} />
            </div>
          )}
        </section>
        
        {/* Article Grid */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-center justify-between border-b border-ink/10 pb-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-ink">
              {category ? `${activeCategoryTitle} Entries` : "Recent Publications"}
            </h2>
            <span className="text-sm font-medium uppercase tracking-wider text-accent">
              {filteredArticles.length} {filteredArticles.length === 1 ? "Piece" : "Pieces"}
            </span>
          </div>
          
          {listArticles.length > 0 ? (
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-2">
              {listArticles.map((article, idx) => (
                <ArticleCard key={article.id} article={article} index={idx + 1} />
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-ink/10 bg-ink/5 p-12 text-center my-8">
              <h3 className="font-serif text-2xl font-medium text-ink mb-2">
                No entries in this section yet
              </h3>
              <p className="text-sm text-ink-light max-w-md mx-auto mb-6">
                Have an original work of {activeCategoryTitle?.toLowerCase()} to share? We are currently accepting submissions for upcoming issues.
              </p>
              <Link
                to="/submissions"
                className="inline-flex items-center gap-2 rounded-sm bg-ink px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-paper hover:bg-accent transition-colors"
              >
                Submit Your Work
              </Link>
            </div>
          )}
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
