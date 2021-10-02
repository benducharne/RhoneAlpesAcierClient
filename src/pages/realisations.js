import React, { useState, useEffect } from "react";

import { initialLanding, refreshLanding } from "../assets/animations/landing";

import IntroOverlay from "../components/realisations/IntroOverlay/IntroOverlay";
import Navigation from "../components/commun/Navigation/Navigation";
import Header from "../components/commun/Header/Header";
import Banner from "../components/realisations/Banner/Banner";
import Cases from "../components/realisations/Cases/Cases";
import TransitionOverlay from "../components/commun/TransitionOverlay/TransitionOverlay";

const Realisations = () => {
  const [initialScrollZero, setInitialScrollZero] = useState(true);

  useEffect(() => {
    if (window.scrollY !== 0) {
      setInitialScrollZero(false);
      refreshLanding();
    } else {
      setInitialScrollZero(true);
      initialLanding();
    }
  }, []);

  return (
    <>
      {initialScrollZero ? <IntroOverlay /> : null}

      <Navigation />
      <Header />
      <Banner />
      <Cases />

      <TransitionOverlay />
    </>
  );
};

export default Realisations;
