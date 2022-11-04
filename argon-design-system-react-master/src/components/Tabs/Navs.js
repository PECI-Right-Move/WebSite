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
        <div className="nav-wrapper">
          <Nav
            className="nav-fill flex-column flex-md-row"
            id="tabs-icons-text"
            pills
            role="tablist"
          >
            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 1}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: this.state.tabs === 1
                })}
                onClick={e => this.toggleNavs(e, "tabs", 1)}
                href="#pablo"
                role="tab"
              >
                Out
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 2}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: this.state.tabs === 2
                })}
                onClick={e => this.toggleNavs(e, "tabs", 2)}
                href="#pablo"
                role="tab"
              >
                Novembro
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 3}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: this.state.tabs === 3
                })}
                onClick={e => this.toggleNavs(e, "tabs", 3)}
                href="#pablo"
                role="tab"
              >
                Dezembro
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 4}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: this.state.tabs === 4
                })}
                onClick={e => this.toggleNavs(e, "tabs", 4)}
                href="#pablo"
                role="tab"
              >
                Janeiro
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 5}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: this.state.tabs === 5
                })}
                onClick={e => this.toggleNavs(e, "tabs", 5)}
                href="#pablo"
                role="tab"
              >
                Fevereiro
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 6}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: this.state.tabs === 6
                })}
                onClick={e => this.toggleNavs(e, "tabs", 6)}
                href="#pablo"
                role="tab"
              >
                Março
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 7}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: this.state.tabs === 7
                })}
                onClick={e => this.toggleNavs(e, "tabs", 7)}
                href="#pablo"
                role="tab"
              >
                Abril
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 8}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: this.state.tabs === 8
                })}
                onClick={e => this.toggleNavs(e, "tabs", 8)}
                href="#pablo"
                role="tab"
              >
                Maio
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 9}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: this.state.tabs === 9
                })}
                onClick={e => this.toggleNavs(e, "tabs", 9)}
                href="#pablo"
                role="tab"
              >
                Junho
              </NavLink>
            </NavItem>


          </Nav>
        </div>
        <Card className="shadow">
          <CardBody>
            <TabContent activeTab={"tabs" + this.state.tabs}>
              <TabPane tabId="tabs1">
                <p className="description">
                Project Chatter
                </p>
                <p className="description">
                Plan review
                </p>
                <p className="description">
                Fisrt presentation
                </p>

              </TabPane>
              <TabPane tabId="tabs2">
                <p className="description">
                  State of art
                </p>
                <p className="description">
                  Communication Plan
                </p>
                <p className="description">
                  Requirement Gathering
                </p>
              </TabPane>
              <TabPane tabId="tabs3">
                <p className="description">
                  System architecture elaboration 
                </p>
              </TabPane>

              <TabPane tabId="tabs4">
                <p className="description">
                  Elaboration of the first version of the tecnical report
                </p>
                <p className="description">
                  Work on prototype
                </p>
              </TabPane>
              <TabPane tabId="tabs5">
                <p className="description">
                  Work on prototype
                </p>
              </TabPane>
              <TabPane tabId="tabs6">
                <p className="description">
                  Presentation of prototype
                </p>
                <p className="description">
                  Work on project
                </p>
              </TabPane>

              <TabPane tabId="tabs7">
                <p className="description">
                  Work on project
                </p>
                
              </TabPane>

              <TabPane tabId="tabs8">
                <p className="description">
                  Work on project 
                </p>
                <p className="description">
                  presentation 
                </p>
              </TabPane>

              <TabPane tabId="tabs9">
                <p className="description">
                  junho
                </p>
              </TabPane>

            </TabContent>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default Navs;
