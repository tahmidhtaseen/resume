import { siteConfig } from "@/lib/site-config";
import { profile, skillCategories, languages } from "@/lib/portfolio-data";

/**
 * JSON-LD structured data describing the person behind the portfolio.
 *
 * This helps search engines (Google, Bing, Yandex) understand the entity and
 * can unlock rich results such as knowledge panels and person snippets.
 *
 * Schema: https://schema.org/Person
 */
export function StructuredData() {
  const allSkills = skillCategories.flatMap((c) => c.skills);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    description: profile.summary,
    email: `mailto:${profile.email}`,
    telephone: `+${profile.phoneDigits}`,
    nationality: profile.nationality,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressRegion: "Dhaka",
      addressCountry: "BD",
    },
    url: siteConfig.url,
    image: `${siteConfig.url}/opengraph-image`,
    knowsAbout: allSkills,
    knowsLanguage: languages.map((l) => ({
      "@type": "Language",
      name: l.name,
      alternateName: l.level,
    })),
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.github,
      siteConfig.social.twitter,
    ],
    worksFor: {
      "@type": "Organization",
      name: "Avant Technology Limited",
    },
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Bangladesh University",
      },
      {
        "@type": "EducationalOrganization",
        name: "Govt. Graphic Arts Institute",
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en",
    author: { "@type": "Person", name: profile.name },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
