import React, { useEffect } from "react";
import "./Toiture.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import left_image from "../../../assets/images/jpg/savoirDroite.jpg";
import right_image from "../../../assets/images/jpg/servicesToitureDroite.jpg";

gsap.registerPlugin(ScrollTrigger);

const Toiture = () => {
  useEffect(() => {
    gsap.from(".toiture-section .line span", {
      scrollTrigger: {
        trigger: ".toiture-section",
        start: "top center",
      },
      duration: 1.8,
      y: 100,
      ease: "power4.out",
      skewY: 7,
      stagger: {
        amount: 0.3,
      },
    });

    gsap.to(".toiture-left-layout img", {
      scrollTrigger: {
        trigger: ".toiture-section",
        start: "top center",
      },
      css: { clipPath: "inset(0% 0% 0% 0%)" },
      duration: 1,
      ease: "none",
    });

    gsap.to(".toiture-right-layout img", {
      scrollTrigger: {
        trigger: ".toiture-section",
        start: "top center",
      },
      css: { clipPath: "inset(0% 0% 0% 0%)" },
      duration: 1,
      ease: "none",
    });
  }, []);

  return (
    <section className="toiture-section">
      <div className="container">
        <div className="row">
          <div className="toiture-left-layout">
            <div className="text-container">
              <h4>
                <div className="line">
                  <span>La toiture sèche, chaude et panneaux isolés</span>
                </div>
              </h4>
              <h2>
                <div className="line">
                  <span>_ Couverture sèche, zinc, polycarbonate</span>
                </div>
                <div className="line">
                  <span>
                    _ Isolation laine minérale en sous-face feutre tendu/plafond
                    shedisol
                  </span>
                </div>
                <div className="line">
                  <span>_ Système anti-condensation</span>
                </div>
                <div className="line">
                  <span>_ Couverture en panneaux sandwich</span>
                </div>
              </h2>
            </div>
            <img src={left_image} alt="" />
          </div>
          <div className="toiture-right-layout">
            <img src={right_image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Toiture;
