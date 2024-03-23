import React from "react";
<<<<<<< HEAD
// import Weddingphotography from "../../images/Weddingphotography.jpg";
=======
import "react-image-gallery/styles/css/image-gallery.css";

import Weddingphotography from "../../images/Weddingphotography.jpg";
import SecondComp from "../../slideComp/SecondComp";
>>>>>>> 995776a194f126a7b38e2e9e964706faf8eb0c15
import FirstComp from "../../slideComp/FirstComp";
import Navbar from "../../layout/Navbar";
import { NavLink } from "react-router-dom";
import mission4 from "../../images/mission4.jpg";
import mission3 from "../../images/mission3.jpg";
import mission2 from "../../images/mission2.jpeg";
import mission1 from "../../images/mission1.jpg";
import sideimg from "../../images/sideimg1.png";
import Footer from "../../layout/Footer";
const WeddingPhotography = () => {
  const map1 = [
    {
      head: "Signature (Modern)",
      img: "/images/style1.jpg",
    },
    {
      head: "Light & Airys",
      img: "/images/style2.jpg",
    },
    {
      head: "Dark and Moody",
      img: "/images/style3.jpg",
    },
  ];
  const style1 = {
    backgroundImage: `url("https://d8evzn3g25q98.cloudfront.net/17-malibu-rocky-oaks-wedding-photography.jpg")`,
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
              OUR PHOTOGRAPHY STYLE
            </h3>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 sm-12 py-5 px-3">
            <h4
              style={{ fontFamily: "Lato, sans-serif" }}
              className="py-3  text-center"
            >
              “Where Words Fail, Our Imagery Speaks”
            </h4>
            <p
              style={{
                fontFamily: "Lato, sans-serif",
                fontWeight: "200",
                color: "#696666",
              }}
            >
              <NavLink>Lin and Jirsa</NavLink> is critically acclaimed for
              developing a unique style of wedding photography, deeply rooted in
              wedding photojournalism and influenced by fine-art and fashion
              photography. We pride ourselves on not just being photographers,
              but rather artists creating unique and expressive imagery.
            </p>
            <p
              style={{
                fontFamily: "Lato, sans-serif",
                fontWeight: "200",
                color: "#696666",
              }}
              className="py-3"
            >
              As leaders and educators in the industry, we constantly experiment
              with new tools and techniques and blend various photography styles
              to challenge our creativity and tell compelling stories.
              <strong> What exactly does all of this mean?</strong> Well, let’s
              get into the specifics of what makes our style unique.
            </p>
            <h4
              style={{
                fontFamily: "Arapey, serif",
                fontWeight: "200",
                color: "#3b3939",
              }}
              className="py-3  text-center"
            >
              THE 4 PILLARS OF OUR STYLE
            </h4>
            <p
              style={{
                fontFamily: "Lato, sans-serif",
                fontWeight: "200",
                color: "#696666",
              }}
              className="py-3"
            >
              The 4 pillars of the LJP style are 1) celebrating love, 2)
              storytelling, 3) creativity, and 4) capturing beauty. In our
              experience, each of these are critical for a complete wedding
              photography experience.
            </p>
            <p>
              <strong
                style={{
                  fontFamily: "Arapey, serif",
                  fontWeight: "500",
                  color: "#3b3939",
                }}
              >
                Celebrating Love (and Emotion)
              </strong>
            </p>
            <p
              style={{
                fontFamily: "Lato, sans-serif",
                fontWeight: "200",
                color: "#696666",
              }}
              className="py-4"
            >
              Celebrating love and emotion is the most important aspect of our
              job. Our goal is to create timeless photographs that allow you to
              relive the same emotions you felt in that moment, every time you
              look at them. We strive to capture not only the big moments but
              also the small, intimate ones that make your love unique. We not
              only celebrate the love between the wedding couple, but also the
              love between the couple and their families, wedding parties, and
              loved ones.
            </p>
            <FirstComp />
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-12">
                  <h4
                    style={{
                      fontFamily: "Arapey, serif",
                      fontWeight: "200",
                      color: "#3b3939",
                    }}
                    className="py-3"
                  >
                    Storytelling (and Photojournalism)
                  </h4>
                  <p
                    style={{
                      fontFamily: "Lato, sans-serif",
                      fontWeight: "200",
                      color: "#696666",
                    }}
                  >
                    Storytelling is at the heart of what we do. Wedding
                    Photojournalism takes awareness of surroundings, knowledge
                    of human tendencies, and patience. Each image captures an
                    emotion, tells a story, or portrays a mood or feeling.
                    That’s why you won’t see us taking random pictures, for
                    example, you stuffing your face with food or staring off
                    into space.
                  </p>
                  <p>
                    We’re always paying close attention to the environment,
                    listening in on conversations and anticipating that smile,
                    laugh, tear, or hug. We have our crop in mind, our lighting
                    set up perfectly, and we’re waiting for that expression.
                  </p>
                </div>
              </div>
            </div>
            <FirstComp />
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-12">
                  <h4
                    style={{
                      fontFamily: "Arapey, serif",
                      fontWeight: "200",
                      color: "#3b3939",
                    }}
                    className="py-3"
                  >
                    Creativity (and Uniqueness)
                  </h4>
                  <p
                    style={{
                      fontFamily: "Lato, sans-serif",
                      fontWeight: "200",
                      color: "#696666",
                    }}
                  >
                    Our creative style means that we seek unique perspectives,
                    angles, and approaches to a scene. Always in search of
                    reflections, silhouettes, foregrounds, perfect symmetry, and
                    juxtapositions, you’ll see our photographers sneaking behind
                    objects, shooting off mirrors, and finding different
                    perspectives. Whatever it takes to get the shot! The idea is
                    to turn ordinary into extraordinary through finding the
                    interest of the composition in a scene that the average eye
                    may not notice.
                  </p>
                </div>
              </div>
            </div>
            <FirstComp />

            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-12">
                  <h4
                    style={{
                      fontFamily: "Arapey, serif",
                      fontWeight: "200",
                      color: "#3b3939",
                    }}
                    className="py-3"
                  >
                    Capturing Beautys
                  </h4>
                  <p
                    style={{
                      fontFamily: "Lato, sans-serif",
                      fontWeight: "200",
                      color: "#696666",
                    }}
                  >
                    Capturing the beauty of your special day is also one of our
                    top priorities. We believe that every moment and detail of
                    your wedding deserves to be captured in the most stunning
                    way possible. This translates into refined posing for
                    natural and flattering results, finding attractive,
                    complementary backdrops, and taking the time to perfect the
                    shots.
                  </p>
                </div>
              </div>
            </div>
            <FirstComp />
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-12">
                  <h4
                    style={{
                      fontFamily: "Arapey, serif",
                      fontWeight: "200",
                      color: "#3b3939",
                    }}
                    className="py-3 text-center"
                  >
                    OUR EDITING STYLE
                  </h4>
                  <p
                    style={{
                      fontFamily: "Lato, sans-serif",
                      fontWeight: "200",
                      color: "#696666",
                    }}
                  >
                    We’ve developed a unique and refined style of photo editing
                    that is versatile and flexible to adjust for your unique
                    preferences and your venue choice. To read more about these
                    options, see our Photo Editing Styles.
                  </p>
                </div>
              </div>
            </div>
            <div className="container-fluid py-5">
              <div className="row">
                {map1.map((e) => (
                  <>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <h4
                        style={{
                          fontFamily: "Arapey, serif",
                          fontWeight: "500",
                          color: "black",
                          letterSpacing: "2px",
                          fontSize: "20px",
                        }}
                        className="text-center"
                      >
                        {e.head}
                      </h4>
                      <img style={{ width: "100%" }} alt="img" src={e.img} />
                    </div>
                  </>
                ))}
              </div>
            </div>
            <div className="container-fluid py-3">
              <div className="row">
                <div className="col-sm-12">
                  <h4
                    style={{
                      fontFamily: "Arapey, serif",
                      fontWeight: "200",
                      color: "#3b3939",
                    }}
                    className="text-center py-3"
                  >
                    LJP PRIORITIES & AREAS OF FOCUS
                  </h4>
                  <p
                    className="py-3"
                    style={{
                      fontFamily: "Lato, sans-serif",
                      fontWeight: "200",
                      color: "#696666",
                    }}
                  >
                    Besides the 4 pillars mentioned above, we prioritize the
                    following aspects of the wedding day.
                  </p>
                  <h4
                    className="py-2"
                    style={{
                      fontFamily: "Arapey, serif",
                      fontWeight: "200",
                      color: "#3b3939",
                    }}
                  >
                    Focus on Family
                  </h4>
                  <p
                    style={{
                      fontFamily: "Lato, sans-serif",
                      fontWeight: "200",
                      color: "#696666",
                    }}
                  >
                    We understand that weddings are more than just unions
                    between two individuals, they are unions of two families. To
                    celebrate family, we ensure that we devote proper time and
                    attention to the family members.
                  </p>
                  <p
                    className="py-3"
                    style={{
                      fontFamily: "Lato, sans-serif",
                      fontWeight: "200",
                      color: "#696666",
                    }}
                  >
                    This manifests itself with beautiful emotional moments like
                    the ones below:
                  </p>
                  <img
                    className="py-3"
                    style={{ width: "100%" }}
                    alt="img"
                    src={mission4}
                  />
                  <h4
                    className="py-2"
                    style={{
                      fontFamily: "Arapey, serif",
                      fontWeight: "200",
                      color: "#3b3939",
                      fontSize: "20px",
                    }}
                  >
                    Focus on Natural Posing
                  </h4>
                  <p
                    style={{
                      fontFamily: "Lato, sans-serif",
                      fontWeight: "200",
                      color: "#696666",
                    }}
                  >
                    Whether you’re stiff as a board or used to being in front of
                    the camera, we’ll make sure we give you as much direction as
                    you need to create natural, comfortable poses.
                  </p>
                  <img
                    className="py-3"
                    style={{ width: "100%" }}
                    alt="img"
                    src={mission3}
                  />
                  <p
                    style={{
                      fontFamily: "Lato, sans-serif",
                      fontWeight: "200",
                      color: "#696666",
                    }}
                    className="py-3"
                  >
                    We’re always paying attention to things like overly puckered
                    lips, unflattering angles, and other awkward expressions. At
                    the same time, we’re creating an environment where you’re
                    comfortable and your personalities and affection are the
                    focal points of the image. We’ll also be sure to come up
                    with poses that focus on your positive physical aspects.
                  </p>
                  <h4
                    className="py-2"
                    style={{
                      fontFamily: "Arapey, serif",
                      fontWeight: "200",
                      color: "#3b3939",
                      fontSize: "20px",
                    }}
                  >
                    Focus on Having Fun
                  </h4>
                  <img
                    className="py-3"
                    style={{ width: "100%" }}
                    alt="img"
                    src={mission2}
                  />
                  <p
                    style={{
                      fontFamily: "Lato, sans-serif",
                      fontWeight: "200",
                      color: "#696666",
                    }}
                    className="py-3"
                  >
                    We love setting up scenes where you and your family/friends
                    can be silly, fun, and playful. In some scenes, the idea
                    sometimes is to get you out of your comfort zone by getting
                    you to do something silly, ridiculous, or even
                    inappropriate. During those moments, and especially in
                    between, we’re snapping away to get those smiles and natural
                    emotions.
                  </p>
                  <h4
                    className="py-2"
                    style={{
                      fontFamily: "Arapey, serif",
                      fontWeight: "200",
                      color: "#3b3939",
                      fontSize: "20px",
                    }}
                  >
                    Focus on the Details
                  </h4>
                  <img
                    className="py-3"
                    style={{ width: "100%" }}
                    alt="img"
                    src={mission1}
                  />
                  <p
                    style={{
                      fontFamily: "Lato, sans-serif",
                      fontWeight: "200",
                      color: "#696666",
                    }}
                    className="py-3"
                  >
                    You’ve spent thousands of dollars on the details of your
                    wedding like the rings, floral arrangements, centerpieces,
                    venues, candy bars, etc. We’re not going to let it slip past
                    us!
                  </p>
                  <p
                    style={{
                      fontFamily: "Lato, sans-serif",
                      fontWeight: "200",
                      color: "#696666",
                    }}
                    className="py-3"
                  >
                    We capture the details of your wedding with the same
                    attention and with many of the same techniques as we’ve
                    described above. Your day moves quickly and while you may
                    not have the time to sit back and fully appreciate your
                    cake, we’ll be sure to have gorgeous pictures of it.
                  </p>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <NavLink className="varmala">
                      « PROPS FOR ENGAGEMENT PHOTOS
                    </NavLink>
                  </div>

                  <div className="col-md-6 col-sm-12">
                    <NavLink className="varmala">
                      VARMALA | INDIAN WEDDING TRADITION »
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 text-center">
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
              Experience our passion, professionalism, and creativity on your
              special wedding day.
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
              className="text-center my-5"
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
                Subscribe to our monthly newsletter and instantly receive access
                to our library of resources, including:
              </p>
              <span>- Cultural Wedding Guides</span>
              <br />
              <span>- Best Engagement Photo Locations</span>
              <br />
              <span>- 12 Essential Wedding Planning Tips</span>
            </div>
<<<<<<< HEAD
=======
            <SecondComp/>
            <div>
            <h4>Storytelling (and Photojournalism)</h4>
            <p>Storytelling is at the heart of what we do.  Wedding Photojournalism takes awareness of surroundings, knowledge of human tendencies, and patience. Each image captures an emotion, tells a story, or portrays a mood or feeling. That’s why you won’t see us taking random pictures, for example, you stuffing your face with food or staring off into space.</p>
            <p>We’re always paying close attention to the environment, listening in on conversations and anticipating that smile, laugh, tear, or hug. We have our crop in mind, our lighting set up perfectly, and we’re waiting for that expression.</p>
            </div>
            <FirstComp/>
            <div>
                <h4>Creativity (and Uniqueness)</h4>
                <p>Our creative style means that we seek unique perspectives, angles, and approaches to a scene.  Always in search of reflections, silhouettes, foregrounds, perfect symmetry, and juxtapositions, you’ll see our photographers sneaking behind objects, shooting off mirrors, and finding different perspectives.  Whatever it takes to get the shot!  The idea is to turn ordinary into extraordinary through finding the interest of the composition in a scene that the average eye may not notice.</p>
            </div>
            <SecondComp/>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">

>>>>>>> 995776a194f126a7b38e2e9e964706faf8eb0c15
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WeddingPhotography;
