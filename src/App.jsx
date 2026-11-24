// src/App.jsx
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import DownloadResume from "./components/DownloadResume";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import BlogPost from "./pages/BlogPost";

export default function App() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen bg-white text-black">
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </AnimatePresence>

      <DownloadResume />
    </div>
  );
}
