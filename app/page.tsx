import {
  Users,
  Sparkles,
  CalendarDays,
  BookOpen,
  HeartHandshake,
  Compass,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SITE } from "@/lib/site";

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  description: SITE.description,
  email: SITE.email,
  areaServed: "NL",
  knowsLanguage: "nl-NL",
};

const WEBSITE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: SITE.url,
  inLanguage: "nl-NL",
  publisher: { "@type": "Organization", name: SITE.name },
};

const ACTIVITEITEN = [
  {
    icon: CalendarDays,
    title: "Bijeenkomsten en agenda",
    text: "Vieringen, ontmoetingen en momenten van bezinning, het hele jaar door en op verschillende plekken in het land.",
  },
  {
    icon: BookOpen,
    title: "Lezingen en workshops",
    text: "Verdiepende lezingen, gesprekskringen en workshops over levensvragen, filosofie, kunst en zingeving.",
  },
  {
    icon: HeartHandshake,
    title: "Vrijzinnig pastoraat",
    text: "Aandacht en een luisterend oor bij grote en kleine levensvragen, zonder een vast antwoord op te leggen.",
  },
  {
    icon: Sparkles,
    title: "Inspiratie en blog",
    text: "Teksten, verhalen en inspiratiebronnen die uitnodigen om zelf na te denken over wat er werkelijk toe doet.",
  },
];

const IDEALEN = [
  {
    icon: Compass,
    title: "Vrij denken",
    text: "We geven ruimte aan ieders eigen zoektocht. Vragen mogen er zijn, ook zonder sluitend antwoord.",
  },
  {
    icon: Users,
    title: "Verbinding",
    text: "We brengen gelijkgestemden samen, van vrijzinnig gelovigen tot religieus humanisten, in openheid en respect.",
  },
  {
    icon: HeartHandshake,
    title: "Betekenis",
    text: "We zoeken naar zingeving in het gewone leven en in elkaar, dichtbij en met aandacht voor de wereld om ons heen.",
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_JSONLD) }}
      />

      <SiteHeader />

      <main className="flex-1">
        {/* ── Hero ─────────────────────────────────────── */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(70% 60% at 50% 0%, var(--color-brand-soft) 0%, transparent 70%)",
            }}
          />
          <div className="mx-auto max-w-4xl px-5 pb-20 pt-20 text-center sm:px-8 sm:pt-28">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line-strong)] bg-[var(--color-bg-elevated)] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--color-brand)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]" />
              Vereniging voor zingeving en ontmoeting
            </span>

            <h1 className="mt-7 text-4xl font-extrabold leading-[1.08] tracking-tight text-[var(--color-ink-strong)] sm:text-6xl">
              Ruimte voor zingeving,{" "}
              <span className="text-[var(--color-brand)]">verbinding</span> en
              vrij denken
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-ink-muted)]">
              Vrijzinnigen Nederland verbindt mensen die inspiratie en zingeving
              delen. We brengen gelijkgestemden samen, van vrijzinnigen tot
              religieus humanisten, in een open ontmoeting rond de vragen die er
              werkelijk toe doen.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#meedoen"
                className="btn-press inline-flex w-full items-center justify-center rounded-full bg-[var(--color-brand)] px-7 py-3.5 text-sm font-semibold text-[var(--color-ink-invert)] hover:bg-[var(--color-brand-hover)] sm:w-auto"
              >
                Word lid of doe mee
              </a>
              <a
                href="#wat-we-doen"
                className="btn-press inline-flex w-full items-center justify-center rounded-full border border-[var(--color-line-strong)] bg-[var(--color-bg-elevated)] px-7 py-3.5 text-sm font-semibold text-[var(--color-ink-strong)] hover:border-[var(--color-brand)] sm:w-auto"
              >
                Ontdek wat we doen
              </a>
            </div>
          </div>
        </section>

        {/* ── Wie we zijn ──────────────────────────────── */}
        <section id="wie-we-zijn" className="scroll-mt-24 border-t border-[var(--color-line)] bg-[var(--color-bg-elevated)]">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 md:grid-cols-[0.9fr_1.1fr] md:items-center md:py-24">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-brand)]">
                Wie we zijn
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[var(--color-ink-strong)] sm:text-4xl">
                Een open thuis voor vrijzinnige geesten
              </h2>
            </div>
            <div className="space-y-4 text-base leading-relaxed text-[var(--color-ink-muted)]">
              <p>
                Vrijzinnigen Nederland is een vereniging die mensen bij elkaar
                brengt rond inspiratie, bezinning en zingeving. Bij ons staat de
                eigen zoektocht centraal. Er is geen voorgeschreven leer en geen
                vast antwoord, wel een gedeelde nieuwsgierigheid naar het leven.
              </p>
              <p>
                Onze leden lopen uiteen van vrijzinnig gelovigen tot religieus
                humanisten. Wat ons bindt is de waardering voor vrij denken, voor
                de ontmoeting met elkaar en voor een leven dat betekenis heeft.
              </p>
            </div>
          </div>
        </section>

        {/* ── Wat we doen ──────────────────────────────── */}
        <section id="wat-we-doen" className="scroll-mt-24 border-t border-[var(--color-line)]">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-brand)]">
                Wat we doen
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[var(--color-ink-strong)] sm:text-4xl">
                Plekken om te ontmoeten, te verdiepen en te bezinnen
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[var(--color-ink-muted)]">
                Door het hele land organiseren we activiteiten waarin ontmoeting
                en zingeving samenkomen. Een greep uit wat we bieden.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {ACTIVITEITEN.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-bg-elevated)] p-7 transition-colors hover:border-[var(--color-brand-tint)]"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--color-brand-soft)] text-[var(--color-brand)]">
                    <Icon size={22} strokeWidth={1.8} aria-hidden />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-[var(--color-ink-strong)]">
                    {title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--color-ink-muted)]">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Idealen ──────────────────────────────────── */}
        <section id="idealen" className="scroll-mt-24 border-t border-[var(--color-line)] bg-[var(--color-bg-muted)]">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-brand)]">
                Onze idealen
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[var(--color-ink-strong)] sm:text-4xl">
                Waar we voor staan
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {IDEALEN.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex flex-col">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--color-gold-soft)] text-[var(--color-gold)]">
                    <Icon size={22} strokeWidth={1.8} aria-hidden />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-[var(--color-ink-strong)]">
                    {title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--color-ink-muted)]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Meedoen / CTA ────────────────────────────── */}
        <section id="meedoen" className="scroll-mt-24 border-t border-[var(--color-line)]">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
            <div className="overflow-hidden rounded-3xl bg-[var(--color-bg-deep)] px-7 py-14 text-center sm:px-12 sm:py-16">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight tracking-tight text-[var(--color-ink-invert)] sm:text-4xl">
                Sluit je aan bij Vrijzinnigen Nederland
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[var(--color-ink-invert-muted)]">
                Wil je meedoen aan onze bijeenkomsten, op de hoogte blijven van de
                agenda of lid worden? We ontmoeten je graag.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={`mailto:${SITE.email}`}
                  className="btn-press inline-flex w-full items-center justify-center rounded-full bg-[var(--color-brand)] px-7 py-3.5 text-sm font-semibold text-[var(--color-ink-invert)] hover:bg-[var(--color-brand-hover)] sm:w-auto"
                >
                  Neem contact op
                </a>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-sm font-semibold text-[var(--color-ink-invert-muted)] underline-offset-4 transition-colors hover:text-[var(--color-ink-invert)] hover:underline"
                >
                  {SITE.email}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
