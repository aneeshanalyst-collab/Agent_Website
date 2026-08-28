# IMPLEMENTATION_PLAN_02_DESIGN_SYSTEM

**Version:** 1.0  
**Project:** FinAgent AI – Personal Branding Website

## 1. Objective
Create a consistent, accessible, reusable design system before building pages.

## 2. Design Principles
- Professional over flashy
- Dark theme first
- Consistency
- Accessibility (WCAG AA)
- Mobile-first
- Performance-conscious

## 3. Brand Identity
**Theme:** Enterprise FinTech

### Colour Tokens
| Token | Value | Usage |
|---|---|---|
| Background | #0B0F17 | Primary background |
| Surface | #111827 | Cards |
| Primary | #00E5FF | CTA |
| Text | #FFFFFF | Main text |
| Secondary | #94A3B8 | Supporting text |
| Border | #1F2937 | Borders |
| Success | #10B981 | Status |
| Warning | #F59E0B | Alerts |
| Error | #EF4444 | Errors |

## 4. Typography
- Font: Inter
- H1: 48px
- H2: 36px
- H3: 28px
- Body: 16px
- Line height: 1.6

## 5. Spacing Scale
4, 8, 12, 16, 24, 32, 48, 64 px

## 6. Component Library
Build reusable:
- Button
- Card
- Badge
- Navbar
- Footer
- SectionHeading
- Hero
- ProjectCard
- BlogCard
- ContactForm
- SocialLinks

Each component must:
- Accept typed props
- Support dark theme
- Be responsive
- Meet accessibility requirements

## 7. Icons
Use Lucide React only.

## 8. Motion
Use Framer Motion sparingly:
- Fade in
- Slide up
- Hover elevation
Respect prefers-reduced-motion.

## 9. Responsive Breakpoints
- Mobile: <640px
- Tablet: 640–1023px
- Desktop: >=1024px

## 10. Claude Agent Sprint
Tasks:
1. Configure theme tokens
2. Build typography styles
3. Build reusable Button
4. Build Card
5. Build Navbar
6. Build Footer
7. Validate responsiveness

## 11. Definition of Done
- Shared design tokens implemented
- Reusable components created
- Accessibility verified
- No duplicated styles
- Ready to build application pages
