import React from "react";
import sideimg from "../../images/sideimg1.png";
import { NavLink } from "react-router-dom";
import mission1 from "../../images/mission1.jpg";

const SideComp = () => {
  return (
    <div>
      <h4
        className="py-2"
        style={{
          fontFamily: "Arapey, serif",
          fontWeight: "200",
          color: "#3b3939",
          fontSize: "20px",
        }}
      >
        ABOUT US
      </h4>
      <img
        src={mission1}
        alt="img"
        className="py-3"
        style={{ width: "100%" }}
      />
      <p>Crisp. Clean. Different.</p>
      <p
        style={{
          fontFamily: "Lato, sans-serif",
          fontWeight: "200",
          color: "#696666",
          fontSize: "12px",
          wordSpacing: "3px",
        }}
        className="py-3"
      >
        Since 2008, LJP has been documenting the best moments of life.
        Experience our passion, professionalism, and creativity on your special
        wedding day.
      </p>
      <button
        style={{
          width: "100%",
          padding: "5px 0",
          border: "none",
          backgroundColor: "rgb(154,204,154)",
          color: "white",
          fontWeight: "500",
        }}
      >
        REQUEST QUOTE
      </button>
      <p
        style={{
          fontFamily: "Lato, sans-serif",
          fontWeight: "200",
          color: "#696666",
        }}
        className="py-4"
      >
        EXPLORE VENUES
      </p>
      <div>
        <NavLink className="pagelinks">Los Angeles Venues</NavLink>
        <br />
        <NavLink className="pagelinks">Orange County Venues</NavLink>
        <br />
        <NavLink className="pagelinks">Riverside Venues</NavLink>
        <br />
        <NavLink className="pagelinks">San Diego Venues</NavLink>
        <br />
        <NavLink className="pagelinks">San Francisco Venues</NavLink>
      </div>
      <div
        className="text-center my-5 py-5"
        style={{
          backgroundColor: "rgb(247,236,232)",
          width: "100%",
        }}
      >
        <img src={sideimg} alt="img" style={{ width: "100%" }} />
        <h5
          style={{
            fontFamily: "Lato, sans-serif",
            fontWeight: "200",
            color: "#696666",
          }}
          className="py-3"
        >
          JOIN OUR NEWSLETTER
        </h5>
        <p
          style={{
            fontFamily: "Lato, sans-serif",
            fontWeight: "200",
            color: "#696666",
            fontSize: "13px",
          }}
        >
          Subscribe to our monthly newsletter and instantly receive access to
          our library of resources, including:
        </p>
        <span>- Cultural Wedding Guides</span>
        <br />
        <span>- Best Engagement Photo Locations</span>
        <br />
        <span>- 12 Essential Wedding Planning Tips</span>
      </div>
    </div>
  );
};

export default SideComp;
