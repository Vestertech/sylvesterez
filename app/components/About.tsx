const About = () => {
  return (
    <div className="about-section flex flex-col gap-6 transition-all duration-300 hover:text-[var(--secondary-foreground)]">
      <p>
        Hello, I&apos;m Sylvester{" "}
        <span className="animate-wave text-2xl">👋🏽</span> an Information Security Analyst with a background in software
        engineering, giving me a unique perspective on security. Before
        focusing on cybersecurity, I built enterprise applications, implemented
        authentication and access controls, and worked closely with
        infrastructure supporting business-critical systems. That experience
        taught me an important lesson: even well-designed systems can become
        vulnerable when people, processes, and technology fall out of
        alignment.
      </p>
      <p>
        Today, I help organizations reduce risk through access management,
        security monitoring, risk assessment, and compliance. My work combines
        technical analysis with business context, whether I&apos;m
        investigating incidents, identifying control gaps, reviewing access
        permissions, or helping ensure systems remain audit-ready. I believe
        security should enable organizations to operate with confidence&mdash;not
        create unnecessary friction.
      </p>
      <p>
        I&apos;m passionate about continuous learning and enjoy applying
        security concepts in hands-on environments. I build detection
        engineering labs with Splunk, simulate attack scenarios mapped to the
        MITRE ATT&amp;CK framework, perform enterprise risk assessments using
        industry standards, and document my findings through technical
        write-ups and open-source projects.
      </p>
      <p>
        My background in software engineering allows me to understand how
        applications are built, while my experience in cybersecurity helps me
        evaluate how they can be protected. That combination enables me to
        bridge the gap between development, operations, and security,
        translating technical findings into practical decisions that support
        the business.
      </p>
    </div>
  );
};

export default About;
