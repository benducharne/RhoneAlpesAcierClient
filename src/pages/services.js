import React from "react";

import Navigation from "../components/commun/Navigation/Navigation";
import Header from "../components/commun/Header/Header";
import HeroSection from "../components/commun/HeroSection/HeroSection";
import Etancheite from "../components/services/Etancheite/Etancheite";
import Toiture from "../components/services/Toiture/Toiture";
import Bardage from "../components/services/Bardage/Bardage";
import Autres from "../components/services/Autres/Autres";
import TransitionOverlay from "../components/commun/TransitionOverlay/TransitionOverlay";
import Footer from "../components/commun/Footer/Footer";

const longLines = [
  "Notre activité est répartie en",
  "4 domaines d’expertise",
  "répondant à l’ensemble des exigences",
  "thermiques, sécuritaires et esthétiques.",
];

const shortLines = [
  "Notre activité est",
  "répartie en 4 domaines",
  "d’expertise répondant à",
  "l’ensemble des exigences",
  "thermiques, sécuritaires",
  "et esthétiques.",
];

const Services = () => {
  return (
    <>
      <Navigation />
      <Header />
      <HeroSection
        title={"Services"}
        longLines={longLines}
        shortLines={shortLines}
      />
      <Etancheite />
      <Toiture />
      <Bardage />
      <Autres />
      <Footer text={"Réalisations"} to={"/"} />

      <TransitionOverlay />
    </>
  );
};

export default Services;
