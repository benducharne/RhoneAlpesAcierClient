import React, { useState, useEffect, useRef } from "react";
import "./Gallery.scss";
import cn from "classnames";

import plans from "../../../assets/images/jpg/savoirPlans.jpg";
import materiaux from "../../../assets/images/jpg/savoirMateriaux.jpg";
import acoustique from "../../../assets/images/jpg/savoirAcoustique.jpg";
import thermique from "../../../assets/images/jpg/savoirThermique.jpg";

import useOnScreen from "../../../assets/hooks/useOnScreen";

import galleryScroll from "../../../assets/animations/galleryScroll";

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

  useEffect(() => {
    galleryScroll();
  }, []);

  return (
    <section className="gallery-wrap">
      <div className="gallery">
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
