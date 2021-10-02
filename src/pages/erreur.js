import React from "react";

import Navigation from "../components/commun/Navigation/Navigation";
import Header from "../components/commun/Header/Header";
import HeroSection from "../components/commun/HeroSection/HeroSection";
import TransitionOverlay from "../components/commun/TransitionOverlay/TransitionOverlay";

const longLines = ["Page introuvable..."];
const shortLines = ["Page introuvable..."];

const Erreur = () => {
  return (
    <>
      <Navigation />
      <Header />
      <HeroSection
        title={"Erreur 404"}
        longLines={longLines}
        shortLines={shortLines}
        displayScrollHelper={false}
      />

      <TransitionOverlay />
    </>
  );
};

export default Erreur;
