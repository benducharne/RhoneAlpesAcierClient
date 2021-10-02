import React from "react";

import Navigation from "../components/commun/Navigation/Navigation";
import Header from "../components/commun/Header/Header";
import HeroSection from "../components/commun/HeroSection/HeroSection";
import Company from "../components/savoirFaire/Company/Company";
import Gallery from "../components/savoirFaire/Gallery/Gallery";
import Footer from "../components/commun/Footer/Footer";
import TransitionOverlay from "../components/commun/TransitionOverlay/TransitionOverlay";

const heroLongLines = [
  "Créée en 1986, Rhône-Alpes Acier est",
  "une structure dynamique à taille humaine",
  "qui dispose d’un bureau d’étude intégré.",
];
const heroShortLines = [
  "Créée en 1986,",
  "Rhône-Alpes Acier est",
  "une structure dynamique",
  "à taille humaine",
  "qui dispose d’un",
  "bureau d’étude intégré.",
];

const SavoirFaire = () => {
  return (
    <>
      <Navigation />
      <Header />
      <HeroSection
        title={"Savoir-faire"}
        longLines={heroLongLines}
        shortLines={heroShortLines}
        displayScrollHelper={true}
      />
      <Company />
      <Gallery />
      <Footer text={"Services"} to={"/services"} />

      <TransitionOverlay />
    </>
  );
};

export default SavoirFaire;
