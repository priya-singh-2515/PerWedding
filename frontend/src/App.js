// import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import WeddingPhotography from "./pages/services/WeddingPhotography";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/services/weddingphotography"
          element={<WeddingPhotography />}
        />
      </Routes>
    </>
  );
}

export default App;
