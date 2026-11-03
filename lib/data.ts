import { AppWindow, Bot, BrainCircuit, Globe, Wrench, Workflow, type LucideIcon } from "lucide-react";

export const NAV_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Our Process", href: "#process" },
  { label: "Contact Us", href: "#contact" },
];

export type Service = {
  id: string;
  title: string;
  short: string;
  icon: LucideIcon;
  description: string;
  items: string[];
};

export const SERVICES: Service[] = [
  {
    id: "web",
    title: "Website Design & Development",
    short: "Websites",
    icon: Globe,
    description:
      "Fast, responsive websites that explain what you do clearly and turn visitors into enquiries.",
    items: [
      "Business websites",
      "Landing pages",
      "Portfolio websites",
      "E-commerce stores",
      "Website redesign",
      "Responsive development",
    ],
  },
  {
    id: "apps",
    title: "Application Development",
    short: "Apps",
    icon: AppWindow,
    description:
      "Custom software built around how your business works, from web apps to mobile apps and the systems behind them.",
    items: [
      "Custom web application development",
      "Mobile apps (Android & iOS)",
      "SaaS application development",
      "Business management applications",
      "Dashboard and admin panels",
      "API development and integration",
      "Database design and integration",
      "Cross-platform development",
    ],
  },
  {
    id: "chatbots",
    title: "AI Chatbots & AI Agents",
    short: "AI Chatbots",
    icon: Bot,
    description:
      "Assistants that answer customer questions, capture leads, and hand over to your team when it matters.",
    items: [
      "Customer support chatbots",
      "Website chatbots",
      "WhatsApp AI assistants",
      "Lead generation",
      "AI customer interaction",
    ],
  },
  {
    id: "automation",
    title: "Business Process Automation",
    short: "Automation",
    icon: Workflow,
    description:
      "Connect the tools you already use so repetitive work runs on its own and nothing slips through.",
    items: [
      "Workflow automation",
      "Email automation",
      "CRM automation",
      "Lead management",
      "Forms and data processing",
      "n8n, Make and Zapier integrations",
    ],
  },
  {
    id: "ai",
    title: "AI Business Solutions",
    short: "AI Solutions",
    icon: BrainCircuit,
    description:
      "Practical AI that reads documents, pulls out the data you need, and reports back without manual effort.",
    items: [
      "Document processing",
      "Data extraction",
      "Automated reporting",
      "AI business assistants",
      "Custom AI integrations",
    ],
  },
  {
    id: "support",
    title: "Website Maintenance & Support",
    short: "Support",
    icon: Wrench,
    description:
      "Keep your site current, fast, and secure with a team you can message when something needs changing.",
    items: [
      "Content and feature updates",
      "Bug fixing",
      "Performance optimization",
      "Security updates",
      "Ongoing support",
    ],
  },
];

export const TOOLS = ["Next.js", "React", "Tailwind CSS", "WordPress", "n8n", "Make", "Zapier", "WhatsApp API"];

export const CONTACT = {
  phone: "+92-3227038071",
  whatsappUrl: "https://wa.me/923227038071",
  // Add your email here (for example "you@yourdomain.com") and it will appear on the site.
  email: "",
};
