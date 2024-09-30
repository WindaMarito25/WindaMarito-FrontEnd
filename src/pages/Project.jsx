import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";

function Projects() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };
  const projects = [
    {
      title: "Movie App with React Native + TypeScript",
      desc: "A mobile application that allows users to search and view movies using a user-friendly interface.",
      githubLink: "https://github.com/WindaMarito25/final-project-movie-app",
    },
    {
      title: "Weather App with React Native",
      desc: "A weather forecasting application that provides real-time weather updates for different locations.",
      githubLink: "https://github.com/WindaMarito25/react-native-weather-app",
    },
    {
      title: "Note App with React Native",
      desc: "A simple mobile application that allows users to create, edit, and delete notes, enhancing productivity and organization.",
      githubLink: "https://github.com/WindaMarito25/react-native-note-app", // Ganti dengan link yang sesuai jika sudah ada
    },
  ];

  return (
    <Container className="text-center my-5">
      {/* Section Header */}
      <p className="text-muted">Browse My Recent</p>
      <h1 className="text-primary fw-bold">Projects</h1>

      {/* Projects Grid using Cards */}
      <Row className="justify-content-start mb-3 my-4">
        {projects.map((project, index) => (
          <Col md={6} lg={4} className="mb-4" key={index}>
            <Card className="shadow-sm" style={{ height: "100%" }}>
              <Card.Body>
                <Card.Title className="fw-bold text-start">
                  {project.title}
                </Card.Title>
                <Card.Text className="text-start">{project.desc}</Card.Text>
                <div className="btn-container text-start d-flex align-items-end">
                  <Link
                    to={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    View on GitHub
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Arrow Down to Contact */}
      <Button variant="link" className="p-0" onClick={handleClick}>
        <FontAwesomeIcon
          icon={faArrowCircleDown}
          className="text-primary"
          size="3x"
        />
      </Button>
    </Container>
  );
}

export default Projects;
