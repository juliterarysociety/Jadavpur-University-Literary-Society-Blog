import type { ChronicleEvent } from "../types";

/**
 * Campus Literary Chronicle — Readings, Symposia, Workshops & Archival Dispatches
 * Jadavpur University Arts and Literary Society (JUALS)
 */
export const chronicleEvents: ChronicleEvent[] = [
  {
    id: "event-1",
    code: "CHR-01",
    title: "Monsoon Verse & Bilingual Reading under the OAT Canopy",
    category: "Reading",
    date: "November 14, 2025",
    time: "4:30 PM – 7:00 PM IST",
    venue: "Open Air Theatre (OAT), Jadavpur University Main Campus",
    status: "Upcoming",
    summary:
      "An evening of original student poetry and live translations in Bengali, English, Urdu, and Hindi, marking the release of Volume XIV, Issue I: Memory, Rain & the Subaltern City.",
    speakers: [
      "Debanjan Mukherjee (Dept. of English)",
      "Madhurima Das (Dept. of Bengali)",
      "Kabir Ganguly (Dept. of Architecture)",
      "Open-Floor Student Readers (12 Slots)",
    ],
    dispatchNotes:
      "Printed broadsheets of selected poems from Vol. XIV will be distributed at the steps from 4:15 PM. Open-mic registration closes forty-eight hours prior via editorial email.",
    relatedIssueSlug: "vol-14-issue-1",
  },
  {
    id: "event-2",
    code: "CHR-02",
    title: "Colloquium: The Hungryalist Pamphlet & Kolkata’s Little Magazine Archive",
    category: "Colloquium",
    date: "November 28, 2025",
    time: "2:00 PM – 5:30 PM IST",
    venue: "Vivekananda Hall, Jadavpur University",
    status: "Upcoming",
    summary:
      "A critical symposium and archival table exhibition examining 1960s–1980s Bengali little magazines, mimeographed manifestos, and their enduring lessons for independent student publishing today.",
    speakers: [
      "Ananya Chatterjee (Dept. of History)",
      "Tathagata Bose (Dept. of Printing Engineering)",
      "Guest Archivist: Little Magazine Library & Research Centre, Kolkata",
    ],
    dispatchNotes:
      "Accompanied by a vitrine display of facsimile pamphlets, letterpress blocks, and student zines curated by the JUALS Visual Arts Desk.",
    relatedIssueSlug: "vol-13-issue-2",
  },
  {
    id: "event-3",
    code: "CHR-03",
    title: "Translating the Vernacular Street: A Two-Day Craft Workshop",
    category: "Workshop",
    date: "December 12–13, 2025",
    time: "11:00 AM – 3:30 PM IST",
    venue: "Subarna Jayanti Bhavan Seminar Room, Layer III",
    status: "Upcoming",
    summary:
      "An intensive translation clinic where participants bring one poem or short prose passage in a South Asian language and work collectively through syntactic friction, cadence, and footnoting.",
    speakers: [
      "Sohini Roy (Comparative Literature)",
      "Madhurima Das (Department of Bengali)",
      "Arunava Sen (Department of Philosophy)",
    ],
    dispatchNotes:
      "Limited to twenty-four student participants across faculties; selected workshop translations will be considered for the Spring Folio.",
    relatedIssueSlug: "vol-13-issue-1",
  },
  {
    id: "event-4",
    code: "CHR-04",
    title: "Third Theatre & Courtyard Dramaturgy: Screening and Roundtable",
    category: "Symposium",
    date: "September 19, 2025",
    time: "3:00 PM – 6:15 PM IST",
    venue: "Triguna Sen Auditorium Annex, Jadavpur University",
    status: "Archival Dispatch",
    summary:
      "Archival 16mm transfers and documentary excerpts on Badal Sircar’s Satabdi collective, followed by a roundtable on non-proscenium student theatre in university courtyards.",
    speakers: [
      "Rituparna Ghosh Dastidar (Dept. of Film Studies)",
      "Members of Jadavpur University Drama Club",
    ],
    dispatchNotes:
      "Over ninety students attended the screening; critical notes from the discussion were expanded into the essay ‘Notes on Courtyard Staging’ in our archive.",
    relatedIssueSlug: "vol-13-issue-2",
  },
  {
    id: "event-5",
    code: "CHR-05",
    title: "Silver Gelatin & Linocut: Annual Campus Visual Plates Exhibition",
    category: "Exhibition",
    date: "August 08–12, 2025",
    time: "10:30 AM – 6:00 PM IST",
    venue: "Gandhi Bhavan Foyer & Aurobindo Bhavan Portico",
    status: "Archival Dispatch",
    summary:
      "A five-day physical exhibition of thirty-six darkroom prints, architectural charcoal monotypes, and contact sheets documenting monsoon light across Jadavpur, College Street, and Princep Ghat.",
    speakers: [
      "Curated by Tathagata Bose & Kabir Ganguly",
    ],
    dispatchNotes:
      "Twelve plates from the Gandhi Bhavan exhibition are permanently cataloged in the digital Artwork & Visual Media folio.",
    relatedIssueSlug: "vol-14-issue-1",
  },
  {
    id: "event-6",
    code: "CHR-06",
    title: "Jadavpur Letters ’25: Annual Two-Day Literary Festival & Book Fair",
    category: "Festival",
    date: "February 21–22, 2025",
    time: "10:00 AM – 8:00 PM IST",
    venue: "Open Air Theatre, World View Lawn & Subhas Chandra Bose Walkway",
    status: "Archival Dispatch",
    summary:
      "The annual flagship gathering of JUALS featuring twenty-two independent small-press bookstalls from College Street, inter-university poetry slams, long-form critical debates, and acoustic evening recitals.",
    speakers: [
      "JUALS 2024–2025 Editorial & Organizing Collective",
      "Visiting Poets, Small-Press Publishers & Alumni Critics",
    ],
    dispatchNotes:
      "Recorded an attendance of over 1,400 readers across two days and launched the print anthology of Volume XIII.",
    relatedIssueSlug: "vol-13-issue-1",
  },
];
