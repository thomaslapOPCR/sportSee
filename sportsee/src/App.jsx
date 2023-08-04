import React from "react";
import { Route, Routes } from "react-router-dom";
import BaseLayout from "./components/BaseLayout/Layout.jsx";
import Error from "./pages/Error/Error.jsx";
import DashBoard from "./pages/DashBoard/DashBoard.jsx";
import Home from "./pages/Home/Home.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<DashBoard />} />
        <Route path="*" element={<Error />} />
        <Route path="/error" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default App;
