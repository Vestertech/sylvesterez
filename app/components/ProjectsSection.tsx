import Project from "./Project";
import Link from "next/link";
import RightArrow from "@/svg/RightArrow";

const ProjectsSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <Project
        description="FHIR R4 server implementation demonstrating healthcare interoperability workflows using HAPI FHIR JPA Server. The project showcases the integration of FHIR resources, RESTful APIs, and data exchange standards to enable seamless communication between healthcare systems."
        title="FHIR_Polyclinic_Int_hub"
        techs={[
          "Docker",
          "Postman",
          "Git",
          "swagger",
          "HAPI FHIR JPA Server",
          "EMR Workflows",
          "Java",
        ]}
        url="https://github.com/Vestertech/FHIR_Polyclinic_Int_hub"
        img="/projects/1.jpg"
      />
      <Project
        description="Full-cycle attack simulation lab where I built and delivered a reverse-shell payload, then engineered Sysmon with Splunk detections mapped to MITRE ATT&CK to catch execution, C2 traffic, and Defender tampering."
        title="Attack Simulation & Detection Engineering"
        techs={[
          "Kali Linux",
          "Splunk",
          "Sigma",
          "Sysmon",
          "MITRE ATT&CK",
          "Reverse Shell",
        ]}
        url="https://medium.com/@sylvesterEziagor/cybersecurity-attack-simulation-detection-engineering-1c37ffdff371?postPublishedType=repub"
        img="/projects/3.jpg"
      />
      <Project
        description="Broken authentication lab demonstrating credential stuffing and session hijacking against a deliberately vulnerable PHP login app. Executed credential-stuffing attacks with Postman and a weak-password list, exploited low-entropy session IDs, then authored a defense cheat sheet covering MFA, CAPTCHA, IP intelligence, and headless-browser blocking."
        title="Broken Authentication Lab"
        techs={[
          "PHP",
          "Postman",
          "OWASP",
          "Credential Stuffing",
          "Session Hijacking",
        ]}
        url="https://github.com/Vestertech/Pen_test"
        img="/projects/4.jpg"
      />
      <Project
        description="Built a virtualized Windows domain environment in VirtualBox—a Windows Server 2019 domain controller and a Windows 10 client—to model a corporate network. Configured AD DS (mydomain.com forest), DNS, a DHCP scope, and NAT/routing via RRAS, then automated bulk provisioning with a PowerShell script that generated an OU and 1,000 AD user accounts. Joined the Windows 10 client to the domain and verified authentication, DHCP leases, and connectivity end to end."
        title="Windows Server AD Lab"
        techs={[
          "Windows Server 2019",
          "Active Directory",
          "DNS/DHCP",
          "PowerShell",
          "RRAS/NAT",
        ]}
        url="https://medium.com/@sylvesterEziagor/windows-server-installing-and-configuring-active-directory-ad-ds-bf2a81bc7262"
        img="/projects/5.png"
      />

      <Project
        description="A tour-booking platform built on a RESTful API with an MVC architecture. Implemented stateless JWT authentication via httpOnly cookies, bcrypt-hashed passwords, role-based access control, and a crypto-based password-reset flow with hashed, time-limited tokens. Modeled data in Mongoose with geospatial 2dsphere indexing, virtual-populated reviews, and aggregation pipelines, served through a reusable generic CRUD handler factory. Rendered interactive tour maps with Mapbox GL (custom-styled markers, popups, and auto-fitted bounds), processed payments through Paystack, handled image uploads with Multer and Sharp, and delivered transactional email via SendGrid."
        title="Natours — Tour Booking Platform"
        techs={[
          "Node.js",
          "Express",
          "MongoDB",
          "JWT",
          "MapboxGL",
          "Helmet",
          "SendGrid",
          "Paystack",
        ]}
        url="https://natours-app-production-a746.up.railway.app/"
        img="/projects/5.jpg"
      />

      <div className="my-8">
        <Link href={"/archive"} className="group flex items-center gap-[2px]">
          <span className="group-hover:text-[--accent]">
            View Projects Archive{" "}
          </span>
          <span className="transition-all duration-300 group-hover:translate-x-1">
            <RightArrow />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ProjectsSection;
