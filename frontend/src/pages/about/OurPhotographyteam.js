import React from "react";
import Navbar from "../../layout/Navbar";
import Aboutsidecomp from './Aboutsidecomp';
import Aboutimg from "../../images/aboutimg.png"
import Footer from "../../layout/Footer";
import Footercontact from "../../layout/footercontact";


const OurPhotograpgyteam = () => {
  const style1 = {
    backgroundImage: `url("https://www.linandjirsa.com/wp-content/uploads/PYE_9665-Edit.jpg")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "90vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <>
      <Navbar linkColor="white" />
      <div className="container-fluid" style={style1}>
        <div
          className="row"
          style={{
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="col-sm-12">
            <h3
              style={{
                fontSize: "5vw",
                fontFamily: "Arapey, serif",
                color: "#fff",
              }}
            >
              ABOUT LIN AND JIRSA PHOTOGRAPHY
            </h3>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-12">
            <div>
              <h4>STUDIO TOUR</h4>
              <p>Welcome to our studio! See our studio tour and introduction below!</p>
            </div>
            <div>
            <iframe
        src="https://player.vimeo.com/video/828655292"
        width="700"
        height="400"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
        title="Mission Video"
      ></iframe>
      <p>Creative. Clean. Different. We are a group of creatives in Orange County with a passion for storytelling. Founded in 2008, our studio has been recognized as the best wedding photographers in Southern California by various publications, websites, and groups. As leaders and educators in the industry, we constantly experiment with new tools, techniques, and combine various photography styles to challenge our creativity and tell compelling stories.</p>
      <p>We pride ourselves on not just being photographers, but rather artists creating unique and expressive imagery.</p>
            </div>
            <div>
              <h3>LIN & JIRSA’S WEDDING PHOTOGRAPHY STYLE</h3>
              <p>We have created a unique style of wedding photography that is deeply rooted in wedding photojournalism while influenced by fine-art and fashion photography. We accomplish this unique style of photography by creative lighting, unique perspectives, angles, compositions and artistic post-production refining to bring out our clients personalities and beauty while telling their wedding story. Our studio’s style combines elements of each style, adjusted for factors like the location, lighting, and client preferences.</p>
              <h5>Light & Airy Style</h5>   
              <p>Our Light & Airy Style can be described as soft and whimsical with natural light, filmic textures and tones. This style is perfect for scenes in nature and rustic wedding venues and a style we have mastered over the years.</p>      
              <p>We are proud to say that we’ve created the industry standard  DVD on natural light photography through our educational site SLR Lounge.</p> 
            </div>
            <div>
              <h5>Dramatic Style</h5>
              <p>Our Dramatic Style incorporates an advanced camera and flash techniques used to create compelling and creative effects. Always in search of reflections, silhouettes, foregrounds, perfect symmetry, and juxtapositions, you’ll see our photographers sneaking behind objects, shooting off mirrors, and finding different perspectives.  Whatever it takes to get the shot!  The idea is to turn ordinary into extraordinary through finding the interest of the composition in a scene that the average eye may not notice.</p>
              <p>Advanced Off-Camera Flash: Our passion for understanding lighting and camera equipment has helped us develop a style of night photography that exposes for stunning backgrounds, creates a dramatic effect, and maintains a natural feel to the image.</p>
              <p>For these shots, we again use advanced camera and lighting techniques to create interesting effects. For example, we capture the motion in traffic lights, play around with mixed lighting, create starbursts in lights, and much more. You can see some examples below!</p>
            </div>
            <div>
              <h5>Photojournalistic  Style</h5>
              <p>Each image captures an emotion or tells a story. Our team defines photojournalism as placing ourselves in the right place at the right time, anticipating expressions of emotion and being ready to document events with an eye for storytelling.</p>
            </div>
            <div>
              <h5>Editorial Style</h5>
              <p>Our Editorial Style incorporates poses and post-production often found in Fashion Photography. These are generally described as “vogue,” stylish, and fashion forward. The backgrounds usually are more moody with deep shadows and dramatic lighting.</p>
              <p>To read more about Lin & Jirsa’s Wedding Photography Style, click here!</p>
            </div>
            <div>
              <p>Becoming a Lin & Jirsa Wedding Photographer</p>
              <p>Our primary goal is to maintain a high level of consistency, creativity and client service in our photography. Each Lin & Jirsa photographer is carefully selected for their combination of talent, creativity, personality, and drive.  We seek creatives who believe in our same core values. In fact, only .05% of applicants are hired to shoot with our studio!</p>
            </div>
            <div style={{display:'flex'}}>
              <div>
                <img src={Aboutimg} alt=""/>
              </div>
              <div>
                <p>Even with years and years of experience, each photographer must start off as a Third Photographer/Lighting Assistant with our studio and make their way up to Second Photographer, and then Associate Photographer.</p>
                <p>Altogether this is a total of 700+ hours from Third Photographer to Associate Photographer. Once promoted to Associate Photographer, his or her journey to a Master Photographer begins.</p>
                <p>This process ensures consistency in style, quality, and reliability. Moreover, it ensures that each shooter has the same approach on the wedding day and minimizes potential issues that might arise from unfamiliarity or miscommunication.</p>
              </div>
            </div>
            <div>
              <h5>Our Client Servicing Team</h5>
              <p>Our studio has a Client Servicing Team dedicated to working directly with all of our amazing clients to assist with preparation for engagement sessions, pre-wedding events, and weddings. It is typical for many photographers to be the main point of contact making it difficult to get ahold of them, as they are often out of the studio and on shoots.</p>
              <p>They assist with scheduling, reviewing timelines, and gathering pre-event items such as a Mood Board. The Client Servicing Team is committed to not only making the planning process as smooth as possible but to ensure an end product that is personalized to each and every couple.</p>
              <h5>Our Post Production Process</h5>
              <p>All post-production is done by our in-studio team. Each post-producer has gone through extensive training in order to consistently deliver beautiful images.</p>
              <p>Every image delivered is post produced with our signature style of post-production. This involves color correction, exposure adjustment, clarity adjustments, tone-mapping, and other corrections. The result is high definition, vibrant, crisp, and clean. Skin tones are accurate and natural, the colors of the scene “pop,” giving the image a beautiful, timeless aesthetic.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 ">
            <Aboutsidecomp/>
          </div>
        </div>
      </div>
      <Footercontact/>
      <Footer/>
    </>
  );
};

export default OurPhotograpgyteam;
