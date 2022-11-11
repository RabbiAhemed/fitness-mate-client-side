import React from "react";
import { Spinner } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Service from "../Service/Service";
import "./Service.css";
const Services = () => {
  <Spinner></Spinner>;
  const services = useLoaderData();
  return (
    <div className="my-5 py-5">
      <h1>All the Services I can provide You..</h1>
      <div className="services ">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
