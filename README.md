<div align="center">

# Amaze Property Management Services (PMS)

**A legacy of excellence in Integrated Facility Management — trusted by 200+ clients across PAN India for over two decades.**

[![Live Demo](https://img.shields.io/badge/Live_Demo-amaze--property--management.vercel.app-gold?style=for-the-badge&logo=vercel)](https://amaze-property-management.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

</div>

---

## About The Project

**Amaze PMS Pvt Ltd (AMAZE)** is a Property Management division of the ACTION GROUP of Companies founded in 2001. Headquartered in Cyberabad, Telangana, we specialize in offering comprehensive integrated Property Management Services such as Housekeeping, MEP, Security, Pest Control, Gardening, and more — all delivered in-house.

This web application serves as the digital front door for Amaze PMS, offering clients, partners, and future employees a beautifully designed, highly performant, and interactive experience to explore our services, footprint, and values.

### Key Features

- **Dynamic Animations**: Smooth, hardware-accelerated animations and page transitions using Framer Motion.
- **Modern UI/UX**: A premium dark-navy aesthetic with gold and primary blue accents, glassmorphism effects, and responsive layouts.
- **Comprehensive Service Portfolios**: Detailed sections for all integrated facility management offerings.
- **Recruitment & Careers Portal**: Dedicated workflows for manpower sourcing and skill development.
- **Global Loading State**: Custom-built, branded suspense loaders for seamless route navigation.
- **Performance Optimized**: Built on Next.js App Router for optimal SEO, Core Web Vitals, and fast load times.

---

## Tech Stack

This project is built with modern, cutting-edge web technologies:

- **Framework**: [Next.js](https://nextjs.org/) (React framework for the web)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Utility-first CSS framework)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (Production-ready animation library)
- **Icons**: [Lucide React](https://lucide.dev/) (Beautiful & consistent icon toolkit)
- **Deployment**: [Vercel](https://vercel.com) (Serverless deployment platform)

---

## Project Structure

```bash
src/
├── app/                  # Next.js App Router pages (Home, About, Services, Contact, etc.)
│   ├── about/            # About Us page
│   ├── careers/          # Careers and job openings
│   ├── contact/          # Contact information and forms
│   ├── our-clients/      # Trusted clients and portfolio
│   ├── recruitments/     # Recruitment strategy and skill development
│   ├── services/         # Detailed service offerings
│   ├── globals.css       # Global Tailwind and custom CSS variables
│   ├── layout.js         # Root layout with Navbar and Footer
│   └── loading.js        # Global suspense loading fallback
├── components/           # Reusable React components
│   ├── layout/           # Navbar, Footer, and structural components
│   ├── sections/         # Page-specific sections (Hero, TrustedBy, etc.)
│   └── ui/               # Reusable UI elements (LoadingSpinner, etc.)
```

---

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have Node.js installed on your machine.
- Node.js (v18.17.0 or higher recommended)
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/dacitos-company-project.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd dacitos-company-project
   ```

3. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **View the application**
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

---

## Deployment

This project is seamlessly deployed on **Vercel**. 
You can view the live production build here: [https://amaze-property-management.vercel.app](https://amaze-property-management.vercel.app)

To deploy your own version:
1. Push your code to a GitHub/GitLab/Bitbucket repository.
2. Import the project into your Vercel dashboard.
3. Vercel will automatically detect the Next.js framework and configure the build settings.

