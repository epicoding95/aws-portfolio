import React from "react";

import SideProjects from "../SideProjects/SideProjects";
import ContactMeForm from "../ContactMe/ContactMeForm";

import About from "../About/About";
import classes from "./HomePage.module.css";
const HomePage = () => {
  return (
    <div>
      <About />
      {/* <WorkInfoCard /> */}
      <SideProjects />
      <ContactMeForm />
 
    </div>
  );
};

export default HomePage;
