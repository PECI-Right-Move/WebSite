/*!

=========================================================
* Argon Design System React - v1.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import Cards from "components/Card/Cards.js";

class Catalogo extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">Catalog</h1>
                      <p className="lead text-white">
                        The page contains all the pieces and pre made assemblys
                        that we have in stock.
                      </p>
                      <div className="btn-wrapper">
                        <Button
                          className="btn-icon mb-3 mb-sm-0"
                          tag={Link}
                          to="/brick-builder"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-code" />
                          </span>
                          <span className="btn-inner--text">
                            Create Assembly
                          </span>
                        </Button>
                        <Button href="https://github.com/PECI-Right-Move/App-Overview">
                          <i className="fa fa-github" />
                          <span className="btn-inner--text">Catalog</span>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
          </div>
          {/* Dysplay Catalogo */}
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              {/*!Assembly Catalogo*/}
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3 text-white ">Assemblys</h2>
                  <p className="lead text-muted"></p>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col lg="12">
                  {[1, 2].map((row) => (
                    <Row key={row} className="row-grid">
                      {[1, 2, 3].map((col) => (
                        <Col key={col} lg="4">
                          <Cards imgSrc={[row, col, "assemblys"]} />
                        </Col>
                      ))}
                    </Row>
                  ))}
                  {/*Tem de ser manualmente pois n vai ate 3*/}
                  <Row className="row-grid">
                    {[1, 2].map((col) => (
                      <Col key={col} lg="4">
                        <Cards imgSrc={[3, col, "assemblys"]} />
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
              {/*!Pecas Catalogo*/}
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3 text-primary py-6">Pieces</h2>
                  <p className="lead text-muted"></p>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col lg="12">
                  {[1, 2, 3, 4, 5, 6, 7].map((row) => (
                    <Row key={row} className="row-grid">
                      {[1, 2, 3].map((col) => (
                        <Col key={col} lg="4">
                          <Cards imgSrc={[row, col, "pecas"]} />
                        </Col>
                      ))}
                    </Row>
                  ))}
                  {/*Tem de ser manualmente pois n vai ate 3*/}
                  <Row className="row-grid">
                    {[1, 2].map((col) => (
                      <Col key={col} lg="4">
                        <Cards imgSrc={[8, col, "pecas"]} />
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
      </>
    );
  }
}

export default Catalogo;
