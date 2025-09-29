# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Dynamic Layout Adjustment: Header and Hero Section Integration

This project implements a dynamic layout solution to ensure the main content (Hero Section) consistently adapts its height based on the Header's height. This addresses a common challenge in responsive web design where fixed-height elements (like headers) can sometimes obstruct or push down content, especially on varying screen sizes or when the header's content might change.

### The Challenge:

The goal was to make the `HeroSection` fill the remaining viewport height, specifically `(100vh - HeaderHeight)`. Initially, I faced a common React rendering challenge: trying to measure the DOM size of the `Header` component immediately after its first render often resulted in a `0px` height. This is because the DOM element might not be fully laid out by the browser at the exact moment `useEffect` runs asynchronously.

### My Solution:

To accurately determine the header's height and apply it to the hero section, I implemented the following:

1.  **State Lifting (`App.jsx`):**
    * Introduced a `headerHeight` state variable in the parent `App.jsx` component. This centralizes the state, making it accessible to both the `Header` (to report its height) and `HeroSection` (to consume the height).

2.  **Synchronous DOM Measurement (`Header.jsx` with `useLayoutEffect`):**
    * Instead of `useEffect`, I utilized React's `useLayoutEffect` hook within the `Header` component.
    * `useLayoutEffect` runs synchronously after all DOM mutations but *before* the browser paints. This guarantees that `refContainer.current.offsetHeight` provides the accurate, rendered height of the header element immediately after it's been committed to the DOM.
    * The measured `currentHeight` is then passed back up to `App.jsx` using the `setHeaderHeight` prop.

    ```javascript
    // Simplified Header.jsx snippet
    useLayoutEffect(() => {
      if (refContainer.current) {
        const currentHeight = refContainer.current.offsetHeight;
        setHeaderHeight(currentHeight);
      }
    }, [setHeaderHeight]);
    ```

3.  **Dynamic `min-height` Calculation (`HeroSection.jsx`):**
    * The `HeroSection` component receives the `headerHeight` as a prop from `App.jsx`.
    * It then dynamically calculates its `min-height` using CSS `calc()`: `min-height: calc(100vh - ${headerHeight}px)`. This ensures that the hero section always occupies the available vertical space below the header, regardless of the header's actual size.

    ```javascript
    // Simplified HeroSection.jsx snippet
    const HeroSection = ({ headerHeight }) => {
      const heroSectionMinHeight = `calc(100vh - ${headerHeight}px)`;
      return (
        <section style={{ minHeight: heroSectionMinHeight }}>
          {/* ... content ... */}
        </section>
      );
    };
    ```

## Components

### Buttons: Accessible & Reusable Components

This project uses two custom button components to keep the design consistent and the HTML semantically correct:

LinkButton – Renders an <a> tag for navigation (e.g. scroll to section, open link)

ActionButton – Renders a <button> element for actions (e.g. submit form, toggle UI)

Both components:

* Accept props like variant ("primary" or "secondary"), id, and showArrow

* Use the same global styles (defined in style.css)

* Shrink to fit the text content instead of stretching full-width

* Are fully accessible and flexible (you can pass additional props like aria-label or target)

These components keep styling consistent while ensuring good accessibility practices.

### Here’s a short and clear snippet you can add to your README under a section like `## Components` or `## Utilities`:

---

### Spacer Component

The `Spacer` component adds vertical space between elements, allowing for quick experimentation and greater consistency. 

#### Usage

```jsx
<Spacer size="md" />
```

#### Available Sizes

| Size | Tailwind Class | Spacing      |
| ---- | -------------- | ------------ |
| `xs` | `h-2`          | 0.5rem (8px) |
| `sm` | `h-4`          | 1rem (16px)  |
| `md` | `h-8`          | 2rem (32px)  |
| `lg` | `h-12`         | 3rem (48px)  |
| `xl` | `h-16`         | 4rem (64px)  |

> These sizes use [Tailwind’s spacing scale](https://tailwindcss.com/docs/height#spacing) under the hood.

## Skills Section

* Built a responsive Skills section using React, Tailwind CSS, and a custom stylesheet.

* Structured skills into three animated cards: Web Development, Web Design, and Languages.

* Created a reusable <SkillCard /> component powered by external data (skillsData.js).

* Styled visual elements (fonts, colors, borders) using custom CSS variables.

* Added hover animations:

* Background color scrolls upward smoothly using ::before and transform.

* Icons and text lift with staggered transitions.

* Entire card skews for a playful effect.

* Offset the middle card slightly (translateY) to achieve a décalé / staggered layout.

* Combined multiple transforms (translate, skew, rotate) for more dynamic interactions.

