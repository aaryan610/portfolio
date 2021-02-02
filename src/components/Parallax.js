import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import "./Parallax.css";

export function debounce(func, wait = 5, immediate = true) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const Parallax = () => {
    const height = window.innerHeight;

    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", debounce(handleScroll));
        return () => window.removeEventListener("scroll", debounce(handleScroll));
    }, [debounce]);

    const [{ springscrollY }, springsetScrollY] = useSpring(() => ({
        springscrollY: 0
    }));
    const parallaxLevel = 4;
    springsetScrollY({ springscrollY: scrollY });
    const interpHeader = springscrollY.interpolate(
        (o) => `translateY(${o / parallaxLevel}px)`
    );

    let color = "#264653";
    let bgColor = "rgba(255, 255, 255, 0.1)";

    if (scrollY > (height - 150) && scrollY <= ((2 * height) - 300)) {
        color = "#fff";
        bgColor = "rgba(255, 255, 255, 0.1)";
    }
    else if (scrollY > ((2 * height) - 300)  && scrollY <= ((3 * height) - 450)) {
        color = "orange";
        bgColor = "rgba(255, 255, 255, 0.1)";
    }
    else if (scrollY > ((3 * height) - 450)) {
        color = "tomato";
        bgColor = "rgba(255, 255, 255, 0.1)";
    }

    return(
        <React.Fragment>
            <div className="parallax">
                <animated.div style={{ borderColor: color, backgroundColor: bgColor }}></animated.div>
                <animated.div style={{ borderColor: color, backgroundColor: bgColor }}></animated.div>
                <animated.div style={{ borderColor: color, backgroundColor: bgColor }}></animated.div>
                <animated.div style={{ borderColor: color, backgroundColor: bgColor }}></animated.div>
                <animated.div style={{ borderColor: color, backgroundColor: bgColor }}></animated.div>
                <animated.div style={{ borderColor: color, backgroundColor: bgColor }}></animated.div>
            </div>
        </React.Fragment>
    );
};

export default Parallax;