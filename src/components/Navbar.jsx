import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { ease } from "./motion";

const links = [
  { label: "about", to: "/#about" },
  { label: "projects", to: "/#projects" },
  { label: "skills", to: "/#skills" },
  { label: "blog", to: "/blog" },
  { label: "contact", to: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [hovered, setHovered] = useState(null);
  const { pathname } = useLocation();

  // Reading-progress bar
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  // Hide navbar when scrolling down, show when scrolling up
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 150 && !isOpen);
  });

  useEffect(() => setIsOpen(false), [pathname]);

  // Re-scroll even when the hash is already in the URL
  const handleClick = (to) => {
    setIsOpen(false);
    if (pathname === "/" && to.startsWith("/#")) {
      document
        .getElementById(to.slice(2))
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50 border-b border-black/5 bg-white/90 backdrop-blur"
      initial={{ y: -80 }}
      animate={{ y: hidden ? -80 : 0 }}
      transition={{ duration: 0.35, ease }}
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between px-4 sm:px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-3xl font-semibold tracking-wide text-black">
          <motion.span
            className="inline-block"
            whileHover={{ rotate: -4, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            HO<span className="text-zinc-700 text-4xl">.</span>
          </motion.span>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-2 text-sm"
          onMouseLeave={() => setHovered(null)}
        >
          {links.map((item) => {
            const active =
              item.to === "/blog" && pathname.startsWith("/blog");
            return (
              <Link
                key={item.label}
                to={item.to}
                onMouseEnter={() => setHovered(item.label)}
                onClick={() => handleClick(item.to)}
                className="relative px-3 py-1.5 capitalize text-black"
              >
                {hovered === item.label && (
                  <motion.span
                    layoutId="nav-hover"
                    className="absolute inset-0 bg-black/5"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className={`relative ${active ? "font-semibold" : ""}`}>
                  {item.label}
                </span>
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute left-3 right-3 -bottom-0.5 h-0.5 bg-black"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden bg-black/5 p-2 rounded-lg text-black"
          onClick={() => setIsOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isOpen ? "x" : "menu"}
              className="block"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden border-t border-black/5 bg-white overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease }}
          >
            <motion.div
              className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex flex-col gap-4 text-sm"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.06 } } }}
            >
              {links.map((item) => (
                <motion.div
                  key={item.label}
                  variants={{
                    hidden: { opacity: 0, x: -12 },
                    show: { opacity: 1, x: 0 },
                  }}
                >
                  <Link
                    to={item.to}
                    className="text-black capitalize"
                    onClick={() => handleClick(item.to)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll progress */}
      <motion.div
        className="absolute left-0 bottom-0 h-0.5 w-full bg-black origin-left"
        style={{ scaleX: progress }}
      />
    </motion.header>
  );
}
