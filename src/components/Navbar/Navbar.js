import React, { useState } from "react";
import "./Navbar.css";
import { Fade } from "react-reveal";
import LogoWhite from "../../assets/images/logos/logo-white.png";
import { Link } from "react-scroll";

const Navbar = () => {
    const [classes, setClasses] = useState("mobileNav");

    return(
        <React.Fragment>
            <nav className="navbar">
                <Fade down>
                    <img src={ LogoWhite } alt="Main Logo" />
                    <div className="center">
                        <Link to="interests" spy={true} smooth={true} duration={800}>
                            Interests
                        </Link>
                        <Link to="projects" spy={true} smooth={true} duration={800}>
                            Projects
                        </Link>
                        <a href="#">Résumé</a>
                        <Link to="reachout" spy={true} smooth={true} duration={800}>
                            Reach Out
                        </Link>
                        <div className="toggle">
                            <div className="line line1"></div>
                            <div className="line line2"></div>
                            <div className="line line3"></div>
                        </div>
                    </div>
                </Fade>
            </nav>
        </React.Fragment>
    );
};

export default Navbar;