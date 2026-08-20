import Link from "next/link";
import { footerBottomLinks, footerColumns, site } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy/10 bg-navy-deep text-white">
      <Container className="section-pad grid gap-10 md:grid-cols-[1.2fr_2fr]">
        <div>
          <Link href="/" className="font-display text-2xl tracking-tight">
            {site.name}
          </Link>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/65">
            {site.description}
          </p>
          <div className="mt-5 space-y-1 text-sm text-white/70">
            <a href={`mailto:${site.email}`} className="block hover:text-gold-soft">
              {site.email}
            </a>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="block hover:text-gold-soft">
              {site.phone}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-soft">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2">
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            {footerBottomLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white/80">
                {link.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
