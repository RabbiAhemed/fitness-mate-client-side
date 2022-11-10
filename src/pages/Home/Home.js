import React from "react";
import Banner from "../Banner/Banner";
import Bmi from "./Bmi/Bmi";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="bmi">
        <Bmi></Bmi>
      </div>
    </div>
  );
};

export default Home;
