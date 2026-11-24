import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const RESUME_URL = "/My resumee.pdf";

export default function DownloadResume() {
  return (
    <motion.a
      href={RESUME_URL}
      download
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.8, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed bottom-6 right-4 sm:right-6 z-40 inline-flex items-center gap-2 rounded-full border border-black bg-white px-4 py-2 text-xs sm:text-sm font-medium text-black shadow-md hover:bg-black hover:text-white transition-colors"
    >
      <motion.span
        className="inline-flex"
        animate={{ y: [0, 3, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
      >
        <Download className="h-4 w-4" />
      </motion.span>
      <span>Download Résumé</span>
    </motion.a>
  );
}
