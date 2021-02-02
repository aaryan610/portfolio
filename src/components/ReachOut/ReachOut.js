import React from "react";
import "./ReachOut.css";
import { Element } from "react-scroll";
import Hand from "../../../src/assets/images/reachOut/handshake.png";
import { useSpring, animated } from 'react-spring';
import { Fade } from "react-reveal";

const pageTransition = (e, link) => {
    e.preventDefault();

    document.querySelector(".pageTransitions").classList.add("show");

    setTimeout(() => {
        window.open(link);
        document.querySelector(".pageTransitions").classList.remove("show");
    }, 1200);
};

const ReachOut = () => {
    const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
    const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
    const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
    const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
    const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

    return(
        <React.Fragment>
            <Element name="reachout" className="reachOutCont">
                <Fade left>
                    <img src={ Hand } alt="Hand Wave Gesture" className="hand" />
                </Fade>
                <div className="content">
                    <Fade right>
                        <h1 className="heading">Reach Out</h1>
                        <p className="text">
                            Found me interesting so far?
                            <br />
                            Here's how you can reach me:
                        </p>
                    </Fade>
                    <div className="socialMedia">
                        <div className="row">
                            <Fade up>
                                <a onClick={(e) => pageTransition(e, "mailto:aaryankhandu123@gmail.com")} target="_blank">
                                    <i className="fas fa-at"></i>
                                    <div>via E-mail</div>
                                </a>
                            </Fade>
                            <Fade down>
                                <a onClick={(e) => pageTransition(e, "https://www.linkedin.com/in/aaryan-khandelwal-89ba501a6/")} target="_blank">
                                    <i className="fab fa-linkedin"></i>
                                    <div>through Linkedin</div>
                                </a>
                            </Fade>
                            <Fade up>
                                <a onClick={(e) => pageTransition(e, "https://github.com/aaryan610/")} target="_blank">
                                    <i className="fab fa-github"></i>
                                    <div>on GitHub</div>
                                </a>
                            </Fade>
                            <Fade down>
                                <a onClick={(e) => pageTransition(e, "tel:+918103445828")} target="_blank">
                                    <i className="fas fa-phone-alt"></i>
                                    <div>over a Call</div>
                                </a>
                            </Fade>
                            <Fade up>
                                <a onClick={(e) => pageTransition(e, "#")} target="_blank">
                                    <i className="far fa-file-alt"></i>
                                    <div>view my Résumé</div>
                                </a>
                            </Fade>
                        </div>
                    </div>
                </div>
                <div class="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                    <animated.div class="card1" style={{ transform: props.xy.interpolate(trans1) }} />
                    <animated.div class="card2" style={{ transform: props.xy.interpolate(trans2) }} />
                </div>
            </Element>
        </React.Fragment>
    );
};

export default ReachOut;