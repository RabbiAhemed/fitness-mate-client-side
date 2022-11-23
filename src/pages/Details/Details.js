import React from "react";
import { Card } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const Details = () => {
  const service = useLoaderData();
  const { image, name, tagline, price, details, service_id } = service;
  useTitle("Details-FITNESS MATE");
  return (
    <div className="row g-0  border border-info rounded m-2">
      <div className="col-md-4 ">
        <img src={image} className="w-50" alt="" />
      </div>
      <div className="col-md-8 px-2 bg-light rounded">
        <div className="card-body">
          <h1 className="card-title fw-bold">{name}</h1>
          <p className=" text-success fw-bold font-italic">{tagline}</p>
          <h4 className="fw-bold">{price}$ only</h4>
          <p className="card-text">{details}</p>
          <div className="card-bottom"></div>
        </div>
      </div>
    </div>
  );
};

export default Details;
