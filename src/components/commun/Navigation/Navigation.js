import React from "react";
import "./Navigation.scss";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <section className="navigation">
      <div className="container">
        <div className="nav-columns">
          <div className="nav-column">
            <div className="nav-label">Menu</div>
            <ul className="nav-links">
              <li>
                <Link to="/">Réalisations</Link>
              </li>
              <li>
                <Link to="/savoir-faire">Savoir-faire</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
            </ul>
          </div>
          <div className="nav-column">
            <div className="nav-label">Contact</div>
            <div className="nav-infos">
              <ul className="nav-info">
                <li className="nav-info-label">Téléphone</li>
                <li>+33 (0)4 78 74 35 06</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Localisation</li>
                <li>8 rue Marcel Dassault, 69740 Genas, France</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Email</li>
                <li>contact@rhone-alpes-acier.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
