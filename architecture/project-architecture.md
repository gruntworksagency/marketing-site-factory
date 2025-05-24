# Marketing Site Factory - Project Architecture

## 🏗️ Overview

The Marketing Site Factory is a **monorepo system** designed to rapidly create and deploy professional marketing websites for local businesses. The architecture prioritizes **scalability**, **reusability**, and **speed** to achieve 2-3 hour client deployment times.

## 📁 Project Structure

```
marketing-site-factory/
├── 📱 apps/                     # Applications
│   └── website/                 # Template Next.js application
├── 📦 packages/                 # Shared packages
│   ├── ui/                      # Component library
│   ├── utils/                   # Shared utilities
│   └── config/                  # Shared configurations
├── 👥 clients/                  # Generated client projects
│   └── client-{slug}-website/   # Individual client sites
├── 🤖 scripts/                  # Automation scripts
│   ├── new-client.sh            # Client project generator
│   ├── deploy-staging.sh        # Staging deployment
│   └── deploy-prod.sh           # Production deployment
├── 📋 templates/                # Project templates
├── 📚 docs/                     # Documentation
├── 🐳 docker-compose.yml        # Development infrastructure
└── ⚙️  Configuration files      # Root config files
```

## 🔄 Architecture Patterns

### 1. **Monorepo Pattern**
- **Tool**: pnpm workspaces + Turborepo
- **Purpose**: Centralized dependency management and build orchestration
- **Benefits**: Shared components, consistent tooling, efficient CI/CD

### 2. **Component Library Pattern**
- **Location**: `packages/ui/`
- **Structure**: Business-type specific components + base components
- **Benefits**: Consistent UI, rapid development, maintainable codebase

### 3. **Template Cloning Pattern**
- **Process**: Template → Clone → Customize → Deploy
- **Automation**: `scripts/new-client.sh`
- **Benefits**: Standardized setup, reduced errors, faster deployment

## 📦 Package Architecture

### `apps/website/` - Template Application
```
apps/website/
├── src/app/                    # Next.js App Router
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Homepage
│   ├── about/                 # About page
│   ├── contact/               # Contact page
│   └── services/              # Services page
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS config
├── tsconfig.json              # TypeScript config
└── package.json               # Dependencies
```

**Purpose**: Serves as the base template that gets cloned for each new client

### `packages/ui/` - Component Library
```
packages/ui/src/
├── components/base/           # Reusable base components
│   ├── Button.tsx            # Button component
│   ├── Card.tsx              # Card layouts
│   └── Form.tsx              # Form components
├── business-types/           # Business-specific components
│   ├── landscaping/          # Landscaping components
│   ├── hvac/                 # HVAC components
│   ├── roofing/              # Roofing components
│   ├── plumbing/             # Plumbing components
│   └── general/              # General service components
├── types/                    # TypeScript interfaces
│   └── index.ts              # Business types & interfaces
├── templates/                # AI prompts for generation
│   └── ai-prompts.ts         # Component generation prompts
└── index.ts                  # Package exports
```

**Purpose**: Provides reusable, business-type specific components

### `packages/utils/` - Shared Utilities
```
packages/utils/src/
├── seo/                      # SEO utilities
│   ├── schema.ts            # JSON-LD schema generators
│   ├── meta.ts              # Meta tag generators
│   └── sitemap.ts           # Sitemap generation
├── api/                     # API utilities
│   ├── contact.ts           # Contact form handling
│   └── analytics.ts         # Analytics tracking
├── validation/              # Form validation
└── performance/             # Performance optimization
```

**Purpose**: Shared business logic and utilities across all projects

### `packages/config/` - Shared Configuration
```
packages/config/
├── tsconfig.json            # Base TypeScript config
├── eslint.config.js         # ESLint configuration
└── tailwind.config.js       # Base Tailwind config
```

**Purpose**: Consistent configuration across all packages and apps

## 🔧 Component System Architecture

### Business-Type Components
Each business type has specialized components optimized for that industry:

```typescript
// Example: Landscaping Business Type
LandscapingHero: Professional outdoor imagery, seasonal messaging
LandscapingServices: Lawn care, design, irrigation services
LandscapingGallery: Before/after project showcases
LandscapingTestimonials: Customer reviews and ratings
LandscapingContact: Location-based contact information
```

### Base Components
Reusable components that work across all business types:

```typescript
Button: Multiple variants (primary, secondary, outline, ghost)
Card: Layout components for content sections
Form: Contact forms, quote request forms
Navigation: Header navigation, footer navigation
Layout: Page layouts, section layouts
```

## 🗄️ Data Architecture

### Database Schema (PostgreSQL)
```sql
-- Client configuration and settings
Clients: business_name, business_type, settings (JSON), contact_info

-- Lead capture and management  
Contacts: name, email, phone, message, client_slug, source, status

-- Performance and user behavior tracking
Analytics: client_slug, event, page, data (JSON), timestamp
```

### Client Settings Structure
```typescript
interface ClientSettings {
  businessName: string;
  businessType: 'landscaping' | 'hvac' | 'roofing' | 'plumbing' | 'general';
  primaryColor: string;
  secondaryColor: string;
  phone: string;
  email: string;
  address: AddressObject;
  serviceAreas: string[];
  logo?: string;
  socialMedia?: SocialMediaLinks;
}
```

## 🚀 Deployment Architecture

### Development Environment
```
Docker Compose Services:
├── PostgreSQL (port 5432)    # Primary database
├── Redis (port 6379)         # Caching & sessions
└── pgAdmin (port 5050)       # Database management
```

### Production Environment (per client)
```
Vercel Deployment:
├── Next.js Application       # Client website
├── PostgreSQL Database       # Shared or dedicated
├── Redis Cache              # Performance optimization
└── CDN Assets               # Images, static files
```

## 🔄 Development Workflow

### 1. **New Client Creation**
```bash
./scripts/new-client.sh "Business Name" "city-state" "business-type"
```

**Process**:
1. Clone template from `apps/website/`
2. Generate unique client slug
3. Create project in `clients/client-{slug}-website/`
4. Update `package.json` with client-specific name
5. Create `.env.local` with client configuration
6. Generate `src/config/client.ts` with business settings

### 2. **Component Development**
```bash
# Use AI prompts from packages/ui/templates/ai-prompts.ts
# Generate components with AI tools (loveable, v0, etc.)
# Place in appropriate business-type directory
# Export from index files
```

### 3. **Customization**
```bash
# Update client configuration
# Customize business-specific components
# Add/modify content and imagery
# Configure SEO and analytics
```

### 4. **Deployment**
```bash
# Staging
./scripts/deploy-staging.sh

# Production  
./scripts/deploy-prod.sh
```

## 🧩 Component Interaction Flow

### Data Flow
```
Client Settings (Database) 
    ↓
BusinessComponentProps (Interface)
    ↓
Business-Type Components (UI Package)
    ↓
Rendered Client Website (Next.js App)
```

### API Flow
```
Contact Form Submission
    ↓
API Route (/api/contact)
    ↓
Database Storage (Contacts table)
    ↓
Email Notification (Resend)
    ↓
Analytics Tracking (Analytics table)
```

## 🎯 Performance Architecture

### Bundle Optimization
- **Shared Dependencies**: Common packages shared across all client sites
- **Tree Shaking**: Only bundle components actually used
- **Code Splitting**: Business-type components loaded on demand
- **Image Optimization**: Automatic WebP/AVIF conversion

### Caching Strategy
- **Static Generation**: Pre-render pages at build time
- **Incremental Static Regeneration**: Update content without full rebuilds
- **CDN Caching**: Edge caching for static assets
- **Redis Caching**: API response caching and session storage

## 🔐 Security Architecture

### Environment Variables
```bash
# Database credentials
DATABASE_URL="postgresql://..."

# API keys (per client)
RESEND_API_KEY="..."
VERCEL_TOKEN="..."

# Client-specific configuration
NEXT_PUBLIC_CLIENT_SLUG="..."
NEXT_PUBLIC_GA_ID="..."
```

### Data Protection
- **Input Validation**: All form inputs validated and sanitized
- **Rate Limiting**: API endpoints protected against abuse
- **CORS Configuration**: Restricted cross-origin requests
- **Environment Isolation**: Client projects have isolated configurations

## 📊 Monitoring & Analytics

### Performance Monitoring
- **Lighthouse CI**: Automated performance testing
- **Core Web Vitals**: LCP, FID, CLS tracking
- **Bundle Analysis**: Package size monitoring
- **Error Tracking**: Runtime error monitoring

### Business Analytics
- **Form Submissions**: Lead conversion tracking
- **Page Views**: User behavior analysis
- **Performance Metrics**: Site speed and availability
- **SEO Metrics**: Search engine ranking tracking

## 🔧 Development Tools

### Code Quality
```bash
# Linting and formatting
pnpm lint       # Biome linting
pnpm format     # Code formatting

# Type checking
pnpm type-check # TypeScript validation

# Testing
pnpm test       # Unit tests (Vitest)
pnpm test:e2e   # End-to-end tests (Playwright)
```

### Build System
```bash
# Development
pnpm dev        # Start all development servers

# Production builds
pnpm build      # Build all packages and apps

# Database management
pnpm dev:db:start   # Start development database
pnpm dev:db:studio  # Open database management UI
```

## 🎯 Success Metrics

### Technical Metrics
- **Deployment Time**: < 3 hours from intake to live site
- **Performance Score**: Lighthouse 90+ across all metrics
- **Uptime**: 99.9% availability
- **Bundle Size**: < 200KB initial load

### Business Metrics
- **Deployment Success Rate**: 95%+ successful deployments
- **Client Satisfaction**: > 4.5/5 rating
- **Cost Efficiency**: < $20/month per client
- **Development Velocity**: 10+ clients per month capacity

## 🔮 Future Architecture Considerations

### Scalability Enhancements
- **Microservices**: Break out API services for better scaling
- **Multi-tenancy**: Enhanced client isolation and resource sharing
- **Edge Computing**: Deploy client sites closer to their service areas
- **AI Integration**: Automated content generation and optimization

### Feature Additions
- **CMS Integration**: Client-manageable content updates
- **A/B Testing**: Automated conversion optimization
- **Advanced Analytics**: Predictive insights and recommendations
- **White-label Platform**: Partner agency onboarding

---

This architecture is designed to be **maintainable**, **scalable**, and **efficient**, supporting the core goal of rapid client website deployment while maintaining high quality and performance standards. 