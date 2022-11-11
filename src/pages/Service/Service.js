import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Details from "../Details/Details";
import Card from "react-bootstrap/Card";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link, useNavigate } from "react-router-dom";
const Service = ({ service }) => {
  const { image, name, tagline, price, details, service_id } = service;
  const navigate = useNavigate();
  const navigateToServiceDetail = (service_id) => {
    navigate(`/service/${service_id}`);
  };

  return (
    <Card>
      <PhotoProvider>
        <PhotoView src={image}>
          <Card.Img variant="top" src={image} className="img-fluid p-5 " />
        </PhotoView>
      </PhotoProvider>

      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <p>{tagline}</p>
        <Card.Text>{details.slice(0, 100)}</Card.Text>
        <p>{price}</p>
        <Link to={`/service/${service_id}`}>
          <Button
            onClick={() => navigateToServiceDetail(service_id)}
            variant="primary"
          >
            View Details
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Service;
