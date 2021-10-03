import gsap from "gsap";

let tl = gsap.timeline();

const openMenu = (width, height) => {
  let responsiveHeight = height / 2 + 1;

  if (width <= 768) {
    responsiveHeight = height - 80 + 1;
  }

  tl.to(".navigation", 0, {
    css: { display: "block" },
  })
    .to(".navigation", 1, {
      css: {
        height: `${responsiveHeight}px`,
      },
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
