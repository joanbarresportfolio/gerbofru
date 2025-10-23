# Overview

This is an agricultural broker website built with React and Express for Gerbofru, a family business specializing in fruit and vegetable intermediation. The application connects producers with buyers nationally and internationally, featuring a comprehensive product catalog and bilingual support (Spanish/English). The site emphasizes trust, transparency, and traceability in agricultural commerce.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React with TypeScript**: Single-page application using functional components and hooks
- **Routing**: Uses Wouter for client-side routing with minimal configuration
- **State Management**: React Query (TanStack Query) for server state and React Context for client state
- **UI Framework**: Shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system for agricultural products
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

## Product Catalog
The website features six main product categories:
1. **Cítricos**: Naranjas, Mandarina, Limón, Pomelo
2. **Otras Frutas**: Sandía, Melón, Pera, Manzana, Kaki
3. **Fruta de Hueso**: Melocotón, Nectarina, Ciruela, Paraguayo, Albaricoque
4. **Fruta Tropical**: Granada, Aguacate, Mango, Piña, Níspero
5. **Verduras**: Pimientos, Berenjena, Pepino, Calabacín, Apio, Iceberg, Romana, Little Gem, Brócoli, Coliflor, Cebolla, Zanahoria, Ajo
6. **Berries**: Fresa, Arándano, Frambuesa, Mora

## Design System
- **Typography**: Custom font stack using Montserrat and Inter fonts
- **Color Palette**: Agricultural theme with green (primary) colors representing fresh produce
- **Component System**: Comprehensive UI component library with consistent styling
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Accessibility**: Built on Radix UI primitives ensuring ARIA compliance

## Form Processing
- **Contact Forms**: Dual forms for suppliers and buyers with product selection dropdowns
- **Product Selection**: Multi-select dropdown allowing users to choose from 36+ product options
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

## Runtime Environment
- **Node.js**: Server runtime environment
- **Express.js**: Web application framework for the backend API

# Recent Changes

## October 23, 2025
- Migrated from AgroConnect to Gerbofru branding
- Updated all translations with Gerbofru-specific content
- Expanded product catalog from 2 products (strawberries, blueberries) to 36+ products across 6 categories
- Redesigned Products section to showcase all product categories
- Updated Services section to reflect Gerbofru's business model:
  - Identifying commercial opportunities
  - Facilitating agreements between parties
  - Supporting logistics and operations
  - Guaranteeing fluidity, trust, and compliance
- Replaced checkbox product selection with multi-select dropdown in contact forms
- Updated Header and Footer components with Gerbofru branding
- Changed company slogan to: "Fruta y verdura con origen, haciendo que el campo llegue a destino con garantía"
- Updated contact information (email: info@gerbofru.com, location: Spain)

# Project Architecture

## Key Features
1. **Bilingual Support**: Complete Spanish and English translations for all content
2. **Product Catalog**: Comprehensive showcase of fruits and vegetables across multiple categories
3. **Dual Contact Forms**: Separate forms optimized for suppliers and buyers
4. **Responsive Design**: Mobile-first approach ensuring optimal viewing on all devices
5. **Professional Branding**: Clean, agricultural-themed design emphasizing trust and transparency
6. **Family Business Identity**: Emphasizing Gerbofru's family-owned professional approach

## Technology Stack
- **Frontend**: React 18, TypeScript, Tailwind CSS, Shadcn/ui, Framer Motion
- **Backend**: Express.js, TypeScript
- **Database**: PostgreSQL (Neon), Drizzle ORM
- **Forms**: React Hook Form, Zod validation
- **State Management**: TanStack Query (React Query)
- **Build Tools**: Vite, ESBuild
