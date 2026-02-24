export const profile = {
    name: "Peter Ejeh",
    title: "Software Developer | DevOps Learner | Data Enthusiast",
    tagline:
        "Building reliable web products with clean code, modern UI, and scalable cloud practices.",
    bio: "I build clean, reliable web applications and enjoy solving real problems with modern tools. I care about performance, UI details, and scalable engineering practices.",
    email: "petes-tech@proton.me",
    phone: ["09074944102", "09152603544"],
    location: "Nigeria",
    cvUrl: "/cv",
    currently: [
        "Learning DevOps & cloud (AWS, CI/CD) — Cisco certified",
        "Building full-stack web applications",
        "Exploring ML & data engineering",
        "Improving UI/UX craft",
    ],
};

export const socials = [
    { label: "GitHub", url: "https://github.com/PeterEjeh", icon: "Github" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/peter-ejeh/", icon: "Linkedin" },
    { label: "Twitter", url: "https://twitter.com/peterejeh", icon: "Twitter" },
];

// ─────────────────────────────────────────────
// PROJECTS
// ─────────────────────────────────────────────
export type ProjectCategory =
    | "Full Stack"
    | "Cloud / DevOps"
    | "Data / ML"
    | "Web Design";

export interface Project {
    id: string;
    name: string;
    tagline: string;
    description: string;
    stack: string[];
    github?: string;
    live?: string;
    thumbnail: string;
    featured: boolean;
    category: ProjectCategory;
    wip?: boolean;
}

export const projects: Project[] = [
    // ── Full Stack ──────────────────────────────
    {
        id: "petesgramm",
        name: "PetesGram",
        tagline: "An Instagram-like multimedia sharing platform.",
        description:
            "A full-featured social media platform where users can share photos, videos, and stories. Built with Django backend and Bootstrap templates — with a Flutter mobile frontend planned for the next phase.",
        stack: ["Django", "Python", "Bootstrap", "PostgreSQL", "Flutter (planned)"],
        github: "https://github.com/PeterEjeh/webapp",
        live: "",
        thumbnail: "/thumbnails/petesgramm.png",
        featured: true,
        category: "Full Stack",
    },
    {
        id: "poligrain",
        name: "PoliGrain",
        tagline: "AWS-powered agriculture crowdfunding platform.",
        description:
            "A crowdfunding app for agricultural projects, leveraging a serverless AWS architecture. Implements user authentication, profile flow, and campaign management — designed for scale from day one. (Private repository)",
        stack: ["AWS Lambda", "DynamoDB", "Cognito", "API Gateway", "React"],
        // No GitHub — private app
        live: "",
        thumbnail: "/thumbnails/poligrain.png",
        featured: true,
        category: "Cloud / DevOps",
    },

    // ── Web Design / Client Sites ──────────────
    {
        id: "dalisonservices",
        name: "Dalison Services",
        tagline: "Professional business website for a services company.",
        description:
            "Designed and developed a clean, conversion-focused website for Dalison Services. Focused on strong brand presentation, fast load times, and clear service communication.",
        stack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
        live: "https://dalisonservices.com",
        thumbnail: "/thumbnails/dalisonservices.png",
        featured: true,
        category: "Web Design",
    },
    {
        id: "codevalley",
        name: "CodeValley Africa",
        tagline: "Tech company website serving the African developer ecosystem.",
        description:
            "Built the public-facing website for CodeValley, a tech organisation focused on empowering African developers. Modern design, optimised for performance and SEO.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS"],
        live: "https://codevalley.africa",
        thumbnail: "/thumbnails/codevalley.png",
        featured: true,
        category: "Web Design",
    },
    {
        id: "doge-spa",
        name: "D'OGE SPA",
        tagline: "Luxury spa & wellness website — elegant and conversion-focused.",
        description:
            "Designed and built the website for D'OGE SPA, a luxury wellness brand. Features a premium aesthetic with smooth booking flow, services gallery, and a strong visual identity — optimised for conversions.",
        stack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
        live: "",
        thumbnail: "/thumbnails/doge-spa.png",
        featured: true,
        category: "Web Design",
    },

    // ── Data / ML ──────────────────────────────
    {
        id: "carbon-monitor",
        name: "Carbon Emission Monitor",
        tagline: "ML-based carbon emission monitoring and prediction — in progress.",
        description:
            "An ML system for monitoring and predicting carbon emissions using regression and time-series models. Currently in active development — dashboard and model refinement ongoing.",
        stack: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Streamlit"],
        live: "",
        thumbnail: "/thumbnails/carbon.png",
        featured: false,
        category: "Data / ML",
        wip: true,
    },
    {
        id: "data-projects",
        name: "Data Projects",
        tagline: "EDA, prediction models, and fraud detection with Python.",
        description:
            "A collection of data science projects including exploratory data analysis on retail sales, wine quality prediction using classification algorithms, and a fraud detection system built on imbalanced datasets.",
        stack: ["Python", "Pandas", "Scikit-learn", "Seaborn", "Jupyter"],
        github: "https://github.com/PeterEjeh/OIBSIP",
        live: "",
        thumbnail: "/thumbnails/data.png",
        featured: true,
        category: "Data / ML",
    },
];

// ─────────────────────────────────────────────
// SKILLS
// ─────────────────────────────────────────────
export type SkillLevel = "expert" | "proficient" | "learning";

export interface Skill {
    name: string;
    level: SkillLevel;
}

export interface SkillCategory {
    category: string;
    icon: string;
    skills: Skill[];
}

export const skills: SkillCategory[] = [
    {
        category: "Frontend",
        icon: "Monitor",
        skills: [
            { name: "Next.js / React", level: "expert" },
            { name: "TypeScript", level: "proficient" },
            { name: "Tailwind CSS", level: "expert" },
            { name: "Framer Motion", level: "proficient" },
            { name: "HTML / CSS", level: "expert" },
        ],
    },
    {
        category: "Backend",
        icon: "Server",
        skills: [
            { name: "Django", level: "proficient" },
            { name: "REST APIs", level: "proficient" },
            { name: "Python", level: "expert" },
            { name: "PostgreSQL", level: "proficient" },
        ],
    },
    {
        category: "DevOps / Cloud",
        icon: "Cloud",
        skills: [
            { name: "Cisco Networking", level: "proficient" },
            { name: "AWS (Lambda, S3, DynamoDB)", level: "learning" },
            { name: "CI/CD Basics", level: "learning" },
            { name: "Docker", level: "learning" },
            { name: "Git / GitHub", level: "proficient" },
        ],
    },
    {
        category: "Data / ML",
        icon: "BarChart",
        skills: [
            { name: "Pandas / NumPy", level: "proficient" },
            { name: "Scikit-learn", level: "proficient" },
            { name: "EDA", level: "proficient" },
            { name: "Data Visualization", level: "proficient" },
        ],
    },
];

// ─────────────────────────────────────────────
// CERTIFICATIONS
// ─────────────────────────────────────────────
export interface Certification {
    id: string;
    title: string;
    issuer: string;
    date: string;
    certificateImage: string; // path to cert image in /public/certs/
    badgeColor: string;
}

export const certifications: Certification[] = [
    {
        id: "cisco-network-technician",
        title: "Network Technician Career Path Exam",
        issuer: "Cisco Networking Academy · NITDA Academy",
        date: "Feb 2026",
        certificateImage: "/certs/cisco-networking.jpg",
        badgeColor: "blue",
    },
    {
        id: "bincom-python",
        title: "Python (Intermediate) — Certificate of Participation",
        issuer: "Bincom Academy",
        date: "April 2025",
        certificateImage: "/certs/bincom-python.jpg",
        badgeColor: "violet",
    },
];

// ─────────────────────────────────────────────
// TIMELINE
// ─────────────────────────────────────────────
export interface TimelineItem {
    id: string;
    title: string;
    org: string;
    dates: string;
    highlights: string[];
    type: "work" | "learning" | "project" | "cert";
}

export const timeline: TimelineItem[] = [
    {
        id: "data-annotation",
        title: "Data Annotator",
        org: "Data Annotation (Remote)",
        dates: "Oct 2024 — Dec 2025",
        highlights: [
            "Annotated and labelled datasets for AI/ML training across text, image, and code domains",
            "Maintained high accuracy and consistency in annotation tasks under quality guidelines",
            "Contributed to improving model performance for large language model (LLM) fine-tuning",
        ],
        type: "work",
    },
    {
        id: "devops-scholarship",
        title: "DevOps Scholarship Program",
        org: "Self-directed / Online",
        dates: "Oct 2025 — Present",
        highlights: [
            "Working through AWS cloud practitioner and solutions architect content",
            "Implementing CI/CD pipelines, Docker containerisation, and IaC concepts",
            "Building serverless projects as practical application of course material",
        ],
        type: "learning",
    },
    {
        id: "codevalley-dev",
        title: "Web Developer — CodeValley Africa",
        org: "CodeValley Africa",
        dates: "2025",
        highlights: [
            "Built the public-facing website for CodeValley at codevalley.africa",
            "Implemented modern Next.js/TypeScript stack with Tailwind CSS",
            "Optimised for performance, SEO, and mobile responsiveness",
        ],
        type: "project",
    },
    {
        id: "data-analyst-intern",
        title: "Data Analyst (Internship)",
        org: "Organisation — Nigeria",
        dates: "Early 2025",
        highlights: [
            "Performed EDA on retail and sales datasets using Python and Pandas",
            "Built classification models for fraud detection and quality prediction",
            "Presented data-driven insights through Seaborn and Matplotlib dashboards",
        ],
        type: "work",
    },
    {
        id: "poligrain-dev",
        title: "Lead Developer — PoliGrain",
        org: "Personal Project",
        dates: "2025",
        highlights: [
            "Designed & built a cloud-native agriculture crowdfunding platform on AWS",
            "Implemented Cognito authentication, API Gateway, Lambda functions, and DynamoDB",
            "Delivered full user profile and campaign flow with mobile-ready API",
        ],
        type: "project",
    },
    {
        id: "petesgramm-dev",
        title: "Full Stack Developer — PetesGram",
        org: "Personal Project",
        dates: "2024 — 2025",
        highlights: [
            "Built an Instagram-like social platform with Django backend and Bootstrap frontend",
            "Implemented media upload, user authentication, follower system, and post feeds",
            "Planned and spec'd a Flutter mobile client for phase 2 of the product",
        ],
        type: "project",
    },
    {
        id: "cisco-cert",
        title: "Network Technician Career Path Exam",
        org: "Cisco Networking Academy · NITDA Academy",
        dates: "Feb 2026",
        highlights: [
            "Passed Cisco's Network Technician Career Path Exam via NITDA Academy",
            "Covered IP addressing, routing, switching, protocols, and network security",
        ],
        type: "cert",
    },
    {
        id: "bincom-python-cert",
        title: "Python (Intermediate) — Bincom Academy",
        org: "Bincom Academy",
        dates: "April 2025",
        highlights: [
            "Completed the Bincom Academy Python Intermediate training programme",
            "Certificate of Participation — cert no: BA/2025/PHYINT/0004",
        ],
        type: "cert",
    },
];

// ─────────────────────────────────────────────
// PRINCIPLES
// ─────────────────────────────────────────────
export const principles = [
    {
        title: "Clarity over cleverness",
        description: "Code should read like a clear story — easier to maintain and collaborate on.",
        icon: "Eye",
    },
    {
        title: "Ship, then iterate",
        description: "A working product in users' hands beats perfect code in a repo.",
        icon: "Rocket",
    },
    {
        title: "Documentation as respect",
        description: "Well-documented code respects your future self and your teammates.",
        icon: "BookOpen",
    },
    {
        title: "Reliability is a feature",
        description: "Users trust consistent, predictable software. Reliability is non-negotiable.",
        icon: "Shield",
    },
];

// ─────────────────────────────────────────────
// HIGHLIGHTS
// ─────────────────────────────────────────────
export const highlights = [
    {
        stat: "7+",
        label: "Projects Shipped",
        description: "Social platforms, cloud apps, and client websites",
        icon: "Layers",
    },
    {
        stat: "ML",
        label: "Data & ML Workflows",
        description: "EDA, classification, and prediction pipelines",
        icon: "BarChart2",
    },
    {
        stat: "AWS",
        label: "DevOps Learning Journey",
        description: "Cloud, CI/CD, and serverless architecture",
        icon: "Cloud",
    },
    {
        stat: "Cisco",
        label: "Networking Certified",
        description: "Cisco certified + hands-on DevOps scholarship",
        icon: "Zap",
    },
];
