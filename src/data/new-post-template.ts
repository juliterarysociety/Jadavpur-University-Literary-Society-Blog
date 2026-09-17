import type { Article } from "../types";
import { primaryAuthor } from "./authors";

/**
 * NEW POST TEMPLATE
 * 
 * Instructions:
 * 1. Duplicate this object or copy it into `src/data/articles.ts`.
 * 2. Fill in the title, slug, tags, cover image, and content blocks.
 * 3. Add it to the `articles` array in `src/data/articles.ts`.
 * 4. Your new article will automatically render with full SEO, navigation, and embeds!
 */
export const templatePost: Article = {
  id: "your-post-id",
  slug: "your-post-url-slug",
  title: "Your Title Goes Here: An Engaging Subtitle",
  excerpt: "A brief, compelling summary (1-2 sentences) of what this article covers. Appears on cards and the hero header.",
  coverImage: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=1600&h=900&fit=crop",
  date: "October 20, 2023",
  readTime: "6 min read",
  author: primaryAuthor,
  tags: ["Essays", "Travel", "Photography"],
  contentBlocks: [
    {
      type: "paragraph",
      text: "Start your article with an opening paragraph that draws the reader in. Set the scene, state the central observation, or pose a thoughtful question."
    },
    {
      type: "heading",
      level: 2,
      text: "Section Header: The Heart of the Idea"
    },
    {
      type: "paragraph",
      text: "Develop your narrative or argument here. You can add as many paragraphs, images, or quotes as you need."
    },
    {
      type: "quote",
      quote: "Insert a memorable or resonant quote here to break up the flow and highlight a key takeaway.",
      author: "Author Name or Attribution"
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1200&h=800&fit=crop",
      alt: "Descriptive alt text for accessibility",
      caption: "A caption describing where or when this photograph was taken."
    },
    {
      type: "paragraph",
      text: "Continue the story following the image embed. You can transition smoothly between visual and written storytelling."
    },
    {
      type: "gallery",
      images: [
        {
          src: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&h=800&fit=crop",
          alt: "Gallery item 1",
          caption: "Caption 1"
        },
        {
          src: "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=800&h=800&fit=crop",
          alt: "Gallery item 2",
          caption: "Caption 2"
        }
      ]
    },
    {
      type: "callout",
      title: "Key Takeaway",
      text: "A highlighted callout box for concluding insights, resources, or notes for the reader."
    },
    {
      type: "paragraph",
      text: "Concluding thoughts that leave the reader with a lasting impression or reflection."
    }
  ]
};
