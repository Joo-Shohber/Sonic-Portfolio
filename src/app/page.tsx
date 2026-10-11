import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { Expertise } from "@/components/Expertise";
import { About } from "@/components/About";
import { Learning } from "@/components/Learning";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: site.url,
  email: `mailto:${site.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Cairo", addressCountry: "EG" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Zagazig University" },
  knowsAbout: ["Node.js", "NestJS", "TypeScript", "PostgreSQL", "MongoDB", "Redis", "REST API design"],
  sameAs: [site.links.github, site.links.linkedin],
};

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded bg-signal px-4 py-2 font-medium text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Work />
        <Expertise />
        <About />
        <Learning />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
    </>
  );
}
