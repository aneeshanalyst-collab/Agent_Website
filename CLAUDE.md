# CLAUDE.md

# Claude Agent Instructions

## Project
FinAgent AI – Personal Branding Website

## Mission
Build a production-quality personal branding website following the requirements and implementation documents. Prioritise maintainability, performance and accessibility.

## Technology Stack
- Next.js (App Router)
- TypeScript (strict mode)
- Tailwind CSS
- shadcn/ui
- MDX
- pnpm
- Vercel

## Core Principles
1. Implement one milestone at a time.
2. Never modify unrelated files.
3. Reuse existing components.
4. Prefer Server Components unless client-side state is required.
5. Keep components focused and under ~200 lines where practical.
6. Avoid duplication.
7. Use semantic HTML.
8. Mobile-first responsive design.
9. Meet WCAG AA accessibility.
10. Optimise for Lighthouse scores above 90.

## Coding Standards
- No `any` unless justified.
- Use typed interfaces for props.
- Use async/await.
- Handle loading and error states.
- Keep utility functions in `lib/`.

## Component Rules
- Single responsibility.
- Reusable.
- Document props.
- Compose rather than duplicate.

## Git Workflow
- feature/<name>
- Commit small logical changes.
- Ensure lint, type-check and build pass before merge.

## Before Completing Any Task
- Run lint
- Run type check
- Run production build
- Verify responsive layout
- Verify accessibility

## Do Not
- Introduce unnecessary dependencies.
- Hard-code content that belongs in MDX.
- Commit secrets.
- Ignore build errors.

## Expected Output
For each milestone provide:
- Summary
- Files created
- Files modified
- Commands executed
- Remaining work
