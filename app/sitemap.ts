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
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
