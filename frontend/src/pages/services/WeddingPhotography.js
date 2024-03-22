import React from "react";
import Weddingphotography from "../../images/Weddingphotography.jpg";
import FirstComp from "../../slideComp/FirstComp";
const WeddingPhotography = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div
              style={{ position: "relative", height: "85vh", width: "100%" }}
            >
              <div>
                <img
                  src={Weddingphotography}
                  alt="Weddingphotography"
                  className="serimg"
                />
              </div>
              <div className="sertext">
                <h1>OUR PHOTOGRAPHY STYLE</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-12 p-5">
            <div className="htext">
            <h6>“Where Words Fail, Our Imagery Speaks”</h6>
            <p>Lin and Jirsa is critically acclaimed for developing a unique style of wedding photography, deeply rooted in wedding photojournalism and influenced by fine-art and fashion photography. We pride ourselves on not just being photographers, but rather artists creating unique and expressive imagery.</p>
            <p>As leaders and educators in the industry, we constantly experiment with new tools and techniques and blend various photography styles to challenge our creativity and tell compelling stories.<span style={{fontWeight:'bold'}}> What exactly does all of this mean?</span>Well, let’s get into the specifics of what makes our style unique</p>
            </div>
            <div>
                <h3>THE 4 PILLARS OF OUR STYLE</h3>
                <p>The 4 pillars of the LJP style are 1. celebrating love, 2. storytelling, 3. creativity, and 4. capturing beauty.  In our experience, each of these are critical for a complete wedding photography experience.</p>
                <h2>Celebrating Love (and Emotion)</h2>
                <p>Celebrating love and emotion is the most important aspect of our job. Our goal is to create timeless photographs that allow you to relive the same emotions you felt in that moment, every time you look at them.  We strive to capture not only the big moments but also the small, intimate ones that make your love unique. We not only celebrate the love between the wedding couple, but also the love between the couple and their families, wedding parties, and loved ones.</p>
            </div>
            <FirstComp/>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">

          </div>
        </div>
      </div>
    </>
  );
};

export default WeddingPhotography;
