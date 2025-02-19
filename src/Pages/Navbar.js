import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Style.css";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons

function Navbarsection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar 
      collapseOnSelect 
      expand="lg" 
      className="navbar-custom" 
      fixed="top" 
      expanded={expanded}
    >
      <Container className="d-flex align-items-center section1-row">
        <Navbar.Brand href="#home">
          <img
            src={`${process.env.PUBLIC_URL}/logo.jpg`}
            width="80"
            height="70"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>

        {/* Toggle Button */}
        <Navbar.Toggle 
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? <FaTimes size={25} /> : <FaBars size={25} />}
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto d-flex flex-wrap justify-content-center gap-lg-5 gap-3">
            <Nav.Link 
              href="#home" 
              className="nav-item"
              onClick={() => setExpanded(false)}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              href="#offering" 
              className="nav-item"
              onClick={() => setExpanded(false)}
            >
              Offering
            </Nav.Link>
            <Nav.Link 
              href="#courses" 
              className="nav-item"
              onClick={() => setExpanded(false)}
            >
              Courses
            </Nav.Link>
            <Nav.Link 
              href="#Reviews" 
              className="nav-item"
              onClick={() => setExpanded(false)}
            >
              Reviews
            </Nav.Link>
            <Nav.Link 
              href="#contact" 
              className="nav-item"
              onClick={() => setExpanded(false)}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarsection;
