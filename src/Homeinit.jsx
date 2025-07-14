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
                            <p>Pizza ipsum dolor meat lovers buffalo. Mouth fresh beef lot pineapple bell. Pepperoni Philly onions pan peppers rib thin pork burnt olives. Tomatoes tomatoes sautéed rib Hawaiian. Sauce red dolor green melted. Buffalo bacon.</p>
                            <div>Learn more</div>
                        </div>
                        <div className="initcard">
                            <article className="initimgcont">
                                <img src={esummit} alt="about section" style={{width:'100%',height:'100%'}}/>
                            </article>
                            <h2>Konark TechFest</h2>
                            <p>Pizza ipsum dolor meat lovers buffalo. Mouth fresh beef lot pineapple bell. Pepperoni Philly onions pan peppers rib thin pork burnt olives. Tomatoes tomatoes sautéed rib Hawaiian. Sauce red dolor green melted. Buffalo bacon.</p>
                            <div>Learn more</div>
                        </div>
                    </div>
                    <div className="middlecont">
                            <div className="initcard">
                                <article className="initimgcont">
                                    <img src={esummit} alt="about section" style={{width:'100%',height:'100%'}}/>
                                </article>
                                <h2>Konark TechFest</h2>
                                <p>Pizza ipsum dolor meat lovers buffalo. Mouth fresh beef lot pineapple bell. Pepperoni Philly onions pan peppers rib thin pork burnt olives. Tomatoes tomatoes sautéed rib Hawaiian. Sauce red dolor green melted. Buffalo bacon.</p>
                                <div>Learn more</div>
                            </div>
                    </div>
                    <div className="rightcont">
                        <div className="initcard">
                             <article className="initimgcont">
                                <img src={esummit} alt="about section" style={{width:'100%',height:'100%'}}/>
                            </article>
                            <h2>Konark TechFest</h2>
                            <p>Pizza ipsum dolor meat lovers buffalo. Mouth fresh beef lot pineapple bell. Pepperoni Philly onions pan peppers rib thin pork burnt olives. Tomatoes tomatoes sautéed rib Hawaiian. Sauce red dolor green melted. Buffalo bacon.</p>
                            <div>Learn more</div>
                        </div>
                        <div className="initcard">
                             <article className="initimgcont">
                                <img src={esummit} alt="about section" style={{width:'100%',height:'100%'}}/>
                            </article>
                            <h2>Konark TechFest</h2>
                            <p>Pizza ipsum dolor meat lovers buffalo. Mouth fresh beef lot pineapple bell. Pepperoni Philly onions pan peppers rib thin pork burnt olives. Tomatoes tomatoes sautéed rib Hawaiian. Sauce red dolor green melted. Buffalo bacon.</p>
                            <div>Learn more</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Homeinit