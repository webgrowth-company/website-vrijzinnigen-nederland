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
      <div className="mx-auto flex h-[4.25rem] max-w-[76rem] items-center justify-between gap-8 px-6 sm:px-10">
        <Link href="/" aria-label="Vrijzinnigen Nederland, naar home" className="press flex items-center">
          <Image
            src={logo}
            alt="Vrijzinnigen Nederland, verbindt vrijdenkers en zinzoekers"
            priority
            className="h-11 w-auto"
            sizes="64px"
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

      {/* Regenboog-divider onder het menu, ontleend aan het logo.
          Gradient inline zodat hij gegarandeerd rendert, los van Tailwind-tokens. */}
      <div
        aria-hidden
        style={{
          height: "6px",
          backgroundImage:
            "linear-gradient(90deg,#e4322b 0%,#ef7d1e 20%,#f4c41f 38%,#5bb24a 56%,#2a8fd0 74%,#7a3f98 100%)",
        }}
      />
    </header>
  );
}
