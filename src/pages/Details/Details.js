import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const Details = ({ service }) => {
  const { image, name, tagline, price, details, service_id } = service;
  useTitle("Details-FITNESS MATE");
  return (
    <div>
      <img src={image} alt="" />
      <h2>{name}</h2>
      <p>{tagline}</p>
    </div>
  );
};

export default Details;
