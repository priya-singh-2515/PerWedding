import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import WeddingPhotography from "./pages/services/WeddingPhotography";
import OurPhotograpgyteam from "./pages/about/OurPhotographyteam";

import Contactus from "./pages/Contactus";
import WeddingCinema from "./pages/services/WeddingCinema";
import Wallart from "./pages/services/Wallart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/services/weddingphotography"element={<WeddingPhotography />} />
        <Route path="/about/OurPhotographyteam" element={<OurPhotograpgyteam/>}/>

        <Route
          path="/services/weddingphotography"
          element={<WeddingPhotography />}
        />
        <Route path="/services/weddingcinema" element={<WeddingCinema />} />
        <Route path="/services/wall-art-collections" element={<Wallart />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>
    </>
  );
}

export default App;
