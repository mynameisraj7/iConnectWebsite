import "./HomeFront.css";
import ShinyText from './ShinyText'
import RotatingText from './RotatingText'
import LottieFlow from "./LottieFlow";

function HomeFront() {
  return (
    <>
    
    <section className="blacksection">
      {/* <LottieFlow /> */}
      <ShinyText id="shine" text="We are" disabled={false} speed={3} className='custom-class' />
      <h1 className='maintitle'>iCONNECT SOCIETY</h1>
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
   </section>
   
   </>
  )
}

export default HomeFront