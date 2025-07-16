import "./Homeinit.css";
import esummit from "./assets/esummit.png";

function Homeinit(){
    return(
        <>
            <section id="initiative" className="blacksec">
                <div className="initheading">OUR INITIATIVES</div>
                <div className="cardcontainer">
                    <div className="leftcont">
                        <div className="initcard">
                            <article className="initimgcont">
                                <img src={esummit} alt="about section" style={{width:'100%',height:'100%'}}/>
                            </article>
                            <h2>Konark TechFest</h2>
                            <p>Our flagship tech fest, celebrating creativity, coding, and cutting-edge technology with workshops, hackathons, and competitions.</p>
                            <div>Learn more</div>
                        </div>
                        <div className="initcard">
                            <article className="initimgcont">
                                <img src={esummit} alt="about section" style={{width:'100%',height:'100%'}}/>
                            </article>
                            <h2>E-Summit</h2>
                            <p>A grand entrepreneurship summit featuring keynote speakers, startup founders, panel discussions, and idea showcases.</p>
                            <div>Learn more</div>
                        </div>
                    </div>
                    <div className="middlecont">
                            <div className="initcard">
                                <article className="initimgcont">
                                    <img src={esummit} alt="about section" style={{width:'100%',height:'100%'}}/>
                                </article>
                                <h2>Pitch Point</h2>
                                <p>A high-energy pitch competition where young innovators and aspiring entrepreneurs present their startup ideas to real investors and mentors.</p>
                                <div>Learn more</div>
                            </div>
                    </div>
                    <div className="rightcont">
                        <div className="initcard">
                             <article className="initimgcont">
                                <img src={esummit} alt="about section" style={{width:'100%',height:'100%'}}/>
                            </article>
                            <h2>IConnect Learners</h2>
                            <p>A continuous learning initiative focused on student upskilling via training sessions, technical talks, and hands-on workshops.</p>
                            <div>Learn more</div>
                        </div>
                        <div className="initcard">
                             <article className="initimgcont">
                                <img src={esummit} alt="about section" style={{width:'100%',height:'100%'}}/>
                            </article>
                            <h2>Samrt India Hackathon(SIH)</h2>
                            <p>A national-level hackathon where our team not only competes but also organizes internal hackathons and mentorship drives.</p>
                            <div>Learn more</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Homeinit