import resumeUrl from "./assets/JamesVolmert_Resume.pdf?url";

/*
 * Site content. Experience, metrics, and skill percentages are the
 * screenshot's placeholder copy — replace with real details before deploying.
 */

export const profile = {
  name: "James Volmert",
  brand: "JV",
  headline: "Front-End Engineer",
  // TODO: replace with your real contact email.
  email: "hello@example.com",
  github: "https://github.com/jamesv28",
  linkedin: "https://www.linkedin.com/in/james-volmert-15301954",
  resumeUrl,
  responseTime: "< 4 hours",
};

export const navLinks = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export const roles = [
  {
    period: "2023 — Present",
    location: "San Francisco, CA (Remote)",
    title: "Staff UI & Systems Engineer",
    company: "ScaleStack Cloud Engine",
    accent: "secondary",
    stack: [
      { name: "React 19", tone: "secondary" },
      { name: "Turborepo", tone: "neutral" },
      { name: "WebSockets", tone: "primary" },
      { name: "Rust/Wasm", tone: "tertiary" },
    ],
    caseStudy: "Inspect architectural case study",
    summary:
      "Spearheaded the unified multi-tenant dashboard architecture powering over 4.8M monthly developer sessions. Engineered zero-runtime CSS tokens with automated sync from design artifacts, drastically eliminating UI drift across 14 discrete product teams.",
    metrics: [
      { value: "+52%", label: "Core Web Vitals LCP & INP", accent: "tertiary" },
      { value: "120+", label: "Design System Adopted Engineers", accent: "secondary" },
      { value: "-48%", label: "Hydration Overhead Delta", accent: "primary" },
    ],
  },
  {
    period: "2021 — 2023",
    location: "New York, NY",
    title: "Lead Front-End Architect",
    company: "PulsePay Financial Infrastructure",
    accent: "primary",
    stack: [
      { name: "TypeScript", tone: "secondary" },
      { name: "Tailwind CSS", tone: "primary" },
      { name: "GraphQL", tone: "tertiary" },
      { name: "Cypress E2E", tone: "neutral" },
    ],
    caseStudy: "Inspect checkout flow telemetry",
    summary:
      "Architected an embedded payment element widget rendered across thousands of external merchant checkouts. Implemented hyper-strict sandbox encapsulation with zero-data-leak isolation and accessible WCAG 2.1 AAA keyboard primitives.",
    metrics: [
      { value: "$1.8B+", label: "Annual Volume Handled", accent: "tertiary" },
      { value: "99.999%", label: "UI Widget Uptime Rate", accent: "secondary" },
      { value: "18kb", label: "Standalone Bundle Footprint", accent: "primary" },
    ],
  },
  {
    period: "2019 — 2021",
    location: "Remote / London",
    title: "Lead Design Technologist",
    company: "Hyperion Creative Lab",
    accent: "tertiary",
    stack: [
      { name: "Three.js", tone: "tertiary" },
      { name: "GLSL Shaders", tone: "secondary" },
      { name: "GSAP Motion", tone: "primary" },
      { name: "Web Audio", tone: "neutral" },
    ],
    caseStudy: "View award-winning work",
    summary:
      "Engineered bespoke 3D WebGL experiences and real-time GPU particle renderers for global enterprise brands. Partnered directly with art directors to translate experimental spatial prototypes into high-performance web products.",
    metrics: [
      { value: "4x", label: "Awwwards Site of the Day", accent: "tertiary" },
      { value: "60fps", label: "Guaranteed Low-End Mobile", accent: "secondary" },
      { value: "100%", label: "OffscreenCanvas Multi-Threaded", accent: "primary" },
    ],
  },
];

export const skills = [
  {
    icon: "architecture",
    title: "Frontend Architecture",
    text: "SSR/SSG orchestration, React Server Components (RSC), micro-frontends, state containment, AST manipulation.",
    mastery: 98,
    accent: "primary",
  },
  {
    icon: "motion",
    title: "UI/UX & Motion Design",
    text: "Framer Motion, FLIP mechanics, sub-frame physics springs, WebGL canvas shaders, SVG path choreographies.",
    mastery: 95,
    accent: "secondary",
  },
  {
    icon: "perf",
    title: "Performance & Tooling",
    text: "Vite plugins, esbuild, bundle tree-shaking, memory profiler sweeps, INP/FID optimization, edge runtime workers.",
    mastery: 92,
    accent: "tertiary",
  },
  {
    icon: "interop",
    title: "Full-Stack Interop",
    text: "Node.js, tRPC, GraphQL code generation, PostgreSQL, Prisma, Redis cache synchronization, Docker containers.",
    mastery: 88,
    accent: "secondary",
  },
];

export const heroTech = [
  { name: "React 19", tone: "secondary" },
  { name: "TypeScript", tone: "primary" },
  { name: "Tailwind CSS", tone: "secondary" },
  { name: "Next.js App Router", tone: "neutral" },
  { name: "WebGL / Three.js", tone: "tertiary" },
];
