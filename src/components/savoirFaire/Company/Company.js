import React, { useEffect } from "react";
import "./Company.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import left_image from "../../../assets/images/company_left.png";
import right_image from "../../../assets/images/company_right.png";

gsap.registerPlugin(ScrollTrigger);

const Company = () => {
  useEffect(() => {
    gsap.from(".company-section .line span", {
      scrollTrigger: {
        trigger: ".company-section",
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

    gsap.to(".company-left-layout img", {
      scrollTrigger: {
        trigger: ".company-section",
        start: "top center",
      },
      css: { clipPath: "inset(0% 0% 0% 0%)" },
      duration: 1,
      ease: "none",
    });

    gsap.to(".company-right-layout img", {
      scrollTrigger: {
        trigger: ".company-section",
        start: "top center",
      },
      css: { clipPath: "inset(0% 0% 0% 0%)" },
      duration: 1,
      ease: "none",
    });
  }, []);

  return (
    <section className="company-section">
      <div className="container">
        <div className="row">
          <div className="company-left-layout">
            <img src={left_image} alt="" />
          </div>
          <div className="company-right-layout">
            <div className="text-container">
              <h2 id="first-h2">
                <div className="line">
                  <span>Laissez nous vous apporter toute notre expertise</span>
                </div>
                <div className="line">
                  <span>en conception, mise en place et réalisation</span>
                </div>
                <div className="line">
                  <span>de l'enveloppe du bâtiment.</span>
                </div>
              </h2>
              <h2 id="second-h2">
                <div className="line">
                  <span>Situés dans l'Est Lyonnais,</span>
                </div>
                <div className="line">
                  <span>
                    nous intervenons sur l'ensemble du territoire français
                  </span>
                </div>
                <div className="line">
                  <span>et sur tous types de chantier :</span>
                </div>
                <div className="line">
                  <span>publics, industriels, commerciaux et tertiaires.</span>
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

export default Company;
