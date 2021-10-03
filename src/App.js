import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { ViewportProvider } from "./assets/hooks/useViewport";

import Realisations from "./pages/realisations";
import SavoirFaire from "./pages/savoirFaire";
import Services from "./pages/services";
import Erreur from "./pages/erreur";

function App() {
  /*useEffect(() => {
    window.addEventListener("resize", () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);

      let vw = window.innerWidth * 0.01;
      document.documentElement.style.setProperty("--vw", `${vw}px`);

      return () => {
        window.removeEventListener("resize");
      };
    });
  }, []);*/

  return (
    <ViewportProvider>
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
    </ViewportProvider>
  );
}

export default App;
