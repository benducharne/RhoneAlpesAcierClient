import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Realisations from "./pages/realisations";
import SavoirFaire from "./pages/savoirFaire";
import Services from "./pages/services";
import Erreur from "./pages/erreur";

function App() {
  return (
    <Router>
      <Route
        render={({ location }) => (
          <AnimatePresence
            exitBeforeEnter
            onExitComplete={() => {
              if (typeof window !== "undefined") {
                window.scrollTo({ top: 0 });
              }
            }}
          >
            <Switch location={location} key={location.pathname}>
              <Route path="/" exact render={() => <Realisations />} />
              <Route
                path="/savoir-faire"
                exact
                render={() => <SavoirFaire />}
              />
              <Route path="/services" exact render={() => <Services />} />
              <Route path="/" render={() => <Erreur />} />
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  );
}

export default App;
