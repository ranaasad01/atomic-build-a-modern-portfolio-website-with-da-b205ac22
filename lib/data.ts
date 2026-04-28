export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: number;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export const projects: Project[] = [
  {
    slug: "ai-dashboard",
    title: "AI Analytics Dashboard",
    description:
      "A real-time analytics platform powered by machine learning, featuring interactive charts, predictive insights, and customizable widgets.",
    longDescription:
      "This full-stack analytics dashboard leverages OpenAI's API to provide intelligent insights from your data. Built with Next.js 14 and TypeScript, it features real-time data streaming via WebSockets, interactive D3.js visualizations, and a drag-and-drop widget system. The ML pipeline processes incoming data streams to surface anomalies, trends, and forecasts automatically. Authentication is handled via NextAuth with role-based access control, and all data is persisted in a PostgreSQL database with Prisma ORM.",
    image: "/projects/ai-dashboard.jpg",
    tags: ["Next.js", "TypeScript", "OpenAI", "D3.js", "PostgreSQL", "Prisma"],
    category: "Full Stack",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    year: 2024,
  },
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A high-performance e-commerce solution with server-side rendering, Stripe payments, inventory management, and an admin dashboard.",
    longDescription:
      "A production-ready e-commerce platform built for scale. Features include a blazing-fast storefront with Next.js ISR, Stripe Checkout integration with webhooks, a comprehensive admin dashboard for inventory and order management, and a recommendation engine. The search functionality is powered by Algolia for instant results. Mobile-first design with a 98/100 Lighthouse score. Deployed on Vercel with edge functions for global low-latency performance.",
    image: "/projects/ecommerce.jpg",
    tags: ["Next.js", "Stripe", "Algolia", "Tailwind CSS", "Vercel"],
    category: "Full Stack",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    year: 2024,
  },
  {
    slug: "design-system",
    title: "Component Design System",
    description:
      "A comprehensive React component library with 50+ accessible components, dark mode support, and full Storybook documentation.",
    longDescription:
      "A battle-tested design system used across multiple production applications. Built with React, TypeScript, and Radix UI primitives for accessibility. Every component is fully typed, supports dark/light themes via CSS custom properties, and is tested with Vitest and Testing Library. The Storybook documentation includes interactive examples, prop tables, and usage guidelines. Published to npm and consumed by 3 internal teams.",
    image: "/projects/design-system.jpg",
    tags: ["React", "TypeScript", "Radix UI", "Storybook", "Vitest"],
    category: "Frontend",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    year: 2023,
  },
  {
    slug: "realtime-collab",
    title: "Real-Time Collaboration Tool",
    description:
      "A Notion-inspired collaborative workspace with real-time editing, rich text support, and team management features.",
    longDescription:
      "A collaborative document editor inspired by Notion and Linear. Uses Yjs CRDTs for conflict-free real-time collaboration, with presence indicators showing who's editing what. The rich text editor is built on TipTap with custom extensions for code blocks, embeds, and slash commands. Backend is a Node.js server with Socket.io for WebSocket connections, Redis for pub/sub, and MongoDB for document storage. Supports nested pages, inline comments, and version history.",
    image: "/projects/collab-tool.jpg",
    tags: ["React", "Yjs", "Socket.io", "TipTap", "Redis", "MongoDB"],
    category: "Full Stack",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    year: 2023,
  },
  {
    slug: "mobile-fitness-app",
    title: "Fitness Tracking App",
    description:
      "A cross-platform mobile app for workout tracking, nutrition logging, and progress visualization with AI-powered coaching.",
    longDescription:
      "A React Native fitness application that helps users track workouts, log nutrition, and visualize their progress over time. The AI coaching feature uses GPT-4 to generate personalized workout plans based on user goals and history. Integrates with Apple Health and Google Fit for automatic activity syncing. Features include a custom exercise library with 500+ movements, barcode scanning for food logging, and social challenges with friends.",
    image: "/projects/fitness-app.jpg",
    tags: ["React Native", "Expo", "GPT-4", "HealthKit", "Supabase"],
    category: "Mobile",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    year: 2023,
  },
  {
    slug: "devops-dashboard",
    title: "DevOps Monitoring Dashboard",
    description:
      "A unified monitoring dashboard aggregating metrics from AWS, GitHub Actions, and Datadog with alerting and incident management.",
    longDescription:
      "A centralized DevOps dashboard that aggregates metrics, logs, and deployment status from multiple sources. Integrates with AWS CloudWatch, GitHub Actions, Datadog, and PagerDuty. Features include real-time deployment tracking, cost optimization recommendations, SLA monitoring, and automated incident creation. Built with a microservices architecture using Docker and Kubernetes, with a React frontend and Go backend services.",
    image: "/projects/devops.jpg",
    tags: ["React", "Go", "AWS", "Kubernetes", "Docker", "Datadog"],
    category: "DevOps",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    year: 2022,
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: "React / Next.js", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 92, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "Framer Motion", level: 85, category: "Frontend" },
  { name: "GraphQL", level: 80, category: "Frontend" },
  { name: "React Native", level: 75, category: "Frontend" },
  // Backend
  { name: "Node.js", level: 88, category: "Backend" },
  { name: "PostgreSQL", level: 82, category: "Backend" },
  { name: "Prisma / Drizzle", level: 85, category: "Backend" },
  { name: "Redis", level: 78, category: "Backend" },
  { name: "REST & tRPC", level: 90, category: "Backend" },
  { name: "Python", level: 72, category: "Backend" },
  // Tools & DevOps
  { name: "Git & GitHub", level: 95, category: "Tools" },
  { name: "Docker", level: 80, category: "Tools" },
  { name: "AWS / Vercel", level: 82, category: "Tools" },
  { name: "CI/CD Pipelines", level: 78, category: "Tools" },
  { name: "Figma", level: 75, category: "Tools" },
  { name: "Testing (Vitest)", level: 83, category: "Tools" },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com", icon: "Github" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
  { label: "Twitter", href: "https://twitter.com", icon: "Twitter" },
  { label: "Email", href: "mailto:alex@example.com", icon: "Mail" },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
