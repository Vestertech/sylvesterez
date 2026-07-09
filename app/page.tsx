import Hero from "./components/Hero";
import About from "./components/About";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import ResourcesSection from "./components/ResourcesSection";
import Footer from "./components/Footer";

const SectionHeading = ({ label }: { label: string }) => (
  <div className="sticky top-0 z-20 -mx-4 mb-4 bg-[rgba(255,255,255,0.8)] px-4 py-4 backdrop-blur md:-mx-12 md:px-12 lg:sr-only">
    <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--secondary-foreground)]">
      {label}
    </h2>
  </div>
);

export default function Home() {
  return (
    <main className="mx-auto flex h-full max-w-[850px] flex-col gap-12 px-4 py-20 text-sm md:px-12 lg:grid lg:max-w-[1536px] lg:grid-cols-7 lg:gap-0 lg:p-0 xl:grid-cols-2 xl:text-base">
      <Hero />
      <section className="relative z-10 col-span-4 h-full w-full lg:py-20 xl:col-span-1">
        <div className="flex w-full flex-col gap-28 lg:pr-12 xl:pr-20">
          <section id="about" className="scroll-mt-20">
            <SectionHeading label="About" />
            <About />
          </section>
          <section id="experience" className="scroll-mt-20">
            <SectionHeading label="Experience" />
            <ExperienceSection />
          </section>
          <section id="projects" className="scroll-mt-20">
            <SectionHeading label="Projects" />
            <ProjectsSection />
          </section>
          <section id="blog" className="scroll-mt-20">
            <SectionHeading label="Blog" />
            <ResourcesSection />
          </section>
          <Footer />
        </div>
      </section>
    </main>
  );
}
