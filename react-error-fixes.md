# Common React Errors & Quick Fixes (Beginner Edition)

Copy/paste these messages into search if you see them. Each bullet shows why it happens and how to fix it.

## "Objects are not valid as a React child"
- Why: You tried to render a raw object in JSX (e.g., `{someObj}`).
- Fix: Render a property or stringify it: `{someObj.name}` or `<pre>{JSON.stringify(someObj, null, 2)}</pre>`.

## "Each child in a list should have a unique 'key' prop"
- Why: You mapped an array to JSX without `key`.
- Fix: Add `key={item.id}` (stable ID, not the array index if possible).

## "Cannot read property 'map' of undefined" (or similar with `length`)
- Why: You assume a value is an array, but it is `undefined` (maybe data not loaded yet).
- Fix: Guard it: `{items && items.map(...)}` or default it: `const safeItems = items || [];`.

## "Invalid DOM property `class`. Did you mean `className`?"
- Why: JSX uses `className`.
- Fix: Rename to `className`.

## "Warning: Failed prop type" (if using prop-types)
- Why: You passed the wrong type for a prop.
- Fix: Pass the expected type (e.g., a string instead of a number).

## "Maximum update depth exceeded"
- Why: You set state inside render without a guard, causing infinite re-render.
- Fix: Move state updates into event handlers or `useEffect` with dependencies to break the loop.

## "Too many re-renders"
- Why: Similar to above; a state update triggers render which triggers the same update again.
- Fix: Do not call state setters unconditionally during render. Use event handlers or effects with conditions.

## Input not clearing when using state
- Why: You forgot to set `value={stateValue}` on the input, so React is not controlling it.
- Fix: Add `value` tied to state and update state in `onChange`.

## Form submits and reloads the page
- Why: Native form submission navigates away.
- Fix: Call `event.preventDefault()` in your `onSubmit` handler.

## Nothing appears on the page, but no errors
- Checklist:
  - Did you return a single root element from the component?
  - Did you import and render the component where you expect?
  - Is the dev server running? (`npm start`)
  - Check browser console for errors you missed.
