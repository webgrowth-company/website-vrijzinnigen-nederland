import Link from "next/link";

const NAV = [
  { href: "#manifest", label: "Wie we zijn" },
  { href: "#praktijk", label: "Wat we doen" },
  { href: "#idealen", label: "Idealen" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-rule-soft)] bg-[var(--color-paper)]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[76rem] items-center justify-between gap-8 px-6 sm:px-10">
        <Link href="/" className="group flex items-baseline gap-2.5" aria-label="Vrijzinnigen Nederland, naar home">
          <span className="font-display text-[1.35rem] font-semibold leading-none text-[var(--color-ink-strong)]">
            Vrijzinnigen
          </span>
          <span className="hidden text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-clay)] sm:inline">
            Nederland
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Hoofdmenu">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.92rem] text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-ink-strong)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#meedoen"
          className="press inline-flex items-center gap-1.5 text-[0.92rem] font-medium text-[var(--color-ink-strong)] underline decoration-[var(--color-clay)] decoration-2 underline-offset-[6px] transition-colors hover:text-[var(--color-clay)]"
        >
          Sluit je aan
        </a>
      </div>
    </header>
  );
}
