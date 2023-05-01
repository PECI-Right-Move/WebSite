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
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import Index from "views/Index.js";
import Workplan from "views/pages/Workplan.js";
import BrickBuilderView from "views/pages/BrickBuilderView";
import Catalogo from "views/examples/Catalogo.js";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={(props) => <Index {...props} />} />
      <Route
        path="/Workplan-page"
        exact
        render={(props) => <Workplan {...props} />}
      />
        <Route
        path="/brick-builder"
        exact
        render={(props) => <BrickBuilderView {...props} />}
      />
      <Route
        path="/Catalog-page"
        exact
        render={(props) => <Catalogo {...props} />}
      />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);
