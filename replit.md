# Overview

This is an agricultural broker website built with React and Express, designed to connect fruit producers with buyers worldwide. The application specializes in strawberries and blueberries, providing a platform for suppliers and buyers to connect through inquiry forms. The site features a modern, responsive design with multilingual support (Spanish/English) and focuses on trust, quality, and transparency in agricultural commerce.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React with TypeScript**: Single-page application using functional components and hooks
- **Routing**: Uses Wouter for client-side routing with minimal configuration
- **State Management**: React Query (TanStack Query) for server state and React Context for client state
- **UI Framework**: Shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system including themed colors for strawberries and blueberries
- **Animations**: Framer Motion for smooth page transitions and scroll-based animations
- **Internationalization**: Custom hook-based solution for Spanish/English language switching

## Backend Architecture
- **Express.js Server**: RESTful API with TypeScript support
- **Development Setup**: Vite integration for hot module replacement during development
- **Database Layer**: Drizzle ORM with PostgreSQL dialect (configured for Neon Database)
- **Data Storage**: In-memory storage implementation with interface for easy database migration
- **Form Handling**: Zod schema validation for supplier and buyer inquiry forms

## Data Storage
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Design**: Three main entities - users, supplier inquiries, and buyer inquiries
- **Validation**: Shared Zod schemas between frontend and backend for consistent data validation
- **Storage Interface**: Abstracted storage layer allowing for easy switching between in-memory and database storage

## Design System
- **Typography**: Custom font stack using Montserrat and Inter fonts
- **Color Palette**: Agricultural theme with green (primary), strawberry red, and blueberry blue colors
- **Component System**: Comprehensive UI component library with consistent styling
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Accessibility**: Built on Radix UI primitives ensuring ARIA compliance

## Form Processing
- **Validation**: React Hook Form with Zod resolvers for client-side validation
- **API Integration**: RESTful endpoints for supplier and buyer inquiry submission
- **Error Handling**: Comprehensive error states with user-friendly messages
- **Success Feedback**: Toast notifications for form submission feedback

# External Dependencies

## Database Services
- **Neon Database**: PostgreSQL hosting service for production data storage
- **Drizzle Kit**: Database migration and schema management tool

## UI and Styling
- **Radix UI**: Accessible component primitives for complex UI components
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide Icons**: Icon library for consistent iconography
- **Framer Motion**: Animation library for smooth transitions

## Development Tools
- **Vite**: Build tool and development server with hot module replacement
- **TypeScript**: Type safety across the entire application
- **ESBuild**: Fast bundling for production builds

## Content Delivery
- **Unsplash**: External image service for high-quality agricultural imagery
- **Google Fonts**: Font delivery for Montserrat and Inter typefaces
- **Font Awesome**: Icon library for additional iconography

## Runtime Environment
- **Node.js**: Server runtime environment
- **Express.js**: Web application framework for the backend API