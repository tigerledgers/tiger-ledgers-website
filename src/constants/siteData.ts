import {
  BookOpen,
  Wallet,
  FileText,
  Settings2,
  Briefcase,
  Store,
  ShoppingCart,
  User,
  Cpu,
  Users,
  DatabaseZap,
  Sparkles,
} from "lucide-react";
import type {
  NavItem,
  Service,
  FocusArea,
  Partnership,
  TeamMember,
  HeroSlide,
} from "@/types";

export const SITE = {
  name: "Tiger Ledgers",
  tagline: "Strategic Financial Leadership for Growing Businesses",
  description:
    "Accounting, tax, fractional CFO, and finance operations for small businesses, eCommerce, freelancers, and SaaS startups.",
};

export const NAV_ITEMS: NavItem[] = [
  { id: "services", label: "Services", href: "#services" },
  { id: "focus-areas", label: "Focus Areas", href: "#focus-areas" },
  { id: "partnerships", label: "Partnerships", href: "#partnerships" },
  { id: "about", label: "About Us", href: "#about" },
  { id: "blog", label: "Blog", href: "/blog" },
  { id: "contact", label: "Contact Us", href: "#contact" },
];

export const CTA_LABEL = "Schedule a Consultation";
export const CTA_HREF = "#contact";

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "slide-1",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2000&q=80",
    headline: "Strategic Financial Leadership for Growing Businesses",
    subtext: "Fractional CFO expertise and full-service accounting under one roof.",
  },
  {
    id: "slide-2",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=2000&q=80",
    headline: "Numbers That Tell Your Story",
    subtext: "Reporting and insights that turn raw data into confident decisions.",
  },
  {
    id: "slide-3",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=2000&q=80",
    headline: "A Trusted Partner in Your Growth",
    subtext: "Accounting, payroll, and tax — handled with precision and care.",
  },
];

export const SERVICES: Service[] = [
  {
    id: "accounting",
    title: "Accounting",
    description: "General accounting services and financial reporting.",
    icon: BookOpen,
  },
  {
    id: "payroll-expenses",
    title: "Payroll & Expenses",
    description: "Management of employee payments and business expense tracking.",
    icon: Wallet,
  },
  {
    id: "tax-filing",
    title: "Tax Filing",
    description: "Professional tax preparation and submission.",
    icon: FileText,
  },
  {
    id: "software-implementation",
    title: "Accounting Software Implementation",
    description: "Setting up and migrating financial systems.",
    icon: Settings2,
  },
  {
    id: "fractional-cfo",
    title: "Fractional CFO",
    description: "High-level strategic financial leadership on a part-time basis.",
    icon: Briefcase,
  },
];

export const FOCUS_AREAS: FocusArea[] = [
  {
    id: "small-business",
    title: "Small Business",
    description: "Tailored financial support for local and growing businesses.",
    icon: Store,
  },
  {
    id: "ecommerce",
    title: "eCommerce",
    description: "Specific solutions for online retailers and digital marketplaces.",
    icon: ShoppingCart,
  },
  {
    id: "freelancers",
    title: "Freelancers & Contractors",
    description: "Simplified accounting for solo professionals and 1099 workers.",
    icon: User,
  },
  {
    id: "saas",
    title: "SaaS & Software Startups",
    description: "Specialized metrics and scaling support for tech companies.",
    icon: Cpu,
  },
];

export const PARTNERSHIPS: Partnership[] = [
  {
    id: "cpa-outsourcing",
    title: "CPA Outsourcing",
    description: "Partnering with Certified Public Accountants for back-office support.",
    icon: Users,
  },
  {
    id: "data-migration",
    title: "Data Migration & Software Implementation",
    description: "Collaborative tech transitions across financial platforms.",
    icon: DatabaseZap,
  },
  {
    id: "ai-enablement",
    title: "AI Enablement",
    description: "Integrating artificial intelligence into financial workflows.",
    icon: Sparkles,
  },
];

export const TEAM: TeamMember[] = [
  {
    id: "girish",
    name: "Girish Bendodker",
    role: "Co-Founder",
    bio: "Seasoned finance leader bringing decades of experience in accounting, controllership, and strategic CFO advisory to growing businesses.",
    linkedin: "#",
  },
  {
    id: "prashant",
    name: "Prashant",
    role: "Co-Founder",
    bio: "Operations and technology specialist focused on modern accounting systems, automation, and AI-enabled financial workflows.",
    linkedin: "#",
  },
];

export const CONTACT = {
  address: "Address available upon request",
  email: "hello@tigerledgers.com",
  phoneUS: "+1 (555) 000-0000",
  phoneIN: "+91 00000 00000",
};

export const SOCIALS = [
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/" },
  { id: "x", label: "X (Twitter)", href: "https://x.com/" },
] as const;

export const SERVICE_OPTIONS = SERVICES.map((s) => ({
  value: s.id,
  label: s.title,
}));
