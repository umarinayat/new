import logo from "../../assets/logo.png";
import { Nav, Navbar, Form } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./Navbar.css";

const Header = () => {
  return (
    <>
      {/* <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <img
              src={logo}
              alt="logo"
              className=""
              style={{ paddingRight: 20 }}
            />
            SYMFINDER
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll">
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="custom-nav-font me-auto my-2 my-lg-0"
                navbarScroll
                style={{ maxHeight: "100px" }}
              >
                <Nav.Link href="" className="px-4">
                  DIVIDENDS
                </Nav.Link>
                <Nav.Link href="" className="px-4">
                  EARNINGS
                </Nav.Link>
                <Nav.Link href="" className="px-4">
                  NEWS
                </Nav.Link>
                <Nav.Link href="" className="px-4">
                  PRICING
                </Nav.Link>
                <Nav.Link href="" className="px-5">
                  DASHBOARD
                </Nav.Link>
                <Button className="px-5 custom-button-color">
                  REGISTER NOW
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Navbar.Toggle>
        </Container>
      </Navbar> */}
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand className="px-2">
            <img src={logo} alt="logo" style={{ paddingRight: 20 }} />
            SYMFINDER
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="flex-grow-0">
            <Nav className="custom-nav-font align-right" navbarScroll>
              <Nav.Link href="" className="px-4 custom-nav">
                DIVIDENDS
              </Nav.Link>
              <Nav.Link href="" className="custom-nav">
                EARNINGS
              </Nav.Link>
              <Nav.Link href="" className="custom-nav">
                NEWS
              </Nav.Link>
              <Nav.Link href="" className="custom-nav">
                PRICING
              </Nav.Link>
              <Nav.Link href="" className="custom-nav">
                DASHBOARD
              </Nav.Link>
              <Button className=" custom-button-color btn-md">
                REGISTER NOW
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
