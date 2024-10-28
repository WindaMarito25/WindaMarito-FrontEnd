import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import profileImages from "../assets/Profile.jpeg";

function About() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/skills");
  };

  return (
    <Container className="mt-5 mb-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary">About Me</h1>
        <p className="lead">Get to know me better and my journey so far.</p>
      </div>
      <Row className="justify-content-center">
        <Col md={4} className="text-center">
          <div className="profile-picture ">
            <img
              src={profileImages}
              alt="Profile"
              className="img-fluid img-thumbnail shadow-sm border-light"
              style={{ borderRadius: "0.5rem" }}
            />
          </div>
        </Col>
        <Col md={8}>
          <Row className="mt-4 mt-md-0">
            {" "}
            <Col sm={6}>
              <Card className="mb-4 shadow-sm border-light">
                <Card.Body>
                  <Card.Title className="pb-2 border-bottom border-light-subtle">
                    <FontAwesomeIcon
                      icon={faBriefcase}
                      className="text-primary"
                    />{" "}
                    Experience
                  </Card.Title>
                  <Card.Subtitle className="mb-2 pt-2 text-muted">
                    Badan Kepegawaain Negara (BKN) <br /> Internship (September
                    2022 - December 2022)
                  </Card.Subtitle>
                  <Card.Text>Web Design</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6}>
              <Card className="mb-4 shadow-sm border-light">
                <Card.Body>
                  <Card.Title className="pb-2 border-bottom border-light-subtle">
                    <FontAwesomeIcon
                      icon={faGraduationCap}
                      className="text-primary"
                    />{" "}
                    Education
                  </Card.Title>
                  <Card.Subtitle className="mb-2 pt-2 text-muted">
                    Bachelor's Degree of Computer Science
                  </Card.Subtitle>
                  <Card.Text>
                    Bina Sarana Informatika University
                    <br />
                    GPA: 3.94
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Card className="shadow-sm mb-4 shadow-sm border-light">
            <Card.Body>
              <Card.Text>
                Fresh Graduate from Bina Sarana Informatika University with a
                major in Information Technology. Completed an internship at the
                National Civil Service Agency (BKN) as a Front-End Developer and
                Web Designer. Currently participating in the Hactive8 x
                Digitalent Kominfo bootcamp to enhance skills in Web
                Development. Proficient in web development technologies,
                including HTML, CSS, JavaScript, React.js and Bootstrap.
              </Card.Text>
            </Card.Body>
          </Card>
          <div className="text-center">
            <Button variant="primary" onClick={handleClick} size="lg">
              <FontAwesomeIcon icon={faArrowRight} className="me-2" />
              View Skills
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
