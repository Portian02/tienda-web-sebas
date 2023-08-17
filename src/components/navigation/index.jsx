import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./styles.css";

// Funcion de navigation
const Navigation = () => {
  return (
    <Navbar expand="lg" className="cont">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://funko.com/on/demandware.static/-/Sites-FunkoUS-Library/default/dwdaf79fd0/images/funko/page-designer/fandoms/music-logo-small-banner.png"
            alt="logo-funko-pop"
            className="logo-png"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="text">
              {" "}
              <Nav className="text">Home</Nav>
            </Link>
            <Link to="/login" className="text">
              {" "}
              <Nav className="text">Log in</Nav>
            </Link>{" "}
            <Link to="/Sell" className="text">
              {" "}
              <Nav className="text">Sell</Nav>
            </Link>{" "}
            <NavDropdown title="Categories">
              <Link to="/princess" className="link">
                <NavDropdown.Item>Princess</NavDropdown.Item>
              </Link>
              <Link to="/pixar" className="link">
                <NavDropdown.Item>Pixar</NavDropdown.Item>
              </Link>
              <Link to="/villians" className="link">
                <NavDropdown.Item>Villians</NavDropdown.Item>
              </Link>
              <Link to="/charactersDisney" className="link">
                <NavDropdown.Item>Other Characters</NavDropdown.Item>
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
