import React from "react";
import { Download } from "lucide-react";

const RESUME_URL = "/resume.pdf"; 
// 👉 put your actual resume file as public/resume.pdf

export default function DownloadResume() {
  return (
    <a
      href={RESUME_URL}
      download
      className="
        fixed 
        bottom-6 right-4 sm:right-6 
        z-40
        inline-flex items-center gap-2
        rounded-full
        border border-black
        bg-white
        px-4 py-2
        text-xs sm:text-sm font-medium
        text-black
        shadow-md
        hover:bg-black hover:text-white
        transition-colors
      "
    >
      <Download className="h-4 w-4" />
      <span>Download Résumé</span>
    </a>
  );
}
