
# IMPLEMENTATION_PLAN_03_CORE_PAGES

**Version:** 1.0  
**Project:** FinAgent AI – Personal Branding Website  
**Phase:** Phase 1 (MVP)

---

# 1. Objective

Build all customer-facing pages using the shared Design System created in Chapter 2.

Goals:

- Establish professional credibility
- Clearly communicate expertise
- Showcase FinAgent AI
- Publish technical content
- Generate recruiter and hiring manager engagement

---

# 2. Page Development Order

1. Home
2. About
3. Projects
4. Resume
5. Contact

Develop and complete one page at a time before starting the next.

---

# 3. Homepage

## Purpose

The homepage should convince a visitor within the first 10 seconds that they are looking at an experienced Payment Systems Engineer transitioning into AI-powered FinTech.

### Sections

- Navigation
- Hero
- Professional Summary
- Core Expertise
- Featured Project (FinAgent AI)
- Latest Articles
- Call To Action
- Footer

### CTA Buttons

- View Projects
- Read Articles
- Contact Me

### SEO

- Custom title
- Meta description
- OpenGraph image
- Canonical URL

### Acceptance Criteria

- Responsive
- Accessible
- Lighthouse >90
- CTA buttons functional

---

# 4. About Page

## Purpose

Tell the professional story.

### Sections

- Introduction
- Career Timeline
- Technical Expertise
- Current Learning Journey
- Professional Philosophy

### Business Goal

Help recruiters understand both current expertise and future direction.

---

# 5. Projects Page

## Initial Scope

Display one flagship project.

### FinAgent AI

Include:

- Problem Statement
- Objectives
- Architecture Overview
- Technology Stack
- Roadmap
- GitHub Repository
- Screenshots (future)

The design should support multiple projects later.

---

# 6. Resume Page

Include:

- Professional Summary
- Skills
- Experience
- Certifications
- Education
- Download Resume button

---

# 7. Contact Page

Include:

- Contact Form
- LinkedIn
- GitHub
- Professional Email

Requirements:

- Validation
- Spam protection
- Success message

---

# 8. Shared Components

Every page should reuse:

- Navbar
- Footer
- SectionHeading
- Button
- Card
- Badge
- Container

Avoid duplicate implementations.

---

# 9. Responsive Requirements

## Mobile

Single-column layout

## Tablet

Adaptive spacing

## Desktop

Multi-column where appropriate

---

# 10. Accessibility

Every page must include:

- Semantic HTML
- Keyboard navigation
- Visible focus states
- Alt text
- Colour contrast compliance

---

# 11. Sprint Plan

Sprint 2
- Homepage

Sprint 3
- About

Sprint 4
- Projects

Sprint 5
- Resume

Sprint 6
- Contact

---

# 12. Claude Agent Prompt

Build one page at a time using the established Design System.

Requirements:

- Reuse existing components
- Mobile-first
- Accessible
- SEO-ready
- Do not duplicate code
- Ensure all pages share a consistent visual language

After completing each page:

- Run lint
- Run type checking
- Build successfully
- Commit changes

---

# 13. Definition of Done

Each page is complete when:

- Responsive
- Accessible
- SEO metadata configured
- Uses shared components
- No TypeScript errors
- No ESLint errors
- Successfully builds
- Reviewed before proceeding

---

# 14. Git Commit Strategy

Suggested commits:

feat: implement homepage

feat: implement about page

feat: implement projects page

feat: implement resume page

feat: implement contact page

docs: update implementation progress

---

# 15. Exit Criteria

Chapter 3 is complete when:

- All five pages are production-ready
- Navigation links function correctly
- Shared components are fully reused
- Website is visually consistent
- Ready to begin Chapter 4 – Content Platform

---
End of Chapter 3
