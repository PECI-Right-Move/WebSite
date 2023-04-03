import React from "react";
import classnames from "classnames";
import "assets/vendor/nucleo/css/nucleo.css";
// reactstrap components
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane
} from "reactstrap";

class Navs extends React.Component {
  state = {
    tabs: 1
  };
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index
    });
  };
  render() {
    return (
      <>
            <div class="container">
          <div class="chart">
          <div class="chart-row chart-period">
              <div class="chart-row-item"></div>
              <span>January</span><span>February</span><span>March</span>
              <span>April</span><span>May</span><span>June</span>
              <span>July</span><span>August</span><span>September</span>
              <span>October</span><span>November</span><span>December</span>
          </div>
          <div class="chart-row chart-lines">
            <span></span><span></span><span></span>
            <span></span><span></span><span></span>
            <span></span><span></span><span></span>
            <span></span><span></span><span></span>
          </div>
          <div class="chart-row">
            <div class="chart-row-item">1</div>
            <ul class="chart-row-bars">
              <li class="chart-li-one">Planning</li>
            </ul>
          </div>
          <div class="chart-row">
            <div class="chart-row-item">2</div>
            <ul class="chart-row-bars">
              <li class="chart-li-two-a">Meeting</li>
              <li class="chart-li-two-b">Analysis</li>          
            </ul>
          </div>
          <div class="chart-row">
            <div class="chart-row-item">3</div>
            <ul class="chart-row-bars">
              <li class="chart-li-three">Design</li>
            </ul>
          </div>
          <div class="chart-row">
            <div class="chart-row-item">4</div>
            <ul class="chart-row-bars">
              <li class="chart-li-four">Development</li>
            </ul>
          </div>
          <div class="chart-row">
            <div class="chart-row-item">5</div>
            <ul class="chart-row-bars">
              <li class="chart-li-five">Testing</li>
            </ul>
          </div>
          <div class="chart-row">
            <div class="chart-row-item">6</div>
            <ul class="chart-row-bars">
              <li class="chart-li-six">Maintenance</li>
            </ul>
          </div>
          <div class="chart-row">
            <div class="chart-row-item">7</div>
            <ul class="chart-row-bars">
              <li class="chart-li-seven">Meeting</li>
            </ul>
          </div>

        </div>

    </div>
      </>
    );
  }
}

export default Navs;