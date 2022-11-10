import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="about-section mx-auto w-75 my-4">
      <img
        className="bing"
        src="https://i.ibb.co/J7NSKBH/William-Bing.jpg"
        alt="William-Bing"
        border="0"
      />
      <div>
        <p>a few words about me</p>
        <h2>Wiliam Bing</h2>
        <small>Founder and trainer,Fitness Mate</small>
        <p>
          Being fit and living healthy is what I know and love. Fitness has
          always been a part of my life. I grew up in a fit family—my dad ran
          marathons, we had a home gym, and my parents always had gym
          memberships.
        </p>
      </div>
    </div>
  );
};

export default About;
