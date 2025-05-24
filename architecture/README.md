# Architecture Documentation

This directory contains comprehensive architecture documentation for the Marketing Site Factory project.

## 📋 Documentation Files

1. **[project-architecture.md](project-architecture.md)** - Complete system overview
   - Project structure and patterns
   - Component system architecture
   - Data flow and deployment architecture
   - Performance and security considerations
   - Success metrics and future roadmap

2. **[architecture-diagram.md](architecture-diagram.md)** - System architecture visualization
   - Monorepo structure with packages and applications
   - Component relationships and dependencies
   - Infrastructure services (Docker, PostgreSQL, Redis)
   - External service integrations

3. **[data-flow-diagram.md](data-flow-diagram.md)** - User interaction sequences
   - Contact form submission flow
   - Analytics tracking workflow
   - Business owner management interactions
   - Dynamic content loading process

4. **[component-architecture.md](component-architecture.md)** - UI package structure
   - Base component hierarchy
   - Business-type specific components
   - TypeScript interfaces and types
   - AI template system

5. **[test-diagram.md](test-diagram.md)** - Simple test diagrams
   - Verify Mermaid rendering in VS Code
   - Basic flow chart and sequence diagram examples

## 🔍 Viewing the Diagrams

### VS Code (Recommended)
1. Install the **"Markdown Mermaid"** extension
2. Open any `.md` file containing Mermaid diagrams
3. Use `Ctrl+Shift+V` (or `Cmd+Shift+V` on Mac) to preview
4. The diagrams should render automatically

### GitHub/GitLab
- Mermaid diagrams render natively in markdown files
- Simply view the files in your repository browser

### Online Editors
- Copy diagram content to [mermaid.live](https://mermaid.live) for editing
- Use [Mermaid Chart](https://www.mermaidchart.com/) for collaborative editing

### Other Tools
- GitBook, Notion, Confluence with Mermaid support
- Obsidian with Mermaid plugin
- Any markdown editor with Mermaid support

## ✅ Fixes Applied

### Syntax Issues Resolved
1. **Removed problematic comments** before diagram type declarations
2. **Simplified nested subgraphs** that caused rendering issues
3. **Fixed mermaid code block fencing** for proper VS Code detection
4. **Converted all files to `.md` format** for better tool compatibility

### Specific Changes Made
- **Architecture Diagram**: Removed nested ROOT subgraph wrapper
- **Data Flow Diagram**: Fixed sequence diagram participant declarations
- **Component Architecture**: Simplified complex nested structure
- **All Diagrams**: Added proper mermaid code block fencing

### Common Issues Fixed
- "No diagram type detected" error
- Nested subgraph rendering problems
- Comment placement issues
- File extension compatibility

## 🚀 Next Steps

1. **Test the diagrams** - Open `test-diagram.md` first to verify Mermaid is working
2. **Review architecture** - Read through `project-architecture.md` for system overview
3. **Understand data flow** - Study `data-flow-diagram.md` for user interactions
4. **Explore components** - Examine `component-architecture.md` for UI structure

## 🛠️ Troubleshooting

If diagrams still don't render:

1. **Check extension installation**: Ensure "Markdown Mermaid" extension is installed and enabled
2. **Restart VS Code**: Sometimes extensions need a restart to work properly
3. **Try simple test**: Open `test-diagram.md` to verify basic functionality
4. **Check syntax**: Compare with working examples in test file
5. **Browser fallback**: Use [mermaid.live](https://mermaid.live) as a backup viewer

## 📖 Additional Resources

- [Mermaid Documentation](https://mermaid.js.org/) - Official Mermaid syntax guide
- [VS Code Extension](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid) - Markdown Mermaid extension
- [Mermaid Live Editor](https://mermaid.live) - Online diagram editor
- [Implementation Guide](../docs/IMPLEMENTATION_GUIDE.md) - Detailed development setup 