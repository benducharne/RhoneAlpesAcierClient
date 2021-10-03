import React from "react";
import "./IntroOverlay.scss";
import { useViewport } from "../../../assets/hooks/useViewport";

const IntroOverlay = () => {
  const { height } = useViewport();

  return (
    <>
      <div
        className="white-intro-overlay"
        style={{
          height: `${height}px`,
        }}
      />

      <div className="black-intro-overlay">
        <div
          className="top"
          style={{
            height: `${height / 2}px`,
          }}
        >
          <div className="overlay-top"></div>
          <div className="overlay-top"></div>
          <div className="overlay-top"></div>
        </div>
        <div
          className="bottom"
          style={{
            height: `${height / 2}px`,
          }}
        >
          <div className="overlay-bottom"></div>
          <div className="overlay-bottom"></div>
          <div className="overlay-bottom"></div>
        </div>
      </div>
    </>
  );
};

export default IntroOverlay;
