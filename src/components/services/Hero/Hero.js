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
              <span>Services</span>
            </div>
          </h4>
          <h2>
            <div className="line">
              <span>Notre activité est répartie en</span>
            </div>
            <div className="line">
              <span>4 domaines d’expertise</span>
            </div>
            <div className="line">
              <span>répondant à l’ensemble des exigences</span>
            </div>
            <div className="line">
              <span>thermiques, sécuritaires et esthétiques.</span>
            </div>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
