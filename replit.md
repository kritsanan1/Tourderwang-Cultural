# Overview

This is a full-stack web application called "ที่นี่ วังสามหมอ" (Tourderwang) - a cultural heritage platform focused on showcasing Phu Thai culture in Wang Sam Mo district, Udon Thani province, Thailand. The application serves as a comprehensive platform combining cultural tourism, job opportunities, business directory, and community features. It targets multiple user types including tourists, locals, researchers, and businesses, with multilingual support (English/Thai) and personalized experiences based on user preferences.

## Recent Updates (January 2025)
- ✅ Enhanced mobile responsiveness with adaptive layouts and touch targets
- ✅ Comprehensive SEO optimization with structured data and Open Graph tags
- ✅ Performance monitoring and optimization utilities implemented
- ✅ Accessibility improvements with ARIA labels and mobile-first design
- ✅ **COMPLETED**: Full multi-page application with comprehensive Thai language content
- ✅ **COMPLETED**: Culture, Community, Business, and Explore pages with detailed content
- ✅ **COMPLETED**: Advanced navigation system with multi-language support
- ✅ **COMPLETED**: Shared content management system with extensive Thai cultural data
- 📋 **CURRENT**: Complete website with all major functionality implemented

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for development
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design system
- **UI Components**: Radix UI primitives for accessibility and interaction patterns
- **State Management**: React hooks and TanStack Query for server state management
- **Responsive Design**: Mobile-first approach with adaptive layouts for different screen sizes
- **Internationalization**: Built-in language switching between English and Thai
- **SEO Optimization**: React Helmet for dynamic meta tags and structured data

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript throughout the entire stack
- **API Pattern**: RESTful API design with `/api` prefix routing
- **Development Setup**: Hot module replacement with Vite integration in development mode
- **Build Process**: ESBuild for production bundling with external package handling
- **Error Handling**: Centralized error middleware with structured error responses

## Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Management**: Centralized schema definitions in shared directory for frontend/backend consistency
- **Migrations**: Drizzle Kit for database schema migrations and management
- **Development Storage**: In-memory storage implementation for rapid development and testing
- **Connection**: Neon Database serverless PostgreSQL for production deployment

## Authentication & Session Management
- **Session Storage**: PostgreSQL-backed sessions using connect-pg-simple
- **User Management**: Basic user schema with username/password authentication
- **Type Safety**: Zod validation schemas for user input validation and type inference

## Development Architecture
- **Monorepo Structure**: Organized into client, server, and shared directories
- **Hot Reloading**: Integrated Vite development server with Express for seamless development
- **TypeScript Configuration**: Shared types between frontend and backend via path aliases
- **Code Quality**: Strict TypeScript configuration with comprehensive type checking

# External Dependencies

## Core Technologies
- **Neon Database**: Serverless PostgreSQL database hosting with connection pooling
- **Drizzle ORM**: Type-safe database toolkit with automatic TypeScript generation
- **Vite**: Next-generation frontend build tool with hot module replacement
- **Express.js**: Web application framework for Node.js with middleware ecosystem

## UI & Design System
- **shadcn/ui**: Pre-built component library based on Radix UI primitives
- **Radix UI**: Unstyled, accessible components for building design systems
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Lucide React**: Icon library for consistent iconography throughout the application

## Development Tools
- **TanStack Query**: Data fetching and caching library for API state management
- **React Hook Form**: Form library with validation and error handling
- **React Helmet Async**: Document head management for SEO and meta tags
- **ESBuild**: Fast JavaScript bundler for production builds

## Hosting & Deployment
- **Replit**: Development and hosting platform with integrated development environment
- **Replit Plugins**: Custom Vite plugins for development error handling and cartographer integration
- **Environment Variables**: Database URL and other configuration through environment variables