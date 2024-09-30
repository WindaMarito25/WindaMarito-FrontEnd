import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap"; // Import React-Bootstrap components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // FontAwesome for icons
import {
  faCheckCircle,
  faArrowCircleDown,
} from "@fortawesome/free-solid-svg-icons"; // Icons

function Skills() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/project");
  };

  const skillsData = [
    { name: "Git", level: "Basic" },
    { name: "HTML", level: "Basic" },
    { name: "CSS", level: "Basic" },
    { name: "React.js", level: "Basic" },
    { name: "JavaScript", level: "Basic" },
    { name: "Microsoft Office", level: "Basic" },
  ];

  return (
    <Container className="text-center my-5">
      {/* Section Header */}
      <p className="text-muted">Explore My</p>
      <h1 className="text-primary fw-bold">Skills</h1>

      {/* Skills Grid using Cards */}
      <Row className="justify-content-center my-4">
        {skillsData.map((skill, index) => (
          <Col md={6} lg={4} className="mb-4" key={index}>
            <Card className="shadow text-start">
              <Card.Body className="d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-primary me-3"
                  size="2x"
                />
                <div>
                  <Card.Title className="fw-bold mb-0">{skill.name}</Card.Title>
                  <Card.Text className="text-muted">{skill.level}</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Arrow Down to Projects */}
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

export default Skills;
