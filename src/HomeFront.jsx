  import "./HomeFront.css";
  import ShinyText from './ShinyText'
  import RotatingText from './RotatingText'
  import LottieFlow from "./LottieFlow";
  import greenarrow from "./assets/greenarrow.png";
  import purplearrow from "./assets/purplearrow.png";
  import redarrow from "./assets/redarrow.png";
  import yellowarrow from "./assets/yellowarrow.png";

  function HomeFront() {
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
        <LottieFlow />
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
        <button className="rotating-button"><span>Explore</span></button>
        <div className="socials">
          <i className='bx bxl-instagram'></i>
          <i className='bx bxl-twitter'></i>
          <i className='bx bxl-whatsapp' ></i>
          <i className='bx bxl-linkedin' ></i>
          <i className='bx bxl-facebook-square' ></i>
        </div>
        <div className="scroll">Scroll Down<i className='bx bx-right-arrow-alt'></i></div>
    </section>
    
    </>
    )
  }

  export default HomeFront