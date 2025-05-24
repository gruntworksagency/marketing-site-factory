import type { ClientSettings } from '@marketing-factory/ui';

// Use ClientSettings for business data as it's comprehensive
export function generateOrganizationSchema(
  settings: ClientSettings,
  siteUrl: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: settings.businessName,
    url: siteUrl,
    logo: settings.logo ? `${siteUrl}${settings.logo}` : undefined, // Assuming logo path is relative
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: settings.phone,
      contactType: 'customer service',
    },
    // Add other relevant Organization properties like address, sameAs (social media)
  };
}

export function generateLocalBusinessSchema(
  settings: ClientSettings,
  siteUrl: string
) {
  // Basic GeoCoordinates from address (can be improved with actual lat/long)
  const geo = settings.address
    ? {
      '@type': 'GeoCoordinates',
      // Placeholder: "latitude": "0", "longitude": "0"
      // In a real app, you'd get this from an API or client input
    }
    : undefined;

  // Map business type to proper schema type
  const getBusinessSchemaType = (businessType: string) => {
    switch (businessType) {
      case 'landscaping':
        return 'LandscapingBusiness';
      case 'hvac':
        return 'HVACBusiness';
      case 'roofing':
        return 'RoofingContractor';
      case 'plumbing':
        return 'PlumbingService';
      default:
        return 'ProfessionalService';
    }
  };

  return {
    '@context': 'https://schema.org',
    '@type': getBusinessSchemaType(settings.businessType),
    name: settings.businessName,
    url: siteUrl,
    image: settings.logo ? `${siteUrl}${settings.logo}` : undefined,
    telephone: settings.phone,
    email: settings.email,
    address: settings.address
      ? {
        '@type': 'PostalAddress',
        streetAddress: settings.address.street,
        addressLocality: settings.address.city,
        addressRegion: settings.address.state,
        postalCode: settings.address.zip,
      }
      : undefined,
    geo: geo,
    priceRange: '$$', // Placeholder, make configurable
    areaServed: settings.serviceAreas.map((area: string) => ({
      '@type': 'Place',
      name: area,
    })),
    // Potentially add openingHours, paymentAccepted, etc.
  };
}

// Example for a specific service page
export interface ServicePageData {
  serviceName: string;
  serviceDescription: string;
  // Potentially category, offers, etc.
}

export function generateServiceSchema(
  serviceData: ServicePageData,
  settings: ClientSettings,
  siteUrl: string,
  servicePagePath: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: serviceData.serviceName, // Or a more specific category
    name: serviceData.serviceName,
    description: serviceData.serviceDescription,
    url: `${siteUrl}${servicePagePath}`,
    provider: {
      '@type': 'Organization', // Or the specific LocalBusiness type
      name: settings.businessName,
      url: siteUrl,
    },
    areaServed: settings.serviceAreas.map((area: string) => ({
      '@type': 'Place',
      name: area,
    })),
    // Add offers, serviceOutput, etc.
  };
}

// Generate breadcrumb schema for navigation
export function generateBreadcrumbSchema(
  breadcrumbs: Array<{ name: string; url: string }>,
  siteUrl: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`,
    })),
  };
}

// Generate FAQ schema for common questions
export interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
