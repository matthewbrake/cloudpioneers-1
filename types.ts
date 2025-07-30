/**
 * Represents a key feature, comparing an old way with a new, modern solution.
 */
export interface KeyFeature {
  title: string;
  replaces: string;
  with: string;
}

/**
 * Contains the detailed content for a service's "Deeper Dive" section.
 */
export interface DeeperDive {
  keyFeatures: KeyFeature[];
  modernAdvantage: string[];
  howItWorks: string;
  components: string[];
}

/**
 * Represents a single Frequently Asked Question item.
 */
export interface FaqItem {
  question: string;
  answer: string;
}

/**
 * Represents a specific use case for a service within a particular industry.
 */
export interface IndustryExample {
  industry: string;
  useCase: string;
}

/**
 * Defines the complete data structure for a single service offered by CloudPioneers.
 */
export interface Service {
  id: string; // Unique identifier for routing and keys.
  title: string; // Short title for cards and navigation.
  pageTitle: string; // The main H1 title on the service detail page.
  introduction: string; // The "problem" statement.
  complication?: string; // Optional "why it's a trap" statement.
  solution: string; // The high-level solution offered.
  transformation?: string; // The "after" state or benefit.
  cardImageUrl: string; // URL for the image on the homepage service card.
  imageUrl: string; // URL for the main image on the service detail page.
  deeperDive: DeeperDive; // Detailed breakdown of the service.
  cta: string; // Call-to-action text for the final button.
  faqs: FaqItem[]; // A list of frequently asked questions.
  industryExamples?: IndustryExample[]; // Optional list of industry-specific examples.
}

/**
 * Represents a single step in a process showcase.
 */
export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}
