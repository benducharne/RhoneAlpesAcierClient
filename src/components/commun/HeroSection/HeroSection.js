import React, { useEffect } from "react";
import "./HeroSection.scss";
import gsap from "gsap";
import ScrollHeper from "../ScrollHelper/ScrollHeper";
import useWindowDimensions from "../../../assets/hooks/useWindowDimensions";

const HeroSection = ({ title, longLines, shortLines }) => {
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    let tl = gsap.timeline();
    tl.to("body", { overflowY: "hidden" })
      .to([".hero-section", ".header"], { css: { visibility: "visible" } })
      .from(".hero-section .line span", 1.8, {
        y: 100,
        ease: "power4.out",
        skewY: 7,
        stagger: {
          amount: 0.3,
        },
      })
      .from(".header", 1.5, {
        opacity: 0,
        ease: "power4.out",
      })
      .from(
        ".scroll-helper",
        1.5,
        {
          opacity: 0,
          ease: "power4.out",
        },
        "-=1.5"
      )
      .to(".scroll-helper", {
        opacity: 0,
        ease: "none",
        immediateRender: false,
        scrollTrigger: {
          start: "top 70%",
          end: "bottom 40%",
          trigger: ".scroll-helper",
          scrub: true,
        },
      })
      .to("body", { overflowY: "scroll" });
  }, []);

  return (
    <section className="hero-section">
      <div className="container">
        <div className="row">
          <h4>
            <div className="line">
              <span>{title}</span>
            </div>
          </h4>
          {width > 768 ? (
            <h2>
              {longLines.map((line) => (
                <div key={line} className="line">
                  <span>{line}</span>
                </div>
              ))}
            </h2>
          ) : (
            <h2>
              {shortLines.map((line) => (
                <div key={line} className="line">
                  <span>{line}</span>
                </div>
              ))}
            </h2>
          )}
        </div>
      </div>
      <ScrollHeper />
    </section>
  );
};

export default HeroSection;
