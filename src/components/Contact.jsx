import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Phone, X } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

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
    } catch (err) {
      setStatus({
        type: "error",
        message: "Network error. Try again.",
      });
    } finally {
      setLoading(false);
      setVisible(true);
    }
  }

  return (
    <section
      id="contact"
      className="relative bg-neutral-950 text-white py-20 border-t border-neutral-900"
    >
      {/* ALERT */}
      <div
        className={`fixed left-1/2 top-6 z-100 -translate-x-1/2 transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <div
          className={`px-6 py-3 rounded-md shadow-lg flex items-center gap-3 text-sm ${
            status.type === "success"
              ? "bg-emerald-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          <span>{status.message}</span>
          <button onClick={() => setVisible(false)}>
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight">
          Let&apos;s Work Together
        </h2>
        <p className="mt-4 text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto">
          I&apos;m always interested in hearing about new projects and
          opportunities. Whether you have a question or just want to say hello,
          feel free to reach out.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-10 mx-auto w-full max-w-md text-left space-y-4"
        >
          <div>
            <label className="block text-xs uppercase tracking-[0.18em] text-neutral-400 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full bg-neutral-900 border border-neutral-700 px-3 py-2 text-sm text-white outline-none focus:border-white"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-[0.18em] text-neutral-400 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full bg-neutral-900 border border-neutral-700 px-3 py-2 text-sm text-white outline-none focus:border-white"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-[0.18em] text-neutral-400 mb-1">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={4}
              className="w-full bg-neutral-900 border border-neutral-700 px-3 py-2 text-sm text-white outline-none focus:border-white resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-4 w-full sm:w-auto px-10 py-3 text-sm tracking-wide cursor-pointer border border-white bg-white text-black hover:bg-transparent hover:text-white transition-colors disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Social icons */}
        <div className="mt-12 flex items-center justify-center gap-5 text-neutral-400">
          <a href="https://github.com/thorfinnn234" className="hover:text-white"><Github className="h-5 w-5" /></a>
          <a href="https://www.linkedin.com/in/habeeb-oreoluwa-714097391?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:text-white"><Linkedin className="h-5 w-5" /></a>
          <a href="#" className="hover:text-white"><FaXTwitter className="h-5 w-5" /></a>
          <a href="habeeboreoluwa12@gmail.com" className="hover:text-white"><Mail className="h-5 w-5" /></a>
          <a href="#" className="hover:text-white"><Phone className="h-5 w-5" /></a>
        </div>

        {/* Footer */}
        <div className="mt-12 border-t border-neutral-800 pt-6 text-[16px] text-neutral-500">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </section>
  );
}
