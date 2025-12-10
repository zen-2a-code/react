# React Beginner Roadmap (From Zero to Junior Fundamentals)

This path is split into small milestones. Move at your own pace; expect to iterate.

## Milestone 0: Environment ready
- Install dependencies: `npm install`.
- Run the dev server: `npm start`.
- Edit `src/App.js` text and confirm hot reload works.  
Reference: `react-quickstart.md`.

## Milestone 1: JSX comfort
- Change text, add a `<p>` tag, and ensure every tag closes.
- Practice `className` vs `class`; `htmlFor` vs `for`.
- Use `{}` to insert a variable (e.g., `const name = "Alex"; <p>Hello {name}</p>`).
Reference: JSX rules in `react-beginner-playbook.md`.

## Milestone 2: Props (data down)
- Import and render `Greeter` or `ShoppingList` from `src/examples/StarterExamples.js`.
- Pass different props and see how output changes.
- Remember: props are read-only in the child.
Reference: Labs 1 and 4 in `react-labs.md`.

## Milestone 3: State (memory inside components)
- Use `LightSwitch` or `MirrorInput` from examples; watch state change the UI.
- Add a new `useState` in `App.js` (e.g., `const [count, setCount] = useState(0);` with a button).
- Practice the functional setter form when next state depends on previous (`setCount(prev => prev + 1);`).
Reference: `react-beginner-playbook.md` (state section) and Labs 2 + 5.

## Milestone 4: Events and forms
- In `NewGoal.js`, add `if (!enteredText.trim()) return;` to block empty submits.
- Add a second input (e.g., `priority`) and capture it in state; include it in the object sent up.
- Ensure `event.preventDefault()` is used on form submit to stop reloads.
Reference: `react-labs.md` (bonus) and `react-error-fixes.md`.

## Milestone 5: Conditional rendering
- Implement a "no goals yet" message when the list is empty.
- Show a "loading..." message using the StatusMessage example pattern.
Reference: Conditional patterns in `react-beginner-playbook.md` and Lab 3.

## Milestone 6: Lists and keys
- Add a delete button to each goal; remove by `id` (use `filter`).
- Verify each `<li>` has a stable `key` (not the array index).
Reference: `GoalList.js` comments and `ShoppingList` example.

## Milestone 7: Lifting state up (child -> parent)
- Study `ChildToParentDemo` in `src/examples/StarterExamples.js`.
- Mirror that pattern: create a child form that adds data to parent state.
Reference: Data flow diagram in `react-beginner-playbook.md`.

## Milestone 8: Styling basics
- Tweak `App.css`, `GoalList.css`, and `NewGoal.css` (colors, padding).
- Practice `rem` vs `px` using `css-style-cheatsheet.md`.
- Keep selectors scoped to component classes to avoid surprises.

## Milestone 9: Debug muscle
- Intentionally break things: remove a `key`, remove `className`, omit `preventDefault`.
- Use `console.log` inside handlers to trace values.
- When errors appear, look them up in `react-error-fixes.md`.

## Milestone 10: Small project extension
- Add a "completed" toggle per goal (checkbox). Use state to flip a `completed` boolean.
- Filter view: show all / only completed / only active goals (store a `filter` state).
- Stretch: persist goals to `localStorage` (read in `useEffect`, write when goals change).

## Beyond this repo (next topics)
- Routing basics: `react-router-dom` for multiple pages.
- Async data: `fetch` to call APIs; show loading/error states.
- Component styling options: CSS Modules, styled-components, Tailwind.
- State sharing: React Context for passing data deeper without prop drilling.
