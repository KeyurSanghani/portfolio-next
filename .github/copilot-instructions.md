# Portfolio Next.js Codebase Guide

## Architecture Overview

This is a **Next.js 14 App Router** portfolio site with **TypeScript**, **Tailwind CSS**, and **shadcn/ui** components. The architecture follows a content-driven approach with MDX files for posts and projects.

### Key Directories
- `app/` - Next.js App Router pages with nested routing for posts/projects
- `content/` - MDX files organized by type (`posts/`, `projects/`)
- `actions/` - Server-side data fetching functions (not Next.js Server Actions)
- `components/` - React components with `ui/` subfolder for shadcn components
- `lib/` - Utilities, schemas, and shared logic
- `providers/` - React context providers (theme, toast)

## Content System

### MDX Content Pattern
Content lives in `content/{posts,projects}/` as `.mdx` files with frontmatter:
```yaml
---
title: "Post Title"
summary: "Brief description"
image: "/images/posts/filename.webp"
author: "Keyur Sanghani"
publishedAt: "2025-10-18"
---
```

### Data Flow
1. **Actions** (`actions/posts.ts`, `actions/projects.ts`) handle file reading with `gray-matter`
2. **Dynamic routes** (`app/posts/[slug]/page.tsx`) use `getPostBySlug()` 
3. **MDX rendering** via `next-mdx-remote/rsc` in `components/mdx-content.tsx`
4. **Custom components** (like `Counter`) can be embedded in MDX via the components map

### Image Convention
- Post images: `/public/images/posts/`
- Project images: `/public/images/projects/`
- Author images: `/public/images/authors/`

## Development Patterns

### Component Architecture
- **Server Components by default** - mark with `'use client'` only when needed
- **shadcn/ui integration** - use `components.json` config with "new-york" style
- **Tailwind with CSS variables** - theming via CSS custom properties
- **Font setup** - Inter (sans) + Playfair Display (serif) as CSS variables

### Form Handling
- **Zod schemas** in `lib/schemas.ts` for validation
- **Server Actions** in `actions/actions.ts` with Resend email integration
- **react-hook-form + zodResolver** pattern in client components
- **Toast notifications** via Sonner library

### SEO & Metadata
- **Comprehensive metadata** in `app/layout.tsx` with OpenGraph/Twitter cards
- **Dynamic metadata generation** in page components using `generateMetadata()`
- **Sitemap generation** via `app/sitemap.ts`
- **Robots.txt** configuration in `app/robots.ts`

## Key Utilities

### `lib/utils.ts`
- `cn()` - Tailwind class merging with clsx + tailwind-merge
- `formatDate()` - Consistent date formatting across components

### Styling System
- **CSS Variables** for theming (see `tailwind.config.ts` color definitions)
- **Dark mode** via `next-themes` provider
- **Typography** plugin for MDX content styling

## Development Commands

```bash
bun dev          # Development server
bun build        # Production build  
bun start        # Production server
bun lint         # ESLint checking
```

## Critical Conventions

1. **Import paths** - Always use `@/` alias for absolute imports
2. **MDX components** - Register interactive components in `components/mdx-content.tsx`
3. **Metadata** - Every page should implement `generateMetadata()` for SEO
4. **Error handling** - Use `notFound()` for missing content instead of throwing
5. **Image optimization** - Use Next.js `Image` component with proper sizing
6. **Server/Client boundary** - Keep data fetching in server components, interactions in client components

## Common Tasks

- **Add new post**: Create `.mdx` in `content/posts/` with frontmatter
- **Add UI component**: Use `npx shadcn-ui@latest add component-name`
- **Modify theme**: Update CSS variables in `app/globals.css`
- **Add email template**: Create in `emails/` and wire to `actions/actions.ts`