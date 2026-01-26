# FEMKEM Hydroponics Website

A modern, professional business website for FEMKEM Hydroponics built with Next.js, featuring services, projects, and contact information for hydroponic system solutions.

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Language:** TypeScript
- **Font:** Poppins (headings) & Inter (body)

## 📁 Project Structure

```
femkem/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects gallery page
│   ├── services/          # Services page
│   ├── layout.tsx         # Root layout with header/footer
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles with custom theme
├── components/
│   ├── home/              # Home page specific components
│   │   ├── Hero.tsx
│   │   ├── ServicesOverview.tsx
│   │   ├── WhyFEMKEM.tsx
│   │   └── HowItWorks.tsx
│   ├── layout/            # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MobileNav.tsx
│   ├── shared/            # Shared components
│   │   ├── PageHeader.tsx
│   │   └── CTA.tsx
│   └── ui/                # Reusable UI components
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Section.tsx
├── data/                  # Static data
│   ├── services.ts
│   └── projects.ts
└── public/
    └── images/            # Image assets
        ├── projects/
        └── logos/
```

## 🎨 Design System

### Colors
- **Primary:** `#1E7F43` (Green)
- **Secondary:** `#A3D9A5` (Light Green)
- **Background:** `#FFFFFF` (White)
- **Surface:** `#F9FAF9` (Light Gray)
- **Text Primary:** `#1A1A1A` (Dark)
- **Text Secondary:** `#555555` (Gray)
- **Accent:** `#E6F4EA` (Very Light Green)

### Typography
- **Headings:** Poppins (600/700 weight)
- **Body:** Inter (400 weight)

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd femkem
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🌐 Pages

- **/** - Home page with hero, services overview, benefits, and process
- **/about** - Company information, mission, and values
- **/services** - Detailed service offerings
- **/projects** - Portfolio of completed projects
- **/contact** - Contact form and business information

## 📦 Features

- ✅ Fully responsive design
- ✅ SEO optimized with metadata
- ✅ Smooth animations with Framer Motion
- ✅ WhatsApp floating button
- ✅ Mobile-friendly navigation
- ✅ Contact form (ready for email service integration)
- ✅ Static site generation (SSG)
- ✅ Accessibility compliant

## 🔧 Customization

### Update Contact Information

Edit the following files:
- `components/layout/Footer.tsx` - Footer contact details
- `app/contact/page.tsx` - Contact page details
- `app/layout.tsx` - WhatsApp button link

### Update Services

Edit `data/services.ts` to add, remove, or modify services.

### Update Projects

Edit `data/projects.ts` and add images to `public/images/projects/`.

### Update Colors

Modify the theme in `app/globals.css` under the `@theme` block.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Deploy with one click

### Netlify

1. Push your code to GitHub
2. Import the project in [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`

## 📧 Email Integration

To enable the contact form, integrate with:
- [Formspree](https://formspree.io)
- [EmailJS](https://www.emailjs.com)
- [Resend](https://resend.com)

Update the form submission handler in `app/contact/page.tsx`.

## 📄 License

© 2026 FEMKEM Hydroponics. All rights reserved.

## 👨‍💻 Support

For support, email info@femkem.com or visit our contact page.

