export const howItWorksPage = {
  eyebrow: "How it works",
  title: "What happens after you join",
  subtitle:
    "A clear Merchant Navy path — from free checks and enrolment to live learning, mocks, sponsorship guidance, and LMS access.",
};

/** Journey steps — Marine Edge pathway */
export const journeySteps = [
  {
    step: "01",
    title: "Check & enquire",
    body: "Use free tools to check eligibility basics, then enquire or start a free trial so we can map your year and goal.",
    points: ["Free eligibility / BMI checks", "Counsellor call or WhatsApp", "Right course recommendation"],
  },
  {
    step: "02",
    title: "Enrol & unlock LMS",
    body: "Once you’re in, you get access to the private LMS — schedule, recordings, tests, and progress in one place.",
    points: ["Batch confirmation", "LMS login", "Orientation & study plan"],
  },
  {
    step: "03",
    title: "Learn with mentors",
    body: "Attend live classes or catch up with recordings. Mentors focus on IMU-CET and sponsorship-ready concepts — not generic coaching.",
    points: ["Live interactive classes", "Full recording library", "Doubt support"],
  },
  {
    step: "04",
    title: "Practice & prove",
    body: "Topic tests, full-length mocks, and analytics show where you stand — so revision is targeted, not random.",
    points: ["Sectional + full mocks", "LMS performance analytics", "Error clinics"],
  },
  {
    step: "05",
    title: "Guidance to outcomes",
    body: "For DNS and sponsorship tracks: company patterns, mock interviews, and pathway clarity until you’re selection-ready.",
    points: ["Sponsorship prep (where enrolled)", "Interview labs", "Career pathway guidance"],
  },
];

/**
 * Croma “Our 3 Steps · Recruitment Process” — adapted for Merchant Navy sponsorship
 */
export const recruitmentProcess = {
  eyebrow: "Our 3 steps",
  title: "Selection process",
  subtitle:
    "A structured path from profile readiness to mock interviews to the right sponsorship opportunity.",
  items: [
    {
      title: "Profile building",
      icon: "profile",
      tone: "navy" as const,
      body: "Get your academic and application profile ready before company windows open.",
      badges: [
        "Strong exam & study profile",
        "Eligibility & document checklist",
        "Optimize your professional presence",
      ],
    },
    {
      title: "Mock interviews",
      icon: "interview",
      tone: "gold" as const,
      body: "Practice the room before the real sponsorship panel.",
      badges: [
        "HR & technical mock interviews",
        "Interview question strategy",
        "Personalised feedback loops",
      ],
    },
    {
      title: "Right opportunity",
      icon: "opportunity",
      tone: "foam" as const,
      body: "Map companies, timelines, and next actions so effort turns into selection chances.",
      badges: [
        "Company & sponsorship mapping",
        "Interview scheduling support",
        "Mentor-led next-step planning",
      ],
    },
  ],
};

/**
 * Croma “Beyond Courses” — navy support extras
 */
export const beyondCourses = {
  eyebrow: "Beyond courses",
  title: "Additional support we provide",
  subtitle: "Extra help around your batch — so you’re not left alone between classes.",
  backgroundImage: "/assets/why-seapath-mentors.png",
  items: [
    {
      title: "LMS profile",
      body: "Track classes, recordings, and test history in one student dashboard.",
      image: "/assets/beyond-lms.png",
    },
    {
      title: "LinkedIn / presence",
      body: "Guidance to present yourself clearly as a Merchant Navy aspirant.",
      image: "/assets/beyond-linkedin.png",
    },
    {
      title: "Resume & biodata",
      body: "Clean, sponsorship-ready resume and biodata support.",
      image: "/assets/beyond-resume.png",
    },
    {
      title: "Soft skills",
      body: "Communication, confidence, and panel etiquette for interviews.",
      image: "/assets/beyond-softskills.png",
    },
    {
      title: "Interview preparation",
      body: "Question banks, drills, and strategy before company day.",
      image: "/assets/beyond-interview.png",
    },
    {
      title: "Live practice labs",
      body: "Mocks, interview labs, and timed practice — not theory only.",
      image: "/assets/beyond-labs.png",
    },
  ],
};

/**
 * Croma-style wavy “What we offer” journey (7 steps) — Merchant Navy adapted
 */
export const whatWeOffer = {
  eyebrow: "What we offer",
  title: "Your end-to-end SeaPath journey",
  subtitle:
    "From counselling to selection-ready — a continuous path, not scattered coaching.",
  steps: [
    {
      title: "Course counselling",
      body: "Expert counsellors help you pick the ideal IMUCET / sponsorship track for your year.",
    },
    {
      title: "Expert mentors",
      body: "Mentors with real training experience guide live classes and doubt sessions.",
    },
    {
      title: "Practice preparation",
      body: "Programs include live practice — mocks, drills, and exam-style papers.",
    },
    {
      title: "Assignments & tests",
      body: "Topic tests and assignments keep you accountable between live sessions.",
    },
    {
      title: "Grooming sessions",
      body: "Interview grooming so you walk into sponsorship panels prepared.",
    },
    {
      title: "Interview guidance",
      body: "We help you understand company rounds and how to show up ready.",
    },
    {
      title: "Selection outcomes",
      body: "Focus on ranks and sponsorship readiness — real next steps toward life at sea.",
    },
  ],
};

export const lmsStrip = {
  title: "See inside the learning platform",
  body: "The public site helps you choose. The private LMS is where you learn, practice, and track progress after enrolment.",
  points: ["Live + recordings", "Mocks & quizzes", "Progress tracking"],
};

export const howFaqs = [
  {
    q: "Do I need to pay before trying anything?",
    a: "No. Start with free tools, then enquire or take a free trial / counselling call before you commit to a batch.",
  },
  {
    q: "When do I get LMS access?",
    a: "After enrolment is confirmed for your batch. Login is separate from the marketing site — you’ll receive credentials and onboarding steps.",
  },
  {
    q: "Is sponsorship guaranteed if I follow this process?",
    a: "No ethical coach can guarantee a company sponsorship. We prepare you thoroughly for exams and selection rounds used by major shipping companies.",
  },
  {
    q: "Can I switch courses later?",
    a: "Talk to a counsellor. Many students combine IMUCET prep with sponsorship tracks when company windows open.",
  },
];
