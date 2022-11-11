import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../UserContext/UserContext";
const Login = () => {
  useTitle("Login-FITNESS MATE");
  const { googleSignIn, signInUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(result.user);
        const currentUser = {
          email: user.email,
        };
        console.log(currentUser);
        // jwt token work
        fetch("https://fitness-mate-server-side.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("jwt-token", data.token);
          });

        setUser(user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error.message));
  };
  const handleGoogleSignIn = () => {
    googleSignIn();
    navigate(from, { replace: true });
  };

  return (
    <div className="w-50 mx-auto my-5">
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
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
        <p className="lead fw-bold fs- mb-0 me-3">Sign in with Google</p>
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="btn btn-danger btn-floating mx-1"
        >
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default Login;
