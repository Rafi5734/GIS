import "./App.css";
import { Navbar, Container, Row, Col } from "react-bootstrap";

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
                      <i class="fa-brands fa-youtube"></i>
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
                      <i class="fa-brands fa-square-instagram"></i>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <div>
          <h1>I am from footer.</h1>
        </div>
      </Container>
    </div>
  );
}

export default App;
