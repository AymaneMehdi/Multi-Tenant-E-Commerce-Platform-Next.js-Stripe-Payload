# Multi-Tenant E-Commerce Platform

A modern, full-featured **multi-tenant e-commerce platform** built with **Next.js 15**, **Payload CMS**, **TRPC**, and **Stripe**. Perfect for launching a scalable SaaS marketplace with comprehensive admin capabilities and customer-facing storefront.

---

## Features

- **Multi-tenant architecture** with isolated storefronts and admin panels
- **Headless CMS** powered by Payload for flexible content management
- **E-commerce capabilities** including products, orders, reviews, and cart management
- **Stripe payment integration** for secure transactions and subscription management
- **TRPC end-to-end type safety** for API routes
- **Authentication system** with sign-in/sign-up flows
- **Admin dashboard** for tenant management and analytics
- **Responsive design** with TailwindCSS and shadcn/ui components
- **Dark/Light theme support** with modern UI patterns
- **Product search & filtering** with categories and tags
- **Review system** with star ratings
- **Mobile-optimized** layouts and navigation
- **Type-safe database** with Payload ORM
- **Vercel deployment ready**

---

## Project Structure

```
src/
├── app/
│   ├── (app)/                   # Customer-facing application
│   │   ├── globals.css          # Global styles
│   │   ├── layout.tsx           # Root layout
│   │   ├── (auth)/              # Authentication routes
│   │   │   ├── sign-in/
│   │   │   └── sign-up/
│   │   ├── (home)/              # Public pages
│   │   │   ├── page.tsx         # Homepage
│   │   │   ├── [category]/      # Category pages
│   │   │   ├── about/
│   │   │   ├── contact/
│   │   │   ├── features/
│   │   │   └── pricing/
│   │   ├── (library)/           # User library/account
│   │   │   └── library/
│   │   ├── (tenants)/           # Tenant management
│   │   │   ├── tenants/
│   │   │   └── stripe-verify/
│   │   └── api/                 # API routes
│   │
│   ├── (payload)/               # Payload CMS admin panel
│   │   ├── admin/
│   │   ├── api/
│   │   └── layout.tsx
│   │
│   └── my-route/                # Custom routes
│
├── collections/                 # Payload CMS collections
│   ├── Users.ts
│   ├── Products.ts
│   ├── Orders.ts
│   ├── Reviews.ts
│   ├── Categories.ts
│   ├── Tags.ts
│   ├── Tenants.ts
│   └── Media.ts
│
├── components/                  # Reusable UI components
│   ├── star-rating.tsx
│   ├── stripe-verify.tsx
│   └── ui/                      # shadcn/ui components
│
├── modules/                     # Feature modules
│   ├── auth/                    # Authentication logic
│   ├── products/                # Product management & display
│   ├── checkout/                # Shopping cart & checkout flow
│   ├── orders/                  # Order management
│   ├── reviews/                 # Review system
│   ├── categories/              # Category management
│   ├── tags/                    # Tag system
│   ├── library/                 # User library
│   ├── tenants/                 # Tenant management
│   └── home/                    # Homepage features
│
├── hooks/                       # Custom React hooks
├── lib/                         # Utility functions
│   ├── access.ts                # Access control
│   ├── stripe.ts                # Stripe integration
│   └── utils.ts                 # Helper utilities
│
├── trpc/                        # tRPC configuration
│   ├── routers/                 # API routers
│   ├── init.ts
│   ├── client.tsx
│   └── server.tsx
│
├── middleware.ts                # Next.js middleware
├── payload.config.ts            # Payload CMS config
├── seed.ts                       # Database seeding
└── constants.ts                 # Application constants

public/                           # Static assets
media/                            # Media files
```

---

## Tech Stack

| Tool / Library           | Description                                    |
|--------------------------|------------------------------------------------|
| **Next.js 15**           | React framework with App Router                |
| **React 18**             | UI library for components                      |
| **TypeScript**           | Type-safe JavaScript development               |
| **TailwindCSS**          | Utility-first CSS framework                    |
| **shadcn/ui**            | High-quality React components                  |
| **Payload CMS**          | Headless content management system             |
| **TRPC**                 | End-to-end type-safe APIs                      |
| **Stripe**               | Payment processing & subscriptions             |
| **Zod**                  | TypeScript-first schema validation             |
| **Next Auth** (optional) | Authentication solution                        |

---

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/AymaneMehdi/Multi-Tenant-E-Commerce-Platform-Next.js-Stripe-Payload
   cd Multi-Tenant-E-Commerce-Platform-Next
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   # Database
   DATABASE_URI=your_database_connection_string

   # Payload CMS
   PAYLOAD_SECRET=your_payload_secret_key

   # Stripe
   STRIPE_SECRET_KEY=your_stripe_secret_key
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

   # Authentication (if using)
   NEXTAUTH_SECRET=your_auth_secret
   NEXTAUTH_URL=http://localhost:3000

   # Application
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **Seed the database (optional)**

   ```bash
   npm run seed
   ```

---

## Running the Project

```bash
npm run dev
```

Runs the development server on **http://localhost:3000**

The Payload admin panel is accessible at **http://localhost:3000/admin**

---

## Building for Production

```bash
npm run build
npm start
```

Builds the project for production and starts the production server.

---

## Scripts

| Command             | Description                          |
|---------------------|--------------------------------------|
| `npm run dev`       | Run development server               |
| `npm run build`     | Build for production                 |
| `npm start`         | Start production server              |
| `npm run lint`      | Run ESLint checks                    |
| `npm run seed`      | Seed database with sample data       |

---

## Key Features & Modules

### **Multi-Tenant Architecture**
- Isolated storefronts per tenant
- Separate admin panels and dashboards
- Tenant-specific product catalogs and orders

### **E-Commerce Core**
- **Products**: Full product management with images, descriptions, and pricing
- **Categories & Tags**: Organize products with flexible taxonomies
- **Shopping Cart**: Persistent cart with checkout flow
- **Orders**: Complete order management and history
- **Reviews**: Customer ratings and reviews system

### **Payment Processing**
- Stripe integration for credit card payments
- Subscription management
- Secure payment verification

### **User Management**
- Authentication with sign-in/sign-up
- User profiles and preferences
- Order history and library
- Role-based access control

### **Admin Dashboard**
- Payload CMS for content management
- Tenant administration
- Product & order management
- Analytics and reporting

---

## Environment Requirements

- **Node.js**: 18+ LTS
- **Package Manager**: npm, yarn, or pnpm
- **Database**: MongoDB, PostgreSQL, or other supported database
- **Stripe Account**: For payment processing

---

## Deployment

### **Vercel (Recommended)**

The easiest way to deploy is using [Vercel Platform](https://vercel.com):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Vercel will auto-deploy on every push

For detailed instructions, see the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

### **Other Platforms**

This project can also be deployed to:
- **Docker** - Containerized deployment
- **AWS** - Using Amplify or EC2
- **Railway** - Simple Railway.app deployment
- **Heroku** - Classic Node.js hosting
- **Self-hosted** - Any Node.js hosting provider

---

## Database Setup

1. Create a database (MongoDB or PostgreSQL)
2. Update `DATABASE_URI` in `.env.local`
3. Run migrations (if applicable)
4. Seed initial data: `npm run seed`

---

## API Documentation

This project uses **TRPC** for type-safe API routes. All API endpoints are defined in:

```
src/trpc/routers/
```

Access the TRPC endpoints from your client code using the configured TRPC client in `src/trpc/client.tsx`.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

**Copyright © Aymane Mehdi**