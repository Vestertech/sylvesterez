const About = () => {
  return (
    <div className="about-section flex flex-col gap-6 transition-all duration-300 hover:text-[var(--secondary-foreground)]">
      <p>
        Hello <span className="animate-wave text-2xl">👋🏽</span> I’m Sylvester —
        an Information Security Analyst who likes understanding how things break
        before deciding how to protect them. My work centers on access control,
        network security, and compliance: keeping systems audit-ready and making
        sure security practices actually serve the business instead of slowing
        it down.
      </p>

      <p>
        These days I’m at{" "}
        <a
          href="https://www.walmartcanada.ca/"
          target="_blank"
          rel="noopener noreferrer"
          className="anchor-underline"
        >
          Walmart Canada
        </a>{" "}
        as an Asset Protection Associate, investigating and documenting security
        incidents from intake to closure. Working physical security taught me
        something the certifications didn’t: most incidents come down to people
        and process, not just technology. After hours, I run security labs —
        simulating attacks, engineering detections, and writing up what I learn.
      </p>

      <p>
        Before that, I split my time between two worlds: support engineering at
        Crestflow Energy — monitoring systems in Splunk, managing user access
        through SailPoint, and keeping infrastructure running — and backend
        development at
        Pathfinder Idee Tech Solutions, building APIs and shipping client
        projects in Node.js. Doing both at once shaped how I work — I read code,
        write clear documentation, and can tell a real vulnerability from a
        theoretical one. My projects and write-ups live on my GitHub and in the
        blog section below.
      </p>

      <p>
        When I’m not working, you can find me playing table tennis, FIFA, or
        football, and spending time with my family. Feel free to reach out if
        you want to talk about work, tech, or life.
      </p>
    </div>
  );
};

export default About;
