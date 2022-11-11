import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useTitle from "../../hooks/useTitle";
const AddService = () => {
  const [addService, setAddService] = useState();
  const notify = () => toast("congratulations");
  useTitle("Add service-FITNESS MATE");
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newService = { ...addService };
    console.log(newService);
    newService[field] = value;
    setAddService(newService);
    console.log(e.target.value);
  };

  const handleServiceSubmit = (e) => {
    const ServiceAdd = {
      ...addService,
    };
    // addService
    fetch(`https://fitness-mate-server-side.vercel.app/addService`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ServiceAdd),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          notify();
        }
      });
    e.target.reset();
    e.preventDefault();
  };
  return (
    <Container className="bg-dark px-4 py-5 mb-4 rounded">
      <Form className="mb-3 mx-5" onSubmit={handleServiceSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Control
              type="text"
              name="name"
              onBlur={handleOnBlur}
              placeholder="Service Name"
              required
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Control
              type="text"
              name="image"
              onBlur={handleOnBlur}
              placeholder="Service Image url"
              required
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Control
              placeholder="Price"
              name="price"
              onBlur={handleOnBlur}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Control
              placeholder="tagline"
              name="tagline"
              onBlur={handleOnBlur}
            />
          </Form.Group>
        </Row>

        <Form.Group as={Col}>
          <textarea
            className="form-control"
            name="details"
            rows="3"
            onBlur={handleOnBlur}
            placeholder="Service Description"
          ></textarea>
        </Form.Group>

        <div className="text-center mt-5">
          <Button variant="danger" type="submit" className="w-50">
            Add Service
          </Button>
        </div>
      </Form>
      <ToastContainer />
    </Container>
  );
};

export default AddService;
