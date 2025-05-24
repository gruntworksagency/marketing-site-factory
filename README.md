# Marketing Site Factory

A comprehensive monorepo system for rapidly creating and deploying professional marketing websites for local businesses. Designed to achieve 2-3 hour client deployment times with 95%+ success rates.

## 🏗️ Architecture

For detailed system architecture documentation:

- **[📋 Project Architecture](architecture/project-architecture.md)** - Comprehensive overview of the monorepo structure, component system, and data flow
- **[📊 Architecture Diagram](architecture/architecture-diagram.md)** - Visual representation of the complete system architecture  
- **[🔄 Data Flow Diagram](architecture/data-flow-diagram.md)** - Sequence diagram showing user interactions and data processing
- **[🧩 Component Architecture](architecture/component-architecture.md)** - UI package structure and component relationships

For testing Mermaid diagrams: **[🧪 Test Diagram](architecture/test-diagram.md)**

## 🚀 Quick Start

### Prerequisites
- Node.js v20+
- pnpm v8.6+
- Docker
- Vercel CLI

### Setup
1. **Clone and Install**
   ```bash
   git clone <repo> marketing-site-factory
   cd marketing-site-factory
   pnpm install
   ```

2. **Environment Setup**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

3. **Start Development Database**
   ```bash
   pnpm dev:db:start
   ```

4. **Run Development Server**
   ```bash
   pnpm dev
   ```

## 📁 Project Structure

```
marketing-site-factory/
├── apps/
│   └── website/              # Template Next.js application
├── packages/
│   ├── ui/                   # Shared component library
│   ├── utils/                # Shared utilities
│   └── config/               # Shared configurations
├── clients/                  # Generated client projects
├── scripts/                  # Automation scripts
│   ├── new-client.sh        # Client project generator
│   ├── deploy-staging.sh    # Staging deployment
│   └── deploy-prod.sh       # Production deployment
└── docs/                    # Documentation
```

## 🏗️ Creating New Client Projects

```bash
./scripts/new-client.sh "Business Name" "city-state" "business-type"
```

**Example:**
```bash
./scripts/new-client.sh "Acme Landscaping" "phoenix-az" "landscaping"
```

**Supported Business Types:**
- `landscaping`
- `hvac`
- `roofing`
- `plumbing`
- `general`

## 🧪 Testing

```bash
# Unit tests
pnpm test

# E2E tests
pnpm test:e2e

# Type checking
pnpm type-check

# Linting and formatting
pnpm lint
pnpm format
```

## 🚀 Deployment

### Staging
```bash
cd clients/client-<slug>-website
../../scripts/deploy-staging.sh
```

### Production
```bash
cd clients/client-<slug>-website
../../scripts/deploy-prod.sh
```

## 🎯 Success Criteria

- **2-3 hour client deployment** from intake to live site
- **95%+ deployment success rate** even for junior developers
- **Lighthouse 90+ scores** for performance, accessibility, and SEO
- **Zero accessibility violations** on critical paths
- **<$20/month per client** hosting and infrastructure costs
- **99.9% uptime**
- **>4.5/5 client satisfaction** post-handoff

## 🛠️ Development Commands

| Command             | Description                   |
| ------------------- | ----------------------------- |
| `pnpm dev`          | Start all development servers |
| `pnpm build`        | Build all packages and apps   |
| `pnpm lint`         | Lint all code                 |
| `pnpm format`       | Format all code with Biome    |
| `pnpm test`         | Run unit tests                |
| `pnpm test:e2e`     | Run E2E tests                 |
| `pnpm type-check`   | TypeScript type checking      |
| `pnpm dev:db:start` | Start development database    |
| `pnpm dev:db:stop`  | Stop development database     |
| `pnpm dev:db:reset` | Reset development database    |

## 📊 Component Library

### Business-Type Components
Each business type has specialized components:

- **Landscaping**: Hero sections with outdoor imagery, seasonal service highlights, before/after galleries
- **HVAC**: Emergency service emphasis, seasonal messaging, energy efficiency focus
- **Roofing**: Storm damage messaging, insurance claim assistance, material showcases
- **Plumbing**: Emergency availability, service area coverage, fixture galleries
- **General**: Flexible templates adaptable to various service industries

### Base Components
- Button (multiple variants and sizes)
- Card layouts
- Forms and inputs
- Navigation components
- SEO optimization components

## 🗄️ Database Schema

- **Contacts**: Lead capture and management
- **Clients**: Business configuration and settings
- **Analytics**: Event tracking and performance metrics

## 🎨 Styling System

Built with Tailwind CSS featuring:
- Consistent color palette (primary/neutral with proper shades)
- Responsive design patterns
- Accessibility-first approach
- Mobile-first responsive design

## 📈 Performance Standards

- **Lighthouse Performance**: 90+
- **Lighthouse Accessibility**: 95+
- **Core Web Vitals**: Optimized LCP, FID, and CLS
- **Bundle size**: Monitored and optimized
- **Image optimization**: Automatic WebP/AVIF conversion

## 🔧 Configuration

Each client project includes:
- Environment-specific configurations
- Business type customizations
- SEO and schema markup
- Analytics integration
- Contact form handling

## 📚 Documentation

- [Implementation Guide](docs/IMPLEMENTATION_GUIDE.md) - Detailed setup instructions
- [Implementation Checklist](docs/IMPLEMENTATION_CHECKLIST.md) - Progress tracking
- [Project Architecture](architecture/project-architecture.md) - System architecture overview
- [Architecture Diagrams](architecture/) - Visual system diagrams
- Component documentation in Storybook

## 🤝 Contributing

1. Follow the implementation guide for development standards
2. Use conventional commits for version control
3. Test thoroughly before submitting PRs
4. Update documentation for new features

## 📄 License

Private - All rights reserved 