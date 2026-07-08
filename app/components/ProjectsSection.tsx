import Project from "./Project";
import Link from "next/link";
import RightArrow from "@/svg/RightArrow";

const ProjectsSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <Project
        description="FHIR R4 server implementation demonstrating healthcare interoperability workflows using HAPI FHIR JPA Server, with RESTful APIs and standards-based data exchange between healthcare systems."
        title="FHIR Polyclinic Interoperability Hub"
        techs={[
          "Docker",
          "Postman",
          "Swagger",
          "HAPI FHIR JPA Server",
          "EMR Workflows",
          "Java",
        ]}
        url="https://github.com/Vestertech/FHIR_Polyclinic_Int_hub"
        img="/projects/1.jpg"
      />
      <Project
        description="End-to-end purple-team lab: built and delivered a reverse-shell payload from Kali Linux, then switched sides to engineer the detections that catch it. Instrumented the target with Sysmon, shipped logs to Splunk, and wrote detection rules mapped to MITRE ATT&CK covering payload execution, C2 traffic, and Defender tampering — with the full attack-to-detection chain documented in the write-up."
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
        description="Modeled a corporate network in VirtualBox to practice enterprise identity administration: a Windows Server 2019 domain controller running AD DS, DNS, DHCP, and NAT routing via RRAS, plus a domain-joined Windows 10 client. Wrote a PowerShell script to bulk-provision an OU with 1,000 user accounts, then verified authentication, DHCP leases, and connectivity end to end."
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
        description="A full tour-booking platform built on Node.js, Express, and MongoDB, where security carries the design: stateless JWT auth in httpOnly cookies, bcrypt-hashed passwords, role-based access control, and a hashed, time-limited password-reset flow. Interactive Mapbox tour maps, Paystack payments, and transactional email round out the product."
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
      <Project
        description="A workout tracker built in vanilla JavaScript. Click anywhere on the map to log a running or cycling session; it drops a Leaflet marker and adds a card to the sidebar. Uses OOP with a Workout base class and Running/Cycling subclasses, the browser Geolocation API to center the map on your location, input validation, and localStorage that rebuilds workouts as real class instances on reload."
        title="Mapty — Workout Tracker"
        techs={["JavaScript", "OOP", "Leaflet", "Geolocation API"]}
        url="https://mapty-r84afpx18-eziagors-projects.vercel.app/"
        img="/projects/6.jpg"
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
