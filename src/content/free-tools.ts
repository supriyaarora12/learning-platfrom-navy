export const freeToolsPage = {
  eyebrow: "Free tools",
  title: "Know where you stand — free",
  subtitle:
    "Three quick checks for academic and medical readiness. No sign-up. Results in under a minute.",
  disclaimer:
    "Indicative results only. Final eligibility and medical fitness are confirmed by DG Shipping–approved authorities and recruiting companies.",
};

export const freeToolNav = [
  {
    id: "eligibility",
    title: "Eligibility Calculator",
    body: "Age, stream, and marks vs DNS, B.Sc Nautical Science, B.Tech Marine, and GME.",
    cta: "Check eligibility",
  },
  {
    id: "bmi",
    title: "BMI Calculator",
    body: "See where your Body Mass Index sits against a typical Merchant Navy fitness band.",
    cta: "Calculate BMI",
  },
  {
    id: "colour-vision",
    title: "Colour Vision Test",
    body: "A short Ishihara-style screening before a sponsorship medical surprises you.",
    cta: "Take the test",
  },
] as const;

export const eligibilityPrograms = [
  {
    id: "dns",
    name: "DNS (Diploma in Nautical Science)",
    minAge: 17,
    maxAge: 25,
    streams: ["PCM"],
    minMarks: 60,
    note: "Company sponsorship usually required alongside IMUCET.",
  },
  {
    id: "bsc",
    name: "B.Sc Nautical Science",
    minAge: 17,
    maxAge: 25,
    streams: ["PCM"],
    minMarks: 60,
    note: "IMUCET typically required for IMU-affiliated seats.",
  },
  {
    id: "btech",
    name: "B.Tech Marine Engineering",
    minAge: 17,
    maxAge: 25,
    streams: ["PCM"],
    minMarks: 60,
    note: "Strong PCM foundation recommended.",
  },
  {
    id: "gme",
    name: "GME (Graduate Marine Engineering)",
    minAge: 18,
    maxAge: 28,
    streams: ["PCM", "Engineering"],
    minMarks: 50,
    note: "For engineering graduates — verify current DG / institute rules.",
  },
] as const;

/** Simplified screening plates — not a clinical Ishihara set */
export const colourPlates = [
  { id: 1, answer: "12", hint: "Number in the circle" },
  { id: 2, answer: "8", hint: "Number in the circle" },
  { id: 3, answer: "5", hint: "Number in the circle" },
  { id: 4, answer: "3", hint: "Number in the circle" },
] as const;
