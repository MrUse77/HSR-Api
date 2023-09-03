import { useState } from "react";
import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "../views/home/home";
import { Characters, Character } from "../views/characters/characters";
import { Materials } from "../views/materials/materials";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/characters" exact element={<Characters />}></Route>
        <Route path="/materials" exact element={<Materials />}></Route>
        <Route path="/characters/:name" exact element={<Character />}></Route>
      </Routes>
    </>
  );
}

export default App;
