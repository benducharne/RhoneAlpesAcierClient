import React from "react";
import "./CircledArrow.scss";
import cn from "classnames";
import { ReactComponent as RightArrow } from "../../../assets/images/svg/arrow-right.svg";

function CircledArrow({ onHover, rotation }) {
  return (
    <RightArrow
      className={cn("circled-arrow", { "on-hover": onHover })}
      style={{
        transform: `rotate(${rotation}deg)`,
      }}
    />
  );
}

export default CircledArrow;
