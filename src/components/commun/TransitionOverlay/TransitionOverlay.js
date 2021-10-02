import React from "react";
import "./TransitionOverlay.scss";
import { motion } from "framer-motion";

function TransitionOverlay() {
  return (
    <motion.div
      className="transition-overlay"
      exit={{ top: 0 }}
      transition={{ duration: 1, delay: 0, ease: [0.42, 0, 0.58, 1] }}
    />
  );
}

export default TransitionOverlay;
