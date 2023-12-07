import { Routes, Route } from "react-router-dom";
import { Home } from "../views/home/home";
import { Characters } from "../views/characters/characters";
import { Character } from "../views/character/character";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/characters" exact element={<Characters />}></Route>
        <Route path="/characters/:id" excat element={<Character />}></Route>
      </Routes>
    </>
  );
}

export default App;
