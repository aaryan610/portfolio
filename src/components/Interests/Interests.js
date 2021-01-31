import React from "react";
import "./Interests.css";
import { Fade } from "react-reveal";
import { Element } from "react-scroll";
import Hand from "../../../src/assets/images/interests/hand-gesture.png";
import WebDesigning from "../../../src/assets/images/interests/web-designing.png";
import YouTube from "../../../src/assets/images/interests/youtube.png";

const pageTransition = (e) => {
    e.preventDefault();
};

const Interests = () => {
    return(
        <React.Fragment>
            <Element name="interests" className="interestsCont">
                <Fade left>
                    <h1 className="heading">Wanna know what I'm interested in?</h1>                    
                </Fade>
                <Fade down>
                    <img src={ Hand } alt="Hand Gesture" className="hand" />
                </Fade>
                <div className="content">
                    <div className="webDesigning">
                        <img src={ WebDesigning } alt="Web Designing 3D Illustration" />
                        <div className="right">
                            <div className="sectionHeading">Web Designing</div>
                            <p>I have an experience of over 3 years in Web Designing and am currently creating projects on React JS.</p>
                            <button type="button">View Projects</button>
                        </div>
                    </div>
                    <div className="youtube">
                        <img src={ YouTube } alt="YouTube 3D Illustration" />
                        <div className="right">
                            <div className="sectionHeading">YouTube</div>
                            <p>I am a Tech Enthusiast and have an Educational YouTube channel to help newcomers in the field of Web Designing by imparting them with necessary skills in CSS3 and JavaScript.</p>
                            <a href="https://youtube.com/CodeGrind" onClick={(e) => pageTransition(e)}><button type="button">View Channel</button></a>
                        </div>
                    </div>
                </div>
            </Element>
        </React.Fragment>
    );
};

export default Interests;