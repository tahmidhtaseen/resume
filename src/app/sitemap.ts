import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { sectionMeta } from "@/lib/portfolio-data";

/**
 * Auto-generated XML sitemap served at /sitemap.xml.
 * Search engines use this to discover and index all site sections.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const sections = sectionMeta.map((section) => ({
    url: `${siteConfig.url}/#${section.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: section.id === "home" ? 1 : 0.8,
  }));

  return [
    {
      url: siteConfig.url,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...sections,
  ];
}
