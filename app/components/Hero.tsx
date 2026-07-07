import Contact from "./Contact";
import Nav from "./Nav";

const Hero = () => {
  return (
    <section className="col-span-3 lg:sticky lg:top-0 lg:h-screen lg:px-12 lg:py-20 xl:col-span-1 xl:px-20">
      <div className="flex h-full max-h-[1280px] flex-col justify-between gap-8">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <h1 className="mb-2 text-[clamp(1.5rem,8vw,2.5rem)] leading-tight md:text-5xl lg:text-4xl xl:text-6xl">
              Sylvester Eziagor
            </h1>
            <h2 className="text-xl text-[var(--secondary-foreground)]">
              Information Security Analyst
            </h2>
            <p className="max-w-[75%] text-sm italic text-[var(--primary-foreground)]">
              Safeguarding your digital assets from cyber threats.
            </p>
          </div>
          <Nav />
        </div>
        <Contact />
      </div>
    </section>
  );
};

export default Hero;
