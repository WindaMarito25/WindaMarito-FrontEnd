// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

function NotFound() {
  return (
    <Container className="text-center mt-5">
      <h1 className="display-1 text-danger">
        <FontAwesomeIcon icon={faExclamationTriangle} />
      </h1>
      <h2>404 - Page Not Found</h2>
      <p className="lead">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/">
        <Button variant="primary" size="lg">
          Go to Home
        </Button>
      </Link>
    </Container>
  );
}

export default NotFound;
