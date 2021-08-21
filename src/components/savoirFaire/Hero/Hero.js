import React, { useEffect } from "react";
import "./Hero.scss";
import gsap from "gsap";

const Hero = () => {
  useEffect(() => {
    let tl = gsap.timeline();

    tl.from(".hero-section .line span", 1.8, {
      y: 100,
      ease: "power4.out",
      delay: 0.5,
      skewY: 7,
      stagger: {
        amount: 0.3,
      },
    });
  }, []);

  return (
    <section className="hero-section">
      <div className="container">
        <div className="row">
          <h4>
            <div className="line">
              <span>Savoir-faire</span>
            </div>
          </h4>
          <h2>
            <div className="line">
              <span>Créée en 1986, Rhône-Alpes Acier est</span>
            </div>
            <div className="line">
              <span>une structure dynamique à taille humaine</span>
            </div>
            <div className="line">
              <span>qui dispose d’un bureau d’étude intégré.</span>
            </div>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
