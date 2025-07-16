import "./Manageaboutus.css";
import bigcardimage from "../../assets/bigcard.png";
import vishalgulati from "../../assets/vishalgulati.jpeg";
import munishgupta from "../../assets/munishgupta.jpg";
import sumitsaroha from "../../assets/sumitsaroha.jpg";
import sureshkumar from "../../assets/sureshkumar.jpg";

function Manageaboutus(){
    return(
        <>
        <section className="greysec">
            <h1>Management team</h1>
            <div className="onecardcontainer">
                    <div className="bigcard">
                        <img src={vishalgulati} alt="about section" />
                        <h2>Vishal Gulati</h2>
                        <p>Director PDUIIC</p>
                    </div>
            </div>
            <div className="fourcardcontainer">
                 <div className="smallcard">
                    <img src={sureshkumar} alt="about section" />
                    <h2>Suresh Kumar</h2>
                    <p>Deputy Director Management Team</p>
                 </div>
                 <div className="smallcard">
                    <img src={munishgupta} alt="about section" />
                    <h2>Munish Gupta</h2>
                    <p>Deputy Director Management Team</p>
                 </div>
                 <div className="smallcard">
                    <img src={sumitsaroha} alt="about section" />
                    <h2>Sumit Saroha</h2>
                    <p>Deputy Director Management Team</p>
                 </div>
            </div>
        </section>
        </>
    );
}

export default Manageaboutus