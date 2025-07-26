# My Blog Project Overview

This document provides a comprehensive overview of the blog project structure, technologies, and development guidelines.

## Tech Stack

- **Next.js (App Router)**: Server-side rendering and routing
- **TypeScript**: Type-safe JavaScript development
- **ContentLayer**: Content management for MDX files
- **TailwindCSS**: Utility-first CSS framework
- **Storybook**: Component documentation and testing
- **Supabase**: Authentication and backend services

## Project Structure

- `/blog/`: MDX files for blog posts (organized in folders by post slug)
- `/src/app/`: Next.js App Router structure with pages and components
- `/public/`: Static assets (images, SVGs, etc.)
- `/src/app/components/`: Reusable React components
- `/src/app/utils/`: Utility functions and configurations
- `contentlayer.config.ts`: ContentLayer configuration for MDX processing

## Content Management

Blog posts are written in MDX format with front matter and stored in the `/blog/` directory. Each post has the following metadata:

```yaml
---
title: "Post Title"
description: "Post description"
image: "/blogs/image-path.jpg"
date: "YYYY-MM-DD"
updated: "YYYY-MM-DD"
author: "Author Name"
isPublished: true
tags:
  - tag1
  - tag2
---
```

## Design System

- **Color Palette**: Uses Catppuccin Macchiato theme (defined in tailwind.config.ts)
- **Typography**: Inter and Manrope fonts
- **Components**: Reusable UI components organized by feature
- **Responsive Design**: Mobile-first approach with responsive layouts

## Key Features

- Dark/Light mode toggle
- Category-based filtering of posts
- Responsive design with mobile menu
- Static site generation for performance
- Dynamic page metadata for SEO
- MDX content rendering with syntax highlighting

## Development Guidelines

1. **Component Structure**: Follow atomic design principles when creating new components
2. **Styling**: Use TailwindCSS for styling; avoid inline styles
3. **Images**: Store blog images in `/public/blogs/`
4. **TypeScript**: Maintain proper typing for all components and functions
5. **Performance**: Optimize images and minimize client-side JavaScript
6. **Accessibility**: Ensure all components meet WCAG guidelines
7. **SEO**: Use proper metadata for all pages

## Future Improvements

- Implement search functionality
- Add pagination for blog listings
- Enhance performance optimizations
- Improve mobile responsiveness
- Add analytics integration
- Implement commenting system
