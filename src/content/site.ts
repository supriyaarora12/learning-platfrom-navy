export type NavLink = {
  label: string;
  href: string;
};

export type FooterColumn = {
  title: string;
  links: NavLink[];
};

export const site = {
  name: "SeaPath",
  tagline: "Your journey to the Merchant Navy starts here",
  description:
    "AI-powered Merchant Navy coaching and LMS — IMUCET prep, live classes, mocks, and career guidance.",
  whatsapp: "919999999999",
  email: "hello@seapath.in",
  phone: "+91 99999 99999",
  lmsLoginUrl: "/login",
  primaryCta: {
    label: "Start Free Trial",
    href: "/contact",
  },
  secondaryCta: {
    label: "Enquire on WhatsApp",
    href: "https://wa.me/919999999999",
  },
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    youtube: "https://www.youtube.com/",
    pinterest: "https://www.pinterest.com/",
    twitter: "https://twitter.com/",
  },
  address: {
    line1: "SeaPath Learning Hub",
    line2: "Sector 62, Noida",
    city: "Uttar Pradesh 201301",
    country: "India",
    mapUrl: "https://maps.google.com/?q=Noida+Sector+62",
  },
} as const;

/** Main navbar links — edit here to update Navbar everywhere */
export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Free Tools", href: "/free-tools" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Explore",
    links: [
      { label: "Courses", href: "/courses" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Free Tools", href: "/free-tools" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "Login", href: "/login" },
    ],
  },
  {
    title: "Prepare",
    links: [
      { label: "IMUCET Prep", href: "/courses" },
      { label: "Eligibility Check", href: "/free-tools" },
      { label: "Start Free Trial", href: "/contact" },
    ],
  },
];

export const footerBottomLinks: NavLink[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];
