export type EditorialCategory =
  | "market-signals"
  | "investment-guide"
  | "zone-profile"
  | "seller-guide";

export type EditorialArticle = {
  id: string;
  category: EditorialCategory;
  title: string;
  excerpt: string;
  readingTimeMin: number;
  publishedAt: string; // ISO date string
  featured?: boolean;
};

export type EditorialHub = {
  eyebrow: string;
  title: string;
  intro: string;
  articles: EditorialArticle[];
  ctaLabel: string;
};
