import React from "react";
import ImageGallery from "react-image-gallery";

const FirstComp = () => {
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
  );
};

export default FirstComp;
