import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { Work } from "@/components/sections/work";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { About } from "@/components/sections/about";
import { Writing } from "@/components/sections/writing";
import { Contact } from "@/components/sections/contact";
import { JsonLd } from "@/components/json-ld";
import { personJsonLd, websiteJsonLd, profilePageJsonLd } from "@/lib/site";

export default function Home() {
  return (
    <>
      <JsonLd data={[personJsonLd(), websiteJsonLd(), profilePageJsonLd()]} />
      <Nav />
      <main>
        <Hero />
        <Work />
        <Experience />
        <Skills />
        <About />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
