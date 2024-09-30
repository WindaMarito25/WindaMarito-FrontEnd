import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap"; // Import Bootstrap components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesome
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"; // Import brand icons
import { faFileDownload } from "@fortawesome/free-solid-svg-icons"; // Import download icon
import profileImage from "../assets/Profile.jpeg"; // Make sure the image path is correct

function Home() {
  const handleDownloadCV = () => {
    window.open("/CV.pdf", "_blank"); // Directly access CV in the public folder
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/winda-marito/", "_blank");
  };

  const handleGitHubClick = () => {
    window.open("https://github.com/WindaMarito25", "_blank");
  };

  return (
    <Container className="text-center mt-5 mb-5">
      <Row className="justify-content-center align-items-center">
        <Col xs={12} className="text-center">
          {/* Profile Picture */}
          <img
            src={profileImage}
            alt="Winda Marito profile"
            className="img-fluid img-thumbnail rounded-circle shadow mb-3"
            style={{
              width: "200px",
              height: "200px",
              objectFit: "cover",
              borderBottom: "3px solid #007bff", // Border between image and content
            }}
          />
        </Col>
        <Col xs={12} className="pt-3">
          {/* Border between image and content */}
          <hr style={{ border: "1px solid #ddd", marginBottom: "30px" }} />
        </Col>
        <Col md={8}>
          {/* Text Section */}
          <div>
            <p
              className="text-muted"
              style={{ fontSize: "1.2rem", letterSpacing: "1px" }}
            >
              Hello, I'm
            </p>
            <h1
              className="display-4"
              style={{ fontWeight: "bold", color: "#007bff" }}
            >
              Winda Marito
            </h1>
            <p
              className="lead"
              style={{
                fontSize: "1.5rem",
                color: "#6c757d",
                marginBottom: "20px",
                fontWeight: "400",
              }}
            >
              Passionate Front-End Developer & Web Designer
            </p>
          </div>
          {/* Buttons */}
          <div className="my-4">
            <Button
              variant="outline-primary"
              onClick={handleDownloadCV}
              className="me-3"
            >
              <FontAwesomeIcon icon={faFileDownload} className="me-2" />
              Download CV
            </Button>
            <Link to="/contact" className="btn btn-primary">
              Contact Info
            </Link>
          </div>
          {/* Social Icons */}
          <div className="mt-3">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="me-4"
              size="2x"
              style={{ cursor: "pointer", color: "#0e76a8" }}
              onClick={handleLinkedInClick}
            />
            <FontAwesomeIcon
              icon={faGithub}
              className="me-4"
              size="2x"
              style={{ cursor: "pointer", color: "#333" }}
              onClick={handleGitHubClick}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
