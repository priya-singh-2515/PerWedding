import React from "react";
import Navbar from "../../layout/Navbar";
import SideComp from "../services/sideComp";
import Footercontact from "../../layout/footercontact";
import Footer from "../../layout/Footer";

const WeddingTimeline = () => {
  const style1 = {
    backgroundImage: `url("https://d8evzn3g25q98.cloudfront.net/wedding-photography-timeline.jpg")`,
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
            <h3
              style={{
                fontSize: "5vw",
                fontFamily: "Arapey, serif",
                color: "#fff",
              }}
            >
              WEDDING PHOTOGRAPHY TIMELINE | IDEAL TIMES FOR YOUR PHOTOGRAPHY
            </h3>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-12">
            <div className="ptag">
              <p>
                With the diversity of the cultural aspects of our weddings, it’s
                difficult to pinpoint an exact wedding photography timeline
                template. However, there are ideal time frames you should
                consider when planning your day. Some of these times may seem
                long on paper but keep in mind that (1) the day will fly by, (2)
                most weddings run slightly behind schedule, and (3) we’ll make
                these photo sessions fun, so it won’t seem like a long time.
              </p>
            </div>
            <div>
              <div className="htagg">
                <h4>RINGS, DRESS, SHOES, AND OTHER DETAILS</h4>
              </div>
              <div>
                <div className="d-flex">
                  <h5>Ideal Time Allotment </h5>
                  <p> – 30 minutes</p>
                </div>
                <div className="d-flex">
                  <h5>Ideal Time of the Day </h5>
                  <p> – minutes</p>
                </div>
                <div className="d-flex">
                  <h5>Ideal Location</h5>
                  <p> – Bridal Suite or Hotel Suite</p>
                </div>
              </div>
              <div>
                <div className="d-flex">
                  <h5>Advice</h5>
                  <p className="ptagg">
                    {" "}
                    - Having at least 30 minutes for details ensures that we
                    have plenty of time to get that perfect photo of the dress,
                    rings, shoes, bouquets, and the other details of the day.
                  </p>
                </div>
                <p className="ptag">
                  There are times when a hotel room is too crowded or simply
                  unappealing; we have to take the dress all the way down to the
                  lobby or even outside. This can take some time, but as you can
                  see from the results, it’s well worth the additional work.
                </p>
              </div>
            </div>
            <div>
              <div className="htagg">
                <h4 style={{ textAlign: "center" }}>PREPARATION</h4>
              </div>
              <div>
                <div className="d-flex">
                  <h5>Ideal Time Allotment </h5>
                  <p> – 60 minutes</p>
                </div>
                <div className="d-flex">
                  <h5>Ideal Time of the Day </h5>
                  <p> – Morning or Early Afternoon</p>
                </div>
                <div className="d-flex">
                  <h5>Ideal Location</h5>
                  <p> – Bridal Suite or Hotel Suite</p>
                </div>
              </div>
              <div>
                <div className="d-flex">
                  <h5>Advice</h5>
                  <p className="ptagg">
                    {" "}
                    - Having an hour of preparation is ideal for our style.
                    During this time, we are getting close ups of the makeup and
                    hair being applied as well as the candid moments and the
                    bridesmaids and groomsmen get ready for the day. Keep in
                    mind that these are some of the most emotional and fun times
                    of the day, so you don’t want to cut it short.
                  </p>
                </div>
                <p className="ptag">
                  The lead shooter will be with the bride while the second
                  shooter will be with the groom. While it doesn’t take guys an
                  hour to get dressed, there are still tons of great moments
                  during this time between the groom and his family and friends.
                </p>
              </div>
            </div>
            <div>
              <div className="htagg">
                <h4 style={{ textAlign: "center" }}>INDIVIDUAL PORTRAITS</h4>
              </div>
              <div>
                <div className="d-flex">
                  <h5>Ideal Time Allotment </h5>
                  <p> – 30 minutes</p>
                </div>
                <div className="d-flex">
                  <h5>Ideal Time of the Day </h5>
                  <p> – Morning or Early Afternoon</p>
                </div>
                <div className="d-flex">
                  <h5>Ideal Location</h5>
                  <p>
                    {" "}
                    – Bridal Suite, Hotel Suite, Venue Lobby, or Venue Garden
                  </p>
                </div>
              </div>
              <div>
                <div className="d-flex">
                  <h5>Advice</h5>
                  <p className="ptagg">
                    {" "}
                    - Right after prep is the best time for individual portraits
                    of the bride and groom (separately). Besides makeup and hair
                    being completely fresh, the day hasn’t gotten hectic yet so
                    we can take our time and get those perfect portraits.
                  </p>
                </div>
                <p className="ptag">
                  Also, keep in mind that the window lighting in most hotel
                  rooms creates a unique look that can’t be duplicated in any
                  environment throughout the rest of the day.
                </p>
              </div>
            </div>
            <div>
              <div className="htagg">
                <h4 style={{ textAlign: "center" }}>
                  FIRST LOOK AND DAY- TIME COUPLES SESSION
                </h4>
              </div>
              <div>
                <div className="d-flex">
                  <h5>Ideal Time Allotment </h5>
                  <p> – 45-60 minutes</p>
                </div>
                <div className="d-flex">
                  <h5>Ideal Time of the Day </h5>
                  <p> – Morning or Early Afternoon</p>
                </div>
                <div className="d-flex">
                  <h5>Ideal Location</h5>
                  <p>
                    {" "}
                    – Venue Garden, Empty Venue Hallway (shaded areas with
                    natural light)
                  </p>
                </div>
              </div>
              <div>
                <div className="d-flex">
                  <h5>Advice</h5>
                  <p className="ptagg">
                    {" "}
                    - The first look should be around 45-60 minutes. During this
                    time, the bride and groom enjoy seeing each other for the
                    first time on the wedding day. While the actual first look
                    might only be 5-10 minutes, the rest of the time is spent on
                    a few basic portraits of the bride and groom.
                  </p>
                </div>
                <p className="ptag">
                  The first look should be around 45-60 minutes. During this
                  time, the bride and groom enjoy seeing each other for the
                  first time on the wedding day. While the actual first look
                  might only be 5-10 minutes, the rest of the time is spent on a
                  few basic portraits of the bride and groom.
                </p>
              </div>
            </div>
            <div>
              <div className="htagg">
                <h4 style={{ textAlign: "center" }}>WEDDING PARTY PHOTOS</h4>
              </div>
              <div>
                <div className="d-flex">
                  <h5>Ideal Time Allotment </h5>
                  <p> – 45-60 minutes</p>
                </div>
                <div className="d-flex">
                  <h5>Ideal Time of the Day </h5>
                  <p> – Morning or Afternoon</p>
                </div>
                <div className="d-flex">
                  <h5>Ideal Location</h5>
                  <p>
                    {" "}
                    – Venue Lobby, Venue Garden, Beach, Park, Off-site Location
                  </p>
                </div>
              </div>
              <div>
                <div className="d-flex">
                  <h5>Advice</h5>
                  <p className="ptagg">
                    {" "}
                    - Wedding Party Photos should be around 45 minutes to 1
                    hour. During this time, we get a variety of shots in a
                    variety of poses. We start off with the basic, classic
                    photos focused on great expressions and lighting.
                  </p>
                </div>
                <p className="ptag">
                  Then we move into a set of fun and creative shots. Finally, we
                  know how much your wedding party means to you, so we are sure
                  to get pictures with you and each one of your bridesmaids or
                  groomsmen individually.
                </p>
              </div>
            </div>
            <div>
              <div className="htagg">
                <h4 style={{ textAlign: "center" }}>IMMEDIATE FAMILY</h4>
              </div>
              <div>
                <div className="d-flex">
                  <h5>Ideal Time Allotment </h5>
                  <p>– 30-45 minutes</p>
                </div>
                <div className="d-flex">
                  <h5>Ideal Time of the Day </h5>
                  <p> – Morning or Afternoon</p>
                </div>
                <div className="d-flex">
                  <h5>Ideal Location</h5>
                  <p>
                    {" "}
                    – Venue Lobby, Venue Garden, Beach, Park, Off-site Location
                  </p>
                </div>
              </div>
              <div>
                <div className="d-flex">
                  <h5>Advice</h5>
                  <p className="ptagg">
                    {" "}
                    - Immediate Family Photos should take another 45 minutes.
                    It’s important to have additional images with your parents,
                    grandparents, and siblings beyond the basic formal
                    (mentioned in the section below).
                  </p>
                </div>
                <p className="ptag">
                  Plan on 3 minutes per group on average. For example, if you
                  have 10 groups, schedule in a 30 minute time slot.
                </p>
                <p className="ptag">
                  We all know how much weddings mean to the immediate family,
                  and we want to make sure we’re capturing enough pictures with
                  them.
                </p>
              </div>
            </div>
            <div>
              <div className="htagg">
                <h4 style={{ textAlign: "center" }}>
                  CEREMONY DETAIL AND VENUE
                </h4>
              </div>
              <div>
                <div className="d-flex">
                  <h5>Ideal Time Allotment </h5>
                  <p> – 30 minutes</p>
                </div>
                <div className="d-flex">
                  <h5>Ideal Time of the Day </h5>
                  <p> – Morning or Afternoon</p>
                </div>
                <div className="d-flex">
                  <h5>Ideal Location</h5>
                  <p> – Ceremony Site</p>
                </div>
              </div>
              <div>
                <div className="d-flex">
                  <h5>Advice</h5>
                  <p className="ptagg">
                    {" "}
                    - Please allow 30 minutes for the second shooter to take
                    pictures of the ceremony site, completely set up with no
                    guests or vendors in the area.
                  </p>
                </div>
                <p className="ptag">
                  Before you have the guests seated, it’s important that we are
                  there to capture the complete set up of your ceremony site so
                  we can capture the scene at its best.
                </p>
              </div>
            </div>
            <div>
              <div className="htagg">
                <h4 style={{ textAlign: "center" }}>
                  FORMALS (EXTENDED FAMILY, IMMEDIATE FAMILY, AND FRIENDS)
                </h4>
              </div>
              <div>
                <div className="d-flex">
                  <h5>Ideal Time Allotment </h5>
                  <p> – 45-60 minutes</p>
                </div>
                <div className="d-flex">
                  <h>Ideal Time of the Day </h>
                  <p> - Ceremony Site</p>
                </div>
              </div>
              <div>
                <div className="d-flex">
                  <h5>Advice</h5>
                  <p className="ptagg">
                    {" "}
                    - Formals should take around 45 minutes to 1 hour depending
                    on the size of your family and the number of guests.
                  </p>
                </div>
                <p className="ptag">
                  Plan on 3 minutes per group on average. For example, if you
                  have 10 groups, schedule in a 30 minute time slot.
                </p>
                <p className="ptag">
                  Some couples have decided that they want a picture with all
                  guests while others have decided that they only want pictures
                  with select VIPs to save time. We recommend something in
                  between.
                </p>
                <p className="ptag">
                  We also recommend being very organized, with a list of groups
                  and helpers from each side of the family to help round people
                  up.
                </p>
              </div>
            </div>
            <div>
              <div className="htagg">
                <h4 style={{ textAlign: "center" }}>COUPLES SESSION</h4>
              </div>
              <div>
                <div className="d-flex">
                  <h5>Ideal Time Allotment </h5>
                  <p> – 1 hour</p>
                </div>
                <div className="d-flex">
                  <h5>Ideal Time of the Day </h5>
                  <p> – Late Afternoon (Sunset)</p>
                </div>
                <div className="d-flex">
                  <h5>Ideal Location</h5>
                  <p> – Venue Garden, Beach, Hotel Lobby, Park</p>
                </div>
              </div>
              <div>
                <div className="d-flex">
                  <h5>Advice</h5>
                  <p className="ptagg">
                    {" "}
                    - Couple session should be around 1 hour and should take
                    place ideally 30 to 45 minutes before sunset. The is the
                    best time in terms of lighting.
                  </p>
                </div>
                <p className="ptag">
                  It also allows us to capture the awesome scenic shots with
                  colorful skies. If your wedding is in downtown or in an area
                  with tall buildings, it’s not as important for us to have this
                  specific time frame (although it still helps).
                </p>
                <p className="ptag">
                  However, if you booked your venue because of the spectacular
                  view of the ocean or the gorgeous vines in the winery, it’s
                  essential to follow this advice in your timeline.
                </p>
              </div>
            </div>
            <div>
              <div className="htagg">
                <h4 style={{ textAlign: "center" }}>
                  RECEPTION DETAIL AND VENUE
                </h4>
              </div>
              <div>
                <div className="d-flex">
                  <h5>Ideal Time Allotment </h5>
                  <p> – 30 minutes</p>
                </div>
                <div className="d-flex">
                  <h5>Ideal Time of the Day </h5>
                  <p> – Early Evening</p>
                </div>
                <div className="d-flex">
                  <h5>Ideal Location</h5>
                  <p> – Reception Site</p>
                </div>
              </div>
              <div>
                <div className="d-flex">
                  <h5>Advice</h5>
                  <p className="ptagg">
                    {" "}
                    - Please allow 30 minutes for the second shooter to take
                    pictures of the reception room, completely set up with no
                    guests or vendors in the area.
                  </p>
                </div>
                <p className="ptag">
                  Similar to the ceremony details, this is the only opportunity
                  we have to capture the beauty of the reception room prior to
                  guest arrival.
                </p>
              </div>
            </div>
            <div>
              <div className="htagg">
                <h4 style={{ textAlign: "center" }}>RECEPTION FIRST LOOK</h4>
              </div>
              <div>
                <div className="d-flex">
                  <h5>Ideal Time Allotment </h5>
                  <p> – 10-15 minutes</p>
                </div>
                <div className="d-flex">
                  <h5>Ideal Time of the Day </h5>
                  <p>
                    {" "}
                    – At the end of Cocktail Hour before doors open for guests
                  </p>
                </div>
                <div className="d-flex">
                  <h5>Ideal Location</h5>
                  <p> – Reception Site</p>
                </div>
              </div>
              <div>
                <div className="d-flex">
                  <h5>Advice</h5>
                  <p className="ptagg">
                    {" "}
                    - This is when the reception space is revealed to the couple
                    for the first time. It’s a great opportunity to capture a
                    genuine reaction, as well as a moment alone with the dance
                    floor to practice your first dance, which also makes a great
                    photo!
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="htagg">
                <h4 style={{ textAlign: "center" }}>
                  COUPLES SESSION – RECEPTION SNEAK OUT
                </h4>
              </div>
              <div>
                <div className="d-flex">
                  <h5>Ideal Time Allotment </h5>
                  <p> – 20-30 minutes</p>
                </div>
                <div className="d-flex">
                  <h5>Ideal Time of the Day </h5>
                  <p> – Dusk to Night Time</p>
                </div>
                <div className="d-flex">
                  <h5>Ideal Location</h5>
                  <p>
                    {" "}
                    – Areas with interesting lights, fountains, city scapes and
                    mirrors
                  </p>
                </div>
              </div>
              <div>
                <div className="d-flex">
                  <h5>Advice</h5>
                  <p className="ptagg">
                    {" "}
                    - During the reception, please plan on sneaking out for a
                    couple of night shots. We only need 20-30 minutes, as we
                    understand the importance of being a good host. However,
                    this time is important if you appreciate the night
                    photography that we deliver. The ideal time for this is
                    right after you grab a bite to eat or during the open floor
                    dancing after you’ve danced a few songs and would like a
                    break. Another suggestion would be to get these shots at the
                    very end of the night once all the guests have departed.
                    Check out our Wedding Reception Timeline post for more tips
                    on how to layout a great wedding reception.
                  </p>
                </div>
                <h5>Additional Wedding Day Details</h5>
                <div className="d-flex">
                  <h5>Table Shots </h5>
                  <p className="ptagg">
                    {" "}
                    – Table shots are when you go around visiting tables. There
                    are two options for photography during this time. (1) You
                    can take formal pictures with each of these tables or (2) we
                    can simply focus on photojournalism, capturing the smiles
                    and hugs as you mingle with each table. If you’re planning
                    on doing formal table shots, please keep in mind that these
                    will take about 3-5 minutes per table. For example 20 tables
                    would require 60-100 minutes of time.
                  </p>
                </div>
                <div className="d-flex">
                  <h5>Cultural Weddings </h5>
                  <p className="ptagg">
                    {" "}
                    – For cultural weddings like Indian weddings, there are
                    elements like the Baraat that require time to photograph.
                    More more information on this and Indian weddings visit our
                    Indian Wedding Timeline page.
                  </p>
                </div>
              </div>
            </div>
            <hr className="ptag" />
            <hr className="ptag" />
            <p>WHAT ARE WEDDING PHOTOJOURNALISTS</p>
            <p>WEDDING PHOTOGRAPHY STYLES AND FORMATS »</p>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 text-center ">
            <SideComp />
          </div>
        </div>
      </div>
      <Footercontact />
      <Footer />
    </>
  );
};

export default WeddingTimeline;
