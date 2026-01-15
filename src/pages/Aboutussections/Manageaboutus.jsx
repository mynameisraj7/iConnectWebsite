import "./Manageaboutus.css";
// import bigcardimage from "../../assets/bigcard.png";
//import manprofile from "../../assets/manprofile.jpg";
import opsang from "../../assets/opsangwansir.jpg";
import vimal from "../../assets/vimal.jpeg";
// import sureshkumar from "../../assets/sureshkumar.jpg";

function Manageaboutus(){
    return(
        <>
        <section className="greysec">
            <h1>Management team</h1>
            {/* <div className="onecardcontainer">
                    <div className="bigcard">
                        <img src={vishalgulati} alt="about section" loading="lazy"/>
                        <h2>Vishal Gulati</h2>
                        <p>Director PDUIIC</p>
                    </div>
            </div> */}
            <div className="fourcardcontainer">
                 <div className="smallcard">
                    <img src={opsang} alt="about section" loading="lazy"/>
                    <h2>Prof. O.P Sangwan</h2>
                    <p>Director PDUIIC</p>
                 </div>
                 <div className="smallcard">
                    <img src={vimal} alt="about section" loading="lazy"/>
                    <h2>Mr. Vimal K Jha</h2>
                    <p>Deputy Director PDUIIC</p>
                 </div>
            </div>
            {/* <div className="fourcardcontainer">
                 <div className="smallcard">
                    <img src={bigcardimage} alt="about section" loading="lazy"/>
                    <h2>Someone Sharma</h2>
                    <p>Coordinator</p>
                 </div>
                 <div className="smallcard">
                    <img src={bigcardimage} alt="about section" loading="lazy"/>
                    <h2>Someone Sharma</h2>
                    <p>Coordinator</p>
                 </div>
                 <div className="smallcard">
                    <img src={bigcardimage} alt="about section" loading="lazy"/>
                    <h2>Someone Sharma</h2>
                    <p>Coordinator</p>
                 </div>
            </div> */}
        </section>
        </>
    );
}

export default Manageaboutus