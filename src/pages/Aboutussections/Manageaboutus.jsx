import "./Manageaboutus.css";
import bigcardimage from "../../assets/bigcard.png";

function Manageaboutus(){
    return(
        <>
        <section className="greysec">
            <h1>Management team</h1>
            <div className="onecardcontainer">
                    <div className="bigcard">
                        <img src={bigcardimage} alt="about section" />
                        <h2>Someone Sharma</h2>
                        <p>Some Position</p>
                    </div>
            </div>
            <div className="fourcardcontainer">
                 <div className="smallcard">
                    <img src={bigcardimage} alt="about section" />
                    <h2>Someone Sharma</h2>
                    <p>Some Position</p>
                 </div>
                 <div className="smallcard">
                    <img src={bigcardimage} alt="about section" />
                    <h2>Someone Sharma</h2>
                    <p>Some Position</p>
                 </div>
                 <div className="smallcard">
                    <img src={bigcardimage} alt="about section" />
                    <h2>Someone Sharma</h2>
                    <p>Some Position</p>
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

export default Manageaboutus