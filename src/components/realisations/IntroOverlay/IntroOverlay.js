import React from "react";
import "./IntroOverlay.scss";

const HoIntroOverlay = () => {
  return (
    <>
      <div className="white-intro-overlay" />

      <div className="black-intro-overlay">
        <div className="top">
          <div className="overlay-top"></div>
          <div className="overlay-top"></div>
          <div className="overlay-top"></div>
        </div>
        <div className="bottom">
          <div className="overlay-bottom"></div>
          <div className="overlay-bottom"></div>
          <div className="overlay-bottom"></div>
        </div>
      </div>
    </>
  );
};

export default HoIntroOverlay;
