import {
  LuArrowDown,
  LuChevronRight,
  LuDownload,
  LuMessageSquare,
} from "react-icons/lu";
import { heroTech, profile } from "../data";
import { TONE_TEXT } from "../tones";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-8 px-4 pt-28 pb-24 md:px-8 lg:grid-cols-12 lg:px-12 lg:pt-32"
    >
      {/* Left: positioning + CTAs */}
      <div className="relative flex flex-col gap-6 lg:col-span-12 text-center">
        <div
          className="canvas-glow -left-16 -top-12 h-96 w-96 bg-primary/15 blur-[100px]"
          aria-hidden="true"
        />

        <div className="glow-hover surface-1 inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-tertiary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-tertiary" />
          </span>
          <span className="t-label-caps text-secondary">
            Available for Q4 Engagements
          </span>
        </div>

        <h1 className="text-[40px] leading-[48px] font-extrabold tracking-[-0.02em] text-text-primary lg:text-[64px] lg:leading-[72px] lg:tracking-[-0.03em] font-display">
          Crafting{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            pixel-perfect
          </span>
          , interactive web experiences.
        </h1>

        <p className="t-body-lg max-w-xl text-text-secondary text-center flex mx-auto">
          Front-End Engineer specializing in React 19, TypeScript, Tailwind CSS,
          bespoke motion choreography, and high-scale design systems.
        </p>

        <ul
          className="flex flex-wrap mx-auto items-center gap-2"
          aria-label="Core technologies"
        >
          {heroTech.map((tech) => (
            <li
              key={tech.name}
              className={`chip ${TONE_TEXT[tech.tone]} hover:text-text-primary`}
            >
              <LuChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              {tech.name}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center gap-3 pt-1 mx-auto">
          <a href="#experience" className="btn-primary">
            Explore Experience
            <LuArrowDown className="h-[18px] w-[18px]" aria-hidden="true" />
          </a>
          <a href="#contact" className="btn-ghost">
            <LuMessageSquare className="h-[18px] w-[18px]" aria-hidden="true" />
            Get in Touch
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-std px-3 py-2.5 font-mono text-[13px] text-text-secondary transition-colors hover:text-text-primary"
          >
            <LuDownload className="h-[18px] w-[18px]" aria-hidden="true" />
            resume.pdf
          </a>
        </div>
      </div>

      {/* Right: live "IDE" card with KPI HUD */}
      {/* <div className="relative lg:col-span-5">
        <div
          className="surface-2 relative flex flex-col gap-4 overflow-hidden rounded-display p-5"
          aria-label="Code and performance summary"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="h-3 w-3 rounded-full bg-dot" />
              <span className="h-3 w-3 rounded-full bg-dot" />
              <span className="h-3 w-3 rounded-full bg-tertiary/80" />
            </div>
            <div className="flex items-center gap-1.5 rounded-std bg-slate px-3 py-1 font-mono text-[12px] text-secondary">
              <LuTerminal className="h-3.5 w-3.5" aria-hidden="true" />
              design-token.runtime.tsx
            </div>
            <span className="t-caption flex items-center gap-1.5 text-tertiary">
              <span className="h-1.5 w-1.5 rounded-full bg-tertiary" />
              60 FPS
            </span>
          </div>

          <pre className="overflow-x-auto rounded-container bg-canvas/80 p-4 font-mono text-[12px] leading-relaxed text-text-secondary select-none">
            {codeLines.map((line, i) => (
              <div key={i} className="flex gap-4">
                <span className="w-4 shrink-0 text-right text-text-tertiary/60">
                  {i + 1}
                </span>
                <code className="min-w-0 font-mono whitespace-pre-wrap break-words">
                  {line}
                </code>
              </div>
            ))}
          </pre>

          <div className="grid grid-cols-3 gap-2">
            {kpis.map((kpi) => (
              <div
                key={kpi.label}
                className="surface-1 flex flex-col gap-1 rounded-std p-3"
              >
                <span className="t-caption text-text-secondary">
                  {kpi.label}
                </span>
                <span className={`t-headline-sm ${TONE_TEXT[kpi.tone]}`}>
                  {kpi.value}
                </span>
                <span className="text-[10px] leading-tight text-text-tertiary">
                  {kpi.note}
                </span>
              </div>
            ))}
          </div>

          <div className="surface-1 flex items-center justify-between rounded-std px-3 py-2.5">
            <div className="flex items-center gap-2">
              <LuSlidersHorizontal
                className="h-5 w-5 text-secondary"
                aria-hidden="true"
              />
              <span className="font-mono text-[13px] text-text-primary">
                Interactive Canvas Rig
              </span>
            </div>
            <button
              type="button"
              onClick={handleDispatch}
              className="rounded-std border border-secondary/30 bg-secondary/10 px-3 py-1 font-mono text-[12px] text-secondary transition-colors hover:bg-secondary/20"
            >
              {dispatched ? "Dispatched ⚡" : "Dispatch Action"}
            </button>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
