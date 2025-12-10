import React from 'react'; // JSX compiles to React.createElement, so React must be in scope.
import './GoalList.css'; // Keep styles close to the component; CSS is still global but easier to find here.

const GoalList = (props) => {
  // props is an object React passes in; it contains whatever attributes you set on <GoalList ... />.
  // props.goals is an array passed from App. Map it to JSX <li> elements; the result (an array of JSX) can be rendered directly.
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
