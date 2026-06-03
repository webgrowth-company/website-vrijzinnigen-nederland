import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-32 text-center">
      <div className="max-w-md">
        <p className="font-display text-[5rem] font-medium leading-none text-[var(--color-clay)]">
          404
        </p>
        <h1 className="font-display mt-4 text-3xl font-medium tracking-tight text-[var(--color-ink-strong)]">
          Deze pagina konden we niet vinden
        </h1>
        <p className="mt-3 text-base leading-relaxed text-[var(--color-ink-muted)]">
          Misschien is de pagina verplaatst of bestaat de link niet meer. Ga
          terug naar de startpagina.
        </p>
        <Link
          href="/"
          className="press mt-9 inline-flex items-center justify-center rounded-full bg-[var(--color-clay)] px-7 py-3.5 text-[0.95rem] font-semibold text-[var(--color-paper-on-dark)] hover:bg-[var(--color-clay-deep)]"
        >
          Terug naar home
        </Link>
      </div>
    </main>
  );
}
