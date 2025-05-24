%% Marketing Site Factory - Component Architecture Diagram
%% This diagram shows the structure of the UI package and how components
%% are organized by business type and functionality

```mermaid
graph TD
    %% Styling
    classDef baseComponent fill:#e3f2fd,stroke:#1565c0,stroke-width:2px
    classDef businessComponent fill:#e8f5e8,stroke:#2e7d32,stroke-width:2px
    classDef typeInterface fill:#fff3e0,stroke:#f57c00,stroke-width:2px
    classDef templateComponent fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px

    %% Base Components Layer
    subgraph BASE_COMPONENTS["🧱 components/base/"]
        BUTTON["🔘 Button.tsx<br/>- Primary, Secondary<br/>- Outline, Ghost<br/>- Small, Medium, Large"]
        CARD["🃏 Card.tsx<br/>- Layout containers<br/>- Content sections<br/>- Responsive design"]
        FORM["📝 Form.tsx<br/>- Contact forms<br/>- Input validation<br/>- Error handling"]
        NAVIGATION["🧭 Navigation.tsx<br/>- Header navigation<br/>- Footer navigation<br/>- Mobile responsive"]
        LAYOUT["📐 Layout.tsx<br/>- Page layouts<br/>- Section layouts<br/>- Grid systems"]
    end
    
    %% Landscaping Components
    subgraph LANDSCAPING["🌿 landscaping/"]
        L_HERO["🌅 LandscapingHero.tsx<br/>- Outdoor imagery<br/>- Seasonal messaging<br/>- Service areas"]
        L_SERVICES["🛠️ LandscapingServices.tsx<br/>- Lawn care<br/>- Design services<br/>- Irrigation"]
        L_GALLERY["🖼️ LandscapingGallery.tsx<br/>- Before/after images<br/>- Project showcase<br/>- Filtering options"]
        L_TESTIMONIALS["💬 LandscapingTestimonials.tsx<br/>- Customer reviews<br/>- Star ratings<br/>- Local feedback"]
    end
    
    %% HVAC Components
    subgraph HVAC["🌡️ hvac/"]
        H_HERO["🌅 HVACHero.tsx<br/>- Emergency services<br/>- Seasonal focus<br/>- 24/7 availability"]
        H_SERVICES["🛠️ HVACServices.tsx<br/>- Repair services<br/>- Installation<br/>- Maintenance plans"]
        H_EMERGENCY["🚨 HVACEmergency.tsx<br/>- Emergency hotline<br/>- Quick response<br/>- Service areas"]
    end
    
    %% Roofing Components
    subgraph ROOFING["🏠 roofing/"]
        R_HERO["🌅 RoofingHero.tsx<br/>- Storm damage<br/>- Insurance claims<br/>- Free inspections"]
        R_SERVICES["🛠️ RoofingServices.tsx<br/>- Repair services<br/>- Replacement<br/>- Material options"]
        R_MATERIALS["🧱 RoofingMaterials.tsx<br/>- Shingles showcase<br/>- Metal roofing<br/>- Tile options"]
    end
    
    %% General Components
    subgraph GENERAL["⚙️ general/"]
        G_HERO["🌅 GeneralHero.tsx<br/>- Flexible messaging<br/>- Service focus<br/>- Local emphasis"]
        G_SERVICES["🛠️ GeneralServices.tsx<br/>- Customizable services<br/>- Flexible layout<br/>- Industry agnostic"]
    end
    
    %% Types and Interfaces
    subgraph TYPES["📝 types/"]
        BUSINESS_PROPS["🏗️ BusinessComponentProps<br/>- clientSlug: string<br/>- content?: ContentBlock<br/>- settings?: ClientSettings"]
        CLIENT_SETTINGS["⚙️ ClientSettings<br/>- businessName<br/>- businessType<br/>- contact info<br/>- branding"]
        CONTENT_BLOCK["📄 ContentBlock<br/>- title, subtitle<br/>- description, images<br/>- CTA buttons"]
    end
    
    %% AI Templates
    subgraph TEMPLATES["🤖 templates/"]
        AI_PROMPTS["📋 ai-prompts.ts<br/>- Landscaping prompts<br/>- HVAC prompts<br/>- Roofing prompts<br/>- Plumbing prompts"]
    end
    
    %% Package Exports
    INDEX["📦 index.ts<br/>Package Entry Point<br/>- Export all components<br/>- Export types<br/>- Export templates"]

    %% Component Inheritance and Usage
    BUSINESS_PROPS --> L_HERO
    BUSINESS_PROPS --> L_SERVICES
    BUSINESS_PROPS --> H_HERO
    BUSINESS_PROPS --> R_HERO
    BUSINESS_PROPS --> G_HERO
    
    CLIENT_SETTINGS --> BUSINESS_PROPS
    CONTENT_BLOCK --> BUSINESS_PROPS
    
    %% Base Component Usage
    BUTTON --> L_HERO
    BUTTON --> H_HERO
    BUTTON --> R_HERO
    CARD --> L_SERVICES
    CARD --> H_SERVICES
    CARD --> R_SERVICES
    FORM --> L_HERO
    FORM --> H_EMERGENCY
    
    %% AI Template Usage
    AI_PROMPTS -.->|"Generate"| L_HERO
    AI_PROMPTS -.->|"Generate"| L_SERVICES
    AI_PROMPTS -.->|"Generate"| H_HERO
    AI_PROMPTS -.->|"Generate"| R_HERO
    
    %% Package Structure
    BASE_COMPONENTS --> INDEX
    LANDSCAPING --> INDEX
    HVAC --> INDEX
    ROOFING --> INDEX
    GENERAL --> INDEX
    TYPES --> INDEX
    TEMPLATES --> INDEX

    %% External Usage
    subgraph CLIENT_USAGE["🌐 Client Website Usage"]
        WEBSITE_PAGE["📄 Client Page Component<br/>import { LandscapingHero }<br/>from '@marketing-factory/ui'"]
    end
    
    INDEX --> WEBSITE_PAGE

    %% Apply styles
    class BUTTON,CARD,FORM,NAVIGATION,LAYOUT baseComponent
    class L_HERO,L_SERVICES,L_GALLERY,H_HERO,H_SERVICES,R_HERO,G_HERO businessComponent
    class BUSINESS_PROPS,CLIENT_SETTINGS,CONTENT_BLOCK typeInterface
    class AI_PROMPTS templateComponent