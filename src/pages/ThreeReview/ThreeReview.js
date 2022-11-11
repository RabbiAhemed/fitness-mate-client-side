import React from "react";
import Button from "react-bootstrap/Button";
import { Link, useLoaderData } from "react-router-dom";
import Service from "../Service/Service";
import "./ThreeReview.css";
const ThreeReview = ({ services }) => {
  console.log(typeof services);
  return (
    <div>
      <h2>My most popular plans</h2>
      <div className="threeService">
        {services.slice(0, 3).map((service) => (
          <Service key={service.service_id} service={service}></Service>
        ))}
      </div>
      <div className="text-center my-3">
        <Link to="/services">
          <Button variant="warning">See ALl</Button>
        </Link>
      </div>
    </div>
  );
};

export default ThreeReview;
