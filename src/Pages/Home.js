import React, { useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Style.css";

const Homesection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with duration
  }, []);

  return (
    <div className="Homesection1 mb-4 pb-5 pt-5" id="home">
      <h2 className="text-center pb-4" data-aos="zoom-in">Who We Are</h2>
      <Container className="mt-4">
        <Row className="align-items-center flex-lg-row flex-column-reverse">
          {/* Text Section with Zoom Animation */}
          <Col lg={6} className="text-center text-lg-start pt-md-4 mt-4 mt-md-0" data-aos="zoom-in">
            <p>
              At <strong>JK Coaching Academy</strong>, we are a team of well-educated professionals dedicated to strengthening the foundation of education in society. Our mission is to provide <strong>high-quality education at an economically affordable cost</strong>, ensuring that every student has access to the best learning opportunities. We are committed to nurturing academic excellence by <strong>making students fall in love with learning</strong>, helping them reach their full potential and achieve top ranks.
            </p>
          </Col>

          {/* Image Section with Zoom Animation */}
          <Col lg={6} className="text-center" data-aos="zoom-in">
            <Image
              src={`${process.env.PUBLIC_URL}/background.avif`}
              alt="Academy Background"
              fluid
              style={{
                boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.3)",
                borderRadius: "10px",
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Homesection;
