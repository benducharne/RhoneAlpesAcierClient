import React, { useEffect } from "react";
import "./Etancheite.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import left_image from "../../../assets/images/jpg/servicesEtancheiteGauche.jpg";
import right_image from "../../../assets/images/jpg/servicesEtancheiteDroite.jpg";

gsap.registerPlugin(ScrollTrigger);

const Etancheite = () => {
  useEffect(() => {
    gsap.from(".etancheite-section .line span", {
      scrollTrigger: {
        trigger: ".etancheite-section",
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

    gsap.to(".etancheite-left-layout img", {
      scrollTrigger: {
        trigger: ".etancheite-section",
        start: "top center",
      },
      css: { clipPath: "inset(0% 0% 0% 0%)" },
      duration: 1,
      ease: "none",
    });

    gsap.to(".etancheite-right-layout img", {
      scrollTrigger: {
        trigger: ".etancheite-section",
        start: "top center",
      },
      css: { clipPath: "inset(0% 0% 0% 0%)" },
      duration: 1,
      ease: "none",
    });
  }, []);

  return (
    <section className="etancheite-section">
      <div className="container">
        <div className="row">
          <div className="etancheite-left-layout">
            <img src={left_image} alt="" />
          </div>
          <div className="etancheite-right-layout">
            <div className="text-container">
              <h4>
                <div className="line">
                  <span>L'étanchéité du bâtiment</span>
                </div>
              </h4>
              <h2>
                <div className="line">
                  <span>
                    _ Toitures terrasses accessibles, inaccessibles,
                    végétalisation, murs enterrés
                  </span>
                </div>
                <div className="line">
                  <span>
                    _ Isolants en laine minérale, mousse polyuréthane,
                    polystyrène
                  </span>
                </div>
                <div className="line">
                  <span>_ Supports béton, bois et bac acier</span>
                </div>
                <div className="line">
                  <span>
                    _ Membranes d’étanchéité : bitume, PVC/TPO et EPDM
                  </span>
                </div>
                <div className="line">
                  <span>
                    _ Protections par gravillons, dalles béton/céramique/bois
                    sur plot
                  </span>
                </div>
                <div className="line">
                  <span>_ La réfection d’anciennes étanchéités</span>
                </div>
                <div className="line">
                  <span>
                    _ Systèmes acoustiques suivant descriptifs fournisseurs
                  </span>
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

export default Etancheite;
