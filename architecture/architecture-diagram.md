```mermaid
graph TB
    %% Styling
    classDef appBox fill:#e1f5fe,stroke:#01579b,stroke-width:2px
    classDef packageBox fill:#f3e5f5,stroke:#4a148c,stroke-width:2px
    classDef clientBox fill:#e8f5e8,stroke:#1b5e20,stroke-width:2px
    classDef scriptBox fill:#fff3e0,stroke:#e65100,stroke-width:2px
    classDef infraBox fill:#fce4ec,stroke:#880e4f,stroke-width:2px
    classDef dataBox fill:#f1f8e9,stroke:#33691e,stroke-width:2px

    %% Applications
    subgraph APPS["📱 Applications"]
        WEBSITE["🌐 apps/website/<br/>Next.js Template App<br/>- Base template<br/>- App Router<br/>- Tailwind CSS"]
    end
    
    %% Packages
    subgraph PACKAGES["📦 Shared Packages"]
        UI["🎨 packages/ui/<br/>Component Library<br/>- Business components<br/>- Base components<br/>- TypeScript types"]
        UTILS["🔧 packages/utils/<br/>Shared Utilities<br/>- SEO helpers<br/>- API utilities<br/>- Validation"]
        CONFIG["⚙️ packages/config/<br/>Shared Config<br/>- TypeScript<br/>- ESLint<br/>- Tailwind base"]
    end
    
    %% Generated Clients
    subgraph CLIENTS["👥 Generated Clients"]
        CLIENT1["🏢 client-landscaping-website"]
        CLIENT2["🏢 client-hvac-website"]
        CLIENT3["🏢 client-roofing-website"]
        CLIENTN["🏢 client-{slug}-website"]
    end
    
    %% Scripts
    subgraph SCRIPTS["🤖 Automation Scripts"]
        NEWCLIENT["📝 new-client.sh<br/>- Clone template<br/>- Generate config<br/>- Setup environment"]
        DEPLOY_STAGING["🚀 deploy-staging.sh<br/>- Build project<br/>- Deploy to staging<br/>- Run tests"]
        DEPLOY_PROD["🏭 deploy-prod.sh<br/>- Production build<br/>- Deploy to Vercel<br/>- Update DNS"]
    end
    
    %% Infrastructure
    subgraph INFRA["🐳 Development Infrastructure"]
        POSTGRES["🗄️ PostgreSQL<br/>Port 5432<br/>- Client data<br/>- Contacts<br/>- Analytics"]
        REDIS["⚡ Redis<br/>Port 6379<br/>- Caching<br/>- Sessions"]
        PGADMIN["🔍 pgAdmin<br/>Port 5050<br/>- DB Management<br/>- Query interface"]
    end

    %% External Services
    subgraph EXTERNAL["☁️ External Services"]
        VERCEL["▲ Vercel<br/>- Hosting<br/>- CDN<br/>- Domain management"]
        RESEND["📧 Resend<br/>- Email delivery<br/>- Notifications"]
        ANALYTICS_EXT["📊 Analytics<br/>- Google Analytics<br/>- Performance monitoring"]
    end

    %% Relationships - Template Cloning
    WEBSITE -.->|"Clone template"| CLIENT1
    WEBSITE -.->|"Clone template"| CLIENT2
    WEBSITE -.->|"Clone template"| CLIENT3
    WEBSITE -.->|"Clone template"| CLIENTN

    %% Relationships - Package Dependencies
    WEBSITE --> UI
    WEBSITE --> UTILS
    WEBSITE --> CONFIG
    CLIENT1 --> UI
    CLIENT1 --> UTILS
    CLIENT1 --> CONFIG
    CLIENT2 --> UI
    CLIENT2 --> UTILS
    CLIENT2 --> CONFIG

    %% Relationships - Script Usage
    NEWCLIENT -.->|"Generates"| CLIENT1
    NEWCLIENT -.->|"Generates"| CLIENT2
    NEWCLIENT -.->|"Generates"| CLIENTN
    DEPLOY_STAGING -.->|"Deploys"| CLIENT1
    DEPLOY_PROD -.->|"Deploys"| CLIENT1

    %% Relationships - Infrastructure
    WEBSITE --> POSTGRES
    WEBSITE --> REDIS
    CLIENT1 --> POSTGRES
    CLIENT1 --> REDIS

    %% Relationships - External Services
    CLIENT1 --> VERCEL
    CLIENT1 --> RESEND
    CLIENT1 --> ANALYTICS_EXT
    CLIENT2 --> VERCEL
    CLIENT2 --> RESEND

    %% Apply styles
    class WEBSITE appBox
    class UI,UTILS,CONFIG packageBox
    class CLIENT1,CLIENT2,CLIENT3,CLIENTN clientBox
    class NEWCLIENT,DEPLOY_STAGING,DEPLOY_PROD scriptBox
    class POSTGRES,REDIS,PGADMIN infraBox
    class VERCEL,RESEND,ANALYTICS_EXT dataBox
