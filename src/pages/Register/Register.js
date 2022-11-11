import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../UserContext/UserContext";
const Register = () => {
  useTitle("Register-FITNESS MATE");
  const { createUser } = useContext(AuthContext);
  const [success, setSuccess] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const imageUrl = form.image.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        setSuccess(true);

        form.reset();
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="w-50 mx-auto my-5">
      {success ? (
        <h4 className="text-success">You are registered now!!</h4>
      ) : (
        <h2 className="text-center">Register</h2>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            name="name"
            placeholder="please enter your name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            name="image"
            placeholder="please enter your image url"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            name="email"
            placeholder="please enter your email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            name="password"
            placeholder="please type your password"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
        <p className="small fw-bold mt-2 pt-1 mb-0">
          Already registered with us?
          <Link to="/login" className="link-success">
            Login
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default Register;
