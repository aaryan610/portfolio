import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Introduction from "../../components/Introduction/Introduction";
import Interests from "../../components/Interests/Interests";

const reachOut = () => {
    const button = document.querySelector(".reachOut");

    window.addEventListener("scroll", () => {
      if(window.scrollY >= window.innerHeight) {
        button.classList.add("move");
      } else {
        button.classList.remove("move");
      }
    });
};

const Dashboard = () => {
    useEffect(() => {
        reachOut();
    }, []);

    return(
        <React.Fragment>
            <Navbar />
            <Introduction />
            <Interests />
        </React.Fragment>
    );
};

export default Dashboard;