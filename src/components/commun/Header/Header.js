import React, { useEffect, useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { useViewport } from "../../../assets/hooks/useViewport";

import { ReactComponent as UpArrow } from "../../../assets/images/svg/arrow-up.svg";
import openMenu from "../../../assets/animations/openMenu";
import closeMenu from "../../../assets/animations/closeMenu";
import Logo from "../../../assets/images/png/Logo.png";

const Header = ({ history }) => {
  const [menuState, setMenuState] = useState({ menuOpened: false });
  const { width, height } = useViewport();

  useEffect(() => {
    //Listening for page changes.
    history.listen(() => {
      setMenuState({ menuOpened: false });
    });
    if (menuState.menuOpened === true) {
      openMenu(width, height);
    } else if (menuState.menuOpened === false) {
      closeMenu();
    }
  });

  return (
    <section className="header">
      <div className="container">
        <div className="row v-center space-between">
          <Link to="/">
            <img src={Logo} alt="" className="logo" />
          </Link>
          <div
            className="nav-toggle"
            onClick={() => setMenuState({ menuOpened: !menuState.menuOpened })}
          >
            <div className="hamburger-menu">
              <span className="top-span"></span>
              <span className="bottom-span"></span>
            </div>
            <div className="hamburger-menu-close">
              <UpArrow />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default withRouter(Header);
