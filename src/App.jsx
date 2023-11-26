import Home from "./Home";
import Logic from "./Components/Login-Register/Logic";
import { Routes, Route } from "react-router-dom";
import Gardentools from "./Components/Garden-tools/Gardentools.jsx";
import Flowers from "./Components/Flowers/Flowers.jsx";
import Grocery from "./Components/Grocery/Grocery.jsx";
import Snacks from "./Components/Snacks/Snacks.jsx";
import Seeds from "./Components/Seeds/Seeds.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="seeds" element={<Seeds />}></Route>
          <Route path="garden-tools" element={<Gardentools />}></Route>
          <Route path="flowers" element={<Flowers />}></Route>
          <Route path="grocery" element={<Grocery />}></Route>
          <Route path="snacks" element={<Snacks />}></Route>
        </Route>
        <Route path="/login-register" element={<Logic />}></Route>
      </Routes>
    </>
  );
}

export default App;
