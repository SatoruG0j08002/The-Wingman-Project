# Teen Quantum Physics Challenge 2024

## Overview

This is a full-stack web application for the Teen Quantum Physics Challenge 2024, a global competition platform designed for high school students to explore quantum mechanics and compete for educational opportunities. The application provides information about the competition, submission guidelines, and contact resources through a modern, responsive web interface.

The application follows a monorepo structure with a React frontend and Express.js backend, using modern web technologies including TypeScript, Tailwind CSS, and shadcn/ui components for a polished user experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing with pages for Home, About, Submission, and Contact
- **Styling**: Tailwind CSS with custom CSS variables for theming, including light/dark mode support
- **UI Components**: shadcn/ui component library built on Radix UI primitives for accessible, customizable components
- **State Management**: TanStack React Query for server state management and data fetching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework using ES modules
- **Language**: TypeScript for full-stack type safety
- **Architecture Pattern**: RESTful API design with modular route registration
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage) for development
- **Session Management**: Express sessions with PostgreSQL session store (connect-pg-simple)
- **Development**: Hot module replacement and error overlay for development experience

### Data Storage Solutions
- **Database**: PostgreSQL configured as the primary database
- **ORM**: Drizzle ORM for type-safe database operations and schema management
- **Database Provider**: Neon Database (@neondatabase/serverless) for serverless PostgreSQL
- **Schema Management**: Drizzle Kit for migrations and schema synchronization
- **Development Storage**: In-memory storage implementation for rapid development and testing

### Authentication and Authorization
- **Session Management**: Express sessions with PostgreSQL session store for persistent login state
- **User Schema**: Basic user model with username/password authentication ready for implementation
- **Storage Interface**: Abstracted user management with CRUD operations (getUser, getUserByUsername, createUser)
- **Security**: Prepared for secure session handling with proper cookie configuration

### External Dependencies
- **Database Hosting**: Neon Database for serverless PostgreSQL hosting
- **Font Services**: Google Fonts (Inter family) for typography
- **Icon Library**: Font Awesome 6.4.0 for consistent iconography
- **Form Handling**: React Hook Form with Zod validation for type-safe form management
- **Date Utilities**: date-fns for date manipulation and formatting
- **Development Tools**: Replit integration for development environment and deployment