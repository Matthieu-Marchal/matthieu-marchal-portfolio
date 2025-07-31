# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` (runs on port 8080)
- **Build for production**: `npm run build`
- **Build for development**: `npm run build:dev`
- **Lint code**: `npm run lint`
- **Preview production build**: `npm run preview`

## Project Architecture

This is a modern React portfolio website built with Vite, TypeScript, and shadcn/ui components.

### Tech Stack
- **Build Tool**: Vite with React SWC plugin
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **State Management**: TanStack React Query
- **Form Handling**: React Hook Form with Zod validation

### Key Architecture Patterns

**Single Page Application Structure**:
- Main entry: `src/main.tsx` → `src/App.tsx` → `src/pages/Index.tsx`
- Portfolio sections are organized as separate components in `src/components/`
- Index page renders sections in sequence: Header → Hero → About → Skills → Experience → Projects → Education → Contact → Footer

**Component Organization**:
- **Page Components**: `src/components/[Section].tsx` (Hero, About, Skills, etc.)
- **UI Components**: `src/components/ui/` (shadcn/ui components)
- **Animation Components**: `src/components/animations/` (AnimationWrapper, StaggerContainer)
- **Utility Functions**: `src/lib/utils.ts` (cn function for className merging)
- **Custom Hooks**: `src/hooks/` (use-mobile, use-toast)

**Design System**:
- Professional navy blue and gold color scheme defined in CSS custom properties
- All colors use HSL format as specified in `src/index.css`
- Extensive custom shadows, gradients, and animations defined as CSS variables
- Responsive design with mobile-first approach

**Configuration**:
- Path aliases configured: `@/` maps to `src/`
- shadcn/ui config in `components.json` with TypeScript support
- Tailwind config extends default theme with custom colors, shadows, and animations

### Important Development Notes

**Styling Conventions**:
- Use the `cn()` utility function from `@/lib/utils` for conditional className merging
- Follow the existing color system defined in CSS custom properties
- All new colors should be added in HSL format to maintain consistency

**Component Patterns**:
- Portfolio sections follow consistent structure with animation wrappers
- Use shadcn/ui components for consistent design language
- Leverage Framer Motion for smooth animations and transitions
- Section separators with optional animation between major sections

**File Import Patterns**:
- Use path aliases (`@/components`, `@/lib`, etc.) consistently
- Import shadcn/ui components from `@/components/ui/`
- Follow existing import ordering: React imports, third-party, local components, utilities

This is a Lovable.dev project that can be edited both locally and through their web interface.