import { useState } from "react";
import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "../views/home/home";
import { Characters } from "../views/characters/characters";
import { News } from "../views/news/news";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/characters" exact element={<Characters />}></Route>
        <Route path="/news" exact element={<News />}></Route>
      </Routes>
    </>
  );
}

export default App;
