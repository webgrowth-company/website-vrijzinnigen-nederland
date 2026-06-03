import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { SITE } from "@/lib/site";

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  description: SITE.description,
  email: SITE.email,
  foundingDate: SITE.foundingYear,
  areaServed: "NL",
  knowsLanguage: "nl-NL",
  slogan: SITE.payoff,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    postalCode: SITE.address.postalCode,
    addressLocality: SITE.address.city,
    addressCountry: SITE.address.country,
  },
  sameAs: [
    SITE.social.facebook,
    SITE.social.instagram,
    SITE.social.linkedin,
  ],
};

const WEBSITE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: SITE.url,
  inLanguage: "nl-NL",
  publisher: { "@type": "Organization", name: SITE.name },
};

// Wat we doen — gebaseerd op de rubrieken en activiteiten op vrijzinnigen.nl
// (agenda, vieringen, lezingen/Vrijzinnig Platform, pastoraat, blog, inspiratie).
const PRAKTIJK = [
  {
    num: "01",
    title: "Bijeenkomsten en vieringen",
    text: "Ontmoetingsdagen, vieringen en momenten van bezinning bij de afdelingen, verspreid door het hele land.",
  },
  {
    num: "02",
    title: "Lezingen en het Vrijzinnig Platform",
    text: "De Vrijzinnige Lezing en de Opzoomerlezing, met workshops, excursies en literatuur rond zingeving en duurzaamheid.",
  },
  {
    num: "03",
    title: "Vrijzinnig pastoraat",
    text: "Aandacht en een luisterend oor bij grote en kleine levensvragen, zonder een vast antwoord op te leggen.",
  },
  {
    num: "04",
    title: "Blog en inspiratiebronnen",
    text: "Verhalen, recensies en denkers die ons inspireren, van Erasmus en Spinoza tot Hannah Arendt.",
  },
];

// Idealen — ontleend aan de pagina 'Vrijzinnige idealen' op vrijzinnigen.nl.
const IDEALEN = [
  {
    word: "Vrijheid",
    text: "Vrijheid is misschien wel het grootste vrijzinnige ideaal: vrij van orthodoxe dogma's en dwingende structuren, vrij in denken en ontdekken.",
  },
  {
    word: "Verbinding",
    text: "Een vrijzinnige is juist iemand die verbindt. Nieuwsgierig blijven en het pad samen met anderen bewandelen, in verbondenheid met de traditie en vertrouwen in de toekomst.",
  },
  {
    word: "Bezinning",
    text: "Plekken waar ruimte is om te bezinnen, en om te bevestigen dat zorg voor elkaar, respect, tolerantie en openheid wezenlijke waarden zijn.",
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
        {/* ── Hero — asymmetrisch, redactioneel ─────────── */}
        <section className="mx-auto max-w-[76rem] px-6 pb-24 pt-20 sm:px-10 sm:pt-28">
          <div className="grid gap-x-14 gap-y-12 md:grid-cols-[1.65fr_1fr]">
            <div>
              <Reveal as="p" className="eyebrow text-[var(--color-clay)]">
                Vereniging sinds {SITE.foundingYear}
              </Reveal>

              <Reveal
                as="h1"
                delay={80}
                className="font-display mt-6 max-w-[14ch] text-[2.75rem] font-medium leading-[1.04] text-[var(--color-ink-strong)] sm:text-[4.25rem] sm:leading-[0.98]"
              >
                Ruimte voor zingeving, verbinding en{" "}
                <span className="rainbow-underline italic">vrij denken</span>
              </Reveal>

              <Reveal
                as="p"
                delay={160}
                className="mt-8 max-w-[48ch] text-lg leading-relaxed text-[var(--color-ink-muted)]"
              >
                Vrijzinnigen Nederland verbindt mensen die inspiratie en zingeving
                delen. Onze vereniging bindt gelijkgestemden van vrijzinnigen tot
                religieus humanisten.
              </Reveal>

              <Reveal delay={240} className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
                <a
                  href="#meedoen"
                  className="press btn-primary inline-flex items-center justify-center rounded-full px-7 py-3.5 text-[0.95rem] font-semibold"
                >
                  Word lid of doe mee
                </a>
                <a
                  href="#praktijk"
                  className="press text-[0.95rem] font-medium text-[var(--color-ink-strong)] underline decoration-[var(--color-ink-faint)] decoration-1 underline-offset-[6px] transition-colors hover:decoration-[var(--color-clay)]"
                >
                  Ontdek wat we doen
                </a>
              </Reveal>
            </div>

            {/* Redactionele aside: een echt citaat van vrijzinnigen.nl */}
            <Reveal
              delay={200}
              className="flex md:border-l md:border-[var(--color-rule)] md:pl-12"
            >
              <figure className="self-end">
                <p className="font-display text-2xl font-medium italic leading-snug text-[var(--color-ink)] sm:text-[1.7rem]">
                  &ldquo;Durf te dwalen en te dromen.&rdquo;
                </p>
                <figcaption className="eyebrow mt-5 text-[var(--color-ink-subtle)]">
                  Friedrich von Schiller
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        {/* ── Manifest — Wie we zijn (echte geschiedenis) ── */}
        <section
          id="manifest"
          className="border-t border-[var(--color-rule)] bg-[var(--color-paper-raised)]"
        >
          <div className="mx-auto grid max-w-[76rem] gap-x-14 gap-y-8 px-6 py-24 sm:px-10 md:grid-cols-[1fr_1.7fr]">
            <div className="md:sticky md:top-28 md:self-start">
              <Reveal as="p" className="eyebrow text-[var(--color-clay)]">
                Wie we zijn
              </Reveal>
              <Reveal
                as="p"
                delay={80}
                className="font-display mt-5 text-[1.7rem] font-medium leading-snug text-[var(--color-ink-strong)]"
              >
                Een vrije zoektocht, al meer dan 150 jaar.
              </Reveal>
            </div>

            <Reveal
              delay={120}
              className="max-w-[58ch] space-y-6 text-[1.12rem] leading-[1.75] text-[var(--color-ink-muted)] [&>p:first-of-type]:first-letter:float-left [&>p:first-of-type]:first-letter:mr-3 [&>p:first-of-type]:first-letter:font-display [&>p:first-of-type]:first-letter:text-[3.4rem] [&>p:first-of-type]:first-letter:font-semibold [&>p:first-of-type]:first-letter:leading-[0.78] [&>p:first-of-type]:first-letter:text-[var(--color-clay)]"
            >
              <p>
                Vrijzinnigen Nederland werd in {SITE.foundingYear} opgericht door
                Opzoomer, samen met predikanten uit het noorden van het land. Zij
                verzetten zich tegen de steeds dogmatischer wordende kerk en kozen
                voor een vrije zoektocht, zonder vooroordelen en zonder dwang van
                de traditie.
              </p>
              <p>
                Die zoektocht staat nog steeds centraal. Bij ons is geen
                voorgeschreven leer en geen vast antwoord, wel een gedeelde
                nieuwsgierigheid naar het leven. Onze leden lopen uiteen van
                vrijzinnig gelovigen tot religieus humanisten, verbonden door de
                waardering voor vrij denken en voor de ontmoeting met elkaar.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── Praktijk — Wat we doen (genummerde index) ─── */}
        <section
          id="praktijk"
          className="border-t border-[var(--color-rule)]"
        >
          <div className="mx-auto max-w-[76rem] px-6 py-24 sm:px-10">
            <div className="grid gap-x-14 gap-y-10 md:grid-cols-[1fr_1.7fr]">
              <div>
                <Reveal as="p" className="eyebrow text-[var(--color-clay)]">
                  Wat we doen
                </Reveal>
                <Reveal
                  as="h2"
                  delay={80}
                  className="font-display mt-5 max-w-[12ch] text-[2rem] font-medium leading-tight text-[var(--color-ink-strong)] sm:text-[2.4rem]"
                >
                  Plekken om te ontmoeten en te bezinnen
                </Reveal>
              </div>

              <ul className="border-t border-[var(--color-rule)]">
                {PRAKTIJK.map((item, i) => (
                  <Reveal as="li" key={item.num} delay={i * 70}>
                    <div className="index-row grid grid-cols-[auto_1fr] gap-x-6 border-b border-[var(--color-rule)] py-7 sm:gap-x-10 sm:py-8">
                      <span className="index-num font-display text-base font-medium text-[var(--color-ink-faint)] transition-colors sm:text-lg">
                        {item.num}
                      </span>
                      <div>
                        <h3 className="index-title font-display text-xl font-medium text-[var(--color-ink)] transition-colors sm:text-2xl">
                          {item.title}
                        </h3>
                        <p className="mt-2 max-w-[52ch] text-[1.02rem] leading-relaxed text-[var(--color-ink-muted)]">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Idealen — grote statements, geen boxes ────── */}
        <section
          id="idealen"
          className="border-t border-[var(--color-rule)] bg-[var(--color-paper-sunk)]"
        >
          <div className="mx-auto max-w-[76rem] px-6 py-24 sm:px-10">
            <Reveal as="p" className="eyebrow text-[var(--color-clay)]">
              Onze idealen
            </Reveal>

            <div className="mt-12 space-y-px">
              {IDEALEN.map((item, i) => (
                <Reveal key={item.word} delay={i * 90}>
                  <div className="grid items-baseline gap-x-12 gap-y-3 border-t border-[var(--color-rule)] py-9 md:grid-cols-[1fr_1.9fr]">
                    <h3 className="font-display text-3xl font-medium leading-none text-[var(--color-ink-strong)] sm:text-[2.6rem]">
                      <span className="mr-3 align-top text-base font-normal text-[var(--color-ochre)]">
                        0{i + 1}
                      </span>
                      {item.word}
                    </h3>
                    <p className="max-w-[54ch] text-[1.12rem] leading-relaxed text-[var(--color-ink-muted)]">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Meedoen — drenched CTA-vlak ───────────────── */}
        <section
          id="meedoen"
          className="bg-[var(--color-espresso)] text-[var(--color-paper-on-dark)]"
        >
          <div className="mx-auto max-w-[76rem] px-6 py-28 sm:px-10">
            <div className="grid gap-x-14 gap-y-10 md:grid-cols-[1.5fr_1fr] md:items-end">
              <Reveal>
                <p className="eyebrow text-[var(--color-ochre)]">Meedoen</p>
                <h2 className="font-display mt-6 max-w-[16ch] text-[2.4rem] font-medium leading-[1.05] sm:text-[3.5rem]">
                  Sluit je aan bij Vrijzinnigen Nederland
                </h2>
              </Reveal>

              <Reveal delay={120} className="md:pb-2">
                <p className="max-w-[42ch] text-lg leading-relaxed text-[var(--color-paper-on-dark-muted)]">
                  Wil je meedoen aan onze bijeenkomsten, op de hoogte blijven van
                  de agenda of lid worden? We ontmoeten je graag.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
                  <a
                    href={`mailto:${SITE.email}`}
                    className="press btn-primary inline-flex items-center justify-center rounded-full px-7 py-3.5 text-[0.95rem] font-semibold"
                  >
                    Neem contact op
                  </a>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-[0.95rem] font-medium text-[var(--color-paper-on-dark-muted)] underline decoration-[var(--color-rule-on-dark)] underline-offset-[6px] transition-colors hover:text-[var(--color-paper-on-dark)]"
                  >
                    {SITE.email}
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
