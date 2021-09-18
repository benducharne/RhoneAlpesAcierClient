import gsap from "gsap";

let tl = gsap.timeline();

const landing = () => {
  tl.to("body", { overflowY: "hidden" })
    .to([".header", ".banner", ".cases"], { css: { visibility: "visible" } })
    .to(".white-intro-overlay", 1, {
      height: 0,
      ease: "expo.inOut",
      stagger: 0.4,
    })
    .to(".white-intro-overlay", 0, {
      css: { display: "none" },
    })
    .from(".line span", 1.8, {
      y: 100,
      ease: "power4.out",
      delay: 1,
      skewY: 7,
      stagger: {
        amount: 0.3,
      },
    })
    .to(".overlay-top", 1.6, {
      height: 0,
      ease: "expo.inOut",
      stagger: 0.4,
    })
    .to(".overlay-bottom", 1.6, {
      width: 0,
      ease: "expo.inOut",
      delay: -0.8,
      stagger: {
        amount: 0.4,
      },
    })
    .to(".black-intro-overlay", 0, {
      css: { display: "none" },
    })
    .from(".case-image img", 1.6, {
      scale: 1.4,
      ease: "expo.inOut",
      delay: -2,
      stagger: {
        amount: 0.4,
      },
    })
    .to("body", { overflowY: "scroll" });
};

export default landing;
