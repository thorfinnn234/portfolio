import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%", // when section just enters viewport
          end: "top 40%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".about-label", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power3.out",
      })
        .from(
          ".about-heading",
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .from(
          ".about-text",
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.2"
        )
        .from(
          ".about-card",
          {
            opacity: 0,
            y: 30,
            duration: 0.7,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.3"
        );
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="bg-white border-t border-zinc-100 py-20"
    >
      <div className="mx-auto max-w-6xl px-6 grid gap-12 md:grid-cols-[1.7fr,1.3fr]">
        {/* Left column – text */}
        <div>
          <p className="about-label text-sm uppercase tracking-[0.25em] text-zinc-500 mb-4">
            About
          </p>

          <h2 className="about-heading text-2xl sm:text-3xl font-semibold tracking-tight text-black">
            Building thoughtful, modern web and mobile experiences.
          </h2>

          <p className="about-text mt-4 text-sm sm:text-base leading-relaxed text-zinc-600">
            I&apos;m <span className="font-medium">Habeeb Oreoluwa</span>, a
            full-stack developer with a focus on building clean, modern and
            user-friendly digital experiences across both web and mobile
            platforms.
          </p>

          <p className="about-text mt-4 text-sm sm:text-base leading-relaxed text-zinc-600">
            Most of my work revolves around
            <span className="font-medium"> React.js</span> and
            <span className="font-medium"> Tailwind CSS</span> on the frontend,
            <span className="font-medium"> MongoDB</span> and
            <span className="font-medium"> Supabase</span> for backend data, and
            <span className="font-medium"> React Native</span> for mobile
            applications. I love crafting interfaces that feel smooth, fast and
            intuitive while ensuring the logic behind them stays reliable and
            well-structured.
          </p>

          <p className="about-text mt-4 text-sm sm:text-base leading-relaxed text-zinc-600">
            Whether it&apos;s a website, dashboard or mobile app, I enjoy taking
            ideas from concept to polished, functional products — always aiming
            for simplicity, performance and a clean user experience.
          </p>
        </div>

        {/* Right column – quick info / stats */}
        <div className="space-y-6">
          <div className="about-card  border border-zinc-200 bg-zinc-50 px-5 py-4 text-sm">
            <p className="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-2">
              Snapshot
            </p>
            <div className="space-y-2 text-zinc-700">
              <p>
                <span className="text-zinc-400">Based in:</span>{" "}
                <span className="font-medium text-black">Lagos, Nigeria</span>
              </p>
              <p>
                <span className="text-zinc-400">Focus:</span>{" "}
                <span className="font-medium text-black">
                  Frontend &amp; full-stack web
                </span>
              </p>
              <p>
                <span className="text-zinc-400">Current status:</span>{" "}
                <span className="font-medium text-black">
                  Open to collaborations &amp; roles
                </span>
              </p>
            </div>
          </div>

          <div className="about-card  border border-zinc-200 bg-zinc-50 px-5 py-4 text-sm">
            <p className="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-2">
              What I enjoy building
            </p>
            <ul className="space-y-1.5 text-zinc-700">
              <li>• Clean, minimal landing pages</li>
              <li>• Dashboards and internal tools</li>
              <li>• Full-stack products from idea to deploy</li>
              <li>• Interfaces with smooth, meaningful animations</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
