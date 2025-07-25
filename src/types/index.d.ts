// Project types
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  category: 'frontend' | 'fullstack' | 'backend';
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Contact form types
export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Skill types
export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'other';
  icon?: string;
}

// Experience types
export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: Date;
  endDate?: Date;
  current: boolean;
  description: string;
  technologies: string[];
}

// Social links types
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

// Navigation types
export interface NavItem {
  name: string;
  href: string;
  icon?: string;
}

// Animation types
export interface AnimationProps {
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

// Theme types
export type Theme = 'dark' | 'light';

// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// User types (for admin)
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
  createdAt: Date;
  updatedAt: Date;
}

// Component props types
export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Page props types
export interface PageProps {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

// Metadata types
export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
}

// Form validation types
export interface FormErrors {
  [key: string]: string | undefined;
}

// Loading states
export interface LoadingState {
  isLoading: boolean;
  error?: string;
}

// Filter types
export interface ProjectFilter {
  category?: 'all' | 'frontend' | 'fullstack' | 'backend';
  search?: string;
  featured?: boolean;
}

// Animation variants for Framer Motion
export interface MotionVariants {
  hidden: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
  };
  visible: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
    transition?: {
      duration?: number;
      delay?: number;
      ease?: string;
    };
  };
}

// QR Code types
export interface QRCodeOptions {
  width: number;
  height: number;
  color: {
    dark: string;
    light: string;
  };
}

// Email service types
export interface EmailData {
  to: string;
  subject: string;
  html: string;
  from?: string;
}

// File upload types
export interface FileUpload {
  file: File;
  preview?: string;
  progress?: number;
  error?: string;
}

// Search types
export interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'project' | 'experience' | 'skill';
  url: string;
}

// Notification types
export interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

// Analytics types
export interface AnalyticsEvent {
  event: string;
  category: string;
  label?: string;
  value?: number;
}

// SEO types
export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  image: string;
  url: string;
  type: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
}

// Database types
export interface DatabaseConfig {
  url: string;
  maxConnections: number;
  ssl: boolean;
}

// Environment variables
export interface EnvConfig {
  DATABASE_URL: string;
  NEXTAUTH_SECRET: string;
  NEXTAUTH_URL: string;
  GITHUB_ID: string;
  GITHUB_SECRET: string;
  EMAILJS_SERVICE_ID: string;
  EMAILJS_TEMPLATE_ID: string;
  EMAILJS_PUBLIC_KEY: string;
}

// Utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// Global declarations
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export {};

