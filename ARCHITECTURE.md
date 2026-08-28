# ARCHITECTURE.md

# FinAgent AI – Personal Branding Website
## System Architecture
**Version:** 1.0

---

# 1. Purpose

This document defines the high-level architecture for the Phase 1 website. It establishes the application's structure, design principles, routing, content flow, deployment architecture and extensibility guidelines.

---

# 2. Architectural Principles

- Component-driven architecture
- Mobile-first responsive design
- Server-first rendering (Next.js App Router)
- Static generation where appropriate
- Accessibility by default
- SEO by default
- Separation of concerns
- Reusable UI components
- Incremental scalability

---

# 3. Technology Stack

| Layer | Technology |
|--------|------------|
| Framework | Next.js 15 |
| Language | TypeScript |
| Styling | Tailwind CSS |
| UI | shadcn/ui |
| Content | MDX |
| Icons | Lucide React |
| Deployment | Vercel |
| Source Control | GitHub |

---

# 4. High-Level Architecture

```text
Browser
    │
    ▼
Next.js Application
    │
    ├── App Router
    ├── Layout
    ├── Shared Components
    ├── MDX Content
    ├── SEO Metadata
    └── Static Assets
    │
    ▼
Vercel Hosting
```

---

# 5. Folder Structure

```text
src/
├── app/
└── components/
content/
lib/
hooks/
styles/
public/
types/
docs/
.github/workflows/
```

Each folder should have a single responsibility and avoid cross-cutting concerns.

---

# 6. Routing Strategy

Routes:

- /
- /about
- /projects
- /projects/finagent-ai
- /blog
- /blog/[slug]
- /resume
- /contact

Use nested layouts where appropriate.

---

# 7. Component Hierarchy

Shared Components

- Navbar
- Footer
- Container
- Button
- Card
- Badge
- SectionHeading

Page Components

- Hero
- ExpertiseGrid
- ProjectCard
- BlogCard
- ContactForm

---

# 8. Content Architecture

Content source:

```text
content/
├── blog/
└── projects/
```

Articles are written in MDX and rendered statically.

---

# 9. Data Flow

```text
MDX Files
      │
      ▼
Content Loader
      │
      ▼
Page Generation
      │
      ▼
Rendered HTML
```

---

# 10. SEO Architecture

Every page should provide:

- Title
- Description
- Canonical URL
- OpenGraph metadata
- Structured headings
- Sitemap
- robots.txt

---

# 11. Performance Strategy

- Static rendering
- Image optimisation
- Font optimisation
- Lazy loading
- Route-level code splitting
- Minimal client-side JavaScript

---

# 12. Security

- HTTPS
- Environment variables
- No secrets in repository
- Spam-protected contact form
- Security headers

---

# 13. Deployment Architecture

```text
GitHub
   │
   ▼
GitHub Actions
   │
   ▼
Vercel Preview
   │
   ▼
Production
```

---

# 14. Future Extensibility

Phase 2

- Newsletter
- Search
- AI Chatbot
- Analytics Dashboard

Phase 3

- FinAgent AI demos
- Knowledge Base
- Community
- Premium Content

---

# 15. Architecture Decision Records

Major architectural changes should be documented before implementation, including rationale, alternatives considered and expected impact.

---

# 16. Quality Attributes

- Scalability
- Maintainability
- Reliability
- Performance
- Accessibility
- Security
- Testability

---

# 17. Definition of Done

The architecture is considered implemented when:

- Folder structure matches this document
- Routing is complete
- Shared components are reusable
- MDX pipeline functions correctly
- CI/CD is operational
- Production deployment succeeds

---
End of ARCHITECTURE.md
