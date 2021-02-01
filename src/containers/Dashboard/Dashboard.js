import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Introduction from "../../components/Introduction/Introduction";
import Interests from "../../components/Interests/Interests";
import Projects from "../../components/Projects/Projects";
import ReachOut from "../../components/ReachOut/ReachOut";

const Dashboard = () => {
    useEffect(() => {
    }, []);

    return(
        <React.Fragment>
          <Navbar />
          <Introduction />
          <Interests />
          <Projects />
          <ReachOut />
        </React.Fragment>
    );
};

export default Dashboard;