"use client";

import { useState } from "react";

const COMPANY_DOMAIN: Record<string, string> = {
  "Anglo-Eastern": "angloeastern.com",
  Maersk: "maersk.com",
  MSC: "msc.com",
  "Synergy Group": "synergymaritime.com",
  Synergy: "synergymaritime.com",
  "Fleet Management": "fleetship.com",
  Fleet: "fleetship.com",
  TORM: "torm.com",
  "Great Eastern": "greatship.com",
  "Wallem Group": "wallem.com",
  Wallem: "wallem.com",
  BSM: "schultegroup.com",
  "V.Group": "vgrouplimited.com",
  PIL: "pilship.com",
  MOL: "mol.co.jp",
  SCI: "shipindia.com",
  "Scorpio Tankers": "scorpiotankers.com",
  "Executive Ship Management": "executivemarine.com",
  "ASP Ships": "aspships.com",
  "Berge Bulk": "bergebulk.com",
  Goodwood: "goodwoodship.com",
  "Seven Islands": "sevenislandsshipping.com",
  "XT Group": "xtship.com",
};

function initialsOf(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

function InitialsMark({ name, className }: { name: string; className: string }) {
  return (
    <span
      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy text-[11px] font-bold tracking-wide text-gold-soft ${className}`}
      aria-hidden
    >
      {initialsOf(name)}
    </span>
  );
}

export function PartnerIcon({ name, className = "" }: { name: string; className?: string }) {
  const domain = COMPANY_DOMAIN[name];
  const [broken, setBroken] = useState(false);

  if (!domain || broken) {
    return <InitialsMark name={name} className={className} />;
  }

  return (
    <span
      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white ring-1 ring-navy/10 ${className}`}
      aria-hidden
    >
      <img
        src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`}
        alt=""
        width={28}
        height={28}
        className="h-7 w-7 object-contain"
        referrerPolicy="no-referrer"
        onError={() => setBroken(true)}
      />
    </span>
  );
}
