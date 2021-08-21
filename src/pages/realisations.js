import React, { useEffect, useState } from "react";

import landing from "../animations/landing";

import IntroOverlay from "../components/realisations/IntroOverlay/IntroOverlay";
import Navigation from "../components/commun/Navigation/Navigation";
import Header from "../components/commun/Header/Header";
import Banner from "../components/realisations/Banner/Banner";
import Cases from "../components/realisations/Cases/Cases";

const Realisations = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const completeAnimation = () => {
    setAnimationComplete(true);
  };

  useEffect(() => {
    landing(completeAnimation);
  }, []);

  return (
    <>
      {animationComplete === false ? <IntroOverlay /> : ""}
      <Navigation />
      <Header />
      <Banner />
      <Cases />
    </>
  );
};

export default Realisations;
