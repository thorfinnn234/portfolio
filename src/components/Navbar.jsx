import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-white">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-4 sm:px-6 py-4">
        {/* Logo */}
        <a className="text-3xl font-semibold tracking-wide  text-black">
          Horex<span className="text-zinc-700 text-4xl">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {["about", "projects", "skills", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="relative text-black transition group capitalize"
            >
              {item}
              <span className="pointer-events-none absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-black transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden bg-black/5 p-2 rounded-lg text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="relative h-5 w-5">
            <Menu
              className={`absolute inset-0 h-5 w-5 transition-opacity duration-200 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <X
              className={`absolute inset-0 h-5 w-5 transition-opacity duration-200 ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden border-t border-black/5 bg-white overflow-hidden transform transition-all duration-300 origin-top ${
          isOpen ? "max-h-48 opacity-100 scale-y-100" : "max-h-0 opacity-0 scale-y-95"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex flex-col gap-4 text-sm">
          {["about", "projects", "skills", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-black capitalize"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
