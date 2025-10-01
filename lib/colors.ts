/**
 * WEXFORD EDUCARE - BRAND COLORS
 *
 * Centralized color configuration for the entire application.
 * To change brand colors globally, update the values in app/globals.css
 *
 * Usage in components:
 * - Use CSS variables: bg-[var(--color-navy)]
 * - Use utility classes: bg-navy, text-gold, gradient-navy-gold
 * - Import constants: import { COLORS } from '@/lib/colors'
 */

export const COLORS = {
  // Primary Brand Color - Navy Blue
  navy: {
    DEFAULT: '#1e293b',
    light: '#334155',
    dark: '#0f172a',
  },

  // Secondary Brand Color - Royal Gold
  gold: {
    DEFAULT: '#d4af37',
    light: '#f4d03f',
    dark: '#b8941e',
  },

  // Background Colors
  background: '#ffffff',
  foreground: '#1a1a2e',

  // Gray Scale
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
} as const;

/**
 * CSS Variable Names
 * Use these with Tailwind's arbitrary values: bg-[var(--color-navy)]
 */
export const CSS_VARS = {
  // Navy
  navy: 'var(--color-navy)',
  navyLight: 'var(--color-navy-light)',
  navyDark: 'var(--color-navy-dark)',

  // Gold
  gold: 'var(--color-gold)',
  goldLight: 'var(--color-gold-light)',
  goldDark: 'var(--color-gold-dark)',

  // Backgrounds
  background: 'var(--background)',
  foreground: 'var(--foreground)',
} as const;

/**
 * Tailwind Utility Classes
 * Pre-defined utility classes for brand colors
 */
export const UTILITY_CLASSES = {
  // Background Colors
  bgNavy: 'bg-navy',
  bgNavyLight: 'bg-navy-light',
  bgNavyDark: 'bg-navy-dark',
  bgGold: 'bg-gold',
  bgGoldLight: 'bg-gold-light',
  bgGoldDark: 'bg-gold-dark',

  // Text Colors
  textNavy: 'text-navy',
  textNavyLight: 'text-navy-light',
  textNavyDark: 'text-navy-dark',
  textGold: 'text-gold',
  textGoldLight: 'text-gold-light',
  textGoldDark: 'text-gold-dark',

  // Border Colors
  borderNavy: 'border-navy',
  borderGold: 'border-gold',

  // Gradients
  gradientNavyGold: 'gradient-navy-gold',
  gradientGoldNavy: 'gradient-gold-navy',
  gradientNavyLight: 'gradient-navy-light',

  // Hover Effects
  hoverGold: 'hover-gold',
  hoverNavy: 'hover-navy',
  hoverBgGold: 'hover-bg-gold',
  hoverBgNavy: 'hover-bg-navy',
} as const;

/**
 * Common Color Combinations
 * Pre-configured color combinations for consistent styling
 */
export const COLOR_COMBOS = {
  primaryButton: 'bg-gradient-to-r from-[var(--color-navy)] to-[var(--color-gold)] text-white',
  secondaryButton: 'bg-white text-[var(--color-navy)] border-2 border-[var(--color-navy)]',
  cardBorder: 'border border-gray-100 hover:border-[var(--color-gold)]',
  heading: 'text-[var(--color-navy)]',
  subheading: 'text-gray-600',
  link: 'text-gray-700 hover:text-[var(--color-navy)]',
  navLink: 'text-gray-700 hover-navy',
  goldAccent: 'text-[var(--color-gold)]',
} as const;

/**
 * Gradient Definitions
 * Ready-to-use gradient styles
 */
export const GRADIENTS = {
  navyToGold: 'linear-gradient(135deg, var(--color-navy) 0%, var(--color-gold) 100%)',
  goldToNavy: 'linear-gradient(135deg, var(--color-gold) 0%, var(--color-navy) 100%)',
  navyLight: 'linear-gradient(135deg, var(--color-navy) 0%, var(--color-navy-light) 100%)',
  heroGradient: 'linear-gradient(135deg, var(--color-navy) 0%, var(--color-navy-light) 50%, var(--color-gold) 100%)',
} as const;

export type ColorKey = keyof typeof COLORS;
export type UtilityClassName = typeof UTILITY_CLASSES[keyof typeof UTILITY_CLASSES];
