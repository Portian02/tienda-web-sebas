import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./styles.css";

// Funcion de navigation
const Navigation = () => {
  return (
    <Navbar expand="lg" className="cont">
      <Container>
        <Navbar.Brand href="#home">
        <img
            src="https://funko.com/on/demandware.static/-/Sites-FunkoUS-Library/default/dwdaf79fd0/images/funko/page-designer/fandoms/music-logo-small-banner.png"
            alt="logo-funko-pop"  className="logo-png"
          />  
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <ul>
              <li>
                <Link to="/">
                  {" "}
                  <p className="text">Home</p>
                </Link>{" "}
              </li>

              <li>
                <Link to="/Sesion">
                  {" "}
                  <p className="text">Log in</p>
                </Link>{" "}
              </li>
              <li>
                <Link to="/Sell">
                  {" "}
                  <p className="text">Sell</p>
                </Link>{" "}
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
