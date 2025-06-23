import "./Homefooter.css";
import footerlogo from "./assets/iconlogo.png";

function Homefooter() {
  return (
    <>
      <section className="footerblack">
        <div className="footercontent">
          <div className="footimage">
            <img src={footerlogo} alt="footer image" />
          </div>

          <div className="footsociety">
            <h2>iCONNECT SOCIETY</h2>
            <a href="#">Information</a>
            <a href="#">Insight</a>
            <a href="#">Ideation</a>
            <a href="#">Investigation</a>
            <a href="#">Implementation</a>
          </div>

          <div className="footfollow">
            <h2>Follow Us</h2>
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
            <a href="#">X (Twitter)</a>
            <a href="#">Facebook</a>
            <a href="#">YouTube</a>
          </div>

          <div className="footget">
            <h2>GET NOTIFIED</h2>
            <p>Be the first to know about the activities of E-Cell.</p>
            <div className="footgetcom">
              <input type="text" placeholder="Type email" />
              <button><i className='bx bx-envelope'></i></button>
            </div>
          </div>
        </div>

        <div className="footerend">
          <p>With love from iConnect Society, GJUS&T, Hisar</p>
        </div>
      </section>
    </>
  );
}

export default Homefooter;
