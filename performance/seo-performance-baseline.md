# SEO and performance baseline

Date: 2026-08-21
URL: https://bassam-alhakim-portfolio.vercel.app/

## Lighthouse mobile baseline

The local Lighthouse run used the mobile form factor and simulated throttling against the live Vercel deployment. Scores:

| Category | Score |
|---|---:|
| Performance | 61 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

Key metrics:

| Metric | Result | Finding |
|---|---:|---|
| First Contentful Paint | 2.9 s | Needs improvement |
| Largest Contentful Paint | 10.7 s | Critical; target is under 2.5 s at the 75th percentile |
| Speed Index | 9.2 s | Needs improvement |
| Total Blocking Time | 110 ms | Good but can improve |
| Cumulative Layout Shift | 0 | Excellent |
| Time to Interactive | 10.8 s | Needs improvement |
| Initial server response | 30 ms | Good |

Main Lighthouse findings:

- The LCP element is the hero heading span `people trust.`. The report attributes 94% of the LCP time to render delay, not server response or image transfer.
- The Google Fonts CSS request is render-blocking and has no preconnect. Estimated savings are approximately 660 ms for render-blocking and 270 ms from preconnect opportunities.
- Unused JavaScript is estimated at 72 KiB across three chunks.
- Offscreen project images account for an estimated 41 KiB that could be deferred.
- One project image is served at 640px wide while displayed around 220px wide, with an estimated 25 KiB savings.
- Forced reflow is reported at approximately 96 ms in a client chunk.
- The accessible, best-practices, and SEO categories currently pass at 100, including title, meta description, canonical, hreflang, robots, and crawlability.

## Code inspection

- `app/layout.tsx` currently includes a rich metadata object, Google verification token, Open Graph/Twitter metadata, `ProfilePage`, `Person`, and `WebSite` JSON-LD.
- `app/robots.ts` allows crawling and points to `/sitemap.xml`.
- `app/sitemap.ts` currently lists the homepage plus four project routes: House of Spices, Restaurant ERP, TIF, and WiFi Monitor Pro. The remaining portfolio projects are currently represented on the homepage but do not have dedicated sitemap URLs.
- `components/smooth-scroll.tsx` initializes Lenis on every page and runs a requestAnimationFrame loop continuously. This is a candidate for mobile reduction or deferred initialization.

## Official guidance consulted

1. Google Search Central, [Understanding Core Web Vitals and Google search results](https://developers.google.com/search/docs/appearance/core-web-vitals): recommends LCP within 2.5 seconds, INP under 200 milliseconds, and CLS under 0.1 for a good user experience.
2. Google Search Central, [Understanding page experience in Google Search results](https://developers.google.com/search/docs/appearance/page-experience): page experience is multi-signal; good scores do not guarantee first place, and relevance/helpful content remains essential.
3. Google Search Central, [Profile page structured data](https://developers.google.com/search/docs/appearance/structured-data/profile-page): recommends valid `ProfilePage`/`Person` markup, crawlable images, sameAs profiles, sitemap submission, and URL Inspection after deployment.

## Measurement limitation

The unauthenticated PageSpeed Insights API was unavailable because its configured project quota returned HTTP 429 with a zero daily quota. Lighthouse was therefore used locally against the live deployment. Search Console real-user Core Web Vitals data should remain the source of truth once enough field data has accumulated.

## Post-optimization local production check

After removing Framer Motion from the homepage path, disabling Lenis on touch devices, lazy-loading featured gallery images, adding dedicated SSG project pages, and adding ItemList/CreativeWork structured data, `npm run build` completed successfully. The production-server Lighthouse run measured FCP 1.0 s, LCP 3.2 s, CLS 0, and SEO/accessibility/best-practices at 100. The local lab run still reports inflated Total Blocking Time from an unattributed Lighthouse/Chromium task; it must be validated against the live Vercel deployment and Search Console field data before treating it as a site defect.

Google reference used: https://developers.google.com/search/docs/appearance/core-web-vitals
