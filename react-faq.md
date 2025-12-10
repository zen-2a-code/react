# React FAQ (Beginner-Friendly)

## Why does JSX use `className` instead of `class`?
`class` is a reserved word in JavaScript. JSX uses `className` to avoid conflicts. It becomes `class` in the final HTML.

## Do I need to import React at the top of every file?
In this setup, yes. The build uses JSX that compiles to `React.createElement`, so `React` must be in scope. (Newer setups with automatic JSX runtime remove this requirement, but this project expects the import.)

## Why do I need a `key` when rendering lists?
Keys help React match items between renders. Without a stable key, React can mix up items, causing flickers or incorrect state.

## Why can’t I change props in a child component?
Props are read-only inputs. The parent owns them. To change parent data, pass a callback prop and call it (see `NewGoal` calling `onAddGoal`).

## Why does the page reload when I submit a form?
Browser forms submit to the server by default. Call `event.preventDefault()` in the `onSubmit` handler to keep React in control.

## Why doesn’t my input clear after submit?
Make it a controlled input: bind `value={stateValue}` and update that state in `onChange`. Then set the state to `""` after submit to clear the box.

## When should I use functional state updates?
Whenever the next value depends on the previous value (increment counters, append to arrays). Example: `setCount(prev => prev + 1);`

## What is “lifting state up”?
Keeping shared data in the nearest common parent, and passing it down as props. Children send changes up via callback props. Example: `ChildToParentDemo` in `src/examples/StarterExamples.js`.

## What does “immutable updates” mean?
Do not mutate existing objects/arrays. Create new ones with spread/concat/map/filter. React detects changes by new references.

## How do I handle “nothing to show” states?
Use conditional rendering. Example: `{items.length === 0 ? <p>No items</p> : <List items={items} />}`

## Where should I put CSS?
Keep component styles next to components (`App.css`, `GoalList.css`, `NewGoal.css`). They are still global here; keep selectors specific.
