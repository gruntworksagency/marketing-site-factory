import NextImage, { ImageProps as NextImageProps } from 'next/image';

// Define props for our OptimizedImage component, extending NextImageProps
export interface OptimizedImageProps extends Omit<NextImageProps, 'alt'> {
  alt: string; // Make alt text mandatory
  // Add any custom props if needed in the future
}

/**
 * OptimizedImage component that wraps Next.js Image.
 * Enforces mandatory `alt` text and sets default loading to `lazy`.
 * Provides a single point for future image-related enhancements (e.g., default sizes).
 */
export function OptimizedImage({
  alt,
  loading = 'lazy', // Default to lazy loading
  sizes = '100vw', // Default sizes, can be overridden
  ...props
}: OptimizedImageProps) {
  if (!alt) {
    console.warn(
      'OptimizedImage: `alt` prop is missing. Please provide a descriptive alt text for accessibility.'
    );
  }

  return (
    <NextImage
      alt={alt} // Pass the mandatory alt text
      loading={loading} // Pass loading behavior (defaults to lazy)
      sizes={sizes} // Pass sizes for responsive images (defaults to 100vw)
      {...props} // Spread the rest of the NextImageProps
    />
  );
} 