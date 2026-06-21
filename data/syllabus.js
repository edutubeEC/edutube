export const FPM_4PM1_Chapters = [
    {
        chapters: [
            { chapterId: "4PM1_01", num: 1, label: "Surds and logarithmic functions" },
            { chapterId: "4PM1_02", num: 2, label: "The quadratic function" },
            { chapterId: "4PM1_03", num: 3, label: "Inequalities and identities" },
            { chapterId: "4PM1_04", num: 4, label: "Sketching polynomials" },
            { chapterId: "4PM1_05", num: 5, label: "Sequences and series" },
            { chapterId: "4PM1_06", num: 6, label: "The binomial series" },
            { chapterId: "4PM1_07", num: 7, label: "Scalar and vector quantities" },
            { chapterId: "4PM1_08", num: 8, label: "Rectangular cartesian coordinates" },
            { chapterId: "4PM1_09", num: 9, label: "Differentiation" },
            { chapterId: "4PM1_10", num: 10, label: "Integration" },
            { chapterId: "4PM1_11", num: 11, label: "Trigonometry" },
        ]
    }
]

export const syllabusData = {
    syllabus_4BI1: {
        prefix: "4BI1",
        // chapters: edexcelBioChapters,
        label: "Biology",
        board: "Pearson Edexcel",
        level: "IGCSE O-level",
        code: "4BI1",
        navigation: [
            { href: "pages/edexcelBio.html", label: "Notes" }
        ],
        // notes: edexcelBioNotes,
        color: "#C00000"
    },
    syllabus_4HB1: {
        prefix: "4HB1",
        // chapters: edexcelHBioChapters,
        label: "Human Biology",
        board: "Pearson Edexcel",
        level: "IGCSE O-level",
        code: "4HB1",
        navigation: [
            { href: "pages/edexcelHBio.html", label: "Notes" }
        ],
        // notes: edexcelHBioNotes,
        color: "#00C000"
    },
    syllabus_0610: {
        prefix: "0610",
        // chapters: cieBioChapters,
        label: "Biology",
        board: "Cambridge International",
        level: "IGCSE O-level",
        code: "0610",
        navigation: [
            { href: "pages/cieBio.html", label: "Notes" },
            { href: "pages/mcq/0610p2.html", label: "Paper 2 Quiz" }
        ],
        // notes: cieBioNotes,
        color: "#0000C0"
    },
    syllabus_4MB1: {
        prefix: "4MB1",
        // chapters: FPM_4PM1_Chapters,
        label: "Mathematics B",
        board: "Pearson Edexcel",
        level: "IGCSE O-level",
        code: "4MB1",
        navigation: [
            { href: "pages/past_papers/4MB1.html", label: "Past Papers" },
            { href: "pages/past_papers/4MB1.html?mode=topical", label: "Topical Questions" }
        ],
        color: "#FFA500"
    },
};