import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: SITE_URL, lastModified, priority: 1 },
    { url: `${SITE_URL}/termos`, lastModified, priority: 0.3 },
    { url: `${SITE_URL}/privacidade`, lastModified, priority: 0.3 },
  ];
}
