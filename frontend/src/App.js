// import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import WeddingPhotography from "./pages/services/WeddingPhotography";
import Contactus from "./pages/Contactus";
import WeddingCinema from "./pages/services/WeddingCinema";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/services/weddingphotography"
          element={<WeddingPhotography />}
        />
        <Route path="/services/weddingcinema" element={<WeddingCinema />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>
    </>
  );
}

export default App;
