# Wexford Educare Website

A modern, responsive Next.js website for Wexford Educare - UK Higher Education Consultants.

## Project Structure

```
wexford-educare/
├── app/
│   ├── layout.tsx          # Root layout with Poppins font
│   ├── page.tsx            # Homepage with all sections
│   ├── globals.css         # Global styles with Tailwind
│   └── favicon.ico         # Site favicon
├── components/
│   ├── Header.tsx          # Sticky header with navigation
│   ├── Hero.tsx            # Hero carousel (3 slides)
│   ├── WhyChooseUs.tsx     # 3D flip cards section
│   ├── CourseCategories.tsx # Course categories grid
│   ├── TrendingCourses.tsx # Trending courses with pagination
│   ├── Partners.tsx        # Partner logos carousel
│   ├── Testimonials.tsx    # Testimonials carousel
│   ├── Footer.tsx          # Footer with links and contact
│   └── WhatsAppButton.tsx  # Floating WhatsApp button
├── public/
│   └── images/             # All images go here
├── inspiration/            # Original HTML inspiration
└── package.json
```

## Features

- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Modern UI** - Gradient backgrounds, smooth animations
- ✅ **Interactive Components** - Carousels, flip cards, hover effects
- ✅ **SEO Optimized** - Proper meta tags and semantic HTML
- ✅ **TypeScript** - Type-safe code
- ✅ **Tailwind CSS** - Utility-first styling
- ✅ **Next.js 15** - Latest features with Turbopack

## Sections

1. **Header** - Top bar with social links & contact + sticky navigation
2. **Hero** - Auto-rotating carousel with 3 slides and CTAs
3. **Why Choose Us** - 4 flip cards showcasing key features
4. **Course Categories** - HND, Top-Up, Bachelor's, Master's
5. **Trending Courses** - Grid with pagination
6. **Partners** - Carousel of 20+ university logos
7. **Testimonials** - 6 testimonials with carousel navigation
8. **Footer** - Contact info, links, accreditations
9. **WhatsApp Button** - Floating contact button

## Getting Started

### Install Dependencies
```bash
npm install
```

### Add Images
Place all images from the original site into `public/images/`:
- Logo: `cropped-blossom-logo-removebg.png`
- Course categories: `2-692x1024.jpg`, `3-692x1024.jpg`, `4-692x1024.jpg`, etc.
- Partner logos: `gbs.png`, `CECOS-College-London.webp`, etc.
- Accreditations: `british.webp`, `ico.webp`

### Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```bash
npm run build
npm start
```

## Technologies

- **Framework:** Next.js 15.5.4
- **React:** 19.1.0
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React
- **Font:** Poppins (Google Fonts)
- **TypeScript:** 5.x

## Contact Information

- **Phone:** 02080894489
- **WhatsApp:** +447437402307
- **Email:** info@wexfordeducare.com
- **Address:** 129 Mile End Road, London, E1 4BG, UK
- **Company Number:** 13810286

## License

All Rights Reserved © 2020-2025 Wexford Educare
