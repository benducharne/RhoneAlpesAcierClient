import React from "react";
import "./StdLeftSection.scss";

const StdLeftSection = ({ title, lines, leftImage, rightImage }) => {
  return (
    <section className="stdLeft-section">
      <div className="container">
        <div className="row">
          <div className="stdLeft-left-layout">
            <div className="text-container">
              <h4>
                <div className="stdLeft-line">
                  <span>{title}</span>
                </div>
              </h4>
              <h2>
                {lines.map((line) => (
                  <div key={line} className="stdLeft-line">
                    <span>{line}</span>
                  </div>
                ))}
              </h2>
            </div>
            <img src={leftImage} alt="" />
          </div>
          <div className="stdLeft-mid-layout" />
          <div className="stdLeft-right-layout">
            <img src={rightImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StdLeftSection;
