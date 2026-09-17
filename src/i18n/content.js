// All facts (dates, org names, tech stack, links) come straight from the CV.
// Only the surrounding language changes between `en` and `ar`.

const shared = {
  email: "ahmed1522003aa@gmail.com",
  phone: "+20 101 601 1527",
  linkedin: "https://linkedin.com/in/ahmed-elshahat-b839a8384",
  github: "https://github.com/ahmed-elsedy15",
};

export const content = {
  en: {
    nav: [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "skills", label: "Skills" },
      { id: "experience", label: "Experience" },
      { id: "projects", label: "Projects" },
      { id: "education", label: "Education" },
      { id: "contact", label: "Contact" },
    ],

    profile: {
      name: "Ahmed Elshahat Attia",
      shortName: "Ahmed Elshahat",
      title: "Frontend Developer",
      subtitle: "React.js Developer",
      location: "Cairo, Egypt",
      timezone: "UTC+2",
      availability: "Open to relocation and remote roles",
      intro:
        "Frontend developer who builds with React.js, Next.js, and TypeScript — with hands-on freelance experience shipping a 10+ module sales management system and an expense tracking app.",
      summary:
        "I'm a frontend developer focused on responsive, component-based UI development. My freelance work so far includes a full-featured sales management system with 10+ business modules and a personal expense tracking app, both built in close collaboration with remote teams. I work comfortably with REST APIs, authentication and role-based access control, and Firebase real-time data — always aiming for interfaces that are clean, accessible, and easy to maintain.",
      ...shared,
    },

    ui: {
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      downloadCV: "Download CV",
      sayHello: "Say hello",
      github: "GitHub",
      liveDemo: "Live Demo",
      liveDemoSoon: "Live demo link coming soon",
      aboutKicker: "About",
      aboutTitle: "A bit about how I work",
      skillsKicker: "Skills",
      skillsTitle: "What I build with",
      experienceKicker: "Experience",
      experienceTitle: "Where I've worked",
      projectsKicker: "Projects",
      projectsTitle: "Selected work",
      educationKicker: "Education",
      educationTitle: "Academic background",
      languagesTitle: "Languages",
      contactKicker: "Contact",
      contactHeading: "Looking for my next opportunity to build real products.",
      contactSub: (p) =>
        `I'm based in ${p.location} (${p.timezone}) and ${p.availability.toLowerCase()}. If my work looks like a fit for your team, I'd like to hear from you.`,
      footer: (name, year) =>
        `© ${year} ${name}. Built with React, Vite, and Framer Motion.`,
    },

    highlights: [
      {
        title: "Component-driven UI",
        description:
          "Reusable React components and responsive layouts built to behave consistently across desktop and mobile.",
      },
      {
        title: "APIs & access control",
        description:
          "REST API integration, authentication, and role-based access control, including an admin panel for managing permissions.",
      },
      {
        title: "Bilingual, real-time interfaces",
        description:
          "Arabic/English support, light/dark mode, and Firebase real-time data handling.",
      },
    ],

    skillGroups: [
      {
        category: "Frontend",
        icon: "Code2",
        items: [
          "HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React.js",
          "Next.js", "React Hooks", "Flexbox", "CSS Grid", "Media Queries",
          "Responsive Design", "Bootstrap", "Tailwind CSS",
        ],
      },
      {
        category: "UI / UX",
        icon: "PenTool",
        items: [
          "Component-Based Architecture", "Basic Accessibility (A11y)",
          "User-Friendly Interface Design", "Light/Dark Mode",
          "Multi-Language (Arabic/English) Support",
        ],
      },
      {
        category: "APIs & Data",
        icon: "Database",
        items: [
          "REST API Integration", "Authentication & Role-Based Access Control",
          "JSON", "Firebase Firestore", "Firebase Authentication",
          "Real-Time Data Handling",
        ],
      },
      {
        category: "Tools & Workflow",
        icon: "Wrench",
        items: ["Git", "GitHub", "VS Code", "Vite"],
      },
    ],

    experience: [
      {
        id: "sales-system",
        period: "Apr 2026 — Present",
        type: "Freelance",
        role: "React.js Developer",
        org: "Sales Management System",
        teamNote: "3-person team, alongside a separate back-end developer",
        bullets: [
          "Independently developed the entire front end of a full-featured sales management system with 10+ modules.",
          "Built responsive dashboards covering KPIs, employee performance, daily reports, expenses, purchase invoices, customers, products, sales, inventory alerts, and returns.",
          "Implemented authentication, protected routes, role-based access control, and an admin panel for user and permission management.",
          "Added Arabic/English and light/dark mode support, and integrated the front end with RESTful backend APIs.",
        ],
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST APIs"],
      },
      {
        id: "flosy-feen",
        period: "Nov 2025 — Mar 2026",
        type: "Freelance, remote team",
        role: "Front-End Developer",
        org: "Flosy Feen — Expense Management Web App",
        teamNote: "4-person freelance team",
        bullets: [
          "Built four core screens — Home, Expenses, Budget, and Settings — for a real-world personal expense tracking application.",
          "Developed reusable React components and responsive layouts for consistent UI behavior across desktop and mobile, collaborating via Git/GitHub.",
        ],
        stack: ["JavaScript", "React"],
      },
    ],

    projects: [
      {
        id: "sales-management-system",
        name: "Sales Management System",
        tag: "Freelance · Featured",
        description:
          "The full front end of a business sales platform: dashboards, inventory, invoicing, customer and product management, and staff permissions across 10+ modules.",
        role: "Sole front-end developer, working with a separate back-end developer.",
        stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
        github: shared.github,
        demo: null,
      },
      {
        id: "ecommerce-website",
        name: "E-commerce Website",
        tag: "Project",
        description:
          "A fully responsive e-commerce app integrating the Dummy JSON API for product listing and category filtering, with cart management and dynamic UI state across the browsing-to-checkout flow.",
        role: "Built solo.",
        stack: ["React (Vite)", "Hooks"],
        github: shared.github,
        demo: null,
      },
      {
        id: "portfolio-website",
        name: "Portfolio Website",
        tag: "Project",
        description:
          "An earlier personal portfolio built with React and CSS, focused on smooth navigation and interactive UI elements.",
        role: "Built solo.",
        stack: ["React (Vite)", "CSS"],
        github: shared.github,
        demo: null,
      },
    ],

    education: {
      degree: "Bachelor of Information Technology",
      faculty: "Faculty of Computers and Information",
      university: "Mansoura University, Egypt",
      year: "Graduated 2025",
      grade: "Cumulative Grade: Good",
      project: "Graduation Project: Medication Management System — Rated Excellent",
    },

    languages: [
      { name: "Arabic", level: "Native" },
      { name: "English", level: "Good (Professional Working Proficiency)" },
    ],
  },

  ar: {
    nav: [
      { id: "home", label: "الرئيسية" },
      { id: "about", label: "نبذة عني" },
      { id: "skills", label: "المهارات" },
      { id: "experience", label: "الخبرة" },
      { id: "projects", label: "المشاريع" },
      { id: "education", label: "التعليم" },
      { id: "contact", label: "تواصل" },
    ],

    profile: {
      name: "أحمد الشحات عطية",
      shortName: "أحمد الشحات",
      title: "مطوّر واجهات أمامية",
      subtitle: "مطوّر React.js",
      location: "القاهرة، مصر",
      timezone: "UTC+2",
      availability: "متاح للانتقال والعمل عن بُعد",
      intro:
        "مطوّر واجهات أمامية أبني بـ React.js وNext.js وTypeScript، ولدي خبرة عملية حرة في تنفيذ نظام إدارة مبيعات بأكثر من 10 وحدات، وتطبيق لتتبع المصروفات.",
      summary:
        "أنا مطوّر واجهات أمامية أركّز على بناء واجهات مستخدم متجاوبة ومبنية على مكوّنات قابلة لإعادة الاستخدام. عملي الحر حتى الآن شمل نظام إدارة مبيعات متكامل بأكثر من 10 وحدات عمل، وتطبيق شخصي لتتبع المصروفات، وكلاهما تم تنفيذه بالتعاون مع فرق عمل عن بُعد. أتعامل بارتياح مع REST APIs، والمصادقة والتحكم في الصلاحيات، وبيانات Firebase اللحظية — وهدفي دائمًا واجهات نظيفة وسهلة الوصول وسهلة الصيانة.",
      ...shared,
    },

    ui: {
      viewProjects: "استعرض المشاريع",
      contactMe: "تواصل معي",
      downloadCV: "تحميل السيرة الذاتية",
      sayHello: "راسلني",
      github: "GitHub",
      liveDemo: "معاينة حية",
      liveDemoSoon: "رابط المعاينة قريبًا",
      aboutKicker: "نبذة عني",
      aboutTitle: "نبذة عن طريقة عملي",
      skillsKicker: "المهارات",
      skillsTitle: "الأدوات اللي بشتغل بيها",
      experienceKicker: "الخبرة",
      experienceTitle: "أماكن اشتغلت فيها",
      projectsKicker: "المشاريع",
      projectsTitle: "أعمال مختارة",
      educationKicker: "التعليم",
      educationTitle: "المؤهل الدراسي",
      languagesTitle: "اللغات",
      contactKicker: "تواصل",
      contactHeading: "بدوّر على فرصتي الجاية عشان أبني منتجات حقيقية.",
      contactSub: (p) =>
        `أنا مقيم في ${p.location} (${p.timezone}) و${p.availability}. لو شغلي مناسب لفريقكم، هيسعدني أسمع منكم.`,
      footer: (name, year) =>
        `© ${year} ${name}. تم البناء باستخدام React وVite وFramer Motion.`,
    },

    highlights: [
      {
        title: "واجهات مبنية على مكوّنات",
        description:
          "مكوّنات React قابلة لإعادة الاستخدام وتخطيطات متجاوبة تعمل بثبات على أجهزة سطح المكتب والموبايل.",
      },
      {
        title: "التكامل مع الـ APIs والصلاحيات",
        description:
          "دمج REST APIs، والمصادقة، والتحكم في الصلاحيات حسب الدور، بما في ذلك لوحة تحكم لإدارة الصلاحيات.",
      },
      {
        title: "واجهات ثنائية اللغة وبيانات لحظية",
        description:
          "دعم اللغتين العربية والإنجليزية، الوضع الليلي والنهاري، وبيانات Firebase اللحظية.",
      },
    ],

    skillGroups: [
      {
        category: "الواجهة الأمامية",
        icon: "Code2",
        items: [
          "HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React.js",
          "Next.js", "React Hooks", "Flexbox", "CSS Grid", "Media Queries",
          "Responsive Design", "Bootstrap", "Tailwind CSS",
        ],
      },
      {
        category: "تجربة وواجهة المستخدم",
        icon: "PenTool",
        items: [
          "Component-Based Architecture", "Basic Accessibility (A11y)",
          "User-Friendly Interface Design", "Light/Dark Mode",
          "دعم متعدد اللغات (عربي/إنجليزي)",
        ],
      },
      {
        category: "الـ APIs والبيانات",
        icon: "Database",
        items: [
          "REST API Integration", "Authentication & Role-Based Access Control",
          "JSON", "Firebase Firestore", "Firebase Authentication",
          "Real-Time Data Handling",
        ],
      },
      {
        category: "الأدوات وطريقة العمل",
        icon: "Wrench",
        items: ["Git", "GitHub", "VS Code", "Vite"],
      },
    ],

    experience: [
      {
        id: "sales-system",
        period: "أبريل 2026 — حتى الآن",
        type: "عمل حر",
        role: "مطوّر React.js",
        org: "نظام إدارة مبيعات (Sales Management System)",
        teamNote: "فريق مكوّن من 3 أشخاص، بجانب مطوّر باك-إند منفصل",
        bullets: [
          "طوّرت بمفردي كامل واجهة نظام إدارة مبيعات متكامل يضم أكثر من 10 وحدات.",
          "بنيت لوحات تحكم متجاوبة تغطي المؤشرات الرئيسية، أداء الموظفين، التقارير اليومية، المصروفات، فواتير الشراء، العملاء، المنتجات، المبيعات، تنبيهات المخزون، والمرتجعات.",
          "نفّذت المصادقة، والمسارات المحمية، والتحكم في الصلاحيات حسب الدور، ولوحة تحكم لإدارة المستخدمين والصلاحيات.",
          "أضفت دعم اللغتين العربية والإنجليزية والوضع الليلي/النهاري، ودمجت الواجهة مع REST APIs الخاصة بالباك-إند.",
        ],
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST APIs"],
      },
      {
        id: "flosy-feen",
        period: "نوفمبر 2025 — مارس 2026",
        type: "عمل حر، فريق عن بُعد",
        role: "مطوّر واجهات أمامية",
        org: "Flosy Feen — تطبيق إدارة المصروفات",
        teamNote: "فريق عمل حر مكوّن من 4 أشخاص",
        bullets: [
          "بنيت أربع شاشات أساسية — الرئيسية، المصروفات، الميزانية، والإعدادات — لتطبيق حقيقي لتتبع المصروفات الشخصية.",
          "طوّرت مكوّنات React قابلة لإعادة الاستخدام وتخطيطات متجاوبة لسلوك واجهة متّسق بين سطح المكتب والموبايل، بالتعاون عبر Git/GitHub.",
        ],
        stack: ["JavaScript", "React"],
      },
    ],

    projects: [
      {
        id: "sales-management-system",
        name: "نظام إدارة المبيعات",
        tag: "عمل حر · مشروع مميز",
        description:
          "الواجهة الأمامية الكاملة لمنصة مبيعات تجارية: لوحات تحكم، إدارة مخزون، فوترة، وإدارة عملاء ومنتجات وصلاحيات الموظفين عبر أكثر من 10 وحدات.",
        role: "مطوّر الواجهة الأمامية الوحيد، بالتعاون مع مطوّر باك-إند منفصل.",
        stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
        github: shared.github,
        demo: null,
      },
      {
        id: "ecommerce-website",
        name: "متجر إلكتروني",
        tag: "مشروع",
        description:
          "متجر إلكتروني متجاوب بالكامل يدمج Dummy JSON API لعرض المنتجات وتصفيتها حسب الفئة، مع إدارة سلة المشتريات وتحديث حالة الواجهة الديناميكي عبر رحلة التصفح حتى الدفع.",
        role: "تم بناؤه بشكل فردي.",
        stack: ["React (Vite)", "Hooks"],
        github: shared.github,
        demo: null,
      },
      {
        id: "portfolio-website",
        name: "الموقع الشخصي (بورتفوليو)",
        tag: "مشروع",
        description:
          "موقع بورتفوليو شخصي سابق مبني بـ React وCSS، يركّز على تنقّل سلس وعناصر واجهة تفاعلية.",
        role: "تم بناؤه بشكل فردي.",
        stack: ["React (Vite)", "CSS"],
        github: shared.github,
        demo: null,
      },
    ],

    education: {
      degree: "بكالوريوس تكنولوجيا المعلومات",
      faculty: "كلية الحاسبات والمعلومات",
      university: "جامعة المنصورة، مصر",
      year: "تخرج 2025",
      grade: "التقدير التراكمي: جيد",
      project: "مشروع التخرج: نظام إدارة الأدوية — بتقدير امتياز",
    },

    languages: [
      { name: "العربية", level: "اللغة الأم" },
      { name: "الإنجليزية", level: "جيد (كفاءة عمل احترافية)" },
    ],
  },
};
