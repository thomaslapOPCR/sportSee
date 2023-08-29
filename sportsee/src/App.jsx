/**
 * @import {Component} BaseLayout - The layout component.
 * @import {Component} Error - The error page component.
 * @import {Component} DashBoard - The dashboard page component.
 * @import {Component} Home - The home page component.
 * @import {Library} react - The React library.
 * @import {Library} react-router-dom - The React Router library for routing.
 */

import React from "react";
import { Route, Routes } from "react-router-dom";
import BaseLayout from "./components/BaseLayout/Layout.jsx";
import Error from "./pages/Error/Error.jsx";
import DashBoard from "./pages/DashBoard/DashBoard.jsx";
import Home from "./pages/Home/Home.jsx";

/**
 * The root component of the application.
 *
 * @component
 * @returns {JSX.Element}
 */
const App = () => {
  return (
    /** Defines the routing structure using the `Routes` component from `react-router-dom`. */
    <Routes>
      {/** Base layout for all routes */}
      <Route path="/" element={<BaseLayout />}>
        {/** Route for the home page */}
        <Route path="/" element={<Home />} />
        {/** Route for the user dashboard */}
        <Route path="/user/:id" element={<DashBoard />} />
        {/** Route for displaying errors */}
        <Route path="*" element={<Error />} />
        <Route path="/error" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default App;