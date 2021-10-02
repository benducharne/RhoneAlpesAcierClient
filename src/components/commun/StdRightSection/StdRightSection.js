import React from "react";
import "./StdRightSection.scss";

const StdRightSection = ({ title, lines, leftImage, rightImage }) => {
  return (
    <section className="stdRight-section">
      <div className="container">
        <div className="row">
          <div className="stdRight-left-layout">
            <img src={leftImage} alt="" />
          </div>
          <div className="stdRight-mid-layout" />
          <div className="stdRight-right-layout">
            <div className="text-container">
              <h4>
                <div className="stdRight-line">
                  <span>{title}</span>
                </div>
              </h4>
              <h2>
                {lines.map((line) => (
                  <div key={line} className="stdRight-line">
                    <span>{line}</span>
                  </div>
                ))}
              </h2>
            </div>
            <img src={rightImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StdRightSection;
