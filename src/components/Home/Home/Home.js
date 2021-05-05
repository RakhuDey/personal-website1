import React from "react";

import Header from "../Header/Header";
import Projects from "../Projects/Projects";
import AboutMe from "../AboutMe/AboutMe";
import Resume from "../Resume/Resume";
import ProgressBar from "../ProgressBar/ProgressBar";
import Contract from "../Contract/Contract";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Projects></Projects>
      <AboutMe></AboutMe>
      <Resume></Resume>
      <ProgressBar></ProgressBar>
      <Contract></Contract>
      <Footer></Footer>
    </div>
  );
};

export default Home;
