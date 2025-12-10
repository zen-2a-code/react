# React Hands-On Labs (Step-by-Step)

These mini-labs are written for absolute beginners. You will copy/paste small components and see what happens. Nothing here breaks your existing app unless you replace `<App />` entirely—so experiment freely.

## How to try a lab
1) Open `src/examples/StarterExamples.js`. Pick one component (e.g., `Greeter`).
2) Open `src/App.js`.
3) At the top, import the component you picked, e.g.:  
   `import { Greeter } from "./examples/StarterExamples";`
4) In the `return` of `App`, render it, e.g.:  
   `<Greeter name="Alex" />`
5) Run `npm start` (if not already) and look at the page. Hot reload will show changes immediately.

> If something breaks, press Undo in your editor or remove the extra import and JSX you added.

## Lab 1: Props practice with Greeter
- Goal: see how props flow into a component.
- Steps:
  1) Import `Greeter` in `App.js`.
  2) Render `<Greeter name="Sam" />` and `<Greeter />` (no name).
  3) Observe: when `name` is missing, the component falls back to `"friend"`.
- Key lesson: props are read-only inputs; children display what parents pass.

## Lab 2: State + events with LightSwitch
- Goal: flip state and trigger a re-render.
- Steps:
  1) Import `LightSwitch`.
  2) Render `<LightSwitch />` under your heading.
  3) Click the button a few times. Watch the text swap ON/OFF.
- Key lesson: `useState` stores current value; calling the setter redraws the UI.

## Lab 3: Conditional rendering with StatusMessage
- Goal: show different UI based on props.
- Steps:
  1) Import `StatusMessage`.
  2) Render `<StatusMessage isLoading={true} />` and `<StatusMessage isLoading={false} />`.
  3) Add an `error` prop: `<StatusMessage error="Oops" />`.
- Key lesson: render paths can branch with if/ternary/&&.

## Lab 4: Mapping lists with ShoppingList
- Goal: map arrays to JSX and use keys.
- Steps:
  1) Import `ShoppingList`.
  2) Create an array in `App`:  
     `const groceries = [{ id: "1", label: "Apples" }, { id: "2", label: "Bread" }];`
  3) Render `<ShoppingList items={groceries} />`.
  4) Add/remove an item. Save and watch the list update.
- Key lesson: arrays map to arrays of JSX; keys help React track items.

## Lab 5: Controlled input with MirrorInput
- Goal: wire an input so React always knows its value.
- Steps:
  1) Import `MirrorInput`.
  2) Render `<MirrorInput />`.
  3) Type in the box; watch the mirrored text update live.
- Key lesson: `value` + `onChange` keeps input and state in sync.

## Bonus: add validation to NewGoal
- Goal: prevent empty submissions in the existing form.
- Steps:
  1) Open `src/components/GoalList/NewGoal/NewGoal.js`.
  2) In `addGoalHandler`, add:  
     `if (!enteredText.trim()) return;`
  3) Save and test—blank submits should now do nothing.
- Key lesson: guard clauses keep bad data out before updating state.

## Debug flow when a lab fails
- Check the browser console for red errors; fix the first one.
- Ensure imports match the export names (curly braces for named exports).
- Make sure JSX has one root element in `return`.
- If the dev server stopped, restart with `npm start`.
