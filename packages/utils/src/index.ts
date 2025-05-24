// packages/utils/src/index.ts

// SEO Schema utilities
export * from './seo/schemas';
export * from './seo/meta';

// URL utilities
export * from './url';

// Re-export types for convenience
export type { ServicePageData, FAQItem } from './seo/schemas';
export type { MetaTagsConfig, SiteConfig } from './seo/meta';
