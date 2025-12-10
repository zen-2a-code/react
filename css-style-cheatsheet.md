# CSS Style Cheatsheet (Junior-Friendly)

How to use CSS in this project (CRA):
- Import CSS in your component files (e.g., `import './App.css';`). The bundler injects the styles into the page.
- CSS is global by default; a selector can affect any matching element. Keep selectors specific to avoid surprises.
- In JSX, use `className="..."` instead of `class="..."`.

Units (common ones)
- `px`: absolute pixels. Good for borders or fine tweaks.
- `rem`: relative to the root font size (browser default is usually 16px). Example: `2rem` ≈ `32px`.
- `em`: relative to the current element’s font size. Often used for spacing within components; can compound when nested.
- `%`: relative to the parent (varies by property; e.g., width vs. padding).
- `vh` / `vw`: viewport height/width percentages (e.g., `50vh` is half the viewport height).

Box model quick ref
- `margin`: space outside the element border.
- `padding`: space inside the element, between border and content.
- `border`: line around the element. Syntax: `border: 1px solid #ccc;`.
- Shorthand: `margin: top right bottom left;` (e.g., `margin: 1rem 0;` means 1rem top/bottom, 0 left/right).

Text and fonts
- `font-size`: size of text (use `rem` for scalable sizes).
- `font-weight`: `400` (normal) to `700` (bold), etc.
- `text-align`: `left`, `center`, `right`.
- `line-height`: vertical spacing between lines (e.g., `1.5` or `1.5rem`).

Colors
- Hex: `#ccc`, `#ff6600`.
- RGB/RGBA: `rgba(0, 0, 0, 0.5)` (last number is opacity 0–1).
- Named colors: `red`, `lightgray` (limited palette).

Lists
- `list-style: none;` removes default bullets.
- Add your own spacing: `margin`, `padding`, `border`, `background`.

Borders and radius
- `border: 1px solid #ccc;`
- `border-radius: 4px;` for rounded corners.

Display and layout (basics)
- `display: block | inline | inline-block | flex | grid;`
- Flex quick start: `display: flex; gap: 1rem; align-items: center; justify-content: space-between;`

Simple example (matches the Course Goals list)
```css
.goal-list {
  list-style: none;      /* remove default bullets */
  margin: 2rem;          /* ~32px all around */
  padding: 0;
}

.goal-list li {
  margin: 1rem 0;        /* top/bottom spacing between items */
  border: 1px solid #ccc;/* light gray outline */
  padding: 1rem;         /* space inside the border */
}
```

Tips
- Prefer `rem` for scalable spacing; know that `1rem` ≈ `16px` by default.
- Keep selectors narrow (e.g., `.goal-list li` instead of `li`) to avoid unintended styling elsewhere.
- Comment sparingly to explain non-obvious choices (e.g., why a specific unit or value is used).
