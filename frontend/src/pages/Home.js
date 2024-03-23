import React, { useState } from "react";
import logo from "../images/Logo.jpg";
import "./home.css";
import Navbar from "../layout/Navbar";
import FirstComp from "../slideComp/FirstComp";
import Footer from "../layout/Footer";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [comp1, setComp1] = useState(true);
  const [comp2, setComp2] = useState(false);

  const image = [
    { img: "./images/feat_logo1.png" },
    { img: "./images/feat_logo2.png" },
    { img: "./images/feat_logo4.png" },
    { img: "./images/feat_logo7.png" },
    { img: "./images/canon.png" },
    { img: "./images/la.png" },
  ];

  const image2 = [
    {
      img: "./images/map1.jpg",
      head: "Photo Editing Styles",
      para: "Every client has a unique style and vision for their wedding. The diversity of wedding venues and decor styles seamlessly matches various photo editing techniques. To accommodate these individual tastes, we offer three primary editing styles: Signature, Light and Airy, and Dark and Moody.",
    },
    {
      img: "./images/map2.jpg",
      head: "Wedding Videography",
      para: "We craft captivating, artistic narratives that celebrate meaningful moments. Rather than merely compiling events, our wedding videography cherishes your relationships—with one another, with your families, and with your dearest friends. It weaves a timeless story for future generations of your family to treasure and relive.",
    },
    {
      img: "./images/map3.jpg",
      head: "Favorite Wedding Vendors",
      para: "We've curated a list of professionals from Los Angeles and surrounding areas to help bring your wedding dreams to life. Selecting the ideal vendors is crucial for realizing your vision and ensuring your special day goes off without a hitch. Explore our top recommendations and don't hesitate to contact us with any inquiries.",
    },
  ];
  const style = {
    backgroundImage: `url("https://i.vimeocdn.com/video/721056442-5d3959de48e444c17d20f83fd86b9d35871458d5c5ba97a722d4c74e99d47143-d?mw=2000&mh=838&q=70")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const style2 = {
    backgroundImage: `url("https://www.linandjirsa.com/wp-content/uploads/01-wedding-preparation-los-angeles-photo-lin-jirsa.jpg")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    color: "white",
    height: "100vh",
  };

  const handleLeftArrowClick = () => {
    setComp1(false);
    setComp2(true);
  };

  const handleRightArrowClick = () => {
    setComp1(true);
    setComp2(false);
  };

  const Comp1 = () => {
    return (
      <>
        <div className="container-fluid">
          <div
            className="row pb-5"
            style={{
              backgroundImage: `url("https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRFDsq7DyUiSSZu71XlR034_08BMqQWE4UiujMZD0fGaQYbCwY9")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="col-sm-8 comp py-5 text-light">
              <h3 className="py-5">Featured Testimonials</h3>
              <p className="py-3">
                “You absolutely killed it, nailed what we had envisioned
                perfectly. The entire day we got to spend with you and your
                team, we had so much fun, you made us both feel so comfortable.
                The final product of our engagement photos came out
                mind-blowing, my fiance was ecstatic, it was so nice to see her
                so happy with everything. (I was equally happy, but it made it
                even that much better to see her so happy).”
              </p>
              <h3>—Franco, Groom</h3>
              <FontAwesomeIcon
                onClick={handleLeftArrowClick}
                icon={faArrowLeft}
              />{" "}
              <br />
              01 / 02
              <br />
              <FontAwesomeIcon
                onClick={handleLeftArrowClick}
                icon={faArrowRight}
              />
            </div>
            <div className="col-sm-4"></div>
          </div>
        </div>
      </>
    );
  };

  const Comp2 = () => {
    return (
      <>
        <div className="container-fluid">
          <div
            className="row pb-5"
            style={{
              backgroundImage: `url("https://d8evzn3g25q98.cloudfront.net/40-los-angeles-wedding-photo-palos-verdes-cliff-4-1.jpg")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="col-sm-8 comp py-5 text-light">
              <h3 className="py-5">Featured Testimonials</h3>
              <p className="py-3">
                “I don’t know howwww you got the photos done so fast but THANK
                YOU I AM OBSESSED! perfection! So grateful”
              </p>
              <h3>—Tarjani, Bride</h3>
              <FontAwesomeIcon
                onClick={handleRightArrowClick}
                icon={faArrowLeft}
              />
              <br />
              02 / 02
              <br />
              <FontAwesomeIcon
                onClick={handleRightArrowClick}
                icon={faArrowRight}
              />
            </div>
            <div className="col-sm-4"></div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Navbar linkColor="white" />
      <div style={style} className="container-fluid tophome py-5">
        <div className="row">
          <div className="col-lg-12">
            <h1>LOS ANGELES WEDDING PHOTOGRAPHER</h1>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          {/* <div className="col-lg-12"> */}
          <div
            className="col-lg-12 py-4"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img
              src={logo}
              alt="logo"
              style={{ height: "10vh", width: "20%" }}
            />
          </div>

          {/* </div> */}
        </div>
        <div className="row">
          <div className="col-lg-12 logotext">
            <p>
              If you're looking for a Los Angeles Wedding Photographer, then
              you're in the right place! Since 2008, Lin and Jirsa has set the
              standard for creative wedding photography. Our style is deeply
              rooted in wedding photojournalism, influenced by fine-art and
              fashion photography. The result is creative, clean and crisp
              wedding photography that’s romantic, fun, and emotional. We pride
              ourselves on not just being photographers, but rather artists
              creating unique and expressive imagery.
            </p>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundColor: "#1a1a1a63" }}
        className="container py-5 text-center"
      >
        <p className="text-light">FEATURED IN:</p>
        <div className="row  ">
          <div className="col-sm-12">
            <div className="featmap">
              {image.map((e, index) => (
                <img key={index} alt="ahs" src={e.img} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 brandmash2 text-center">
            <h6 style={{ letterSpacing: "2px" }}>
              TOP 100 WEDDING PHOTOGRAPHERS IN THE US
            </h6>
            <p>Brandsmash</p>
          </div>
          <div className="col-lg-4 brandmash2 text-center">
            <h6 style={{ letterSpacing: "2px" }}>LEGENDS OF LIGHT AWARD</h6>
            <p>Profoto USA</p>
          </div>
          <div className="col-lg-4 brandmash text-center">
            <h6 style={{ letterSpacing: "2px" }}>
              THE BEST WEDDING PHOTOGRAPHER IN LOS ANGELESs
            </h6>
            <p>MyFoxLA</p>
          </div>
        </div>
      </div>
      <FirstComp />
      <div style={style2} className="container-fluid p-3">
        <div className="row">
          <div className="col-lg-6 col-md-12 py-5">
            <h3 className="pt-3">Our Style and Approach</h3>
            <hr style={{ border: "1px solid white" }} />
            <p className="py-2">CLEAN. CRISP. DIFFERENT</p>
            <p className="py-3">
              The four pillars of our style are 1) Celebrating Love, 2)
              Storytelling, 3) Creativity, and 4) Capturing Beauty. Each is
              equally important for a complete wedding photography experience.
              Learn more about our style below or browse some of our favorite
              photos below from our team of Los Angeles wedding photographers.
            </p>
            <button className="my-4 mybtn1">LEARN MORE ABOUT OUR STYLE</button>
          </div>
          <div className="col-lg-6 col-md-12"></div>
        </div>
      </div>
      <div className="container-fluid py-5 text-center">
        <h4 className="pt-5">Our Resources</h4>
        <p className="py-5">
          To help you plan for your wedding, see some of our most popular
          resources below.
        </p>
        <div className="row">
          <div className="col-sm-12 d-flex justify-content-around flex-wrap">
            {image2.map((e, index) => (
              <NavLink style={{ textDecoration: "none", cursor: "pointer" }}>
                <div className="map2" key={index}>
                  <img
                    style={{ width: "100%", height: "50%" }}
                    src={e.img}
                    alt="map"
                  />
                  <h4 className="py-4">{e.head}</h4>
                  <p>{e.para}</p>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 text-center py-5">
            <button className="mybtn1">READ MORE PLANNING RESOURCES</button>
          </div>
        </div>
      </div>

      {comp1 && <Comp1 />}
      {comp2 && <Comp2 />}

      <div className="container text-center">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="py-5">Los Angeles Wedding Photography</h3>
            <p className="pb-5">
              We are Lin & Jirsa, your dedicated Los Angeles wedding
              photographer team. Rooted in the vibrant heart of Los Angeles,
              we've embraced its diverse culture and breathtaking scenery.
              However, to us, 'home' transcends a mere location. It's the
              indescribable bond we share, a sanctuary of comfort, creativity,
              and connection. Being part of the journey as couples embark on
              their most significant adventure, witnessing the intimate moments
              that define their love, is a privilege we cherish deeply. Our
              mission is to craft visual narratives that are as genuine and
              distinct as the love stories they depict.
            </p>
            <p className="pb-5">
              Inspired by Southern California's dynamic landscapes, from the
              serene beaches to the rugged mountains and the urban sprawl of
              Downtown LA, we find endless inspiration in our surroundings.
              Living in Los Angeles offers us a unique opportunity to blend the
              natural with the urban, creating stunning backdrops for your love
              story. Photography is more than a service for us—it's preserving
              the fleeting moments that form the foundation of your memories. We
              are honored by the thought of capturing your wedding day, crafting
              the visual legacy of your love.If you're drawn to a passionate
              team of Los Angeles wedding photographers ready to capture your
              love against the backdrop of California or anywhere your hearts
              take you, look no further. We invite you to connect with us, dive
              into our portfolio, and explore our blog for a glimpse into how we
              document love stories. In a city teeming with talent, we are
              grateful you see something special in our work. Let's create
              something unforgettable together.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
