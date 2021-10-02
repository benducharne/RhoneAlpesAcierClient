import React, { useEffect } from "react";

import Navigation from "../components/commun/Navigation/Navigation";
import Header from "../components/commun/Header/Header";
import HeroSection from "../components/commun/HeroSection/HeroSection";
import StdRightSection from "../components/commun/StdRightSection/StdRightSection";
import StdLeftSection from "../components/commun/StdLeftSection/StdLeftSection";
import TransitionOverlay from "../components/commun/TransitionOverlay/TransitionOverlay";
import Footer from "../components/commun/Footer/Footer";

import leftImageEtancheite from "../assets/images/jpg/servicesEtancheiteGauche.jpg";
import rightImageEtancheite from "../assets/images/jpg/servicesEtancheiteDroite.jpg";
import leftImageToiture from "../assets/images/jpg/savoirDroite.jpg";
import rightImageToiture from "../assets/images/jpg/servicesToitureDroite.jpg";
import leftImageBardage from "../assets/images/jpg/servicesBardageGauche.jpg";
import rightImageBardage from "../assets/images/jpg/servicesBardageDroite.jpg";
import leftImageAutres from "../assets/images/jpg/servicesAutresGauche.jpg";
import rightImageAutres from "../assets/images/jpg/servicesAutresDroite.jpg";

import {
  stdRightAnimation,
  stdLeftAnimation,
} from "../assets/animations/stdSection";

const heroLongLines = [
  "Notre activité est répartie en",
  "4 domaines d’expertise",
  "répondant à l’ensemble des exigences",
  "thermiques, sécuritaires et esthétiques.",
];
const heroShortLines = [
  "Notre activité est",
  "répartie en 4 domaines",
  "d’expertise répondant à",
  "l’ensemble des exigences",
  "thermiques, sécuritaires",
  "et esthétiques.",
];
const etancheiteLines = [
  "_ Toitures terrasses accessibles, inaccessibles, végétalisation, murs enterrés",
  "_ Isolants en laine minérale, mousse polyuréthane, polystyrène",
  "_ Supports béton, bois et bac acier",
  "_ Membranes d’étanchéité : bitume, PVC/TPO et EPDM",
  "_ Protections par gravillons, dalles béton/céramique/bois sur plot",
  "_ La réfection d’anciennes étanchéités",
  "_ Systèmes acoustiques suivant descriptifs fournisseurs",
];
const toitureLines = [
  "_ Couverture sèche, zinc, polycarbonate",
  "_ Isolation laine minérale en sous-face feutre tendu/plafond shedisol",
  "_ Système anti-condensation",
  "_ Couverture en panneaux sandwich",
];
const bardageLines = [
  "_ Bardage simple et double peau",
  "_ Panneaux sandwich",
  "_ Réfection façades existantes",
  "_ Façade décorative : cassettes, bardage plan, panneaux composite bois,",
  "aluminium, fibre-ciment, pierre et bardage bois",
];
const autresLines = [
  "_ L’éclairement naturel, le désenfumage et l’asservissement",
  "_ La zinguerie et l’évacuation des eaux pluviales",
  "_ Les planchers collaborants",
  "_ Les contrats d’entretien annuel des toitures terrasses",
  "_ La maintenance et mise en conformité de système de désenfumage naturel",
  "_ Accessibilité en toiture : passes acrotères, échelles à crinoline",
  "_ Sécurisation de toiture individuelle et collective",
];

const Services = () => {
  useEffect(() => {
    stdRightAnimation();
    stdLeftAnimation();
  }, []);

  return (
    <>
      <Navigation />
      <Header />
      <HeroSection
        title={"Services"}
        longLines={heroLongLines}
        shortLines={heroShortLines}
        displayScrollHelper={true}
      />
      <StdRightSection
        title={"L'étanchéité du bâtiment"}
        lines={etancheiteLines}
        leftImage={leftImageEtancheite}
        rightImage={rightImageEtancheite}
      />
      <StdLeftSection
        title={"La toiture sèche, chaude et panneaux isolés"}
        lines={toitureLines}
        leftImage={leftImageToiture}
        rightImage={rightImageToiture}
      />
      <StdRightSection
        title={"Le bardage et l'habillage de façade"}
        lines={bardageLines}
        leftImage={leftImageBardage}
        rightImage={rightImageBardage}
      />
      <StdLeftSection
        title={"Les travaux complémentaires"}
        lines={autresLines}
        leftImage={leftImageAutres}
        rightImage={rightImageAutres}
      />
      <Footer text={"Réalisations"} to={"/"} />

      <TransitionOverlay />
    </>
  );
};

export default Services;
