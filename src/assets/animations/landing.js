import gsap from "gsap";

let tl = gsap.timeline();

export const initialLanding = () => {
  tl.to("body", { overflowY: "hidden" })
    .to([".header", ".banner", ".cases"], { css: { visibility: "visible" } })
    .to(".white-intro-overlay", 1.2, {
      height: 0,
      ease: "expo.inOut",
      stagger: 0.4,
    })
    .to(".white-intro-overlay", 0, {
      css: { display: "none" },
    })
    .from(".line span", 1.2, {
      y: 100,
      ease: "power4.out",
      skewY: 7,
      stagger: {
        amount: 0.3,
      },
    })
    .to(".overlay-top", 1.2, {
      height: 0,
      ease: "expo.inOut",
      stagger: 0.4,
    })
    .to(".overlay-bottom", 1.2, {
      width: 0,
      ease: "expo.inOut",
      delay: -1.2,
      stagger: {
        amount: 0.4,
      },
    })
    .to(".black-intro-overlay", 0, {
      css: { display: "none" },
    })
    .from(".case-image img", 1.2, {
      scale: 1.4,
      ease: "expo.inOut",
      delay: -1.2,
      stagger: {
        amount: 0.4,
      },
    })
    .to("body", { overflowY: "scroll" });
};

export const refreshLanding = () => {
  tl.to([".header", ".banner", ".cases"], { css: { visibility: "visible" } });
};
