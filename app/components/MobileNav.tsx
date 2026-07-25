"use client";
import { useState } from "react";

const LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "blog", label: "Blog" },
];

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-[var(--border)] bg-[rgba(255,255,255,0.85)] backdrop-blur lg:hidden">
      <div className="flex h-14 items-center justify-between px-4 md:px-12">
        <a
          href="#about"
          className="text-sm font-bold uppercase tracking-[0.2em]"
          onClick={() => setOpen(false)}
        >
          Sylvester Eziagor
        </a>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((prev) => !prev)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px]"
        >
          <span
            className={`h-[2px] w-5 bg-[var(--secondary-foreground)] transition-transform duration-300 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] w-5 bg-[var(--secondary-foreground)] transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[2px] w-5 bg-[var(--secondary-foreground)] transition-transform duration-300 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>
      <nav
        id="mobile-menu"
        aria-label="Site navigation"
        className={`overflow-hidden transition-[max-height] duration-300 ${
          open ? "max-h-64" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-4 pb-2 md:px-12">
          {LINKS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="block py-3 text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary-foreground)] transition-colors duration-300 hover:text-[var(--accent)]"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MobileNav;
