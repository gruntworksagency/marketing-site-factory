export interface MetaTagsConfig {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'business.business';
  siteName?: string;
  locale?: string;
  twitterCard?: 'summary' | 'summary_large_image';
}

export interface SiteConfig {
  businessName: string;
  siteUrl: string;
  defaultOgImage?: string;
  locale?: string;
}

export function generateMetaTags(
  config: MetaTagsConfig,
  siteConfig: SiteConfig
) {
  const {
    title,
    description,
    keywords = [],
    canonicalUrl,
    ogImage,
    ogType = 'website',
    siteName = siteConfig.businessName,
    locale = siteConfig.locale || 'en_US',
    twitterCard = 'summary_large_image',
  } = config;

  const fullOgImage = ogImage || siteConfig.defaultOgImage;
  const fullCanonicalUrl = canonicalUrl
    ? `${siteConfig.siteUrl}${canonicalUrl}`
    : siteConfig.siteUrl;

  return {
    title,
    description,
    keywords: keywords.join(', '),
    canonical: fullCanonicalUrl,
    openGraph: {
      title,
      description,
      url: fullCanonicalUrl,
      siteName,
      locale,
      type: ogType,
      ...(fullOgImage && {
        images: [
          {
            url: fullOgImage.startsWith('http')
              ? fullOgImage
              : `${siteConfig.siteUrl}${fullOgImage}`,
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
      }),
    },
    twitter: {
      card: twitterCard,
      title,
      description,
      ...(fullOgImage && {
        images: [
          fullOgImage.startsWith('http')
            ? fullOgImage
            : `${siteConfig.siteUrl}${fullOgImage}`,
        ],
      }),
    },
  };
}

// Generate business-specific page titles
export function generateBusinessPageTitle(
  pageTitle: string,
  businessName: string,
  location?: string,
  separator = '|'
): string {
  const parts = [pageTitle];

  if (location) {
    parts.push(`${location}`);
  }

  parts.push(businessName);

  return parts.join(` ${separator} `);
}

// Generate service page descriptions
export function generateServiceDescription(
  serviceName: string,
  businessName: string,
  location: string,
  businessType: string
): string {
  return `Professional ${serviceName.toLowerCase()} services in ${location} by ${businessName}. Expert ${businessType} contractors with years of experience. Contact us for a free estimate today!`;
}

// Generate location-based page descriptions
export function generateLocationDescription(
  businessName: string,
  businessType: string,
  location: string,
  services: string[]
): string {
  const serviceList = services.slice(0, 3).join(', ');
  return `${businessName} provides expert ${businessType} services in ${location}. Specializing in ${serviceList} and more. Licensed, insured, and locally trusted.`;
}
