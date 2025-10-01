# File Structure Explanation

## What is `(marketing)` ?

The `(marketing)` folder is a **Route Group** in Next.js 15 App Router.

### Key Points:

1. **Parentheses = Route Group**: The `()` means it's a **grouping folder** that doesn't affect the URL
2. **URL Impact**: The folder name is **NOT** included in the URL path
3. **Organization**: Used to organize related routes without changing URLs

### Example:
```
app/
├── (marketing)/
│   ├── about-us/page.tsx    → URL: /about-us (NOT /marketing/about-us)
│   ├── courses/page.tsx     → URL: /courses (NOT /marketing/courses)
│   └── page.tsx             → URL: / (homepage)
```

### Why Use It?

1. **Shared Layouts**: All pages in `(marketing)` share the same `layout.tsx` (Navbar, Footer, etc.)
2. **Code Organization**: Group public-facing pages separately from admin/auth pages
3. **Clean URLs**: Keep URLs simple without extra segments

### Alternative Structure (if you prefer):

You can also put pages directly in `app/` without route groups:
```
app/
├── about-us/page.tsx
├── courses/page.tsx
└── page.tsx
```

Both approaches work the same for URLs. Route groups just help with organization.

---

## Static Export for Hostinger

To deploy a static site to Hostinger, you need to configure Next.js for static export.

### Configuration Steps:

1. **Update `next.config.js`**:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static export
  images: {
    unoptimized: true,  // Required for static export
  },
  // Remove any server-side features
  // No API routes, no server actions
}

module.exports = nextConfig
```

2. **Build Commands**:
```bash
npm run build    # Creates static files in /out directory
```

3. **What Gets Generated**:
```
out/
├── index.html              # Homepage
├── about-us.html          # About page
├── courses.html           # Courses page
├── contact-us.html        # Contact page
├── _next/                 # JS/CSS assets
└── images/                # Static images
```

4. **Upload to Hostinger**:
- Upload entire `/out` folder to public_html
- Or use Hostinger's File Manager
- Point domain to the folder

### Important Limitations for Static Export:

❌ **Cannot Use:**
- API Routes (`app/api/*`)
- Server Actions
- Dynamic routes without `generateStaticParams`
- Server Components with dynamic data fetching
- Image Optimization (use `unoptimized: true`)

✅ **Can Use:**
- Client Components
- Static pages
- Dynamic routes with pre-generated paths
- All CSS/styling
- Client-side data fetching

### For Your Wexford Educare Site:

**Current Structure Works!** ✅
- All pages are static
- No API routes
- Client components only
- Perfect for Hostinger static hosting

**Dynamic Course Pages** (`/courses/[slug]`):
You'll need to pre-generate all course pages. Example:

```typescript
// app/(marketing)/courses/[slug]/page.tsx
export async function generateStaticParams() {
  return [
    { slug: 'business-management' },
    { slug: 'healthcare-studies' },
    { slug: 'computing' },
    // Add all your courses here
  ]
}
```

This pre-generates HTML for each course at build time.
