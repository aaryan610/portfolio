import React from "react";
import "./Introduction.css";
import { Fade } from "react-reveal";
import Tilt from "react-tilt";
import { Link } from "react-scroll";
import IntroductionPerson from "../../assets/images/introduction/1.png";
// import { useSpring, animated } from 'react-spring'

const Introduction = () => {
    // const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
    // const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
    // const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
    // const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
    // const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`
    // const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

    return(
        <React.Fragment>
            <Link to="interests" spy={true} smooth={true} duration={800} className="introCont">
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
                                I am a sophomore student at BIT, Durg of Electronics and Telecommunication branch and currently working as a Senior Developer at TechEffin Software Consultancy Services.
                                <br />
                                My hobbies include making Educational YouTube videos.
                            </p>
                            <button type="button">Explore My Interests&nbsp;&nbsp;<i className="fas fa-chevron-down"></i></button>
                        </div>
                    </Fade>
                    <div className="flyingObjects">
                        <div className="object object1"></div>
                        <div className="object object2"></div>
                        <div className="object object3"></div>
                        <div className="object object4"></div>
                        <div className="object object5"></div>
                    </div>
                    {/* <div class="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                        <animated.div class="card1" style={{ transform: props.xy.interpolate(trans1) }} />
                        <animated.div class="card2" style={{ transform: props.xy.interpolate(trans2) }} />
                        <animated.div class="card3" style={{ transform: props.xy.interpolate(trans3) }} />
                        <animated.div class="card4" style={{ transform: props.xy.interpolate(trans4) }} />
                    </div> */}
                </div>
            </Link>
        </React.Fragment>
    );
};

export default Introduction;