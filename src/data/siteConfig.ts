import type { SiteConfig } from "../types";

/**
 * Jadavpur University Arts and Literary Society (JUALS) - Site Configuration
 * 
 * Centralizes society branding, streamlined 5-link masthead navigation,
 * colophon metadata, Instagram link, official contact email, and editorial descriptions.
 */
export const siteConfig: SiteConfig = {
  siteName: "Jadavpur University Arts and Literary Society",
  brandMark: "JUALS",
  tagline: "The literary journal of Jadavpur University — poetry, stories, visual art, and cultural dissent from Kolkata.",
  
  colophon: {
    dateline: "Jadavpur University · Kolkata · 22.4989° N",
    issnOrCode: "Periodical Folio · Est. Kolkata",
    daylightLabel: "Daylight Paper",
    eveningLabel: "Evening Ink",
    primaryNavLinks: [
      { name: "Issues", path: "/issues" },
      { name: "Poetry", path: "/category/poetry" },
      { name: "Prose", path: "/category/prose" },
      { name: "Artwork", path: "/artwork" },
      { name: "Chronicle", path: "/chronicle" },
    ],
    searchCuratedQueries: [
      "Jibanananda",
      "Open Air Theatre",
      "Sealdah South",
      "Badal Sircar",
      "Monsoon",
      "Comparative Literature",
    ],
  },

  hero: {
    headline: "Words, ink, and campus echoes from Kolkata.",
    leadText: "Words, ink, and",
    accentWord: "campus echoes",
    tailText: "from Kolkata.",
    subtext: "The literary journal of Jadavpur University Arts & Literary Society. Fresh verse, narrative prose, critical reviews, and visual art.",
  },

  navigation: [
    { name: "Issues & Folios", path: "/issues" },
    { name: "Poetry", path: "/category/poetry" },
    { name: "Prose", path: "/category/prose" },
    { name: "Artwork", path: "/artwork" },
    { name: "Reviews", path: "/category/reviews" },
    { name: "Opinion", path: "/category/opinion" },
    { name: "Contributors", path: "/contributors" },
    { name: "Campus Chronicle", path: "/chronicle" },
    { name: "Call for Submissions", path: "/submissions" },
    { name: "About & Masthead", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ],

  socialLinks: [
    { 
      platform: "Instagram", 
      url: "https://www.instagram.com/juliterarysociety/", 
      handle: "@juliterarysociety" 
    },
    { 
      platform: "Email", 
      url: "mailto:ju.literarysociety@gmail.com", 
      handle: "ju.literarysociety@gmail.com" 
    },
  ],

  about: {
    headline: "About the Society",
    introQuote: "Cultivating literature, arts, critical inquiry, and creative expression across the vibrant community of Jadavpur University.",
    storyParagraphs: [
      "The Jadavpur University Arts and Literary Society (JUALS) is a student-led collective dedicated to fostering a rich culture of reading, creative writing, artistic dialogue, debate, and cultural celebration.",
      "Rooted in Jadavpur University's storied tradition of free expression and interdisciplinary dialogue, JUALS conducts year-round events including open-mic poetry sessions, literary quizzes, book discussions, art showcases, author interactions, and annual festivals.",
      "Through this digital publication and our seasonal print folios, we curate original student verse, narrative prose, critical cultural reviews, commentary, and visual artwork—providing a welcoming, rigorous platform for emerging voices across the Arts, Science, and Engineering faculties."
    ],
    contactEmail: "ju.literarysociety@gmail.com",
  },

  submissions: {
    headline: "Call for Submissions",
    subtext: "The Jadavpur University Arts and Literary Society (JUALS) invites unpublished poetry, narrative prose, literary criticism, and visual plates for our digital quarterly and annual print anthology.",
    readingPeriodLabel: "Reading Cycle",
    readingPeriodValue: "Rolling monthly review; dispatches received by the final Sunday of the month enter consideration for the immediate seasonal issue.",
    dispatchLabel: "Editorial Dispatch",
    dispatchFormat: "Attach manuscripts (.docx or .pdf) or visual plates (300 DPI JPG/PNG) with subject line: JUALS — [Genre] — [Author Name].",
    categories: [
      {
        code: "01",
        title: "Poetry & Translation",
        specification: "Up to 3 poems · English or translated vernacular with source text",
        description: "Submit up to three poems in a single folio. Both original English verse and translations from Bengali or other South Asian languages (accompanied by the source text) are welcome."
      },
      {
        code: "02",
        title: "Prose & Short Fiction",
        specification: "800–2,500 words · Short fiction, memoir, or flash prose (<500 words)",
        description: "Narrative fiction, literary essays, and creative non-fiction rooted in close observation and voice. Flash prose pieces under 500 words may be submitted in sets of two."
      },
      {
        code: "03",
        title: "Reviews & Critical Essays",
        specification: "1,000–1,800 words · Books, cinema, theatre, and translation criticism",
        description: "Rigorous critical engagements with contemporary or classic literature, cinema, theatrical productions, music, and translation aesthetics."
      },
      {
        code: "04",
        title: "Artwork & Visual Plates",
        specification: "Minimum 300 DPI · Archival scans, photography, or illustration",
        description: "High-resolution drawings, paintings, film or digital photography, and graphic narratives accompanied by plate title, medium, and a concise artist note."
      }
    ],
    editorialNotes: [
      "All manuscripts and visual works must be original and previously unpublished in print or online periodicals. Simultaneous submissions are permitted with prompt notice upon acceptance elsewhere.",
      "Include a 50-word biographical note stating your department, university affiliation, and year of study in the body of your email.",
      "Contributors retain full copyright to their work; JUALS requests first serial digital and print anthology archival rights."
    ]
  },

  contact: {
    headline: "Editorial Correspondence",
    subtext: "Direct inquiries regarding manuscript submissions, critical symposia, society membership, or archival reprints to the editorial board in Kolkata.",
    addressLines: [
      "Jadavpur University",
      "188 Raja S.C. Mallick Road",
      "Kolkata, West Bengal 700032, India"
    ]
  },

  footer: {
    description: "The literary journal of Jadavpur University Arts & Literary Society. Fresh verse, narrative prose, critical reviews, and visual art from Kolkata.",
    copyrightNotice: `© ${new Date().getFullYear()} Jadavpur University Arts and Literary Society (JUALS). All rights reserved.`,
    creditsNotice: "Jadavpur University, 188 Raja S.C. Mallick Road, Kolkata 700032, West Bengal, India.",
  },
};
