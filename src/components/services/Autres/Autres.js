import React, { useEffect } from "react";
import "./Autres.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import left_image from "../../../assets/images/jpg/servicesAutresGauche.jpg";
import right_image from "../../../assets/images/jpg/servicesAutresDroite.jpg";

gsap.registerPlugin(ScrollTrigger);

const Autres = () => {
  useEffect(() => {
    gsap.from(".autres-section .line span", {
      scrollTrigger: {
        trigger: ".autres-section",
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

    gsap.to(".autres-left-layout img", {
      scrollTrigger: {
        trigger: ".autres-section",
        start: "top center",
      },
      css: { clipPath: "inset(0% 0% 0% 0%)" },
      duration: 1,
      ease: "none",
    });

    gsap.to(".autres-right-layout img", {
      scrollTrigger: {
        trigger: ".autres-section",
        start: "top center",
      },
      css: { clipPath: "inset(0% 0% 0% 0%)" },
      duration: 1,
      ease: "none",
    });
  }, []);

  return (
    <section className="autres-section">
      <div className="container">
        <div className="row">
          <div className="autres-left-layout">
            <div className="text-container">
              <h4>
                <div className="line">
                  <span>Les travaux complémentaires</span>
                </div>
              </h4>
              <h2>
                <div className="line">
                  <span>
                    _ L’éclairement naturel, le désenfumage et l’asservissement
                  </span>
                </div>
                <div className="line">
                  <span>_ La zinguerie et l’évacuation des eaux pluviales</span>
                </div>
                <div className="line">
                  <span>_ Les planchers collaborants</span>
                </div>
                <div className="line">
                  <span>
                    _ Les contrats d’entretien annuel des toitures terrasses
                  </span>
                </div>
                <div className="line">
                  <span>
                    _ La maintenance et mise en conformité de système de
                    désenfumage naturel
                  </span>
                </div>
                <div className="line">
                  <span>
                    _ Accessibilité en toiture : passes acrotères, échelles à
                    crinoline
                  </span>
                </div>
                <div className="line">
                  <span>
                    _ Sécurisation de toiture individuelle et collective
                  </span>
                </div>
              </h2>
            </div>
            <img src={left_image} alt="" />
          </div>
          <div className="autres-right-layout">
            <img src={right_image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Autres;
