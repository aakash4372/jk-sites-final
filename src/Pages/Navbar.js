import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Style.css";

function Navbarsection() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-custom" fixed="top">
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
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto d-flex flex-wrap justify-content-center gap-lg-5 gap-3">
            <Nav.Link href="#home" className="nav-item">Home</Nav.Link>
            <Nav.Link href="#offering" className="nav-item">Offering</Nav.Link>
            <Nav.Link href="#courses" className="nav-item">Courses</Nav.Link>
            <Nav.Link href="#Reviews" className="nav-item">Reviews</Nav.Link>
            <Nav.Link href="#contact" className="nav-item">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarsection;
