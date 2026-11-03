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
  slug: string;
  name: string;
  role?: string;
  department?: string;
  graduationYear?: string;
  disciplines?: string[];
  featuredQuote?: string;
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
  accessionId?: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  title: string;
  caption: string;
  medium?: string;
  dimensions?: string;
  cameraOrProcess?: string;
  curatorialNote?: string;
  artistName?: string;
  artistSlug?: string;
  issueSlug?: string;
  issueLabel?: string;
  location?: string;
  date?: string;
}

export interface VerseLine {
  text: string;
  indent?: 0 | 1 | 2 | 3;
  annotationId?: number;
}

export interface TranslationStanza {
  original: string[];
  transliteration?: string[];
  english: string[];
  note?: string;
}

export interface ScholarlyAnnotation {
  number: number;
  label: string;
  text: string;
  source?: string;
}

export type ContentBlock =
  | {
      type: "paragraph";
      text: string;
      annotationIds?: number[];
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
      type: "poetry";
      title?: string;
      epigraph?: string;
      epigraphAttribution?: string;
      stanzas: Array<Array<string | VerseLine>>;
      showLineNumbers?: boolean;
      footnote?: string;
    }
  | {
      type: "translation";
      title?: string;
      originalLanguage: string;
      originalAuthor: string;
      translatorName: string;
      historicalNote?: string;
      stanzas: TranslationStanza[];
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
  issueSlug?: string;
  issueLabel?: string;
  pages?: string;
  doiOrAccession?: string;
  originalLanguage?: string;
  translator?: string;
  annotations?: ScholarlyAnnotation[];
  contentBlocks?: ContentBlock[];
  rawMarkdown?: string;
}

export interface Issue {
  id: string;
  slug: string;
  volume: string;
  issueNumber: string;
  season: string;
  title: string;
  subtitle: string;
  coverImage: string;
  coverCaption: string;
  coverArtist?: string;
  editorsNoteTitle: string;
  editorsNote: string[];
  editorsSignoff: string;
  editorsRole: string;
  featured: boolean;
  publishedDate: string;
}

export interface ChronicleEvent {
  id: string;
  code: string;
  title: string;
  category: "Reading" | "Symposium" | "Workshop" | "Exhibition" | "Colloquium" | "Festival";
  date: string;
  time: string;
  venue: string;
  status: "Upcoming" | "Archival Dispatch";
  summary: string;
  speakers?: string[];
  dispatchNotes?: string;
  relatedIssueSlug?: string;
}

export interface MastheadMember {
  id: string;
  name: string;
  role: string;
  department: string;
  year?: string;
  contributorSlug?: string;
  note?: string;
}

export interface MastheadSection {
  id: string;
  code: string;
  title: string;
  description: string;
  members: MastheadMember[];
}

export interface SubmissionCategorySpec {
  code: string;
  title: string;
  specification: string;
  description: string;
}

export interface SiteConfig {
  siteName: string;
  brandMark: string;
  tagline: string;
  colophon: {
    dateline: string;
    issnOrCode: string;
    daylightLabel: string;
    eveningLabel: string;
    primaryNavLinks: NavigationLink[];
    searchCuratedQueries: string[];
  };
  hero: {
    headline: string;
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
  submissions: {
    headline: string;
    subtext: string;
    readingPeriodLabel: string;
    readingPeriodValue: string;
    dispatchLabel: string;
    dispatchFormat: string;
    categories: SubmissionCategorySpec[];
    editorialNotes: string[];
  };
  contact: {
    headline: string;
    subtext: string;
    addressLines: string[];
  };
  footer: {
    description: string;
    copyrightNotice: string;
    creditsNotice: string;
  };
}
