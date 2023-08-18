import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import useAuth from "../../hooks/useAuth";

import "./styles.css";

// Funcion de navigation
const Navigation = ({}) => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  const Logout = () => {
    setAuth({});
    navigate("/login");
  };
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
            <NavDropdown
              style={{ color: "white" }}
              title="Categories"
              className="droper"
            >
              <NavDropdown.Item>
                {" "}
                <Link to="/princess" className="link">
                  Princess
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="/pixar" className="link">
                  Pixar{" "}
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                {" "}
                <Link to="/villians" className="link">
                  Villians
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="/charactersDisney" className="link">
                  Other Characters{" "}
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            {auth.user ? (
              <>
                <Button variant="outline-danger" onClick={Logout}>
                  Log Out
                </Button>
              </>
            ) : (
              ""
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
