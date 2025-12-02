import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

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
  const containerRef = useRef(null);
  const detailsRef = useRef(null);

  const active = experiences.find((exp) => exp.id === activeId);

  // Scroll animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".exp-heading", {
        opacity: 0,
        y: 20,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".exp-layout", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Switch animation
  useEffect(() => {
    if (!detailsRef.current) return;
    gsap.fromTo(
      detailsRef.current,
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
      }
    );
  }, [activeId]);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="bg-white py-20 border-t border-zinc-200"
    >
      <div className="mx-auto max-w-6xl px-6">

        <h2 className="exp-heading text-3xl sm:text-4xl font-semibold tracking-tight text-black mb-10">
          Experience<span className="text-black">.</span>
        </h2>

        <div className="exp-layout flex flex-col gap-10 md:flex-row">

          {/* LEFT TABS */}
          <div className="md:w-1/3">
            <div className="border-l border-black/10">
              {experiences.map((exp) => {
                const isActive = exp.id === activeId;
                return (
                  <button
                    key={exp.id}
                    onClick={() => setActiveId(exp.id)}
                    className={`
                      w-full text-left pl-5 pr-3 py-3 text-sm transition-colors
                      border-l-2 -ml-[1px]
                      ${isActive
                        ? "text-black font-semibold border-black"
                        : "text-zinc-500 hover:text-black border-transparent"}
                    `}
                  >
                    {exp.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT DETAILS */}
          <div className="md:w-2/3" ref={detailsRef}>

            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-2">
              {active.company}
            </p>

            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-black">
              {active.title}
            </h3>

            <p className="mt-1 text-xs text-zinc-500">
              {active.period}
            </p>

            <ul className="mt-6 space-y-3 text-sm text-zinc-700">
              {active.points.map((point, idx) => (
                <li key={idx} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-4 w-4 text-black flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </section>
  );
}
