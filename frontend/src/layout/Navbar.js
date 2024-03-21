import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/Logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  // faPinterest,
  faPinterestP,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"; // Import the Twitter icon
import "./comp.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <img
            style={{ height: "50px", width: "100px" }}
            src={logo}
            alt="logo"
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  style={{ color: "white" }}
                  className="nav-link"
                  aria-current="page"
                >
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  style={{ color: "white" }}
                  className="nav-link dropdownser"
                >
                  SERVICES
                </NavLink>
                <ul className="dropd">
                  <li className="py-1">
                    <NavLink className="dropdd">WEDDING PHOTOGRAPHY</NavLink>
                  </li>
                  <li className="py-1">
                    <NavLink className="dropdd">WEDDING CINEMA</NavLink>
                  </li>
                  <li className="py-1">
                    <NavLink className="dropdd">WALL ART</NavLink>
                  </li>
                  <li className="py-1">
                    <NavLink className="dropdd">ALBUMS</NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink
                  style={{ color: "white" }}
                  className="nav-link dropdownres"
                  aria-disabled="true"
                >
                  RESOURCES
                </NavLink>
                <ul className="dropa">
                  <li className="py-1">
                    <NavLink className="dropaa">CLIENT RESOURCES</NavLink>
                  </li>
                  <li className="py-1">
                    <NavLink className="dropaa">FAQS</NavLink>
                  </li>
                  <li className="py-1">
                    <NavLink className="dropaa">FAVORITE VENDORS</NavLink>
                  </li>
                  <li className="py-1">
                    <NavLink className="dropaa">WEDDING TIMELINE</NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink
                  style={{ color: "white" }}
                  className="nav-link dropdownwed"
                  aria-disabled="true"
                >
                  WEDDING VENUES
                </NavLink>
                <ul className="dropb">
                  <li className="py-1">
                    <NavLink className="dropbb"></NavLink>
                  </li>
                  <li className="py-1">
                    <NavLink className="dropbb"></NavLink>
                  </li>
                  <li className="py-1">
                    <NavLink className="dropbb"></NavLink>
                  </li>
                  <li className="py-1">
                    <NavLink className="dropbb"></NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink
                  style={{ color: "white" }}
                  className="nav-link dropdownabt"
                  aria-disabled="true"
                >
                  ABOUT
                </NavLink>
                <ul className="dropc">
                  <li className="py-1">
                    <NavLink className="dropcc">OUR PHOTOGRAPHY TEAM</NavLink>
                  </li>
                  <li className="py-1">
                    <NavLink className="dropcc">OUR PHOTOGRAPHY STYLE</NavLink>
                  </li>
                  <li className="py-1">
                    <NavLink className="dropcc">OUR EDITING STYLE</NavLink>
                  </li>
                  <li className="py-1">
                    <NavLink className="dropcc">OUR PARTNERS</NavLink>
                  </li>
                  <li className="py-1">
                    <NavLink className="dropcc">CAREER OPPORTUNITIES</NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink
                  style={{ color: "white" }}
                  className="nav-link"
                  aria-disabled="true"
                >
                  CONTACT US
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  style={{ color: "white" }}
                  className="nav-link"
                  aria-disabled="true"
                >
                  <FontAwesomeIcon
                    style={{ fontSize: "17px" }}
                    icon={faTwitter}
                  />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  style={{ color: "white" }}
                  className="nav-link"
                  aria-disabled="true"
                >
                  <FontAwesomeIcon
                    style={{ fontSize: "17px" }}
                    icon={faFacebookF}
                  />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  style={{ color: "white" }}
                  className="nav-link"
                  aria-disabled="true"
                >
                  <FontAwesomeIcon
                    style={{ fontSize: "17px" }}
                    icon={faPinterestP}
                  />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  style={{ color: "white" }}
                  className="nav-link"
                  aria-disabled="true"
                >
                  <FontAwesomeIcon
                    style={{ fontSize: "17px" }}
                    icon={faInstagram}
                  />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
