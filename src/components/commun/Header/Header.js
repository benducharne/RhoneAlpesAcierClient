import React, { useEffect, useState } from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

import { ReactComponent as UpArrow } from "../../../assets/images/up-arrow-circle.svg";
import openMenu from "../../../animations/openMenu";
import closeMenu from "../../../animations/closeMenu";
import Logo from "../../../assets/images/Logo.png";

const Header = ({ history }) => {
  const [menuState, setMenuState] = useState({ menuOpened: false });

  useEffect(() => {
    //Listening for page changes.
    history.listen(() => {
      setMenuState({ menuOpened: false });
    });
    if (menuState.menuOpened === true) {
      openMenu();
    } else if (menuState.menuOpened === false) {
      closeMenu();
    }
  });

  return (
    <section className="header">
      <div className="container">
        <div className="row v-center space-between">
          <NavLink to="/" exact>
            <img src={Logo} alt="" className="logo" />
          </NavLink>
          <div className="nav-toggle">
            <div
              onClick={() => setMenuState({ menuOpened: true })}
              className="hamburger-menu"
            >
              <span className="top-span"></span>
              <span className="bottom-span"></span>
            </div>
            <div
              className="hamburger-menu-close"
              onClick={() => setMenuState({ menuOpened: false })}
            >
              <UpArrow />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default withRouter(Header);
