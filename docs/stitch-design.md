---
name: Blu Collar Digital Precision
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#424750'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#727781'
  outline-variant: '#c2c6d2'
  surface-tint: '#2260a2'
  primary: '#004078'
  on-primary: '#ffffff'
  primary-container: '#16589a'
  on-primary-container: '#b0cfff'
  inverse-primary: '#a4c9ff'
  secondary: '#3d6188'
  on-secondary: '#ffffff'
  secondary-container: '#aed2ff'
  on-secondary-container: '#365a81'
  tertiary: '#03426b'
  on-tertiary: '#ffffff'
  tertiary-container: '#285a84'
  on-tertiary-container: '#a5d1ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d4e3ff'
  primary-fixed-dim: '#a4c9ff'
  on-primary-fixed: '#001c39'
  on-primary-fixed-variant: '#004884'
  secondary-fixed: '#d1e4ff'
  secondary-fixed-dim: '#a6c9f6'
  on-secondary-fixed: '#001d36'
  on-secondary-fixed-variant: '#24496f'
  tertiary-fixed: '#cfe5ff'
  tertiary-fixed-dim: '#9dcbfb'
  on-tertiary-fixed: '#001d33'
  on-tertiary-fixed-variant: '#124a73'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  headline-xl:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-bold:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  section-gap: 80px
  grid-margin: 24px
  grid-gutter: 20px
  container-max: 1280px
---

## Brand & Style

The design system is anchored in the "Premium Blue-Collar" aesthetic-a fusion of industrial reliability and digital sophistication. It is built for a target audience of business owners in the NYC and NJ markets who value hard work, transparency, and results. The UI avoids the "fluff" of typical creative agencies, instead opting for a Modern Corporate style that feels as sturdy and dependable as a master-built structure.

The visual language emphasizes precision through clean lines, generous whitespace, and a high-contrast palette. It conveys local authority by utilizing imagery of real local craftsmanship-home services, construction, and technical work-elevated by high-end photography. The emotional response is one of immediate trust: "These people understand the work, and they have the tools to scale it."

## Colors

The color strategy leverages a monochromatic blue foundation to establish a "high-trust" environment.

- **Primary Blue (#16589A):** Used for the most critical actions and brand touchpoints. It represents the "work" itself-active, vibrant, and visible.
- **Deep Navy (#0E385D):** Employed for typography, footers, and heavy structural elements to provide a sense of groundedness and permanence.
- **Sky Accent (#7BA9D7):** Used sparingly for secondary UI elements, hover states, or subtle backgrounds to prevent the design from feeling overly heavy.
- **White (#FFFFFF):** The essential canvas. This system requires significant whitespace to differentiate the agency from lower-quality competitors, ensuring every piece of content has room to breathe.

## Typography

This design system utilizes a high-contrast typographic pairing to balance modern aesthetics with functional clarity.

**Manrope** is selected for headlines. Its geometric construction and tight apertures feel engineered and confident. Headings should be set with heavy weights (Bold to ExtraBold) and tighter letter-spacing for a "block-like" impact that commands attention.

**Inter** is the workhorse for body text and labels. It provides exceptional readability at all sizes, ensuring that technical service descriptions and marketing metrics are easily digestible. Use uppercase labels for small metadata or section overlines to add a layer of organized hierarchy.

## Layout & Spacing

The system follows a rigid 12-column fixed grid for desktop, ensuring content is centered and structured. Stability is key; elements should feel aligned to a logical "blueprint."

Spacing is built on an 8px baseline. Section gaps are intentionally large (80px+) to create the "premium" feel requested, separating case studies and service blocks into distinct chapters. Padding within components like cards and buttons should be generous, avoiding any sense of clutter that might distract the user from the primary call to action.

## Elevation & Depth

To maintain a professional and clean look, the design system utilizes **Tonal Layers** and **Low-Contrast Outlines** rather than heavy shadows.

1. **Surfaces:** Backgrounds are kept strictly white (#FFFFFF), with light gray or soft blue (#7BA9D7 at 5-10% opacity) used to define secondary sections.
2. **Depth:** Depth is achieved through "Stacking." Important cards use a 1px border (#7BA9D7) rather than a shadow.
3. **Shadows:** Shadows are reserved exclusively for the "Primary Call to Action" to make it "lift" off the page. Use an extra-diffused, low-opacity shadow (Color: #0E385D, Opacity: 8%, Blur: 20px, Y-Offset: 10px).

## Shapes

The shape language is "Soft" (0.25rem / 4px). This subtle rounding moves away from the aggressive sharpness of raw industrialism while remaining significantly more professional than the "bubbly" look of consumer apps.

This specific radius conveys precision-like a machined edge. It applies to all buttons, input fields, and image containers. For larger containers like cards, a `rounded-lg` (8px) can be used to soften the visual impact of high-density data.

## Components

### Buttons

Primary buttons use the Brand Blue (#16589A) with white text and a bold weight. They must feel substantial-large padding and clear, action-oriented text (e.g., "GET A FREE AUDIT"). Secondary buttons use a "Ghost" style with a Navy (#0E385D) border.

### Service Cards

Cards should feature high-quality photography at the top with a slight zoom effect on hover. Below the image, use a bold Manrope headline followed by concise Inter body text. A "Learn More" link with a directional arrow icon reinforces the movement toward conversion.

### Input Fields

Forms are the lifeblood of lead generation for local services. Fields must have a 1px border in a neutral gray, turning Primary Blue on focus. Labels should be placed above the field in `label-bold` style for maximum clarity.

### Trust Indicators

Unique to this system is a "Reliability Badge" component-small, pill-shaped chips with icons indicating "NYC/NJ Local," "Licensed & Insured," or "5-Star Rated." These should be used near every major CTA to reinforce the high-trust narrative.

### Case Study Modules

A split-screen layout component: one side showing a high-impact "Before/After" or "Metric" visual, and the other detailing the solution and results in a clean, bulleted list.
