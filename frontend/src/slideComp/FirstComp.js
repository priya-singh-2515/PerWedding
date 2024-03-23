import React from "react";
import ImageGallery from "react-image-gallery";

const FirstComp = () => {
  const images = [
    {
      original: "/images/HSlide1.jpg",
      thumbnail: "/images/HSlide1.jpg",
    },
    {
      original: "/images/HSlide2.jpg",
      thumbnail: "/images/HSlide2.jpg",
    },
    {
      original: "/images/HSlide3.jpeg",
      thumbnail: "/images/HSlide3.jpeg",
    },
    {
      original: "/images/HSlide4.jpg",
      thumbnail: "/images/HSlide4.jpg",
    },
    {
      original: "/images/HSlide5.jpg",
      thumbnail: "/images/HSlide5.jpg",
    },
    {
      original: "/images/HSlide6.jpg",
      thumbnail: "/images/HSlide6.jpg",
    },
    {
      original: "/images/HSlide7.jpg",
      thumbnail: "/images/HSlide7.jpg",
    },
    {
      original: "/images/HSlide8.jpg",
      thumbnail: "/images/HSlide8.jpg",
    },
    {
      original: "/images/HSlide9.jpg",
      thumbnail: "/images/HSlide9.jpg",
    },
    {
      original: "/images/HSlide10.jpg",
      thumbnail: "/images/HSlide10.jpg",
    },
  ];
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <ImageGallery
            className="first"
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
  );
};

export default FirstComp;
