const About = () => {
  return (
    <div className="about-section flex flex-col gap-6 transition-all duration-300 hover:text-[var(--secondary-foreground)]">
      <p>
        Hello <span className="animate-wave text-2xl">👋🏽</span> I'm Sylvester,
        an Information Security Analyst who likes understanding how things break
        before deciding how to protect them. My focus is access control, network
        security, and compliance: keeping systems audit-ready and making sure
        security actually serves the business instead of slowing it down.
      </p>
      <p>
        I build on that focus through hands-on labs: simulating attacks and
        engineering detections in Splunk mapped to the MITRE ATT&amp;CK
        framework, running Windows Server Active Directory labs, and testing
        authentication systems for weaknesses. I write up what I learn on Medium
        and keep the code on GitHub. I also hold CompTIA Security+, SC-900,
        AZ-900, Google Cybersecurity,and Splunk Core Certified
        Power User certifications.
      </p>
      <p>
        Right now I'm at{" "}
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
        something the labs don't: most incidents come down to people and
        process, not just technology.
      </p>
      <p>
        Before that, I split my time between two worlds: support engineering at
        Crestflow Energy, where I managed Windows-based user access through
        SailPoint, kept infrastructure running, and migrated and hardened the
        company's web applications, and backend development at PathFinder Idee
        Tech Solutions, building APIs and shipping client projects in Node.js.
        Doing both shaped how I work: I read code, write clear documentation,
        and can tell a real vulnerability from a theoretical one. My projects
        and write-ups live on my GitHub and in the blog section below.
      </p>
      <p>
        When I'm not working, you can find me playing table tennis or video games. Feel free to reach out if
        you want to talk about work, tech, or life.
      </p>
    </div>
  );
};

export default About;
