import {
  About,
  Contact,
  Experience,
  FeaturedProject,
  Footer,
  Hero,
  Projects,
  Skills,
} from "@/components/sections";

export default function HomePage() {
  return (
    <main id="main" className="relative">
      <Hero />
      <About />
      <FeaturedProject />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
