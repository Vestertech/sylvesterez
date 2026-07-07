const Footer = () => {
  return (
    <footer className="mb-12 mt-4 flex flex-col gap-3 border-t border-[var(--border)] pt-8 text-sm text-[var(--primary-foreground)]">
      <p>
        Designed &amp; built by{" "}
        <a
          href="https://github.com/Vestertech"
          target="_blank"
          rel="noopener noreferrer"
          className="anchor-underline font-bold"
        >
          Sylvester Eziagor
        </a>
        .
      </p>
      <p className="text-xs">
        &copy; {new Date().getFullYear()} Sylvester Eziagor. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
