import React from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger, inView } from "./motion";

const cardHover = {
  y: -4,
  boxShadow: "0 12px 30px -12px rgba(0,0,0,0.15)",
  transition: { type: "spring", stiffness: 300, damping: 20 },
};

export default function About() {
  return (
    <section id="about" className="bg-white border-t border-zinc-100 py-20">
      <div className="mx-auto max-w-6xl px-6 grid gap-12 md:grid-cols-[1.7fr_1.3fr]">
        {/* Left column – text */}
        <motion.div {...inView} variants={stagger(0.12)}>
          <motion.p
            variants={fadeUp}
            className="text-sm uppercase tracking-[0.25em] text-zinc-500 mb-4"
          >
            About
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-2xl sm:text-3xl font-semibold tracking-tight text-black"
          >
            Building thoughtful, modern web and mobile experiences.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-600"
          >
            I&apos;m <span className="font-medium">Habeeb Oreoluwa</span>, a
            full-stack developer with a focus on building clean, modern and
            user-friendly digital experiences across both web and mobile
            platforms.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-600"
          >
            Most of my work revolves around
            <span className="font-medium"> React.js</span> and
            <span className="font-medium"> Tailwind CSS</span> on the frontend,
            <span className="font-medium"> MongoDB</span> and
            <span className="font-medium"> Supabase</span> for backend data, and
            <span className="font-medium"> React Native</span> for mobile
            applications. I love crafting interfaces that feel smooth, fast and
            intuitive while ensuring the logic behind them stays reliable and
            well-structured.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-600"
          >
            Whether it&apos;s a website, dashboard or mobile app, I enjoy taking
            ideas from concept to polished, functional products — always aiming
            for simplicity, performance and a clean user experience.
          </motion.p>
        </motion.div>

        {/* Right column – quick info */}
        <motion.div
          className="space-y-6"
          {...inView}
          variants={stagger(0.15, 0.3)}
        >
          <motion.div
            variants={fadeUp}
            whileHover={cardHover}
            className="border border-zinc-200 bg-zinc-50 px-5 py-4 text-sm"
          >
            <p className="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-2">
              Snapshot
            </p>
            <div className="space-y-2 text-zinc-700">
              <p>
                <span className="text-zinc-400">Based in:</span>{" "}
                <span className="font-medium text-black">Lagos, Nigeria</span>
              </p>
              <p>
                <span className="text-zinc-400">Focus:</span>{" "}
                <span className="font-medium text-black">
                  Frontend &amp; full-stack web
                </span>
              </p>
              <p className="flex items-center gap-2 flex-wrap">
                <span className="text-zinc-400">Current status:</span>
                <span className="inline-flex items-center gap-2 font-medium text-black">
                  <span className="relative flex h-2 w-2">
                    <motion.span
                      className="absolute inline-flex h-full w-full rounded-full bg-emerald-500"
                      animate={{ scale: [1, 2.2], opacity: [0.6, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  Open to collaborations &amp; roles
                </span>
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            whileHover={cardHover}
            className="border border-zinc-200 bg-zinc-50 px-5 py-4 text-sm"
          >
            <p className="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-2">
              What I enjoy building
            </p>
            <motion.ul className="space-y-1.5 text-zinc-700" variants={stagger(0.08)}>
              {[
                "Clean, minimal landing pages",
                "Dashboards and internal tools",
                "Full-stack products from idea to deploy",
                "Interfaces with smooth, meaningful animations",
              ].map((item) => (
                <motion.li
                  key={item}
                  variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }}
                >
                  • {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
