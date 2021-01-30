import React from "react";
import "./Navbar.css";
import { Fade } from "react-reveal";

const navbar = () => {
    return(
        <React.Fragment>
            <nav className="navbar">
                <Fade down>
                    <img src="./assets/images/logos/logo-white.png" alt="Main Logo" />
                    <div className="center">
                        <a href="#" className="link">Projects</a>
                        <a href="#" className="link">Skills</a>
                        <a href="#" className="link">Reach Out</a>
                    </div>
                </Fade>
            </nav>
            <a href="mailto:aaryankhandu123@gmail.com" className="reachOut"><i className="fas fa-envelope"></i></a>
        </React.Fragment>
    );
};

export default navbar;