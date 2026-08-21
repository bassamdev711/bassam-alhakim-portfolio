import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bassam-alhakim-portfolio.vercel.app";
  const currentDate = new Date();

  const routes = [
    "",
    "/projects/house-of-spices",
    "/projects/restaurant-erp",
    "/projects/tif",
    "/projects/wifi-monitor-pro",
    "/projects/esp32-smart-meter",
    "/projects/athr",
    "/projects/orven",
    "/projects/taqa-home",
    "/projects/dr-layan-clinic",
    "/projects/maten",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
