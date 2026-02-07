import "./Manageaboutus.css";
import bigcardimage from "../../assets/bigcard.png";
//import manprofile from "../../assets/manprofile.jpg";
import opsang from "../../assets/opdirector.jpeg";
import vimal from "../../assets/vimalk.jpeg";
import sunil from "../../assets/sunil.jpeg";
import vijay from "../../assets/Vijay.jpeg";
import rajendar from "../../assets/rajendar.jpeg";

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
            <div className="fourcardcontainer">
                 <div className="smallcard">
                    <img src={sunil} alt="about section" loading="lazy"/>
                    <h2>Dr. Sunil Kumar</h2>
                    <p>Coordinator PDUIIC</p>
                 </div>
                 <div className="smallcard">
                    <img src={vijay} alt="about section" loading="lazy"/>
                    <h2>Dr. Vijay Pal Singh</h2>
                    <p>Coordinator Idea Lab</p>
                 </div>
                 <div className="smallcard">
                    <img src={rajendar} alt="about section" loading="lazy"/>
                    <h2>Dr. Rajender Singh</h2>
                    <p>Coordinator PDUIIC</p>
                 </div>
            </div>
        </section>
        </>
    );
}

export default Manageaboutus