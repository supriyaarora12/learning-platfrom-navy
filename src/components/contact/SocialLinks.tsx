import { site } from "@/content/site";

type SocialKey = keyof typeof site.social;

export const socialItems: {
  key: SocialKey;
  label: string;
  handle: string;
  blurb: string;
}[] = [
  {
    key: "facebook",
    label: "Facebook",
    handle: "@seapath",
    blurb: "Events & community updates",
  },
  {
    key: "instagram",
    label: "Instagram",
    handle: "@seapath",
    blurb: "Daily tips & life at sea",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    handle: "SeaPath",
    blurb: "Career & batch news",
  },
  {
    key: "youtube",
    label: "YouTube",
    handle: "SeaPath",
    blurb: "Guidance videos & sessions",
  },
  {
    key: "pinterest",
    label: "Pinterest",
    handle: "SeaPath",
    blurb: "Boards & exam resources",
  },
  {
    key: "twitter",
    label: "Twitter / X",
    handle: "@seapath",
    blurb: "Quick alerts & news",
  },
];

export function SocialIcon({ name, className = "h-5 w-5" }: { name: SocialKey; className?: string }) {
  const props = {
    className,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": true as const,
  };

  switch (name) {
    case "facebook":
      return (
        <svg {...props}>
          <path d="M14 8h3V5h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...props}>
          <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm5 4.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm0 7.2A2.7 2.7 0 1 1 14.7 12 2.7 2.7 0 0 1 12 14.7zM17.8 6.9a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...props}>
          <path d="M6.5 9.5H3.7V20h2.8V9.5zM5.1 4A1.6 1.6 0 1 0 5.1 7.2 1.6 1.6 0 0 0 5.1 4zM20.3 20h-2.8v-5.6c0-1.5-.5-2.5-1.8-2.5a2 2 0 0 0-1.8 1.3 2.4 2.4 0 0 0-.1.9V20h-2.8s0-9.3 0-10.5h2.8v1.5a3.4 3.4 0 0 1 3.1-1.7c2.2 0 3.9 1.5 3.9 4.6V20z" />
        </svg>
      );
    case "youtube":
      return (
        <svg {...props}>
          <path d="M23 12.2s0-3.4-.4-5a3 3 0 0 0-2.1-2.1C18.6 4.6 12 4.6 12 4.6s-6.6 0-8.5.5A3 3 0 0 0 1.4 7.2C1 8.8 1 12.2 1 12.2s0 3.4.4 5a3 3 0 0 0 2.1 2.1c1.9.5 8.5.5 8.5.5s6.6 0 8.5-.5a3 3 0 0 0 2.1-2.1c.4-1.6.4-5 .4-5zM9.8 15.5v-6.6l5.7 3.3-5.7 3.3z" />
        </svg>
      );
    case "pinterest":
      return (
        <svg {...props}>
          <path d="M12 2a10 10 0 0 0-3.6 19.3c-.1-.8-.2-2 .0-2.9l1.3-5.3s-.3-.7-.3-1.6c0-1.5.9-2.6 2-2.6.9 0 1.4.7 1.4 1.5 0 .9-.6 2.3-.9 3.5-.3 1.1.5 1.9 1.6 1.9 1.9 0 3.2-2.4 3.2-5.3 0-2.2-1.5-3.8-4.2-3.8a4.5 4.5 0 0 0-4.7 4.5c0 .8.2 1.4.7 1.9a.4.4 0 0 1 .1.4l-.3 1c0 .2-.2.2-.4.1-1.4-.6-2.1-2.2-2.1-4A5.8 5.8 0 0 1 12.7 5.4c3.1 0 5.2 2.2 5.2 4.7 0 3.2-1.8 5.6-4 5.6-.8 0-1.6-.4-1.8-.9l-.5 1.9c-.2.7-.6 1.5-.9 2A10 10 0 1 0 12 2z" />
        </svg>
      );
    case "twitter":
      return (
        <svg {...props}>
          <path d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.9-6.4L6.3 22H3.2l7.3-8.3L1 2h6.4l4.4 5.8L18.9 2zm-1.1 18h1.7L6.3 3.9H4.5L17.8 20z" />
        </svg>
      );
    default:
      return null;
  }
}

export function SocialLinks({ light = false }: { light?: boolean }) {
  return (
    <div className="flex flex-wrap gap-3">
      {socialItems.map((item) => (
        <a
          key={item.key}
          href={site.social[item.key]}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          className={`group flex h-12 w-12 items-center justify-center rounded-full transition ${
            light
              ? "bg-white/10 text-white ring-1 ring-white/20 hover:bg-gold hover:text-navy-deep"
              : "bg-foam text-navy ring-1 ring-line hover:bg-navy hover:text-gold-soft"
          }`}
          title={item.label}
        >
          <SocialIcon name={item.key} />
        </a>
      ))}
    </div>
  );
}
