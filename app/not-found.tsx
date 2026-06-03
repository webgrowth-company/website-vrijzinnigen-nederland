import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center justify-center px-5 py-28 text-center">
      <div className="max-w-md">
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-brand)]">
          404
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-ink-strong)]">
          Deze pagina konden we niet vinden
        </h1>
        <p className="mt-3 text-base leading-relaxed text-[var(--color-ink-muted)]">
          Misschien is de pagina verplaatst of bestaat de link niet meer. Ga
          terug naar de startpagina.
        </p>
        <Link
          href="/"
          className="btn-press mt-8 inline-flex items-center justify-center rounded-full bg-[var(--color-brand)] px-7 py-3.5 text-sm font-semibold text-[var(--color-ink-invert)] hover:bg-[var(--color-brand-hover)]"
        >
          Terug naar home
        </Link>
      </div>
    </main>
  );
}
