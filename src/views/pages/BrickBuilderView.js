import React from "react";
import "assets/vendor/nucleo/css/nucleo.css";

// components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import BrickBuilder from "components/BrickBuilder/BrickBuilder";

class BrickBuilderView extends React.Component {
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
            {" "}
            {/* Circles background */}{" "}
            <div className="shape shape-style-1 shape-default alpha-4 positon-relative"></div>{" "}
          </section>{" "}
        </main>{" "}
        <BrickBuilder />
      </>
    );
  }
}

export default BrickBuilderView;
