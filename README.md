# Keyur Sanghani - Backend Developer Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS, showcasing my experience as a Backend Developer specializing in PHP Laravel, Vue.js, and database optimization.

## 🚀 Features

- **Modern Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Responsive Design**: Optimized for all device sizes
- **SEO Optimized**: Comprehensive metadata and structured data
- **Blog System**: MDX-powered blog with syntax highlighting
- **Project Showcase**: Detailed project descriptions with technical insights
- **Contact Form**: Functional contact form with email integration
- **Dark/Light Mode**: Theme switching capability
- **Performance Optimized**: Fast loading times and optimized images

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: MDX for blog posts and projects
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Email**: Resend
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── contact/           # Contact page
│   ├── posts/             # Blog posts
│   ├── projects/          # Projects showcase
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── intro.tsx         # Hero section
│   ├── experience.tsx    # Work experience
│   └── ...
├── content/              # MDX content
│   ├── posts/           # Blog posts
│   └── projects/        # Project descriptions
├── actions/             # Server actions
├── lib/                 # Utilities and schemas
└── public/             # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-next
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
bun install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Add your environment variables:
```env
RESEND_API_KEY=your_resend_api_key
NEXT_PUBLIC_URL=http://localhost:3000
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Content Management

### Adding Blog Posts

Create a new `.mdx` file in the `content/posts/` directory:

```markdown
---
title: "Your Post Title"
summary: "Brief description of your post"
image: "/images/posts/your-image.webp"
author: "Keyur Sanghani"
publishedAt: "2024-01-01"
---

# Your Post Content

Write your blog post content here using Markdown syntax.
```

### Adding Projects

Create a new `.mdx` file in the `content/projects/` directory:

```markdown
---
title: "Project Name"
summary: "Brief project description"
image: "/images/projects/project-image.png"
author: "Keyur Sanghani"
publishedAt: "2024-01-01"
---

## Project Description

Detailed project information...
```

## 🎨 Customization

### Theme Configuration

The theme is configured in `tailwind.config.ts` and uses CSS variables defined in `app/globals.css`. You can customize colors, fonts, and other design tokens.

### Adding New Components

Use shadcn/ui for consistent component styling:

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
```

## 📧 Contact Form Setup

The contact form uses Resend for email delivery. Set up your Resend account and add the API key to your environment variables.

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- AWS Amplify
- DigitalOcean App Platform

## 📊 Analytics

The project includes Vercel Analytics. To enable:

1. Install Vercel Analytics in your Vercel dashboard
2. The analytics component is already included in the layout

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🎯 SEO Features

- Comprehensive metadata on all pages
- Open Graph and Twitter Card support
- Structured data for better search engine understanding
- Optimized images with proper alt text
- XML sitemap generation
- Robots.txt configuration

## 📞 Contact

- **Email**: keyur.sanghani10@gmail.com
- **LinkedIn**: [linkedin.com/in/keyur-sanghani-044bb1215](https://linkedin.com/in/keyur-sanghani-044bb1215)
- **GitHub**: [github.com/KeyurSanghani](https://github.com/KeyurSanghani)

---

Built with ❤️ by Keyur Sanghani
