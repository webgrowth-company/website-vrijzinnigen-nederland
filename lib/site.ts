/**
 * Centrale site-constanten. Eén plek om de productie-URL, naam en
 * contactgegevens te wijzigen. Sitemap, robots, JSON-LD en de IndexNow-hook
 * lezen hieruit (of spiegelen deze waarden), zodat er nooit twee bronnen
 * uit elkaar lopen.
 *
 * Gegevens overgenomen van vrijzinnigen.nl (meta-omschrijving + contactpagina).
 */
export const SITE = {
  name: "Vrijzinnigen Nederland",
  // Productie-domein. Pas dit aan zodra de definitieve URL bekend is.
  url: "https://www.vrijzinnigen.nl",
  locale: "nl_NL",
  // Letterlijke meta-omschrijving van vrijzinnigen.nl.
  description:
    "Vrijzinnigen Nederland verbindt mensen die inspiratie en zingeving delen. Onze vereniging bindt gelijkgestemden van vrijzinnigen tot religieus humanisten.",
  email: "bureau@vrijzinnigen.nl",
  foundingYear: "1870",
  address: {
    street: "César Francklaan 13",
    postalCode: "1272 EC",
    city: "Huizen",
    country: "NL",
  },
} as const;
