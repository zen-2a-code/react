import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

/*
  Entry file (step-by-step):
  1) Browser loads public/index.html, which has a plain <div id="root"></div>.
  2) This file grabs that div. Think of it as finding a blank stage in the DOM (Document Object Model—the live page tree).
  3) ReactDOM.render tells React to paint the <App /> component onto that stage.
  Result: one HTML file, but React swaps the views inside it (Single Page Application, "SPA").
*/
ReactDOM.render(<App />, document.getElementById('root'));
