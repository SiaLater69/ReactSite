import React from "react";
import Project from "../componets/Project";
import HeroImage from "../componets/HeroImage";
import Navbar from "../componets/NavBar";
import Footer from "../componets/Footer";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="Projects" />
      <Project />
      <Footer />
    </div>
  );
};

export default Projects;
