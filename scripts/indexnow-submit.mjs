/**
 * IndexNow submission script.
 *
 * Pingt na een productie-build alle canonical URL's naar de IndexNow API.
 * Bing, Yandex en Naver delen die index en updaten binnen minuten. ChatGPT-
 * search, Perplexity en Claude.ai gebruiken Bing onder de motorkap, dus dit is
 * de snelste route naar zichtbaarheid in AI-search.
 *
 * Google doet niet mee aan IndexNow: daarvoor blijft sitemap.xml + handmatige
 * URL Inspection in Search Console de route.
 *
 * Draait als `postbuild` hook. Skipt zichzelf op niet-production builds en als
 * SKIP_INDEXNOW=1 in de env staat.
 */

const KEY = "3fd1f0243a58e0932199a460657aac97";
const HOST = "www.vrijzinnigennederland.nl";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/IndexNow";

const isVercelProd =
  process.env.VERCEL === "1" && process.env.VERCEL_ENV === "production";
const skipReason =
  process.env.SKIP_INDEXNOW === "1"
    ? "SKIP_INDEXNOW=1"
    : process.env.VERCEL === "1" && !isVercelProd
      ? `Vercel ${process.env.VERCEL_ENV} build (alleen production submit)`
      : null;

if (skipReason) {
  console.log(`[indexnow] skipping: ${skipReason}`);
  process.exit(0);
}

const staticPaths = ["/"];
const urlList = staticPaths.map((p) => `https://${HOST}${p}`);
const uniqueUrls = Array.from(new Set(urlList));

console.log(
  `[indexnow] submitting ${uniqueUrls.length} URL(s) to IndexNow (Bing/Yandex/Naver)`,
);

const payload = {
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: uniqueUrls,
};

try {
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "User-Agent": "Vrijzinnigen-IndexNow/1.0",
    },
    body: JSON.stringify(payload),
  });

  if (res.status === 200 || res.status === 202) {
    console.log(`[indexnow] ok (${res.status}): ${uniqueUrls.length} URL(s) accepted`);
  } else if (res.status === 422) {
    const text = await res.text().catch(() => "");
    console.warn(`[indexnow] partial (422): some URLs invalid. ${text}`);
  } else {
    const text = await res.text().catch(() => "");
    console.error(`[indexnow] FAIL (${res.status}): ${text}`);
    process.exit(0);
  }
} catch (err) {
  console.error(`[indexnow] network error: ${err.message}`);
  process.exit(0);
}
