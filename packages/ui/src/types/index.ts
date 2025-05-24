export interface BusinessComponentProps {
  clientSlug: string;
  content?: ContentBlock;
  settings?: ClientSettings;
  className?: string;
}

export interface ContentBlock {
  id: string;
  type: 'hero' | 'services' | 'testimonials' | 'gallery' | 'contact' | 'about';
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  images?: string[];
  cta?: {
    text: string;
    href: string;
    variant?: 'primary' | 'secondary' | 'outline';
  };
  items?: Array<{
    id: string;
    title: string;
    description?: string;
    image?: string;
    price?: string;
    features?: string[];
  }>;
}

export interface ClientSettings {
  businessName: string;
  businessType: 'landscaping' | 'hvac' | 'roofing' | 'plumbing' | 'general';
  primaryColor: string;
  secondaryColor: string;
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  serviceAreas: string[];
  logo?: string;
  socialMedia?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export interface BusinessType {
  id: string;
  name: string;
  description: string;
  heroVariants: string[];
  serviceCategories: string[];
  ctaTemplates: string[];
}
