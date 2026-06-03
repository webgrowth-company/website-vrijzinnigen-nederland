import { SITE } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-rule)] bg-[var(--color-paper)]">
      <div className="mx-auto max-w-[76rem] px-6 py-16 sm:px-10">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-md">
            <p className="font-display text-2xl font-medium leading-snug text-[var(--color-ink-strong)]">
              Vrijzinnigen Nederland
            </p>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-[var(--color-ink-muted)]">
              Een vereniging die mensen verbindt rond inspiratie en zingeving,
              van vrijzinnigen tot religieus humanisten.
            </p>
            <address className="mt-5 text-[0.9rem] not-italic leading-relaxed text-[var(--color-ink-subtle)]">
              {SITE.address.street}
              <br />
              {SITE.address.postalCode} {SITE.address.city}
            </address>
          </div>

          <nav
            className="flex flex-wrap gap-x-10 gap-y-3 text-[0.95rem]"
            aria-label="Footermenu"
          >
            <a className="text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-ink-strong)]" href="#manifest">
              Wie we zijn
            </a>
            <a className="text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-ink-strong)]" href="#praktijk">
              Wat we doen
            </a>
            <a className="text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-ink-strong)]" href="#idealen">
              Idealen
            </a>
            <a className="text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-ink-strong)]" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
          </nav>
        </div>

        <div className="mt-14 flex items-center justify-between border-t border-[var(--color-rule-soft)] pt-6 text-[0.8rem] text-[var(--color-ink-subtle)]">
          <span>© {year} Vrijzinnigen Nederland</span>
          <span className="font-display italic">Ruimte voor vrij denken</span>
        </div>
      </div>
    </footer>
  );
}
