export type CourseCategory =
  | "All"
  | "IMUCET"
  | "Sponsorship"
  | "Foundation"
  | "Crash";

export type Course = {
  slug: string;
  title: string;
  shortTitle: string;
  tag: string;
  category: Exclude<CourseCategory, "All">;
  summary: string;
  description: string;
  duration: string;
  mode: string;
  level: string;
  price: number;
  originalPrice?: number;
  popular?: boolean;
  /** Featured in “Master programmes” strip */
  featured?: boolean;
  rating: number;
  reviews: number;
  learningHours: string;
  mocks: string;
  badges: string[];
  highlights: string[];
  outcomes: string[];
  forWhom: string[];
  includes: string[];
  syllabus: { title: string; topics: string[] }[];
  faqs: { q: string; a: string }[];
};

export const courseCategories: CourseCategory[] = [
  "All",
  "IMUCET",
  "Sponsorship",
  "Foundation",
  "Crash",
];

export const coursesPage = {
  eyebrow: "All courses",
  title: "Programs built for Merchant Navy outcomes",
  subtitle:
    "From IMUCET ranks to DNS sponsorship readiness — structured courses with live classes, mocks, and mentorship.",
  trendingLabel: "Trending searches",
  trending: [
    { label: "IMUCET Complete", href: "/courses/imucet-complete" },
    { label: "DNS Sponsorship", href: "/courses/dns-sponsorship-prep" },
    { label: "Crash Revision", href: "/courses/crash-revision" },
    { label: "Foundation Batch", href: "/courses/foundation-batch" },
  ],
  categories: [
    {
      key: "IMUCET" as const,
      title: "IMUCET Prep",
      body: "Ranks, mocks & full syllabus coverage",
    },
    {
      key: "Sponsorship" as const,
      title: "Sponsorship",
      body: "Company tests & interview labs",
    },
    {
      key: "Foundation" as const,
      title: "Foundation",
      body: "Early start for Class 11–12",
    },
    {
      key: "Crash" as const,
      title: "Crash",
      body: "Last-mile revision sprints",
    },
  ],
};

export const courses: Course[] = [
  {
    slug: "imucet-complete",
    title: "IMUCET Complete Program",
    shortTitle: "IMUCET Complete",
    tag: "Most popular",
    category: "IMUCET",
    summary:
      "Live + recorded classes, topic tests, and full-length mocks for IMU-CET — end to end.",
    description:
      "A complete IMU-CET preparation path covering PCM, English, aptitude, and GK with live doubt support, analytics, and exam-style mocks so you walk in confident on test day.",
    duration: "6–12 months",
    mode: "Live online + recordings",
    level: "Class 12 / Dropper",
    price: 14999,
    originalPrice: 24999,
    popular: true,
    featured: true,
    rating: 4.9,
    reviews: 2840,
    learningHours: "180+ hrs",
    mocks: "40+ mocks",
    badges: ["Live + LMS", "Mentor support", "Rank focused"],
    highlights: [
      "Live classes + full recording library",
      "Weekly topic tests & full-length mocks",
      "Performance analytics on the LMS",
      "Dedicated doubt resolution",
    ],
    outcomes: [
      "Strong IMU-CET rank readiness",
      "Clear concept base for PCM + aptitude",
      "Exam temperament through mocks",
    ],
    forWhom: [
      "Class 12 students targeting IMU-CET",
      "Droppers aiming for a better rank",
      "Aspirants who want structured live + LMS practice",
    ],
    includes: [
      "Live interactive classes",
      "Recorded lectures (unlimited during batch)",
      "Study notes & practice sheets",
      "Topic tests + full mocks",
      "LMS dashboard access",
      "Mentor check-ins",
    ],
    syllabus: [
      {
        title: "Mathematics",
        topics: ["Algebra & calculus essentials", "Trigonometry", "Vectors & 3D", "Probability & stats"],
      },
      {
        title: "Physics",
        topics: ["Mechanics", "Waves & optics", "Electricity & magnetism", "Modern physics"],
      },
      {
        title: "Chemistry",
        topics: ["Physical chemistry", "Organic basics", "Inorganic focus topics"],
      },
      {
        title: "English, Aptitude & GK",
        topics: ["Comprehension & grammar", "Logical reasoning", "Maritime GK essentials"],
      },
      {
        title: "Mocks & Revision",
        topics: ["Sectional tests", "Full-length IMU-CET mocks", "Error analysis workshops"],
      },
    ],
    faqs: [
      {
        q: "Is this enough for IMU-CET alone?",
        a: "Yes — this program is built around IMU-CET. Sponsorship interview prep can be added via our DNS & Sponsorship course.",
      },
      {
        q: "Will I get recordings if I miss a class?",
        a: "Yes. Every live session is recorded and available on the LMS during your batch window.",
      },
    ],
  },
  {
    slug: "dns-sponsorship-prep",
    title: "DNS & Sponsorship Prep",
    shortTitle: "DNS & Sponsorship",
    tag: "Career track",
    category: "Sponsorship",
    summary:
      "Company patterns, written tests, and mock interviews for DNS sponsorship selections.",
    description:
      "Move from IMU-CET readiness to company selection. Practice sponsorship exam patterns, HR/technical interview drills, and get guided through the DNS pathway with mentors who know the process.",
    duration: "3–6 months",
    mode: "Live online + interview labs",
    level: "After / alongside IMUCET",
    price: 9999,
    originalPrice: 15999,
    popular: true,
    featured: true,
    rating: 4.8,
    reviews: 1920,
    learningHours: "90+ hrs",
    mocks: "Interview labs",
    badges: ["Live labs", "Company patterns", "Career track"],
    highlights: [
      "Company-wise pattern practice",
      "Mock interviews with feedback",
      "DNS pathway & document guidance",
      "WhatsApp mentor support",
    ],
    outcomes: [
      "Confidence in sponsorship written rounds",
      "Strong interview presence",
      "Clarity on DNS + company timelines",
    ],
    forWhom: [
      "Students applying for DNS sponsorships",
      "Aspirants targeting Anglo-Eastern, Fleet, Synergy, MSC, and similar companies",
      "Anyone who needs interview polish after IMUCET",
    ],
    includes: [
      "Sponsorship exam practice sets",
      "Live interview workshops",
      "1:1 feedback sessions (batch plan)",
      "Company process briefings",
      "LMS practice vault",
    ],
    syllabus: [
      {
        title: "Sponsorship written prep",
        topics: ["Aptitude drills", "English for interviews", "Company-style papers"],
      },
      {
        title: "Interview lab",
        topics: ["HR rounds", "Technical basics", "Body language & communication"],
      },
      {
        title: "DNS journey",
        topics: ["Eligibility checklist", "Medical overview", "Timeline planning"],
      },
    ],
    faqs: [
      {
        q: "Do you guarantee sponsorship?",
        a: "No ethical coach can guarantee a sponsorship. We prepare you thoroughly for written and interview rounds used by major companies.",
      },
      {
        q: "Can I take this with IMUCET Complete?",
        a: "Yes — many students run both tracks together when sponsorship windows open.",
      },
    ],
  },
  {
    slug: "foundation-batch",
    title: "Foundation Batch (IMUCET 2028)",
    shortTitle: "Foundation Batch",
    tag: "Early start",
    category: "Foundation",
    summary:
      "Long runway for Class 11–12 aspirants — concepts first, then exam intensity.",
    description:
      "Start early with a calm, concept-first foundation in PCM and aptitude. Build habits, then ramp into IMU-CET intensity with tests and mentorship so you’re ready well before the exam year.",
    duration: "12–18 months",
    mode: "Live online + recordings",
    level: "Class 11–12",
    price: 14999,
    originalPrice: 29999,
    rating: 4.8,
    reviews: 860,
    learningHours: "220+ hrs",
    mocks: "Milestone tests",
    badges: ["Long runway", "Concept first", "Parent updates"],
    highlights: [
      "Concept-first PCM foundation",
      "Gentle → intensive pacing",
      "Habit building & weekly targets",
      "Parent-friendly progress updates",
    ],
    outcomes: [
      "Strong Class 11–12 concept base",
      "Early familiarity with IMU-CET pattern",
      "Less last-year panic",
    ],
    forWhom: [
      "Class 11 students deciding on Merchant Navy",
      "Class 12 early birds",
      "Parents wanting a structured long plan",
    ],
    includes: [
      "Foundation live classes",
      "Recordings & notes",
      "Quarterly milestone tests",
      "LMS access",
      "Orientation for Merchant Navy pathways",
    ],
    syllabus: [
      {
        title: "Year 1 — Foundations",
        topics: ["Core PCM", "English basics", "Study systems"],
      },
      {
        title: "Year 2 — Exam ramp",
        topics: ["IMU-CET pattern intro", "Sectional tests", "Revision cycles"],
      },
    ],
    faqs: [
      {
        q: "Is this only for Class 11?",
        a: "It’s ideal for Class 11, but early Class 12 students who want a longer runway also join.",
      },
    ],
  },
  {
    slug: "crash-revision",
    title: "IMUCET Crash Revision",
    shortTitle: "Crash Revision",
    tag: "Fast track",
    category: "Crash",
    summary:
      "Focused revision blocks and analytics when the exam window is close.",
    description:
      "A high-intensity revision sprint for students who already know the syllabus and need sharp mocks, error analysis, and last-mile confidence before IMU-CET.",
    duration: "4–8 weeks",
    mode: "Live revision + mocks",
    level: "Exam-ready aspirants",
    price: 5999,
    originalPrice: 9999,
    rating: 4.7,
    reviews: 1240,
    learningHours: "40+ hrs",
    mocks: "Daily mocks",
    badges: ["Fast track", "Error clinics", "Exam window"],
    highlights: [
      "Rapid revision planners",
      "Daily / alternate-day mocks",
      "Error clinics",
      "Last-week strategy sessions",
    ],
    outcomes: [
      "Higher mock accuracy",
      "Clear weak-topic map",
      "Exam-day plan",
    ],
    forWhom: [
      "Students within 1–2 months of IMU-CET",
      "Repeaters needing a sharp reset",
      "Anyone with syllabus done but low mock scores",
    ],
    includes: [
      "Revision live sessions",
      "Full-length mocks",
      "Analytics dashboard",
      "Strategy workshops",
    ],
    syllabus: [
      {
        title: "Revision sprints",
        topics: ["High-yield PCM", "Aptitude speed drills", "GK capsules"],
      },
      {
        title: "Mock cycle",
        topics: ["Full mocks", "Sectional repair", "Final week plan"],
      },
    ],
    faqs: [
      {
        q: "I haven’t finished the syllabus — should I join?",
        a: "Only if you’re close to done. If large portions remain, choose IMUCET Complete instead.",
      },
    ],
  },
  {
    slug: "gold-modules",
    title: "SeaPath Gold Modules",
    shortTitle: "Gold Modules",
    tag: "Self study",
    category: "IMUCET",
    summary:
      "Expert-crafted modules for PCM, reasoning, English & sponsorship interview basics.",
    description:
      "A self-paced module pack designed for focused practice and revision — ideal as a companion to live batches or for disciplined self-learners preparing for IMU-CET and early sponsorship rounds.",
    duration: "Self-paced",
    mode: "Digital modules + LMS practice",
    level: "All aspirants",
    price: 3999,
    originalPrice: 5999,
    rating: 4.8,
    reviews: 3100,
    learningHours: "Self-paced",
    mocks: "LMS quizzes",
    badges: ["Self study", "Module pack", "Practice banks"],
    highlights: [
      "Complete module set",
      "Ranker-style practice",
      "Works with any batch",
      "LMS quiz unlocks",
    ],
    outcomes: [
      "Structured self-study path",
      "Better retention via practice sets",
    ],
    forWhom: [
      "Self-learners",
      "Students who want extra practice beside a live batch",
      "Revision before mocks",
    ],
    includes: [
      "Digital modules",
      "Practice question banks",
      "LMS quizzes",
      "Update patches for exam cycle",
    ],
    syllabus: [
      {
        title: "Module pack",
        topics: ["Maths", "Physics", "Chemistry", "Reasoning & English", "Interview basics"],
      },
    ],
    faqs: [
      {
        q: "Are live classes included?",
        a: "No — this is a module + practice pack. Pair it with IMUCET Complete if you want live teaching.",
      },
    ],
  },
  {
    slug: "target-batch-imucet",
    title: "One-Year Target Batch",
    shortTitle: "Target Batch",
    tag: "Trending",
    category: "IMUCET",
    summary:
      "One-year target plan for IMU-CET and the next DNS sponsorship window.",
    description:
      "A balanced one-year program that covers IMU-CET thoroughly and overlaps sponsorship readiness so you’re prepared for both the entrance exam and the company selection season.",
    duration: "12 months",
    mode: "Live online + LMS",
    level: "Serious aspirants",
    price: 9999,
    originalPrice: 19999,
    popular: true,
    featured: true,
    rating: 4.9,
    reviews: 1560,
    learningHours: "200+ hrs",
    mocks: "Timed seasons",
    badges: ["1-year plan", "Dual track", "Mentorship"],
    highlights: [
      "IMUCET + sponsorship overlap",
      "Monthly milestones",
      "Mock seasons timed to exams",
      "Mentor accountability",
    ],
    outcomes: [
      "Exam + sponsorship dual readiness",
      "Consistent weekly progress",
    ],
    forWhom: [
      "Students with ~1 year to IMU-CET",
      "Aspirants planning DNS the same cycle",
    ],
    includes: [
      "Full live curriculum",
      "Recordings",
      "Mocks & analytics",
      "Sponsorship intro module",
      "LMS access",
    ],
    syllabus: [
      {
        title: "Phase 1 — Build",
        topics: ["PCM core", "Aptitude base", "Study OS"],
      },
      {
        title: "Phase 2 — Test",
        topics: ["Sectionals", "Full mocks", "Weak-topic repair"],
      },
      {
        title: "Phase 3 — Select",
        topics: ["Sponsorship intro", "Interview warm-up", "Final revision"],
      },
    ],
    faqs: [
      {
        q: "How is this different from IMUCET Complete?",
        a: "Target Batch is paced for a full year with sponsorship overlap baked in. Complete is more flexible for 6–12 month joiners focused primarily on IMU-CET.",
      },
    ],
  },
];

export function getCourse(slug: string) {
  return courses.find((c) => c.slug === slug);
}

export function formatInr(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}
