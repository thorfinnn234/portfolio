import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown, Github, ExternalLink } from "lucide-react";


gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Velvet Plate",
    role: "Full-stack · Resturant Website",
    ImageUrl:
      "/velvet2.png",
    description:
      "A modern Resturant platform for placing orders with payments, and a clean, minimal UI.",
    stack: ["React", "MongoDB", "Tailwind CSS"],
    live: "#", // TODO: put your real live link
    github: "https://github.com/thorfinnn234/velvet-plate.git", // TODO: your GitHub repo
    accent: "#6366f1",
  },
  {
    title: "Multimart",
    role: "FrontEnd · E-commerce",
    ImageUrl:
      "/multimart.png",
    description:
      "An E-commerce website with features like product search, filtering, and a shopping cart.",
    stack: ["React", "CSS", "Supabase"],
    live: "#",
    github: "https://github.com/thorfinnn234/multimart.git",
    accent: "#0f172a",
  },
  {
    title: "Travelogue",
    role: "Moblie App · Travel App",
    ImageUrl: "public/ChatGPT Image Nov 22, 2025, 06_47_59 PM.png",
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
];

export default function Projects() {
  const containerRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".spotlight-item");

      items.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0.4, scale: 0.97 },
          {
            opacity: 1,
            scale: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 75%",
              end: "top 35%",
              scrub: true,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const toggleIndex = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="projects"
      ref={containerRef}
      className="bg-white border-t border-zinc-100 py-20"
    >
      <div className="mx-auto max-w-6xl px-6 mb-10">
        <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-3">
          Projects
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-black">
          Spotlight on some of my work.
        </h2>
        <p className="mt-3 text-sm sm:text-base text-zinc-600 max-w-2xl">
          A selection of full-stack projects and web apps I&apos;ve built, each
          focused on clarity, performance and real-world use.
        </p>
      </div>

      <div className="mx-auto max-w-3xl px-6 space-y-10">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="spotlight-item bg-zinc-950 text-white border border-zinc-800 px-5 py-5 sm:px-7 sm:py-7"
            style={{
              borderTop: `3px solid ${project.accent}`,
            }}
          >
            {/* Top row: title + arrow */}
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-400 mb-1">
                  {project.role}
                </p>
                <h3 className="text-lg sm:text-xl font-semibold tracking-tight">
                  {project.title}
                </h3>
              </div>

              <button
                onClick={() => toggleIndex(index)}
                className="flex items-center justify-center h-9 w-9 border border-zinc-700 text-zinc-200 hover:bg-zinc-900 transition-colors"
                aria-label="Toggle project details"
              >
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
            </div>

            {/* Collapsible details */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "max-h-[1000px] mt-4 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              {/* Project Image */}
              {project.ImageUrl && (
                <div className="w-full mt-3">
                  <img
                    src={project.ImageUrl}
                    alt={project.title}
                    className="w-full h-auto object-cover border border-zinc-800"
                  />
                </div>
              )}

              {/* Description */}
              <p className="text-sm text-zinc-300 leading-relaxed mt-4">
                {project.description}
              </p>

              {/* Stack tags */}
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="border border-zinc-700 bg-zinc-900 px-3 py-1 text-[11px] text-zinc-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-4 flex flex-wrap items-center gap-4 text-[11px]">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-white/20 px-4 py-2 font-medium hover:bg-white hover:text-black transition-colors"
                >
                  <span>View live</span>
                  <ExternalLink className="h-3 w-3" />
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-zinc-300 hover:text-white"
                >
                  <Github className="h-3 w-3" />
                  <span>View code</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
