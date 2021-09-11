import React from "react";
import "./Banner.scss";
import { Link } from "react-router-dom";

import CircledArrow from "../../commun/CircledArrow/CircledArrow";

const HoBanner = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="row">
          <h2>
            <div className="line">
              <span>L'enveloppe du bâtiment</span>
            </div>
            <div className="line">
              <span>est notre métier.</span>
            </div>
          </h2>
          <div className="btn-row">
            <div className="btn-text">Notre savoir-faire</div>
            <Link to="/savoir-faire">
              <CircledArrow onHover={true} rotation={"0"} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HoBanner;
