/* ------------------------------------------------------------------
   All editable content lives here.
   • links       → real URLs (leave a value empty and the UI shows a marked placeholder / hides the link)
   • projectMeta → screenshots + live/repo links per project (empty = illustrative preview, no link)
   • dict        → every visible string, English + Arabic
------------------------------------------------------------------- */

export const links = {
  email: 'ahmed1522003aa@gmail.com',
  github: 'https://github.com/ahmed-elsedy15',
  linkedin: 'https://www.linkedin.com/in/ahmed-elshahat-b839a8384/', // ← paste your LinkedIn URL. Until then the site shows a clearly marked placeholder.
  cv: 'Ahmed_Elshahat_Frontend_Developer.pdf', // lives in /public
  photo: 'photo.jpg', // /public/photo.jpg → your portrait
  cutout: 'photo-cutout.png', // OPTIONAL /public/photo-cutout.png → background-removed portrait for a stronger 3D effect
}

// image: path inside /public (e.g. 'projects/sales.png'). live / repo: full URLs. Empty = not shown.
export const projectMeta = [
  { id: 'sales', tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'REST APIs'], image: '', live: '', repo: '' },
  { id: 'flosy', tech: ['React', 'Vite', 'JavaScript', 'Firebase Auth', 'Firestore'], image: '', live: '', repo: '' },
  { id: 'shop', tech: ['React', 'Vite', 'JavaScript', 'DummyJSON API'], image: '', live: '', repo: '' },
  { id: 'portfolio', tech: ['React', 'Vite', 'CSS', 'Motion'], image: '', live: '', repo: '' },
]

// Module names used inside the interactive Sales System preview (the real module areas)
export const salesModules = {
  en: ['Sales', 'Inventory', 'Products', 'Customers', 'Purchases', 'Reports', 'Employees'],
  ar: ['المبيعات', 'المخزون', 'المنتجات', 'العملاء', 'المشتريات', 'التقارير', 'الموظفون'],
}

export const skillGroups = [
  {
    id: 'frontend',
    name: { en: 'Frontend', ar: 'الواجهات الأمامية' },
    skills: [
      { en: 'HTML5' }, { en: 'CSS3' }, { en: 'JavaScript ES6+' },
      { en: 'TypeScript' }, { en: 'React.js' }, { en: 'Next.js' },
    ],
  },
  {
    id: 'styling',
    name: { en: 'Styling & UI', ar: 'التصميم والواجهات' },
    skills: [
      { en: 'Tailwind CSS' }, { en: 'Bootstrap' }, { en: 'Flexbox' }, { en: 'CSS Grid' },
      { en: 'Responsive Design', ar: 'التصميم المتجاوب' },
      { en: 'Basic Accessibility', ar: 'أساسيات إتاحة الوصول' },
    ],
  },
  {
    id: 'data',
    name: { en: 'APIs & Data', ar: 'الواجهات البرمجية والبيانات' },
    skills: [
      { en: 'REST APIs' }, { en: 'Axios' }, { en: 'JSON' },
      { en: 'Firebase Firestore' }, { en: 'Firebase Authentication' },
      { en: 'Real-Time Data Handling', ar: 'التعامل مع البيانات اللحظية' },
    ],
  },
  {
    id: 'dev',
    name: { en: 'Development', ar: 'أدوات التطوير' },
    skills: [
      { en: 'Git' }, { en: 'GitHub' }, { en: 'Vite' }, { en: 'React Hooks' },
      { en: 'Authentication', ar: 'المصادقة' },
      { en: 'Role-Based Access Control', ar: 'التحكم في الوصول بالأدوار' },
    ],
  },
]

export const dict = {
  /* =============================== ENGLISH =============================== */
  en: {
    meta: { title: 'Ahmed Elshahat Attia — Frontend Developer' },
    nav: {
      skip: 'Skip to content', home: 'Ahmed Elshahat Attia — home',
      work: 'Work', about: 'About', stack: 'Stack', contact: 'Contact',
      cv: 'Download CV', menu: 'Open menu', close: 'Close menu',
      lang: 'عربي', langLabel: 'التبديل إلى العربية (Switch to Arabic)',
    },
    hero: {
      eyebrow: 'Ahmed Elshahat Attia', role: 'Frontend Developer',
      h1: 'Building interfaces people', h1hl: 'actually use.',
      intro: 'I’m a frontend developer from Cairo. I work with React and Next.js to turn ideas into responsive, interactive products — from a sales system with 10+ modules to a personal expense tracker.',
      explore: 'Explore my work', contact: 'Contact me',
      avail: 'Open to remote work & relocation', scroll: 'Scroll', place: 'Cairo, Egypt',
      portrait: { alt: 'Portrait of Ahmed Elshahat Attia', missing: 'Add your photo', hint: 'public/photo.jpg', caption: 'Frontend Developer — Cairo' },
    },
    marquee: ['Ahmed Elshahat Attia', 'Frontend Developer', 'React', 'Next.js', 'TypeScript'],
    work: {
      label: 'Selected work', title: 'Things I’ve built', count: '04 projects',
      note: 'Illustrative preview — real screenshots go here',
      role: 'Role', team: 'Team', stack: 'Built with', did: 'What I did', live: 'Live', code: 'Code',
      you: 'You’re looking at it right now.',
      items: {
        sales: {
          title: 'Sales Management System', kind: 'Business platform · 10+ modules',
          blurb: 'A business management platform covering sales, inventory, products, customers, purchases, reports and employees.',
          role: 'Frontend Developer · Freelance',
          team: 'Three-person team, alongside a separate backend developer',
          points: [
            'Responsive interfaces across 10+ modules',
            'Authentication, protected routes and role-based access with employee permissions',
            '15+ REST API endpoints integrated',
            'Arabic & English with full RTL support, plus light and dark mode',
          ],
        },
        flosy: {
          title: 'Flosy Feen', kind: 'Expense management app',
          blurb: 'A personal expense manager for tracking spending and keeping a budget.',
          role: 'Frontend Developer · Freelance',
          team: 'Four-member remote team, working through Git & GitHub',
          points: [
            'Four core screens: Home, Expenses, Budget and Settings',
            'Google Sign-In with Firebase Authentication',
            'Reusable React components and responsive layouts',
            'Data stored in Firestore',
          ],
        },
        shop: {
          title: 'E-commerce Website', kind: 'Responsive storefront',
          blurb: 'A responsive online store built with React and Vite.',
          points: [
            'Product browsing with category filtering',
            'Product data pulled from the DummyJSON API',
            'Shopping cart management',
            'Responsive layouts for desktop and mobile',
          ],
        },
        portfolio: { title: 'Personal Portfolio', kind: 'This website', blurb: 'Bilingual, animated, and built with React and Vite.' },
      },
    },
    mocks: {
      sales: { aria: 'Interactive preview of the sales system', toggleLang: 'Toggle preview language', toggleTheme: 'Toggle preview theme' },
      flosy: { aria: 'Interactive preview of Flosy Feen', google: 'Continue with Google', tabs: ['Home', 'Expenses', 'Budget', 'Settings'], signout: 'Sign out' },
      shop: { aria: 'Interactive preview of the storefront', cats: ['All', 'Beauty', 'Fragrances', 'Furniture', 'Groceries'], add: 'Add', cart: 'Cart' },
    },
    about: {
      label: 'About',
      text: 'I’m Ahmed, a frontend developer based in Cairo. I like turning ideas into interfaces people can actually use: responsive, interactive and built to hold up in real products. I work with *React.js* and *Next.js*, and I’ve built freelance projects like a sales system with 10+ modules and an expense tracker, alongside a backend developer and remote teammates.',
      facts: [['Based in', 'Cairo, Egypt'], ['Open to', 'Remote work & relocation'], ['Works with', 'Backend developers & remote teams']],
    },
    stack: { label: 'Toolbox', title: 'What I build with', hint: 'Pick a group' },
    contact: {
      label: 'Contact', h: 'Have an idea? Let’s build something meaningful.',
      sub: 'Open to remote opportunities and relocation. Say hello.',
      email: 'Email me', copy: 'Copy email', copied: 'Copied', github: 'GitHub', linkedin: 'LinkedIn',
      linkedinMissing: 'LinkedIn — add your link', cv: 'Download CV',
    },
    footer: { rights: 'Ahmed Elshahat Attia', made: 'Designed & built with React and Vite', top: 'Back to top' },
  },

  /* ================================ ARABIC ================================ */
  ar: {
    meta: { title: 'أحمد الشحات عطية — مطوّر واجهات أمامية' },
    nav: {
      skip: 'انتقل إلى المحتوى', home: 'أحمد الشحات عطية — الرئيسية',
      work: 'الأعمال', about: 'نبذة', stack: 'الأدوات', contact: 'تواصل',
      cv: 'تحميل السيرة الذاتية', menu: 'فتح القائمة', close: 'إغلاق القائمة',
      lang: 'EN', langLabel: 'التبديل إلى الإنجليزية (Switch to English)',
    },
    hero: {
      eyebrow: 'أحمد الشحات عطية', role: 'مطوّر واجهات أمامية',
      h1: 'أبني واجهات', h1hl: 'يستخدمها الناس فعلًا.',
      intro: 'أنا مطوّر واجهات أمامية من القاهرة. أعمل بـ React وNext.js على تحويل الأفكار إلى منتجات متجاوبة وتفاعلية — من نظام مبيعات بأكثر من 10 وحدات إلى تطبيق للمصروفات الشخصية.',
      explore: 'استكشف أعمالي', contact: 'تواصل معي',
      avail: 'متاح للعمل عن بُعد وللانتقال', scroll: 'مرّر', place: 'القاهرة، مصر',
      portrait: { alt: 'صورة أحمد الشحات عطية', missing: 'أضف صورتك', hint: 'public/photo.jpg', caption: 'مطوّر واجهات أمامية — القاهرة' },
    },
    marquee: ['أحمد الشحات عطية', 'مطوّر واجهات أمامية', 'React', 'Next.js', 'TypeScript'],
    work: {
      label: 'أبرز الأعمال', title: 'أعمال نفّذتُها', count: '4 مشاريع',
      note: 'معاينة توضيحية — تُوضع هنا لقطات الشاشة الحقيقية',
      role: 'الدور', team: 'الفريق', stack: 'التقنيات', did: 'ما عملتُ عليه', live: 'المعاينة', code: 'الكود',
      you: 'أنت تتصفحه الآن.',
      items: {
        sales: {
          title: 'نظام إدارة المبيعات', kind: 'منصة أعمال · أكثر من 10 وحدات',
          blurb: 'منصة لإدارة الأعمال تغطي المبيعات والمخزون والمنتجات والعملاء والمشتريات والتقارير والموظفين.',
          role: 'مطوّر واجهات أمامية · عمل حر',
          team: 'فريق من ثلاثة أفراد بجانب مطوّر خلفية مستقل',
          points: [
            'واجهات متجاوبة عبر أكثر من 10 وحدات',
            'مصادقة ومسارات محمية وتحكم في الوصول بالأدوار مع صلاحيات للموظفين',
            'ربط أكثر من 15 نقطة نهاية REST',
            'دعم العربية والإنجليزية بتخطيط RTL كامل، مع الوضعين الفاتح والداكن',
          ],
        },
        flosy: {
          title: 'Flosy Feen', kind: 'تطبيق لإدارة المصروفات',
          blurb: 'تطبيق ويب لتتبّع المصروفات الشخصية والتحكم في الميزانية.',
          role: 'مطوّر واجهات أمامية · عمل حر',
          team: 'فريق عن بُعد من أربعة أعضاء عبر Git وGitHub',
          points: [
            'أربع شاشات أساسية: الرئيسية والمصروفات والميزانية والإعدادات',
            'تسجيل الدخول عبر Google باستخدام Firebase Authentication',
            'مكوّنات React قابلة لإعادة الاستخدام وتخطيطات متجاوبة',
            'تخزين البيانات في Firestore',
          ],
        },
        shop: {
          title: 'متجر إلكتروني', kind: 'واجهة متجر متجاوبة',
          blurb: 'متجر إلكتروني متجاوب مبني بـ React وVite.',
          points: [
            'تصفّح المنتجات وتصفيتها حسب الفئة',
            'جلب بيانات المنتجات من DummyJSON API',
            'إدارة سلة التسوق',
            'تصميم متجاوب لسطح المكتب والجوال',
          ],
        },
        portfolio: { title: 'الموقع الشخصي', kind: 'هذا الموقع', blurb: 'ثنائي اللغة ومتحرك، مبني بـ React وVite.' },
      },
    },
    mocks: {
      sales: { aria: 'معاينة تفاعلية لنظام المبيعات', toggleLang: 'تبديل لغة المعاينة', toggleTheme: 'تبديل مظهر المعاينة' },
      flosy: { aria: 'معاينة تفاعلية لتطبيق Flosy Feen', google: 'المتابعة عبر Google', tabs: ['الرئيسية', 'المصروفات', 'الميزانية', 'الإعدادات'], signout: 'تسجيل الخروج' },
      shop: { aria: 'معاينة تفاعلية للمتجر', cats: ['الكل', 'الجمال', 'العطور', 'الأثاث', 'البقالة'], add: 'أضف', cart: 'السلة' },
    },
    about: {
      label: 'نبذة',
      text: 'أنا أحمد، مطوّر واجهات أمامية من القاهرة. أحب تحويل الأفكار إلى واجهات يستخدمها الناس فعلًا: متجاوبة وتفاعلية وقادرة على الصمود في المنتجات الحقيقية. أعمل بـ *React.js* و*Next.js*، ونفّذتُ مشاريع كمستقل مثل نظام مبيعات بأكثر من 10 وحدات وتطبيق لإدارة المصروفات، بالتعاون مع مطوّر خلفية وزملاء يعملون عن بُعد.',
      facts: [['المقر', 'القاهرة، مصر'], ['متاح لـ', 'العمل عن بُعد والانتقال'], ['أعمل مع', 'مطوّري الخلفية والفرق عن بُعد']],
    },
    stack: { label: 'الأدوات', title: 'ما أعمل به', hint: 'اختر مجموعة' },
    contact: {
      label: 'تواصل', h: 'هل لديك فكرة؟ لنبنِ معًا شيئًا ذا معنى.',
      sub: 'متاح لفرص العمل عن بُعد وللانتقال. راسلني.',
      email: 'راسلني بالبريد', copy: 'نسخ البريد', copied: 'تم النسخ', github: 'GitHub', linkedin: 'LinkedIn',
      linkedinMissing: 'LinkedIn — أضف رابطك', cv: 'تحميل السيرة الذاتية',
    },
    footer: { rights: 'أحمد الشحات عطية', made: 'صُمّم وبُني باستخدام React وVite', top: 'العودة للأعلى' },
  },
}
