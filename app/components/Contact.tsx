import Envelope from "@/svg/Envelope";
import Github from "@/svg/Github";
import LinkedIn from "@/svg/LinkedIn";
import X from "@/svg/X";

const Contact = () => {
  return (
    <ul className="flex items-center gap-6" aria-label="Social media">
      <ContactLink
        title="GitHub"
        url="https://github.com/Vestertech"
        icon={<Github />}
      />
      <ContactLink
        title="Email"
        url="mailto:ifeanyi.eziagor@gmail.com"
        icon={<Envelope />}
      />
      <ContactLink
        title="LinkedIn"
        url="https://www.linkedin.com/in/eziagor-sylvester/"
        icon={<LinkedIn />}
      />
      <ContactLink
        title="X (Twitter)"
        url="https://x.com/YOUwooded"
        icon={<X />}
      />
    </ul>
  );
};

export default Contact;

const ContactLink = ({
  title,
  url,
  icon,
}: {
  title: string;
  url: string;
  icon: React.ReactNode;
}) => {
  return (
    <li>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        title={title}
        className="block text-2xl text-[var(--primary-foreground)] transition-all duration-300 hover:-translate-y-1 hover:text-[var(--accent)] focus:text-[var(--accent)]"
      >
        <span className="sr-only">{title}</span>
        {icon}
      </a>
    </li>
  );
};
