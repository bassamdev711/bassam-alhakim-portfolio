import type { MetadataRoute } from "next";

const baseUrl = "https://bassam-alhakim-portfolio.vercel.app";
const projectSlugs = [
  "house-of-spices",
  "restaurant-erp",
  "tif",
  "wifi-monitor-pro",
  "esp32-smart-meter",
  "athr",
  "orven",
  "taqa-home",
  "dr-layan-clinic",
  "maten",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();
  const routes = ["/ar", "/en", ...projectSlugs.flatMap((slug) => [`/ar/projects/${slug}`, `/en/projects/${slug}`])];
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "/ar" || route === "/en" ? "weekly" : "monthly",
    priority: route === "/ar" || route === "/en" ? 1.0 : 0.8,
  }));
}
