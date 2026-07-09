import Experience from "./Experience";
import UpRightArrow from "@/svg/UpRightArrow";

const ExperienceSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <Experience
        start="2025"
        end="present"
        description="Investigate and document workplace and customer incidents from intake to closure, maintaining audit-ready case files and ensuring compliance with regulatory and internal policies. Conduct preliminary reviews, evidence collection, and reporting across safety, ethics, and policy matters, collaborating closely with Asset Protection, HR, and Operations."
        title="Walmart Canada"
        techs={[
          "Audit",
          "Incident & Event Response",
          "Compliance",
          "Safety & Security",
        ]}
        url="https://www.walmartcanada.ca/"
      />
      <Experience
        start="2022"
        end="2024"
        description="Managed Windows-based user access and provisioning through SailPoint, applying role-based permissions and continuous log monitoring to safeguard systems processing payment and metering transactions. Migrated company web applications to in-house infrastructure (cPanel, DNS, Nginx), including SSL hardening, caching, and database query optimization, cutting hosting costs by 20%. Wrote SOPs covering meter vending, tariff configuration, and payment gateway integration."
        title="Crestflow Energy"
        techs={[
          "SailPoint",
          "Windows Server",
          "PowerShell",
          "Nginx",
          "SSL/TLS",
        ]}
        url="https://crestflowenergy.com/"
      />
      <Experience
        start="2021"
        end="2024"
        description="Designed and built backend services and RESTful APIs using Node.js and Express, handling data models, authentication, and business logic for production applications. Collaborated with frontend developers to define API contracts and ensure reliable, well-documented endpoints."
        title="PathFinder Idee Tech Solutions"
        techs={["Node.js", "Express", "TypeScript", "PostgreSQL"]}
        url="https://pathfinderinfotech.com/"
      />
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-8 flex items-center gap-[2px]"
      >
        <span className="group-hover:text-[--accent] group-focus:text-[--accent]">
          View Full Resume{" "}
        </span>
        <UpRightArrow className="inline-block transition-all duration-500 group-hover:translate-x-[0.3rem] group-hover:translate-y-[-0.2rem] group-focus:translate-x-[0.3rem] group-focus:translate-y-[-0.2rem]" />
      </a>
    </div>
  );
};

export default ExperienceSection;
