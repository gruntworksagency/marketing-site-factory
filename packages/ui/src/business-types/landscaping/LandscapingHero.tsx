import { Button } from '../../components/base/Button';
import type { BusinessComponentProps } from '../../types';

export function LandscapingHero({
  clientSlug,
  content,
  settings,
  className,
}: BusinessComponentProps) {
  const businessName = settings?.businessName || 'Professional Landscaping';
  const phone = settings?.phone || '(555) 123-4567';

  return (
    <section
      className={`relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-800 to-green-600 ${className}`}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {content?.title || `Transform Your Landscape with ${businessName}`}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          {content?.description ||
            'Professional landscaping services that bring your outdoor vision to life. Serving your community with quality and expertise.'}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary-500 hover:bg-primary-600">
            Get Free Quote
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-green-800"
          >
            Call {phone}
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto text-center">
          <div>
            <div className="text-3xl font-bold">15+</div>
            <div className="text-sm">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold">500+</div>
            <div className="text-sm">Projects Completed</div>
          </div>
          <div>
            <div className="text-3xl font-bold">100%</div>
            <div className="text-sm">Satisfaction Guaranteed</div>
          </div>
        </div>
      </div>
    </section>
  );
}
