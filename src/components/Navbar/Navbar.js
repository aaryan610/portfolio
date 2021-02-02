import React, { useState } from "react";
import "./Navbar.css";
import { Fade } from "react-reveal";
import LogoWhite from "../../assets/images/logos/logo-white.png";
import { Link } from "react-scroll";

const Navbar = () => {
    const [classes, setClasses] = useState("mobileNav");
    const [toggle, setToggle] = useState("navIcon");

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
                        <div
                            className={ toggle }
                            onClick={() => {
                                classes === "mobileNav" ? setClasses("mobileNav show") : setClasses("mobileNav"); 
                                toggle === "navIcon" ? setToggle("navIcon open") : setToggle("navIcon");
                                }}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </Fade>
            </nav>
            <nav className={ classes }>
                <div className="navLists">
                    <Link to="interests" onClick={() => setClasses("mobileNav") } spy={true} smooth={true} duration={800}>
                        Interests
                    </Link>
                    <Link to="projects" onClick={() => setClasses("mobileNav") } spy={true} smooth={true} duration={800}>
                        Projects
                    </Link>
                    <a href="#">Résumé</a>
                    <Link to="reachout" onClick={() => setClasses("mobileNav") } spy={true} smooth={true} duration={800}>
                        Reach Out
                    </Link>
                </div>
            </nav>
        </React.Fragment>
    );
};

export default Navbar;