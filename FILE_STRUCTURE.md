# Wexford Educare - File Structure Documentation

## Overview
This document outlines the complete file structure for the Wexford Educare Next.js application.

## Directory Structure

```
wexford-educare/
├── app/                          # Next.js 15 App Router
│   ├── (marketing)/              # Marketing pages group
│   │   ├── layout.tsx            # Shared layout for marketing pages
│   │   ├── page.tsx              # Homepage (already exists)
│   │   ├── about-us/
│   │   │   └── page.tsx          # About Us page
│   │   ├── courses/
│   │   │   ├── page.tsx          # Courses listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # Individual course page
│   │   ├── contact-us/
│   │   │   └── page.tsx          # Contact page
│   │   ├── guidance/
│   │   │   └── page.tsx          # Guidance page
│   │   └── apply-now/
│   │       └── page.tsx          # Application page
│   ├── globals.css               # Global styles (already exists)
│   ├── layout.tsx                # Root layout (already exists)
│   └── favicon.ico               # Favicon (already exists)
│
├── components/                   # React components
│   ├── layout/                   # Layout components
│   │   ├── AceternityNavbar.tsx  # Main navbar (already exists)
│   │   ├── Footer.tsx            # Footer (already exists)
│   │   └── WhatsAppButton.tsx    # WhatsApp button (already exists)
│   │
│   ├── home/                     # Homepage-specific components
│   │   ├── AceternityHero.tsx    # Hero carousel (already exists)
│   │   ├── AceternityWhyChooseUs.tsx  # Why Choose Us (already exists)
│   │   ├── AceternityTestimonials.tsx # Testimonials (already exists)
│   │   ├── CourseCategories.tsx  # Course categories (already exists)
│   │   ├── TrendingCourses.tsx   # Trending courses (already exists)
│   │   └── Partners.tsx          # Partners section (already exists)
│   │
│   ├── about/                    # About page components
│   │   ├── AboutHero.tsx
│   │   ├── OurMission.tsx
│   │   ├── OurTeam.tsx
│   │   └── OurValues.tsx
│   │
│   ├── courses/                  # Course page components
│   │   ├── CourseCard.tsx
│   │   ├── CourseFilters.tsx
│   │   ├── CourseGrid.tsx
│   │   └── CourseDetails.tsx
│   │
│   ├── contact/                  # Contact page components
│   │   ├── ContactForm.tsx
│   │   ├── ContactInfo.tsx
│   │   └── GoogleMap.tsx
│   │
│   ├── shared/                   # Shared/reusable components
│   │   ├── PageHero.tsx          # Reusable page hero
│   │   ├── SectionHeading.tsx    # Consistent section headings
│   │   ├── CTASection.tsx        # Call-to-action sections
│   │   └── Breadcrumb.tsx        # Breadcrumb navigation
│   │
│   └── ui/                       # UI primitives (shadcn/Aceternity)
│       ├── wavy-background.tsx   # (already exists)
│       ├── 3d-card.tsx           # (already exists)
│       ├── animated-testimonials.tsx # (already exists)
│       ├── particles.tsx         # (already exists)
│       ├── meteors.tsx           # (already exists)
│       ├── button.tsx            # (already exists)
│       ├── navigation-menu.tsx   # (already exists)
│       └── popover.tsx           # (already exists)
│
├── lib/                          # Utility functions
│   ├── utils.ts                  # cn() utility (already exists)
│   └── colors.ts                 # Color constants (already exists)
│
├── public/                       # Static assets
│   ├── images/                   # Images
│   └── [logo files]              # (already exist)
│
└── types/                        # TypeScript types
    ├── course.ts                 # Course types
    ├── navigation.ts             # Navigation types
    └── common.ts                 # Common types
```

## Route Structure

| Route              | File Path                           | Description                    |
|--------------------|-------------------------------------|--------------------------------|
| `/`                | `app/(marketing)/page.tsx`          | Homepage                       |
| `/about-us`        | `app/(marketing)/about-us/page.tsx` | About Us                       |
| `/courses`         | `app/(marketing)/courses/page.tsx`  | All Courses                    |
| `/courses/[slug]`  | `app/(marketing)/courses/[slug]/page.tsx` | Individual Course       |
| `/contact-us`      | `app/(marketing)/contact-us/page.tsx` | Contact                      |
| `/guidance`        | `app/(marketing)/guidance/page.tsx` | Student Guidance               |
| `/apply-now`       | `app/(marketing)/apply-now/page.tsx` | Application Form              |

## Navigation Items (from navbar)

Current navigation:
- Homepage (/)
- About Us (/about-us)
- Courses (/courses)
- Contact Us (/contact-us)
- Guidance (/guidance)
- Apply Now (CTA button)

## Component Organization Principles

1. **Route Groups**: Use `(marketing)` to group public-facing pages
2. **Component Colocation**: Keep page-specific components near their routes
3. **Shared Components**: Reusable components go in `components/shared/`
4. **UI Primitives**: All shadcn/Aceternity components in `components/ui/`
5. **Layout Components**: Navbar, Footer, etc. in `components/layout/`

## Next Steps

1. Create route structure in `app/(marketing)/`
2. Build shared layout for marketing pages
3. Create page components for each route
4. Build reusable section components
5. Define TypeScript types for data structures
