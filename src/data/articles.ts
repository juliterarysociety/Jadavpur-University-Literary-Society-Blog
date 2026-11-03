import type { Article, Author, ContentBlock } from "../types";
import { primaryAuthor, authorsBySlug } from "./authors";

export type { Article, Author, ContentBlock };
export const defaultAuthor: Author = primaryAuthor;

export const articles: Article[] = [
  {
    id: "1",
    slug: "monsoon-over-oat-verses",
    title: "Monsoon Over OAT: Verses on Rust and Rain",
    excerpt:
      "A suite of rain-drenched poems reflecting on quiet afternoons, the Open Air Theatre, and the scent of wet earth across the campus.",
    coverImage:
      "/images/editorial/aurobindo-bhavan-monsoon.svg",
    date: "October 14, 2025",
    readTime: "6 min read",
    author: authorsBySlug["debanjan-mukherjee"],
    tags: ["Poetry", "Campus Voices"],
    issueSlug: "vol-14-issue-1",
    issueLabel: "Vol. XIV · Issue I",
    pages: "pp. 7–14",
    doiOrAccession: "JUALS-XIV-I-01",
    originalLanguage: "English & Bengali",
    translator: "Debanjan Mukherjee",
    annotations: [
      {
        number: 1,
        label: "Open Air Theatre (OAT)",
        text: "Constructed beside the Subarna Jayanti Bhavan, the OAT's concentric concrete tiers have hosted student drama festivals, poetry readings, and general body assemblies since the 1970s.",
        source: "JUALS Campus Architectural Inventory, Plate I",
      },
      {
        number: 2,
        label: "Kalbaishakhi & Asharh",
        text: "While spring storms arrive suddenly from the northwest, the October late-monsoon depression (নিম্নচাপ) lingers over south Kolkata for days in a steady grey curtain.",
        source: "Author's Manuscript Note",
      },
      {
        number: 3,
        label: "Gate No. 4 Bookstalls",
        text: "The row of secondhand pamphlet and tea stalls opposite the Raja S.C. Mallick Road crossing, frequented by humanities students between afternoon seminars.",
        source: "Oral History Archive, Dept. of Comparative Literature",
      },
    ],
    contentBlocks: [
      {
        type: "paragraph",
        text: "The afternoon settles on the concrete tiers of the Open Air Theatre like a deep breath drawn before thunder. Leaves from the mahogany trees drift across puddles, carrying messages from one monsoon to the next.",
        annotationIds: [1],
      },
      {
        type: "poetry",
        title: "I. Stanzas for an October Rain",
        epigraph: "“Wait until the stone steps drink the first cloud.”",
        epigraphAttribution: "Notebook entry, Aurobindo Bhavan veranda",
        showLineNumbers: true,
        stanzas: [
          [
            { text: "Between the lecture bells and low-hung cloud,", indent: 0 },
            { text: "the yellow tram slows past the banyan root;", indent: 0 },
            { text: "our notebooks gather dampness in the crowd,", indent: 0 },
            { text: "and rain-rust settles on the iron flute", indent: 1 },
            { text: "of railings leading toward the amphitheatre.", indent: 2, annotationId: 1 },
          ],
          [
            { text: "No actor speaks upon the flooded stage,", indent: 0 },
            { text: "yet every tier is listening to the slate:", indent: 0 },
            { text: "how water edits each unfinished page,", indent: 0 },
            { text: "how chalk-dust dissolves beside the iron gate", indent: 1 },
            { text: "where earthen cups of tea outlast the storm.", indent: 2, annotationId: 2 },
          ],
          [
            { text: "We stay beneath the concrete overhang", indent: 0 },
            { text: "counting the syllables of falling tin—", indent: 0 },
            { text: "a chorus older than the songs we sang", indent: 1 },
            { text: "before the autumn semester could begin.", indent: 0 },
          ],
        ],
        footnote: "Composed during the October depression, 2025, between the Arts Faculty corridor and the OAT stage.",
      },
      {
        type: "heading",
        level: 2,
        text: "II. The Corridor of Shadows",
      },
      {
        type: "paragraph",
        text: "Step soft along the red brick corridors. The fan blades turn lazy circles against the ceiling, humming a rhythm older than our syllabus. Outside, the skies break into sheets of grey over the pond, washing clean every stone step.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1200&h=800&fit=crop",
        alt: "Rain on pavement lights",
        caption: "Reflections in the dusk after rain near Gate No. 4.",
      },
      {
        type: "translation",
        title: "III. বিকেল ও বৃষ্টির খসড়া / Draft of Afternoon & Rain",
        originalLanguage: "Bengali (বাংলা)",
        originalAuthor: "Debanjan Mukherjee",
        translatorName: "Translated from the Bengali by the Author",
        historicalNote:
          "Originally read in Bengali at the JUALS Monsoon Reading Circle before being rendered into English verse for Volume XIV.",
        stanzas: [
          {
            original: [
              "উন্মুক্ত মঞ্চের সিঁড়িতে জমে থাকে মেঘের ছায়া,",
              "ভেজা কৃষ্ণচূড়ার পাতা ঝরে পড়ে খাতার ভাঁজে—",
              "চার নম্বর গেটের চায়ের দোকানে ধোঁয়া ওঠে,",
              "আমাদের অসমাপ্ত তর্কগুলো বৃষ্টির শব্দে থামে।",
            ],
            transliteration: [
              "Unmukto mancher sinrite jome thake megher chhaya,",
              "Bheja krishnachurar pata jhore pore khatar bhanje—",
              "Char nombor geter chayer dokane dhoya othe,",
              "Amader osomapto torkogulo brishtir shobde thame.",
            ],
            english: [
              "Across the open theatre's steps the cloud-shadows pool,",
              "wet gulmohar leaflets slip between the folds of our notebooks—",
              "kettle-steam rises from the stall by Gate Number Four,",
              "and all our unfinished arguments pause inside the sound of rain.",
            ],
            note: "Gate Number Four refers to the southern humanities entrance along Raja S.C. Mallick Road.",
          },
          {
            original: [
              "সন্ধ্যার লোকাল ট্রেন হুইসেল দিয়ে চলে যায়,",
              "জলে ডুবে থাকা ঘাসে জোনাকির মতো আলো কাঁপে।",
            ],
            transliteration: [
              "Sondhyar local train whistle diye chole jay,",
              "Jole dube thaka ghase jonakir moto alo kanpe.",
            ],
            english: [
              "The evening local whistles past the railway siding,",
              "while streetlamp reflections tremble like fireflies in flooded grass.",
            ],
          },
        ],
      },
      {
        type: "paragraph",
        text: "Umbrellas collide with polite smiles; clay cups of chai steam against the chill. A poem is nothing but this momentary stillness captured before the crowd disperses toward Jadavpur station.",
        annotationIds: [3],
      },
    ],
  },
  {
    id: "2",
    slug: "midnight-train-to-sealdah",
    title: "The Midnight Train to Sealdah: A Kolkata Fiction",
    excerpt:
      "Short fiction capturing the rhythmic clatter of local suburban trains, missed appointments, and the strange solace of third-class carriages.",
    coverImage:
      "/images/editorial/tallygunge-tram-nocturne.svg",
    date: "September 29, 2025",
    readTime: "7 min read",
    author: authorsBySlug["sohini-roy"],
    tags: ["Prose", "Fiction"],
    issueSlug: "vol-14-issue-1",
    issueLabel: "Vol. XIV · Issue I",
    pages: "pp. 15–26",
    doiOrAccession: "JUALS-XIV-I-02",
    annotations: [
      {
        number: 1,
        label: "Sealdah South Section",
        text: "One of the oldest suburban railway corridors in eastern India, linking Canning, Diamond Harbour, and Baruipur through Jadavpur and Ballygunge into Sealdah terminus.",
        source: "Eastern Railway Historical Gazetteer",
      },
      {
        number: 2,
        label: "Blue Inland Letter Cards",
        text: "Standard-issue folded postal stationery (Indian Post) whose three-panel gummed flaps defined domestic correspondence prior to mobile telephony.",
        source: "Editorial Gloss",
      },
    ],
    contentBlocks: [
      {
        type: "paragraph",
        text: "The train never arrives empty. Even at quarter past midnight, when the tea stalls outside Jadavpur station have begun dousing their charcoal fires, the yellow metal coaches roll in bearing the weary sigh of thirty thousand evening commuters.",
        annotationIds: [1],
      },
      {
        type: "quote",
        quote:
          "In Kolkata, no journey is ever purely geographic; it is an interrogation of everyone you might have been.",
        author: "Sohini Roy",
      },
      {
        type: "paragraph",
        text: "Partha sat near the rusted doorway, the iron bar cool beneath his wrist. In his satchel was a damp copy of Jibanananda Das and three blue inland letters that he would never post.",
        annotationIds: [2],
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=1200&h=800&fit=crop",
        alt: "Suburban railway station at night",
        caption: "Platform lights fading into evening mist along the Sealdah South line.",
      },
      {
        type: "heading",
        level: 2,
        text: "The Language of the Vendors",
      },
      {
        type: "paragraph",
        text: "A vendor with roasted peanuts wrapped in discarded newspaper cones navigated the doorway with the poise of an acrobat. To live in this city is to marvel at how people balance their lives on two inches of floorboard.",
      },
    ],
  },
  {
    id: "3",
    slug: "marginalia-in-borrowed-dialectics",
    title: "Marginalia in a Borrowed Copy of ‘Illuminations’",
    excerpt:
      "Three lyric fragments written in the Central Library annex—tracing pencil underlinings left by readers forty years apart.",
    coverImage:
      "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1600&h=900&fit=crop",
    date: "September 18, 2025",
    readTime: "5 min read",
    author: authorsBySlug["arunava-sen"],
    tags: ["Poetry", "Campus Voices"],
    issueSlug: "vol-14-issue-1",
    issueLabel: "Vol. XIV · Issue I",
    pages: "pp. 27–33",
    doiOrAccession: "JUALS-XIV-I-03",
    annotations: [
      {
        number: 1,
        label: "Call No. 834.912 B468I",
        text: "Refers to the 1968 Hannah Arendt edited edition of Walter Benjamin's 'Illuminations' (trans. Harry Zohn) in the Jadavpur University Central Library stacks, whose date-due slip preserves stamps from November 1983.",
        source: "Central Library Circulation Ledger",
      },
      {
        number: 2,
        label: "Load-Shedding Summer of 1984",
        text: "Frequent evening power cuts across Calcutta during the 1980s forced library annexes and hostel study rooms to rely on hurricane lanterns and emergency inverters.",
        source: "Editorial Historical Note",
      },
    ],
    contentBlocks: [
      {
        type: "paragraph",
        text: "On page seventy-four, someone in 1984 drew a small asterisk beside Walter Benjamin's sentence on the storyteller, adding in faded graphite: 'Wait until the load-shedding ends.' That reader is now sixty, or gone, yet their pencil still interrupts my afternoon.",
        annotationIds: [1, 2],
      },
      {
        type: "poetry",
        title: "Three Graphite Glosses (Central Library, Third Floor)",
        epigraph: "“To read a borrowed book is to overhear a conversation through a thin wall.”",
        epigraphAttribution: "Marginal note on flyleaf, 14 November 1984",
        showLineNumbers: true,
        stanzas: [
          [
            { text: "I. THE DUE-DATE SLIP", indent: 0 },
            { text: "Violet ink stamped crookedly in eighty-four:", indent: 0, annotationId: 1 },
            { text: "fourteen November, due before the winter mist.", indent: 1 },
            { text: "Whose thumbprint softened page one-hundred-four", indent: 0 },
            { text: "where angel and catastrophe are kissed?", indent: 1 },
          ],
          [
            { text: "II. GRAPHITE PARENTHESIS", indent: 0 },
            { text: "A bracket drawn in 2B lead beside", indent: 0 },
            { text: "the thesis on the rubble of the past;", indent: 1 },
            { text: "outside the iron grille the trams collide", indent: 0 },
            { text: "with evening rain too sudden to outlast.", indent: 1, annotationId: 2 },
          ],
          [
            { text: "III. TO THE NEXT BORROWER", indent: 0 },
            { text: "Leave my small question mark beside her line—", indent: 0 },
            { text: "two strangers leaning on a single noun,", indent: 1 },
            { text: "while overhead the rusted ceiling-fan's design", indent: 0 },
            { text: "turns forty summers slowly upside down.", indent: 2 },
          ],
        ],
      },
      {
        type: "quote",
        quote:
          "Every library book is a palimpsest of strangers who paused at the exact same comma while rain beat against the iron grille.",
        author: "From 'Library Annex, Third Floor'",
      },
      {
        type: "paragraph",
        text: "We read in company even when we sit alone at the scarred teak tables. Beneath the whirr of the overhead fan, the margin becomes a quiet correspondence across decades.",
      },
    ],
  },
  {
    id: "4",
    slug: "pamphlet-lanes-of-college-street",
    title: "Folio & Ephemera: The Forgotten Pamphlet Presses of College Street",
    excerpt:
      "An archival investigation into the narrow lanes behind Surya Sen Street where student manifestos, verse chapbooks, and radical broadsheets were hand-set in lead.",
    coverImage:
      "/images/editorial/college-street-letterpress.svg",
    date: "March 22, 2025",
    readTime: "9 min read",
    author: authorsBySlug["ananya-chatterjee"],
    tags: ["Prose", "Opinion", "Essays"],
    issueSlug: "vol-13-issue-2",
    issueLabel: "Vol. XIII · Issue II",
    pages: "pp. 4–18",
    doiOrAccession: "JUALS-XIII-II-01",
    annotations: [
      {
        number: 1,
        label: "Patuatola Lane & Sitz-Presses",
        text: "Between 1952 and 1978, over forty hand-fed treadle and cylinder jobbing presses operated within a four-hundred-metre radius of College Square, printing student poetry octavos at nominal paper cost.",
        source: "Bengal Printing Trade Directory, 1969",
      },
      {
        number: 2,
        label: "Linotype & Lead Juktokkhor",
        text: "Setting complex Bengali conjunct consonants (যুক্তাক্ষর) by hand required 450-compartment wooden type cases; compositors could identify worn sorts by touch alone.",
        source: "Interview with Sri Nemai Mondal, Master Compositor, February 2025",
      },
      {
        number: 3,
        label: "Little Magazine Library & Research Centre",
        text: "Founded by Sandip Dutta at Tamer Lane, Kolkata, preserving tens of thousands of non-commercial Bengali periodicals and campus broadsheets.",
        source: "Archival Repository Citation",
      },
    ],
    contentBlocks: [
      {
        type: "paragraph",
        text: "Turn left past the wooden stalls of the Sanskrit College railings and the smell of damp newsprint and kerosene ink announces the small compositors' workshops before any signboard does. For over a century, these twelve-foot-wide rooms served as the unofficial parliament of Bengal's literary avant-garde.",
        annotationIds: [1],
      },
      {
        type: "quote",
        quote:
          "History remembers the bound hardcover in the national library, but revolutions in sensibility almost always arrive on sixteen stapled pages of cheap war-surplus paper.",
        author: "Ananya Chatterjee",
      },
      {
        type: "heading",
        level: 2,
        text: "The Economics of the Chapbook",
      },
      {
        type: "paragraph",
        text: "Interviewing retired compositors along Patuatola Lane reveals how closely university literary societies worked with master printers. Poets stood beside the galley proofs, adjusting line breaks on the spot when a particular Bengali ligature ran short in the type case.",
        annotationIds: [2],
      },
      {
        type: "callout",
        title: "Archival Note",
        text: "This essay draws upon sixty cataloged little-magazine issues housed at the Little Magazine Library & Research Centre and private collections in Jadavpur.",
      },
      {
        type: "paragraph",
        text: "What survives in the glass cabinets at Tamer Lane is not nostalgia, but a blueprint for intellectual self-reliance—proof that a literary culture requires neither corporate patronage nor glossy stock to endure.",
        annotationIds: [3],
      },
    ],
  },
  {
    id: "5",
    slug: "opinion-little-magazines-digital-future",
    title: "Opinion: Can the Spirit of Kolkata’s Little Magazines Survive the Algorithm?",
    excerpt:
      "From the lanes of College Street to digital periodicals: why small-press editorial independence remains the lifeblood of campus writing.",
    coverImage:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1600&h=900&fit=crop",
    date: "March 10, 2025",
    readTime: "5 min read",
    author: authorsBySlug["tathagata-bose"],
    tags: ["Opinion", "Culture", "Essays"],
    issueSlug: "vol-13-issue-2",
    issueLabel: "Vol. XIII · Issue II",
    pages: "pp. 19–25",
    doiOrAccession: "JUALS-XIII-II-02",
    annotations: [
      {
        number: 1,
        label: "Kallol & Krittibas Precedents",
        text: "Periodical movements such as 'Kallol' (1923) and 'Krittibas' (1953) established the template for youth-edited, non-conformist literary journals in Bengal.",
        source: "Comparative Literature Seminar Monograph",
      },
    ],
    contentBlocks: [
      {
        type: "paragraph",
        text: "Kolkata's 'little magazine' movement was never about commercial circulation. It was about fierce autonomy: students, renegade poets, and radical essayists pooling pocket money to print twenty-page pamphlets on newsprint.",
        annotationIds: [1],
      },
      {
        type: "quote",
        quote:
          "The small press does not ask for permission from gatekeepers. It creates the room where culture renews itself.",
        author: "Tathagata Bose",
      },
      {
        type: "paragraph",
        text: "As literary journals shift online, we must resist turning essays into attention-economy clickbait. A university arts and literary society must protect slow reading, long-form debate, and the courage to publish experimental craft.",
      },
    ],
  },
  {
    id: "6",
    slug: "notes-on-third-theatre-and-courtyard-staging",
    title: "Notes on Courtyard Staging and the Intimacy of Third Theatre",
    excerpt:
      "An essay on Badal Sircar's legacy in campus street plays, where the proscenium arch dissolves into a circle of brick and afternoon light.",
    coverImage:
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=1600&h=900&fit=crop",
    date: "February 19, 2025",
    readTime: "8 min read",
    author: authorsBySlug["rituparna-ghosh-dastidar"],
    tags: ["Reviews", "Prose", "Essays"],
    issueSlug: "vol-13-issue-2",
    issueLabel: "Vol. XIII · Issue II",
    pages: "pp. 26–37",
    doiOrAccession: "JUALS-XIII-II-03",
    annotations: [
      {
        number: 1,
        label: "Anganmancha & Satabdi",
        text: "Badal Sircar (1925–2011) formulated 'Third Theatre' through his troupe Satabdi, moving performances out of commercial proscenium halls into public parks, village squares, and university courtyards.",
        source: "Sircar, 'The Third Theatre' (1978)",
      },
    ],
    contentBlocks: [
      {
        type: "paragraph",
        text: "When a performance dispenses with footlights, velvet curtains, and ticketed distance, the actor's breath becomes part of the spectator's own posture. In university courtyards across Kolkata, theatre has long thrived on this deliberate austerity.",
        annotationIds: [1],
      },
      {
        type: "quote",
        quote:
          "A play requires neither spotlight nor painted backdrop—only five square metres of swept ground and the willingness to look a stranger in the eye.",
        author: "Rituparna Ghosh Dastidar",
      },
      {
        type: "paragraph",
        text: "What remains radical in these student productions is not spectacle, but proximity. Without amplification, every syllable must carry across the brick steps through conviction alone.",
      },
    ],
  },
  {
    id: "7",
    slug: "review-days-of-miracle-and-wonder",
    title: "Review: The Poetics of Urban Disquiet in Contemporary Translation",
    excerpt:
      "A critical review of emerging South Asian poetry collections that grapple with displacement, climate grief, and linguistic hybridity.",
    coverImage:
      "/images/editorial/subarnarekha-river-woodcut.svg",
    date: "September 18, 2024",
    readTime: "7 min read",
    author: authorsBySlug["madhurima-das"],
    tags: ["Reviews", "Literary Criticism"],
    issueSlug: "vol-13-issue-1",
    issueLabel: "Vol. XIII · Issue I",
    pages: "pp. 8–19",
    doiOrAccession: "JUALS-XIII-I-01",
    originalLanguage: "Bengali",
    translator: "Madhurima Das",
    annotations: [
      {
        number: 1,
        label: "Untranslatable Topographies: 'Para' & 'Adda'",
        text: "Retaining neighbourhood spatial nouns such as 'para' (পাড়া) and 'roak' (রক—the raised street-side stoop) preserves the civic architecture of Bengali verse against flattening English equivalents.",
        source: "JUALS Translation Workshop Monograph, Vol. XIII",
      },
      {
        number: 2,
        label: "Sundarbans Tidal Elegies",
        text: "Recent verse cycles from southern Bengal increasingly weave traditional 'Bonbibir Johuranama' rhythms with contemporary accounts of saline intrusion and embankment collapse.",
        source: "Archival Review Note",
      },
    ],
    contentBlocks: [
      {
        type: "paragraph",
        text: "To translate poetry from the vernacular is rarely an act of seamless transfer; it is an act of respectful friction. In recent anthologies published across South Asia, we see a refreshing refusal to domesticate idiom for Western anglophone palates.",
        annotationIds: [1],
      },
      {
        type: "quote",
        quote:
          "Translation is not a copy; it is a conversation across generations where the original is allowed to grow and echo anew.",
        author: "Madhurima Das",
      },
      {
        type: "translation",
        title: "Comparative Excerpt: ‘লবণজলের গান’ / ‘Song of the Brackish Tide’",
        originalLanguage: "Bengali (বাংলা)",
        originalAuthor: "Subrata Mondal (b. 1998, Canning)",
        translatorName: "Translated by Madhurima Das",
        historicalNote:
          "Excerpted from the bilingual chapbook 'Matla Nadir Dike' (Toward the Matla River), examined in section II of this review.",
        stanzas: [
          {
            original: [
              "নদীর বাঁধ ভাঙলে শুধু মাটি ভাঙে না,",
              "ভাঙে আমাদের ঠাকুরমার ঘুমপাড়ানি ছড়ার অক্ষর,",
              "লবণজল ঢুকে পড়ে রান্নাঘরের মাটির উনুনে—",
              "তবু আমরা জলের ওপর ভাসমান শব্দের সাঁকো বাঁধি।",
            ],
            transliteration: [
              "Nodir bandh bhangle shudhu mati bhange na,",
              "Bhange amader thakurmar ghumparani chhorar okkhor,",
              "Lobonjol dhuke pore rannaghorer matir unune—",
              "Tobu amra joler opor bhasoman shobder sanko bandhi.",
            ],
            english: [
              "When the river-embankment gives way, it is not clay alone that breaks—",
              "the very syllables of our grandmother's lullabies fracture,",
              "brackish tidewater enters the earthen hearth of the kitchen;",
              "yet across the flood we lash together a footbridge of floating words.",
            ],
            note: "Notice how the Bengali repetition of 'ভাঙে' (bhange — breaks) pivots from physical silt to oral memory.",
          },
        ],
      },
      {
        type: "paragraph",
        text: "The poems examined here challenge the reader to sit with unfamiliar syntactic rhythms. The vocabulary of street corners, protest songs, and grandmother's lullabies remains deliberately textured.",
        annotationIds: [2],
      },
      {
        type: "callout",
        title: "Recommended Reading",
        text: "Essential works covered: New Bengali Anthologies (2020–2024) and Selected South Asian Translations in Verse.",
      },
    ],
  },
  {
    id: "8",
    slug: "elegy-for-lime-plaster-verandas",
    title: "Elegy for Lime-Plaster Verandas & Red Oxide Floors",
    excerpt:
      "An architectural sequence of prose-poems cataloguing disappearing louvered shutters, spiral iron staircases, and afternoon shadows in south Kolkata.",
    coverImage:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1600&h=900&fit=crop",
    date: "September 04, 2024",
    readTime: "5 min read",
    author: authorsBySlug["kabir-ganguly"],
    tags: ["Poetry", "Prose"],
    issueSlug: "vol-13-issue-1",
    issueLabel: "Vol. XIII · Issue I",
    pages: "pp. 20–28",
    doiOrAccession: "JUALS-XIII-I-02",
    annotations: [
      {
        number: 1,
        label: "Chun-Surki & Red Oxide (Lal Mejh)",
        text: "Mid-century south Kolkata residences in Ballygunge, Dover Lane, and Dhakuria combined lime-pozzolana mortar (chun-surki) walls with hand-burnished ferric oxide floors that remained naturally cool in summer.",
        source: "Dept. of Architecture Measured Drawing Archive",
      },
    ],
    contentBlocks: [
      {
        type: "paragraph",
        text: "Red oxide floors never truly forget the temperature of rain. Long after the wooden green louvers have been latched against the noon glare on Dover Lane, the stone holds a quiet, subterranean coolness against bare heels.",
        annotationIds: [1],
      },
      {
        type: "poetry",
        title: "Measured Drawing No. 4: 18B Dover Lane",
        epigraph: "“Scale 1:50 — Salvaged cast-iron balustrade prior to demolition.”",
        epigraphAttribution: "Field Sketchbook, August 2024",
        showLineNumbers: true,
        stanzas: [
          [
            { text: "Count fourteen louvers in the green teak frame,", indent: 0 },
            { text: "each slat a sundial slicing three o'clock", indent: 0 },
            { text: "into parallel ribbons across the red oxide;", indent: 1, annotationId: 1 },
            { text: "a house is demolished long before the crane", indent: 0 },
            { text: "when no one remembers which brass key turns the lock.", indent: 1 },
          ],
          [
            { text: "Up the spiral stair of Burn & Co. cast iron,", indent: 0 },
            { text: "where sparrows nested in the flutedrose,", indent: 0 },
            { text: "the roof-terrace opens to the southern breeze—", indent: 1 },
            { text: "an empty theatre of lime and moss", indent: 2 },
            { text: "still waiting for the evening clothes to dry.", indent: 2 },
          ],
        ],
      },
      {
        type: "quote",
        quote:
          "Every demolished courtyard takes with it a specific geometry of conversation that high-rise balconies cannot reproduce.",
        author: "Kabir Ganguly",
      },
      {
        type: "paragraph",
        text: "In my sketchbook, I measure the width of cornices and cast-iron balustrades before the wrecking crews arrive—treating each doorway as an endangered stanza.",
      },
    ],
  },
];
