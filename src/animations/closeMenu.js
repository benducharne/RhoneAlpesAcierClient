import gsap from "gsap";

let tl = gsap.timeline();

const closeMenu = () => {
  tl.to(".navigation", 1, {
    css: { height: "1px" },
  })
    .to(".navigation", 0, {
      css: { display: "none" },
    })
    .to("#Path_1", 0.4, {
      delay: -0.6,
      css: {
        strokeDashoffset: 10,
        strokeDasharray: 10,
      },
    })
    .to("#Path_2", 0.4, {
      delay: -0.6,
      css: {
        strokeDashoffset: 10,
        strokeDasharray: 10,
      },
    })
    .to("#Line_1", 0.4, {
      delay: -0.6,
      css: {
        strokeDashoffset: 40,
        strokeDasharray: 40,
      },
    })
    .to(".hamburger-menu span", 0.6, {
      delay: -0.6,
      scaleX: 1,
      transformOrigin: "50% 0%",
      ease: "expo.inOut",
    })
    .to(".hamburger-menu-close", 0, {
      delay: -0.1,
      css: { display: "none" },
    });
};

export default closeMenu;
