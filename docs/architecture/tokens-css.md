# `src/styles/private-estates-tokens.css`

```css
:root {
  /* Canvas */
  --pe-bg: #fbf9f4;
  --pe-surface-soft: #f4f0e8;
  --pe-surface-low: #f1ece3;
  --pe-surface-high: #ebe5db;
  --pe-surface-strong: #ddd4c7;

  /* Brand */
  --pe-brand: #003331;
  --pe-brand-2: #004b49;
  --pe-brand-3: #0b5c58;
  --pe-gold: #c9a95f;
  --pe-gold-soft: #d8bf86;
  --pe-gold-deep: #a8843e;

  /* Text */
  --pe-text: #13211f;
  --pe-text-soft: #31423f;
  --pe-text-muted: #64716e;
  --pe-text-inverse: #f8f6f2;

  /* Deep surfaces */
  --pe-deep-bg: #0d1b1a;
  --pe-deep-surface: #102423;
  --pe-deep-surface-2: #14302f;
  --pe-deep-text: #f7f4ee;
  --pe-deep-muted: rgba(247, 244, 238, 0.72);

  /* Lines */
  --pe-line-soft: rgba(19, 33, 31, 0.08);
  --pe-line-medium: rgba(19, 33, 31, 0.14);

  /* Shadows */
  --pe-shadow-soft: 0 16px 48px rgba(8, 18, 17, 0.08);
  --pe-shadow-medium: 0 24px 70px rgba(8, 18, 17, 0.12);
  --pe-shadow-strong: 0 30px 90px rgba(8, 18, 17, 0.16);

  /* Radius */
  --pe-radius-sm: 1rem;
  --pe-radius-md: 1.5rem;
  --pe-radius-lg: 2rem;
  --pe-radius-xl: 2.5rem;
  --pe-radius-pill: 999px;

  /* Spacing */
  --pe-space-2: 0.5rem;
  --pe-space-3: 0.75rem;
  --pe-space-4: 1rem;
  --pe-space-5: 1.25rem;
  --pe-space-6: 1.5rem;
  --pe-space-8: 2rem;
  --pe-space-10: 2.5rem;
  --pe-space-12: 3rem;
  --pe-space-16: 4rem;
  --pe-space-20: 5rem;
  --pe-space-24: 6rem;
  --pe-space-28: 7rem;

  /* Typography */
  --pe-font-display: "Newsreader", serif;
  --pe-font-body: "Manrope", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;

  /* Type scale */
  --pe-text-xs: 0.75rem;
  --pe-text-sm: 0.875rem;
  --pe-text-base: 1rem;
  --pe-text-lg: 1.125rem;
  --pe-text-xl: 1.25rem;
  --pe-text-2xl: 1.5rem;
  --pe-text-3xl: 1.875rem;
  --pe-text-4xl: 2.25rem;
  --pe-text-5xl: 3rem;
  --pe-text-6xl: 3.75rem;
  --pe-text-7xl: 4.5rem;

  /* Motion */
  --pe-ease: cubic-bezier(0.22, 1, 0.36, 1);
  --pe-duration-fast: 180ms;
  --pe-duration-base: 240ms;
  --pe-duration-slow: 360ms;

  /* Glass */
  --pe-glass-bg: rgba(251, 249, 244, 0.68);
  --pe-glass-border: rgba(19, 33, 31, 0.08);
  --pe-glass-blur: 20px;

  /* Focus */
  --pe-focus: 0 0 0 3px rgba(0, 75, 73, 0.18);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--pe-bg);
  color: var(--pe-text);
  font-family: var(--pe-font-body);
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

::selection {
  background: rgba(0, 75, 73, 0.16);
  color: var(--pe-text);
}
```
