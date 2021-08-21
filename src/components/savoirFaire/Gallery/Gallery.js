import React, { useState, useEffect, useRef } from "react";
import "./Gallery.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import cn from "classnames";

import plans from "../../../assets/images/plans.png";
import materiaux from "../../../assets/images/materiaux.png";
import acoustique from "../../../assets/images/acoustique.png";
import thermique from "../../../assets/images/thermique.png";

import useOnScreen from "../../../assets/hooks/useOnScreen";

gsap.registerPlugin(ScrollTrigger);

const images = [
  {
    src: plans,
    title: "Réalisation des plans d'étude",
  },
  {
    src: materiaux,
    title: "Maîtrise et ingénierie des matériaux",
  },
  {
    src: acoustique,
    title: "Estimation de comportement acoustique",
  },
  {
    src: thermique,
    title: "Estimation et vérification des performances thermiques",
  },
];

function GalleryItem({ index, src, title, updateActiveImage }) {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref, 0.5);

  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index);
    }
  }, [onScreen, index]);

  return (
    <div
      className={cn("gallery-item-wrapper", { "is-reveal": onScreen })}
      ref={ref}
    >
      <div></div>
      <div className={"gallery-item"}>
        <div className="gallery-item-info">
          <h1 className="gallery-info-title">{title}</h1>
        </div>
        <div
          className="gallery-item-image"
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(1);

  const handleUpdateActiveImage = (index) => {
    setActiveImage(index + 1);
  };

  const ref = useRef(null);

  useEffect(() => {
    let sections = gsap.utils.toArray(".gallery-item-wrapper");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        start: "top top",
        trigger: ref.current,
        pin: true,
        scrub: 0.5,
        snap: 1 / (sections.length - 1),
        end: () => `+=${ref.current.offsetWidth}`,
      },
    });
  }, []);

  return (
    <section className="gallery-wrap">
      <div className="gallery" ref={ref}>
        <div className="gallery-counter">
          <span>{activeImage}</span>
          <span className="divider" />
          <span>{images.length}</span>
        </div>

        {images.map((image, index) => (
          <GalleryItem
            key={image.src}
            index={index}
            {...image}
            updateActiveImage={handleUpdateActiveImage}
          />
        ))}
      </div>
    </section>
  );
}
