import React from "react";
import "./ReachOut.css";
import { Element } from "react-scroll";
import Hand from "../../../src/assets/images/reachOut/hand-gesture.png";
import { useSpring, animated } from 'react-spring';

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
                <img src={ Hand } alt="Hand Wave Gesture" className="hand" />
                <div className="content">
                    <h1 className="heading">Reach Out</h1>
                    <p className="text">
                        Found me interesting so far?
                        <br />
                        Here's how you can reach me:
                    </p>
                    <div className="socialMedia">
                        <div className="row">
                            <a href="#" target="_blank">
                                <i className="fas fa-at"></i>
                                <div>via E-mail</div>
                            </a>
                            <a href="#" target="_blank">
                                <i className="fab fa-linkedin"></i>
                                <div>through Linkedin</div>
                            </a>
                            <a href="#" target="_blank">
                                <i className="fab fa-github"></i>
                                <div>on GitHub</div>
                            </a>
                            <a href="#" target="_blank">
                                <i className="fas fa-phone-alt"></i>
                                <div>over a Call</div>
                            </a>
                            <a href="#" target="_blank">
                                <i className="far fa-file-alt"></i>
                                <div>view my Résumé</div>
                            </a>
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