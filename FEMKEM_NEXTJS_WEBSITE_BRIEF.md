# FEMKEM Hydroponics — Next.js Website Build Brief

## Authority Notice
This document is the **single source of truth** for this project.
No features, pages, components, animations, or logic may be added unless explicitly stated here.

Do not invent functionality.
Do not add dynamic behavior beyond what is described.
Do not introduce CMS, databases, auth, or backend services.

---

## Project Goal

Build a **static, fast, professional business website** for FEMKEM using Next.js.
The site should:
- Clearly communicate FEMKEM’s services
- Look trustworthy and modern
- Drive contact via phone, WhatsApp, and email
- Be low-maintenance after launch

---

## Tech Stack (Locked)

- Framework: **Next.js (App Router)**
- Rendering: **Static Site Generation (SSG)**
- Styling: **Tailwind CSS**
- Animations: **Framer Motion (light usage only)** OR CSS-only where possible
- Deployment: **Vercel / Netlify**
- Forms: **Email-based service (Formspree / Resend / EmailJS)**

No backend server.
No API routes.
No database.

---

## File & Folder Structure (Authoritative)

```txt
src/
  app/
    layout.tsx
    page.tsx            # Home
    about/
      page.tsx
    services/
      page.tsx
    projects/
      page.tsx
    contact/
      page.tsx
  components/
    layout/
      Header.tsx
      Footer.tsx
      MobileNav.tsx
    ui/
      Button.tsx
      Section.tsx
      Card.tsx
    home/
      Hero.tsx
      ServicesOverview.tsx
      WhyFEMKEM.tsx
      HowItWorks.tsx
    shared/
      PageHeader.tsx
      CTA.tsx
  data/
    services.ts
    projects.ts
  styles/
    globals.css
public/
  images/
    projects/
    logos/
tailwind.config.ts
Pages & Component Breakdown
Home (/)

Components:

Hero

ServicesOverview

WhyFEMKEM

HowItWorks

CTA

No sliders.
No carousels.

About (/about)

Components:

PageHeader

Text content section

Optional image block

Static content only.

Services (/services)

Components:

PageHeader

Service cards rendered from data/services.ts

No pricing tables.

Projects (/projects)

Components:

PageHeader

Image grid rendered from data/projects.ts

No autoplay.
No lightbox modal.

Contact (/contact)

Components:

PageHeader

ContactForm

ContactDetails

Form fields:

Name

Email

Phone

Message

Data Files
services.ts

Contains:

id

title

shortDescription

No markdown rendering.
No CMS.

projects.ts

Contains:

id

image

caption

Images served from /public/images/projects.

Design System
Colors (Tailwind Extended Theme)
colors: {
  primary: '#1E7F43',
  secondary: '#A3D9A5',
  background: '#FFFFFF',
  surface: '#F9FAF9',
  textPrimary: '#1A1A1A',
  textSecondary: '#555555',
  accent: '#E6F4EA'
}

Typography

Fonts:

Headings: Poppins

Body: Inter

Implementation:

Loaded via next/font

Headings: font-semibold / font-bold

Body: font-normal

Max width for readable text blocks

Layout Rules

Mobile-first

Max width: max-w-7xl

Consistent vertical spacing (py-16, gap-8)

Reusable Section component

No inline styles

Animations (Strict Rules)
Allowed

Fade-in on scroll

Slight y translate (≤ 12px)

Button hover transitions

Card hover elevation

Framer Motion Rules

Use motion.div sparingly

Use shared variants

Respect prefers-reduced-motion

No infinite loops

No parallax

CSS-only Alternative

transition-opacity

transition-transform

hover:translate-y-[-2px]

UI Components
Button

Variants:

Primary

Secondary

Outline

No gradients.
No shadows heavier than shadow-md.

Card

Rounded corners

Soft border

Hover lift (subtle)

Functional Features

Required:

Responsive navigation

WhatsApp floating button (link only)

Contact form submission

SEO metadata per page

Optional:

Static Google Map embed

SEO & Metadata

Use metadata in App Router

Page-specific titles

Descriptions written manually

OpenGraph basics only

Performance Constraints

Optimize images

Avoid unnecessary JS

No heavy animation libraries beyond Framer Motion

Lighthouse score should be reasonable

Explicitly Out of Scope

Do NOT add:

Authentication

Dashboards

Payments

Booking systems

Blogs

CMS

Admin panels

API routes

State management libraries

Analytics beyond basic

Success Criteria

The project is complete when:

All pages match this brief

Site is responsive

Contact methods work

No scope creep occurred

Final Principle

Ship clean. Ship simple. Ship once.

This is a business website, not a platform