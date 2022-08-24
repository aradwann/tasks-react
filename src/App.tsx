import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/header/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
