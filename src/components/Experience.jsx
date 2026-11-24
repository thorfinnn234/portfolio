import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { ease, fadeUp, inView } from "./motion";

const experiences = [
  {
    id: "independent",
    label: "Independent",
    company: "Independent / Personal Projects",
    title: "Independent Full-Stack Developer",
    period: "2023 — Present",
    points: [
      "Building real-world web/mobile apps using React, React Native, Tailwind CSS, MongoDB and Supabase.",
      "Focus on clean UI, responsive layouts and smooth animations.",
      "Handling design → frontend → backend → deployment workflow.",
    ],
  },
  {
    id: "gotickets",
    label: "GoTickets",
    company: "GoTickets · Personal Project",
    title: "Full-Stack Developer",
    period: "2024",
    points: [
      "Built a ticketing platform with events, merch, checkout and emails.",
      "Implemented authentication, carts, and admin dashboards.",
      "Designed full UI using React + Tailwind.",
    ],
  },
  {
    id: "nestnova",
    label: "NestNova",
    company: "NestNova · Personal Project",
    title: "Front-end & API Integration",
    period: "2024",
    points: [
      "Created clean real estate UI with property filters.",
      "Integrated API endpoints for agents and listings.",
      "Handled user favorites and detail pages.",
    ],
  },
  {
    id: "velvet",
    label: "Velvet Plate",
    company: "Velvet Plate · Personal Project",
    title: "Full-Stack Developer",
    period: "2025",
    points: [
      "Designed a food delivery platform with menus and order flow.",
      "Built backend logic with Node.js + MongoDB.",
      "Implemented cart, checkout, and UI animations.",
    ],
  },
  {
    id: "multimart",
    label: "MultiMart",
    company: "MultiMart · Group Projects",
    title: "Frontend Developer",
    period: "2024",
    points: [
      "Created a simple Ecommerce website with cart and categories.",
      "Focused on readability and clean minimal UI.",
      "Built reusable components with React.",
      "Group Project",
    ],
  },
  {
    id: "others",
    label: "More",
    company: "Other Projects",
    title: "Additional Work",
    period: "Ongoing",
    points: [
      "OMDHairville — ecommerce for wig brand.",
      "Sonara — music interest mobile app.",
      "Several UI experiments, dashboards and animations.",
    ],
  },
];

export default function Experience() {
  const [activeId, setActiveId] = useState("independent");
  const active = experiences.find((exp) => exp.id === activeId);

  return (
    <section id="experience" className="bg-white py-20 border-t border-zinc-200">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          {...inView}
          variants={fadeUp}
          className="text-3xl sm:text-4xl font-semibold tracking-tight text-black mb-10"
        >
          Experience<span className="text-black">.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease }}
          className="flex flex-col gap-10 md:flex-row"
        >
          {/* LEFT TABS */}
          <div className="md:w-1/3">
            <div className="relative border-l border-black/10">
              {experiences.map((exp) => {
                const isActive = exp.id === activeId;
                return (
                  <button
                    key={exp.id}
                    onClick={() => setActiveId(exp.id)}
                    className={`relative w-full text-left pl-5 pr-3 py-3 text-sm transition-colors ${
                      isActive ? "text-black font-semibold" : "text-zinc-500 hover:text-black"
                    }`}
                  >
                    {/* Sliding active indicator + highlight */}
                    {isActive && (
                      <>
                        <motion.span
                          layoutId="exp-indicator"
                          className="absolute -left-px top-0 h-full w-0.5 bg-black"
                          transition={{ type: "spring", stiffness: 400, damping: 32 }}
                        />
                        <motion.span
                          layoutId="exp-bg"
                          className="absolute inset-0 bg-zinc-50"
                          transition={{ type: "spring", stiffness: 400, damping: 32 }}
                        />
                      </>
                    )}
                    <span className="relative">{exp.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT DETAILS */}
          <div className="md:w-2/3 min-h-[260px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease }}
              >
                <p className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-2">
                  {active.company}
                </p>

                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-black">
                  {active.title}
                </h3>

                <p className="mt-1 text-xs text-zinc-500">{active.period}</p>

                <ul className="mt-6 space-y-3 text-sm text-zinc-700">
                  {active.points.map((point, idx) => (
                    <motion.li
                      key={idx}
                      className="flex gap-3"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + idx * 0.07, duration: 0.35 }}
                    >
                      <CheckCircle2 className="mt-1 h-4 w-4 text-black flex-shrink-0" />
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
