# React Beginner Playbook (Kid-Friendly)

This guide is written in plain language so a 10-year-old (or a brand-new developer) can follow along. It uses the files in this project as live examples.

## The tiny app story (what happens when you click)
- You open the page. The browser shows a blank stage: `<div id="root"></div>` in `public/index.html`.
- `src/index.js` finds that stage and tells React: "Please paint `<App />` on it."
- `src/App.js` is the coach. It keeps the **state** (the current list of goals) and shares it.
- `src/components/GoalList/NewGoal/NewGoal.js` is the form player. It collects what you type and yells the new goal back up to the coach through `onAddGoal`.
- `src/components/GoalList/GoalList.js` is the display player. It receives the list and shows each goal as an `<li>` bullet item.
- When you submit the form, App updates its state (a fresh array) and React re-renders the list—no page reload.

### One-way data flow (why React feels safe)
```
[User types] -> NewGoal (child) -> calls props.onAddGoal(newGoal)
                 ^                                  |
                 |                                  v
             input value <-- enteredText state   App (parent) -> setCourseGoals(new array) -> GoalList (child)
```
- Children never change the list directly; they ask the parent. This keeps data in one source of truth and prevents surprise edits.

## Acronym & jargon decoder (plain words)
- **JSX (JavaScript XML):** The HTML-looking syntax in JS files. The build step turns it into `React.createElement` calls the browser understands.
- **DOM (Document Object Model):** The live tree of tags on the page. Changing state tells React to update the DOM for you.
- **SPA (Single Page Application):** One HTML page; React swaps views inside it so the browser rarely reloads.
- **UI (User Interface):** What the user sees—buttons, text, lists.
- **IDE (Integrated Development Environment):** A fancy text editor with tools (VS Code, WebStorm).
- **API (Application Programming Interface):** A defined way to ask another program for data (think: "restaurant menu" for code).
- **CRUD (Create, Read, Update, Delete):** The four basic data actions. This app shows Create and Read.
- **State:** A component's memory. Changing it (with `setState`/`setSomething`) triggers a React re-render.
- **Props (properties):** Inputs passed into a component, like settings on a gadget.

## File-by-file cheat sheet
- `src/index.js`: Hooks React to the page. It runs first, finds `#root`, and renders `<App />`.
- `src/App.js`: Parent/coach component. Holds the `courseGoals` state and passes data/functions to children. Uses `useState` with a **functional update** to avoid stale data.
- `src/components/GoalList/NewGoal/NewGoal.js`: Controlled form. Text lives in React state so we can clear the box after submit.
- `src/components/GoalList/GoalList.js`: Maps the goals array to `<li>` elements. Each `<li>` gets a `key` so React can track them.
- CSS files: imported per component (`App.css`, `GoalList.css`, `NewGoal.css`). The styles are still global in this setup, but keeping them nearby is tidy.

## Why immutability matters (no in-place edits)
- Bad for React lists: `courseGoals.push(newGoal); setCourseGoals(courseGoals);` (same array reference, React might skip re-render).
- Good: `setCourseGoals(prevGoals => prevGoals.concat(newGoal));` (new array, React sees the change).
- Tip to remember: pretend state is frozen; always make a copy before changing it.

## Mini practice prompts (try these to build muscle)
1) **Change placeholder text:** In `NewGoal.js`, adjust `placeholder="New Goal"` to something else. Save and watch live reload.
2) **Add a starter goal:** In `App.js`, add another object to the initial `useState` array, e.g., `{ id: 'cg4', text: 'Take a break' }`.
3) **Guard against empty input:** Inside `addGoalHandler`, check `if (!enteredText.trim()) return;` so blank goals are ignored.
4) **Style tweak:** In `GoalList.css`, change `border` color or `border-radius` to see how CSS updates instantly.

## Visual reminder: controlled input cycle
```
User types -> onChange fires -> inputFieldChangeHandler -> setEnteredText(new value)
React re-renders -> input value={enteredText} updates -> text box shows the latest value
```
- Because the input reads from state (`value={enteredText}`) and writes to state (`onChange`), React always knows what is inside the box.

## Common beginner pitfalls (and quick fixes)
- Forgetting `className` (React uses this instead of `class`). Fix: `<div className="course-goals">`.
- Using array index as `key`. Better: use stable IDs like `goal.id`.
- Mutating state directly. Fix: use spread or `concat` to create new arrays/objects.
- Calling the setter with stale state. Fix: use the functional form `setThing(prev => ...)` when the next value depends on the previous one.
- Mixing HTML attributes with JSX ones. Use `htmlFor` instead of `for` on labels; use `className` instead of `class`.
- Trying to render plain objects. JSX must return elements, strings, numbers, or arrays of those—never a raw object. Convert objects to JSX or strings first.

## Props vs state (quick table, no fancy layout)
- **Who owns it?** State lives inside a component; props are given to a component by its parent.
- **Can the component change it?** State: yes (with the setter). Props: no (read-only).
- **Purpose?** State: remembers internal data (input text, toggles). Props: config or data input (list items, callback functions).
- **Flow direction?** State is local; props flow down from parent to child.

## JSX rules quick list
- Component names start uppercase (`GoalList`) so React knows they are custom.
- Return a single root element (wrap siblings in a parent `<div>` or `<>...</>` fragment).
- Close every tag (`<input />`, `<GoalList />`, `<p></p>`).
- Use curly braces `{}` to insert JS expressions (variables, math, conditionals).
- Use `className` for CSS classes; `htmlFor` for label targeting inputs.

## Conditional rendering patterns you will see a lot
```jsx
// 1) AND pattern: show only when truthy
{isLoading && <p>Loading...</p>}

// 2) Ternary: pick one of two views
{items.length === 0 ? <p>No items yet</p> : <ItemList items={items} />}

// 3) Early return inside the component
if (items.length === 0) {
  return <p>No items yet</p>;
}
return <ItemList items={items} />;
```
- Use the simplest pattern that reads like plain English for the situation.

## Event handling mini cheatsheet
- `onClick={handler}` instead of `onClick="handler()"`.
- Need to pass a value? Wrap it: `onClick={() => handler(goal.id)}`.
- Form submit: add `onSubmit` to the `<form>` and call `event.preventDefault()` if you do not want a page reload.
- Keyboard input: `onChange` fires on every keystroke; read it with `event.target.value`.
- Keep handlers small; move logic into helper functions when they grow.

## Debugging checklist (when the UI does nothing)
1) Add a `console.log` inside your handler to verify it runs.
2) Check that the prop is spelled the same where it is sent and where it is read (`onAddGoal` vs `onAddGoal`).
3) Ensure state updates create new objects/arrays (use spread/concat).
4) Verify JSX returns a single root element.
5) Scan the terminal/console for red errors; fix the first one first.

## If you get stuck
- Read the comments inside `src/App.js`, `NewGoal.js`, and `GoalList.js`; they map code to concepts.
- Use `console.log` inside handlers (e.g., log `event.target.value`) to see what flows through.
- Break things on purpose, then fix them: comment out `value={enteredText}` and see how the input stops clearing—this shows why controlled inputs matter.
- Peek at `src/examples/StarterExamples.js` for more tiny, self-contained components you can import or copy into `App.js` while experimenting.
- Follow the step-by-step labs in `react-labs.md` if you want a guided sequence of small wins.
- Stuck on a red error message? Look it up in `react-error-fixes.md` for causes and quick fixes.
