import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost" | "gold";

const styles: Record<Variant, string> = {
  primary:
    "bg-gold text-navy-deep hover:bg-gold-soft shadow-[0_10px_30px_-12px_rgba(201,162,39,0.7)]",
  secondary:
    "bg-white/10 text-white ring-1 ring-white/30 hover:bg-white/15 backdrop-blur-sm",
  ghost:
    "bg-transparent text-navy ring-1 ring-line hover:bg-foam",
  gold:
    "bg-navy text-white hover:bg-navy-mid",
};

type Props = {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  external?: boolean;
} & Omit<ComponentProps<"a">, "href" | "className" | "children">;

export function ButtonLink({
  href,
  variant = "primary",
  className = "",
  children,
  external,
  ...rest
}: Props) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold tracking-wide transition duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 ${styles[variant]} ${className}`;

  if (external || href.startsWith("http") || href.startsWith("https://wa.me")) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}
