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
            <p>Many photographers will not post produce any images, or will only post produce “select” images from your wedding. This means that you may have pictures that are too dark, have strange skin tones or other common photography flaws.</p>
            <h5>Lin & Jirsa Cinematography</h5>
            <p>With our photography, we consider ourselves storytellers; and that’s the same approach we have for wedding videography. Our cinema team undergoes the same extensive training as the photography team and uses the same high-quality equipment to produce an amazing cinematic product.</p>
            <img src="https://i.vimeocdn.com/video/689214392-2bf2799595c9a6df67ed2bff529e17e4af9e667fecb8a1f284af2a09782d0524-d?mw=1000&mh=417&q=70" alt=""/>
            <p>We move away from the idea that videography is just a chronological compilation of wedding day events and toward the idea that videography is the art of telling a love story. From the song choice to the artistic selection of the scene order, everything comes together with modern wedding videography to tell stories of love, families, and celebrations. Experience more of our wedding videography, here.</p>
            <h5>Teams of Three</h5>
            <p>While the industry standard is to have two photographers on your wedding day, we believe in a three angle, three photographer approach. With so many special moments occurring throughout your wedding day, we want to make sure nothing is missed! Could you imagine watching your favorite movie in only one single camera angle?</p>
            {/* <img src="https://d8evzn3g25q98.cloudfront.net/Teams-of-Three-Lin-and-Jirsa-ritz-carlton-laguna-niguel-wedding-photography-2000x977.jpg" alt=""/> */}
            <p>The need for multiple angles is crucial on such an important day. The unplanned, impromptu moments at a wedding often make the best memories. Having multiple photographers covering different aspects, all anticipating expressions during a first look, and image-worthy moments increases the number of moments captured throughout your once-in-a-lifetime day. Click here to learn more about why we shoot in teams of three!</p>
            <h5>Print Options</h5>
            <p>Memories can get lost in today’s digital world, existing on social media, hard drives, and “in the cloud” but rarely seen by our loved ones.</p>
            <img src="https://d8evzn3g25q98.cloudfront.net/Lin-and-Jirsa-Wedding-Photography-Print-Options.jpg"/>
            <p>The fact of the matter is, a few months after your wedding, the social media buzz around your wedding will inevitably die down. Your family and friends will forget about the great food they ate, the music they heard, and the conversations they had. But every visitor in your home will see the beautiful prints on your walls and in your albums.</p>
            <p>These prints allow your wedding to be re-lived, for a brief moment, by each and every person who comes to your home. Stories from your wedding will be told to family members who couldn’t attend and to generations of family members who were not yet born.</p>
            <p>We offer a variety of canvas options such as metal and acrylic prints. Take a better look at our album options here.</p>
            <h5>Line & Roots Photography</h5>
            <p>Over a decade ago, we fell in love with photography and started Lin & Jirsa.</p>
            <img src="https://d8evzn3g25q98.cloudfront.net/Line-and-Roots-Maternity-Photography.jpg" alt=""/>
            <p>We were drawn to weddings because of the emotion, the excitement, the opportunity to capture love, and everything else that came with these incredible events. But with all of the beauty and excitement, the most fulfilling part of our careers was always the connection to the couples and their families. They entrusted us to document the most important day in their lives, and our artistry became a part of their family history.</p>
            <p>This is why we started Line and Roots – to continue the relationships that we made and to extend our role of documenting family history to other major life events. So whether you’re celebrating your first pregnancy or your sixth grandchild, we’ll be there to photograph each precious moment with expressive imagery that tells your story.</p>
            <h3>OUR COMPANY CORE VALUES</h3>
            <h5>ADOPT EXTREME OWNERSHIP</h5>
            <p>We understand that leadership is a two-way street going up and down the chain of command. Each individual of the team takes ownership of their own actions as well as the actions of the team. We practice the principle of looking out the window with success, and into the mirror with each failure.</p>
            <hr/>
            <h5>EMBRACE CREATIVITY</h5>
            <p>We believe creativity is heightened through thinking differently and embracing diversity. We continually expand our creativity, not only in photography and cinema but also in the everyday approach to solving problems.</p>
            <h5>BE CLIENT OBSESSED</h5>
            <p>We succeed when our clients are happy. Our clients are our true North, those who make it possible to make a living doing what we love.</p>
            <hr/>
            <h5>SUPPORT AND EMPOWER</h5>
            <p>We believe that family is a verb, defined by actions, not by words. We invest in each other through sacrifice, support, compassion, and love. We create a safe, non-judgemental, family environment focused on the betterment of each other. “Coming together is a beginning. Keeping together is progress. Working together is success.” – Henry Ford</p>
            <hr/>
            <h5>SHARPEN THE AXE</h5>
            <p>We are a passionate group of creatives that believe success occurs at the intersection of talent, hard work, and humility. We embrace new challenges, humbly seek out learning opportunities, and continue to grow in your personal and professional lives. “The best things in life are on the other side of fear.” – Will Smith</p>
            <hr/>
            <h5>BE INDUSTRY LEADERS</h5>
            <p>We set the standard everyone aspires to become through example. Beyond consistently delivering high-quality experiences and products, we continue to innovate in each of our areas, never settling for “good enough.”.</p>
            <hr/>

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
