import React from "react";
import logo from "../images/Logo.jpg";
import "./home.css";
import "react-image-gallery/styles/css/image-gallery.css";
import Navbar from "../layout/Navbar";
// import Footertop from "../layout/Footertop";
import FirstComp from "../slideComp/FirstComp";
import Footer from "../layout/Footer";
import { NavLink } from "react-router-dom";

const Home = () => {
  const style = {
    backgroundImage: `url("https://i.vimeocdn.com/video/721056442-5d3959de48e444c17d20f83fd86b9d35871458d5c5ba97a722d4c74e99d47143-d?mw=2000&mh=838&q=70")`,
    backgroundSize: "cover",
  };
  const style2 = {
    backgroundImage: `url("https://www.linandjirsa.com/wp-content/uploads/01-wedding-preparation-los-angeles-photo-lin-jirsa.jpg")`,
    backgroundSize: "cover",
    color: "white",
  };
  const image = [
    { img: "./images/feat_logo1.png" },
    { img: "./images/feat_logo2.png" },
    { img: "./images/feat_logo4.png" },
    { img: "./images/feat_logo7.png" },
    { img: "./images/canon.png" },
    { img: "./images/la.png" },
  ];

  const image2 = [
    {
      img: "./images/map1.jpg",
      head: "Photo Editing Styles",
      para: "Every client has a unique style and vision for their wedding. The diversity of wedding venues and decor styles seamlessly matches various photo editing techniques. To accommodate these individual tastes, we offer three primary editing styles: Signature, Light and Airy, and Dark and Moody.",
    },
    {
      img: "./images/map2.jpg",
      head: "Wedding Videography",
      para: "We craft captivating, artistic narratives that celebrate meaningful moments. Rather than merely compiling events, our wedding videography cherishes your relationships—with one another, with your families, and with your dearest friends. It weaves a timeless story for future generations of your family to treasure and relive.",
    },
    {
      img: "./images/map3.jpg",
      head: "Favorite Wedding Vendors",
      para: "We've curated a list of professionals from Los Angeles and surrounding areas to help bring your wedding dreams to life. Selecting the ideal vendors is crucial for realizing your vision and ensuring your special day goes off without a hitch. Explore our top recommendations and don't hesitate to contact us with any inquiries.",
    },
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
              {image.map((e, index) => (
                <img key={index} alt="ahs" src={e.img} />
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
      <div style={style2} className="container-fluid p-3">
        <div className="row">
          <div className="col-lg-6 col-md-12 py-5">
            <h3 className="pt-3">Our Style and Approach</h3>
            <hr style={{ border: "1px solid white" }} />
            <p className="py-2">CLEAN. CRISP. DIFFERENT</p>
            <p className="py-3">
              The four pillars of our style are 1) Celebrating Love, 2)
              Storytelling, 3) Creativity, and 4) Capturing Beauty. Each is
              equally important for a complete wedding photography experience.
              Learn more about our style below or browse some of our favorite
              photos below from our team of Los Angeles wedding photographers.
            </p>
            <button className="my-4 mybtn1">LEARN MORE ABOUT OUR STYLE</button>
          </div>
          <div className="col-lg-6 col-md-12"></div>
        </div>
      </div>
      <div className="container-fluid py-5 text-center">
        <h4 className="pt-5">Our Resources</h4>
        <p className="py-5">
          To help you plan for your wedding, see some of our most popular
          resources below.
        </p>
        <div className="row">
          <div className="col-sm-12 d-flex justify-content-around flex-wrap">
            {image2.map((e, index) => (
              <NavLink style={{ textDecoration: "none", cursor: "pointer" }}>
                <div className="map2" key={index}>
                  <img
                    style={{ width: "100%", height: "50%" }}
                    src={e.img}
                    alt="map"
                  />
                  <h4 className="py-4">{e.head}</h4>
                  <p>{e.para}</p>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
