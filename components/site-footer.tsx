import { SITE } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-line-invert)] bg-[var(--color-bg-deep)] text-[var(--color-ink-invert)]">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--color-brand)] text-base font-extrabold text-[var(--color-ink-invert)]"
              >
                V
              </span>
              <span className="text-base font-bold">Vrijzinnigen Nederland</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink-invert-muted)]">
              Een vereniging die mensen verbindt rond inspiratie en zingeving,
              van vrijzinnigen tot religieus humanisten.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm" aria-label="Footermenu">
            <a className="text-[var(--color-ink-invert-muted)] transition-colors hover:text-[var(--color-ink-invert)]" href="#wie-we-zijn">
              Wie we zijn
            </a>
            <a className="text-[var(--color-ink-invert-muted)] transition-colors hover:text-[var(--color-ink-invert)]" href="#wat-we-doen">
              Wat we doen
            </a>
            <a className="text-[var(--color-ink-invert-muted)] transition-colors hover:text-[var(--color-ink-invert)]" href="#idealen">
              Idealen
            </a>
            <a className="text-[var(--color-ink-invert-muted)] transition-colors hover:text-[var(--color-ink-invert)]" href="#meedoen">
              Meedoen
            </a>
            <a className="text-[var(--color-ink-invert-muted)] transition-colors hover:text-[var(--color-ink-invert)]" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
          </nav>
        </div>

        <div className="mt-12 border-t border-[var(--color-line-invert)] pt-6 text-xs text-[var(--color-ink-invert-muted)]">
          © {year} Vrijzinnigen Nederland. Alle rechten voorbehouden.
        </div>
      </div>
    </footer>
  );
}
