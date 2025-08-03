# Teen Quantum Physics Challenge 2024

## Overview

This is a full-stack web application for the Teen Quantum Physics Challenge 2024, a global individual competition platform designed for high school students to explore cutting-edge quantum research through peer-reviewed articles and express their understanding through creative slideshows and posters. The competition is judged by undergraduate and graduate students from quantum computing clubs across universities in the Quantum Coalition network.

The application follows a monorepo structure with a React frontend and Express.js backend, featuring a modern quantum-inspired design with purple/blue gradients, Apple-style glass morphism effects, and smooth animations that reflect the abstract nature of quantum physics.

## User Preferences

Preferred communication style: Simple, everyday language.
Design preferences: Apple-inspired interface with purple/blue quantum-abstract aesthetics, glass morphism effects, and smooth transitions.
Competition format: Individual submissions only (no teams), peer-reviewed article analysis presented through slideshows or posters.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing with pages for Home, About, Submission, and Contact
- **Styling**: Tailwind CSS with custom quantum-themed design system featuring purple/blue gradients, glass morphism effects, and Apple-inspired aesthetics
- **UI Components**: shadcn/ui component library built on Radix UI primitives with extensive customization for quantum theme
- **State Management**: TanStack React Query for server state management and data fetching
- **Build Tool**: Vite for fast development and optimized production builds
- **Design System**: Custom CSS animations including quantum wave effects, pulse animations, and glassmorphism components

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
- **Icon Library**: Font Awesome 6.4.0 for consistent iconography across quantum-themed interface
- **Form Handling**: React Hook Form with Zod validation for type-safe form management
- **Date Utilities**: date-fns for date manipulation and formatting
- **Development Tools**: Replit integration for development environment and deployment
- **Google Forms**: Integration for secure submission handling and file uploads

## Competition Details

### Format
- **Individual Competition**: Students submit personal research presentations (no teams)
- **Research Focus**: Analysis of peer-reviewed quantum physics articles
- **Presentation Options**: Slideshows (10-20 slides) OR research posters (academic conference style)
- **Categories**: 
  - Quantum Computation (circuits, qubits, algorithms, cryptography)
  - Quantum Physics (hardware design, path integrals, QED, superposition, entanglement)

### Judging
- **Evaluators**: Undergraduate and graduate students from Quantum Coalition university chapters
- **Criteria**: Research depth, presentation clarity, understanding of quantum concepts, proper citation of peer-reviewed sources

### Recent Changes (August 2025)
- Updated from team-based to individual competition format
- Redesigned with quantum-inspired Apple aesthetics using purple/blue color scheme
- Added glass morphism effects and custom quantum wave animations
- Integrated Quantum Coalition as judging body
- Updated all pages with new design system and competition information