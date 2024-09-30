import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <Container className="my-5">
      <section id="contact">
        <p className="text-center">Get in Touch</p>
        <h1 className="text-primary fw-bold title text-center mb-4">
          Contact Me
        </h1>
        <Row className="justify-content-center">
          <Col md={6} lg={4}>
            <Card className="mb-4 shadow">
              <Card.Body className="d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="2x"
                  className="text-primary me-3"
                />
                <div>
                  <p className="mb-1 fw-semibold">Email:</p>
                  <a
                    href="mailto:windamarito8@gmail.com"
                    className="text-decoration-none text-dark"
                  >
                    windamarito8@gmail.com
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4}>
            <Card className="mb-4 shadow">
              <Card.Body className="d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="2x"
                  className="text-primary me-3"
                />
                <div>
                  <p className="mb-1 fw-semibold">LinkedIn:</p>
                  <a
                    href="https://www.linkedin.com/in/winda-marito"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-dark"
                  >
                    Winda Marito
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </Container>
  );
}

export default Contact;
