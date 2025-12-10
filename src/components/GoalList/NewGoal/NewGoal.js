import React, { useState } from "react"; // JSX -> React.createElement; useState stores input so React can re-render on changes.
import "./NewGoal.css"; // Styles scoped by selector, but still global; keeping them next to the component for discoverability.

const NewGoal = (props) => {
  /*
    Controlled input state (kid version):
    - Imagine the text box is a walkie-talkie. Whatever you type, we copy into React state.
    - Because React also sends that state back into the input's "value", the two stay in sync (two-way binding).
    - Result: we can read it, clear it, and React will redraw the input with the latest text.
  */
  const [enteredText, setEnteredText] = useState("");

  // Event handler: runs on form submit. React passes the event object.
  const addGoalHandler = (event) => {
    event.preventDefault(); // Stop the browser from reloading/submitting the page; we'll handle it in React instead.

    const newGoal = {
      id: Math.random().toString(), // Quick demo ID; fine for examples but not collision-proof.
      text: enteredText, // Use the latest value from state instead of a hardcoded string.
    };

    // Call the callback prop from the parent to bubble the new goal up.
    props.onAddGoal(newGoal);

    // Reset input after submit: updating state clears the controlled input value.
    setEnteredText("");
  };

  // Runs on every keystroke; sync the input value into state (input -> state).
  // "event.target.value" is literally "whatever is inside the box right now."
  const inputFieldChangeHandler = (event) => {
    setEnteredText(event.target.value); // event.target.value is the current text in the input element.
  };

  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input
        type="text"
        onChange={inputFieldChangeHandler}
        value={enteredText} // State -> input (two-way binding). Without this, resetting state wouldn't clear the box.
        placeholder="New Goal"
      />{" "}
      {/* Self-closing input is required in JSX. */}
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;
