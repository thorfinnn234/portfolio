import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import BlogCard from "./BlogCard";
import { fadeUp, stagger, inView } from "./motion";
import { posts } from "../data/posts";

// Home-page blog section: shows the 3 latest posts
export default function Blog() {
  const latest = [...posts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <section id="blog" className="bg-white border-t border-zinc-100 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          {...inView}
          variants={stagger(0.1)}
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-3"
            >
              Blog
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-2xl sm:text-3xl font-semibold tracking-tight text-black"
            >
              Thoughts, notes &amp; lessons.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-3 text-sm sm:text-base text-zinc-600 max-w-2xl"
            >
              Writing about what I build, what I learn and how I approach
              development.
            </motion.p>
          </div>

          <motion.div variants={fadeUp}>
            <Link
              to="/blog"
              className="group inline-flex items-center gap-2 text-sm font-medium text-black"
            >
              <span className="relative">
                View all posts
                <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-black transition-transform duration-300 group-hover:scale-x-100" />
              </span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger(0.12)}
        >
          {latest.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
