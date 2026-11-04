import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { navLinks, profile } from "../data";

// Highlights the nav link whose section currently sits near the top of the viewport.
const useActiveSection = (ids) => {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids]);

  return active;
};

const Navbar = () => {
  const active = useActiveSection(navLinks.map((link) => link.id));

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-canvas/75 backdrop-blur-[20px]">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-4 px-4 md:px-8 lg:px-12">
        <div className="flex shrink-0 items-center gap-4">
          <a href="#home" className="flex items-center gap-3 rounded-std">
            <span className="flex h-8 w-8 items-center justify-center rounded-std bg-primary font-mono text-[13px] font-medium text-text-primary">
              {profile.brand}
            </span>
            <span className="t-headline-sm hidden text-text-primary sm:inline">
              {profile.name}
            </span>
          </a>
          <span className="glow-hover surface-1 hidden items-center gap-2 rounded-full px-3 py-1 lg:inline-flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-tertiary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-tertiary" />
            </span>
            <span className="t-caption text-text-secondary">Available for work</span>
          </span>
        </div>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={`t-body-sm rounded-std px-3 py-1.5 transition-colors ${
                  isActive
                    ? "bg-primary/25 text-text-primary"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-full p-2 text-text-secondary transition-colors hover:bg-slate hover:text-text-primary"
          >
            <FaGithub className="h-[18px] w-[18px]" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-full p-2 text-text-secondary transition-colors hover:bg-slate hover:text-text-primary"
          >
            <FaLinkedin className="h-[18px] w-[18px]" />
          </a>
          <a href="#contact" className="btn-ghost ml-1 px-3 py-1.5 md:hidden">
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
