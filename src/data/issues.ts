import type { Issue } from "../types";

/**
 * Seasonal Issues & Archival Folios
 * Jadavpur University Arts and Literary Society (JUALS)
 */
export const issues: Issue[] = [
  {
    id: "issue-14-1",
    slug: "vol-14-issue-1",
    volume: "Vol. XIV",
    issueNumber: "Issue I",
    season: "Monsoon–Autumn Folio",
    title: "Memory, Rain & the Subaltern City",
    subtitle:
      "Original verse on the Open Air Theatre, suburban railway fictions, library marginalia, and silver gelatin plates from south Kolkata.",
    coverImage: "/images/editorial/aurobindo-bhavan-monsoon.svg",
    coverCaption:
      "Plate I — Aurobindo Bhavan Colonnade in October Squall, Architectural Monotype & Wash.",
    coverArtist: "Kabir Ganguly & Tathagata Bose",
    editorsNoteTitle: "On Keeping the Margins Damp",
    editorsNote: [
      "Every monsoon in Jadavpur begins as an interruption of schedule and ends as a revision of form. Lectures spill out onto brick verandas when the power falters; rehearsals under the Open Air Theatre canopy adapt their cadence to the drumming of rain on corrugated tin; notebooks carried from 8B Bus Stand arrive with softened corners and running ink.",
      "In assembling Volume XIV, Issue I of the JUALS periodical, our editorial board chose not to smooth away that weather. The poems, stories, critical dispatches, and darkroom plates gathered in this folio ask how a university community writes from inside the texture of its immediate city—from third-class carriages on the Sealdah South line to forty-year-old pencil markings discovered in the Central Library annex.",
      "We offer these pages in the spirit of Kolkata’s enduring little-magazine tradition: unhurried, argumentative, and attentive to the cadence of both English and the vernacular."
    ],
    editorsSignoff: "Debanjan Mukherjee & Sohini Roy",
    editorsRole: "Joint Editors-in-Chief · JUALS Editorial Board",
    featured: true,
    publishedDate: "October 2025",
  },
  {
    id: "issue-13-2",
    slug: "vol-13-issue-2",
    volume: "Vol. XIII",
    issueNumber: "Issue II",
    season: "Winter–Spring Broadsheet",
    title: "Margin, Machine & the Vernacular Press",
    subtitle:
      "Dispatches on College Street small presses, Badal Sircar’s courtyard dramaturgy, letterpress foundry specimen sheets, and translation ethics.",
    coverImage: "/images/editorial/college-street-letterpress.svg",
    coverCaption:
      "Plate IV — Movable Bengali & Roman lead type cases at a Patuatola Lane workshop, College Street.",
    coverArtist: "Tathagata Bose",
    editorsNoteTitle: "Against the Frictionless Page",
    editorsNote: [
      "When literature migrates entirely to algorithmic feeds, every poem and critical essay is flattened into the same weightless scroll. Our Winter–Spring Broadsheet turns back to the physical mechanics of how words meet public space in Bengal: the twenty-page newsprint pamphlet stapled by hand, the street-corner play staged without spotlights, and the translator wrestling with an idiom that refuses domestication.",
      "Across these essays, reviews, and visual plates, contributors from Comparative Literature, Film Studies, Printing Engineering, and History examine what happens when student writing claims autonomy from commercial gatekeepers."
    ],
    editorsSignoff: "Sohini Roy & Arunava Sen",
    editorsRole: "Managing Editors · Vol. XIII, Issue II",
    featured: false,
    publishedDate: "March 2025",
  },
  {
    id: "issue-13-1",
    slug: "vol-13-issue-1",
    volume: "Vol. XIII",
    issueNumber: "Issue I",
    season: "Monsoon Anthology",
    title: "Translating the Everyday: Polyphony & Place",
    subtitle:
      "Bilingual verse suites, architectural studies of fading lime-plaster courtyards, and critical dialogues on contemporary South Asian poetics.",
    coverImage: "/images/editorial/subarnarekha-river-woodcut.svg",
    coverCaption:
      "Plate VII — Subarnarekha River Bend at Dawn, Woodblock & Ink Monotype on Nepalese Rag Paper.",
    coverArtist: "Kabir Ganguly",
    editorsNoteTitle: "A House of Many Tongues",
    editorsNote: [
      "Walk from Aurobindo Bhavan toward the Subhas Chandra Bose Walkway at four in the afternoon and you will hear three languages inside a single sentence. Volume XIII, Issue I celebrates that polyphony—pairing translations from Bengali verse with architectural meditations on how our built environment holds collective memory."
    ],
    editorsSignoff: "Madhurima Das & Rituparna Ghosh Dastidar",
    editorsRole: "Associate Editors · Vol. XIII, Issue I",
    featured: false,
    publishedDate: "September 2024",
  },
];

export const currentIssue: Issue =
  issues.find((issue) => issue.featured) || issues[0];
