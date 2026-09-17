export const site = {
  email: "ahmed1522003aa@gmail.com",
  phone: "+20 101 601 1527",
  phoneHref: "+201016011527",
  linkedin: "https://linkedin.com/in/ahmed-elshahat-b839a8384",
  github: "https://github.com/ahmed-elsedy15",
  cvFile: "/Ahmed_Elshahat_CV.pdf",
};

export const skillIcons = {
  frontend: "Code2",
  uiux: "PenTool",
  apis: "Database",
  tools: "Wrench",
};

// Tech/tool names are kept identical in both languages (proper nouns).
export const skillItems = {
  frontend: [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "TypeScript",
    "React.js",
    "Next.js",
    "React Hooks",
    "Flexbox",
    "CSS Grid",
    "Media Queries",
    "Responsive Design",
    "Bootstrap",
    "Tailwind CSS",
  ],
  uiux: [
    "Component-Based Architecture",
    "Basic Accessibility (A11y)",
    "User-Friendly Interface Design",
    "Light/Dark Mode",
    "Multi-Language (Arabic/English) Support",
  ],
  apis: [
    "REST API Integration",
    "Authentication & Role-Based Access Control",
    "JSON",
    "Firebase Firestore",
    "Firebase Authentication",
    "Real-Time Data Handling",
  ],
  tools: ["Git", "GitHub", "VS Code", "Vite"],
};

// Dates and tech stacks stay as-is; the descriptive text lives in translations.js
export const experienceMeta = [
  {
    id: "sales-system",
    period: "Apr 2026 — Present",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST APIs"],
  },
  {
    id: "flosy-feen",
    period: "Nov 2025 — Mar 2026",
    stack: ["JavaScript", "React"],
  },
];

// Note: the CV lists "Live Demo" and "GitHub" as labels next to each
// project, but doesn't print the actual URLs — so only the general
// GitHub profile link is used here. Swap in real repo/demo URLs once
// available.
export const projectsMeta = [
  {
    id: "sales-management-system",
    name: "Sales Management System",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
    github: "https://github.com/ahmed-elsedy15",
    demo: null,
  },
  {
    id: "ecommerce-website",
    name: "E-commerce Website",
    stack: ["React (Vite)", "Hooks"],
    github: "https://github.com/ahmed-elsedy15",
    demo: null,
  },
  {
    id: "portfolio-website",
    name: "Portfolio Website",
    stack: ["React (Vite)", "CSS"],
    github: "https://github.com/ahmed-elsedy15",
    demo: null,
  },
];
