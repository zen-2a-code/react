import React, { useState } from "react"; // JSX (JavaScript XML) compiles to React.createElement, so React must be in scope in this setup.
import "./App.css"; // Bundler injects these styles; keeping the import here groups styles with the component.
import GoalList from "./components/GoalList/GoalList"; // Custom component (uppercase name so React knows it is not an HTML tag). Splitting keeps each file focused even if output stays the same.
import NewGoal from "./components/GoalList/NewGoal/NewGoal"; // NewGoal component (folder-per-component keeps JSX/CSS organized).

const App = () => {
  /*
    Plain-language map of this file:
    - App is the "parent" component. Think of it as the coach—it keeps the list of goals and tells the "player" components what to do.
    - NewGoal is the form where you type. It shouts new goals "up" to App through a callback prop (a function).
    - GoalList is the visual list. It receives the goals "down" as props (properties) and renders them.
    - Data flow stays one-way: parent holds data, children ask the parent to update it.
  */

  /*
    Jargon decoder:
    - JSX = JavaScript XML. It looks like HTML inside JS files, but it is really a friendly way of writing function calls.
    - DOM = Document Object Model. It is the live tree of elements in the browser window.
    - State = the current memory of a component. Changing state tells React to re-render the UI.
  */

  // useState returns [currentState, setter]. Updating via the setter triggers a re-render.
  // Think of "courseGoals" as a labeled box of sticky notes; setCourseGoals replaces the whole box with a fresh one.
  const [courseGoals, setCourseGoals] = useState([
    { id: "cg1", text: "Finish the Course" },
    { id: "cg2", text: "Learn all about the Course Main Topic" },
    { id: "cg3", text: "Help other students in the Course Q&A" },
  ]);

  // Callback prop demo: this function is passed down and executed by the child (NewGoal) to bubble data up.
  // "Callback" means "call me later." NewGoal calls this function when its form is submitted.
  const addNewGoalHandler = (newGoal) => {
    // Why new array + functional update here instead of push?:
    // - React treats state as immutable: create a new array/object instead of mutating the existing one.
    // - React may batch/defer updates; a functional update (`prevGoals => ...`) is guaranteed to run with the latest state, avoiding stale copies.
    // - React checks references to detect changes; returning a NEW array (`concat`/spread) changes the reference so React re-renders efficiently.
    // - Avoid push here: push mutates the original array; keeping the same reference can make React think “no change” and skip work.
    // Non-functional (works when updates are rare/non-dependent, but can read stale state if batching happens):
    // setCourseGoals(courseGoals.concat(newGoal));
    // Functional (recommended when next state depends on previous state; avoids stale state and keeps immutability):
    setCourseGoals((prevGoals) => prevGoals.concat(newGoal));
  };

  // Root component; rendered into #root (see src/index.js). JSX needs className (not class) to avoid clashing with the JS keyword.
  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      {/* Curly braces inject JS expressions into JSX; here we pass the array as the goals prop. */}
      <NewGoal onAddGoal={addNewGoalHandler} />{" "}
      {/* onAddGoal is our custom prop that holds a function. */}
      <GoalList goals={courseGoals} />{" "}
      {/* Self-closing tag because there is no child content. JSX requires explicit closing. */}
    </div>
  );
};

// Same idea using createElement instead of JSX (for comparison only):
// class App extends React.Component {
//   render() {
//     return React.createElement(
//       'div',
//       { className: 'course-goals' },
//       React.createElement('h2', null, 'Course Goals'),
//       React.createElement(GoalList, { goals: courseGoals })
//     );
//   }
// }

export default App;
