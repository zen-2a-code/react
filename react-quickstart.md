# React Quickstart (For Total Beginners)

## Install dependencies (do this once per fresh clone)
```bash
npm install
```
What it does: downloads `node_modules` (libraries) defined in `package.json`. Without this, `npm start` fails.

## Run the app locally (dev mode)
```bash
npm start
```
- Opens a local dev server (usually http://localhost:3000).
- Hot reload: saving a file auto-refreshes the page.
- Stop it anytime with `Ctrl + C` in the terminal.

## Edit files and see changes
1) Open `src/App.js`. Change text inside `<h2>` and save. Browser reloads instantly.
2) Open `src/components/GoalList/NewGoal/NewGoal.js`. Change the `placeholder` text and save.
3) Open `src/components/GoalList/GoalList.js`. Change the border color in `GoalList.css` and save.

## Add a practice component (safe sandbox)
1) Open `src/examples/StarterExamples.js`.
2) Pick a component (e.g., `LightSwitch`).
3) In `src/App.js`, import it:  
   `import { LightSwitch } from "./examples/StarterExamples";`
4) Render it inside the `return`:  
   `<LightSwitch />`
5) Save and see it appear on the page. Remove it when done experimenting.

## Common commands you might need
- `npm test` — runs tests (none are set up here, but this is the standard command).
- `npm run build` — production build (not needed while learning, but this is how you would build for deployment).

## Troubleshooting fast
- If `npm start` complains about missing packages: run `npm install` again.
- If the page is blank: check the terminal and browser console for errors; fix the first error shown.
- If a form reloads the page: ensure `event.preventDefault()` is in your submit handler.
- Stuck on an error message? Look it up in `react-error-fixes.md`.
