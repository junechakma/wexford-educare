# 🎨 Wexford Educare - Color System Guide

## Quick Start: Changing Brand Colors

### Option 1: Update CSS Variables (Recommended)

Edit `app/globals.css` and change the color values at the top:

```css
:root {
  /* Brand Colors - PRIMARY (Navy Blue) */
  --color-navy: #1e293b;        /* Change this for main navy */
  --color-navy-light: #334155;  /* Lighter shade of navy */
  --color-navy-dark: #0f172a;   /* Darker shade of navy */

  /* Brand Colors - SECONDARY (Royal Gold) */
  --color-gold: #d4af37;        /* Change this for gold accent */
  --color-gold-light: #f4d03f;  /* Lighter shade of gold */
  --color-gold-dark: #b8941e;   /* Darker shade of gold */
}
```

**That's it!** All colors across the entire website will update automatically.

---

## Color Usage in Components

### Method 1: Use Utility Classes (Easiest)

```tsx
// Background colors
<div className="bg-navy">Navy background</div>
<div className="bg-gold">Gold background</div>

// Text colors
<h1 className="text-navy">Navy text</h1>
<p className="text-gold">Gold text</p>

// Borders
<div className="border-navy">Navy border</div>
<div className="border-gold">Gold border</div>

// Gradients
<div className="gradient-navy-gold">Navy to Gold gradient</div>
<div className="gradient-gold-navy">Gold to Navy gradient</div>

// Hover effects
<a className="hover-gold">Hover changes to gold</a>
<button className="hover-bg-navy">Hover background changes to navy</button>
```

### Method 2: Use CSS Variables with Tailwind

```tsx
// For inline styles
<div className="bg-[var(--color-navy)]">Navy background</div>
<div className="text-[var(--color-gold)]">Gold text</div>
<div className="border-[var(--color-gold)]">Gold border</div>

// For gradients
<div className="bg-gradient-to-r from-[var(--color-navy)] to-[var(--color-gold)]">
  Navy to Gold gradient
</div>
```

### Method 3: Import Color Constants (TypeScript)

```tsx
import { COLORS, CSS_VARS, COLOR_COMBOS } from '@/lib/colors';

// Use hex values
const navyColor = COLORS.navy.DEFAULT; // '#1e293b'
const goldColor = COLORS.gold.DEFAULT; // '#d4af37'

// Use CSS variables
<div style={{ color: CSS_VARS.navy }}>Navy text</div>

// Use pre-defined combinations
<button className={COLOR_COMBOS.primaryButton}>Primary Button</button>
<button className={COLOR_COMBOS.secondaryButton}>Secondary Button</button>
```

---

## Available Colors

### Primary: Navy Blue
- `--color-navy` / `.bg-navy` / `.text-navy` → **#1e293b**
- `--color-navy-light` / `.bg-navy-light` → **#334155**
- `--color-navy-dark` / `.bg-navy-dark` → **#0f172a**

### Secondary: Royal Gold
- `--color-gold` / `.bg-gold` / `.text-gold` → **#d4af37**
- `--color-gold-light` / `.bg-gold-light` → **#f4d03f**
- `--color-gold-dark` / `.bg-gold-dark` → **#b8941e**

### Gradients
- `.gradient-navy-gold` → Navy to Gold (left to right)
- `.gradient-gold-navy` → Gold to Navy (left to right)
- `.gradient-navy-light` → Navy to Navy Light

---

## Pre-built Color Combinations

Import from `lib/colors.ts`:

```tsx
import { COLOR_COMBOS } from '@/lib/colors';

// Primary button: Navy to Gold gradient
<button className={COLOR_COMBOS.primaryButton}>Apply Now</button>

// Secondary button: White with navy border
<button className={COLOR_COMBOS.secondaryButton}>Learn More</button>

// Headings
<h1 className={COLOR_COMBOS.heading}>Main Heading</h1>

// Links
<a className={COLOR_COMBOS.link}>Click here</a>

// Card borders
<div className={COLOR_COMBOS.cardBorder}>Card content</div>
```

---

## Examples

### Button Styles

```tsx
// Primary Button
<button className="bg-gradient-to-r from-[var(--color-navy)] to-[var(--color-gold)] text-white px-6 py-3 rounded-full">
  Apply Now
</button>

// Secondary Button
<button className="bg-white text-[var(--color-navy)] border-2 border-[var(--color-navy)] px-6 py-3 rounded-full hover:bg-[var(--color-navy)] hover:text-white">
  Learn More
</button>
```

### Card with Gold Border on Hover

```tsx
<div className="bg-white border border-gray-100 hover:border-[var(--color-gold)] rounded-xl p-6">
  Card content
</div>
```

### Heading with Navy Text

```tsx
<h2 className="text-4xl font-bold text-[var(--color-navy)]">
  Why Choose Us?
</h2>
```

### Navigation Link with Gold Hover

```tsx
<a href="/" className="text-gray-700 hover:text-[var(--color-gold)]">
  Home
</a>
```

---

## Changing Colors Globally

### To change from Navy/Gold to a different color scheme:

1. **Open `app/globals.css`**

2. **Update the CSS variables:**

```css
:root {
  /* Example: Change to Blue/Orange theme */
  --color-navy: #1e40af;        /* Blue 700 */
  --color-navy-light: #3b82f6;  /* Blue 500 */
  --color-navy-dark: #1e3a8a;   /* Blue 800 */

  --color-gold: #f97316;        /* Orange 500 */
  --color-gold-light: #fb923c;  /* Orange 400 */
  --color-gold-dark: #ea580c;   /* Orange 600 */
}
```

3. **Save the file** - All colors update automatically! ✨

---

## Files to Edit

### Primary Configuration
- **`app/globals.css`** - Main color definitions (START HERE)
- **`lib/colors.ts`** - TypeScript constants (optional, for reference)

### Component Files
All components already use CSS variables, so **no changes needed** when you update colors in `globals.css`!

---

## Best Practices

✅ **DO:**
- Use CSS variables: `var(--color-navy)`
- Use utility classes: `.bg-navy`, `.text-gold`
- Import from `lib/colors.ts` for TypeScript projects
- Update colors in `globals.css` only

❌ **DON'T:**
- Hardcode hex values like `#1e293b` directly in components
- Use `blue-900` or other Tailwind default colors for brand colors
- Mix different color naming conventions

---

## Need Help?

If you want to change the brand colors:
1. Go to `app/globals.css`
2. Find the `:root` section at the top
3. Change the hex values for `--color-navy` and `--color-gold`
4. Save and refresh your browser

That's it! 🎉
