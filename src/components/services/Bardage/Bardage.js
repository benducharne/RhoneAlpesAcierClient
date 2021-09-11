import React, { useEffect } from "react";
import "./Bardage.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import left_image from "../../../assets/images/jpg/servicesBardageGauche.jpg";
import right_image from "../../../assets/images/jpg/servicesBardageDroite.jpg";

gsap.registerPlugin(ScrollTrigger);

const Bardage = () => {
  useEffect(() => {
    gsap.from(".bardage-section .line span", {
      scrollTrigger: {
        trigger: ".bardage-section",
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

    gsap.to(".bardage-left-layout img", {
      scrollTrigger: {
        trigger: ".bardage-section",
        start: "top center",
      },
      css: { clipPath: "inset(0% 0% 0% 0%)" },
      duration: 1,
      ease: "none",
    });

    gsap.to(".bardage-right-layout img", {
      scrollTrigger: {
        trigger: ".bardage-section",
        start: "top center",
      },
      css: { clipPath: "inset(0% 0% 0% 0%)" },
      duration: 1,
      ease: "none",
    });
  }, []);

  return (
    <section className="bardage-section">
      <div className="container">
        <div className="row">
          <div className="bardage-left-layout">
            <img src={left_image} alt="" />
          </div>
          <div className="bardage-right-layout">
            <div className="text-container">
              <h4>
                <div className="line">
                  <span>Le bardage et l'habillage de façade</span>
                </div>
              </h4>
              <h2>
                <div className="line">
                  <span>_ Bardage simple et double peau</span>
                </div>
                <div className="line">
                  <span>_ Panneaux sandwich</span>
                </div>
                <div className="line">
                  <span>_ Réfection façades existantes</span>
                </div>
                <div className="line">
                  <span>
                    _ Façade décorative : cassettes, bardage plan, panneaux
                    composite bois,
                  </span>
                </div>
                <div className="line">
                  <span>aluminium, fibre-ciment, pierre et bardage bois</span>
                </div>
              </h2>
            </div>
            <img src={right_image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bardage;
