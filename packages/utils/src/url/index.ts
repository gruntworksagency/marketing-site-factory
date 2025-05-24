/**
 * Generate a URL-friendly slug from a string
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

/**
 * Generate a business slug from business name and location
 */
export function generateBusinessSlug(
  businessName: string,
  location?: string
): string {
  const namePart = businessName
    .replace(/\b(inc|llc|corp|ltd|company|co)\b\.?/gi, '')
    .trim();
  const parts = [namePart];

  if (location) {
    parts.push(location);
  }

  return generateSlug(parts.join(' '));
}

/**
 * Generate service page URL
 */
export function generateServiceUrl(
  serviceName: string,
  location?: string
): string {
  const parts = [generateSlug(serviceName)];

  if (location) {
    parts.push(generateSlug(location));
  }

  return `/${parts.join('/')}`;
}

/**
 * Generate location page URL
 */
export function generateLocationUrl(
  location: string,
  businessType?: string
): string {
  const parts = [];

  if (businessType && businessType !== 'general') {
    parts.push(generateSlug(businessType));
  }

  parts.push(generateSlug(location));

  return `/${parts.join('/')}`;
}

/**
 * Validate and clean URL paths
 */
export function cleanUrlPath(path: string): string {
  return path
    .replace(/\/+/g, '/') // Remove duplicate slashes
    .replace(/^\/+|\/+$/g, '') // Remove leading/trailing slashes
    .toLowerCase();
}

/**
 * Generate canonical URL
 */
export function generateCanonicalUrl(baseUrl: string, path: string): string {
  const cleanBase = baseUrl.replace(/\/+$/, ''); // Remove trailing slashes
  const cleanPath = cleanUrlPath(path);

  return cleanPath ? `${cleanBase}/${cleanPath}` : cleanBase;
}

/**
 * Extract location info from address string
 */
export function extractLocationFromAddress(address: {
  city: string;
  state: string;
}): string {
  return `${address.city}, ${address.state}`;
}

/**
 * Generate city-state slug for URLs
 */
export function generateCityStateSlug(city: string, state: string): string {
  return generateSlug(`${city} ${state}`);
}
