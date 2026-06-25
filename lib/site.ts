import {
  profile,
  socials,
  skillGroups,
  education,
  type Project,
} from "@/lib/data";

/** Canonical production origin — drives every absolute URL on the site. */
export const siteUrl = "https://nodir.dev";

export const absUrl = (path = "/") => new URL(path, siteUrl).toString();

const sameAs = [
  socials.linkedin,
  socials.github,
  socials.twitter,
  socials.telegram,
  socials.devto,
  socials.medium,
];

/** schema.org Person — the most important structured data for a personal site. */
export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: profile.name,
    alternateName: ["Nodir Sharipov", "Nodirbek"],
    url: siteUrl,
    image: absUrl("/opengraph-image"),
    jobTitle: profile.role,
    description: profile.metaDescription,
    email: `mailto:${socials.email}`,
    telephone: `+${socials.phone.replace(/\D/g, "")}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tashkent",
      addressCountry: "UZ",
    },
    knowsLanguage: profile.languages.map((l) => l.name),
    knowsAbout: skillGroups.flatMap((g) => g.skills.map((s) => s.name)),
    alumniOf: education.map((e) => ({
      "@type": "CollegeOrUniversity",
      name: e.school,
    })),
    sameAs,
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: profile.name,
    alternateName: `${profile.name} — ${profile.role}`,
    url: siteUrl,
    inLanguage: "en",
    publisher: { "@id": `${siteUrl}/#person` },
  };
}

export function profilePageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: siteUrl,
    mainEntity: { "@id": `${siteUrl}/#person` },
  };
}

/** A project case study, modelled as CreativeWork authored by the person. */
export function projectJsonLd(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    headline: `${project.name} — ${project.company}`,
    description: project.tagline,
    url: absUrl(`/work/${project.slug}`),
    image: absUrl(`/work/${project.slug}/opengraph-image`),
    keywords: project.stack.join(", "),
    author: { "@id": `${siteUrl}/#person` },
    creator: { "@id": `${siteUrl}/#person` },
    ...(project.url ? { sameAs: project.url } : {}),
  };
}

export function breadcrumbJsonLd(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Work",
        item: absUrl("/#work"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.name,
        item: absUrl(`/work/${project.slug}`),
      },
    ],
  };
}
