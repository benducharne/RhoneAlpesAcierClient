import React, { useState } from "react";
import "./Cases.scss";
import gsap from "gsap";

import realisation_BK from "../../../assets/images/jpg/realisationsBurgerKing.jpg";
import realisation_EHPAD from "../../../assets/images/jpg/realisationsEHPAD.jpg";
import realisation_Griesser from "../../../assets/images/jpg/realisationsGriesser.jpg";
import realisation_COVED from "../../../assets/images/jpg/realisationsCOVED.jpg";
import realisation_ALDI from "../../../assets/images/jpg/realisationsALDI.jpg";
import realisation_BaiePlast from "../../../assets/images/jpg/realisationsBaiePlast.jpg";

import CircledArrow from "../../commun/CircledArrow/CircledArrow";

const caseStudies = [
  {
    id: 1,
    subtitle: "BG2I Maîtrise d'œuvre",
    title: "Burger King - Bassens (73)",
    component: realisation_BK,
  },
  {
    id: 2,
    subtitle: "YPSUM/SUB Architectes",
    title: "EPHAD - Marcy l'étoile (69)",
    component: realisation_EHPAD,
  },
  {
    id: 3,
    subtitle: "BEATI Architectes",
    title: "GRIESSER - Genas (69)",
    component: realisation_Griesser,
  },
  {
    id: 4,
    subtitle: "FOURMAUX Architecte",
    title: "Baie Plast – Grigny (69)",
    component: realisation_BaiePlast,
  },
  {
    id: 5,
    subtitle: "ALDI Immobilier",
    title: "ALDI - Sevrier (74)",
    component: realisation_ALDI,
  },
  {
    id: 6,
    subtitle: "COINTET Architectes",
    title: "COVED - Béziers (34)",
    component: realisation_COVED,
  },
];

const Cases = () => {
  const [activeGroup, setActiveGroup] = useState(1);

  const prevCases = () => {
    gsap.to(".cases-row", 1.6, { xPercent: -100 * (activeGroup - 2) });
    setActiveGroup(activeGroup - 1);
  };

  const nextCases = () => {
    gsap.to(".cases-row", 1.6, { xPercent: -100 * activeGroup });
    setActiveGroup(activeGroup + 1);
  };

  return (
    <section className="cases">
      <div className="cases-row">
        {caseStudies.map((caseItem) => (
          <div className="case" key={caseItem.id}>
            <div className="case-details">
              <span>{caseItem.subtitle}</span>
              <h2>{caseItem.title}</h2>
            </div>

            <div className="case-image">
              <img src={caseItem.component} alt={caseItem.title} />
            </div>

            <div className="gradient" />
          </div>
        ))}
      </div>

      {activeGroup === 1 ? null : (
        <div className="prev-arrow" onClick={prevCases}>
          <CircledArrow onHover={true} rotation={"180"} />
        </div>
      )}
      {activeGroup === caseStudies.length / 3 ? null : (
        <div className="next-arrow" onClick={nextCases}>
          <CircledArrow onHover={true} rotation={"0"} />
        </div>
      )}
    </section>
  );
};

export default Cases;
