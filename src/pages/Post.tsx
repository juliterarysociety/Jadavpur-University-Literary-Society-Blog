import { useParams, Navigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import { articles } from "../data/articles";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { AuthorInfo } from "../components/AuthorInfo";
import { QuoteEmbed } from "../components/QuoteEmbed";
import { ImageEmbed } from "../components/ImageEmbed";
import { Gallery } from "../components/Gallery";
import { FadeImage } from "../components/FadeImage";

export function Post() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  if (!article) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <Header />
      
      <main className="flex-1">
        {/* Immersive Hero */}
        <div className="relative h-[70vh] min-h-[500px] w-full overflow-hidden bg-ink">
          <motion.div 
            style={{ y, opacity }}
            className="absolute inset-0"
          >
            <FadeImage 
              src={article.coverImage} 
              alt={article.title} 
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover opacity-60"
            />
          </motion.div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
          
          <div className="absolute bottom-0 left-0 w-full p-4 sm:p-8 md:p-16 lg:p-24">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto max-w-4xl"
            >
              <div className="mb-3 sm:mb-6 flex flex-wrap items-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-medium uppercase tracking-wider text-paper/80">
                <span>{article.date}</span>
                <span className="h-1 w-1 rounded-full bg-paper/40"></span>
                <span>{article.tags[0]}</span>
                <span className="h-1 w-1 rounded-full bg-paper/40"></span>
                <span>{article.readTime}</span>
              </div>
              
              <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-paper">
                {article.title}
              </h1>
            </motion.div>
          </div>
        </div>
        
        {/* Content */}
        <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="prose prose-lg prose-stone max-w-none prose-headings:font-serif prose-headings:font-medium prose-headings:tracking-tight prose-p:leading-relaxed prose-p:text-ink-light prose-a:text-accent prose-a:no-underline hover:prose-a:underline"
          >
            <p className="lead text-2xl font-serif italic text-ink mb-12">
              {article.excerpt}
            </p>
            
            {article.contentBlocks && article.contentBlocks.length > 0 ? (
              article.contentBlocks.map((block, idx) => {
                switch (block.type) {
                  case "paragraph":
                    return <p key={idx}>{block.text}</p>;
                  case "heading":
                    return block.level === 3 ? (
                      <h3 key={idx} className="text-2xl mt-12 mb-6 text-ink">
                        {block.text}
                      </h3>
                    ) : (
                      <h2 key={idx} className="text-3xl mt-16 mb-8 text-ink">
                        {block.text}
                      </h2>
                    );
                  case "quote":
                    return (
                      <QuoteEmbed 
                        key={idx}
                        quote={block.quote}
                        author={block.author}
                      />
                    );
                  case "image":
                    return (
                      <ImageEmbed 
                        key={idx}
                        src={block.src}
                        alt={block.alt}
                        caption={block.caption}
                        size="wide"
                      />
                    );
                  case "gallery":
                    return (
                      <Gallery 
                        key={idx}
                        images={block.images}
                      />
                    );
                  case "callout":
                    return (
                      <div key={idx} className="my-8 border-l-2 border-accent bg-ink/5 p-6 rounded-r">
                        {block.title && (
                          <h4 className="font-serif text-lg font-semibold text-ink mb-2">
                            {block.title}
                          </h4>
                        )}
                        <p className="text-ink-light m-0">{block.text}</p>
                      </div>
                    );
                  default:
                    return null;
                }
              })
            ) : (
              <p>No content has been added to this entry yet.</p>
            )}
          </motion.div>
          
          <AuthorInfo author={article.author} />
        </article>
      </main>
      
      <Footer />
    </div>
  );
}
