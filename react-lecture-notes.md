# React Basics (Junior-Friendly Notes)

React is a JavaScript **library** that helps you build user interfaces in the browser. It focuses on the "view" layer—what the user sees and interacts with. Because it handles only the UI, people call it a library, but its ecosystem (routing, state management, build tools) feels like a full framework in practice.

## Where React Runs
- Runs in the browser via `react-dom`; it is not a Node.js-only tool.
- Handles rendering UI and reacting to user input.
- Does **not** talk to databases or serve API responses (you still use `fetch`/`axios` or a backend for that).

## Declarative vs. Imperative Thinking
- **Imperative (vanilla JS):** You tell the browser every step to change the DOM.
- **Declarative (React):** You describe what the UI should look like for a given state, and React figures out the DOM updates.

### Imperative example (vanilla JS)
```js
// We manually change the DOM each time the "Save" button is clicked.
const button = document.querySelector('#save');
const message = document.querySelector('#message');

button.addEventListener('click', () => {
  // Tell the DOM exactly what to do, step by step.
  message.textContent = 'Saved!';
  message.classList.add('visible');
});
```

### Declarative example (React)
```jsx
import { useState } from 'react';

function SaveMessage() {
  // React state remembers whether the user clicked "Save".
  const [saved, setSaved] = useState(false);

  return (
    <div>
      {/* React re-renders this JSX whenever state changes. */}
      <button onClick={() => setSaved(true)}>Save</button>

      {/* We declare what the UI should be when saved is true. */}
      {saved && <p>Saved!</p>}
    </div>
  );
}

export default SaveMessage;
```
Key idea: we never issue manual DOM commands. We just describe the UI for each state (`saved` is `true` or `false`), and React applies the right updates.

## Components: Building Blocks
- A **component** is a small, reusable piece of UI (button, header, card, etc.).
- Components can be composed (components can render other components).
- Each component can decide what to show for different states/props.
- Components must return JSX (or `React.createElement` output). Returning a plain object/number/string as the root will error.
- Component names should start with an uppercase letter so React treats them as custom components (not HTML tags). See `src/App.js` for inline notes and a tiny `Title` component.
- Two component types exist:
  - Function components (modern default): `const App = () => <h1>Hello</h1>;`
  - Class components (older style): `class App extends React.Component { render() { return <h1>Hello</h1>; } }`
  Modern React favors function components with hooks; class components still work.
- Splitting components: Break larger UIs into focused pieces (e.g., `App` renders `GoalList`). See `src/App.js` and `src/components/GoalList.js` for usage.
- JSX requires `className` instead of `class` to avoid the JS keyword conflict.
- Close every tag in JSX; self-close when there are no children: `<GoalList />`.
- Importing CSS in components is allowed because the build step injects styles. Styles are still global unless you use CSS Modules. See `src/App.js` + `src/components/GoalList.js` for inline notes. CSS basics and unit explanations: `css-style-cheatsheet.md`.
- Separation of concerns: keep files small and focused; data/logic that multiple children need (like the goals array) can live in the parent and flow down via props.
- Optional structure tip: one folder per component can help keep JSX/CSS/tests grouped (see `src/components/GoalList` and `NewGoal`).

## Props and Data Flow
- Pass data to child components via props (custom attributes): `<GoalList goals={courseGoals} />` in `src/App.js`.
- Props arrive as a single `props` object in the child; `props.goals` in `GoalList` corresponds to the `goals` attribute set by the parent.
- Curly braces inside JSX inject JavaScript expressions (variables, calculations) instead of strings.
- Arrays of JSX render directly; convert data arrays to JSX via `map`.
- Lists need a `key` prop on each rendered sibling so React can track items efficiently. Use stable IDs (`goal.id`), not array indices when possible. See `src/components/GoalList.js`.
- Passing data up (child → parent): pass a callback prop from parent to child and invoke it in the child with the data. Example: `onAddGoal={addNewGoalHandler}` in `src/App.js`, called as `props.onAddGoal(newGoal);` in `src/components/GoalList/NewGoal/NewGoal.js`.

## State and Re-rendering
- React re-renders when state changes (not just on any event). Plain variables/arrays won’t trigger a re-render.
- `useState(initialValue)` returns `[currentValue, setValue]`; call `setValue` with a NEW value to update and re-render (see `src/App.js`).
- Avoid mutating state in place (`push` on arrays). Use non-mutating updates like `concat` or spread: `setCourseGoals(prev => prev.concat(newGoal));`.
- State can hold any type (arrays, objects, strings). Each `useState` call is independent; you can have multiple pieces of state in a component.

## Event Handling
- Use React event props (e.g., `onSubmit`, `onClick`) with a function reference, not an immediate call.
- Prevent default browser form submission when handling in React: `event.preventDefault();` (see `src/components/GoalList/NewGoal/NewGoal.js`).
- In JSX, inputs must be self-closing: `<input ... />`.

### Simple component composition
```jsx
function Header() {
  return <h1>Welcome!</h1>;
}

function App() {
  // React builds the UI by nesting components like Lego bricks.
  return (
    <div>
      <Header />
      <p>Thanks for visiting our site.</p>
    </div>
  );
}
```

## React Ecosystem (high level)
- **Routing:** `react-router-dom` lets you show different components per URL.
- **State management:** tools like Redux, Zustand, or built-in Context API help share state across many components.
- **Tooling:** build tools (Vite, Next.js, Create React App) set up bundling, dev server, and hot reload.

## Create React App (CRA) starter
- https://github.com/facebook/create-react-app
- CRA is a scaffolding tool from the React team. It gives you a ready-to-run project (dev server, hot reload, build step).
- Why use it? We write JSX and modern JS that browsers don't fully understand yet. CRA compiles that code to plain JS the browser can run.
- Dev server: serves only the frontend, auto-reloads on save, no backend included.

### Files you see first
- `public/index.html`: the single HTML file for the app; it contains a `<div id="root"></div>` placeholder (see comment in `public/index.html`).
- `src/index.js`: the JavaScript entry point; it runs first, grabs `#root`, and tells React to render your app there (see comment in `src/index.js`).
- `src/App.js`: your first component; typically the top-level UI shell (see JSX notes in `src/App.js`).

### Rendering the app (React 17 style in this project)
- The current code uses `ReactDOM.render(<App />, document.getElementById('root'));` (see `src/index.js` for the live version and comments).

### Rendering the app (React 18 style for reference)
```jsx
// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(document.getElementById('root')); // Hook React into the page
root.render(<App />); // Tell React what to show inside #root
```
Notes:
- `<App />` is JSX. It looks like HTML, but it's just function calls under the hood. CRA compiles JSX into browser-safe JavaScript.
- After compilation, the browser still runs plain JavaScript—React just helped you write it in a nicer way.

## JSX and React.createElement
- JSX is a developer-friendly syntax that looks like HTML inside JS files. Browsers don’t understand it directly; the build step compiles it to `React.createElement(...)`.
- See `src/App.js` for a commented example showing the JSX component and the equivalent `React.createElement` call.

## Single Page Application (SPA) basics
- SPA means one HTML file; React swaps views inside it instead of downloading new HTML pages.
- Faster feel: when users click, React updates the DOM instantly; no full-page reloads needed.
- You can still fetch data from servers (REST, GraphQL), but rendering stays on the client.

## Running the app & common setup fixes
- Run `npm install` once per clone to download `node_modules`; without it, scripts like `react-scripts start` fail with “command not found.”
- `npm start` uses the `start` script in `package.json` to launch the CRA dev server and auto-reload on save.
- Old CRA (react-scripts 3/webpack 4) on Node 17+ needs `NODE_OPTIONS=--openssl-legacy-provider` to avoid the OpenSSL 3 hash error; this project’s `package.json` scripts already include it. Alternatives: use Node 16 LTS or upgrade to `react-scripts@5`.

## Shell defaults (bash vs zsh)
- macOS shows “default interactive shell is now zsh” as a reminder. Stay on bash with `chsh -s /bin/bash`; switch to zsh with `chsh -s /bin/zsh`. Verify with `echo $SHELL`; list allowed shells with `cat /etc/shells`.
- VS Code integrated terminal: Command Palette → “Terminal: Select Default Profile” → choose `bash` (or set `"terminal.integrated.defaultProfile.osx": "bash"` in settings). Open a new terminal to apply.

## What React Handles (and what it doesn’t)
- Handles: rendering UI, responding to user events, updating the DOM efficiently.
- Doesn’t handle: databases, authentication by itself, or API servers (you still integrate those separately).

## Takeaways
- React is a browser-focused UI library with a rich ecosystem.
- You write **declarative** code: describe UI for each state; React handles the DOM steps.
- Components are the core unit—build small pieces and compose them into full apps.
- CRA or similar tooling lets you write JSX/modern JS comfortably, compiles it for browsers, and serves your single-page app during development.
