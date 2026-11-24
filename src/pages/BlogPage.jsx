import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import PageTransition from "../components/PageTransition";
import BlogCard from "../components/BlogCard";
import { fadeUp, stagger } from "../components/motion";
import { posts } from "../data/posts";

export default function BlogPage() {
  const [activeTag, setActiveTag] = useState("All");

  const tags = useMemo(
    () => ["All", ...new Set(posts.flatMap((p) => p.tags))],
    []
  );

  const filtered = useMemo(
    () =>
      [...posts]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .filter((p) => activeTag === "All" || p.tags.includes(activeTag)),
    [activeTag]
  );

  return (
    <PageTransition>
      <section className="mx-auto max-w-6xl px-6 py-12">
        <motion.div initial="hidden" animate="show" variants={stagger(0.1)}>
          <motion.div variants={fadeUp}>
            <Link
              to="/"
              className="group inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-black transition-colors"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back home
            </Link>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-10 text-xs uppercase tracking-[0.25em] text-zinc-500 mb-3"
          >
            Blog
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="text-3xl sm:text-5xl font-semibold tracking-tight text-black"
          >
            Writing<span className="text-zinc-400">.</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-sm sm:text-base text-zinc-600 max-w-2xl"
          >
            Notes on web &amp; mobile development, design, and the things I
            learn while building.
          </motion.p>

          {/* Tag filter */}
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-2">
            {tags.map((tag) => {
              const active = tag === activeTag;
              return (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`relative px-4 py-1.5 text-xs border transition-colors ${
                    active
                      ? "border-black text-white"
                      : "border-zinc-200 text-zinc-600 hover:border-black hover:text-black"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="tag-pill"
                      className="absolute inset-0 bg-black"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative">{tag}</span>
                </button>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Posts grid */}
        <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((post) => (
              <motion.div
                key={post.slug}
                layout
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, scale: 0.95 }}
                variants={stagger(0, 0.2)}
              >
                <BlogCard post={post} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </PageTransition>
  );
}
