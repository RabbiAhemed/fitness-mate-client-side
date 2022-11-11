import React from "react";
import { Spinner } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import Service from "../Service/Service";
import "./Service.css";
const Services = () => {
  <Spinner></Spinner>;
  const services = useLoaderData();
  useTitle("Services-FITNESS MATE");
  return (
    <div className="my-5 py-5">
      <h1>All the Services I can provide You..</h1>
      <div className="services">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
