%% Marketing Site Factory - Data Flow Diagram
%% This diagram shows how data flows through the system from user interactions
%% to database storage, API calls, and external service integrations

```mermaid
sequenceDiagram
    participant User as 👤 Website Visitor
    participant Client as 🌐 Client Website
    participant API as 🔌 API Routes
    participant DB as 🗄️ Database
    participant Email as 📧 Email Service
    participant Analytics as 📊 Analytics
    participant Admin as 👨‍💼 Business Owner

    %% User Interaction Flow
    Note over User, Admin: Contact Form Submission Flow
    
    User->>Client: Visits website
    Client->>Client: Loads business-specific<br/>components from UI package
    
    User->>Client: Fills contact form<br/>(name, email, phone, message)
    Client->>API: POST /api/contact<br/>with form data
    
    %% Server-side Processing
    API->>API: Validate input data<br/>using utils package
    API->>DB: INSERT INTO contacts<br/>(name, email, phone, message, client_slug)
    DB-->>API: Return contact ID
    
    API->>Email: Send notification email<br/>to business owner
    Email-->>Admin: Email: "New lead from website"
    
    API->>DB: INSERT INTO analytics<br/>(event: 'form_submit', client_slug)
    
    API-->>Client: Return success response
    Client-->>User: Show success message

    %% Analytics Flow
    Note over User, Admin: Page View Analytics Flow
    
    User->>Client: Navigates to different pages
    Client->>Analytics: Track page views<br/>Google Analytics
    Client->>API: POST /api/analytics<br/>custom events
    API->>DB: Store custom analytics<br/>in analytics table

    %% Business Owner Interaction
    Note over Admin, DB: Business Owner Management
    
    Admin->>Client: Accesses admin panel<br/>(future feature)
    Client->>API: GET /api/client/{slug}<br/>fetch business settings
    API->>DB: SELECT FROM clients<br/>WHERE slug = {slug}
    DB-->>API: Return client settings JSON
    API-->>Client: Return business configuration
    Client-->>Admin: Display dashboard with<br/>leads and analytics

    %% Configuration Flow
    Note over Client, DB: Dynamic Content Loading
    
    Client->>API: GET /api/client/{slug}/config
    API->>DB: Fetch client settings<br/>and content blocks
    DB-->>API: Return ClientSettings +<br/>ContentBlocks JSON
    API-->>Client: Business configuration
    Client->>Client: Render components with<br/>business-specific data
    Client-->>User: Display customized<br/>business website 