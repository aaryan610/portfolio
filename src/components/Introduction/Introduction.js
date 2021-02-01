import React from "react";
import "./Introduction.css";
import { Fade } from "react-reveal";
import Tilt from "react-tilt";
import { Link } from "react-scroll";
import IntroductionPerson from "../../assets/images/introduction/1.png";

const Introduction = () => {
    return(
        <React.Fragment>
            <div className="introCont">
                <div className="semicircle"></div>
                <div className="introDesc">
                    <Fade left>
                        <Tilt className="Tilt" options={{ max : 25 }}>
                            <img src={ IntroductionPerson } alt="Web Designing Intoduction Illustration" />
                        </Tilt>
                    </Fade>
                    <Fade right>
                        <div className="right">
                            <h1>
                                I am a Web Designer.
                            </h1>
                            <p>
                                Hi, I am Aaryan Khandelwal, a sophomore student at BIT Durg of Electronics and Telecommunication branch, and I am currently working as a Senior Developer at TechEffin Software Consultancy Services.
                                <br />
                                My hobbies include making Educational YouTube videos.
                            </p>
                            <Link to="interests" spy={true} smooth={true} duration={800}>
                                <button type="button">Explore My Interests&nbsp;&nbsp;<i className="fas fa-chevron-down"></i></button>
                            </Link>
                        </div>
                    </Fade>
                    <div className="flyingObjects">
                        <div className="object object1"></div>
                        <div className="object object2"></div>
                        <div className="object object3"></div>
                        <div className="object object4"></div>
                        <div className="object object5"></div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Introduction;