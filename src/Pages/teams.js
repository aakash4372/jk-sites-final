import React, { useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import "./Style.css"; // Ensure this CSS file exists

const Profile = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" }); // Initialize AOS
  }, []);

  return (
    <div className="profile-section py-5">
      <h2 className="text-center text-primary" style={{ fontWeight: "700" }} data-aos="zoom-in">Team</h2>
      <h5 className="text-center team-section-h5 container text-muted mb-5" data-aos="zoom-in">
        Meet the Team – JK Coaching Academy
      </h5>
      <Container fluid>
        <Row className="align-items-center pt-3 justify-content-center">
          {/* Left: Image Section */}
          <Col xs={12} md={6} className="text-center" data-aos="zoom-in">
            <div className="profile-image-wrapper">
              <Image
                src={`${process.env.PUBLIC_URL}/profile.png`}
                alt="Ms. Kavitha Jagadeeswaran"
                fluid
                roundedCircle
                className="profile-image"
              />
            </div>
          </Col>

          {/* Right: Content Section */}
          <Col xs={12} md={6} className="text-start text-md-center text-lg-start" data-aos="fade-up">
            <div className="profile-text-container">
              <h6 className="text-primary fw-bold my-3">Managing Director & Founder</h6>
              <h2 className="text-dark fw-bold my-3">Ms. Kavitha Jagadeeswaran, M.Sc., MBA</h2>
              <p className="profile-text text-muted">
                Ms. Kavitha Jagadeeswaran is the visionary behind JK Coaching Academy. 
                She studied in a government school, secured her UG degree in Psychology on merit, 
                and went on to complete her Master’s in HR and an MBA in Marketing (Correspondence).
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
