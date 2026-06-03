/**
 * Centrale site-constanten. Eén plek om de productie-URL, naam en
 * contactgegevens te wijzigen. Sitemap, robots, JSON-LD en de IndexNow-hook
 * lezen hieruit (of spiegelen deze waarden), zodat er nooit twee bronnen
 * uit elkaar lopen.
 */
export const SITE = {
  name: "Vrijzinnigen Nederland",
  // Productie-domein. Pas dit aan zodra de definitieve URL bekend is.
  url: "https://www.vrijzinnigen.nl",
  locale: "nl_NL",
  description:
    "Vrijzinnigen Nederland verbindt mensen die inspiratie en zingeving delen, van vrijzinnigen tot religieus humanisten. Ruimte voor vrij denken, ontmoeting en betekenis.",
  email: "info@vrijzinnigen.nl",
} as const;
