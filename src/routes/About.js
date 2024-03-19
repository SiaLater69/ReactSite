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
        text="Passionate and driven web developer with a proven track record of delivering high-quality solutions. Skilled in front-end web development, I excel in crafting responsive and user-friendly websites using technologies like React, Vue.js, and Tailwind CSS. My proficiency in Python extends beyond web development, encompassing data analysis and automation. With a keen eye for detail and a commitment to continuous learning, I am adept at diagnosing and resolving complex technical issues. Whether creating captivating user interfaces or troubleshooting hardware and software problems, I thrive on challenges and am dedicated to exceeding expectations.
"
      />
      <Footer />
    </div>
  );
};

export default Training;
