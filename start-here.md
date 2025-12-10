# Start Here (Complete Beginner Path)

Follow this order. Each step points to files in this repo so you are never guessing.

## 0) Run the app (so you can see changes)
- Install deps: `npm install`
- Start dev server: `npm start` (hot reloads on save)
- Reference commands: `react-quickstart.md`

## 1) Know the files (what is where)
- `project-map.md` — one-line purpose of each file.
- `src/index.js` — entry that mounts `<App />` to the page.
- `src/App.js` — parent that holds the goals state and renders the form + list.
- `src/components/GoalList/NewGoal/NewGoal.js` — form that sends new goals up via a callback prop.
- `src/components/GoalList/GoalList.js` — list renderer for the goals array.
- `src/examples/StarterExamples.js` — small practice components you can drop into `App.js`.

## 2) First change (instant win)
- Open `src/App.js`.
- Change the `<h2>` text and save. See the browser update (hot reload).

## 3) Learn the core ideas in order
Read these sections in `react-beginner-playbook.md`:
1. JSX rules (className, closing tags, `{}` for JS)
2. Components and props (data flows down)
3. State with `useState` (when to use functional updates)
4. Events and forms (`onClick`, `onSubmit`, `preventDefault`)
5. Controlled inputs (value + onChange)
6. Lists and keys (`map`, stable `key`)
7. Conditional rendering (ternary, `&&`)
8. Lifting state up (child tells parent via callback prop)

If you want a high-level milestone view, skim `react-beginner-roadmap.md`.

## 4) Guided practice (do, don’t just read)
- Open `react-labs.md` and follow the labs inside `App.js` in order.
- For ready-made components to import while practicing, use `src/examples/StarterExamples.js`.

## 5) Self-check and stretching
- Pick 2–3 items from `react-mini-challenges.md` (empty state, prevent blank submit, delete, toggle). Answers are in the same file.
- Optional stretch: try the localStorage or filter challenge when comfortable with state.

## 6) When stuck or curious
- Error message? Look it up in `react-error-fixes.md`.
- Recurring questions? Check `react-faq.md`.
- Unsure what to do next? Revisit `react-beginner-roadmap.md` for the next milestone.
