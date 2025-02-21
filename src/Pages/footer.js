import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section py-4" id="contact" style={{backgroundColor:'#00345b'}}>
      <Container>
        <Row className="gap-4 gap-md-0">
          <Col md={3} className="text-start text-white d-flex flex-column align-items-start mb-4 mb-md-0">
            <div className="logo-circle">
              <img
                src={`${process.env.PUBLIC_URL}/logo-remvoebg.png`}
                alt="Logo"
                className="footer-logo"
              />
            </div>
            <p className="text-start mt-3">
              We provide flexible learning options to ensure the best educational experience for every child.
            </p>
          </Col>
          <Col md={3} className="text-start text-white mb-4 mb-md-0">
            <h5>Useful Links</h5>
            <ul className="list-unstyled d-flex flex-column gap-3 align-items-start">
              <li><a href="#home" className="text-white text-decoration-none">Home</a></li>
              <li><a href="#offering" className="text-white text-decoration-none">Offering</a></li>
              <li><a href="#courses" className="text-white text-decoration-none">Courses</a></li>
              <li><a href="#Reviews" className="text-white text-decoration-none">Reviews</a></li>
            </ul>
          </Col>
          <Col md={3} className="text-start text-white">
          <h5>Contact Us</h5>

          {/* Phone */}
          <p className="d-flex align-items-center">
            <FaPhone className="me-2 calls flex-shrink-0" />
            <a href="tel:+917397180444" className="text-white ps-1 text-decoration-none">+91 73971 80444</a>
          </p>

          {/* Email */}
          <p className="d-flex align-items-center">
            <FaEnvelope className="me-2 flex-shrink-0" />
            <a href="mailto:jkcoachingacademy.com" className="text-white ps-2 text-decoration-none">jkcoachingacademy.com</a>
          </p>

          {/* Address */}
          <p className="d-flex align-items-start">
            <FaMapMarkerAlt className="me-2 flex-shrink-0 mt-1" />
            <span className="ps-2">3G Hill View Apartment, Dr. Subrayan Street, Tatabad, Coimbatore - 641 012</span>
          </p>

        </Col>

          <Col md={3} className="text-start text-white">
            <h5>Follow Us</h5>
            <div className="social-icons d-flex gap-3">
              <a href="https://www.instagram.com/jkcoachingacademy" target="_blank" className="text-white">
                <img src={`${process.env.PUBLIC_URL}/instagram.png`} alt="Instagram" width="30" height="30" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100082763191266" target="_blank" className="text-white">
                <img src={`${process.env.PUBLIC_URL}/facebook.png`} alt="Facebook" width="30" height="30" />
              </a>
            </div>
          </Col>

        </Row>
        <Row className="mt-4">
          <Col className="text-center text-white">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} 
              <a href="https://bmtechx.in" target="_blank" className="text-white text-decoration-none ms-1">
                BMTECHx
              </a>. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
