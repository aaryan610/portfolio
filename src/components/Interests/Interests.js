import React from "react";
import "./Interests.css";
import { Fade } from "react-reveal";
import { Link, Element } from "react-scroll";
import Hand from "../../../src/assets/images/interests/hand-gesture.png";
import WebDesigning from "../../../src/assets/images/interests/web-designing.png";
import YouTube from "../../../src/assets/images/interests/youtube.png";

const pageTransition = (e, link) => {
    e.preventDefault();

    document.querySelector(".pageTransitions").classList.add("show");

    setTimeout(() => {
        window.open(link);
        document.querySelector(".pageTransitions").classList.remove("show");
    }, 1200);
};

const Interests = () => {
    return(
        <React.Fragment>
            <Element name="interests" className="interestsCont">
                <Fade left>
                    <h1 className="heading">Wanna know what I'm interested in?</h1>                    
                </Fade>
                <Fade right>
                    <img src={ Hand } alt="Hand Gesture" className="hand" />
                </Fade>
                <div className="content">
                    <Fade up>
                        <div className="webDesigning">
                            <img src={ WebDesigning } alt="Web Designing 3D Illustration" />
                            <div className="right">
                                <div className="sectionHeading">Web Designing</div>
                                <p>I have over three years of experience in Web Designing and am currently exploring React JS.</p>
                                <Link to="projects" spy={true} smooth={true} duration={800}>
                                    <button type="button">View Projects</button>
                                </Link>
                            </div>
                        </div>
                    </Fade>
                    <Fade down>
                        <div className="youtube">
                            <img src={ YouTube } alt="YouTube 3D Illustration" />
                            <div className="right">
                                <div className="sectionHeading">YouTube</div>
                                <p>
                                    I am a Tech-Enthusiast and have an Educational YouTube channel to help newcomers in Web Designing by imparting them with the necessary CSS3 and JavaScript skills.
                                </p>
                                <a href="https://youtube.com/CodeGrind" onClick={(e) => pageTransition(e, "http://youtube.com/CodeGrind")}><button type="button">View Channel</button></a>
                            </div>
                        </div>
                    </Fade>
                </div>
                <div className="pageTransitions">
                    <div className="layer layer1"></div>
                    <div className="layer layer2"></div>
                    <div className="layer layer3"></div>
                </div>
            </Element>
        </React.Fragment>
    );
};

export default Interests;