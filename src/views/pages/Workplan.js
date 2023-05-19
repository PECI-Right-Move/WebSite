import React from "react"; 
import "assets/vendor/nucleo/css/nucleo.css"; 
// reactstrap components 
import {Container} from "reactstrap"; 
 
// components 
import DemoNavbar from "components/Navbars/DemoNavbar.js"; 
import Roadmap from "components/Roadmap/Roadmap"; 
 
class Workplan extends React.Component { 
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
          <Roadmap/> 
        </Container> 
      </> 
    ); 
  } 
} 
 
export default Workplan;