/**
 * @fileoverview This file initializes the React application and renders the main App component.
 * @description This file sets up the ReactDOM rendering for the application using React.StrictMode and BrowserRouter.
 */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

/**
 * Initializes the React application and renders the main App component.
 * @function
 * @returns {void}
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  /**
   * Wraps the App component with React.StrictMode and BrowserRouter for enhanced development and routing.
   */
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);