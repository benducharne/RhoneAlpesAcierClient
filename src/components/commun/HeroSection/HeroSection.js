import React, { useEffect, useState } from "react";
import "./HeroSection.scss";
import gsap from "gsap";
import ScrollHeper from "../ScrollHelper/ScrollHeper";
import { useViewport } from "../../../assets/hooks/useViewport";

const HeroSection = ({ title, longLines, shortLines, displayScrollHelper }) => {
  const [initialScrollZero, setInitialScrollZero] = useState(true);
  const { width, height } = useViewport();

  useEffect(() => {
    if (window.scrollY !== 0) {
      setInitialScrollZero(false);
    } else {
      setInitialScrollZero(true);
    }

    let tl = gsap.timeline();
    tl.to("body", {
      overflowY: window.scrollY === 0 ? "hidden" : "scroll",
    })
      .to([".hero-section", ".header"], { css: { visibility: "visible" } })
      .from(".hero-section .line span", 1, {
        y: 100,
        ease: "power4.out",
        skewY: 7,
        stagger: {
          amount: 0.3,
        },
      })
      .from(".header", 1, {
        opacity: 0,
        ease: "power4.out",
      })
      .from(
        ".scroll-helper",
        1,
        {
          opacity: 0,
          ease: "power4.out",
        },
        "-=1"
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
    <section
      className="hero-section"
      style={{
        height: `${
          width <= 768 || height <= 600 ? height - 80 : height - 100
        }px`,
      }}
    >
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
      {initialScrollZero && displayScrollHelper ? <ScrollHeper /> : null}
    </section>
  );
};

export default HeroSection;
