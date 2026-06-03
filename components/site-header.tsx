"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/public/brand/vznl-payoff.png";

const NAV = [
  { href: "#manifest", label: "Wie we zijn" },
  { href: "#praktijk", label: "Wat we doen" },
  { href: "#idealen", label: "Idealen" },
  { href: "#afdelingen", label: "Afdelingen" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const sentinel = useRef<HTMLDivElement | null>(null);

  // Sticky-state via een sentinel boven de header (geen scroll-listener).
  useEffect(() => {
    const el = sentinel.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinel} aria-hidden className="h-px w-full" />
      <header className="sticky top-0 z-50 bg-[var(--color-paper)]/85 backdrop-blur-md">
        <div
          className={`mx-auto flex max-w-[76rem] items-center justify-between gap-6 px-6 sm:px-10 h-anim ${
            scrolled ? "h-[5.5rem] md:h-[6rem]" : "h-[5.5rem] md:h-[8.5rem]"
          }`}
        >
          <Link
            href="/"
            aria-label="Vrijzinnigen Nederland, naar home"
            className="press flex items-center"
            onClick={() => setOpen(false)}
          >
            <Image
              src={logo}
              alt="Vrijzinnigen Nederland, verbindt vrijdenkers en zinzoekers"
              priority
              sizes="170px"
              className={`w-auto h-anim ${
                scrolled ? "h-[4.5rem]" : "h-[4.5rem] md:h-[7.5rem]"
              }`}
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

          <div className="flex items-center gap-4">
            <a
              href="#afdelingen"
              className="press hidden items-center text-[0.92rem] font-medium text-[var(--color-ink-strong)] underline decoration-[var(--color-clay)] decoration-2 underline-offset-[6px] transition-colors hover:text-[var(--color-clay)] md:inline-flex"
            >
              Vind jouw afdeling
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Menu sluiten" : "Menu openen"}
              aria-expanded={open}
              className="press grid h-10 w-10 place-items-center rounded-full text-[var(--color-ink-strong)] md:hidden"
            >
              {open ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
            </button>
          </div>
        </div>

        <div className="rainbow-bar" aria-hidden />

        {/* Mobiel menu */}
        {open && (
          <nav
            className="absolute inset-x-0 top-full border-b border-[var(--color-rule)] bg-[var(--color-paper)] px-6 pb-6 pt-2 shadow-[0_18px_30px_-18px_rgba(28,26,23,0.25)] md:hidden"
            aria-label="Mobiel menu"
          >
            <ul className="flex flex-col">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-[var(--color-rule-soft)] py-3.5 text-[1.05rem] text-[var(--color-ink-strong)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#afdelingen"
              onClick={() => setOpen(false)}
              className="press btn-primary mt-5 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-[0.95rem] font-semibold"
            >
              Vind jouw afdeling
            </a>
          </nav>
        )}
      </header>
    </>
  );
}
