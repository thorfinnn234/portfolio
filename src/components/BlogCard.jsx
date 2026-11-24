import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp } from "./motion";
import { formatDate } from "../data/posts";

export default function BlogCard({ post }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover="hover"
      className="group h-full"
    >
      <Link
        to={`/blog/${post.slug}`}
        className="relative flex h-full flex-col border border-zinc-200 bg-white p-6 overflow-hidden"
      >
        {/* Black fill sweeps up on hover */}
        <motion.span
          className="absolute inset-0 bg-zinc-950 origin-bottom"
          initial={{ scaleY: 0 }}
          variants={{ hover: { scaleY: 1 } }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />

        <div className="relative flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-zinc-500 group-hover:text-zinc-400 transition-colors">
          <span>{formatDate(post.date)}</span>
          <span>{post.readTime}</span>
        </div>

        <h3 className="relative mt-4 text-lg font-semibold tracking-tight text-black group-hover:text-white transition-colors duration-300">
          {post.title}
        </h3>

        <p className="relative mt-3 text-sm leading-relaxed text-zinc-600 group-hover:text-zinc-300 transition-colors duration-300 flex-1">
          {post.excerpt}
        </p>

        <div className="relative mt-6 flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="border border-zinc-200 px-2.5 py-0.5 text-[10px] text-zinc-600 group-hover:border-zinc-700 group-hover:text-zinc-300 transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
          <motion.span
            variants={{ hover: { x: 3, y: -3 } }}
            initial={{ x: 0, y: 0 }}
            className="text-black group-hover:text-white transition-colors duration-300"
          >
            <ArrowUpRight className="h-5 w-5" />
          </motion.span>
        </div>
      </Link>
    </motion.article>
  );
}
