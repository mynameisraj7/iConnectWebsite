import "./PduAboutus.css";
import aboutimage from "../../assets/aboutimg.png";
import visionlogo from "../../assets/visionimg.png";

function pduAboutus(){
    return(
        <>
            <section className="white-aboutus">
                 <div className="aaboutcontatiner">
                          <div className="aabout-section">
                            <h2>ABOUT US</h2>
                            <p>
                              "E-Cell IIT Bombay helps the hustling startups and young professionals via dynamic
                              workshops, thought-provoking speaker sessions, high-stakes business plan competitions,
                              and numerous other game-changing initiatives throughout the year to create a crucible for
                              innovation. We stand as pillars of support for budding entrepreneurs, providing them with
                              personalized guidance from experienced mentors, crucial funding opportunities, and a
                              robust network that can change the course of their journey forever!"
                            </p>
                          </div>
                
                          <div className="aaboutimage">
                            <div className="iimage-bg"></div>
                            <img src={aboutimage} alt="about section" />
                          </div>
                 </div>
                 <div className="visioncontainer">
                    <div className="visionimage">
                        <img src={visionlogo} alt="footer image" />
                    </div>
                    <div className="visioncontent">
                        <h2>Vision</h2>
                        <p>
                              "E-Cell IIT Bombay helps the hustling startups and young professionals via dynamic
                              workshops, thought-provoking speaker sessions, high-stakes business plan competitions,
                              and numerous other game-changing initiatives throughout the year to create a crucible for
                              innovation. We stand as pillars of support for budding entrepreneurs, providing them with
                              personalized guidance from experienced mentors, crucial funding opportunities, and a
                              robust network that can change the course of their journey forever!"
                        </p>
                    </div>
                
                 </div>
            </section>
        </>
    );
}

export default pduAboutus;