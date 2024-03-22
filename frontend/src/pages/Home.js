import React from "react";
import logo from "../images/Logo.jpg";
import "./home.css";
import Navbar from "../layout/Navbar";
// import Footertop from "../layout/Footertop";
import FirstComp from "../slideComp/FirstComp";
import Footer from "../layout/Footer";

const Home = () => {
  const style = {
    backgroundImage: `url("https://i.vimeocdn.com/video/721056442-5d3959de48e444c17d20f83fd86b9d35871458d5c5ba97a722d4c74e99d47143-d?mw=2000&mh=838&q=70")`,
    backgroundSize: "cover",
  };
  const image = [
    { img: "./images/feat_logo1.png" },
    { img: "./images/feat_logo2.png" },
    { img: "./images/feat_logo4.png" },
    { img: "./images/feat_logo7.png" },
    { img: "./images/canon.png" },
    { img: "./images/la.png" },
  ];

  return (
    <>
      <Navbar />
      <div style={style} className="container-fluid tophome py-5">
        <div className="row">
          <div className="col-lg-12">
            <h1>LOS ANGELES WEDDING PHOTOGRAPHER</h1>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          {/* <div className="col-lg-12"> */}
          <div
            className="col-lg-12 py-4"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img
              src={logo}
              alt="logo"
              style={{ height: "10vh", width: "20%" }}
            />
          </div>

          {/* </div> */}
        </div>
        <div className="row">
          <div className="col-lg-12 logotext">
            <p>
              If you're looking for a Los Angeles Wedding Photographer, then
              you're in the right place! Since 2008, Lin and Jirsa has set the
              standard for creative wedding photography. Our style is deeply
              rooted in wedding photojournalism, influenced by fine-art and
              fashion photography. The result is creative, clean and crisp
              wedding photography that’s romantic, fun, and emotional. We pride
              ourselves on not just being photographers, but rather artists
              creating unique and expressive imagery.
            </p>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundColor: "#1a1a1a63" }}
        className="container py-5 text-center"
      >
        <p className="text-light">FEATURED IN:</p>
        <div className="row  ">
          <div className="col-sm-12">
            <div className="featmap">
              {image.map((e) => (
                <img src={e.img} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 brandmash2 text-center">
            <h6 style={{ letterSpacing: "2px" }}>
              TOP 100 WEDDING PHOTOGRAPHERS IN THE US
            </h6>
            <p>Brandsmash</p>
          </div>
          <div className="col-lg-4 brandmash2 text-center">
            <h6 style={{ letterSpacing: "2px" }}>LEGENDS OF LIGHT AWARD</h6>
            <p>Profoto USA</p>
          </div>
          <div className="col-lg-4 brandmash text-center">
            <h6 style={{ letterSpacing: "2px" }}>
              THE BEST WEDDING PHOTOGRAPHER IN LOS ANGELESs
            </h6>
            <p>MyFoxLA</p>
          </div>
        </div>
      </div>
      <FirstComp />
      <Footer />
    </>
  );
};

export default Home;
