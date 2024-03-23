// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

const Footertop = () => {
  return (
    <>
      <div className="footerbg text-light">
        <div className="container  px-5 py-5">
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
            <div className="col-md-4 col-sm-12 col-12 ">
              <div className="colmn  py-2">
                <NavLink className="footerlink">
                  HOW TO CHOOSE YOUR PHOTOGRAPHER
                </NavLink>
                <p>
                  Important Tips and Advice for Choosing The Wedding
                  Photographer for You.
                </p>
              </div>
              <div className="colmn  py-2">
                <NavLink className="footerlink">
                  QUESTIONS FOR YOUR PHOTOGRAPHER
                </NavLink>
                <p>What Should Your Ask Your Wedding Photographer?</p>
              </div>
              <div className="colmn  py-2">
                <NavLink className="footerlink">
                  4 COMMON EDITING STYLES
                </NavLink>
                <p>See the most popular wedding photography editing styles!</p>
              </div>
              <div className="colmn  py-2">
                <NavLink className="footerlink">
                  ORANGE COUNTY MATERNITY PHOTOGRAPHER
                </NavLink>
                <p>
                  Maternity photography is a beautiful celebration of the female
                  body. Our photographers are ready to capture your precious
                  moments.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-12 ">
              <div className="colmn  py-2">
                <NavLink className="footerlink">
                  IDEAL WEDDING PHOTO TIMELINE
                </NavLink>
                <p>
                  Understand Why Wedding Photographers Need the Time We Request.
                </p>
              </div>
              <div className="colmn  py-2">
                <NavLink className="footerlink">
                  WARDROBE AND MAKEUP GUIDE
                </NavLink>
                <p>
                  Wardrobe and Makeup Advice for Your Engagement or Wedding.
                </p>
              </div>
              <div className="colmn  py-2">
                <NavLink className="footerlink">
                  FREQUENTLY ASKED QUESTIONS
                </NavLink>
                <p>
                  A list of the most common questions asked about our studio.
                </p>
              </div>
              <div className="colmn  py-2">
                <NavLink className="footerlink">
                  ORANGE COUNTY NEWBORN PHOTOGRAPHER
                </NavLink>
                <p>
                  Your precious newborn is in good hands with Lin and Jirsa. See
                  how we apply our passion and creativity to newborn portraits.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-12 ">
              <div className="colmn  py-2">
                <NavLink className="footerlink">HIRING “UNCLE JOE”</NavLink>
                <p>
                  Understand the Risks of Hiring a Friend or Relative with a
                  Nice Camera.
                </p>
              </div>
              <div className="colmn  py-2">
                <NavLink className="footerlink">
                  OUR WEDDING PHOTOGRAPHY TOOLBOX
                </NavLink>
                <p>
                  Our cameras, lenses and accessories used for wedding and
                  engagement photography.
                </p>
              </div>
              <div className="colmn  py-2">
                <NavLink className="footerlink">
                  INDIAN WEDDING PHOTOGRAPHY
                </NavLink>
                <p>
                  Learn how we capture the beauty, excitement, color and emotion
                  of Indian Weddings.
                </p>
              </div>
              <div className="colmn  py-2">
                <NavLink className="footerlink">
                  FAVORITE WEDDING VENDORS
                </NavLink>
                <p>
                  Having a good team will make your wedding run smoothly. Here
                  are our favorite LA and OC wedding vendors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footertop;
