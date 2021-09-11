import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

import CircledArrow from "../CircledArrow/CircledArrow";

function Footer({ text, to }) {
  return (
    <section className="footer">
      <div className="container">
        <div className="row">
          <div className="page-suivante">Page Suivante</div>
          <div className="btn-row">
            <div className="btn-text">{text}</div>
            <Link to={to}>
              <CircledArrow onHover={true} rotation={"90"} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
