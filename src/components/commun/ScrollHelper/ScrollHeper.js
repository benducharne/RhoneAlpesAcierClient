import React from "react";
import "./ScrollHelper.scss";

import CircledArrow from "../CircledArrow/CircledArrow";

function ScrollHeper() {
  return (
    <div className="scroll-helper">
      <div className="scroll-text">Scroll</div>
      <CircledArrow onHover={false} rotation={"90"} />
    </div>
  );
}

export default ScrollHeper;
