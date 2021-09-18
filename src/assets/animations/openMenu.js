import gsap from "gsap";

let tl = gsap.timeline();

const openMenu = () => {
  let navigationHeight = "50vh";
  if (window.innerWidth <= 768) {
    navigationHeight = "100vh - 80px";
  }

  tl.to(".navigation", 0, {
    css: { display: "block" },
  })
    .to(".navigation", 1, {
      css: { height: `calc(${navigationHeight} + 1px)` },
    })
    .to(".hamburger-menu span", 0.6, {
      delay: -1,
      scaleX: 0,
      transformOrigin: "50% 0%",
      ease: "expo.inOut",
    })
    .to("#Path_1", 0.4, {
      delay: -0.6,
      css: {
        strokeDashoffset: 10,
        strokeDasharray: 5,
      },
    })
    .to("#Path_2", 0.4, {
      delay: -0.6,
      css: {
        strokeDashoffset: 10,
        strokeDasharray: 20,
      },
    })
    .to("#Line_1", 0.4, {
      delay: -0.6,
      css: {
        strokeDashoffset: 40,
        strokeDasharray: 18,
      },
    })
    .to(".hamburger-menu-close", 0.6, {
      delay: -0.8,
      css: { display: "block" },
    });
};

export default openMenu;
