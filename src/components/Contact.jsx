import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import {
  LuCheck,
  LuCheckCheck,
  LuCopy,
  LuMail,
  LuSend,
  LuDock,
} from "react-icons/lu";
import { profile } from "../data";

const scopes = [
  { value: "fulltime", label: "Staff / Lead Role" },
  { value: "advisory", label: "Design Systems" },
  { value: "audit", label: "Perf Audit & Rig" },
];

const initialForm = { name: "", email: "", scope: "fulltime", message: "" };

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | sent
  const [copied, setCopied] = useState(false);

  // Reset the success state after a few seconds (mirrors the mock flow).
  useEffect(() => {
    if (status !== "sent") return undefined;
    const timer = window.setTimeout(() => {
      setForm(initialForm);
      setStatus("idle");
    }, 4000);
    return () => window.clearTimeout(timer);
  }, [status]);

  useEffect(() => {
    if (!copied) return undefined;
    const timer = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const update = (field) => (event) =>
    setForm((prev) => ({ ...prev, [field]: event.target.value }));

  const handleSubmit = (event) => {
    event.preventDefault();
    // Front-end only: no backend is wired up yet.
    setStatus("sending");
    window.setTimeout(() => setStatus("sent"), 600);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="contact"
      className="mx-auto max-w-[1200px] px-4 py-24 md:px-8 lg:px-12"
    >
      <div className="surface-2 relative overflow-hidden rounded-display p-6 md:p-10">
        <div
          className="canvas-glow -left-16 -top-12 h-96 w-96 bg-primary/15 blur-[100px]"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left: context + direct channels */}
          <div className="flex flex-col gap-8 lg:col-span-5">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="t-label-code uppercase tracking-wider text-secondary">
                  04 // INITIATE DIALOGUE
                </span>
                <span
                  className="h-px w-10 bg-outline-variant"
                  aria-hidden="true"
                />
              </div>
              <h2 className="t-headline-lg text-text-primary">
                Let&apos;s construct something exceptional.
              </h2>
              <p className="text-text-secondary">
                Whether you need a principal architect for a next-gen greenfield
                client application, or a design system overhaul, my inbox is
                direct.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="surface-1 flex items-center justify-between gap-3 rounded-std px-4 py-3">
                <div className="flex min-w-0 items-center gap-3">
                  <LuMail
                    className="h-5 w-5 shrink-0 text-secondary"
                    aria-hidden="true"
                  />
                  <span className="truncate font-mono text-[14px] text-text-primary select-all">
                    {profile.email}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="flex shrink-0 items-center gap-1.5 rounded-std bg-fill-strong px-2.5 py-1 font-mono text-[12px] text-text-secondary transition-colors hover:bg-fill-hover hover:text-text-primary"
                >
                  {copied ? (
                    <LuCheck className="h-3.5 w-3.5" aria-hidden="true" />
                  ) : (
                    <LuCopy className="h-3.5 w-3.5" aria-hidden="true" />
                  )}
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="surface-1 glow-hover flex items-center justify-center gap-2 rounded-std px-3 py-2.5 font-mono text-[12px] text-text-primary"
                >
                  <FaGithub className="h-4 w-4" aria-hidden="true" />
                  GitHub
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="surface-1 glow-hover flex items-center justify-center gap-2 rounded-std px-3 py-2.5 font-mono text-[12px] text-text-primary"
                >
                  <FaLinkedin className="h-4 w-4" aria-hidden="true" />
                  LinkedIn
                </a>
                <a
                  href={profile.resumeUrl}
                  download
                  className="surface-1 glow-hover flex items-center justify-center gap-2 rounded-std px-3 py-2.5 font-mono text-[12px] text-text-primary"
                >
                  <LuDock className="h-4 w-4" aria-hidden="true" />
                  Resume
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 font-mono text-[12px] text-tertiary">
              <span
                className="h-2 w-2 rounded-full bg-tertiary"
                aria-hidden="true"
              />
              Typical initial response time: {profile.responseTime}
            </div>
          </div>

          {/* Right: inquiry form */}
          <div className="relative overflow-hidden rounded-container border border-hairline bg-slate/60 p-6 md:p-8 lg:col-span-7">
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="contactName" className="label-caps">
                    Your Name
                  </label>
                  <input
                    id="contactName"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Eleanor Rigby"
                    autoComplete="name"
                    className="field"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="contactEmail" className="label-caps">
                    Email Address
                  </label>
                  <input
                    id="contactEmail"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={update("email")}
                    placeholder="eleanor@company.com"
                    autoComplete="email"
                    className="field"
                  />
                </div>
              </div>

              <fieldset className="flex flex-col gap-2">
                <legend className="label-caps mb-2">Engagement Scope</legend>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                  {scopes.map((scope) => (
                    <label
                      key={scope.value}
                      className="glow-hover flex cursor-pointer items-center gap-3 rounded-std border border-hairline bg-fill px-3 py-2.5 text-[14px] text-text-primary hover:bg-fill-strong"
                    >
                      <input
                        type="radio"
                        name="projectType"
                        value={scope.value}
                        checked={form.scope === scope.value}
                        onChange={update("scope")}
                        className="radio-control"
                      />
                      {scope.label}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="flex flex-col gap-2">
                <label htmlFor="contactMsg" className="label-caps">
                  Project Particulars
                </label>
                <textarea
                  id="contactMsg"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Tell me about your product requirements, stack challenges, or timeline..."
                  className="field resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status !== "idle"}
                className="btn-primary w-full py-3.5 text-[15px]"
              >
                <LuSend className="h-[18px] w-[18px]" aria-hidden="true" />
                {status === "sending" ? "Transmitting…" : "Transmit Inquiry"}
              </button>

              <div
                role="status"
                aria-live="polite"
                className={`items-center gap-2 rounded-std border border-tertiary/30 bg-tertiary/10 p-3 font-mono text-[12px] text-tertiary ${
                  status === "sent" ? "flex" : "hidden"
                }`}
              >
                <LuCheckCheck className="h-4 w-4" aria-hidden="true" />
                Payload sent! I will respond directly within 4 hours.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
