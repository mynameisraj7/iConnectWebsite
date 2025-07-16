import "./PduAboutus.css";
import aboutimage from "../../assets/aboutimg.png";
import visionlogo from "../../assets/visionimg.png";

function pduAboutus(){
    return(
        <>
            <section className="white-aboutus">
                 <div className="aaboutcontatiner">
                          <div className="aabout-section">
                            <h2>ABOUT PDUIIC</h2>
                            <p>
                              Team iConnect is the student organization located at the Pandit Deendayal Upadhyay Innovatin & Incubation Center(PDUIIC) at GJUS&T in Hisar. We are a passionate and proactive team dedicated to bridging the gap between students and the tech-driven world. Our mission is to foster a culture of innovation, collaboration and leadership through hands-on events, workshops, and national-level competitions.
                              Iconnect is run by a well-defined administrative team, an influential advisory panel, and a mentoring system.
                              With a strong focus on building 21st-century skills, we provide platforms for students to ideate, showcase, and scale their talents—whether it’s through entrepreneurship, problem-solving, public speaking, or tech innovation.
                            </p>
                          </div>
                
                          <div className="aaboutimage">
                            <div className="iimage-bg"></div>
                            <img src={aboutimage} alt="about section" />
                          </div>
                 </div>
                 <div className="visioncontainer">
                    <div className="visionimage">
                        <img src={visionlogo} alt="footer image" />
                    </div>
                    <div className="visioncontent">
                        <h2>Vision</h2>
                        <p>
                             Spark innovation and foster collaboration among students.Organize and showcase a vibrant array of Techno-visional events.Cultivate an ecosystem for student empowerment, and promote skill development.Diverse talents converge, and ideas flourish, actively shaping positive change.	Innovation First: We believe in creating and adopting new ideas fearlessly.
                              Student-Led, Impact-Driven: Every initiative is run by students, for students.
                              Collaboration Over Competition: We grow together by helping each other learn and succeed.
                              Inclusion & Empowerment: We give every student a chance to voice their ideas and lead.
                        </p>
                    </div>
                
                 </div>
            </section>
        </>
    );
}

export default pduAboutus;