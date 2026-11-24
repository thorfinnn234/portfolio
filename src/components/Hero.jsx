import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ease } from "./motion";

const NAME = "HABEEB OREOLUWA";
const roles = ["Software Developer", "Full-Stack Dev", "Problem Solver"];

export default function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Parallax: layers drift up at different speeds and fade as you scroll
  const nameY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const rolesY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const btnY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={heroRef}
      className="min-h-[60vh] flex items-center justify-center bg-white"
    >
      <motion.div
        style={{ opacity }}
        className="mx-auto max-w-6xl px-4 sm:px-6 text-center"
      >
        {/* Big name – letters rise in one by one */}
        <motion.h1
          style={{ y: nameY }}
          aria-label={NAME}
          className="text-3xl sm:text-5xl md:text-7xl font-semibold tracking-wide text-black leading-tight"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.04, delayChildren: 0.2 } } }}
        >
          {NAME.split(" ").map((word, w) => (
            <React.Fragment key={w}>
              {w > 0 && " "}
              <span className="inline-block whitespace-nowrap" aria-hidden>
                {word.split("").map((char, i) => (
                  <span key={i} className="inline-block overflow-hidden align-bottom">
                    <motion.span
                      className="inline-block"
                      variants={{
                        hidden: { y: "110%" },
                        show: { y: 0, transition: { duration: 0.7, ease } },
                      }}
                    >
                      {char}
                    </motion.span>
                  </span>
                ))}
              </span>
            </React.Fragment>
          ))}
          <motion.span
            className="inline-block text-zinc-400"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 400, damping: 12 }}
          >
            .
          </motion.span>
        </motion.h1>

        {/* Roles */}
        <motion.p
          style={{ y: rolesY }}
          className="mt-4 text-sm sm:text-base text-neutral-600 tracking-wide"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.15, delayChildren: 0.9 } } }}
        >
          {roles.map((role, i) => (
            <motion.span
              key={role}
              className="inline-block"
              variants={{
                hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
                show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5 } },
              }}
            >
              {i > 0 && <span className="mx-3 text-zinc-300">|</span>}
              {role}
            </motion.span>
          ))}
        </motion.p>

        {/* CTA */}
        <motion.div
          style={{ y: btnY }}
          className="mt-10 relative w-fit mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6, ease }}
        >
          <motion.a
            href="#projects"
            className="group relative overflow-hidden flex items-center justify-center border border-black px-8 py-3 text-sm font-medium text-black"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="absolute inset-0 bg-black origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              EXPLORE WORK
            </span>
          </motion.a>

          {/* Bouncing arrow */}
          <motion.span
            className="absolute left-1/2 -translate-x-1/2 mt-3 text-xl text-black"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            ↓
          </motion.span>
        </motion.div>
      </motion.div>
    </section>
  );
}
