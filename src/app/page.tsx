import type { Metadata } from "next";
import { Navbar } from "@/components/portfolio/layout/navbar";
import { Footer } from "@/components/portfolio/layout/footer";
import { FloatingActions } from "@/components/portfolio/layout/floating-actions";
import { Hero } from "@/components/portfolio/sections/hero";
import { About } from "@/components/portfolio/sections/about";
import { Skills } from "@/components/portfolio/sections/skills";
import { Experience } from "@/components/portfolio/sections/experience";
import { Education } from "@/components/portfolio/sections/education";
import { Projects } from "@/components/portfolio/sections/projects";
import { Certificates } from "@/components/portfolio/sections/certificates";
import { Contact } from "@/components/portfolio/sections/contact";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: {
    absolute: siteConfig.title,
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
