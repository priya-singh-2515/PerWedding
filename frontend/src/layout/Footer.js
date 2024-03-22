import React from "react";
import Footertop from "./Footertop";

const Footer = () => {
  return (
    <>
      <Footertop />
      <div className="container text-center pt-3 pb-5">
        <div className="row">
          <span className="footerspan">Copyright 2024</span>
          <span className="footerspan">
            Lin and Jirsa | Los Angeles Wedding Photographer
          </span>
          <div className="col-sm-12">
            <ul className="footerul">
              <li>Resources</li>
              <li>Vandors</li>
              <li>OC Venues</li>
              <li>LA Venues</li>
              <li>Tutorials</li>
              <li>Jobs</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
