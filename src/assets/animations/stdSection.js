import gsap from "gsap";

export const stdRightAnimation = () => {
  var sections = gsap.utils.toArray(".stdRight-section");
  sections.forEach((section) => {
    console.log(section);
    var spans = section.querySelectorAll(".stdRight-line span");
    console.log(spans);
    spans.forEach((span) => {
      gsap.from(span, {
        scrollTrigger: {
          trigger: section,

          start: "top center",
        },
        duration: 1,
        y: 100,
        ease: "power4.out",
        skewY: 7,
        stagger: {
          amount: 0.3,
        },
      });
    });

    var leftImage = section.querySelector(".stdRight-left-layout img");
    gsap.to(leftImage, {
      scrollTrigger: {
        trigger: section,
        start: "top center",
      },
      css: { clipPath: "inset(0% 0% 0% 0%)" },
      duration: 0.4,
      ease: "none",
    });

    var rightImage = section.querySelector(".stdRight-right-layout img");
    gsap.to(rightImage, {
      scrollTrigger: {
        trigger: section,
        start: "top center",
      },
      css: { clipPath: "inset(0% 0% 0% 0%)" },
      duration: 1,
      ease: "none",
    });
  });
};

export const stdLeftAnimation = () => {
  var sections = gsap.utils.toArray(".stdLeft-section");
  sections.forEach((section) => {
    var spans = section.querySelectorAll(".stdLeft-line span");
    spans.forEach((span) => {
      gsap.from(span, {
        scrollTrigger: {
          trigger: section,
          start: "top center",
        },
        duration: 1,
        y: 100,
        ease: "power4.out",
        skewY: 7,
        stagger: {
          amount: 0.3,
        },
      });
    });

    var leftImage = section.querySelector(".stdLeft-left-layout img");
    gsap.to(leftImage, {
      scrollTrigger: {
        trigger: section,
        start: "top center",
      },
      css: { clipPath: "inset(0% 0% 0% 0%)" },
      duration: 1,
      ease: "none",
    });

    var rightImage = section.querySelector(".stdLeft-right-layout img");
    gsap.to(rightImage, {
      scrollTrigger: {
        trigger: section,
        start: "top center",
      },
      css: { clipPath: "inset(0% 0% 0% 0%)" },
      duration: 0.4,
      ease: "none",
    });
  });
};
