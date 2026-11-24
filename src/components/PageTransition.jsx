import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { ease } from "./motion";

// Wraps each page: fades/slides pages in & out and handles scroll position.
export default function PageTransition({ children }) {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [hash]);

  return (
    <motion.main
      className="pt-20 pb-16"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease } }}
      exit={{ opacity: 0, y: -16, transition: { duration: 0.3, ease } }}
    >
      {children}
    </motion.main>
  );
}
