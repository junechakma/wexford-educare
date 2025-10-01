# Wexford Educare - Deployment Guide for Hostinger

## ✅ Build Success!

Your site is now configured for static export and ready for Hostinger deployment.

---

## 📁 File Structure Summary

### What is `(marketing)`?
- **Route Group**: The parentheses mean it's an **organizational folder** only
- **NOT in URL**: `/about-us` ❌NOT `/marketing/about-us`
- **Purpose**: Groups all public pages and shares the same layout (Navbar, Footer, WhatsAppButton)

### Current Structure:
```
app/
├── (marketing)/              ← Route group (not in URL!)
│   ├── layout.tsx            ← Shared: Navbar + Footer + WhatsAppButton
│   ├── page.tsx              → Homepage (/)
│   ├── about-us/page.tsx     → /about-us
│   ├── courses/page.tsx      → /courses  
│   ├── courses/[slug]/page.tsx → /courses/example-course-1
│   ├── contact-us/page.tsx   → /contact-us
│   ├── guidance/page.tsx     → /guidance
│   └── apply-now/page.tsx    → /apply-now
│
components/
├── layout/                   ← Navbar, Footer, WhatsAppButton
├── home/                     ← Homepage components
├── ui/                       ← Aceternity/shadcn components
└── [other organized folders]
```

---

## 🚀 Deployment Steps for Hostinger

### Step 1: Build Static Files

```bash
npm run build
```

✅ This creates an `/out` directory with static HTML files.

### Step 2: What's in `/out` Directory

```
out/
├── index.html              ← Homepage
├── about-us/
│   └── index.html          ← About Us page
├── courses/
│   ├── index.html          ← Courses listing
│   ├── example-course-1/index.html
│   └── example-course-2/index.html
├── contact-us/index.html
├── guidance/index.html
├── apply-now/index.html
├── _next/                  ← CSS/JS assets
├── images/                 ← Images
├── favicon.ico
└── [logo files]
```

### Step 3: Upload to Hostinger

**Option A: File Manager (Recommended for beginners)**
1. Log in to Hostinger hPanel
2. Go to **File Manager**
3. Navigate to `public_html/` directory
4. **Delete all existing files** in public_html (if any)
5. **Upload entire `/out` folder contents** to `public_html/`
   - Upload `index.html`
   - Upload all folders (`about-us/`, `courses/`, etc.)
   - Upload `_next/` folder
   - Upload all image files

**Option B: FTP (Recommended for large sites)**
1. Use FileZilla or any FTP client
2. Connect using Hostinger FTP credentials
3. Navigate to `public_html/`
4. Upload entire `/out` folder contents

**Option C: Git Deployment**
1. Push code to GitHub
2. Use Hostinger's Git deployment feature
3. Set build command: `npm run build`
4. Set publish directory: `out`

### Step 4: Configure Domain

1. Go to Hostinger hPanel → **Domains**
2. Point your domain to `public_html/` (should be default)
3. Wait for DNS propagation (up to 24 hours, usually minutes)

### Step 5: Verify Deployment

Visit your domain:
- `yourdomain.com/` → Homepage
- `yourdomain.com/about-us/` → About Us
- `yourdomain.com/courses/` → Courses
- etc.

---

## 🔧 Configuration Explained

### `next.config.ts`
```typescript
const nextConfig: NextConfig = {
  output: 'export',         // Generate static HTML files
  images: {
    unoptimized: true,      // Required for static export
  },
  trailingSlash: true,      // Ensures /about-us/ not /about-us
};
```

### Why These Settings?

1. **`output: 'export'`**: Tells Next.js to generate static HTML files instead of server-side rendering
2. **`unoptimized: true`**: Disables Next.js Image Optimization (requires a server)
3. **`trailingSlash: true`**: Ensures URLs end with `/` for better compatibility

---

## 📝 Adding New Pages

### 1. Create New Page File
```bash
# Example: Create a "Services" page
mkdir -p app/(marketing)/services
touch app/(marketing)/services/page.tsx
```

### 2. Page Template
```typescript
export default function Services() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-navy mb-6">
        Our Services
      </h1>
      <p className="text-lg text-gray-700">
        Services content here...
      </p>
    </div>
  );
}
```

### 3. Add to Navigation
Update `components/layout/AceternityNavbar.tsx`:
```typescript
const navItems = [
  { name: 'Homepage', href: '/', active: true },
  { name: 'About Us', href: '/about-us' },
  { name: 'Services', href: '/services' },  // ← Add this
  { name: 'Courses', href: '/courses' },
  { name: 'Contact Us', href: '/contact-us' },
  { name: 'Guidance', href: '/guidance' },
];
```

### 4. Rebuild and Deploy
```bash
npm run build
# Upload new /out contents to Hostinger
```

---

## 📊 Adding Dynamic Courses

### Update `app/(marketing)/courses/[slug]/page.tsx`

```typescript
export async function generateStaticParams() {
  return [
    { slug: 'business-management' },
    { slug: 'healthcare-studies' },
    { slug: 'computing-it' },
    { slug: 'engineering' },
    { slug: 'hospitality-tourism' },
    // Add all your actual courses
  ];
}
```

This pre-generates HTML for:
- `/courses/business-management/`
- `/courses/healthcare-studies/`
- etc.

---

## 🎨 Component Organization

### Layout Components (`components/layout/`)
- Shared across all pages
- Navbar, Footer, WhatsAppButton

### Home Components (`components/home/`)
- Homepage-specific
- Hero, Why Choose Us, Testimonials, etc.

### UI Components (`components/ui/`)
- Reusable primitives
- Aceternity effects, shadcn components

### Page-Specific Components
- Create folders like `components/about/`, `components/courses/`
- Keep components close to where they're used

---

## ⚠️ Important Notes

### ❌ Cannot Use (Static Export Limitations):
- API Routes (`/api/*`)
- Server Actions
- Server-side rendering (SSR)
- Dynamic data fetching on the server
- Image Optimization

### ✅ Can Use:
- Client Components (`'use client'`)
- All styling (Tailwind, CSS, Aceternity)
- Client-side data fetching
- Forms (with third-party services like Formspree)
- All animations and effects

---

## 🔄 Update Workflow

1. **Make changes** to code
2. **Test locally**: `npm run dev`
3. **Build**: `npm run build`
4. **Upload** `/out` contents to Hostinger
5. **Clear browser cache** and test

---

## 📞 Support

If you need help:
1. Check build errors: `npm run build`
2. Check dev server: `npm run dev`
3. Verify `/out` directory was created
4. Check Hostinger File Manager for correct file structure

Your site is **production-ready** and optimized for Hostinger! 🎉
