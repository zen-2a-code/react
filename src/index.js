import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

// Entry file: this runs first, grabs the #root div from public/index.html, and asks React to render App there.
// Mount the top-level React component into the root div in public/index.html (single-page app entry).
ReactDOM.render(<App />, document.getElementById('root'));
