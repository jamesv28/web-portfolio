import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { LuArrowUp, LuMail } from "react-icons/lu";
import { profile } from "../data";

const Footer = () => {
  return (
    <footer className="border-t border-hairline bg-canvas">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 pt-8 font-mono text-[12px] text-text-secondary md:px-8 lg:px-12">
        <span>LATENCY: &lt;14MS // RENDERING ENGINE ACTIVE</span>
        <a href="#home" className="flex items-center gap-1 transition-colors hover:text-primary">
          Back to Top
          <LuArrowUp className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>

      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-6 px-4 py-10 md:flex-row md:px-8 lg:px-12">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <div className="flex items-center gap-3">
            <span className="flex h-6 w-6 items-center justify-center rounded-std bg-primary font-mono text-[11px] text-white">
              {profile.brand}
            </span>
            <span className="t-headline-sm text-text-primary">{profile.name}</span>
          </div>
          <p className="t-caption text-text-secondary">
            Bridging system design fidelity and architectural engineering rigor.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-hairline bg-fill p-2.5 text-text-secondary transition-colors hover:border-secondary/40 hover:text-text-primary"
          >
            <FaGithub className="h-[18px] w-[18px]" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-hairline bg-fill p-2.5 text-text-secondary transition-colors hover:border-secondary/40 hover:text-text-primary"
          >
            <FaLinkedin className="h-[18px] w-[18px]" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="rounded-full border border-hairline bg-fill p-2.5 text-text-secondary transition-colors hover:border-secondary/40 hover:text-text-primary"
          >
            <LuMail className="h-[18px] w-[18px]" />
          </a>
        </div>

        <p className="t-caption text-text-secondary">
          © {new Date().getFullYear()} {profile.name}. Engineered with precision.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
