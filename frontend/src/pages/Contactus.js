import React from "react";
import Navbar from "../layout/Navbar";
import "./contact.css";

const Contactus = () => {
  return (
    <>
      <Navbar linkColor="black" />
      <div className="container pt-5">
        <div className="row">
          <div className="col-sm-12">
            <h4
              className="text-center pt-3"
              style={{
                fontFamily: "Arapey, serif",
                fontWeight: "400",
                fontSize: "27px",
                letterSpacing: "3px",
              }}
            >
              CONTACT LIN AND JIRSA
            </h4>
            <p
              style={{
                fontWeight: "200",
              }}
              className="text-center py-3"
            >
              <span
                style={{
                  fontWeight: "400",
                }}
              >
                Address
              </span>
              : 1173 Warner Ave, Tustin, CA 92780
              <br />
              <span
                style={{
                  fontWeight: "400",
                }}
              >
                Phone
              </span>
              : (949) 287-2153
            </p>
            <p
              style={{
                fontWeight: "200",
              }}
              className="text-center py-3"
            >
              Welcome! We’re excited to work with you! Please fill out the form
              below, and our team will be in touch with the next steps!
            </p>
            <form className="form">
              <label style={{ fontWeight: "200" }} className="my-4">
                Your Role (Required)
              </label>
              <br />
              <select
                style={{
                  border: "none",
                  borderBottom: "1px solid gray",
                  //   width: "240px",
                }}
                className="my-4"
              >
                <option>Bride</option>
                <option>Groom</option>
                <option>Planner</option>
                <option>Family</option>
                <option>Other</option>
              </select>
              <br />
              <label style={{ fontWeight: "200" }} className="my-4">
                Your Name (required)
              </label>
              <div className="row">
                <div className="col-md-6 my-5">
                  <input
                    style={{
                      outline: "none",
                      border: "none",
                      borderBottom: "1px solid gray",
                      width: "100%",
                      padding: "15px 0",
                      fontSize: "20px",
                    }}
                    type="text"
                    placeholder="First"
                  ></input>
                </div>
                <div className="col-md-6 my-5">
                  <input
                    style={{
                      outline: "none",
                      border: "none",
                      borderBottom: "1px solid gray",
                      width: "100%",
                      padding: "15px 0",
                      fontSize: "20px",
                    }}
                    type="text"
                    placeholder="Last"
                  ></input>
                </div>
                <label style={{ fontWeight: "200" }}>
                  Fiance's Full Name (required)
                </label>
                <br />
                <input
                  className="my-5"
                  style={{
                    outline: "none",
                    border: "none",
                    borderBottom: "1px solid gray",
                    width: "100%",
                    padding: "15px 0",
                    fontSize: "20px",
                  }}
                  type="text"
                />
                <br />
                <label style={{ fontWeight: "200" }}>
                  Your Email Address (required)
                </label>
                <br />
                <input
                  className="my-5"
                  style={{
                    outline: "none",
                    border: "none",
                    borderBottom: "1px solid gray",
                    width: "100%",
                    padding: "15px 0",
                    fontSize: "20px",
                  }}
                  type="email"
                />
                <br />
                <label style={{ fontWeight: "200" }}>
                  Your Phone Number (required)
                </label>
                <br />
                <input
                  className="my-5"
                  style={{
                    outline: "none",
                    border: "none",
                    borderBottom: "1px solid gray",
                    width: "100%",
                    padding: "15px 0",
                    fontSize: "20px",
                  }}
                  type="number"
                />
                <br />
                <label style={{ fontWeight: "200" }}>
                  Event Date (in <strong>mm-dd-yyyy</strong> format only)
                </label>
                <br />
                <input
                  className="my-5"
                  style={{
                    outline: "none",
                    border: "none",
                    borderBottom: "1px solid gray",
                    width: "100%",
                    padding: "15px 0",
                    fontSize: "20px",
                  }}
                  type="date"
                />
                <br />
                <label style={{ fontWeight: "200" }} className="my-4">
                  Event Type
                </label>
                <br />
                <select
                  style={{
                    border: "none",
                    borderBottom: "1px solid gray",
                    width: "240px",
                  }}
                  className="my-4"
                >
                  <option>-Please Choose an Option-</option>
                  <option>Wedding</option>
                  <option>Engagement</option>

                  <option>Other</option>
                </select>
                <br />
                <label style={{ fontWeight: "200" }} className="my-4">
                  Event Type
                </label>
                <br />
                <select
                  style={{
                    border: "none",
                    borderBottom: "1px solid gray",
                    width: "240px",
                  }}
                  className="my-4"
                >
                  <option>-Please Choose an Option-</option>
                  <option>Instagram</option>
                  <option>Facebook</option>
                  <option>Google</option>
                  <option>Planner</option>
                  <option>Referral from Family and Friend</option>
                  <option>Yelp</option>
                  <option>Venue</option>
                  <option>Other</option>
                </select>
                <br />
                <label style={{ fontWeight: "200" }}>
                  Your Phone Number (required)
                </label>
                <br />
                <textarea
                  className="my-5"
                  style={{
                    outline: "none",
                    // border: "none",
                    // borderBottom: "1px solid gray",
                    width: "100%",
                    padding: "15px 0",
                    fontSize: "20px",
                  }}
                  type="text"
                />
                <br />
                <button
                  style={{
                    padding: "13px",
                    border: "none",
                    backgroundColor: "rgb(154,204,154)",
                    color: "white",
                    fontWeight: "bold",
                    letterSpacing: "2px",
                    fontSize: "17px",
                  }}
                >
                  Send
                </button>
              </div>
            </form>
            <p style={{ fontWeight: "200", textAlign: "center" }}>
              *If you are having issues with the form above, email us at
              contact@linandjirsa.com
            </p>
            <div className="my-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.338463736229!2d77.20399207416405!3d28.529544688752452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1f7f1757d1b%3A0xb2f4861cad8f4fb1!2s89%2C%20A%20Block%20Main%20Rd%2C%20Block%20A%2C%20Shivalik%20Colony%2C%20Malviya%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110017!5e0!3m2!1sen!2sin!4v1711186324075!5m2!1sen!2sin"
                width="100%"
                height="450"
                title="map"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12"></div>
              <div className="col-lg-4 col-md-6 col-sm-12"></div>
              <div className="col-lg-4 col-md-6 col-sm-12"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
