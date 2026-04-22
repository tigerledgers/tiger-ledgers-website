import type { LucideIcon } from "lucide-react";

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FocusArea {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Partnership {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  linkedin: string;
}

export interface HeroSlide {
  id: string;
  image: string;
  headline: string;
  subtext: string;
}
