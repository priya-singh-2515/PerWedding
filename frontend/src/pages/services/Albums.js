import React from "react";
import Navbar from "../../layout/Navbar";
import albumbg from "../../images/albumbg.jpg";
import albumbg1 from "../../images/albumbg1.jpg";
import albumbg2 from "../../images/albumbg2.jpg";
import albumbg3 from "../../images/albumbg3.jpg";
import albumbg4 from "../../images/albumbg4.jpeg";
import albumbgfont from "../../images/albumfont.jpg";
import albumbg5 from "../../images/albumbg5.jpg";
import "./service.css";
import SideComp from "./sideComp";
import { NavLink } from "react-router-dom";
import Footercontact from "../../layout/footercontact";
import Footer from "../../layout/Footer";

const Albums = () => {
  const style1 = {
    backgroundImage: `url("https://d8evzn3g25q98.cloudfront.net/Lay-Flat.jpg")`, // Corrected
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
      <Navbar linkColor="black" />
      <div className="container-fluid" style={style1}>
        <div className="row">
          <div className="col-sm-12">
            <h3 style={{ fontSize: "5vw", fontFamily: "Arapey, serif" }}>
              FLUSH MOUNT ALBUMS
            </h3>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-12 my-5 text-center">
            <div>
              <img
                style={{ width: "100%", height: "60vh" }}
                src={albumbg}
                alt=""
              />
            </div>
            <p className="ptag">
              We have sampled dozens of album and bookmakers before finding the
              perfect match for our studio. Like our photography, we prefer our
              albums to be timeless.
            </p>
            <p className="ptag">
              Our high-quality, hand-crafted flush mount album is our most
              popular album. Its seamless flush mounted pages allow for
              beautiful panoramic spreads of your favorite photos. Its sturdy
              build and premium design make it an album that is as durable as it
              is beautiful. This classic album is characterized by a center fold
              with no split/cut and a storybook layout design that evokes
              tradition and elegance. Canvas photo covers, custom embossing,
              foiling, and several beautiful cover options give this album a
              personal touch that our clients love and appreciate
            </p>
            <img
              style={{ width: "100%", height: "60vh" }}
              src={albumbg1}
              alt=""
            />
            <p className="ptag">
              Our flush mount albums come in three sizes: 8×8, 10×10, and 12×12.
              An open spread lays out to a 2:1 ratio onto which full-spread
              photos fit beautifully without loss of image in cropping
            </p>
            <img
              style={{ width: "100%", height: "60vh" }}
              src={albumbg2}
              alt=""
            />
            <p className="ptag">
              Our flush mount album covers can be made from leather or
              stain-proof linen and come in the following colors:
            </p>
            <div>
              <h5 style={{ textAlign: "center" }}>Leathers</h5>
              <img
                style={{ width: "100%", height: "60vh" }}
                src={albumbg3}
                alt=""
              />
              <h5 style={{ textAlign: "center" }}>Linens</h5>
              <img style={{ width: "80%" }} src={albumbg4} alt="" />
              <div>
                <h4>COVER OPTIONS & PAGE STYLE</h4>
                <div className="d-flex">
                  <h6>PHOTO CUT OUT:</h6>
                  <p>
                    Available in horizontal, vertical, and square orientations.
                  </p>
                </div>
                <div className="d-flex">
                  <h6>FOILING:</h6>
                  <p>
                    Paint-like “foil” adhered within any embossing. Available in
                    gold, silver, rose gold, and white.
                  </p>
                </div>
                <div className="d-flex">
                  <h6>CUSTOM EMBOSSING:</h6>
                  <p>
                    This can include monograms, names, initials, and/or the date
                    of your special day.
                  </p>
                </div>
                <div>
                  <h6>FONT OPTIONS:</h6>
                  <img style={{ width: "80%" }} src={albumbgfont} alt="" />
                </div>
              </div>
              <img style={{ width: "80%" }} src={albumbg5} alt="" />
              <p className="ptag">
                Our album spreads are characterized by a center fold with no
                cut/split in the seam. This is especially noticed when an image
                extends over the seam/fold.
              </p>
              <p className="ptag">
                Click <NavLink>here</NavLink> to read through our album-design
                philosophy as well as more information on how to order an album.
              </p>
              <hr className="ptag" />
              <hr className="ptag" />
              <p>PARK PLAZA HOTEL WEDDING LOS ANGELES »</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 text-center my-5">
            <SideComp />
          </div>
        </div>
      </div>
      <Footercontact />
      <Footer />
    </>
  );
};

export default Albums;
