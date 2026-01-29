// Design Tokens - Extracted from Hero Component Design

export const colors = {
  // Brand Colors
  primary: {
    purple: {
      400: '#c084fc', // text-purple-400
      500: '#a855f7', // border-purple-500
      600: '#9333ea', // bg-purple-600
      700: '#7e22ce', // hover:bg-purple-700
    },
  },

  // Background Colors
  background: {
    dark: {
      start: '#050B1E', // from-[#050B1E]
      end: '#020617',   // to-[#020617]
    },
  },

  // Text Colors
  text: {
    primary: '#ffffff',
    secondary: '#d1d5db', // text-gray-300
  },
};

export const typography = {
  // Font Sizes
  fontSize: {
    sm: '0.875rem',   // text-sm (14px)
    lg: '1.125rem',   // text-lg (18px)
    '4xl': '2.25rem', // text-4xl (36px)
    '6xl': '3.75rem', // text-6xl (60px)
  },

  // Font Weights
  fontWeight: {
    semibold: '600',   // font-semibold
    extrabold: '800',  // font-extrabold
  },

  // Line Heights
  lineHeight: {
    tight: '1.25',
  },

  // Letter Spacing
  letterSpacing: {
    tight: '-0.025em', // tracking-tight
  },
};

export const spacing = {
  // Padding
  padding: {
    section: {
      x: '1.5rem', // px-6 (24px)
      y: '8rem',   // py-32 (128px)
    },
    button: {
      x: '2rem',   // px-8 (32px)
      y: '1rem',   // py-4 (16px)
    },
  },

  // Margins
  margin: {
    text: '1.5rem',  // mt-6 (24px)
    button: '3rem',  // mt-12 (48px)
  },

  // Gaps
  gap: {
    button: '1.5rem', // gap-6 (24px)
  },

  // Max Width
  maxWidth: {
    container: '72rem', // max-w-6xl (1152px)
    text: '42rem',      // max-w-2xl (672px)
  },
};

export const borderRadius = {
  lg: '0.5rem', // rounded-lg (8px)
};

export const effects = {
  gradient: {
    hero: 'linear-gradient(to bottom, #050B1E, #020617)',
  },
  
  hover: {
    opacity: {
      purple: '0.1', // hover:bg-purple-500/10
    },
  },
};

// Component-specific styles
export const components = {
  button: {
    primary: {
      bg: colors.primary.purple[600],
      bgHover: colors.primary.purple[700],
      text: colors.text.primary,
      padding: `${spacing.padding.button.y} ${spacing.padding.button.x}`,
      borderRadius: borderRadius.lg,
      fontSize: typography.fontSize.sm,
      fontWeight: typography.fontWeight.semibold,
    },
    secondary: {
      border: `1px solid ${colors.primary.purple[500]}`,
      bgHover: `${colors.primary.purple[500]}10`,
      text: colors.text.primary,
      padding: `${spacing.padding.button.y} ${spacing.padding.button.x}`,
      borderRadius: borderRadius.lg,
      fontSize: typography.fontSize.sm,
      fontWeight: typography.fontWeight.semibold,
    },
  },
  
  hero: {
    background: effects.gradient.hero,
    titleColor: {
      primary: colors.primary.purple[400],
      secondary: colors.text.primary,
    },
    subtitleColor: colors.text.secondary,
  },
};
