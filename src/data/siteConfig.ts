import type { SiteConfig } from "../types";

/**
 * Jadavpur University Arts and Literary Society (JUALS) - Site Configuration
 * 
 * Centralizes society branding, the 8 primary navigation tabs,
 * Instagram link, official contact email, and editorial descriptions.
 */
export const siteConfig: SiteConfig = {
  siteName: "Jadavpur University Arts and Literary Society",
  brandMark: "JUALS",
  tagline: "The literary journal of Jadavpur University — poetry, stories, visual art, and cultural dissent from Kolkata.",
  
  hero: {
    leadText: "Words, ink, and",
    accentWord: "campus echoes",
    tailText: "from Kolkata.",
    subtext: "The literary journal of Jadavpur University Arts & Literary Society. Fresh verse, narrative prose, critical reviews, and visual art.",
  },

  navigation: [
    { name: "Poetry", path: "/category/poetry" },
    { name: "Prose", path: "/category/prose" },
    { name: "Artwork", path: "/artwork" },
    { name: "Reviews", path: "/category/reviews" },
    { name: "Opinion", path: "/category/opinion" },
    { name: "Call for Submissions", path: "/submissions" },
    { name: "About", path: "/about" },
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
      "Through this digital publication, we curate original student verse, narrative prose, critical cultural reviews, commentary, and visual artwork—providing a welcoming platform for emerging voices."
    ],
    contactEmail: "ju.literarysociety@gmail.com",
  },

  footer: {
    description: "The literary journal of Jadavpur University Arts & Literary Society. Fresh verse, narrative prose, critical reviews, and visual art from Kolkata.",
    copyrightNotice: `© ${new Date().getFullYear()} Jadavpur University Arts and Literary Society (JUALS). All rights reserved.`,
    creditsNotice: "Jadavpur University, 188 Raja S.C. Mallick Road, Kolkata 700032, West Bengal, India.",
  },
};
