import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Github, ExternalLink } from "lucide-react";
import { ease, fadeUp, stagger, inView } from "./motion";

const projects = [
  {
    title: "EliteBnB",
    role: "A fullstack Apartment Booking Website",
    ImageUrl: "/elite-img.png",
    description:
      "An artisan website that allows users hire artisans for various services, showcasing their portfolios and facilitating communication.",
    stack: ["React JS", "Talwind CSS", "Spring-Boot", "PostgreSQL", "Docker", "Jenkins", "JUnit"],
    live: "#",
    github: "https://github.com/thorfinnn234/EliteBNB.git",
    accent: "#0000FF",
  },
  {
    title: "Artelix",
    role: "Fullstack · Artisan Website",
    ImageUrl: "/artisanDashborad.png",
    description:
      "An artisan website that allows users hire artisans for various services, showcasing their portfolios and facilitating communication.",
    stack: ["React JS", "Talwind CSS", "Node JS", "MongoDB"],
    live: "#",
    github: "https://github.com/thorfinnn234/Artelix.git",
    accent: "#0000FF",
  },
  {
    title: "Go Ticket",
    role: "Fullstack · Ticketing System",
    ImageUrl: "/goticketttt.png",
    description:
      "A ticketing system that allows users to purchase, manage, and track support tickets efficiently.",
    stack: ["React JS", "Talwind CSS", "Node JS", "MongoDB"],
    live: "https://go-tickets.vercel.app/",
    github: "#",
    accent: "#22c55e",
  },
  {
    title: "Velvet Plate",
    role: "Full-stack · Resturant Website",
    ImageUrl: "/velvet2.png",
    description:
      "A modern Resturant platform for placing orders with payments, and a clean, minimal UI.",
    stack: ["React", "MongoDB", "Tailwind CSS"],
    live: "#", // TODO: put your real live link
    github: "https://github.com/thorfinnn234/velvet-plate.git", // TODO: your GitHub repo
    accent: "#6366f1",
  },
  {
    title: "Travelogue",
    role: "Moblie App · Travel App",
    ImageUrl: "/travelouge.png",
    description:
      "An app where people share there experience of places they have been to.",
    stack: ["React Native ", "Expo", "Supabase"],
    live: "#",
    github: "https://github.com/thorfinnn234/travelogue.git",
    accent: "#f97316",
  },

  {
    title: "Tic-tac-toe Game",
    role: "Game · Tic-tac-toe",
    ImageUrl: "/tic-tac-image.png",
    description:
      "A simple tic-tac-toe game where two players can play against each other.",
    stack: ["Pure JavaScript", "React", "CSS"],
    live: "#",
    github: "https://github.com/thorfinnn234/tic-tac.git",
    accent: "#22c55e",
  },


  {
    title: "Multimart",
    role: "FrontEnd · E-commerce",
    ImageUrl: "/multimart.png",
    description:
      "An E-commerce website with features like product search, filtering, and a shopping cart.",
    stack: ["React", "CSS", "Supabase"],
    live: "#",
    github: "https://github.com/thorfinnn234/multimart.git",
    accent: "#0f172a",
  },
];

export default function Projects() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="projects" className="bg-white border-t border-zinc-100 py-20">
      <motion.div
        className="mx-auto max-w-6xl px-6 mb-10"
        {...inView}
        variants={stagger(0.1)}
      >
        <motion.p
          variants={fadeUp}
          className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-3"
        >
          Projects
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="text-2xl sm:text-3xl font-semibold tracking-tight text-black"
        >
          Spotlight on some of my work.
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mt-3 text-sm sm:text-base text-zinc-600 max-w-2xl"
        >
          A selection of full-stack projects and web apps I&apos;ve built, each
          focused on clarity, performance and real-world use.
        </motion.p>
      </motion.div>

      <div className="mx-auto max-w-3xl px-6 space-y-10">
        {projects.map((project, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.article
              key={project.title}
              layout
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease }}
              whileHover={{ y: -4 }}
              className="bg-zinc-950 text-white border border-zinc-800 px-5 py-5 sm:px-7 sm:py-7 hover:shadow-2xl hover:shadow-black/20 transition-shadow"
              style={{ borderTop: `3px solid ${project.accent}` }}
            >
              {/* Top row: title + toggle */}
              <div
                className="flex items-center justify-between gap-4 cursor-pointer"
                onClick={() => toggleIndex(index)}
              >
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-400 mb-1">
                    {project.role}
                  </p>
                  <h3 className="text-lg sm:text-xl font-semibold tracking-tight">
                    {project.title}
                  </h3>
                </div>

                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleIndex(index);
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center justify-center h-9 w-9 border border-zinc-700 text-zinc-200 hover:bg-zinc-900 transition-colors"
                  aria-label="Toggle project details"
                  aria-expanded={isOpen}
                >
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease }}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.span>
                </motion.button>
              </div>

              {/* Collapsible details */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="details"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      className="pt-4"
                      initial="hidden"
                      animate="show"
                      variants={stagger(0.08, 0.1)}
                    >
                      {project.ImageUrl && (
                        <motion.div
                          variants={fadeUp}
                          className="w-full mt-3 overflow-hidden border border-zinc-800"
                        >
                          <motion.img
                            src={project.ImageUrl}
                            alt={project.title}
                            className="w-full h-auto object-cover"
                            whileHover={{ scale: 1.04 }}
                            transition={{ duration: 0.5, ease }}
                          />
                        </motion.div>
                      )}

                      <motion.p
                        variants={fadeUp}
                        className="text-sm text-zinc-300 leading-relaxed mt-4"
                      >
                        {project.description}
                      </motion.p>

                      <motion.div variants={fadeUp} className="mt-3 flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="border border-zinc-700 bg-zinc-900 px-3 py-1 text-[11px] text-zinc-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </motion.div>

                      <motion.div
                        variants={fadeUp}
                        className="mt-4 flex flex-wrap items-center gap-4 text-[11px]"
                      >
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          whileHover={{ x: 2 }}
                          className="inline-flex items-center gap-2 border border-white/20 px-4 py-2 font-medium hover:bg-white hover:text-black transition-colors"
                        >
                          <span>View live</span>
                          <ExternalLink className="h-3 w-3" />
                        </motion.a>

                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          whileHover={{ x: 2 }}
                          className="inline-flex items-center gap-2 text-zinc-300 hover:text-white"
                        >
                          <Github className="h-3 w-3" />
                          <span>View code</span>
                        </motion.a>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          );
        })}

        <motion.div
          className="mt-10 relative w-fit mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <motion.a
            href="https://github.com/thorfinnn234"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group relative overflow-hidden flex items-center justify-center border border-black px-8 py-3 text-sm font-medium text-black"
          >
            <span className="absolute inset-0 bg-black origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              View More Projects
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
