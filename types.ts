export interface KeyFeature {
  title: string;
  replaces: string;
  with: string;
}

export interface DeeperDive {
  keyFeatures: KeyFeature[];
  modernAdvantage: string[];
  howItWorks: string;
  components: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface IndustryExample {
  industry: string;
  useCase: string;
}

export interface Service {
  id: string;
  title: string;
  pageTitle: string;
  introduction: string; // The problem
  complication?: string; // The "why it's a trap"
  solution: string; // Our high-level solution
  transformation?: string; // The "after" state
  imageUrl: string;
  deeperDive: DeeperDive;
  cta: string;
  faqs: FaqItem[];
  industryExamples?: IndustryExample[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}
