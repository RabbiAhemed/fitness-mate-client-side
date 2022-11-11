import React from "react";
import Banner from "../Banner/Banner";
import Bmi from "./Bmi/Bmi";
import FAQ from "./FAQ/FAQ";
import About from "./About/About";
import "./Home.css";
import ThreeReview from "../ThreeReview/ThreeReview";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const Home = () => {
  const services = useLoaderData();
  console.log(services);
  useTitle("Home-FITNESS MATE");
  return (
    <div>
      <Banner></Banner>
      <ThreeReview services={services}></ThreeReview>
      <About></About>
      <div className="bmi">
        <Bmi></Bmi>
      </div>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
