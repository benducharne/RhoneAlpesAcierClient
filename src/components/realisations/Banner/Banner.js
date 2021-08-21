import React from "react";
import "./Banner.scss";
import { ReactComponent as RightArrow } from "../../../assets/images/arrow-right.svg";

const HoBanner = () => {
  return (
    <section className="main">
      <div className="container">
        <div className="row">
          <h2>
            <div className="line" id="first-line">
              <span>L'enveloppe du bâtiment</span>
            </div>
            <div className="line">
              <span>est notre métier.</span>
            </div>
          </h2>
          <div className="btn-row">
            <a href="/savoir-faire">
              Notre savoir-faire <RightArrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HoBanner;
