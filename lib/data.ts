/* ----------------------------------------------------------------------------
   Single source of truth for the portfolio.
---------------------------------------------------------------------------- */

export type ProjectImage = { src: string; w: number; h: number; alt: string };

export type Project = {
  slug: string;
  name: string;
  company: string;
  role: string;
  period: string;
  year: string;
  status?: "Live" | "Shipped";
  tagline: string;
  blurb: string;
  url?: string;
  highlights: string[];
  outcome: string;
  stack: string[];
  cover?: ProjectImage;
  images: ProjectImage[];
  featured: boolean;
  /** Recency key for sorting (end date as YYYYMM; ongoing work uses 999999). */
  sort: number;
};

export type Company = {
  company: string;
  role: string;
  period: string;
  start: string;
  end: string;
  location: string;
  summary: string;
  projectSlugs?: string[];
  bullets?: string[];
};

export const profile = {
  name: "Nodirbek Sharipov",
  short: "Nodir",
  role: "Lead Full-Stack Engineer",
  location: "Tashkent, Uzbekistan",
  available: "Open to senior & lead roles",
  tagline:
    "I build cross-platform products — native mobile, expressive web, and the scalable APIs underneath.",
  metaDescription:
    "Nodirbek (Nodir) Sharipov — Lead Full-Stack Engineer with 7+ years building cross-platform native mobile apps, sophisticated web UIs, and scalable, secure APIs.",
  summary:
    "Lead Full-Stack Engineer with over 7 years of experience delivering cross-platform native mobile apps, web apps with sophisticated UI/UX, and scalable, secure web APIs. Deep experience across SQL and NoSQL databases, with a track record of shipping efficient solutions inside collaborative teams.",
  goal: "My goal is to have a purpose and be part of teams that build valuable products.",
  born: 1998,
  languages: [
    { name: "Uzbek", level: "Native" },
    { name: "English", level: "Bilingual" },
    { name: "Turkish", level: "Basic" },
    { name: "Russian", level: "Basic" },
  ],
};

export const stats = [
  { value: "7+", label: "Years shipping production software" },
  { value: "6", label: "Teams across health, fintech & edtech" },
  { value: "4.9★", label: "App Store rating on BellSant" },
  { value: "2", label: "Platforms — web & native, one stack" },
];

export const socials = {
  email: "nodir.dev.js@gmail.com",
  phone: "+998905572240",
  phoneLabel: "+998 (90) 557-2240",
  linkedin: "https://www.linkedin.com/in/nodirdev/",
  github: "https://github.com/nodir-js",
  twitter: "https://twitter.com/nodir_dev",
  telegram: "https://t.me/nodirbek_sharipov",
  devto: "https://dev.to/nodir_dev",
  medium: "https://medium.com/@nodir_dev",
};

/* ----------------------------------------------------------------------------
   Skills — grouped, with years of hands-on experience
---------------------------------------------------------------------------- */
export type Skill = { name: string; years: number };
export type SkillGroup = { title: string; skills: Skill[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages & Core",
    skills: [
      { name: "JavaScript", years: 8 },
      { name: "TypeScript", years: 6 },
      { name: "HTML5 / CSS3 / JSON", years: 8 },
      { name: "C#", years: 3 },
      { name: "SQL", years: 6 },
    ],
  },
  {
    title: "Front-end & Mobile",
    skills: [
      { name: "React", years: 7 },
      { name: "React Native", years: 5 },
      { name: "Redux", years: 7 },
      { name: "Next.js", years: 5 },
      { name: "Tailwind CSS", years: 5 },
      { name: "Styled Components", years: 5 },
    ],
  },
  {
    title: "Back-end & APIs",
    skills: [
      { name: "Node.js", years: 6 },
      { name: "REST / RESTful APIs", years: 6 },
      { name: "JWT / Auth", years: 6 },
      { name: "Serverless", years: 4 },
      { name: "WebRTC / WebSockets", years: 4 },
      { name: "GraphQL", years: 2 },
      { name: "ASP.NET Core / .NET", years: 2 },
    ],
  },
  {
    title: "Data",
    skills: [
      { name: "MySQL", years: 6 },
      { name: "MongoDB", years: 6 },
      { name: "AWS RDS", years: 6 },
      { name: "PostgreSQL", years: 2 },
      { name: "DynamoDB", years: 2 },
      { name: "MS SQL Server", years: 1 },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", years: 6 },
      { name: "CI/CD", years: 6 },
      { name: "Cloud", years: 6 },
      { name: "Firebase", years: 2 },
      { name: "GCP App Engine", years: 1 },
      { name: "Kubernetes", years: 1 },
    ],
  },
  {
    title: "Leadership & Craft",
    skills: [
      { name: "Tech Lead", years: 4 },
      { name: "Team Management", years: 2 },
      { name: "Project Management", years: 2 },
      { name: "Figma", years: 6 },
      { name: "Jira", years: 6 },
      { name: "Git / GitHub", years: 8 },
    ],
  },
];

/* ----------------------------------------------------------------------------
   Projects (detail pages live at /work/[slug])
---------------------------------------------------------------------------- */
export const projects: Project[] = [
  {
    slug: "endorphins",
    name: "Endorphins Running",
    company: "Endorphins Running",
    role: "Senior Software Engineer",
    period: "Nov 2024 — Present",
    year: "2024 — Now",
    status: "Live",
    tagline: "A cross-platform home for one of the largest running communities in the U.S.",
    blurb:
      "A fitness and community platform — responsive web plus native iOS & Android — that helps runners train smarter and stay connected.",
    url: "https://endorphinsrunning.com/",
    highlights: [
      "Shipped features across the responsive web app and native iOS & Android apps from a shared codebase.",
      "Built training, event-discovery and community experiences used by thousands of runners across many cities.",
      "Integrated wearable data from Garmin, COROS, Strava and Apple Health to adapt workouts in real time.",
      "Supported AI-assisted personalized coaching workflows and adaptive training plans.",
      "Helped surface 1,500+ community running events a year with race-specific chats.",
    ],
    outcome:
      "Delivered new cross-platform features that improved training, event participation and community engagement while supporting a scalable fitness ecosystem.",
    stack: ["React Native", "Node.js", "TypeScript", "Apple Health", "Garmin", "Strava"],
    images: Array.from({ length: 10 }, (_, i) => ({
      src: `/projects/endorphins/${i + 1}.webp`,
      w: 459,
      h: 998,
      alt: `Endorphins Running mobile app screen ${i + 1}`,
    })),
    featured: true,
    sort: 999999, // Nov 2024 — Present
  },
  {
    slug: "bellsant",
    name: "BellSant",
    company: "Bellsant",
    role: "Senior Software Engineer",
    period: "Sep 2023 — Nov 2024",
    year: "2023 — 2024",
    status: "Live",
    tagline: "A HIPAA-compliant body & health advisor for living longer, healthier.",
    blurb:
      "A holistic health app combining lab diagnostics, strength assessments and connected-device data into one personalized experience. Since acquired by Hundred.",
    url: "https://www.hundred.com/",
    highlights: [
      "Built a HIPAA-compliant health hub tracking 50+ biomarkers over time.",
      "Shipped advanced blood-testing, hormone, immunity and metabolic insight flows.",
      "Made booking a lab visit a one-tap experience, with results analyzed by clinicians.",
      "Delivered science-backed, personalized recommendations to help users lower their biological age.",
    ],
    outcome:
      "A 4.9★ App Store app serving thousands of users to monitor their health, improve their diet, and order a lab visit in one click — with results summarized and recommended by a team of healthcare professionals.",
    stack: ["React Native", "Node.js", "TypeScript", "HIPAA"],
    images: [
      { src: "/projects/bellsant/1.png", w: 1918, h: 1548, alt: "BellSant app screens" },
    ],
    featured: true,
    sort: 202411, // Nov 2024
  },
  {
    slug: "rize",
    name: "Rize",
    company: "Rizetogether Ltd",
    role: "Tech Lead",
    period: "Dec 2020 — Jul 2022",
    year: "2020 — 2022",
    status: "Shipped",
    tagline: "A voice-first social network — architected and led end to end.",
    blurb:
      "Audio-first social app for founders, plus the serverless AWS backend and marketing site behind it. Led a team of five.",
    url: "https://play.google.com/store/apps/details?id=com.joinrize.rize",
    highlights: [
      "Led a team of 5 (2 back-end, 2 mobile, 1 web) and owned the entire system architecture on AWS.",
      "Built native iOS & Android apps in React Native + Redux around live audio conversations.",
      "Designed error-tolerant, stateless, serverless REST APIs in Node.js + TypeScript + MySQL, JWT-secured.",
      "Shipped OTP auth, real-time messaging, push notifications, deep links and universal links.",
      "Automated deploys and tests with GitHub Actions; built notification & email services on AWS SES + Firebase FCM.",
    ],
    outcome:
      "Published the iOS & Android apps to users across Europe and the UK. The React Native app feels native thanks to Redux state optimization and animations running on the native thread — and the migration left the customer on a far more efficient database.",
    stack: ["React Native", "Redux", "Node.js", "TypeScript", "AWS", "MySQL", "Firebase", "WebRTC"],
    images: [
      { src: "/projects/rize/mobile-1.png", w: 1170, h: 2532, alt: "Rize mobile app screen" },
      { src: "/projects/rize/web-1.png", w: 2188, h: 1638, alt: "Rize marketing website" },
      { src: "/projects/rize/mobile-2.png", w: 1434, h: 1324, alt: "Rize app interface" },
      { src: "/projects/rize/backend-1.png", w: 1616, h: 766, alt: "Rize backend architecture" },
    ],
    featured: true,
    sort: 202207, // Jul 2022
  },
  {
    slug: "poolit",
    name: "Poolit",
    company: "CaliberX (formerly Poolit)",
    role: "Senior Software Engineer",
    period: "Jul 2022 — Sep 2023",
    year: "2022 — 2023",
    status: "Live",
    tagline: "Premium private equity & VC investing, in your pocket.",
    blurb:
      "Native iOS & Android apps plus a feature-matched web client giving accredited investors access to top fund managers.",
    url: "https://www.poolit.com/",
    highlights: [
      "Built and shipped native iOS & Android apps plus a feature-matched web client for a consistent experience.",
      "Established CI/CD pipelines and automated build tools for faster, more reliable releases.",
      "Integrated secure authentication for accredited investors, enabling investment with low minimums.",
      "Partnered with UX/UI designers and product managers to refine the experience from real user feedback.",
    ],
    outcome:
      "Gave accredited investors a friendly platform to access premium private equity and venture capital opportunities, with CI/CD and automated builds keeping updates and feature releases timely.",
    stack: ["React Native", "React", "TypeScript", "Redux", "Auth0", "CI/CD"],
    images: [
      { src: "/projects/poolit/1.png", w: 1852, h: 1546, alt: "Poolit app screens" },
    ],
    featured: true,
    sort: 202309, // Sep 2023
  },
  {
    slug: "pearson-plus",
    name: "Pearson+",
    company: "EPAM Systems",
    role: "Senior Software Engineer",
    period: "Aug 2022 — Jan 2023",
    year: "2022 — 2023",
    status: "Live",
    tagline: "A design system for a learning platform used by millions of students.",
    blurb:
      "Built a consistent design system in Next.js for the Pearson+ learning management system, improving accessibility and UX.",
    url: "https://www.pearson.com/en-us/pearsonplus.html",
    highlights: [
      "Built a consistent design system for the Pearson+ LMS in Next.js.",
      "Improved web accessibility, usability and UI/UX across the platform.",
      "Streamlined and optimized the codebase, reducing load times.",
      "Ran code reviews, technical hiring interviews and delegated work across key engineers.",
    ],
    outcome:
      "Significantly improved the interface and user satisfaction, increasing engagement — while a streamlined process and efficient delegation sped up project delivery.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Styled Components", "GraphQL"],
    images: [
      { src: "/projects/pearson/1.png", w: 3024, h: 1724, alt: "Pearson+ learning platform" },
    ],
    featured: true,
    sort: 202301, // Jan 2023
  },
  {
    slug: "caliberx",
    name: "CaliberX",
    company: "CaliberX (formerly Poolit)",
    role: "Senior Software Engineer",
    period: "Oct 2022 — Sep 2023",
    year: "2022 — 2023",
    status: "Live",
    tagline: "A multi-tenant platform powering end-to-end alternative investing.",
    blurb:
      "Multi-tenant, high-scale platform and APIs connecting customers to premier private equity and venture capital funds.",
    url: "https://www.caliberexchange.com/",
    highlights: [
      "Built a multi-tenant architecture engineered for high-scale loads, with security prioritized throughout.",
      "Engineered APIs connecting customers to premier private equity & VC funds.",
      "Optimized database queries and overall system efficiency to address scalability challenges.",
      "Established data-encryption and secure-communication protocols for sensitive information.",
      "Ran code reviews, automated testing, monitoring/analytics and onboarded new engineers.",
    ],
    outcome:
      "A robust, secure, multi-tenant platform delivering a seamless alternative-investing experience that scales — with advanced security bolstering overall reliability.",
    stack: ["React", "TypeScript", "AWS", "GCP App Engine", "Kubernetes", "WebRTC", "Contentful", "Selenium"],
    images: [],
    featured: false,
    sort: 202309, // Sep 2023
  },
];

/** Featured projects, most recent first. */
export const featuredProjects = projects
  .filter((p) => p.featured)
  .sort((a, b) => b.sort - a.sort);

export const projectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);

/* ----------------------------------------------------------------------------
   Experience timeline
---------------------------------------------------------------------------- */
export const experience: Company[] = [
  {
    company: "Endorphins Running",
    role: "Senior Software Engineer",
    period: "Nov 2024 — Present",
    start: "2024",
    end: "Now",
    location: "Remote · U.S.",
    summary:
      "Building the Endorphins Running ecosystem — responsive web plus native iOS & Android — for one of the largest running communities in the U.S.",
    projectSlugs: ["endorphins"],
  },
  {
    company: "Bellsant",
    role: "Senior Software Engineer",
    period: "Sep 2023 — Nov 2024",
    start: "2023",
    end: "2024",
    location: "Remote · U.S.",
    summary:
      "Shipped BellSant, a HIPAA-compliant health & longevity advisor that became a 4.9★ App Store app.",
    projectSlugs: ["bellsant"],
  },
  {
    company: "CaliberX",
    role: "Senior Software Engineer",
    period: "Jul 2022 — Sep 2023",
    start: "2022",
    end: "2023",
    location: "Remote · U.S.",
    summary:
      "Delivered the Poolit mobile & web apps and the CaliberX multi-tenant platform, opening alternative investing to more investors.",
    projectSlugs: ["poolit", "caliberx"],
  },
  {
    company: "EPAM Systems",
    role: "Senior Software Engineer",
    period: "Aug 2022 — Jan 2023",
    start: "2022",
    end: "2023",
    location: "Remote",
    summary:
      "Built a consistent Next.js design system for Pearson+ and improved accessibility, usability and delivery speed.",
    projectSlugs: ["pearson-plus"],
  },
  {
    company: "Rizetogether Ltd",
    role: "Tech Lead",
    period: "Dec 2020 — Jul 2022",
    start: "2020",
    end: "2022",
    location: "Remote · UK / EU",
    summary:
      "Led a team of five and architected the full Rize stack — voice-first mobile apps, a serverless AWS backend, and the marketing site.",
    projectSlugs: ["rize"],
  },
  {
    company: "Appx Group",
    role: "Full-Stack Software Engineer",
    period: "May 2018 — Dec 2020",
    start: "2018",
    end: "2020",
    location: "Tashkent, Uzbekistan",
    summary:
      "Built RESTful APIs, responsive cross-browser sites, cross-platform mobile apps, Telegram bots and custom integrations across Next.js, Node.js, PHP and C#/.NET with MySQL, SQL Server, PostgreSQL and MongoDB.",
    bullets: [
      "SDB — a chain e-commerce store (sdb.uz) with custom business logic and management tooling.",
      "Real-time resumable file uploader streaming large files in chunks over Socket.IO & WebRTC.",
      "A customer-support chat system connecting users directly with sellers and admins in real time.",
      "Immersive landing pages with 3D elements using WebGL, Three.js and scroll animations.",
    ],
  },
];

/* ----------------------------------------------------------------------------
   Education & publications
---------------------------------------------------------------------------- */
export const education = [
  {
    school: "University of Westminster",
    degree: "BSc (Hons) Business Information Systems",
    period: "Sep 2016 — May 2020",
  },
  {
    school: "Westminster International University in Tashkent",
    degree: "Foundation Studies",
    period: "Sep 2016 — May 2017",
  },
];

export const publications = [
  {
    title:
      "Transcode video source to HLS playlist format for Video on Demand (VOD) Streaming",
    year: "2020",
    outlet: "dev.to",
    url: "https://dev.to/nodir_dev/transcode-video-source-to-hls-playlist-format-for-video-on-demand-vod-streaming-3h99",
  },
];
