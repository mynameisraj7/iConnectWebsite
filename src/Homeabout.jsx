import "./Homeabout.css";
import aboutimage from "./assets/aboutimg.png";
import aboutlogo from "./assets/iconlogo.png";

function Homeabout() {
  return (
    <>
      <section id="aboutus" className="whiteabout">
        <div className="exclamation">
          <svg xmlns="http://www.w3.org/2000/svg" width="6" height="90" viewBox="0 0 6 90" fill="none">
            <path d="M3 3L3 87" stroke="black" strokeWidth="6" strokeLinecap="round" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
            <circle cx="5" cy="5" r="5" fill="black" />
          </svg>
        </div>

        <div className="aboutcontatiner">
          <div className="about-section">
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

          <div className="aboutimage">
            <div className="image-bg"></div>
            <img src={aboutimage} alt="about section" />
          </div>

          <div className="about-button">
            <button><span>Know more about us</span></button>
          </div>
        </div>

        <div className="banner">
          <div className="left-section">
            <img src={aboutlogo} alt="logo" />
            <div className="text">
              <h1>iConnect</h1>
              <p>
                <span class="team-text">Team</span>
                <span class="pduiic-text"> PDUIIC</span>
              </p>
            </div>
          </div>
          <div className="stats">
            <div className="stat-box">
              <h2>30+</h2>
              <p>EVENT ORGANIZED</p>
            </div>
            <div className="stat-box">
              <h2>6000+</h2>
              <p>FOOTFALLS ACROSS<br />EVENTS</p>
            </div>
            <div className="stat-box">
              <h2>500000+</h2>
              <p>IMPRESSIONS ACROSS<br />THE PLATFORMS</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Homeabout;
