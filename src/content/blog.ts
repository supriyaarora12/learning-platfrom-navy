export type BlogCategory =
  | "All"
  | "IMUCET Exam"
  | "DNS Sponsorships"
  | "Latest Forms"
  | "B.Sc Nautical Science"
  | "Career Guides";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: Exclude<BlogCategory, "All">;
  author: string;
  date: string;
  readMins: number;
  views: string;
  featured?: boolean;
  popular?: boolean;
  image: string;
  tags: string[];
  content: string[];
};

export const blogPage = {
  eyebrow: "Blog",
  title: "Merchant Navy insights & exam guides",
  subtitle:
    "Learn something new daily — IMUCET tips, DNS sponsorship updates, forms, and career guides for aspirants.",
};

export const blogCategories: BlogCategory[] = [
  "All",
  "IMUCET Exam",
  "DNS Sponsorships",
  "Latest Forms",
  "B.Sc Nautical Science",
  "Career Guides",
];

export const blogPosts: BlogPost[] = [
  {
    slug: "salary-benefits-merchant-navy",
    title: "Salary & benefits in Merchant Navy: pay, tax-free income & perks explained",
    excerpt:
      "A clear look at Merchant Navy salary bands, tax-free income myths, and perks officers actually get at sea.",
    category: "Career Guides",
    author: "SeaPath Team",
    date: "Jan 29, 2026",
    readMins: 8,
    views: "6.3k",
    featured: true,
    popular: true,
    // Merchant Navy officer career / ship at sea (salary & benefits)
    image:
      "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&w=1200&q=80",
    tags: ["Salary", "Career", "Merchant Navy Benefits"],
    content: [
      "Merchant Navy careers are known for strong earning potential — but numbers vary by rank, company, vessel type, and sea-time.",
      "Cadets and junior officers typically start lower, then climb with certificates of competency and experience. Many packages also include onboard benefits beyond basic pay.",
      "Always verify current company circulars and DG Shipping rules. Use this guide as orientation, then talk to a counsellor for your pathway.",
    ],
  },
  {
    slug: "how-to-join-merchant-navy-2026",
    title: "How to join Merchant Navy in 2026 — courses, eligibility, salary & career guide",
    excerpt:
      "Step-by-step path after Class 12: eligibility, IMU-CET, DNS vs degree options, and what to prepare first.",
    category: "Career Guides",
    author: "SeaPath Team",
    date: "Apr 20, 2026",
    readMins: 10,
    views: "3.4k",
    featured: true,
    popular: true,
    // Cargo ship & maritime career path (how to join)
    image:
      "https://images.unsplash.com/photo-1494412749127-02287ca1c48c?auto=format&fit=crop&w=1200&q=80",
    tags: ["How to join", "Eligibility", "After 12th"],
    content: [
      "Most aspirants begin with IMU-CET, then choose DNS or degree pathways depending on rank goals and sponsorship chances.",
      "Eligibility usually covers age, stream/marks, and strict medical fitness. Free tools on SeaPath help you self-check early.",
      "Build a plan: exam prep → mocks → sponsorship readiness → counselling for college/company windows.",
    ],
  },
  {
    slug: "what-is-dns-course",
    title: "What is Diploma in Nautical Science (DNS)?",
    excerpt:
      "DNS explained — duration, sponsorship need, IMU-CET link, and how it leads toward a deck officer career.",
    category: "DNS Sponsorships",
    author: "SeaPath Mentors",
    date: "Oct 7, 2025",
    readMins: 7,
    views: "2.1k",
    popular: true,
    image:
      "https://images.unsplash.com/photo-1464037866556-6812bd9d9bf5?auto=format&fit=crop&w=1200&q=80",
    tags: ["DNS", "Sponsorship", "Deck Officer"],
    content: [
      "DNS is a pre-sea diploma path popular with aspirants aiming for deck-side careers with company sponsorship.",
      "You typically need IMU-CET plus sponsorship selection (written + interview + medical).",
      "SeaPath’s sponsorship prep track focuses on company patterns and interview labs alongside exam readiness.",
    ],
  },
  {
    slug: "top-companies-dns-sponsorship",
    title: "Top companies for DNS sponsorship",
    excerpt:
      "A practical overview of shipping companies aspirants commonly target for DNS sponsorship — and how to prepare.",
    category: "DNS Sponsorships",
    author: "SeaPath Mentors",
    date: "Oct 7, 2025",
    readMins: 9,
    views: "18.1k",
    featured: true,
    popular: true,
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b5a2a8f1?auto=format&fit=crop&w=1200&q=80",
    tags: ["Sponsorship", "Companies", "DNS"],
    content: [
      "Sponsorship shortlists change by batch and company hiring cycles — always confirm official notices.",
      "Preparation that travels well: strong IMU-CET base, aptitude practice, communication, and interview confidence.",
      "Map 3–5 target companies and practise their typical rounds rather than applying blindly.",
    ],
  },
  {
    slug: "imucet-marks-vs-rank",
    title: "IMUCET marks vs rank — what aspirants should know",
    excerpt:
      "How marks can translate into ranks, why competition shifts every year, and how to set a safe score goal.",
    category: "IMUCET Exam",
    author: "SeaPath Academic",
    date: "Jun 11, 2026",
    readMins: 6,
    views: "4.1k",
    popular: true,
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
    tags: ["IMUCET", "Rank", "Cutoff"],
    content: [
      "Rank depends on relative performance, not a fixed marks formula. Paper difficulty and candidate volume both matter.",
      "Use mocks to build a buffer above last year’s “safe” conversations — don’t chase rumours alone.",
      "Pair score goals with college/sponsorship plans so you know what rank range you actually need.",
    ],
  },
  {
    slug: "imu-cet-2027-syllabus-guide",
    title: "IMU-CET 2027 syllabus: what to study, what to avoid & how to prepare",
    excerpt:
      "Subject-wise focus areas, high-yield topics, and a clean preparation strategy for a better rank.",
    category: "IMUCET Exam",
    author: "SeaPath Academic",
    date: "Aug 10, 2026",
    readMins: 8,
    views: "168",
    image:
      "https://images.unsplash.com/photo-1456513080080-2f9a27ea0600?auto=format&fit=crop&w=1200&q=80",
    tags: ["Syllabus", "IMUCET 2027", "Preparation"],
    content: [
      "Stick to Class 11–12 PCM cores plus English, aptitude, and GK — don’t drown in random PDFs.",
      "Build weekly topic tests early; shift to full mocks as the window nears.",
      "SeaPath crash and complete programs are structured around this rhythm.",
    ],
  },
  {
    slug: "merchant-navy-medical-test-guide",
    title: "Merchant Navy medical test: reasons that can reject you before you join",
    excerpt:
      "Height, BMI, vision, hearing and other medical checks — know the common rejection reasons early.",
    category: "IMUCET Exam",
    author: "SeaPath Team",
    date: "Aug 14, 2026",
    readMins: 7,
    views: "31",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    tags: ["Medical", "BMI", "Vision"],
    content: [
      "Medical fitness is non-negotiable. Catching BMI or colour-vision issues early saves wasted cycles.",
      "Use SeaPath free tools for indicative checks, then confirm with DG-approved examiners.",
      "Never rely on social media “guarantees” for medical outcomes.",
    ],
  },
  {
    slug: "dns-august-vs-february-batch",
    title: "DNS August batch vs February batch — which should you choose?",
    excerpt:
      "Compare timelines, sponsorship windows, and preparation load so you pick the batch that fits your year.",
    category: "DNS Sponsorships",
    author: "SeaPath Mentors",
    date: "Jun 28, 2026",
    readMins: 6,
    views: "581",
    image:
      "https://images.unsplash.com/photo-1504609773096-104ff2c383af?auto=format&fit=crop&w=1200&q=80",
    tags: ["DNS Batch", "August", "February"],
    content: [
      "Batch choice depends on when you clear IMU-CET, medical readiness, and company form windows.",
      "August and February cycles can differ in competition and seat availability.",
      "A counsellor can map your exam date to the smarter sponsorship target.",
    ],
  },
  {
    slug: "bsc-nautical-science-colleges",
    title: "Top colleges for B.Sc Nautical Science in India",
    excerpt:
      "What to look for in nautical science colleges — approvals, training quality, and how IMU-CET fits in.",
    category: "B.Sc Nautical Science",
    author: "SeaPath Team",
    date: "Jan 8, 2026",
    readMins: 8,
    views: "7.1k",
    popular: true,
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    tags: ["B.Sc Nautical", "Colleges", "IMU"],
    content: [
      "Shortlist colleges using approvals, faculty, training infrastructure, and placement/sponsorship history.",
      "IMU-CET performance often gates options — treat rank prep as part of college strategy.",
      "Visit official sites for the latest fees and intake notices.",
    ],
  },
  {
    slug: "seven-islands-seaspan-form-2027",
    title: "Form released: Seven Islands – Seaspan Feb 2027 sponsorship guide",
    excerpt:
      "Orientation note on B.Sc / B.Tech / DNS sponsorship form windows — always verify on official channels.",
    category: "Latest Forms",
    author: "SeaPath Desk",
    date: "Aug 16, 2026",
    readMins: 5,
    views: "173",
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
    tags: ["Latest Forms", "Sponsorship", "2027"],
    content: [
      "Company forms open and close quickly. Keep documents ready: photo, marksheets, ID, and IMU details.",
      "This post is an aspirant guide — confirm every date and fee on the company’s official notice.",
      "Need help prioritising forms? Enquire with SeaPath counselling.",
    ],
  },
  {
    slug: "drop-year-merchant-navy",
    title: "Is a drop year worth it for Merchant Navy aspirants?",
    excerpt:
      "Pros, cons, and a realistic plan if you’re repeating after Class 12 for a stronger IMU-CET attempt.",
    category: "Career Guides",
    author: "SeaPath Mentors",
    date: "Jul 24, 2026",
    readMins: 7,
    views: "97",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    tags: ["Dropper", "IMUCET", "After 12th"],
    content: [
      "A drop year helps only with a disciplined mock-heavy plan — not endless content consumption.",
      "Protect medical fitness and eligibility age windows while you prepare.",
      "Foundation or complete batches can give structure if self-study failed last cycle.",
    ],
  },
  {
    slug: "imu-cet-counselling-guide",
    title: "IMU-CET counselling process explained — admission guide for aspirants",
    excerpt:
      "Registration, preferences, fees, and what to prepare so counselling week is less stressful.",
    category: "IMUCET Exam",
    author: "SeaPath Academic",
    date: "Jul 2, 2026",
    readMins: 8,
    views: "1.1k",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    tags: ["Counselling", "Admission", "IMU-CET"],
    content: [
      "Counselling is time-bound. Keep login credentials, documents, and a ranked college list ready.",
      "Read official IMU notices for that year’s exact steps — processes can change.",
      "Pair counselling prep with backup sponsorship options where relevant.",
    ],
  },
];

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function getCategoryCounts() {
  const counts: Record<string, number> = {};
  for (const post of blogPosts) {
    counts[post.category] = (counts[post.category] ?? 0) + 1;
  }
  return counts;
}
