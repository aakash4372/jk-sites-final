import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

const WhatWeDo = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Animation duration: 1s
  }, []);

  return (
    <Container className="text-center whatwedo my-5" id="about">
      <Row className="justify-content-center">
        <Col md={10}>
          <h2 className="text-dark pb-4" data-aos="zoom-in">What We Do</h2>
          <p className="mt-3" data-aos="zoom-in">
            We provide <strong>customized learning sessions</strong> designed for maximum effectiveness.
            We break down lengthy classes into <strong>concise 45-minute sessions</strong> to maintain 
            student engagement and optimize learning. Our <strong>flexible scheduling</strong> ensures 
            that students can learn at their most productive hours, enhancing retention 
            and making them <strong>fast, efficient learners</strong>. By focusing on high involvement 
            and an interactive approach, we nurture a love for learning that helps 
            students excel academically.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default WhatWeDo;
