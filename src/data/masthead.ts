import type { MastheadSection } from "../types";

/**
 * Student Editorial Board, Genre Editors, Curators & Faculty Advisors
 * Jadavpur University Arts and Literary Society (JUALS) — 2025–2026 Session
 */
export const mastheadSections: MastheadSection[] = [
  {
    id: "executive-board",
    code: "I",
    title: "Editors-in-Chief & Managing Desk",
    description:
      "Responsible for seasonal issue curation, editorial manifestos, manuscript commissioning, and archival stewardship.",
    members: [
      {
        id: "m-1",
        name: "Debanjan Mukherjee",
        role: "Joint Editor-in-Chief",
        department: "Department of English",
        year: "M.A. II",
        contributorSlug: "debanjan-mukherjee",
        note: "Verse, Prosody & Archival Editions",
      },
      {
        id: "m-2",
        name: "Sohini Roy",
        role: "Joint Editor-in-Chief",
        department: "Department of Comparative Literature",
        year: "M.A. II",
        contributorSlug: "sohini-roy",
        note: "Narrative Prose & Translation Desk",
      },
      {
        id: "m-3",
        name: "Arunava Sen",
        role: "Managing Editor",
        department: "Department of Philosophy",
        year: "B.A. III",
        contributorSlug: "arunava-sen",
        note: "Critical Essays, Symposia & Copy Desk",
      },
    ],
  },
  {
    id: "genre-desks",
    code: "II",
    title: "Department & Genre Editors",
    description:
      "Lead anonymous monthly peer-readings across poetry, vernacular translation, fiction, and cultural criticism.",
    members: [
      {
        id: "m-4",
        name: "Madhurima Das",
        role: "Editor · Poetry & Vernacular Translation",
        department: "Department of Bengali",
        year: "M.A. II",
        contributorSlug: "madhurima-das",
        note: "Bengali–English Bilingual Folios",
      },
      {
        id: "m-5",
        name: "Rituparna Ghosh Dastidar",
        role: "Editor · Reviews, Cinema & Theatre",
        department: "Department of Film Studies",
        year: "M.A. I",
        contributorSlug: "rituparna-ghosh-dastidar",
        note: "Performance & Moving-Image Criticism",
      },
      {
        id: "m-6",
        name: "Ananya Chatterjee",
        role: "Editor · Non-Fiction, History & Opinion",
        department: "Department of History",
        year: "M.A. I",
        contributorSlug: "ananya-chatterjee",
        note: "Pamphlet Culture & Urban Chronicles",
      },
    ],
  },
  {
    id: "visual-press-desk",
    code: "III",
    title: "Visual Plates, Darkroom & Production",
    description:
      "Oversees exhibition plates, 35mm film digitization, print broadsheet typography, and layout geometry.",
    members: [
      {
        id: "m-7",
        name: "Tathagata Bose",
        role: "Art & Production Director",
        department: "Department of Printing Engineering",
        year: "B.E. IV",
        contributorSlug: "tathagata-bose",
        note: "Silver Gelatin Plates & Broadsheet Presswork",
      },
      {
        id: "m-8",
        name: "Kabir Ganguly",
        role: "Visual Arts & Exhibition Curator",
        department: "Department of Architecture",
        year: "B.Arch IV",
        contributorSlug: "kabir-ganguly",
        note: "Illustrations, Monotypes & Spatial Design",
      },
    ],
  },
  {
    id: "advisory-colophon",
    code: "IV",
    title: "Archival Fellows & Society Conveners",
    description:
      "Campus coordination for Open Air Theatre readings, inter-university colloquia, and the Little Magazine library liaison.",
    members: [
      {
        id: "m-9",
        name: "Subhamoy Bhattacharya",
        role: "General Secretary · JUALS",
        department: "Department of International Relations",
        year: "M.A. I",
        note: "Campus Colloquia & OAT Logistics",
      },
      {
        id: "m-10",
        name: "Poulomi Sengupta",
        role: "Convenor · Jadavpur Letters Festival",
        department: "Department of Economics",
        year: "B.A. III",
        note: "Small-Press Book Fair & Bursaries",
      },
      {
        id: "m-11",
        name: "Rishav Chakraborty",
        role: "Archival & Proofing Secretary",
        department: "Department of Computer Science & Engineering",
        year: "B.E. III",
        note: "Digital Periodical & Open-Access Index",
      },
    ],
  },
];
