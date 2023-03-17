import "./App.css";
import {
  Navbar,
  Container,
  Row,
  Col,
  Nav,
  NavDropdown,
  Button,
} from "react-bootstrap";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Carousel } from "react-bootstrap";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

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
                      <i className="fa-brands fa-linkedin"></i>
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
                  <NavDropdown
                    className="me-3 navLink fw-normal"
                    title="Activities"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      News & Updates
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Events
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    className="me-3 navLink fw-normal"
                    title="Parents&Students"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      Parents Handbook
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Code of Conduct
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Withdrawal Policies
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link className="me-3 text-nowrap primary_hovered_color navLink fw-bold">
                    Apply Online
                  </Nav.Link>
                  <Nav.Link
                    href="#link"
                    className="me-3 primary_bg_color navLink fw-normal"
                  >
                    Contact
                  </Nav.Link>
                  <Nav.Link className="me-3 text-nowrap primary_color navLink fw-bold">
                    Student Login
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
      </div>

      <div>
        <div>
          <>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  src="https://img.freepik.com/free-vector/realistic-three-dimensional-arabic-ornamental-background_52683-59086.jpg?w=1380&t=st=1678766818~exp=1678767418~hmac=04e823baf2af045362e320d07f99bd1c7209f843b87d02b18faddd61f5be2f6e"
                  alt="slide1"
                  className="w-100"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://img.freepik.com/free-vector/mandala-illustration_53876-81805.jpg?w=1380&t=st=1678766896~exp=1678767496~hmac=af73ab6a6f7b187a568f5e9000e752725870fc5aa5814c239701ea9cf54f3f06"
                  alt="slide1"
                  className="w-100"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://img.freepik.com/free-vector/realistic-three-dimensional-arabic-ornamental-background_52683-59650.jpg?w=1380&t=st=1678766922~exp=1678767522~hmac=808783f08067991cf1d4ac78051d1b1ba2dd90659e09d09ca5386b42c20ae219"
                  alt="slide1"
                  className="w-100"
                />
              </SwiperSlide>
            </Swiper>
          </>
        </div>
      </div>

      <div>
        <Container>
          <div className="shadow-sm mt-3">
            <Row>
              <Col sm={12} md={3} lg={3}>
                <div className="d-flex flex-row p-3 justify-content-between align-items-center">
                  <img
                    src="https://www.guidance.edu.bd/wp-content/uploads/2018/08/icon-1.png"
                    alt="Islamic Icon"
                  />
                  <h3>Islamic Studies</h3>
                </div>
              </Col>
              <Col sm={12} md={3} lg={3}>
                <div className="d-flex flex-row p-3 justify-content-between align-items-center">
                  <img
                    src="https://www.guidance.edu.bd/wp-content/uploads/2018/08/icon-2.png"
                    alt="Islamic Icon"
                  />
                  <h3>Hifzul Quran</h3>
                </div>
              </Col>
              <Col sm={12} md={3} lg={3}>
                <div className="d-flex flex-row p-3 justify-content-between align-items-center">
                  <img
                    src="https://www.guidance.edu.bd/wp-content/uploads/2018/08/icon-2.png"
                    alt="Islamic Icon"
                  />
                  <h3>Tarbiyyah</h3>
                </div>
              </Col>
              <Col sm={12} md={3} lg={3}>
                <div className="d-flex flex-row p-3 justify-content-between align-items-center">
                  <img
                    src="https://www.guidance.edu.bd/wp-content/uploads/2018/08/icon-3.png"
                    alt="Islamic Icon"
                  />
                  <h3>Extra Curricular</h3>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <Container className="mt-5">
        <div>
          <Row>
            <Col sm={8} className="border-end mb-5">
              <div className="d-flex flex-row justify-content-center align-items-center">
                <h3 className="primary_color text-nowrap">News & Updates</h3>
                <div
                  className="w-100"
                  style={{
                    backgroundColor: "#ea9970",
                    height: "5px",
                    marginLeft: "20px",
                  }}
                ></div>
              </div>
              <p className="primary_hovered_color">Read all news & updates</p>

              <div>
                <Carousel fade>
                  <Carousel.Item className="carousel_image">
                    <img
                      src="https://www.guidance.edu.bd/wp-content/uploads/2021/06/Belayet-Vai-1-800x356.jpg"
                      alt="carousel1"
                      className="carousel_inside_image"
                    />
                    <Carousel.Caption className="middle">
                      <h3 className="primary_hovered_color text">
                        Admission Open
                      </h3>
                      <div className="d-flex flex-row justify-content-center align-items-center">
                        <p
                          className="primary_hovered_color text"
                          style={{
                            borderRight: "3px solid #ea9970",
                            paddingRight: "13px",
                          }}
                        >
                          JUNE 28, 2021
                        </p>
                        <p
                          className="primary_hovered_color text"
                          style={{
                            borderRight: "3px solid #ea9970",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                          }}
                        >
                          BYGUIDANCE INTERNATIONAL SCHOOL
                        </p>
                        <p
                          className="primary_hovered_color text"
                          style={{
                            borderRight: "3px solid #ea9970",
                            paddingRight: "13px",
                            paddingLeft: "13px",
                          }}
                        >
                          NEWS
                        </p>
                      </div>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item className="carousel_image">
                    <img
                      src="https://www.guidance.edu.bd/wp-content/uploads/2021/06/Hafiza-Sharmeen-2-800x356.jpg"
                      alt="carousel2"
                      className="carousel_inside_image"
                    />
                    <Carousel.Caption className="middle">
                      <h3 className="primary_hovered_color text">
                        Admission Open
                      </h3>
                      <div className="d-flex flex-row justify-content-center align-items-center">
                        <p
                          className="primary_hovered_color text"
                          style={{
                            borderRight: "3px solid #ea9970",
                            paddingRight: "13px",
                          }}
                        >
                          JUNE 28, 2021
                        </p>
                        <p
                          className="primary_hovered_color text"
                          style={{
                            borderRight: "3px solid #ea9970",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                          }}
                        >
                          BYGUIDANCE INTERNATIONAL SCHOOL
                        </p>
                        <p
                          className="primary_hovered_color text"
                          style={{
                            borderRight: "3px solid #ea9970",
                            paddingRight: "13px",
                            paddingLeft: "13px",
                          }}
                        >
                          NEWS
                        </p>
                      </div>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item className="carousel_image">
                    <img
                      src="https://www.guidance.edu.bd/wp-content/uploads/2021/06/Fuad-Hassan-2-800x356.jpg"
                      alt="carousel3"
                      className="carousel_inside_image"
                    />
                    <Carousel.Caption className="middle">
                      <h3 className="primary_hovered_color text">
                        Admission Open
                      </h3>
                      <div className="d-flex flex-row justify-content-center align-items-center text">
                        <p
                          className="primary_hovered_color"
                          style={{
                            borderRight: "3px solid #ea9970",
                            paddingRight: "13px",
                          }}
                        >
                          JUNE 28, 2021
                        </p>
                        <p
                          className="primary_hovered_color text"
                          style={{
                            borderRight: "3px solid #ea9970",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                          }}
                        >
                          BYGUIDANCE INTERNATIONAL SCHOOL
                        </p>
                        <p
                          className="primary_hovered_color text"
                          style={{
                            borderRight: "3px solid #ea9970",
                            paddingRight: "13px",
                            paddingLeft: "13px",
                          }}
                        >
                          NEWS
                        </p>
                      </div>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
            <Col sm={4}>
              <div className="d-flex flex-row justify-content-center align-items-center">
                <h3 className="primary_color text-nowrap">Notices</h3>
                <div
                  className="w-100"
                  style={{
                    backgroundColor: "#ea9970",
                    height: "5px",
                    marginLeft: "20px",
                  }}
                ></div>
              </div>
              <div className="d-flex flex-row">
                <div>
                  <h3 className="border-3 border-bottom border-warning">
                    <h1 className="primary_hovered_color">11</h1> MAR
                  </h3>
                </div>
                <div className="ms-4">
                  <h3>Parent Teacher Meeting 2 – Junior School</h3>
                </div>
              </div>
              <div className="d-flex flex-row mt-5">
                <div>
                  <h3 className="border-3 border-bottom border-warning">
                    <h1 className="primary_hovered_color">21</h1> FEB
                  </h3>
                </div>
                <div className="ms-4">
                  <h3>International Mother Language Day Observation- 2023</h3>
                </div>
              </div>
              <div className="d-flex flex-row mt-5">
                <div>
                  <h3 className="border-3 border-bottom border-warning">
                    <h1 className="primary_hovered_color">04</h1> MAR
                  </h3>
                </div>
                <div className="ms-4">
                  <h3>Parent Teacher Meeting 2 – Middle School</h3>
                </div>
              </div>
              <button type="button" className="mt-3 btn btn-primary">
                View All Notices
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </Col>
          </Row>
        </div>
      </Container>
      <div className="mt-5" style={{ backgroundColor: "#efefef" }}>
        <Container>
          <Row>
            <Col className="">
              <img
                src="https://www.guidance.edu.bd/wp-content/uploads/2020/12/logo-3-300x181-1.png"
                className="mt-5 mb-5 d-flex align-items-center flex-column"
                alt="GIS_logo"
              />
            </Col>
            <Col>
              <div className="d-flex align-items-center flex-column">
                <h1 className="mt-5">About GIS</h1>
                <p className="text-muted">
                  Our education and learning are chiefly befitting to the
                  ingenious, shared, multidisciplinary, and inquisitive ways
                  that pupils learn best: our students are equipped for a world
                  that requires their universal awareness, interest, empathy,
                  and eagerness to exploit their gifts in service to others.
                  Students here put together their self-confidence, their
                  skills, and their sense of identity.
                </p>
              </div>
              <Button className="mb-5" variant="primary">
                Know more about us
                <i className="ms-3 fa-solid fa-circle-info"></i>
              </Button>{" "}
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <div>
          <Row>
            <Col sm={12} md={6} className="me-0 pe-0">
              <div>
                <img
                  src="https://www.guidance.edu.bd/wp-content/uploads/2021/06/admission.jpg"
                  alt="admission_image"
                  className="img-fluid application1"
                />
              </div>
            </Col>
            <Col sm={12} md={6} className="ms-0 ps-0">
              <div className="application ps-5 pe-5 d-flex align-items-center">
                <div>
                  <h1 className="mt-5 text-white fw-bold">
                    Apply for Admission
                  </h1>
                  <p className="mb-5 primary_hovered_color fs-4 fw-bold">
                    2023-24 applications are now open
                  </p>
                  <p className="mb-5 text-muted fs-4 fw-bold">
                    We don’t just give students an education and experiences
                    that set them up for success in a career. We help them
                    succeed in their career—to discover a field they’re
                    passionate about and dare to lead it.
                  </p>
                  <Button variant="primary" className="mb-5">
                    Apply Now
                  </Button>{" "}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div>
        <Container>
          <div className="d-flex flex-row">
            <Row>
              <Col sm={12} md={2}>
                <div>
                  <img
                    src="https://www.guidance.edu.bd/wp-content/uploads/2022/01/DhakaBoard-1.svg"
                    alt="Dhaka_Board_logo"
                    className="img-fluid"
                  />
                </div>
              </Col>
              <Col sm={12} md={2}>
                <div>
                  <img
                    src="https://www.guidance.edu.bd/wp-content/uploads/2022/01/giseiin-2.svg"
                    alt="Dhaka_Board_logo"
                    className="img-fluid"
                  />
                </div>
              </Col>
              <Col sm={12} md={2}>
                <div>
                  <img
                    src="https://www.guidance.edu.bd/wp-content/uploads/2021/10/Cambridge.svg"
                    alt="Dhaka_Board_logo"
                    className="img-fluid"
                  />
                </div>
              </Col>
              <Col sm={12} md={2}>
                <div>
                  <img
                    src="https://www.guidance.edu.bd/wp-content/uploads/2021/10/EDEXCEL.svg"
                    alt="Dhaka_Board_logo"
                    className=" img-fluid"
                  />
                </div>
              </Col>
              <Col sm={12} md={2}>
                <div>
                  <img
                    src="https://www.guidance.edu.bd/wp-content/uploads/2021/10/British-Council.svg"
                    alt="Dhaka_Board_logo"
                    className="img-fluid"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <Container>
        <div>
          <h1>I am from footer.</h1>
        </div>
      </Container>

      <div className="">
        <nav class="navbar fixed-bottom bg-body-tertiary">
          <div class="container-fluid d-flex justify-content-end">
            <button type="button" class="btn btn-primary">
              Support
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default App;
