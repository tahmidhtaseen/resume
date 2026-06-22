import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

/**
 * Auto-generated robots.txt served at /robots.txt.
 * Allows all major crawlers and points them to the sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
