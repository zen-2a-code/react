# Project Map (What Each File Does)

- `public/index.html` — The single HTML file. Contains `<div id="root"></div>` where React attaches.
- `src/index.js` — Entry point. Finds `#root` and renders `<App />` into it with `ReactDOM.render`.
- `src/App.js` — Parent component that holds the goals state and renders the form (`NewGoal`) and list (`GoalList`).
- `src/App.css` — Styles for App (currently centers the heading).
- `src/components/GoalList/GoalList.js` — Renders the goals as an unordered list (`<ul>`). Expects a `goals` prop.
- `src/components/GoalList/GoalList.css` — Styles the list and list items.
- `src/components/GoalList/NewGoal/NewGoal.js` — Form for adding a goal. Manages input state and calls `props.onAddGoal`.
- `src/components/GoalList/NewGoal/NewGoal.css` — Styles for the new goal form.
- `src/examples/StarterExamples.js` — Small practice components (props, state, conditionals, lists, child-to-parent flow).
- `react-beginner-playbook.md` — Kid-friendly glossary, rules, and patterns.
- `react-labs.md` — Step-by-step labs that guide you through exercises.
- `react-error-fixes.md` — Common error messages with causes and fixes.
- `react-quickstart.md` — Fast setup/run instructions and troubleshooting.
- `react-beginner-roadmap.md` — Milestone plan from zero to junior fundamentals.
- `react-lecture-notes.md` — Overview notes with links to the other learning docs.
- `css-style-cheatsheet.md` — CSS basics and units reference.
