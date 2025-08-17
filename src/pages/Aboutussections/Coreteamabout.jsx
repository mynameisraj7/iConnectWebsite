import "./Coreteamabout.css";
// import bigcardimage from "../../assets/bigcard.png";
import rahul from "../../assets/rahul.jpeg";
import sarika from "../../assets/sarika.jpeg";
import vipin from "../../assets/vipin.jpeg";
import rohit from "../../assets/rohit.jpeg";
import vansh from "../../assets/vansh.jpeg";
import yuvansh from "../../assets/yuvansh.jpeg";
import sneha from "../../assets/sneha.jpeg";
import naina from "../../assets/naina.jpeg";
import naveen from "../../assets/naveen.jpeg";
import payal from "../../assets/payal.jpeg";
import krish from "../../assets/krish.jpeg";
import tushar from "../../assets/tushar.jpeg";
import akanshi from "../../assets/akanshi.jpeg";
import aditya from "../../assets/aditya.jpg";

function Coreteamabout(){
    return(
        <>
         <section className="whitesec">
                    <h1>Core team</h1>
                    <div className="fourcardcontainer">
                         <div className="smallcard">
                            <img src={sarika} alt="about section" loading="lazy"/>
                            <h2>Sarika Kalkal</h2>
                            <p>Captain</p>
                         </div>
                         <div className="smallcard">
                            <img src={vipin} alt="about section" loading="lazy"/>
                            <h2>Vipin</h2>
                            <p>Captain</p>
                         </div>
                    </div>
                    <div className="fourcardcontainer">
                         <div className="smallcard">
                            <img src={rohit} alt="about section" loading="lazy"/>
                            <h2>Rohit Tiwari</h2>
                            <p>Documentation Head</p>
                         </div>
                         <div className="smallcard">
                            <img src={naina} alt="about section" loading="lazy"/>
                            <h2>Naina Bansal</h2>
                            <p>Industrial Connect Head</p>
                         </div>
                         <div className="smallcard">
                            <img src={vansh} alt="about section" loading="lazy"/>
                            <h2>Vansh</h2>
                            <p>Promotion Head</p>
                         </div>
                         <div className="smallcard">
                            <img src={yuvansh} alt="about section" loading="lazy"/>
                            <h2>Yuvansh Anjna</h2>
                            <p>HR Head</p>
                         </div>
                    </div>
                    <div className="fourcardcontainer">
                         <div className="smallcard">
                            <img src={aditya} alt="about section" loading="lazy"/>
                            <h2>Aditya Thakur</h2>
                            <p>Website Coordinator</p>
                         </div>
                         <div className="smallcard">
                            <img src={akanshi} alt="about section" loading="lazy"/>
                            <h2>Akanshi Chhillar</h2>
                            <p>Hospitality & Volunteering Coordinator</p>
                         </div>
                         <div className="smallcard">
                            <img src={tushar} alt="about section" loading="lazy"/>
                            <h2>Tushar Sharma</h2>
                            <p>Logistics & Sponsorship Coordinator</p>
                         </div>
                         <div className="smallcard">
                            <img src={payal} alt="about section" loading="lazy"/>
                            <h2>Payal Bhyan</h2>
                            <p>Data Management Coordinator</p>
                         </div>
                    </div>
                    <div className="fourcardcontainer">
                         <div className="smallcard">
                            <img src={naveen} alt="about section" loading="lazy"/>
                            <h2>Naveen</h2>
                            <p>Infographic Coordinator</p>
                         </div>
                         <div className="smallcard">
                            <img src={sneha} alt="about section" loading="lazy"/>
                            <h2>Sneha Singh</h2>
                            <p>Content Writing Coordinator</p>
                         </div>
                         <div className="smallcard">
                            <img src={krish} alt="about section" loading="lazy"/>
                            <h2>Krish</h2>
                            <p>Media Coordinator</p>
                         </div>
                         <div className="smallcard">
                            <img src={rahul} alt="about section" loading="lazy"/>
                            <h2>Rahul Kumar</h2>
                            <p>Organizing and planning coordinator</p>
                         </div>
                    </div>
                </section>
        </>
    );
}

export default Coreteamabout;
           