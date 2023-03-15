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
import "assets/vendor/nucleo/css/nucleo.css";
// reactstrap components
import { Button, Card, Container, Row, Col, Dropdown, Badge } from "reactstrap";

// core components
import Dropdowns from "components/Dropdown/Dropdowns.js";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import Navs from "components/Tabs/Navs.js";


import Roadmap from "components/Roadmap/Roadmap";

class Profile extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0 position-relative">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default alpha-4 positon-relative">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
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
        </main>

        <Container>
          <Row>
            <Col lg={{size: "auto"}}>
              <span>
                <h1 style={{color:"#172b4d"}}>Workplan</h1>
              </span>
            </Col>
          </Row>
        </Container>

        <Container>
          <Roadmap/>
        </Container>
      </>
    );
  }
}

export default Profile;
