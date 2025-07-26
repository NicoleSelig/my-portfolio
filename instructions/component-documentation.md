# Component Documentation

This document provides documentation for the key components in the blog project.

## Layout Components

### `Layout.tsx`

The root layout component that wraps all pages. It includes:

- Font configuration
- Theme setup
- Header and Footer components
- Metadata configuration

### `Header/index.tsx`

Navigation component that includes:

- Logo
- Navigation links
- Theme toggle
- Mobile menu (Hamburger)
- Responsive design

### `Footer/index.tsx`

Footer component with:

- Social links
- Copyright information
- Site navigation

## Page Components

### `page.tsx` (Home)

Home page component that displays:

- Cover section with latest post
- Featured posts section
- Recent posts section

### `blog/[slug]/page.tsx`

Blog post detail page that includes:

- Post header with title and metadata
- Post content rendered from MDX
- Post navigation (previous/next)
- Tags and categories

### `categories/[slug]/page.tsx`

Category listing page that shows:

- Category header
- List of posts in the category
- Category navigation

## Post Components

### `Post/PostLayout3.tsx`

Card layout for blog posts in grid displays:

- Post image
- Title
- Tags
- Date
- Hover effects

### `Post/RenderMdx.tsx`

Component for rendering MDX content:

- Custom styling for MDX elements
- Code syntax highlighting
- Custom components for MDX

### `Post/Categories.tsx`

Component for displaying categories list:

- Horizontal scrollable list
- Active state for current category
- Link to category pages

## UI Components

### `Elements/Tag.tsx`

Component for displaying post tags:

- Styled tag pill
- Link to category page

### `Hamburger/index.tsx`

Mobile menu button component:

- Animated hamburger icon
- Toggle state for menu display

### `Icons.tsx`

Component with SVG icons used throughout the site:

- Social media icons
- UI icons (sun, moon, etc.)
- Proper accessibility attributes

## Utility Components

### `Hooks/useThemeSwitch.tsx`

Custom hook for managing theme:

- Theme toggle functionality
- Persistence of theme preference
- System theme detection

### `utils/noSsr.tsx`

Component to prevent server-side rendering for specific components:

- Used for components that should only render client-side
- Prevents hydration errors

## Content Components

### `Home/CoverSection.tsx`

Component for displaying the featured/latest post:

- Large image with overlay
- Post metadata
- Call-to-action link

### `Home/FeaturedPosts.tsx`

Component for displaying curated featured posts:

- Grid layout
- Featured post cards
- Section header
