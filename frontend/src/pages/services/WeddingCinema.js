import React from "react";
import Navbar from "../../layout/Navbar";
import "./service.css";
import { NavLink } from "react-router-dom";
import cinemaimg1 from "../../images/cinemaimg1.jpg";
import Footer from "../../layout/Footer";
import Footercontact from "../../layout/footercontact";

const WeddingCinema = () => {
  return (
    <>
      <Navbar linkColor="white" />
      <div
        style={{
          height: "90vh",
          // padding: "150px 0px",
          // margin: "0px",
          backgroundImage: `url("https://www.linandjirsa.com/wp-content/uploads/ansel-wall-art-photography-768x512.jpg")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          // overflowX: "hidden",
        }}
        className="container-fluid d-flex justify-content-center align-items-center"
      >
        <div className="row ">
          <div className="col-sm-12 text-center text-light ">
            <h3 className="">LIN & JIRSA CINEMA</h3>
            <p>When Words Fail, Our Imagery Speaks</p>
          </div>
        </div>
      </div>
      <div className="container cinema py-5">
        <div className="row">
          <div className="col-sm-12">
            <p className="font-loto headp text-center">
              LOS ANGELES WEDDING VIDEOGRAPHY
            </p>
            <p className="font-loto">
              Welcome to Lin and Jirsa Cinema, a Los Angeles-based wedding
              videography company that specializes in creating dynamic and
              cinematic films that capture the essence of your special day.
            </p>
            <p className="font-loto">
              In our wedding videography, we move away from the idea that
              videography is just a chronological compilation of wedding day
              events and toward the idea that videography is the art of telling
              a love story. From the song choice to the artistic selection of
              the scene order, everything comes together with modern wedding
              videography to tell stories of love, families, and celebrations.
            </p>
            <p className="font-loto headp text-center">OUR PORTFOLIO</p>
            <p className="font-loto">
              See our portfolio <NavLink className="pagelinks">here.</NavLink>
            </p>
            <img style={{ width: "100%" }} src={cinemaimg1} alt="img" />
            <button className="cinemabtn">VIEW OUR PORTFOLIO</button>
            <p className="font-loto headp text-center">WHAT MAKES US UNIQUE</p>
            <p className="cinemapassion">PASSION AND DETAIL</p>
            <p className="font-loto">
              Our passion for storytelling drives our filmmaking process. From
              scouting locations and setting up shots to editing and
              post-production, every detail is carefully crafted to create a
              cinematic experience that will transport you back to the moment
              you said “I do.”
            </p>
            <p className="cinemapassion">TELLING UNIQUE WEDDING STORIES</p>
            <p className="font-loto">
              At Lin and Jirsa Cinema, we believe that every wedding is unique
              and deserves to be treated as such. That’s why we work closely
              with each couple to understand their vision, preferences, and
              style, and we use that knowledge to create a personalized film
              that reflects their personalities and tells their story in a way
              that is both authentic and captivating.
            </p>
            <p className="font-loto">
              Whether you’re looking for a classic, romantic, or adventurous
              wedding film, we have the skills and creativity to deliver a
              product that exceeds your expectations.
            </p>
            <p className="cinemapassion">AN EXPERIENCE WITH YOU IN MIND</p>
            <p className="font-loto">
              Our team is dedicated to providing exceptional service and
              ensuring that every aspect of the filming process is stress-free
              and enjoyable for our clients. We believe that communication and
              collaboration are key to a successful project, and we work
              tirelessly to ensure that every detail is accounted for and every
              question is answered.
            </p>
            <p className="font-loto">
              Thank you for considering Lin and Jirsa Cinema for your wedding
              videography needs. We would be honored to be a part of your
              special day and to create a film that you’ll treasure for years to
              come.
            </p>
            <p className="font-loto headp text-center">
              OUR WEDDING VIDEOGRAPHY SERVICES
            </p>
            <p className="font-loto">
              We offer the following edits for you to choose from. You may
              select multiple of the following for your wedding package.
            </p>
            <p className="cinemapassion">THE WEDDING HIGHLIGHT EDITS</p>
            <p className="font-loto">
              A wedding highlight is a beautiful and artistic way to tell the
              story of your wedding day in a 3-5 minute video. Our team of
              expert videographers will capture the most precious moments of
              your special day, and then artfully edit them into a condensed and
              visually stunning video that showcases the highlights of your
              wedding. The video is carefully crafted to showcase the emotions,
              joy, and love that you and your partner experienced on your
              wedding day. It’s the perfect keepsake to share with your friends
              and family, and to cherish for years to come. Our wedding
              highlight videos are personalized to your unique style and
              preferences, and are designed to capture the essence of your love
              story.
            </p>
            <p className="cinemapassion">DOCUMENTARY EDITS</p>
            <p className="font-loto">
              The Documentary Edit is a chronological film of your wedding day.
              These documentary edits tell the full story of the wedding day,
              from morning preparation, the wedding ceremony, cocktail hour, the
              reception program, and anything else that happens during the
              wedding day.
            </p>
            <p className="font-loto">
              The length of each edit will vary depending on each wedding. For
              example, if your wedding ceremony is 30 minutes in length, you can
              expect your wedding ceremony edit to be roughly 30 minutes or
              less. If your reception program is 1 hour long, your reception
              edit will be roughly 1 hour.
            </p>
            <p className="cinemapassion">SAME DAY EDITS</p>
            <p className="font-loto">
              A same day edit is a unique and exciting way to relive the
              highlights of your wedding day during your reception. Our team of
              skilled videographers will capture the most memorable moments
              leading up to the wedding reception, and then edit them into a
              short film that will be shown to you and your guests at the
              reception itself. This dynamic edit captures the essence of your
              day and creates an unforgettable experience for you and your
              guests. It’s a perfect way to share the joy and excitement of your
              wedding day with your loved ones as it’s happening.
            </p>
            <button className="cinemabtn">REQUEST A QUOTE HERE</button>
          </div>
        </div>
      </div>
      <Footercontact />
      <Footer />
      {/* <ReactPlayer
                url="https://vimeo.com/286209377"
                controls
                width="1200px"
                height="360px"
              /> */}
    </>
  );
};

export default WeddingCinema;
