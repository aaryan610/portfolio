import React from "react";
import "./Projects.css";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Element } from "react-scroll";
import Tedx from "../../../src/assets/images/projects/tedxbitd.png";
import TechEffin from "../../../src/assets/images/projects/techeffin.png";
import TechnoHub from "../../../src/assets/images/projects/technohub.png";
import LlityTech from "../../../src/assets/images/projects/llity.png";
import { Fade } from "react-reveal";
import Hand from "../../../src/assets/images/projects/hand-gesture.png";
// import { useTrail, animated } from 'react-spring'


// const fast = { tension: 1200, friction: 40 }
// const slow = { mass: 10, tension: 200, friction: 50 }
// const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

const pageTransition = (e, link) => {
    e.preventDefault();

    document.querySelector(".pageTransitions").classList.add("show");

    setTimeout(() => {
        window.open(link);
        document.querySelector(".pageTransitions").classList.remove("show");
    }, 1200);
};

const options = {
    0: {
        items: 1,
    },
    992: {
        items: 3,
    }
};

const Projects = () => {
    
    // const [trail, set] = useTrail(3, () => ({ xy: [0, 0], config: i => (i === 0 ? fast : slow) }))
  
    return(
        <React.Fragment>
            <Element name="projects" className="projectsCont">
                <img src={ Hand } alt="Thumbs Up Hand Gesture" className="hand" />
                <div className="content">
                    <Fade right>
                        <h1 className="heading">Few of my Projects</h1>
                    </Fade>
                    <OwlCarousel
                        className="owl-theme"
                        margin={ 20 }
                        dots={ false }
                        nav={ true }
                        navClass={ ["owl-prev", "owl-next"] }
                        responsive={ options }
                    >
                        <a onClick={(e) => pageTransition(e, "http://tedxbitd.in")} className="project">
                            <h3 className="title">TEDxBITD</h3>
                            <img src={ Tedx } alt="TEDxBITD Project" />
                            <div className="stack">
                                <strong>Technology Stack</strong>: React JS, Firebase, SCSS
                            </div>
                        </a>
                        <a onClick={(e) => pageTransition(e, "http://techeffin.com")} className="project">
                            <h3 className="title">TechEffin</h3>
                            <img src={ TechEffin } alt="TechEffin Software Consultancy Services" />
                            <div className="stack">
                                <strong>Technology Stack</strong>: HTML, SCSS, JavaScript
                            </div>
                        </a>
                        <a onClick={(e) => pageTransition(e, "https://github.com/aaryan610/shortener")} className="project">
                            <h3 className="title">URL Shortener</h3>
                            <img src={ LlityTech } alt="Llity Tech URL Shortener" />
                            <div className="stack">
                                <strong>Technology Stack</strong>: HTML, CSS, php, mySQL
                            </div>
                        </a>
                        <a onClick={(e) => pageTransition(e, "http://technohubbit.in")} className="project">
                            <h3 className="title">TechnoHub</h3>
                            <img src={ TechnoHub } alt="TechnoHub BITD" />
                            <div className="stack">
                                <strong>Technology Stack</strong>: React JS, Firebase, SCSS
                            </div>
                        </a>
                    </OwlCarousel>
                </div>
                {/* <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
                        <feColorMatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7" />
                    </filter>
                </svg>
                <div className="hooks-main" onMouseMove={e => set({ xy: [e.clientX, e.clientY] })}>
                    {trail.map((props, index) => (
                        <animated.div key={index} style={{ transform: props.xy.interpolate(trans) }} />
                    ))}
                </div> */}
                <div className="blob">
                    <svg xmlns="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
                        <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
                    </svg>
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

export default Projects;