// import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import WeddingPhotography from "./pages/services/WeddingPhotography";
import OurPhotograpgyteam from "./pages/about/OurPhotographyteam";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/weddingphotography"element={<WeddingPhotography />} />
        <Route path="/about/OurPhotographyteam" element={<OurPhotograpgyteam/>}/>
      </Routes>
    </>
  );
}

export default App;
