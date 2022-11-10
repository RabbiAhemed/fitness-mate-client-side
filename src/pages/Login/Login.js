import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="w-50 mx-auto">
      <h2>Login</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <p className="small fw-bold mt-2 pt-1 mb-0">
          Don't have an account?
          <Link to="/register" className="link-success">
            Register
          </Link>
        </p>
      </Form>

      <div>
        <p className="mt-2">or</p>
        <p className="lead fw-bold fs- mb-0 me-3">Sign in with</p>
        <button type="button" className="btn btn-light btn-floating mx-1">
          <FaGoogle></FaGoogle>
        </button>

        <button type="button" className="btn btn-light btn-floating mx-1">
          <FaGithub></FaGithub>
        </button>
      </div>
    </div>
  );
};

export default Login;
