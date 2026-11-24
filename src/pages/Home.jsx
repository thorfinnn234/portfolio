import React from "react";
import PageTransition from "../components/PageTransition";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Blog from "../components/Blog";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 space-y-20">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Blog />
        <Contact />
      </div>
    </PageTransition>
  );
}
