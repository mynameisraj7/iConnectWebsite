import "./PduAboutus.css";
import aboutimage from "../../assets/aboutimg.png";
import visionlogo from "../../assets/visionimg.png";

function pduAboutus(){
    return(
        <>
            <section className="white-aboutus">
                 <div className="aaboutcontatiner">
                          <div className="aabout-section">
                            <h2>ABOUT IConnect</h2>
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
                        <h2>Our Mission</h2>
                        <p>To cultivate an environment of creativity, inclusivity, and teamwork by connecting students from diverse disciplines.
                           To provide mentorship, resources, and guidance for the development of innovative ideas and entrepreneurial ventures.
                           To enhance students’ technical, managerial, and interpersonal skills through organized events, workshops, and collaborative projects.
                           To contribute to the academic and professional excellence of its members while aligning with the broader objectives of PDUIIC and GJUS&T.
                           To build a network of innovators and leaders committed to societal betterment and sustainable innovation.
                        </p>
                    </div>
                
                 </div>
            </section>
        </>
    );
}

export default pduAboutus;