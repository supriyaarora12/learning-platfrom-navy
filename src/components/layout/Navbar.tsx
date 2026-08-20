"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, site } from "@/content/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-deep/90 text-white backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-[4.25rem]">
        <Link href="/" className="group flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="font-display text-xl tracking-tight text-white sm:text-2xl">
            {site.name}
          </span>
          <span className="hidden text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-soft sm:inline">
            Merchant Navy
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm transition ${
                  active ? "bg-white/10 text-white" : "text-white/75 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href={site.lmsLoginUrl}
            className="px-3 py-2 text-sm text-white/80 transition hover:text-white"
          >
            Login
          </Link>
          <ButtonLink href={site.primaryCta.href} variant="primary" className="!py-2">
            {site.primaryCta.label}
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md ring-1 ring-white/20 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-5 flex-col gap-1.5">
            <span className={`h-0.5 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 bg-white transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </Container>

      {open ? (
        <div id="mobile-nav" className="border-t border-white/10 bg-navy-deep lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-3 text-sm ${
                  pathname === link.href ? "bg-white/10" : "text-white/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-white/10 pt-4">
              <Link href={site.lmsLoginUrl} className="px-3 py-2 text-sm text-white/80" onClick={() => setOpen(false)}>
                Login
              </Link>
              <ButtonLink href={site.primaryCta.href} onClick={() => setOpen(false)}>
                {site.primaryCta.label}
              </ButtonLink>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
