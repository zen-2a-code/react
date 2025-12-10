# React Mini Challenges (Practice + Answers)

Use these to test yourself after reading the playbook/labs. Try solving before peeking at the answers.

## Rules
- Work in `src/App.js` unless the prompt says otherwise.
- Keep components returning a single root element.
- Prefer functional state updates when next state depends on previous.
- Use the existing CSS files or inline styles; no need for fancy styling.

## Challenge 1: Empty-state message
**Goal:** Show "No goals yet" when the goals list is empty.  
**Hint:** Use a conditional (ternary or `&&`) in `App.js` near `<GoalList />`.

Answer (one approach):
```jsx
{courseGoals.length === 0 && <p>No goals yet</p>}
<GoalList goals={courseGoals} />
```

## Challenge 2: Prevent blank submits
**Goal:** Block empty goals in `NewGoal.js`.  
**Hint:** `trim()` removes whitespace.

Answer:
```js
if (!enteredText.trim()) return;
```
Place it at the top of `addGoalHandler` after `event.preventDefault()`.

## Challenge 3: Delete a goal
**Goal:** Add a delete button for each goal that removes it by `id`.  
**Hint:** Use `filter` to create a new array without the matching id.

Answer (in `App.js`):
```js
const deleteGoalHandler = (idToRemove) => {
  setCourseGoals((prev) => prev.filter((goal) => goal.id !== idToRemove));
};
```
Then pass it to `GoalList` and add a button:
```jsx
<GoalList goals={courseGoals} onDeleteGoal={deleteGoalHandler} />
// In GoalList.js:
<li key={goal.id}>
  {goal.text}
  <button onClick={() => props.onDeleteGoal(goal.id)}>Delete</button>
</li>
```

## Challenge 4: Mark complete
**Goal:** Add a `completed` flag and a toggle button.  
**Hint:** Use `map` to create a new array; flip the matched item.

Answer (in `App.js`):
```js
const toggleCompleteHandler = (idToToggle) => {
  setCourseGoals((prev) =>
    prev.map((goal) =>
      goal.id === idToToggle ? { ...goal, completed: !goal.completed } : goal
    )
  );
};
```
In `GoalList.js`, show status and a button:
```jsx
<li key={goal.id}>
  <span style={{ textDecoration: goal.completed ? "line-through" : "none" }}>
    {goal.text}
  </span>
  <button onClick={() => props.onToggle(goal.id)}>
    {goal.completed ? "Undo" : "Done"}
  </button>
</li>
```

## Challenge 5: Filter view
**Goal:** Show only "all", "active", or "completed" goals.  
**Hint:** Store a `filter` state (`"all" | "active" | "completed"`) and derive a filtered array before rendering.

Answer (in `App.js`):
```js
const [filter, setFilter] = useState("all");
const visibleGoals = courseGoals.filter((goal) => {
  if (filter === "active") return !goal.completed;
  if (filter === "completed") return goal.completed;
  return true;
});
```
Render filter buttons and pass `visibleGoals` to `GoalList`:
```jsx
<div>
  <button onClick={() => setFilter("all")}>All</button>
  <button onClick={() => setFilter("active")}>Active</button>
  <button onClick={() => setFilter("completed")}>Completed</button>
</div>
<GoalList goals={visibleGoals} />
```

## Challenge 6: Two inputs in a form
**Goal:** Add a "category" input to `NewGoal` and display it.  
**Hint:** Use two pieces of state or one object state; controlled inputs need `value` and `onChange`.

Answer (one approach with two states):
```js
const [enteredText, setEnteredText] = useState("");
const [enteredCategory, setEnteredCategory] = useState("");
// ...
const newGoal = { id: Math.random().toString(), text: enteredText, category: enteredCategory };
// ...
setEnteredText("");
setEnteredCategory("");
```
Add another input and show it in `GoalList`:
```jsx
<input value={enteredCategory} onChange={(e) => setEnteredCategory(e.target.value)} placeholder="Category" />
// In GoalList.js:
<div>{goal.text} <em>({goal.category})</em></div>
```

## Challenge 7: Basic persistence with localStorage (stretch)
**Goal:** Save goals to `localStorage` and load them on refresh.  
**Hint:** Use `useEffect` with an empty dependency array to load once; another `useEffect` to save when goals change.

Answer sketch (in `App.js`):
```js
useEffect(() => {
  const stored = localStorage.getItem("goals");
  if (stored) setCourseGoals(JSON.parse(stored));
}, []);

useEffect(() => {
  localStorage.setItem("goals", JSON.stringify(courseGoals));
}, [courseGoals]);
```

## Challenge 8: Error handling pattern
**Goal:** Show an error message if the input exceeds 50 characters.  
**Hint:** Track an `error` state; set it when invalid, clear on change.

Answer (in `NewGoal.js`):
```js
const [error, setError] = useState("");
const addGoalHandler = (event) => {
  event.preventDefault();
  if (enteredText.trim().length > 50) {
    setError("Keep it under 50 chars");
    return;
  }
  setError("");
  // proceed...
};
// JSX
{error && <p style={{ color: "red" }}>{error}</p>}
```

## Challenge 9: Reusable button component
**Goal:** Create a `PrimaryButton` component that forwards `children` and `onClick`.  
**Hint:** Use `props.children` to show nested content.

Answer:
```jsx
const PrimaryButton = (props) => {
  return (
    <button onClick={props.onClick} className="primary-btn">
      {props.children}
    </button>
  );
};
```
Use it: `<PrimaryButton onClick={...}>Add Goal</PrimaryButton>`

## Challenge 10: Extracting components
**Goal:** Move the heading and filter buttons into a `Header` component.  
**Hint:** Create `Header` in `src/components` and render it from `App.js`; pass any handlers as props.

Answer sketch:
```jsx
// src/components/Header.js
const Header = ({ onFilter }) => (
  <header>
    <h2>Course Goals</h2>
    <button onClick={() => onFilter("all")}>All</button>
    ...
  </header>
);
export default Header;
```
Then import and use in `App.js`: `<Header onFilter={setFilter} />`
