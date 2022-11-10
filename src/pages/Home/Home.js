import React from "react";
import Banner from "../Banner/Banner";
import Bmi from "./Bmi/Bmi";
import FAQ from "./FAQ/FAQ";
import About from "./About/About";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <div className="bmi">
        <Bmi></Bmi>
      </div>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
