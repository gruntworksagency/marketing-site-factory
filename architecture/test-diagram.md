# Test Mermaid Diagram

This is a simple test to make sure Mermaid diagrams render correctly in VS Code.

## Simple Flow Chart

```mermaid
graph TD
    A[Start] --> B{Is it working?}
    B -->|Yes| C[Great!]
    B -->|No| D[Check syntax]
    D --> A
```

## Simple Sequence Diagram

```mermaid
sequenceDiagram
    participant A as Alice
    participant B as Bob
    A->>B: Hello Bob!
    B-->>A: Hello Alice!
```

If these render correctly, then the more complex diagrams should work too! 