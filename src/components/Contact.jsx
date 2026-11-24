import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Phone, X } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, stagger, inView } from "./motion";

export default function Contact() {
  const [status, setStatus] = useState({ type: "", message: "" });
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  // Auto-hide after 5 seconds
  useEffect(() => {
    if (visible) {
      const timeout = setTimeout(() => setVisible(false), 5000);
      return () => clearTimeout(timeout);
    }
  }, [visible]);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    try {
      const res = await fetch("https://formspree.io/f/mwpzogon", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name.value,
          email: form.email.value,
          message: form.message.value,
        }),
      });

      if (res.ok) {
        setStatus({
          type: "success",
          message: "Message sent! I'll respond soon.",
        });
        form.reset();
      } else {
        setStatus({
          type: "error",
          message: "Something went wrong. Try again.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Network error. Try again.",
      });
    } finally {
      setLoading(false);
      setVisible(true);
    }
  }

  const socials = [
    { href: "https://github.com/thorfinnn234", icon: Github, label: "GitHub" },
    {
      href: "https://www.linkedin.com/in/habeeb-oreoluwa-714097391?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      icon: Linkedin,
      label: "LinkedIn",
    },
    { href: "#", icon: FaXTwitter, label: "X" },
    { href: "mailto:habeeboreoluwa12@gmail.com", icon: Mail, label: "Email" },
    { href: "#", icon: Phone, label: "Phone" },
  ];

  const inputClass =
    "w-full bg-neutral-900 border border-neutral-700 px-3 py-2 text-sm text-white outline-none focus:border-white transition-colors";

  return (
    <section
      id="contact"
      className="relative bg-neutral-950 text-white py-20 border-t border-neutral-900 overflow-hidden"
    >
      {/* ALERT */}
      <AnimatePresence>
        {visible && (
          <motion.div
            className="fixed left-1/2 top-6 z-[100]"
            initial={{ opacity: 0, y: -30, x: "-50%", scale: 0.9 }}
            animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
            exit={{ opacity: 0, y: -30, x: "-50%", scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
          >
            <div
              className={`px-6 py-3 rounded-md shadow-lg flex items-center gap-3 text-sm ${
                status.type === "success" ? "bg-emerald-500 text-white" : "bg-red-500 text-white"
              }`}
            >
              <span>{status.message}</span>
              <button onClick={() => setVisible(false)} aria-label="Close">
                <X className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="mx-auto max-w-5xl px-6 text-center"
        {...inView}
        variants={stagger(0.1)}
      >
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight"
        >
          Let&apos;s Work Together
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mt-4 text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto"
        >
          I&apos;m always interested in hearing about new projects and
          opportunities. Whether you have a question or just want to say hello,
          feel free to reach out.
        </motion.p>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          variants={stagger(0.08)}
          className="mt-10 mx-auto w-full max-w-md text-left space-y-4"
        >
          <motion.div variants={fadeUp}>
            <label className="block text-xs uppercase tracking-[0.18em] text-neutral-400 mb-1">
              Name
            </label>
            <input type="text" name="name" required className={inputClass} />
          </motion.div>

          <motion.div variants={fadeUp}>
            <label className="block text-xs uppercase tracking-[0.18em] text-neutral-400 mb-1">
              Email
            </label>
            <input type="email" name="email" required className={inputClass} />
          </motion.div>

          <motion.div variants={fadeUp}>
            <label className="block text-xs uppercase tracking-[0.18em] text-neutral-400 mb-1">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={4}
              className={`${inputClass} resize-none`}
            />
          </motion.div>

          <motion.button
            variants={fadeUp}
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-4 w-full sm:w-auto px-10 py-3 text-sm tracking-wide cursor-pointer border border-white bg-white text-black hover:bg-transparent hover:text-white transition-colors disabled:opacity-60"
          >
            {loading ? (
              <span className="inline-flex items-center gap-2">
                <motion.span
                  className="h-3 w-3 rounded-full border-2 border-current border-t-transparent"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                />
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </motion.button>
        </motion.form>

        {/* Social icons */}
        <motion.div
          variants={stagger(0.06)}
          className="mt-12 flex items-center justify-center gap-5 text-neutral-400"
        >
          {socials.map(({ href, icon, label }) => {
            const SocialIcon = icon;
            return (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                variants={fadeUp}
                whileHover={{ y: -4, scale: 1.15, color: "#ffffff" }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <SocialIcon className="h-5 w-5" />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Footer */}
        <motion.div
          variants={fadeUp}
          className="mt-12 border-t border-neutral-800 pt-6 text-[16px] text-neutral-500"
        >
          © {new Date().getFullYear()} All rights reserved.
        </motion.div>
      </motion.div>
    </section>
  );
}
