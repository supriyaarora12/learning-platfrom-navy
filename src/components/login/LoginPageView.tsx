import Link from "next/link";
import { loginPage } from "@/content/login";
import { site } from "@/content/site";
import { LoginForm } from "@/components/login/LoginForm";

export function LoginPageView() {
  return (
    <div className="fixed inset-0 z-[60] flex bg-white">
      {/* Form column */}
      <div className="relative flex w-full flex-col justify-center px-6 py-10 sm:px-10 lg:w-[46%] lg:px-14 xl:px-20">
        <div className="absolute left-6 top-6 hero-enter sm:left-10">
          <Link href="/" className="text-sm font-medium text-muted hover:text-navy">
            ← Back to home
          </Link>
        </div>
        <div className="hero-enter hero-enter-delay-1">
          <LoginForm />
        </div>
      </div>

      {/* Illustration column — Marine Edge style */}
      <div className="relative hidden overflow-hidden lg:flex lg:w-[54%] lg:items-center lg:justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#dbe7f3] via-[#eef4fa] to-[#c5d8ec]" />
        <div
          className="absolute -right-24 top-16 h-72 w-72 rounded-full bg-navy/10 blur-3xl orb-float"
          aria-hidden
        />
        <div
          className="absolute -left-16 bottom-10 h-64 w-64 rounded-full bg-gold/20 blur-3xl orb-float-slow"
          aria-hidden
        />

        <div className="hero-panel-enter relative z-10 mx-auto w-full max-w-lg px-10">
          <div className="relative rounded-[2rem] bg-white/50 p-8 shadow-[0_30px_80px_-40px_rgba(11,31,58,0.45)] ring-1 ring-white/60 backdrop-blur-sm">
            <div className="mb-6 flex items-end justify-center gap-3">
              <div className="h-20 w-14 rounded-lg bg-navy/90 shadow-md" />
              <div className="flex h-28 w-20 flex-col items-center justify-center rounded-xl bg-navy text-center shadow-lg">
                <span className="text-[10px] font-semibold uppercase tracking-wide text-gold-soft">
                  Course
                </span>
                <span className="mt-1 font-display text-sm text-white">IMUCET</span>
                <span className="mt-2 inline-block h-3 w-3 rotate-45 bg-gold" aria-hidden />
              </div>
              <div className="h-16 w-24 rounded-lg bg-white shadow-md ring-1 ring-line" />
            </div>

            <div className="rounded-2xl bg-navy p-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-soft">
                {site.name} LMS
              </p>
              <h2 className="mt-3 font-display text-3xl leading-tight">{loginPage.panelTitle}</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{loginPage.panelBody}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {loginPage.panelTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-gold-soft ring-1 ring-white/15"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="chip-float pointer-events-none absolute -left-4 top-10 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-navy shadow-md ring-1 ring-line">
              Live classes
            </div>
            <div className="chip-float-delay pointer-events-none absolute -right-2 bottom-28 rounded-full bg-gold px-3 py-1.5 text-xs font-semibold text-navy-deep shadow-md">
              Mocks & analytics
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-navy/60">
            Learn · Practice · Prove — then sail forward.
          </p>
        </div>
      </div>
    </div>
  );
}
