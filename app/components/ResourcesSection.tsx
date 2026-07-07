import Resources from "./Resources";

const ResourcesSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <Resources
        url="https://medium.com/@sylvesterEziagor/cybersecurity-attack-simulation-detection-engineering-1c37ffdff371"
        title="Attack Simulation & Detection Engineering."
        img="/resources/2.jpg"
        year="2026"
      />
      <Resources
        url="https://medium.com/@sylvesterEziagor/windows-server-installing-and-configuring-active-directory-ad-ds-bf2a81bc7262"
        title="Windows Server: Installing and Configuring Active Directory (AD-DS)"
        img="/resources/0.png"
        year="2025"
      />
      <Resources
        url="https://medium.com/@sylvesterEziagor/broken-authentication-9513779baa01"
        title="Broken Authentication"
        img="/resources/1.jpg"
        year="2025"
      />
    </div>
  );
};

export default ResourcesSection;
