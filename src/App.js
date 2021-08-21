import React, { useEffect } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { gsap } from "gsap";

import Cursor from "./components/commun/Cursor/Cursor";

import Realisations from "./pages/realisations";
import SavoirFaire from "./pages/savoirFaire";
import Services from "./pages/services";

const routes = [
  { path: "/", Component: Realisations },
  { path: "/savoir-faire", Component: SavoirFaire },
  { path: "/services", Component: Services },
];

function App() {
  useEffect(() => {
    // prevents flashing
    gsap.to("body", 0, { css: { visibility: "visible" } });
  });

  return (
    <Router>
      <Cursor />
      <Switch>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component />
          </Route>
        ))}
      </Switch>
    </Router>
  );
}

export default App;
