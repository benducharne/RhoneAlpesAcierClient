import React from "react";
import "./Navigation.scss";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <section className="navigation">
      <div className="container">
        <div className="nav-columns">
          <div className="nav-column">
            <div className="nav-label">Menu</div>
            <ul className="nav-links">
              <li>
                <NavLink to="/" exact>
                  Réalisations
                </NavLink>
              </li>
              <li>
                <NavLink to="/savoir-faire" exact>
                  Savoir-faire
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" exact>
                  Services
                </NavLink>
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
