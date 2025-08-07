# QubitMinded Teen Quantum Physics Challenge 2025

## Overview

This is a full-stack web application for QubitMinded Teen Quantum Physics Challenge 2025, a Texas pilot program for high school students to explore cutting-edge quantum research through peer-reviewed articles and express their understanding through creative slideshows and posters. The competition is judged by undergraduate and graduate students from quantum computing clubs across universities in the Quantum Coalition network.

The application follows a monorepo structure with a React frontend and Express.js backend, featuring a modern quantum-inspired design with purple/blue gradients, Apple-style glass morphism effects, and smooth animations that reflect the abstract nature of quantum physics.

## User Preferences

Preferred communication style: Simple, everyday language.
Design preferences: Warm, friendly sunrise/sunset theme with red and yellow hues. Modern and sleek design that creates a welcoming atmosphere for underserved youth. Student-led tutoring service focus.
Service focus: Student-led tutoring for underserved youth with peer-to-peer mentorship approach.

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
- Complete theme transformation from quantum physics competition to student-led tutoring service
- Rebranded to "The Wingman Project" - student tutoring for underserved youth
- Implemented warm sunrise/sunset color scheme with red and yellow hues
- **Final Design Updates (August 7, 2025):**
  - Changed background from light cream to darker sunrise/sunset complementary colors
  - Integrated TWP logo image (TWP_1754535698470.jpeg) throughout navigation, homepage, and footer
  - Replaced all sun emojis with uploaded logo image for consistent branding
  - Removed all Quantum Coalition references and logos from About and Contact pages
  - Updated About page to focus on student-led excellence and peer mentorship
  - **Contact page transformation:**
    - Removed FAQ section completely
    - Added comprehensive Leadership Team section with 4 key positions:
      - President: Strategic leadership and community partnerships
      - Outreach Coordinator: School connections and outreach programs
      - Web Developer: Platform maintenance and digital services
      - Student-teacher Coordinator: Tutor recruitment, training, and matching
    - Updated email from quantum competition to info@wingmanproject.org
    - Maintained warm color scheme with darker background for better visual hierarchy
- Updated glass morphism effects to work seamlessly with darker background
- Maintained friendly, welcoming atmosphere optimized for underserved youth outreach