import React from "react";
import "./Interests.css";
import { Fade } from "react-reveal";
import Tilt from "react-tilt";
import { Element } from 'react-scroll';

const interests = () => {
    return(
        <React.Fragment>
            <Element name="interests" className="introCont">
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
                <div className="blob">
                    <svg xmlns="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
                        <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
                    </svg>
                </div>
            </Element>
        </React.Fragment>
    );
};

export default interests;