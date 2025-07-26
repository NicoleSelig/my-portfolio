# Code Quality Guidelines

This document outlines the coding standards and best practices for maintaining high-quality code in the blog project.

## General Principles

1. **Readability**: Code should be easy to read and understand
2. **Maintainability**: Code should be easy to modify and extend
3. **Reusability**: Components and functions should be designed for reuse
4. **Performance**: Code should be optimized for performance
5. **Accessibility**: All UI elements should be accessible
6. **Type Safety**: Use TypeScript to ensure type safety

## Next.js Best Practices

### App Router

- Use the App Router for all new page routes
- Leverage server components where possible to reduce client-side JavaScript
- Implement proper metadata for SEO
- Use dynamic imports for code splitting
- Implement proper error boundaries

### Data Fetching

- Use server components for data fetching where possible
- Implement proper caching strategies
- Handle loading and error states
- Use proper TypeScript interfaces for API responses

## Component Guidelines

### Structure

- One component per file
- Use functional components with hooks
- Follow clear naming conventions
- Group related components in directories
- Create index files to export components

### Props

- Use TypeScript interfaces for prop definitions
- Provide default props where appropriate
- Use destructuring for prop access
- Document complex props with JSDoc comments

### State Management

- Use React hooks for local state
- Consider context for shared state
- Avoid prop drilling
- Keep state as close as possible to where it's used

## Styling Guidelines

### TailwindCSS

- Follow utility-first approach
- Extract common patterns to components
- Use consistent spacing and sizing
- Leverage Tailwind's responsive utilities
- Create custom utilities in tailwind.config.ts when needed

### Theme

- Use theme variables from the Catppuccin Macchiato palette
- Maintain dark/light mode compatibility
- Follow accessibility guidelines for contrast

## TypeScript Standards

- Use explicit typing rather than `any`
- Create interfaces for complex data structures
- Use type guards for runtime type checking
- Leverage TypeScript's utility types when appropriate
- Keep types and interfaces close to where they're used

## Content Layer & MDX

- Follow consistent front matter structure
- Use proper MDX syntax for components
- Keep custom MDX components simple
- Document required and optional front matter fields
- Ensure proper image handling in MDX content

## Testing

- Write tests for critical functionality
- Use React Testing Library for component tests
- Test accessibility with axe-core
- Implement E2E tests for critical user flows

## Git Workflow

- Use descriptive commit messages
- Create feature branches for new features
- Use pull requests for code reviews
- Keep commits focused and atomic
- Regularly update from main branch
