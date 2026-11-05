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
  email: "james.volmert@gmail.com",
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
    period: "2021 — 2025",
    location: "Denver, CO (Remote)",
    title: "Front-End Developer",
    company: "Versatrans",
    accent: "secondary",
    stack: [
      { name: "Vue.js", tone: "secondary" },
      { name: "Pinia", tone: "neutral" },
      { name: "WebSockets", tone: "primary" },
      { name: "Vuex", tone: "tertiary" },
    ],
    caseStudy: "Inspect architectural case study",
    summary:
      "Spearheaded the entire distillery management systems for Luca Mariano Distillery, including overall management of inventory and location management. Also dealt with updating and maintaining the UI for the parent company portal with the intention of better usability for customers and increase insales",
    metrics: [
      { value: "+52%", label: "Core Web Vitals LCP & INP", accent: "tertiary" },
      {
        value: "120+",
        label: "Design System Adopted Engineers",
        accent: "secondary",
      },
      { value: "-48%", label: "Hydration Overhead Delta", accent: "primary" },
    ],
  },
  {
    period: "2018 — 2020",
    location: "Denver, CO",
    title: "Front-End Developer",
    company: "Convercent",
    accent: "primary",
    stack: [
      { name: "ASP.NET", tone: "secondary" },
      { name: "Bootstrap", tone: "primary" },
      { name: "Knockout.js", tone: "tertiary" },
      { name: "React", tone: "neutral" },
    ],
    caseStudy: "Inspect checkout flow telemetry",
    summary:
      "Implemented usability and accessibility improvements to the Convercent platform, including a complete overhaul of the checkout flow and a new design system for internal and external use. Also, worked closely with other teams for best-case standards of implementing accessibility into new features.  Finally, began transitioning from Knockout.js to React.",
    metrics: [
      { value: "$1.8B+", label: "Annual Volume Handled", accent: "tertiary" },
      { value: "99.999%", label: "UI Widget Uptime Rate", accent: "secondary" },
      {
        value: "18kb",
        label: "Standalone Bundle Footprint",
        accent: "primary",
      },
    ],
  },
  {
    period: "2016 — 2018",
    location: "Denver, CO",
    title: "Application Developer/ Mobile App Developer",
    company: "DaVita",
    accent: "tertiary",
    stack: [
      { name: "React", tone: "tertiary" },
      { name: "Swift", tone: "secondary" },
      { name: "Java", tone: "primary" },
      { name: "Redux", tone: "neutral" },
    ],
    caseStudy: "View award-winning work",
    summary:
      "Began working on the mobile developer team for increasing usability and accessibility for the telehealth app.  Also, worked with the UI design team to overhaul the apps for both native iOS and android devices. Switched to the web team to work on the internal web portal for the company, which included an overhaul of the existing code base as well as adding new features for both doctors and customers to actively engage in the apps.",
    metrics: [
      { value: "4x", label: "Awwwards Site of the Day", accent: "tertiary" },
      {
        value: "60fps",
        label: "Guaranteed Low-End Mobile",
        accent: "secondary",
      },
      {
        value: "100%",
        label: "OffscreenCanvas Multi-Threaded",
        accent: "primary",
      },
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
  { name: "Next.js", tone: "neutral" },
  { name: "Vue.js", tone: "tertiary" },
];
