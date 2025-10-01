/**
 * WEXFORD EDUCARE - BRAND COLORS
 *
 * Centralized color configuration for the entire application.
 * To change brand colors globally, update the values in app/globals.css
 *
 * Usage in components:
 * - Use CSS variables: bg-[var(--color-primary)]
 * - Use utility classes: bg-primary, text-secondary, gradient-secondary-primary
 * - Import constants: import { COLORS } from '@/lib/colors'
 */

export const COLORS = {
  // Primary Brand Color - Golden
  primary: {
    DEFAULT: '#dcb685',
    light: '#e8c89f',
    dark: '#c9a46b',
  },

  // Secondary Brand Color - Navy Blue
  secondary: {
    DEFAULT: '#051d44',
    light: '#0a2f61',
    dark: '#030f27',
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
 * Use these with Tailwind's arbitrary values: bg-[var(--color-primary)]
 */
export const CSS_VARS = {
  // Primary
  primary: 'var(--color-primary)',
  primaryLight: 'var(--color-primary-light)',
  primaryDark: 'var(--color-primary-dark)',

  // Secondary
  secondary: 'var(--color-secondary)',
  secondaryLight: 'var(--color-secondary-light)',
  secondaryDark: 'var(--color-secondary-dark)',

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
  bgPrimary: 'bg-primary',
  bgPrimaryLight: 'bg-primary-light',
  bgPrimaryDark: 'bg-primary-dark',
  bgSecondary: 'bg-secondary',
  bgSecondaryLight: 'bg-secondary-light',
  bgSecondaryDark: 'bg-secondary-dark',

  // Text Colors
  textPrimary: 'text-primary',
  textPrimaryLight: 'text-primary-light',
  textPrimaryDark: 'text-primary-dark',
  textSecondary: 'text-secondary',
  textSecondaryLight: 'text-secondary-light',
  textSecondaryDark: 'text-secondary-dark',

  // Border Colors
  borderPrimary: 'border-primary',
  borderSecondary: 'border-secondary',

  // Gradients
  gradientSecondaryPrimary: 'gradient-secondary-primary',
  gradientPrimarySecondary: 'gradient-primary-secondary',
  gradientSecondaryLight: 'gradient-secondary-light',

  // Hover Effects
  hoverPrimary: 'hover-primary',
  hoverSecondary: 'hover-secondary',
  hoverBgPrimary: 'hover-bg-primary',
  hoverBgSecondary: 'hover-bg-secondary',
} as const;

/**
 * Common Color Combinations
 * Pre-configured color combinations for consistent styling
 */
export const COLOR_COMBOS = {
  primaryButton: 'bg-[var(--color-secondary)] text-[var(--color-primary)]',
  secondaryButton: 'bg-white text-[var(--color-secondary)] border-2 border-[var(--color-secondary)]',
  cardBorder: 'border border-gray-100 hover:border-[var(--color-primary)]',
  heading: 'text-[var(--color-secondary)]',
  subheading: 'text-gray-600',
  link: 'text-gray-700 hover:text-[var(--color-secondary)]',
  navLink: 'text-gray-700 hover-secondary',
  primaryAccent: 'text-[var(--color-primary)]',
} as const;

/**
 * Gradient Definitions
 * Ready-to-use gradient styles
 */
export const GRADIENTS = {
  secondaryToPrimary: 'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%)',
  primaryToSecondary: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
  secondaryLight: 'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-secondary-light) 100%)',
  heroGradient: 'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-secondary-light) 50%, var(--color-primary) 100%)',
} as const;

export type ColorKey = keyof typeof COLORS;
export type UtilityClassName = typeof UTILITY_CLASSES[keyof typeof UTILITY_CLASSES];
