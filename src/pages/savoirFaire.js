import React from "react";

import Navigation from "../components/commun/Navigation/Navigation";
import Header from "../components/commun/Header/Header";
import Hero from "../components/savoirFaire/Hero/Hero";
import Company from "../components/savoirFaire/Company/Company";
import Gallery from "../components/savoirFaire/Gallery/Gallery";
import Footer from "../components/savoirFaire/Footer/Footer";

const SavoirFaire = () => {
  return (
    <>
      <Navigation />
      <Header />
      <Hero />
      <Company />
      <Gallery />
      <Footer />
    </>
  );
};

export default SavoirFaire;
