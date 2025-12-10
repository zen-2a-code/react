import React from 'react'; // Needed because JSX compiles to React.createElement with this CRA setup.

const App = () => {
  // Root component; whatever we return here shows inside the #root div once React mounts (see src/index.js).
  // JSX looks like HTML but is syntax sugar that compiles to React.createElement calls.
  return (
    <h1 title="This tooltip comes from the JSX attribute.">
      A React App!
    </h1>
  );
};

// Same output without JSX (kept as a comment so you can compare without running it):
// const App = () =>
//   React.createElement(
//     'h1',
//     { title: 'This tooltip comes from the JSX attribute.' },
//     'A React App!'
//   );

export default App;
