import React from "react";
import "./TransitionOverlay.scss";
import { motion } from "framer-motion";

function TransitionOverlay() {
  return (
    <motion.div
      className="transition-overlay"
      exit={{ top: 0 }}
      transition={{ duration: 1, delay: 1 }}
    />
  );
}

export default TransitionOverlay;
