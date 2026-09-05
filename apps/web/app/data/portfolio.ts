// Portfolio data — all content sourced from Ayush's resumes
// No fabricated information, metrics, or links

export interface FileNode {
  name: string;
  type: "file" | "folder";
  children?: FileNode[];
  contentId?: string;
  icon?: string;
}

export const fileTree: FileNode = {
  name: "AYUSH-PORTFOLIO",
  type: "folder",
  children: [
    {
      name: "README.md",
      type: "file",
      contentId: "readme",
      icon: "markdown",
    },
    {
      name: "package.json",
      type: "file",
      contentId: "package-json",
      icon: "json",
    },
    {
      name: "now.md",
      type: "file",
      contentId: "now",
      icon: "markdown",
    },
    {
      name: "architecture.md",
      type: "file",
      contentId: "architecture",
      icon: "markdown",
    },
    {
      name: "src",
      type: "folder",
      children: [
        {
          name: "about.ts",
          type: "file",
          contentId: "about",
          icon: "typescript",
        },
        {
          name: "experience.ts",
          type: "file",
          contentId: "experience-overview",
          icon: "typescript",
        },
        {
          name: "education.ts",
          type: "file",
          contentId: "education",
          icon: "typescript",
        },
        {
          name: "skills.ts",
          type: "file",
          contentId: "skills",
          icon: "typescript",
        },
        {
          name: "achievements.ts",
          type: "file",
          contentId: "achievements",
          icon: "typescript",
        },
        {
          name: "contact.ts",
          type: "file",
          contentId: "contact",
          icon: "typescript",
        },
      ],
    },
    {
      name: "projects",
      type: "folder",
      children: [
        {
          name: "regulatory-ai",
          type: "folder",
          children: [
            {
              name: "README.md",
              type: "file",
              contentId: "regulatory-ai-readme",
              icon: "markdown",
            },
            {
              name: "architecture.ts",
              type: "file",
              contentId: "regulatory-ai-arch",
              icon: "typescript",
            },
            {
              name: "stack.json",
              type: "file",
              contentId: "regulatory-ai-stack",
              icon: "json",
            },
          ],
        },
        {
          name: "recruitment-portal",
          type: "folder",
          children: [
            {
              name: "README.md",
              type: "file",
              contentId: "recruitment-readme",
              icon: "markdown",
            },
            {
              name: "architecture.ts",
              type: "file",
              contentId: "recruitment-arch",
              icon: "typescript",
            },
            {
              name: "stack.json",
              type: "file",
              contentId: "recruitment-stack",
              icon: "json",
            },
          ],
        },
        {
          name: "tatv",
          type: "folder",
          children: [
            {
              name: "README.md",
              type: "file",
              contentId: "tatv-readme",
              icon: "markdown",
            },
            {
              name: "architecture.ts",
              type: "file",
              contentId: "tatv-arch",
              icon: "typescript",
            },
            {
              name: "stack.json",
              type: "file",
              contentId: "tatv-stack",
              icon: "json",
            },
          ],
        },
      ],
    },
    {
      name: "experience",
      type: "folder",
      children: [
        {
          name: "eduteria.ts",
          type: "file",
          contentId: "eduteria",
          icon: "typescript",
        },
        {
          name: "nitp-web-team.ts",
          type: "file",
          contentId: "nitp-web-team",
          icon: "typescript",
        },
      ],
    },
  ],
};

export const profile = {
  name: "Ayush Raj Yadav",
  role: "Software Developer",
  education: {
    degree: "B.Tech, Computer Science & Engineering",
    institute: "National Institute of Technology, Patna",
    cgpa: "8.83",
    years: "2024 – 2028",
  },
  tagline:
    "Building scalable software systems and turning complex problems into reliable products.",
  email: "a4ayushyadav2007@gmail.com",
  phone: "+91-9155523819",
  links: {
    github: "https://github.com/ayushy738",
    linkedin: "https://linkedin.com/in/ayush-raj-yadav-393732326",
    codeforces: "https://codeforces.com/profile/a4ayushyadav2007",
    leetcode: "https://leetcode.com/u/ayush_738/",
  },
  currently: [
    { role: "Software Developer Intern", org: "Eduteria" },
    { role: "Full Stack Developer", org: "NITP Web Team" },
  ],
  technologies: [
    "TypeScript",
    "JavaScript",
    "C++",
    "Python",
    "React",
    "Next.js",
    "Node.js",
    "Fastify",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Prisma",
    "FastAPI",
    "Docker",
    "AWS",
    "Git",
  ],
  interests: [
    "Backend engineering",
    "System design",
    "Distributed systems",
    "Event-driven architecture",
    "AI systems & RAG",
    "Database architecture",
    "Performance engineering",
  ],
};

export const experience = [
  {
    id: "eduteria",
    company: "Eduteria Pvt. Ltd.",
    role: "Software Developer Intern",
    period: "Jun 2026 – Present",
    location: "Remote",
    description:
      "Built scalable backend services for a Quiz & Current Affairs platform.",
    details: [
      "Built scalable backend services for the Quiz & Current Affairs platform using Fastify, PostgreSQL, Prisma, Redis, TypeScript, Next.js, and Turborepo.",
      "Designed REST APIs, database schemas, caching layers, and production-grade architecture.",
      "Implemented RBAC, quiz lifecycle state machine, question bank management, attempt tracking, leaderboards, analytics, admin workflows, and content verification.",
      "Enhanced scalability using Redis caching, PostgreSQL query optimization, indexing, and asynchronous leaderboard processing.",
      "Platform supports 10K concurrent users and leaderboards across 100K+ student records.",
    ],
    stack: [
      "Fastify",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "TypeScript",
      "Next.js",
      "Turborepo",
    ],
    architectureNodes: [
      {
        id: "client",
        label: "Client",
        description: "Next.js frontend application with React-based UI",
      },
      {
        id: "nextjs",
        label: "Next.js",
        description: "Server-side rendering, API routes, frontend framework",
      },
      {
        id: "fastify",
        label: "Fastify API",
        description:
          "High-performance REST API server with modular route handlers, RBAC middleware, and request validation",
      },
      {
        id: "postgres",
        label: "PostgreSQL",
        description:
          "Primary data store — quiz data, user accounts, attempts, scores. Optimized with indexes and query tuning.",
      },
      {
        id: "redis",
        label: "Redis",
        description:
          "Caching layer for session data, leaderboard rankings, and frequently accessed quiz metadata",
      },
      {
        id: "async",
        label: "Async Processing",
        description:
          "Asynchronous leaderboard computation and analytics aggregation for 100K+ records",
      },
    ],
  },
  {
    id: "nitp-web-team",
    company: "NITP Web Team",
    role: "Full Stack Developer",
    period: "Mar 2026 – Present",
    location: "Patna, India",
    description:
      "Developed production-ready features for institute-wide academic and administrative platforms.",
    details: [
      "Developed production-ready features for institute-wide academic and administrative platforms.",
      "Platforms serve 6,000+ students and 300+ faculty members.",
      "Engineered scalable backend components using database design, caching strategies, and modular APIs.",
      "Collaborated in a shared production codebase to deliver secure full-stack features.",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Node.js"],
  },
];

export const projects = [
  {
    id: "regulatory-ai",
    name: "Regulatory AI",
    status: "Active",
    period: "Jun 2026 – Present",
    stack: [
      "Next.js",
      "Vite",
      "FastAPI",
      "PostgreSQL",
      "Supabase",
      "Python",
      "OCR",
      "RAG",
    ],
    overview:
      "An AI-powered regulatory intelligence platform that continuously monitors government sources and turns regulatory documents into searchable, structured knowledge.",
    features: [
      "Monitors 31+ government sources",
      "Automated document ingestion pipeline",
      "OCR-based text extraction from scanned documents",
      "Document classification and categorization",
      "Deadline extraction and regulatory change tracking",
      "RAG-based semantic search with vector embeddings",
      "Context retrieval and source-grounded natural-language querying",
      "Incremental crawling with document versioning",
      "Source checkpointing for reliable ingestion",
      "Knowledge graph generation from regulatory data",
    ],
    architectureNodes: [
      {
        id: "sources",
        label: "Government Sources",
        description:
          "31+ monitored government websites and regulatory portals",
      },
      {
        id: "crawler",
        label: "Crawler / Ingestion",
        description:
          "Incremental crawling engine with source checkpointing and document versioning",
      },
      {
        id: "processing",
        label: "Document Processing",
        description: "Pipeline for extracting, cleaning, and normalizing regulatory documents",
      },
      {
        id: "ocr",
        label: "OCR / Classification",
        description:
          "Optical character recognition for scanned documents, automated classification and categorization",
      },
      {
        id: "structured",
        label: "Structured Documents",
        description:
          "Normalized document store with extracted deadlines, metadata, and change tracking",
      },
      {
        id: "embeddings",
        label: "Embeddings",
        description:
          "Vector embedding generation for semantic search capability",
      },
      {
        id: "retrieval",
        label: "Vector Retrieval",
        description:
          "Similarity search over embedded document chunks for relevant context retrieval",
      },
      {
        id: "rag",
        label: "RAG Engine",
        description:
          "Retrieval-augmented generation for source-grounded natural language querying",
      },
      {
        id: "query",
        label: "Natural Language Query",
        description:
          "User-facing query interface for asking questions about regulatory documents",
      },
    ],
  },
  {
    id: "recruitment-portal",
    name: "Recruitment Management Portal",
    status: "Active",
    period: "Jul 2026 – Present",
    stack: [
      "Next.js",
      "TypeScript",
      "Fastify",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "MinIO",
      "AWS EC2",
    ],
    overview:
      "Official faculty recruitment portal for NIT Patna. A production web application handling secure candidate management, multi-step application workflows, and document processing.",
    features: [
      "Secure candidate profile management",
      "Multi-step application workflows",
      "Role-based access control (RBAC)",
      "Document management with MinIO object storage",
      "Context-aware uploads with presigned URL-based secure document access",
      "Application snapshots for audit trails",
      "Automated document validation",
      "Modular Fastify API architecture",
      "Prisma ORM with PostgreSQL",
      "Docker deployment on AWS EC2",
    ],
    architectureNodes: [
      {
        id: "browser",
        label: "Browser",
        description:
          "Client-side application for candidates and administrators",
      },
      {
        id: "nextjs",
        label: "Next.js Frontend",
        description:
          "Server-rendered frontend with multi-step forms, role-based views, and document upload UI",
      },
      {
        id: "fastify",
        label: "Fastify APIs",
        description:
          "Modular backend API server handling authentication, RBAC, application workflows, and document validation",
      },
      {
        id: "postgres",
        label: "PostgreSQL / Prisma",
        description:
          "Relational database for candidate profiles, applications, and audit data. Managed through Prisma ORM.",
      },
      {
        id: "minio",
        label: "MinIO Object Storage",
        description:
          "S3-compatible object storage for secure document management with presigned URL access",
      },
      {
        id: "docker",
        label: "Docker / AWS EC2",
        description:
          "Containerized deployment on AWS EC2 for production reliability",
      },
    ],
  },
  {
    id: "tatv",
    name: "Tatv — Full-Stack E-Commerce Platform",
    status: "Completed",
    period: "May 2025 – Jul 2025",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Vercel",
      "Razorpay",
    ],
    overview:
      "A full-stack e-commerce platform with product management, secure checkout, and payment integration.",
    features: [
      "Product listing and management",
      "Shopping cart with persistent state",
      "Secure checkout flow",
      "JWT-based authentication",
      "Razorpay payment gateway integration",
      "Modular RESTful backend API",
      "Optimized MongoDB schema design",
      "User and order management",
    ],
    deployment: [
      "AWS EC2 with Ubuntu",
      "Nginx reverse proxy",
      "PM2 process manager",
      "Vercel frontend deployment",
      "Cloudinary for image assets",
    ],
    architectureNodes: [
      {
        id: "frontend",
        label: "React Frontend",
        description:
          "TypeScript React application with product browsing, cart, and checkout flows",
      },
      {
        id: "api",
        label: "Express.js API",
        description:
          "RESTful backend handling auth, products, orders, and payment processing",
      },
      {
        id: "mongodb",
        label: "MongoDB",
        description:
          "Document database with optimized schemas for products, users, and orders",
      },
      {
        id: "razorpay",
        label: "Razorpay",
        description:
          "Payment gateway integration for secure checkout transactions",
      },
      {
        id: "deployment",
        label: "AWS / Vercel",
        description:
          "Backend on AWS EC2 (Ubuntu, Nginx, PM2), frontend on Vercel, images via Cloudinary",
      },
    ],
  },
];

export const education = [
  {
    institution: "National Institute of Technology, Patna",
    degree: "B.Tech., Computer Science and Engineering",
    score: "CGPA: 8.83",
    period: "2024 – 2028",
    current: true,
  },
  {
    institution: "Sarala Birla Public School",
    degree: "Senior Secondary (CBSE)",
    score: "93.6%",
    period: "2024",
  },
  {
    institution: "Bishop Hartmann Academy",
    degree: "Secondary (ICSE)",
    score: "90%",
    period: "2022",
  },
];

export const skills = {
  languages: {
    items: ["C", "C++", "Java", "JavaScript", "TypeScript", "Python"],
  },
  "frameworks-backend": {
    label: "Frameworks / Backend",
    items: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "Fastify",
      "FastAPI",
    ],
  },
  "databases-data": {
    label: "Databases / Data",
    items: ["PostgreSQL", "MongoDB", "Prisma", "Redis"],
  },
  "infrastructure-tools": {
    label: "Infrastructure / Tools",
    items: [
      "AWS EC2",
      "Docker",
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Figma",
      "REST APIs",
    ],
  },
};

// Maps skills to the projects where they are actually used
export const skillProjectMap: Record<string, string[]> = {
  PostgreSQL: ["Eduteria", "Regulatory AI", "Recruitment Portal"],
  Redis: ["Eduteria"],
  Fastify: ["Eduteria", "Recruitment Portal"],
  "Next.js": [
    "Eduteria",
    "Regulatory AI",
    "Recruitment Portal",
    "NITP Web Team",
  ],
  TypeScript: [
    "Eduteria",
    "Recruitment Portal",
    "Tatv",
    "NITP Web Team",
  ],
  Prisma: ["Eduteria", "Recruitment Portal", "NITP Web Team"],
  FastAPI: ["Regulatory AI"],
  Python: ["Regulatory AI"],
  Docker: ["Recruitment Portal"],
  "AWS EC2": ["Recruitment Portal", "Tatv"],
  React: ["Tatv"],
  "React.js": ["Tatv"],
  "Node.js": ["Tatv", "NITP Web Team"],
  "Express.js": ["Tatv"],
  MongoDB: ["Tatv"],
  Razorpay: ["Tatv"],
  "REST APIs": ["Eduteria", "Tatv", "Recruitment Portal"],
  Git: ["Eduteria", "Recruitment Portal", "Tatv", "NITP Web Team", "Regulatory AI"],
  GitHub: ["Eduteria", "Recruitment Portal", "Tatv", "NITP Web Team", "Regulatory AI"],
};

export const gitTimeline = [
  {
    hash: "a7f3e2d",
    date: "Sep 2026",
    message: "Portfolio workspace",
    description: "Built this VS Code-inspired portfolio to document engineering work.",
  },
  {
    hash: "b4c8d1a",
    date: "Jul 2026",
    message: "Recruitment Management Portal",
    description:
      "Official faculty recruitment portal for NIT Patna with secure document management and multi-step workflows.",
  },
  {
    hash: "c9e4f2b",
    date: "Jun 2026",
    message: "Regulatory AI",
    description:
      "AI-powered regulatory intelligence platform with RAG-based semantic search and document processing.",
  },
  {
    hash: "d3a7b5c",
    date: "Jun 2026",
    message: "Eduteria",
    description:
      "Scalable backend for Quiz & Current Affairs platform — Redis caching, async leaderboards, 10K concurrent users.",
  },
  {
    hash: "e6f1c8d",
    date: "Mar 2026",
    message: "NITP Web Team",
    description:
      "Joined the institute web team, building production features for 6,000+ students and 300+ faculty.",
  },
  {
    hash: "f2d9a4e",
    date: "May 2025",
    message: "Tatv",
    description:
      "Full-stack e-commerce platform with Razorpay payments, JWT auth, and AWS deployment.",
  },
];

export const terminalCommands: Record<
  string,
  { output: string; action?: string }
> = {
  help: {
    output: `Available commands:

  whoami          Who is Ayush?
  about           Open about.ts
  projects        List projects
  experience      Open experience
  skills          Open skills.ts
  education       Open education.ts
  contact         Contact information
  achievements    View achievements
  github          Open GitHub profile
  linkedin        Open LinkedIn profile
  clear           Clear terminal
  ls              List files
  pwd             Print working directory
  cat role.txt    Print current role
  sudo hire ayush 🤫`,
  },
  whoami: {
    output: "Ayush Raj Yadav",
  },
  about: {
    output: "Opening about.ts...",
    action: "open:about",
  },
  projects: {
    output: `regulatory-ai/
recruitment-portal/
tatv/

Type a project name to explore it.`,
  },
  "regulatory-ai": {
    output: "Opening regulatory-ai/README.md...",
    action: "open:regulatory-ai-readme",
  },
  "recruitment-portal": {
    output: "Opening recruitment-portal/README.md...",
    action: "open:recruitment-readme",
  },
  tatv: {
    output: "Opening tatv/README.md...",
    action: "open:tatv-readme",
  },
  experience: {
    output: "Opening experience.ts...",
    action: "open:experience-overview",
  },
  skills: {
    output: "Opening skills.ts...",
    action: "open:skills",
  },
  education: {
    output: "Opening education.ts...",
    action: "open:education",
  },
  contact: {
    output: `$ ./contact

  Email:    ayushy.ug24.cs@nitp.ac.in
  Phone:    +91-9155523819
  GitHub:   github.com/ayushy738
  LinkedIn: linkedin.com/in/ayush-raj-yadav-393732326
  CF:       codeforces.com/profile/a4ayushyadav2007`,
    action: "open:contact",
  },
  achievements: {
    output: `Achievements:
  ● Pupil on Codeforces — codeforces.com/profile/a4ayushyadav2007`,
    action: "open:achievements",
  },
  github: {
    output: "Opening GitHub...",
    action: "link:https://github.com/ayushy738",
  },
  linkedin: {
    output: "Opening LinkedIn...",
    action: "link:https://linkedin.com/in/ayush-raj-yadav-393732326",
  },
  ls: {
    output: `README.md
package.json
now.md
architecture.md
src/
projects/
experience/`,
  },
  pwd: {
    output: "/home/ayush/portfolio",
  },
  "cat role.txt": {
    output: `Software Developer
Computer Science & Engineering
NIT Patna`,
  },
  "git status": {
    output: `On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean`,
  },
  "git log": {
    output: `commit a7f3e2d (HEAD -> main)
Author: Ayush Raj Yadav
Date:   Sep 2026

    Portfolio workspace

commit b4c8d1a
    Recruitment Management Portal

commit c9e4f2b
    Regulatory AI

commit d3a7b5c
    Eduteria`,
  },
  "sudo hire ayush": {
    output: `[sudo] password for visitor: ••••••••
Permission granted. ✓
Sending offer letter to ayushy.ug24.cs@nitp.ac.in...`,
  },
  neofetch: {
    output: `       ╭───────────────╮
       │  ayush@nitp   │
       ╰───────────────╯
  OS:      Portfolio OS v1.0
  Host:    NIT Patna
  Kernel:  TypeScript 5.x
  Shell:   fastify/node
  DE:      VS Code Dark+
  CPU:     Problem-solving cores
  Memory:  Redis-backed`,
  },
};

// Searchable content index
export interface SearchResult {
  title: string;
  context: string;
  fileId: string;
  fileName: string;
}

export const searchIndex: { text: string; title: string; fileId: string; fileName: string }[] = [
  { text: "postgresql postgres database", title: "PostgreSQL", fileId: "skills", fileName: "skills.ts" },
  { text: "postgresql postgres eduteria quiz", title: "Eduteria — PostgreSQL", fileId: "eduteria", fileName: "eduteria.ts" },
  { text: "postgresql postgres regulatory ai", title: "Regulatory AI — PostgreSQL", fileId: "regulatory-ai-readme", fileName: "regulatory-ai/README.md" },
  { text: "postgresql postgres recruitment portal", title: "Recruitment Portal — PostgreSQL", fileId: "recruitment-readme", fileName: "recruitment-portal/README.md" },
  { text: "redis caching cache", title: "Redis", fileId: "skills", fileName: "skills.ts" },
  { text: "redis caching eduteria leaderboard", title: "Eduteria — Redis Caching", fileId: "eduteria", fileName: "eduteria.ts" },
  { text: "rag retrieval augmented generation ai", title: "RAG — Regulatory AI", fileId: "regulatory-ai-readme", fileName: "regulatory-ai/README.md" },
  { text: "rag ai semantic search vector", title: "Architecture — RAG", fileId: "architecture", fileName: "architecture.md" },
  { text: "fastify api backend", title: "Fastify", fileId: "skills", fileName: "skills.ts" },
  { text: "fastify eduteria api rest", title: "Eduteria — Fastify API", fileId: "eduteria", fileName: "eduteria.ts" },
  { text: "fastify recruitment portal api", title: "Recruitment Portal — Fastify", fileId: "recruitment-readme", fileName: "recruitment-portal/README.md" },
  { text: "next.js react frontend", title: "Next.js / React", fileId: "skills", fileName: "skills.ts" },
  { text: "docker deployment aws ec2", title: "Docker / AWS", fileId: "skills", fileName: "skills.ts" },
  { text: "docker deployment recruitment portal", title: "Recruitment Portal — Docker", fileId: "recruitment-readme", fileName: "recruitment-portal/README.md" },
  { text: "minio object storage presigned url document", title: "MinIO — Recruitment Portal", fileId: "recruitment-readme", fileName: "recruitment-portal/README.md" },
  { text: "ocr document processing classification", title: "OCR — Regulatory AI", fileId: "regulatory-ai-readme", fileName: "regulatory-ai/README.md" },
  { text: "typescript javascript", title: "TypeScript / JavaScript", fileId: "skills", fileName: "skills.ts" },
  { text: "python fastapi", title: "Python / FastAPI", fileId: "skills", fileName: "skills.ts" },
  { text: "prisma orm database schema", title: "Prisma ORM", fileId: "skills", fileName: "skills.ts" },
  { text: "mongodb nosql", title: "MongoDB", fileId: "skills", fileName: "skills.ts" },
  { text: "razorpay payment ecommerce tatv", title: "Tatv — Razorpay", fileId: "tatv-readme", fileName: "tatv/README.md" },
  { text: "react ecommerce tatv cart checkout", title: "Tatv — E-Commerce", fileId: "tatv-readme", fileName: "tatv/README.md" },
  { text: "ayush raj yadav software developer", title: "About Ayush", fileId: "about", fileName: "about.ts" },
  { text: "nit patna education cgpa computer science", title: "Education", fileId: "education", fileName: "education.ts" },
  { text: "contact email linkedin github", title: "Contact", fileId: "contact", fileName: "contact.ts" },
  { text: "codeforces pupil competitive programming", title: "Achievements — Codeforces", fileId: "achievements", fileName: "achievements.ts" },
  { text: "nitp web team full stack developer", title: "NITP Web Team", fileId: "nitp-web-team", fileName: "nitp-web-team.ts" },
  { text: "eduteria quiz platform leaderboard rbac", title: "Eduteria", fileId: "eduteria", fileName: "eduteria.ts" },
  { text: "system design architecture api database caching", title: "How I Build", fileId: "architecture", fileName: "architecture.md" },
  { text: "performance optimization indexing query concurrency", title: "Performance Engineering", fileId: "architecture", fileName: "architecture.md" },
  { text: "rbac role based access control authentication", title: "RBAC / Auth", fileId: "architecture", fileName: "architecture.md" },
  { text: "asynchronous processing distributed event driven", title: "Async Processing", fileId: "architecture", fileName: "architecture.md" },
];

export const commandPaletteItems = [
  { label: "Open README", fileId: "readme", icon: "file" },
  { label: "Open About", fileId: "about", icon: "user" },
  { label: "Open Experience", fileId: "experience-overview", icon: "briefcase" },
  { label: "Open Eduteria", fileId: "eduteria", icon: "file" },
  { label: "Open NITP Web Team", fileId: "nitp-web-team", icon: "file" },
  { label: "Open Regulatory AI", fileId: "regulatory-ai-readme", icon: "folder" },
  { label: "Open Recruitment Portal", fileId: "recruitment-readme", icon: "folder" },
  { label: "Open Tatv", fileId: "tatv-readme", icon: "folder" },
  { label: "Open Skills", fileId: "skills", icon: "code" },
  { label: "Open Education", fileId: "education", icon: "graduation-cap" },
  { label: "Open Achievements", fileId: "achievements", icon: "trophy" },
  { label: "Open Contact", fileId: "contact", icon: "mail" },
  { label: "Open Architecture", fileId: "architecture", icon: "git-branch" },
  { label: "Open Now", fileId: "now", icon: "clock" },
  { label: "View Git Timeline", fileId: "git-timeline", icon: "git-commit-horizontal" },
  { label: "Search Portfolio", fileId: "search", icon: "search" },
  { label: "Toggle Terminal", fileId: "toggle-terminal", icon: "terminal" },
  { label: "Download Resume", fileId: "download-resume", icon: "file" },
  { label: "Enable Hiring Mode", fileId: "enable-hiring-mode", icon: "user" },
  { label: "Disable Hiring Mode", fileId: "disable-hiring-mode", icon: "code" },
];
