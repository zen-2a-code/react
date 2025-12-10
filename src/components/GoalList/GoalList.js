import React from 'react'; // JSX compiles to React.createElement, so React must be in scope.
import './GoalList.css'; // Keep styles close to the component; CSS is still global but easier to find here.

const GoalList = (props) => {
  /*
    Mini mental model:
    - "props" stands for "properties" (like settings on a toy).
    - App hands this component a "goals" prop that is just an array of objects.
    - We turn that array into an array of <li> elements. React can render arrays of JSX directly.
  */
  return (
    <ul className="goal-list">
      {props.goals.map((goal) => (
        <li key={goal.id}> {/* key helps React track list items efficiently; must be unique among siblings. */}
          {goal.text} {/* Curly braces inject the goal text (plain JS) into JSX. */}
        </li>
      ))}
    </ul>
  );
};

export default GoalList;
