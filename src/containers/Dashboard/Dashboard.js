import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Introduction from "../../components/Introduction/Introduction";
import Interests from "../../components/Interests/Interests";
import Projects from "../../components/Projects/Projects";

const Dashboard = () => {
    useEffect(() => {
    }, []);

    return(
        <React.Fragment>
          <Navbar />
          <Introduction />
          <Interests />
          <Projects />
        </React.Fragment>
    );
};

export default Dashboard;