import type { Article, Author, ContentBlock } from "../types";
import { primaryAuthor } from "./authors";

export type { Article, Author, ContentBlock };
export const defaultAuthor: Author = primaryAuthor;

export const articles: Article[] = [
  {
    id: "1",
    slug: "monsoon-over-oat-verses",
    title: "Monsoon Over OAT: Verses on Rust and Rain",
    excerpt: "A suite of rain-drenched poems reflecting on quiet afternoons, the Open Air Theatre, and the scent of wet earth across the campus.",
    coverImage: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=1600&h=900&fit=crop",
    date: "October 14, 2023",
    readTime: "4 min read",
    author: {
      id: "contributor-1",
      name: "Debanjan Mukherjee",
      role: "Department of English, JU",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      bio: "Student poet exploring cityscapes, memory, and Bengali modernism.",
      instagram: "@juliterarysociety"
    },
    tags: ["Poetry", "Campus Voices"],
    contentBlocks: [
      {
        type: "paragraph",
        text: "The afternoon settles on the concrete tiers of the Open Air Theatre like a deep breath drawn before thunder. Leaves from the mahogany trees drift across puddles, carrying messages from one monsoon to the next."
      },
      {
        type: "quote",
        quote: "Between the lecture bells and rainclouds / the yellow tram slows on the avenue / our notebooks gather damp margins / where thoughts become rhymes.",
        author: "From 'Stanzas for an October Rain'"
      },
      {
        type: "heading",
        level: 2,
        text: "I. The Corridor of Shadows"
      },
      {
        type: "paragraph",
        text: "Step soft along the red brick corridors. The fan blades turn lazy circles against the ceiling, humming a rhythm older than our syllabus. Outside, the skies break into sheets of grey over the pond, washing clean every stone step."
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1200&h=800&fit=crop",
        alt: "Rain on pavement lights",
        caption: "Reflections in the dusk after rain."
      },
      {
        type: "heading",
        level: 2,
        text: "II. Subhas Chandra Bose Walkway"
      },
      {
        type: "paragraph",
        text: "Umbrellas collide with polite smiles; chai cups steam against the chill. A poem is nothing but this momentary stillness captured before the crowd disperses toward the station."
      }
    ]
  },
  {
    id: "2",
    slug: "midnight-train-to-sealdah",
    title: "The Midnight Train to Sealdah: A Kolkata Fiction",
    excerpt: "Short fiction capturing the rhythmic clatter of local suburban trains, missed appointments, and the strange solace of third-class carriages.",
    coverImage: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1600&h=900&fit=crop",
    date: "September 29, 2023",
    readTime: "7 min read",
    author: {
      id: "contributor-2",
      name: "Sohini Roy",
      role: "Comparative Literature, JU",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      bio: "Writer of urban fiction and translator.",
      instagram: "@juliterarysociety"
    },
    tags: ["Prose", "Fiction"],
    contentBlocks: [
      {
        type: "paragraph",
        text: "The train never arrives empty. Even at quarter past midnight, when the tea stalls outside Jadavpur station have begun dousing their charcoal fires, the yellow metal coaches roll in bearing the weary sigh of thirty thousand evening commuters."
      },
      {
        type: "quote",
        quote: "In Kolkata, no journey is ever purely geographic; it is an interrogation of everyone you might have been.",
        author: "Sohini Roy"
      },
      {
        type: "paragraph",
        text: "Partha sat near the rusted doorway, the iron bar cool beneath his wrist. In his satchel was a damp copy of Jibanananda Das and three blue inland letters that he would never post."
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=1200&h=800&fit=crop",
        alt: "Suburban railway station at night",
        caption: "Platform lights fading into evening mist."
      },
      {
        type: "heading",
        level: 2,
        text: "The Language of the Vendors"
      },
      {
        type: "paragraph",
        text: "A vendor with roasted peanuts wrapped in discarded paper cones navigated the doorway with the poise of an acrobat. To live in this city is to marvel at how people balance their lives on two inches of floorboard."
      }
    ]
  },
  {
    id: "3",
    slug: "review-days-of-miracle-and-wonder",
    title: "Review: The Poetics of Urban Disquiet in Contemporary Translation",
    excerpt: "A critical review of emerging South Asian poetry collections that grapple with displacement, climate grief, and linguistic hybridity.",
    coverImage: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1600&h=900&fit=crop",
    date: "September 18, 2023",
    readTime: "6 min read",
    author: primaryAuthor,
    tags: ["Reviews", "Literary Criticism"],
    contentBlocks: [
      {
        type: "paragraph",
        text: "To translate poetry from the vernacular is rarely an act of seamless transfer; it is an act of respectful friction. In recent anthologies published across South Asia, we see a refreshing refusal to domesticate idiom for Western anglophone palates."
      },
      {
        type: "quote",
        quote: "Translation is not a copy; it is a conversation across generations where the original is allowed to grow and echo anew.",
        author: "JUALS Review Panel"
      },
      {
        type: "paragraph",
        text: "The poems examined here challenge the reader to sit with unfamiliar syntactic rhythms. The vocabulary of street corners, protest songs, and grandmother's lullabies remains deliberately textured."
      },
      {
        type: "callout",
        title: "Recommended Reading",
        text: "Essential works covered: New Bengali Anthologies (2020-2023) and Selected South Asian Translations in Verse."
      }
    ]
  },
  {
    id: "4",
    slug: "opinion-little-magazines-digital-future",
    title: "Opinion: Can the Spirit of Kolkata's Little Magazines Survive the Algorithm?",
    excerpt: "From the lanes of College Street to Substack newsletters: why small-press editorial independence remains the lifeblood of campus writing.",
    coverImage: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1600&h=900&fit=crop",
    date: "August 28, 2023",
    readTime: "5 min read",
    author: primaryAuthor,
    tags: ["Opinion", "Culture", "Essays"],
    contentBlocks: [
      {
        type: "paragraph",
        text: "Kolkata's 'little magazine' movement was never about commercial circulation. It was about fierce autonomy: students, renegade poets, and radical essayists pooling pocket money to print twenty-page pamphlets on newsprint."
      },
      {
        type: "quote",
        quote: "The small press does not ask for permission from gatekeepers. It creates the room where culture renews itself.",
        author: "JUALS Editorial Opinion"
      },
      {
        type: "paragraph",
        text: "As literary journals shift online, we must resist turning essays into attention-economy clickbait. A university arts and literary society must protect slow reading, long-form debate, and the courage to publish experimental craft."
      }
    ]
  }
];
