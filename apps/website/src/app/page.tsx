export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-neutral-900">
          Welcome to the Marketing Site Factory
        </h1>
        <p className="text-lg text-neutral-600 mb-8">
          This is the template website for creating professional marketing sites
          for local businesses.
        </p>
        <div className="space-y-4">
          <p className="text-sm text-neutral-500">
            Template configured for business types: Landscaping, HVAC, Roofing,
            Plumbing, and General Services
          </p>
          <div className="flex gap-4 justify-center">
            <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">
              Next.js 14
            </span>
            <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">
              Tailwind CSS
            </span>
            <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">
              TypeScript
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
