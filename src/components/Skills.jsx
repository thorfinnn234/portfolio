import React from "react";
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
  SiTypescript,
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
      { name: "TypeScript", icon: SiTypescript },
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

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-white border-t border-zinc-100 py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-3">
            Skills
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-black">
            Technologies I work with.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 max-w-2xl">
            A mix of frontend, backend, databases and tools I use to build
            modern web and mobile experiences.
          </p>
        </div>

        {/* Grid of categories */}
        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="border border-zinc-200 bg-zinc-50 px-5 py-5 sm:px-6 sm:py-6"
            >
              <h3 className="text-sm font-semibold tracking-tight text-black">
                {category.title}
              </h3>
              <p className="mt-1 text-xs text-zinc-500">
                {category.subtitle}
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="inline-flex items-center gap-2 border border-zinc-200 bg-white px-3 py-1.5 text-[11px] text-zinc-800 hover:border-black hover:bg-black hover:text-white transition-colors"
                    >
                      <Icon className="h-4 w-4" />
                      <span>{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
