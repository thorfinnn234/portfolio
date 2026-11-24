import React from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger, inView } from "./motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaNodeJs,
  FaDatabase,
  FaMobileAlt,
  FaGitAlt,
  FaGithub,
  FaBezierCurve,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiSpringboot,
  SiMongodb,
  SiSupabase,
  SiFirebase,
  SiPostman,
  SiAndroid,
  SiApple,
  SiFigma,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Front End",
    subtitle: "Interfaces and user-facing experiences.",
    skills: [
      { name: "React.js", icon: FaReact },
      { name: "HTML & CSS", icon: FaHtml5 },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "JavaScript", icon: SiJavascript },
    ],
  },
  {
    title: "Backend",
    subtitle: "Logic, APIs and application architecture.",
    skills: [
      { name: "Java", icon: FaJava },
      { name: "Node.js", icon: FaNodeJs },
      { name: "JavaScript", icon: FaReact },
      { name: "Spring Boot", icon: SiSpringboot },
    ],
  },
  {
    title: "Database",
    subtitle: "Data modeling and persistence.",
    skills: [
      { name: "SQL", icon: FaDatabase },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Supabase", icon: SiSupabase },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    title: "Mobile Development",
    subtitle: "Cross-platform app experiences.",
    skills: [
      { name: "React Native", icon: FaReact },
      { name: "iOS", icon: SiApple },
      { name: "Android", icon: SiAndroid },
    ],
  },
  {
    title: "Testing & Tools",
    subtitle: "Debugging, testing and workflow.",
    skills: [
      { name: "Postman", icon: SiPostman },
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
    ],
  },
  {
    title: "Design",
    subtitle: "Visual thinking and product feel.",
    skills: [
      { name: "Figma", icon: SiFigma },
      { name: "Responsive Design", icon: FaMobileAlt },
      { name: "UI / UX", icon: FaBezierCurve },
    ],
  },
];

const chip = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } },
};

export default function Skills() {
  return (
    <section id="skills" className="bg-white border-t border-zinc-100 py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div className="mb-10" {...inView} variants={stagger(0.1)}>
          <motion.p
            variants={fadeUp}
            className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-3"
          >
            Skills
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-2xl sm:text-3xl font-semibold tracking-tight text-black"
          >
            Technologies I work with.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-3 text-sm sm:text-base text-zinc-600 max-w-2xl"
          >
            A mix of frontend, backend, databases and tools I use to build
            modern web and mobile experiences.
          </motion.p>
        </motion.div>

        {/* Grid of categories */}
        <motion.div
          className="grid gap-8 md:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger(0.1)}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={{ ...fadeUp, show: { ...fadeUp.show, transition: { ...fadeUp.show.transition, staggerChildren: 0.05, delayChildren: 0.2 } } }}
              whileHover={{ y: -4, boxShadow: "0 12px 30px -12px rgba(0,0,0,0.15)" }}
              className="border border-zinc-200 bg-zinc-50 px-5 py-5 sm:px-6 sm:py-6"
            >
              <h3 className="text-sm font-semibold tracking-tight text-black">
                {category.title}
              </h3>
              <p className="mt-1 text-xs text-zinc-500">{category.subtitle}</p>

              <div className="mt-4 flex flex-wrap gap-3">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      variants={chip}
                      whileHover={{ scale: 1.08, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="group inline-flex items-center gap-2 border border-zinc-200 bg-white px-3 py-1.5 text-[11px] text-zinc-800 hover:border-black hover:bg-black hover:text-white transition-colors"
                    >
                      <Icon className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                      <span>{skill.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
