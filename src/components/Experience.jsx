import { useState } from "react";
import { LuArrowLeft, LuArrowRight, LuArrowUpRight } from "react-icons/lu";
import { roles } from "../data";
import { TONE_PILL, TONE_TEXT } from "../tones";

const Experience = () => {
  const [index, setIndex] = useState(0);
  const count = roles.length;
  const go = (next) => setIndex((next + count) % count);

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") go(index - 1);
    if (event.key === "ArrowRight") go(index + 1);
  };

  return (
    <section id="experience" className="mx-auto max-w-[1200px] px-4 py-24 md:px-8 lg:px-12">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="flex max-w-xl flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="t-label-code uppercase tracking-wider text-secondary">
              02 // CAREER TIMELINE
            </span>
            <span className="h-px w-12 bg-outline-variant" aria-hidden="true" />
          </div>
          <h2 className="t-headline-lg text-text-primary">High-Impact Engineering Roles</h2>
          <p className="text-text-secondary">
            A track record of shipping zero-latency front-ends, scaling comprehensive design systems, and orchestrating complex cloud tooling.
          </p>
        </div>

        <div className="flex items-center gap-3" role="group" aria-label="Carousel controls">
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Previous role"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-text-primary transition-all hover:scale-105 hover:border-primary/50 hover:text-primary active:scale-95"
          >
            <LuArrowLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <div className="flex items-center gap-1.5 px-2" role="tablist" aria-label="Choose a role">
            {roles.map((role, i) => (
              <button
                key={role.company}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show ${role.company}`}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-primary" : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Next role"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-text-primary transition-all hover:scale-105 hover:border-primary/50 hover:text-primary active:scale-95"
          >
            <LuArrowRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* All slides share one grid cell, so the box is as tall as the tallest role. */}
      <div
        className="mt-10 grid focus:outline-none"
        onKeyDown={handleKeyDown}
        tabIndex={0}
        aria-roledescription="carousel"
        aria-label="Career roles"
        aria-live="polite"
      >
        {roles.map((role, i) => {
          const active = i === index;
          return (
            <article
              key={role.company}
              aria-hidden={!active}
              aria-roledescription="slide"
              className={`col-start-1 row-start-1 flex flex-col gap-6 rounded-container border border-white/[0.08] bg-slate/60 p-6 backdrop-blur-[12px] transition-all duration-500 ease-out md:flex-row md:p-8 ${
                active ? "relative translate-x-0 opacity-100" : "pointer-events-none invisible translate-x-6 opacity-0"
              }`}
            >
              {/* Identity + stack */}
              <div className="flex flex-col justify-between gap-6 md:w-5/12">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-3">
                    <span className={`t-label-caps rounded-std px-2.5 py-1 ${TONE_PILL[role.accent]}`}>
                      {role.period}
                    </span>
                    <span className="t-caption font-mono text-text-secondary">{role.location}</span>
                  </div>
                  <h3 className="t-headline-md pt-2 text-text-primary">{role.title}</h3>
                  <p className={`t-label-code ${TONE_TEXT[role.accent]}`}>{role.company}</p>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="t-caption uppercase tracking-wider text-text-secondary">Primary Stack</span>
                  <ul className="flex flex-wrap gap-2" aria-label="Primary stack">
                    {role.stack.map((tech) => (
                      <li key={tech.name} className={`chip ${TONE_TEXT[tech.tone]} hover:text-text-primary`}>
                        {tech.name}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  className={`t-label-code inline-flex w-fit items-center gap-1.5 text-caption text-secondary hover:underline`}
                  tabIndex={active ? 0 : -1}
                >
                  {role.caseStudy}
                  <LuArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>

              {/* Narrative + metrics */}
              <div className="flex flex-col justify-between gap-6 rounded-container bg-surface-highlight p-6 md:w-7/12">
                <div className="flex flex-col gap-3">
                  <h4 className="t-headline-sm text-text-primary">Core Technical Contributions</h4>
                  <p className="t-body-sm leading-relaxed text-text-secondary">{role.summary}</p>
                </div>
                <dl className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {role.metrics.map((metric) => (
                    <div key={metric.label} className="flex flex-col gap-1 rounded-std bg-white/[0.04] p-3">
                      <dt className="t-caption text-text-secondary">{metric.label}</dt>
                      <dd className={`t-headline-md font-bold ${TONE_TEXT[metric.accent]}`}>{metric.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
