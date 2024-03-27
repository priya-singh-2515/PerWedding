import React from "react";
import "./service.css";
import Navbar from "../../layout/Navbar";

const Wallart = () => {
  return (
    <>
      <Navbar linkColor="white" />
      <div
        style={{
          height: "100vh",
          //   padding: "100px 0px",
          //   margin: "0px",
          backgroundImage: `url("https://www.linandjirsa.com/wp-content/uploads/ansel-wall-art-photography-768x512.jpg")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          overflowX: "hidden",
          textWrap: "balance",
        }}
        className="container-fluid  d-flex justify-content-center align-items-center"
      >
        <div className="row ">
          <div className="col-sm-12 text-center text-light ">
            <h3 className="wallarth">
              WALL ART COLLECTIONS FOR WEDDING AND PORTRAIT PHOTOGRAPHY
            </h3>
            {/* <p>When Words Fail, Our Imagery Speaks</p>   */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Wallart;
