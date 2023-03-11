import "./App.css";
import { Navbar, Container, Row, Col, Nav, NavDropdown } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <div className="upper_navbar">
        <Container>
          <Row>
            <Col sm={12} md={6} lg={6}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <a
                  href="tel: 48812164"
                  class="phone_link"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    display: "flex",
                    flexDirection: "row",
                    paddingLeft: "10px",
                  }}
                >
                  <i class="fa-solid fa-phone-flip"></i>
                  48812164
                </a>
                ,
                <a
                  href="tel: 48812164"
                  class="phone_link"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    marginLeft: "5px",
                  }}
                >
                  48812165
                </a>
                ,
                <a
                  href="tel: +880135678965"
                  class="phone_link"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    marginLeft: "5px",
                  }}
                >
                  0135678965
                </a>
                ,
                <a
                  href="tel: +880175676968"
                  class="phone_link"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    marginLeft: "5px",
                    paddingRight: "10px",
                  }}
                >
                  0175676968
                </a>
              </div>
            </Col>
            <Col
              sm={12}
              md={6}
              lg={6}
              style={{ display: "flex", justifyContent: "end" }}
            >
              <Row>
                <Col sm={12} md={6} lg={6}>
                  <div>
                    <a
                      href="mailto: info@guidence.edu.bd"
                      class="phone_link"
                      style={{
                        textDecoration: "none",
                        color: "white",
                        marginLeft: "10px",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <i class="fa-sharp fa-solid fa-envelope"></i>
                      info@guidence.edu.bd
                    </a>
                  </div>
                </Col>
                <Col sm={12} md={6} lg={6}>
                  <div
                    style={{
                      marginLeft: "20px",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <a
                      href="mailto: info@guidence.edu.bd"
                      className="icon_link"
                      style={{
                        textDecoration: "none",
                        color: "white",
                        marginLeft: "10px",
                      }}
                    >
                      <i class="fa-brands fa-facebook"></i>
                    </a>
                    <a
                      href="mailto: info@guidence.edu.bd"
                      className="icon_link"
                      style={{
                        textDecoration: "none",
                        color: "white",
                        marginLeft: "10px",
                      }}
                    >
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                    <a
                      href="mailto: info@guidence.edu.bd"
                      className="icon_link"
                      style={{
                        textDecoration: "none",
                        color: "white",
                        marginLeft: "10px",
                      }}
                    >
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                    <a
                      href="mailto: info@guidence.edu.bd"
                      className="icon_link"
                      style={{
                        textDecoration: "none",
                        color: "white",
                        marginLeft: "10px",
                      }}
                    >
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                    <a
                      href="mailto: info@guidence.edu.bd"
                      className="icon_link"
                      style={{
                        textDecoration: "none",
                        color: "white",
                        marginLeft: "10px",
                      }}
                    >
                      <i className="fa-brands fa-square-instagram"></i>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="bg-light">
        <Container className="main_navbar">
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand
                href="#home"
                className="me-5 primary_bg_color fw-bold fs-6"
              >
                <img
                  src="https://www.guidance.edu.bd/wp-content/uploads/2020/12/logo-3-300x181-1.png"
                  className="nav_logo"
                  alt="logo"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className="">
                <Nav className="">
                  <NavDropdown
                    className="me-3 navLink fw-normal"
                    title="About"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      About GIS
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Message from the principal
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Governing body
                    </NavDropdown.Item>
                    <NavDropdown
                      className="me-3 dropend fw-normal"
                      title="Administrative Team"
                      id="basic-nav-dropdown"
                    >
                      <NavDropdown.Item href="#action/3.1">
                        Administrative
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Support staff
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown.Item href="#action/3.4">
                      Produces & Policies
                    </NavDropdown.Item>
                    <NavDropdown
                      className="me-3 dropend fw-normal"
                      title="School facilities"
                      id="basic-nav-dropdown"
                    >
                      <NavDropdown.Item href="#action/3.1">
                        Information Technology
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        E-library
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Creative Arts
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">
                        Co-curicular Activities
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">
                        Sports
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">
                        Outdoor
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">
                        Exposure
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">
                        Social Relationships
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">
                        Communication Skills
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">
                        Psychological Counselling
                      </NavDropdown.Item>
                    </NavDropdown>
                  </NavDropdown>
                  <Nav.Link
                    href="#link"
                    className="me-3 primary_bg_color navLink fw-normal"
                  >
                    Academics
                  </Nav.Link>
                  <NavDropdown
                    className="me-3 navLink fw-normal"
                    title="Admission"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      Why Choose Guidance
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      School Fees
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      How to apply
                    </NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    <NavDropdown.Item href="#action/3.4">
                      Apply online
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link
                    href="#link"
                    className="me-3 primary_bg_color navLink fw-normal"
                  >
                    Activities
                  </Nav.Link>
                  <Nav.Link
                    href="#link"
                    className="me-3 primary_bg_color navLink fw-normal"
                  >
                    Parents&Students
                  </Nav.Link>
                  <Nav.Link
                    href="#link"
                    className="me-3 text-nowrap primary_hovered_color navLink fw-bold"
                  >
                    Apply Online
                  </Nav.Link>
                  <Nav.Link
                    href="#link"
                    className="me-3 primary_bg_color navLink fw-normal"
                  >
                    Contact
                  </Nav.Link>
                  <Nav.Link
                    href="#link"
                    className="me-3 text-nowrap primary_bg_color navLink fw-normal"
                  >
                    Student Login
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
      </div>

      <Container>
        <div>
          <h1>I am from footer.</h1>
        </div>
      </Container>
      <div className="position-relative">
        <div class="position-absolute bottom-0 end-0">
          <button typeName="button" className="btn btn-primary">
            Primary
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
