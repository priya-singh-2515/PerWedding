// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footertop = () => {
  return (
    <>
      <div
        style={{ backgroundColor: "rgb(115,153,115)" }}
        className="container-fluid py-4"
      >
        <div className="row pt-5">
          <div
            style={{ fontSize: "30px", color: "white" }}
            className="col-sm-12 text-center my-3"
          >
            READY TO GET STARTED?
          </div>
        </div>
        <div className="row pb-5">
          <div className="col-sm-12 text-center my-3">
            <button
              style={{
                backgroundColor: "transparent",
                color: "white",
                fontWeight: "bold",
                border: "1px solid white",
                padding: "13px 30px",
              }}
            >
              CONTACT US{" "}
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="container px-5">
          <div className="row text-center">
            <h3>WEDDING RESOURCES & ADVICE</h3>
            <p>
              TIPS AND ADVICE FOR YOUR LOS ANGELES OR ORANGE COUNTY WEDDING DAY
            </p>
            <p>
              We know how difficult it is to plan your wedding. To help, here
              are some resources and guides to help you through the process. As
              wedding professionals with years of experience, we've seen it all!
              We're here to help you through the process. Whether you're looking
              for the best vendors or needing help with your timeline, we hope
              we can help in any way possible. We have locations in Los Angeles
              and Orange County.
            </p>
            <div className="col-lg-4 px-5">
              <div>
                <h4>HOW TO CHOOSE YOUR PHOTOGRAPHER</h4>
                <p>
                  Important Tips and Advice for Choosing The Wedding
                  Photographer for You.
                </p>
              </div>
              <div>
                <h4>QUESTIONS FOR YOUR PHOTOGRAPHER</h4>
                <p>What Should Your Ask Your Wedding Photographer?</p>
              </div>
              <div>
                <h4>4 COMMON EDITING STYLES</h4>
                <p>See the most popular wedding photography editing styles!</p>
              </div>
              <div>
                <h4>ORANGE COUNTY MATERNITY PHOTOGRAPHER</h4>
                <p>
                  Maternity photography is a beautiful celebration of the female
                  body. Our photographers are ready to capture your precious
                  moments.
                </p>
              </div>
            </div>
            <div className="col-lg-4"></div>
            <div className="col-lg-4"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footertop;
