import Link from "next/link";

const NAV = [
  { href: "#wie-we-zijn", label: "Wie we zijn" },
  { href: "#wat-we-doen", label: "Wat we doen" },
  { href: "#idealen", label: "Idealen" },
  { href: "#meedoen", label: "Meedoen" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[var(--color-bg)]/85 backdrop-blur-md">
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Vrijzinnigen Nederland, naar home">
          {/* Tijdelijk logo-merkteken — vervangen door echt logo zodra aangeleverd */}
          <span
            aria-hidden
            className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--color-brand)] text-base font-extrabold text-[var(--color-ink-invert)]"
          >
            V
          </span>
          <span className="text-[0.97rem] font-bold tracking-tight text-[var(--color-ink-strong)]">
            Vrijzinnigen Nederland
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Hoofdmenu">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-ink-strong)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#meedoen"
          className="btn-press inline-flex items-center rounded-full bg-[var(--color-brand)] px-5 py-2.5 text-sm font-semibold text-[var(--color-ink-invert)] hover:bg-[var(--color-brand-hover)]"
        >
          Sluit je aan
        </a>
      </div>
    </header>
  );
}
