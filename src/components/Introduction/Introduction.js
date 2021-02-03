import React, { useState, useEffect } from "react";
import "./Introduction.css";
import { Fade } from "react-reveal";
import Tilt from "react-tilt";
import { Link } from "react-scroll";
import IntroductionPerson from "../../assets/images/introduction/1.png";
import TextTransition, { presets } from "react-text-transition";
import Plants from "../../assets/images/introduction/plants.png";

const TEXTS = [
  "Web Designer.",
  "YouTuber."
];

const Introduction = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            2000
        );
    }, []);

    return(
        <React.Fragment>
            <div className="introCont">
                <div className="semicircle"></div>
                <img src={ Plants } alt="Plants and Sun 3d Icons" className="plants" />
                <div className="introDesc">
                    <Fade left>
                        <Tilt className="Tilt" options={{ max: 25 }}>
                            <img src={ IntroductionPerson } alt="Web Designing Intoduction Illustration" />
                        </Tilt>
                    </Fade>
                    <Fade right>
                        <div className="right">
                            <h1>
                                I am a  <TextTransition
                                            text={ TEXTS[index % TEXTS.length] }
                                            springConfig={ presets.wobbly }
                                            inline={true}
                                        />
                            </h1>
                            <p>
                                Hi, I am Aaryan Khandelwal, a sophomore student at BIT Durg of Electronics and Telecommunication branch, and I am currently working as a Senior Developer at TechEffin Software Consultancy Services.
                                <br /><br />
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