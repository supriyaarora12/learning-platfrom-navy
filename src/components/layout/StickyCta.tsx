import Link from "next/link";
import { site } from "@/content/site";

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy/10 bg-white/95 p-3 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        <Link
          href={site.secondaryCta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 rounded-md bg-[#25D366] py-3 text-center text-sm font-semibold text-white"
        >
          WhatsApp
        </Link>
        <Link
          href={site.primaryCta.href}
          className="flex-1 rounded-md bg-gold py-3 text-center text-sm font-semibold text-navy-deep"
        >
          {site.primaryCta.label}
        </Link>
      </div>
    </div>
  );
}
