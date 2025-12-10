// Extra practice components (not used by default).
// Copy any of these into App.js to render them, or import them where you want to experiment.
// Goal: give you bite-sized patterns for props, state, events, and conditional rendering.

import React, { useState } from "react";

// Props demo: the parent decides the message; the child just displays it.
export const Greeter = (props) => {
  return <p>Hello, {props.name || "friend"}!</p>;
};

// State + click handler: toggles a light on/off.
export const LightSwitch = () => {
  const [isOn, setIsOn] = useState(false); // state = current bulb status

  const toggle = () => setIsOn((prev) => !prev); // invert the previous value

  return (
    <div>
      <p>The light is: {isOn ? "ON" : "OFF"}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
};

// Conditional rendering with AND and ternary.
export const StatusMessage = ({ isLoading, error }) => {
  if (error) {
    return <p style={{ color: "red" }}>Something went wrong.</p>;
  }

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {!isLoading && <p>All set!</p>}
    </div>
  );
};

// Mapping arrays to JSX with keys.
export const ShoppingList = ({ items }) => {
  if (!items || items.length === 0) {
    return <p>No groceries yet.</p>;
  }

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.label}</li> // key must be stable; avoid using array index
      ))}
    </ul>
  );
};

// Controlled input pattern (simple). Type and see the live mirror.
export const MirrorInput = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => setText(event.target.value);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type here"
      />
      <p>You typed: {text || "(nothing yet)"}</p>
    </div>
  );
};

// Child-to-parent data flow demo (lifting state up).
// The parent holds the list; the child only gathers input and "tells" the parent.
export const ChildToParentDemo = () => {
  const [items, setItems] = useState([]);

  const addItem = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setItems((prev) => prev.concat({ id: Math.random().toString(), label: trimmed }));
  };

  return (
    <div>
      <h3>Shared list (parent owns the data)</h3>
      <AddItemForm onAdd={addItem} />
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.label}</li>
        ))}
      </ul>
    </div>
  );
};

// Helper component used by ChildToParentDemo.
const AddItemForm = ({ onAdd }) => {
  const [text, setText] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Item name"
      />
      <button type="submit">Add</button>
    </form>
  );
};
