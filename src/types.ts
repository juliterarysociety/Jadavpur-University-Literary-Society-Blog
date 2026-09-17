export interface SocialLink {
  platform: string;
  url: string;
  handle?: string;
}

export interface NavigationLink {
  name: string;
  path: string;
}

export interface Author {
  id: string;
  name: string;
  role?: string;
  avatar: string;
  bio: string;
  email?: string;
  twitter?: string;
  instagram?: string;
  substack?: string;
  github?: string;
}

export interface PhotoItem {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  location?: string;
  date?: string;
}

export type ContentBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "heading";
      level: 2 | 3;
      text: string;
    }
  | {
      type: "quote";
      quote: string;
      author?: string;
      citation?: string;
    }
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
      aspectRatio?: "16/9" | "4/3" | "3/2" | "1/1";
    }
  | {
      type: "gallery";
      images: Array<{
        src: string;
        alt: string;
        caption?: string;
      }>;
      columns?: 2 | 3;
    }
  | {
      type: "callout";
      title?: string;
      text: string;
    };

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  readTime: string;
  author: Author;
  tags: string[];
  contentBlocks?: ContentBlock[];
  rawMarkdown?: string;
}

export interface SiteConfig {
  siteName: string;
  brandMark: string;
  tagline: string;
  hero: {
    leadText: string;
    accentWord: string;
    tailText: string;
    subtext: string;
  };
  navigation: NavigationLink[];
  socialLinks: SocialLink[];
  about: {
    headline: string;
    introQuote: string;
    storyParagraphs: string[];
    contactEmail: string;
  };
  footer: {
    description: string;
    copyrightNotice: string;
    creditsNotice: string;
  };
}
