"use client";

import { useMemo, useState } from "react";
import { Search, ArrowUpRight } from "lucide-react";
import { AFDELINGEN } from "@/lib/afdelingen";

export function Afdelingen() {
  const [query, setQuery] = useState("");

  const norm = query.trim().toLowerCase();
  const results = useMemo(
    () =>
      norm
        ? AFDELINGEN.filter((a) => a.place.toLowerCase().includes(norm))
        : AFDELINGEN,
    [norm],
  );

  return (
    <div className="mt-10">
      <div className="relative max-w-md">
        <Search
          size={18}
          strokeWidth={1.8}
          aria-hidden
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-ink-subtle)]"
        />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Zoek op plaats, bijvoorbeeld Zeist"
          aria-label="Zoek een afdeling op plaatsnaam"
          className="w-full rounded-full border border-[var(--color-line-strong)] bg-[var(--color-paper-raised)] py-3 pl-11 pr-4 text-[0.95rem] text-[var(--color-ink-strong)] placeholder:text-[var(--color-ink-subtle)] outline-none transition-colors focus:border-[var(--color-clay)]"
        />
      </div>

      <p className="mt-3 text-sm text-[var(--color-ink-subtle)]" aria-live="polite">
        {results.length} {results.length === 1 ? "afdeling" : "afdelingen"}
        {norm ? " gevonden" : ""}
      </p>

      {results.length > 0 ? (
        <ul className="mt-5 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((a) => (
            <li key={a.place}>
              <a
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 border-b border-[var(--color-rule-soft)] py-2.5 text-[0.98rem] text-[var(--color-ink)] transition-colors hover:text-[var(--color-clay)]"
              >
                <span>{a.place}</span>
                <ArrowUpRight
                  size={15}
                  strokeWidth={2}
                  aria-hidden
                  className="shrink-0 -translate-x-1 text-[var(--color-clay)] opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                />
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-6 max-w-md text-[0.98rem] leading-relaxed text-[var(--color-ink-muted)]">
          Geen afdeling gevonden voor &ldquo;{query}&rdquo;. Probeer een andere
          plaats in de buurt, of neem contact met ons op.
        </p>
      )}
    </div>
  );
}
