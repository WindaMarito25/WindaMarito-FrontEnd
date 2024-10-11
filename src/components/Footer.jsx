import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="bg-light text-dark mt-5 py-4">
      <Container>
        <Row>
          <Col md={6} className="text-start">
            <h5>About Me</h5>
            <p>
              I'm a passionate developer focused on creating amazing web and
              mobile applications. Let's connect!
            </p>
          </Col>
          <Col md={6} className="text-end">
            <h5>Contact Me</h5>
            <p className="d-flex justify-content-end gap-3">
              <a href="mailto:windamarito8@gmail.com" className="text-dark">
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </a>
              <a
                href="https://www.linkedin.com/in/winda-marito"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a
                href="https://github.com/WindaMarito25/country-rank-population.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </p>
          </Col>
        </Row>
        <div className="text-center mt-4">
          <p>
            &copy; {new Date().getFullYear()} Winda Marito. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
