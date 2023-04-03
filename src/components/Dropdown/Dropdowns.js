import React from "react";
// reactstrap components
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";

class Dropdowns extends React.Component {
  render() {
    return (
      <>
        <UncontrolledDropdown>
          <DropdownToggle caret color="secondary">
            Regular
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Janeiro
            </DropdownItem>
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Another action
            </DropdownItem>
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              Something else here
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </>
    );
  }
}

export default Dropdowns;