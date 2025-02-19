import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./Style.css";

const Homesection = () => {
  return (
    <div className="Homesection1 mb-4 pb-4" id="home">
      <Container className="mt-4">
        <Row className="align-items-center flex-lg-row flex-column-reverse">
          <Col lg={6} className="text-center text-lg-start pt-md-4 mt-4 mt-md-0">
            <p>
              Welcome to <strong>JK Coaching Academy</strong>, your destination for quality and affordable Hindi coaching and extracurricular skill-based programs. We provide flexible learning options to ensure the best educational experience for every child.
            </p>
          </Col>
          <Col lg={6} className="text-center">
            <Image
              src={`${process.env.PUBLIC_URL}/background.avif`}
              alt="Kitten"
              fluid
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Homesection;
