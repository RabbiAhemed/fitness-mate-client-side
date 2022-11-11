import React from "react";
import { Container } from "react-bootstrap";
import "./Blog.css";
const Blog = () => {
  return (
    <div>
      <div className="m-2 blogs">
        <div>
          <h2>Difference between SQL and NoSQL</h2>
          <p>
            <li>
              {" "}
              SQL databases are table-based on the other hand NoSQL databases
              are either key-value pairs, document-based, graph databases or
              wide-column stores. This makes relational SQL databases a better
              option for applications that require multi-row transactions such
              as an accounting system or for legacy systems that were built for
              a relational structure.{" "}
            </li>
            <li>
              In almost all situations SQL databases are vertically scalable.
              This means that it is possible increase the load on a single
              server by increasing things like RAM, CPU or SSD. But on the other
              hand NoSQL databases are horizontally scalable. This means that
              it's possible to handle more traffic by sharing, or adding more
              servers in the NoSQL database. It is similar to adding more floors
              to the same building versus adding more buildings to the
              neighborhood. Thus NoSQL can ultimately become larger and more
              powerful, making these databases the preferred choice for large or
              ever-changing data sets.
            </li>
          </p>
        </div>
        <div>
          <h2>What is JWT, and how does it work?</h2>
          <p>
            JWT is an open standard used to share information between two
            parties securely — a client and a server. In most cases, it’s an
            encoded JSON containing a set of claims and a signature. It’s
            usually used in the context of other authentication mechanisms like
            OAuth, OpenID to share user-related information.
            <br />
            By sharing a secret key with the Identity Provider, the Service
            Provider can hash a part of a token it receives and compare it to
            the signature of the token. Now, if that result matches the
            signature, the SP knows that the information provided has come from
            the other entity possessing the key.
            <li>User sign-in using username and password.</li>
            <li>
              The authentication server verifies the credentials and issues a
              JWT signed using a private key.
            </li>
            <li>
              Moving forward, the client will use the JWT to access protected
              resources by passing the JWT in the HTTP Authorization header.
            </li>
            <li>
              The resource server then verifies the authenticity of the token
              using the public key.
            </li>
          </p>
        </div>
        <div>
          <h2>What is the difference between javascript and NodeJS?</h2>
          <p>
            <li>
              {" "}
              JavaScript is a client-side scripting language that is
              lightweight, cross-platform, and interpreted. Both Java and HTML
              include it. Node.js, on the other hand, is a V8-based server-side
              programming language.
            </li>
            <li>
              {" "}
              JavaScript is a simple programming language that can be used with
              any browser that has the JavaScript Engine installed. Node.js, on
              the other hand, is an interpreter or execution environment for the
              JavaScript programming language. It requires libraries that can be
              conveniently accessed from JavaScript programming to be more
              helpful.
            </li>
          </p>
        </div>
        <div>
          <h2>How does NodeJS handle multiple requests at the same time?</h2>
          <p>
            NodeJS receives multiple client requests and places them into
            EventQueue. NodeJS is built with the concept of event-driven
            architecture. NodeJS has its own EventLoop which is an infinite loop
            that receives requests and processes them. EventLoop is the listener
            for the EventQueue. <br /> If NodeJS can process the request without
            I/O blocking then the event loop would itself process the request
            and sends the response back to the client by itself.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
