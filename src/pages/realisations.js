import React, { useEffect } from "react";

import landing from "../assets/animations/landing";

import IntroOverlay from "../components/realisations/IntroOverlay/IntroOverlay";
import Navigation from "../components/commun/Navigation/Navigation";
import Header from "../components/commun/Header/Header";
import Banner from "../components/realisations/Banner/Banner";
import Cases from "../components/realisations/Cases/Cases";
import TransitionOverlay from "../components/commun/TransitionOverlay/TransitionOverlay";

const Realisations = () => {
  useEffect(() => {
    landing();
  }, []);

  return (
    <>
      <IntroOverlay />

      <Navigation />
      <Header />
      <Banner />
      <Cases />

      <TransitionOverlay />
    </>
  );
};

export default Realisations;
