"use client";
import { useEffect, useState } from "react";

const LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "blog", label: "Blog" },
];

const Nav = () => {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );

    for (const { id } of LINKS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="hidden lg:block" aria-label="In-page navigation">
      <ul className="flex flex-col gap-1">
        {LINKS.map(({ id, label }) => {
          const isActive = active === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                className="group flex items-center gap-4 py-3 text-xs font-bold uppercase tracking-[0.2em]"
              >
                <span
                  className={`h-px transition-all duration-300 group-hover:w-16 group-hover:bg-[var(--accent)] ${
                    isActive
                      ? "w-16 bg-[var(--accent)]"
                      : "w-8 bg-[var(--primary-foreground)]"
                  }`}
                />
                <span
                  className={`transition-colors duration-300 group-hover:text-[var(--accent)] ${
                    isActive
                      ? "text-[var(--accent)]"
                      : "text-[var(--primary-foreground)]"
                  }`}
                >
                  {label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
