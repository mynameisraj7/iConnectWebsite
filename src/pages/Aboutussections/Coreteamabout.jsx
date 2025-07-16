import "./Coreteamabout.css";
import bigcardimage from "../../assets/bigcard.png";
import sarika from "../../assets/sarika.png";
import vipin from "../../assets/vipin.jpg";
import crictech from "../../assets/crictech.jpg";
import vansh from "../../assets/vansh.jpg";
import anil from "../../assets/anil.png";
import sneha from "../../assets/sneha.jpeg";
import naina2 from "../../assets/naina2.jpeg";
import naveen from "../../assets/nakay.png";
import payal from "../../assets/payal.jpg";
import krish from "../../assets/krish.png";
import tushar from "../../assets/tushar.JPG";
import akanshi from "../../assets/akanshi.jpg";
import aditya from "../../assets/aditya.jpg";

function Coreteamabout(){
    return(
        <>
         <section className="whitesec">
                    <h1>Core team</h1>
                    <div className="fourcardcontainer">
                         <div className="smallcard">
                            <img src={sarika} alt="about section" />
                            <h2>Sarika Kalkal</h2>
                            <p>Captain</p>
                         </div>
                         <div className="smallcard">
                            <img src={vipin} alt="about section" />
                            <h2>Vipin</h2>
                            <p>Captain</p>
                         </div>
                    </div>
                    <div className="fourcardcontainer">
                         <div className="smallcard">
                            <img src={crictech} alt="about section" />
                            <h2>Rohit Tiwari</h2>
                            <p>Documentation Head</p>
                         </div>
                         <div className="smallcard">
                            <img src={naina2} alt="about section" />
                            <h2>Naina Bansal</h2>
                            <p>Industrial Connect Head</p>
                         </div>
                         <div className="smallcard">
                            <img src={vansh} alt="about section" />
                            <h2>Vansh</h2>
                            <p>Promotion Head</p>
                         </div>
                         <div className="smallcard">
                            <img src={anil} alt="about section" />
                            <h2>Yuvansh Anjna</h2>
                            <p>HR Head</p>
                         </div>
                    </div>
                    <div className="fourcardcontainer">
                         <div className="smallcard">
                            <img src={aditya} alt="about section" />
                            <h2>Aditya Thakur</h2>
                            <p>Website Coordinator</p>
                         </div>
                         <div className="smallcard">
                            <img src={akanshi} alt="about section" />
                            <h2>Akanshi Chhillar</h2>
                            <p>Hospatility&Volunteering Coordinator</p>
                         </div>
                         <div className="smallcard">
                            <img src={tushar} alt="about section" />
                            <h2>Tushar Sharma</h2>
                            <p>Logistics & Sponsorship Coordinator</p>
                         </div>
                         <div className="smallcard">
                            <img src={payal} alt="about section" />
                            <h2>Payal Bhyan</h2>
                            <p>Data Management Coordinator</p>
                         </div>
                    </div>
                    <div className="fourcardcontainer">
                         <div className="smallcard">
                            <img src={naveen} alt="about section" />
                            <h2>Naveen</h2>
                            <p>Infographic Coordinator</p>
                         </div>
                         <div className="smallcard">
                            <img src={sneha} alt="about section" />
                            <h2>Sneha Singh</h2>
                            <p>Content Writer Coordinator</p>
                         </div>
                         <div className="smallcard">
                            <img src={krish} alt="about section" />
                            <h2>Krish</h2>
                            <p>Media Coordinator</p>
                         </div>
                         <div className="smallcard">
                            <img src={bigcardimage} alt="about section" />
                            <h2>Someone Sharma</h2>
                            <p>Some Position</p>
                         </div>
                    </div>
                </section>
        </>
    );
}

export default Coreteamabout;
           