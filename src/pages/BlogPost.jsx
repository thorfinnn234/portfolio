import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PageTransition from "../components/PageTransition";
import { fadeUp, stagger, inView } from "../components/motion";
import { posts, formatDate } from "../data/posts";

function Block({ block }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="mt-10 text-xl sm:text-2xl font-semibold tracking-tight text-black">
          {block.text}
        </h2>
      );
    case "code":
      return (
        <pre className="mt-6 overflow-x-auto bg-zinc-950 p-5 text-[13px] leading-relaxed text-zinc-100">
          <code>{block.text}</code>
        </pre>
      );
    case "ul":
      return (
        <ul className="mt-5 space-y-2 text-zinc-700">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2.5 h-1 w-1 flex-shrink-0 bg-black" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="mt-8 border-l-2 border-black pl-5 text-lg italic text-black">
          {block.text}
        </blockquote>
      );
    default:
      return <p className="mt-5 leading-relaxed text-zinc-700">{block.text}</p>;
  }
}

export default function BlogPost() {
  const { slug } = useParams();
  const sorted = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
  const index = sorted.findIndex((p) => p.slug === slug);
  const post = sorted[index];

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  if (!post) {
    return (
      <PageTransition>
        <section className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h1 className="text-3xl font-semibold text-black">Post not found</h1>
          <Link to="/blog" className="mt-6 inline-block text-sm underline">
            Back to blog
          </Link>
        </section>
      </PageTransition>
    );
  }

  const newer = sorted[index - 1];
  const older = sorted[index + 1];

  return (
    <PageTransition>
      {/* Reading progress on the left edge */}
      <motion.div
        className="fixed left-0 top-0 z-40 hidden h-full w-1 origin-top bg-black md:block"
        style={{ scaleY: progress }}
      />

      <article className="mx-auto max-w-3xl px-6 py-12">
        <motion.header initial="hidden" animate="show" variants={stagger(0.1)}>
          <motion.div variants={fadeUp}>
            <Link
              to="/blog"
              className="group inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-black transition-colors"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              All posts
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-zinc-500"
          >
            <span>{formatDate(post.date)}</span>
            <span className="h-1 w-1 bg-zinc-300" />
            <span>{post.readTime}</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-4 text-3xl sm:text-5xl font-semibold leading-tight tracking-tight text-black"
          >
            {post.title}
          </motion.h1>

          <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="border border-zinc-200 px-3 py-1 text-[11px] text-zinc-600"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div
            className="mt-10 h-px w-full bg-zinc-200 origin-left"
            variants={{
              hidden: { scaleX: 0 },
              show: { scaleX: 1, transition: { duration: 0.8 } },
            }}
          />
        </motion.header>

        {/* Body – each block fades in as you scroll */}
        <div className="text-sm sm:text-base">
          {post.content.map((block, i) => (
            <motion.div key={i} {...inView} variants={fadeUp}>
              <Block block={block} />
            </motion.div>
          ))}
        </div>

        {/* Prev / next */}
        <motion.nav
          {...inView}
          variants={stagger(0.1)}
          className="mt-16 grid gap-4 border-t border-zinc-200 pt-8 sm:grid-cols-2"
        >
          {older ? (
            <motion.div variants={fadeUp}>
              <Link
                to={`/blog/${older.slug}`}
                className="group block border border-zinc-200 p-5 hover:border-black transition-colors"
              >
                <span className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                  <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
                  Previous
                </span>
                <span className="mt-2 block text-sm font-medium text-black">
                  {older.title}
                </span>
              </Link>
            </motion.div>
          ) : (
            <span />
          )}
          {newer && (
            <motion.div variants={fadeUp}>
              <Link
                to={`/blog/${newer.slug}`}
                className="group block border border-zinc-200 p-5 text-right hover:border-black transition-colors"
              >
                <span className="flex items-center justify-end gap-2 text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                  Next
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="mt-2 block text-sm font-medium text-black">
                  {newer.title}
                </span>
              </Link>
            </motion.div>
          )}
        </motion.nav>
      </article>
    </PageTransition>
  );
}
