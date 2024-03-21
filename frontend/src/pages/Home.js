import React from "react";
import logo from "../images/Logo.jpg";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Navbar from "../layout/Navbar";
import Footertop from "../layout/Footertop";

const Home = () => {
  const images = [
    {
      original: "/images/HSlide9jpg",
      thumbnail: "/images/HSlide1jpg",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div style={{ height: "90vh", width: "100%" }} className="col-lg-12">
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/286209377?h=5115aa7873"
              width="100%"
              height="100%"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={logo}
                alt={logo}
                style={{ height: "15vh", width: "20%", textAlign: "center" }}
              />
              <div>
                <p>
                  If you're looking for a Los Angeles Wedding Photographer, then
                  you're in the right place! Since 2008, Lin and Jirsa has set
                  the standard for creative wedding photography. Our style is
                  deeply rooted in wedding photojournalism, influenced by
                  fine-art and fashion photography. The result is creative,
                  clean and crisp wedding photography that’s romantic, fun, and
                  emotional. We pride ourselves on not just being photographers,
                  but rather artists creating unique and expressive imagery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <ImageGallery
              items={images}
              showPlayButton={true}
              showFullscreenButton={true}
              slideInterval={3000}
              slideOnThumbnailOver={true}
              showIndex={true}
              onPlay={() => {
                alert("slideshow is now playing!");
              }}
            />
          </div>
        </div>
      </div>
      <Footertop />
    </>
  );
};

export default Home;
