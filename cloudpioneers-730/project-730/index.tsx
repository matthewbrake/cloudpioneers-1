import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/**
 * This is the main entry point for the React application.
 * It finds the root HTML element and renders the <App /> component into it.
 */

// 1. Find the root DOM element where the app will be mounted.
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to. Make sure you have a <div id='root'></div> in your index.html.");
}

// 2. Create a React root.
const root = ReactDOM.createRoot(rootElement);

// 3. Render the main App component.
// React.StrictMode is a wrapper that helps identify potential problems in an app.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
