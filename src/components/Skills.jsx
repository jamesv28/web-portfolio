import { LuBlocks, LuGauge, LuNetwork, LuSparkles } from "react-icons/lu";
import { skills } from "../data";
import { TONE_BG, TONE_TEXT } from "../tones";

const icons = {
  architecture: LuBlocks,
  motion: LuSparkles,
  perf: LuGauge,
  interop: LuNetwork,
};

const Skills = () => {
  return (
    <section id="skills" className="mx-auto max-w-[1200px] px-4 py-24 md:px-8 lg:px-12">
      <div className="flex max-w-xl flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="t-label-code uppercase tracking-wider text-primary">
            03 // CAPABILITIES &amp; RIGOR
          </span>
          <span className="h-px w-12 bg-outline-variant" aria-hidden="true" />
        </div>
        <h2 className="t-headline-lg text-text-primary">Technical Skill Spectrum</h2>
        <p className="text-text-secondary">
          Engineered depth across low-latency clients, design token engines, and micro-frontend state topologies.
        </p>
      </div>

      <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill) => {
          const Icon = icons[skill.icon];
          return (
            <li
              key={skill.title}
              className="glow-hover group surface-1 flex flex-col justify-between gap-6 rounded-container p-6"
            >
              <div className="flex flex-col gap-4">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-std border border-hairline bg-surface-highlight transition-transform duration-300 group-hover:scale-110 ${TONE_TEXT[skill.accent]}`}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="t-headline-sm text-text-primary">{skill.title}</h3>
                <p className="t-body-sm text-text-secondary">{skill.text}</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="t-label-code flex items-center justify-between text-caption text-text-secondary">
                  <span>Mastery</span>
                  <span className={TONE_TEXT[skill.accent]}>{skill.mastery}%</span>
                </div>
                <div
                  className="h-1.5 w-full overflow-hidden rounded-full bg-fill-strong"
                  role="meter"
                  aria-label={`${skill.title} mastery`}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={skill.mastery}
                >
                  <div
                    className={`h-full rounded-full ${TONE_BG[skill.accent]}`}
                    style={{ width: `${skill.mastery}%` }}
                  />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Skills;
