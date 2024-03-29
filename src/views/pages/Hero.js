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
// nodejs library that concatenates classes

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  Modal,
  Container,
  Row,
  Col,
} from "reactstrap";

class Hero extends React.Component {
  state = {};
  toggleModal = (state) => {
    this.setState({
      [state]: !this.state[state],
    });
  };

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <main ref="main">
          <section className="section section-hero section-shaped">
            {/* Background circles */}
            <div className="shape shape-style-1 shape-default">
              <span className="span-150" />
              <span className="span-50" />
              <span className="span-50" />
              <span className="span-75" />
              <span className="span-100" />
              <span className="span-75" />
              <span className="span-50" />
              <span className="span-100" />
              <span className="span-50" />
              <span className="span-100" />
            </div>
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="6">
                    <img
                      alt="..."
                      className="img-fluid"
                      src={require("assets/img/brand/2semfundo.png")}
                      style={{ width: "1000px" }}
                    />
                    <p className="lead text-white">Project for PECI</p>
                    <div className="btn-wrapper mt-5">
                      <Button
                        className="btn-icon mb-3 mb-sm-0"
                        color="github"
                        href="https://github.com/PECI-Right-Move/App-Overview"
                        size="lg"
                        target="_blank"
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-github" />
                        </span>
                        <span className="btn-inner--text">Github</span>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
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
          <section className="section">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={require("assets/img/theme/legos.jpg")}
                      style={{ height: "90%" }}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        Design System
                      </h4>
                      <p className="lead text-italic text-white">
                        An application that uses AR ans XR concepts to help
                        untrained personnel to perform a manual task without the
                        need of constant monitoring/supervision.
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                      <i className="ni ni-settings" />
                    </div>
                    <h2>Selected Idea</h2>
                    <p className="lead">
                      Develop an android app to assist the assembly of Lego
                      figures on top of a Lego board, giving the user the most
                      Extended Reality-based guidance possible.
                    </p>
                    <p>
                      The app makes the recognition of piece sequences and piece
                      type boxes through QR code reading. It instructs the user
                      to put the piece in specific coordinates on the board, and
                      validates the action.
                    </p>
                    <p>
                      The application in it's final state must be able to
                      validate the correct postion of the piece, as well as the
                      orientation on the 3D axis, making sure that the
                      construction has no defects.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-4 shape-primary ">
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
                      <h1 className="display-3 text-white">Goals</h1>
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
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-camera-compact" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Box diferentiation and recognition
                          </h6>
                          <p className="description mt-3">
                            Aquiring infromaton about the contents of the box,
                            using a QR code presented in the box itself.
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              Vision
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              QR Code
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              Recognition
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="#pablo"
                            onClick={() => this.toggleModal("firstModal")}
                          >
                            Learn more
                          </Button>
                          <Modal
                            className="modal-dialog-centered"
                            isOpen={this.state.firstModal}
                            toggle={() => this.toggleModal("firstModal")}
                          >
                            <div className="modal-header">
                              <h6
                                className="modal-title"
                                id="modal-title-default"
                              >
                                Box diferentiation and recognition
                              </h6>
                              <button
                                aria-label="Close"
                                className="close"
                                data-dismiss="modal"
                                type="button"
                                onClick={() => this.toggleModal("firstModal")}
                              >
                                <span aria-hidden={true}>×</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              <p>
                                {" "}
                                The application scans the intended assembly,
                                from the catalog provided on the website or
                                Github, this QRcode will identify the pieces of
                                the assembly and the order to place them.
                              </p>
                              <p>
                                {" "}
                                After knowing the order of the pices it will be
                                necessary to scan the QRcode of the piece to be
                                placed which cointains the id, color and
                                dimensions of the piece.
                              </p>
                            </div>
                            <div className="modal-footer">
                              <Button
                                className="ml-auto"
                                color="primary"
                                data-dismiss="modal"
                                type="button"
                                onClick={() => this.toggleModal("firstModal")}
                              >
                                Close
                              </Button>
                            </div>
                          </Modal>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-app" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            Piece recognition and placement
                          </h6>
                          <p className="description mt-3">
                            The app will know what piece was taken form the box
                            identifiying the piece and the correct spot to place
                            it.
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              Vision
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              Recognition
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              Placement
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="#pablo"
                            onClick={() => this.toggleModal("secondModal")}
                          >
                            Learn more
                          </Button>
                          <Modal
                            className="modal-dialog-centered"
                            isOpen={this.state.secondModal}
                            toggle={() => this.toggleModal("secondModal")}
                          >
                            <div className="modal-header">
                              <h6
                                className="modal-title text-success"
                                id="modal-title-default"
                              >
                                Piece recognition and placement
                              </h6>
                              <button
                                aria-label="Close"
                                className="close"
                                data-dismiss="modal"
                                type="button"
                                onClick={() => this.toggleModal("secondModal")}
                              >
                                <span aria-hidden={true}>×</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              <p>
                                The application will know what piece was taken
                                and where it should be placed, using the QRcode
                                if the user gets it wrong the app will wait for
                                the user to scan the right piece.
                              </p>
                            </div>
                            <div className="modal-footer">
                              <Button
                                className="ml-auto"
                                color="success"
                                data-dismiss="modal"
                                type="button"
                                onClick={() => this.toggleModal("secondModal")}
                              >
                                Close
                              </Button>
                            </div>
                          </Modal>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Identification of missplaced pieces
                          </h6>
                          <p className="description mt-3">
                            The app will identify the missplaced pieces and will
                            alert the user about the missplacement.
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              analysis
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Errors
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              correction
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="#pablo"
                            onClick={() => this.toggleModal("thirdModal")}
                          >
                            Learn more
                          </Button>
                          <Modal
                            className="modal-dialog-centered"
                            isOpen={this.state.thirdModal}
                            toggle={() => this.toggleModal("thirdModal")}
                          >
                            <div className="modal-header">
                              <h6
                                className="modal-title text-warning"
                                id="modal-title-default"
                              >
                                Identification of missplaced pieces
                              </h6>
                              <button
                                aria-label="Close"
                                className="close"
                                data-dismiss="modal"
                                type="button"
                                onClick={() => this.toggleModal("thirdModal")}
                              >
                                <span aria-hidden={true}>×</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              <p>
                                The user must position the piece at the
                                indicated coordinates, and later the application
                                will recognize if the user placed the piece
                                correctly if not it will continue to notify the
                                user until he gets it right.
                              </p>
                            </div>
                            <div className="modal-footer">
                              <Button
                                className="ml-auto"
                                color="warning"
                                data-dismiss="modal"
                                type="button"
                                onClick={() => this.toggleModal("thirdModal")}
                              >
                                Close
                              </Button>
                            </div>
                          </Modal>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row className="row-grid">
                    <Col lg="4" />
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-danger rounded-circle mb-4">
                            <i className="ni ni-fat-add" />
                          </div>
                          <h6 className="text-danger text-uppercase">
                            Management feature and Creation of sets of
                            instructions
                          </h6>
                          <p className="description mt-3">
                            It will be possible to create a set of instructions
                            and export it to the app. The user will be able to
                            make a personalised assembly.
                          </p>
                          <div>
                            <Badge color="danger" pill className="mr-1">
                              Management interface
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="danger"
                            href="#pablo"
                            onClick={() => this.toggleModal("fourthModal")}
                          >
                            Learn more
                          </Button>
                          <Modal
                            className="modal-dialog-centered"
                            isOpen={this.state.fourthModal}
                            toggle={() => this.toggleModal("fourthModal")}
                          >
                            <div className="modal-header">
                              <h6
                                className="modal-title text-danger"
                                id="modal-title-default"
                              >
                                Management feature and Creation of sets of
                                instructions
                              </h6>
                              <button
                                aria-label="Close"
                                className="close"
                                data-dismiss="modal"
                                type="button"
                                onClick={() => this.toggleModal("fourthModal")}
                              >
                                <span aria-hidden={true}>×</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              <p>
                                In the current website the user should be able
                                to create an assembly with a set of instructions
                                and the website will generate a QRcode that the
                                user can scan with the app and it will start the
                                assembly.
                              </p>
                            </div>
                            <div className="modal-footer">
                              <Button
                                className="ml-auto"
                                color="danger"
                                data-dismiss="modal"
                                type="button"
                                onClick={() => this.toggleModal("fourthModal")}
                              >
                                Close
                              </Button>
                            </div>
                          </Modal>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3">Our team</h2>
                  <p className="lead text-muted"></p>
                </Col>
              </Row>
              <Row className="justify-content-center text-center mb-lg">
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/ricky.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Ricardo Covelo</span>
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/catarinaporquinha.jpeg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">
                          Catarina Barroqueiro
                        </span>
                      </h5>
                      <div className="mt-3"></div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/bea.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Beatriz Rodrigues</span>
                      </h5>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="justify-content-center text-center mb-lg">
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/Rui.jpeg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Rui Campos</span>
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/sauce.jpeg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Telmo Sauce</span>
                      </h5>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        {/* <CardsFooter /> */}
      </>
    );
  }
}

export default Hero;
