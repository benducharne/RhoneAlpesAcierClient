import gsap from "gsap";

const galleryScroll = () => {
  let sections = gsap.utils.toArray(".gallery-item-wrapper");
  let gallery = document.querySelector(".gallery");

  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      start: "top top",
      trigger: gallery,
      pin: true,
      scrub: 1,
      end: () => `+=${gallery.offsetWidth}`,
    },
  });
};

export default galleryScroll;
