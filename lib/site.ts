/**
 * Centrale site-constanten. Eén plek om de productie-URL, naam en
 * contactgegevens te wijzigen. Sitemap, robots, JSON-LD en de IndexNow-hook
 * lezen hieruit (of spiegelen deze waarden), zodat er nooit twee bronnen
 * uit elkaar lopen.
 *
 * Gegevens overgenomen van vrijzinnigen.nl (meta-omschrijving + contactpagina).
 * Nieuw productie-domein en e-mail: vrijzinnigennederland.nl.
 */
export const SITE = {
  name: "Vrijzinnigen Nederland",
  // Nieuw productie-domein.
  url: "https://www.vrijzinnigennederland.nl",
  locale: "nl_NL",
  // Letterlijke payoff uit het logo.
  payoff: "Verbindt vrijdenkers en zinzoekers",
  // Letterlijke meta-omschrijving van vrijzinnigen.nl.
  description:
    "Vrijzinnigen Nederland verbindt mensen die inspiratie en zingeving delen. Onze vereniging bindt gelijkgestemden van vrijzinnigen tot religieus humanisten.",
  email: "bureau@vrijzinnigennederland.nl",
  foundingYear: "1870",
  address: {
    street: "César Francklaan 13",
    postalCode: "1272 EC",
    city: "Huizen",
    country: "NL",
  },
  // Werkende social-profielen (van vrijzinnigen.nl). Twitter/Instagram hadden
  // op hun eigen site geen werkende link en zijn daarom (nog) niet opgenomen.
  social: {
    facebook:
      "https://www.facebook.com/Vrijzinnigen-Nederland-246711892072944/timeline/",
    linkedin: "https://www.linkedin.com/company/9341161",
  },
} as const;
