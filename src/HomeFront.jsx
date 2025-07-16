  import "./HomeFront.css";
  import ShinyText from './ShinyText'
  import RotatingText from './RotatingText'
  import LottieFlow from "./LottieFlow";
  import greenarrow from "./assets/greenarrow.png";
  import purplearrow from "./assets/purplearrow.png";
  import redarrow from "./assets/redarrow.png";
  import yellowarrow from "./assets/yellowarrow.png";
  import { useLocation, useNavigate } from 'react-router-dom';


  function HomeFront() {
    const location = useLocation();
const navigate = useNavigate();

const handleExploreClick = (e) => {
  e.preventDefault();
  if (location.pathname === "/") {
    const el = document.getElementById("aboutus");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  } else {
    navigate("/#aboutus");
  }
};

    return (
      <>
      
      <section className="blacksection">
          <div className="ggreenarrow">
                            <img src={greenarrow} alt="about section" />
          </div>
          <div className="ppurplearrow">
                            <img src={purplearrow} alt="about section" />
                        </div>
                        <div className="rredarrow">
                            <img src={redarrow} alt="about section" />
                        </div>
                        <div className="yyellowarrow">
                            <img src={yellowarrow} alt="about section" />
                        </div>
        {/* <LottieFlow /> */}
        <ShinyText id="shine" text="We are" disabled={false} speed={3} className='custom-class' />
        <h1 className='maintitle'>
          <span>i</span>
          CONNECT SOCIETY
        </h1>
        <div className='rotwords'>
            <div>
              FUELING
            </div>
            <RotatingText texts={['IMPLEMENTATION', 'INFORMATION', 'INSIGHT', 'IDEATION','INVESTIGATION']} colors={['#FF0055', '#0099FF', '#00CC88', '#FF9900','#8428F1']} rotationInterval={2000} mainClassName="rotating-text-wrapper" splitLevelClassName="rotating-text-split" />
        </div>
        <button className="rotating-button" onClick={handleExploreClick}>
            <span>Explore</span>
        </button>

        <div className="socials">
          <a href="https://www.instagram.com/iconnectgjust/"><i className='bx bxl-instagram'></i></a>
          <a href="https://x.com/iconnectgjust?t=GZGkd_h65aoTtg3M5MnmCg&s=08"><i className='bx bxl-twitter'></i></a>
          <a href="https://www.whatsapp.com/channel/0029VaELUPEGU3BNfgEAmU0h"><i className='bx bxl-whatsapp' ></i></a>
          <a href="https://www.linkedin.com/company/iconnect-gjust/"><i className='bx bxl-linkedin' ></i></a>
          <a href="https://www.youtube.com/@iConnectGJUST"><i class='bx bxl-youtube' ></i></a>
        </div>
        <div className="scroll">Scroll Down<i className='bx bx-right-arrow-alt'></i></div>
    </section>
    
    </>
    )
  }

  export default HomeFront