import React from "react";
import Footer from "../componets/Footer";
import HeroImage from "../componets/HeroImage";
import Navbar from "../componets/NavBar";

const Training = () => {
  return (
    <div>
      <Navbar />
      <HeroImage
        heading="Who I am"
        text="My name is Siya and I have been doing front-end web development for about 3 years. I am passionate about creating beautiful and responsive web sites and web applications. I am alwys looking to improve and be the best version of myself"
      />
      <Footer />
    </div>
  );
};

export default Training;
