const About = () => {
  return (
    <div className="about-section flex flex-col gap-6 transition-all duration-300 hover:text-[var(--secondary-foreground)]">
      <p>
        Hello, welcome to my portfolio{" "}
        <span className="animate-wave text-2xl">👋🏽</span> I’m Sylvester, an
        Information Technology (IT) professional who’s all about safeguarding
        your digital assets and building secure systems. I specialize in
        Information Security Analysis, with focus on access control, network
        security, compliance, troubleshooting, and improving audit readiness. I
        thrive on driving process efficiency and aligning risk practices with
        overarching business objectives.
      </p>

      <p>
        I’m a Security Professional and software developer (so, yes, you can
        trust me with your assets). I currently work at{" "}
        <a
          href="https://www.walmartcanada.ca/"
          target="_blank"
          rel="noopener noreferrer"
          className="anchor-underline"
        >
          Walmart Canada
        </a>{" "}
        as an Asset Protection Associate, where my days are spent preventing,
        investigating, and monitoring security incidents, and ensuring the
        safety of our customers and employees. After work, I spend time
        researching emerging threats, matching tools, techniques, and
        procedures to those threats, and developing solutions.
      </p>

      <p>
        Previously, I worked as a backend developer at Pathfinder Idee Tech
        Solutions, where I built capstone projects for clients and delivered
        them on time. Outside of my day-to-day work, I build personal projects
        which are documented and available on my GitHub and in the blogs
        section. These experiences have shaped how I think about security and
        how I approach challenges.
      </p>

      <p>
        When I’m not working, you can find me playing table tennis, FIFA, or
        football, and spending time with my family. Welcome to my portfolio —
        feel free to hit me up if you want to talk about work, tech, or life
        experience.
      </p>
    </div>
  );
};

export default About;
