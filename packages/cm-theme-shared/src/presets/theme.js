const screens = require('./screens');

module.exports = {
  screens,
  colors: {
    primary: 'var(--cm-color-primary)',
    white: 'var(--cm-color-white)',
    darkWhite: 'var(--cm-color-white-darker)',
    error: 'var(--cm-color-error)',
    success: 'var(--cm-color-success)',
    base: 'var(--cm-color-base)',
    disabled: 'var(--cm-color-disabled)',
    softDisabled: 'var(--cm-color-disabled-soft)',
  },
  spacing: {
    '1px': '1px',
    1: 'var(--cm-space_1)',
    2: 'var(--cm-space_2)',
    3: 'var(--cm-space_3)',
    4: 'var(--cm-space_4)',
    5: 'var(--cm-space_5)',
    6: 'var(--cm-space_6)',
    7: 'var(--cm-space_7)',
    8: 'var(--cm-space_8)',
    9: 'var(--cm-space_9)',
  },
  fontSize: {
    '8xl': ['var(--cm-typo_font-size--7xl)', { lineHeight: 'var(--cm-typo_line-height--7xl)' }],
    '7xl': ['var(--cm-typo_font-size--7xl)', { lineHeight: 'var(--cm-typo_line-height--7xl)' }],
    '6xl': ['var(--cm-typo_font-size--6xl)', { lineHeight: 'var(--cm-typo_line-height--6xl)' }],
    '5xl': ['var(--cm-typo_font-size--5xl)', { lineHeight: 'var(--cm-typo_line-height--5xl)' }],
    '4xl': ['var(--cm-typo_font-size--4xl)', { lineHeight: 'var(--cm-typo_line-height--4xl)' }],
    '3xl': ['var(--cm-typo_font-size--3xl)', { lineHeight: 'var(--cm-typo_line-height--3xl)' }],
    '2xl': ['var(--cm-typo_font-size--2xl)', { lineHeight: 'var(--cm-typo_line-height--2xl)' }],
    xl: ['var(--cm-typo_font-size--xl)', { lineHeight: 'var(--cm-typo_line-height--xl)' }],
    lg: ['var(--cm-typo_font-size--lg)', { lineHeight: 'var(--cm-typo_line-height--lg)' }],
    base: ['var(--cm-typo_font-size--base)', { lineHeight: 'var(--cm-typo_line-height--base)' }],
    sm: ['var(--cm-typo_font-size--sm)', { lineHeight: 'var(--cm-typo_line-height--sm)' }],
    xs: ['var(--cm-typo_font-size--xs)', { lineHeight: 'var(--cm-typo_line-height--xs)' }],
  },
  fontWeight: {
    bold: 'var(--cm-typo_font-weight--bold)',
    medium: 'var(--cm-typo_font-weight--medium)',
    regular: 'var(--cm-typo_font-weight--regular)',
  },
  fontFamily: {
    sans: 'var(--cm-typo_font-family--sans)',
  },
};
