import Link from "next/link";
import Image from "next/image";
import logo from "@/public/brand/vznl-payoff.png";

const NAV = [
  { href: "#manifest", label: "Wie we zijn" },
  { href: "#praktijk", label: "Wat we doen" },
  { href: "#idealen", label: "Idealen" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--color-paper)]/85 backdrop-blur-md">
      <div className="mx-auto flex h-[8.5rem] max-w-[76rem] items-center justify-between gap-8 px-6 sm:px-10">
        <Link href="/" aria-label="Vrijzinnigen Nederland, naar home" className="press flex items-center">
          <Image
            src={logo}
            alt="Vrijzinnigen Nederland, verbindt vrijdenkers en zinzoekers"
            priority
            className="h-[7.5rem] w-auto"
            sizes="170px"
          />
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
          className="press inline-flex items-center text-[0.92rem] font-medium text-[var(--color-ink-strong)] underline decoration-[var(--color-clay)] decoration-2 underline-offset-[6px] transition-colors hover:text-[var(--color-clay)]"
        >
          Sluit je aan
        </a>
      </div>

      {/* Regenboog-divider (3px) onder het menu, in de logo-volgorde */}
      <div className="rainbow-bar" aria-hidden />
    </header>
  );
}
