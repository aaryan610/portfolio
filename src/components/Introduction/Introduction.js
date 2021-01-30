import React from "react";
import "./Introduction.css";
import { Fade } from "react-reveal";
import Tilt from "react-tilt";
import { Link } from 'react-scroll';

const introduction = () => {
    return(
        <React.Fragment>
            <Link to="interests" spy={true} smooth={true} duration={800} className="introCont">
                <div className="semicircle"></div>
                <Fade left>
                    <div className="introDesc">
                        <div>
                            <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
                                <img src="./assets/images/introduction/1.png" alt="" />
                            </Tilt>
                        </div>
                        <div className="right">
                            <h1>
                                I am a Web Designer.
                            </h1>
                            <p>
                                I am a sophomore student at BIT, Durg of Electronics and Telecommunication branch and currently working as a Senior Developer at TechEffin Software Consultancy Services.
                                <br />
                                My hobbies include making Educational YouTube videos.
                            </p>
                            <button type="button">Explore My Interests&nbsp;&nbsp;<i className="fas fa-chevron-down"></i></button>
                        </div>
                    </div>
                </Fade>
            </Link>
        </React.Fragment>
    );
};

export default introduction;