import React from "react";
import Navbar from "../../layout/Navbar";
// import ReactPlayer from "react-player";

const WeddingCinema = () => {
  return (
    <>
      <Navbar linkColor="white" />
      <div
        style={{
          height: "70vh",
          padding: "auto",
          backgroundImage: `url("https://www.linandjirsa.com/wp-content/uploads/ansel-wall-art-photography-768x512.jpg")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="container-fluid"
      >
        <div className="row pt-5">
          <div className="col-sm-12 text-center text-light pt-5">
            <h3 className="pt-5">LIN & JIRSA CINEMA</h3>
            <p>When Words Fail, Our Imagery Speaks</p>
          </div>
        </div>
      </div>
      {/* <ReactPlayer
                url="https://vimeo.com/286209377"
                controls
                width="1200px"
                height="360px"
              /> */}
    </>
  );
};

export default WeddingCinema;
