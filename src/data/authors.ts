import type { Author } from "../types";

/**
 * Editorial Profiles for Jadavpur University Literary Society
 */
export const primaryAuthor: Author = {
  id: "juals-editorial",
  name: "JUALS Editorial Board",
  role: "Jadavpur University Arts and Literary Society",
  avatar: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&h=400&fit=crop",
  bio: "Curated by the student editorial and creative team of Jadavpur University Arts and Literary Society (JUALS), featuring voices across arts, sciences, and engineering faculties.",
  email: "ju.literarysociety@gmail.com",
  instagram: "@juliterarysociety",
};

export const authors: Record<string, Author> = {
  primary: primaryAuthor,
  editorial: primaryAuthor,
};
