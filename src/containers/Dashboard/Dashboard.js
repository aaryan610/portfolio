import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Introduction from "../../components/Introduction/Introduction";
import Interests from "../../components/Interests/Interests";
import Projects from "../../components/Projects/Projects";
import ReachOut from "../../components/ReachOut/ReachOut";
import Parallax from "../../components/Parallax";

const Dashboard = () => {
    return(
        <React.Fragment>
          <Navbar />
          {/* <Parallax /> */}
          <Introduction />
          <Interests />
          <Projects />
          <ReachOut />
        </React.Fragment>
    );
};

export default Dashboard;