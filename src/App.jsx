// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import DownloadResume from "./components/DownloadResume";

export default function App() {
  return (
    <div className="relative min-h-screen bg-white text-black">
      {/* Fixed navbar */}
      <Navbar />

      {/* Main content */}
      <main className="pt-20 pb-16">
        {/* Global responsive wrapper */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6 space-y-20">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </div>
      </main>
      <DownloadResume />
    </div>
  );
}
