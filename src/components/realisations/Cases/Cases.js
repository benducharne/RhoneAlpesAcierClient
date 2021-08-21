import React from "react";
import "./Cases.scss";
import { ReactComponent as CasesNext } from "../../../assets/images/arrow-right.svg";
import { ReactComponent as CasesPrev } from "../../../assets/images/arrow-left.svg";
import case_BK from "../../../assets/images/case_BK.png";
import case_EHPAD from "../../../assets/images/case_EHPAD.png";
import case_Griesser from "../../../assets/images/case_Griesser.png";

const caseStudies = [
  {
    id: 1,
    subtitle: "BG2I Maîtrise d'œuvre",
    title: "Burger King - Bassens (73)",
    component: case_BK,
  },
  {
    id: 2,
    subtitle: "YPSUM/SUB Architectes",
    title: "EPHAD - Marcy l'étoile (69)",
    component: case_EHPAD,
  },
  {
    id: 3,
    subtitle: "BEATI Architectes",
    title: "GRIESSER - Genas (69)",
    component: case_Griesser,
  },
];

const HoCases = () => {
  return (
    <section className="cases">
      <div className="container-fluid">
        <div className="cases-navigation">
          <div className="cases-arrow prev disabled">
            <CasesPrev />
          </div>
          <div className="cases-arrow next">
            <CasesNext />
          </div>
        </div>
        <div className="row">
          {caseStudies.map((caseItem) => (
            <div className="case" key={caseItem.id}>
              <div className="case-details">
                <span>{caseItem.subtitle}</span>
                <h2>{caseItem.title}</h2>
              </div>
              <div className="case-image">
                <img src={caseItem.component} alt={caseItem.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HoCases;
