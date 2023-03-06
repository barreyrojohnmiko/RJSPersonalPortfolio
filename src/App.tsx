import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";

import "./App.css";

const App = () => {
  return (
    <div className="main-component">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
