export const mockModules = [
    {
        id: 1,
        title: "Module - 1",
        subtitle: "Introduction",
        weeks: "4 Weeks",
        status: "Completed",
        isLocked: false,
        attendance: 100,
        modulePSP: 100,
        days: [
            {
                id: 101,
                day: "DAY 1",
                date: "15 JAN",
                topic: "Intro to Programming & Flowcharts",
                lectureNotesPdf: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                assignments: { completed: 4, total: 4 },
                additionalProblems: { completed: 2, total: 2 }
            }
        ]
    },
    {
        id: 2,
        title: "Module - 2",
        subtitle: "Advanced DSA 1",
        weeks: "4 weeks",
        status: "In Progress",
        isLocked: false,
        attendance: 42,
        modulePSP: 88,
        days: [
            {
                id: 201,
                day: "DAY 2",
                date: "5 DEC",
                topic: "DSA: Time & Space Complexity",
                lectureNotesPdf: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                assignments: { completed: 13, total: 13 },
                additionalProblems: { completed: 9, total: 9 },
                masteryMode: false
            },
            {
                id: 202,
                day: "DAY 3",
                date: "8 DEC",
                topic: "DSA: Arrays & techniques",
                lectureNotesPdf: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                assignments: { completed: 4, total: 4 },
                additionalProblems: { completed: 6, total: 6 },
                masteryMode: false
            },
            {
                id: 203,
                day: "DAY 4",
                date: "10 DEC",
                topic: "DSA: Lab Session on Prefix Sum & Carry Forward",
                lectureNotesPdf: null,
                assignments: { completed: 7, total: 7 },
                additionalProblems: { completed: 4, total: 4 },
                masteryMode: false
            },
            {
                id: 204,
                day: "DAY 5",
                date: "12 DEC",
                topic: "DSA: Arrays : Sliding Window & Contribution Technique",
                lectureNotesPdf: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                assignments: { completed: 4, total: 4 },
                additionalProblems: { completed: 4, total: 4 },
                masteryMode: false
            },
            {
                id: 205,
                day: "DAY 6",
                date: "15 DEC",
                topic: "DSA: Bit Manipulations Basics",
                lectureNotesPdf: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                assignments: { completed: 5, total: 5 },
                additionalProblems: { completed: 2, total: 2 },
                masteryMode: false
            },
            {
                id: 206,
                day: "DAY 7",
                date: "17 DEC",
                topic: "DSA: Arrays 1: One Dimensional",
                lectureNotesPdf: null,
                assignments: { completed: 3, total: 3 },
                additionalProblems: { completed: 2, total: 2 },
                masteryMode: false
            },
            {
                id: 207,
                day: "DAY 8",
                date: "19 DEC",
                topic: "DSA: Arrays 2: Two Dimensional",
                lectureNotesPdf: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                assignments: { completed: 3, total: 3 },
                additionalProblems: { completed: 2, total: 2 },
                masteryMode: true
            }
        ]
    },
    {
        id: 3,
        title: "Module - 3",
        subtitle: "Advanced DSA 2",
        weeks: "4 Weeks",
        status: "Locked",
        isLocked: true,
        attendance: 0,
        modulePSP: 0,
        days: []
    }
];
