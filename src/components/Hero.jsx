import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const nameRef = useRef(null);
  const rolesRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(nameRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.1,
        ease: "power3.out",
      });

      gsap.from(rolesRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.25,
        ease: "power3.out",
      });

      gsap.from(buttonRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.4,
        ease: "power3.out",
      });

      // Parallax animations
      gsap.to(nameRef.current, {
        yPercent: -10,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(rolesRef.current, {
        yPercent: -6,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(buttonRef.current, {
        yPercent: -4,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="min-h-[80vh] flex items-center bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
        {/* Big name */}
        <h1
          ref={nameRef}
          className="
            text-3xl 
            sm:text-5xl 
            md:text-7xl 
            font-semibold tracking-wide 
            text-black leading-tight
          "
        >
          HABEEB OREOLUWA
          <span className="text-zinc-400">.</span>
        </h1>

        {/* Roles */}
        <p
          ref={rolesRef}
          className="mt-4 text-sm sm:text-base text-neutral-600 tracking-wide"
        >
          <span className="mr-2">Software Developer</span>
          <span className="mx-1">|</span>
          <span className="mr-2">Full-Stack Dev</span>
          <span className="mx-1">|</span>
          <span>Problem Solver</span>
        </p>

        <div ref={buttonRef} className="mt-10 relative w-fit mx-auto">
          <a
            href="#projects"
            className="
              relative overflow-hidden
              flex items-center justify-center
              border border-black px-8 py-3
              text-sm font-medium text-black
              transition-colors 
              before:absolute before:inset-0 before:bg-black
              before:w-0 before:origin-left before:scale-x-0
              before:transition-all before:duration-300
              hover:text-white
              hover:before:w-full hover:before:scale-x-100
            "
          >
            <span className="relative z-10">EXPLORE WORK</span>
          </a>

          {/* Bouncing Arrow */}
          <span className="absolute left-1/2 -translate-x-1/2 mt-2 text-xl text-black animate-bounce">
            ↓
          </span>
        </div>
      </div>
    </section>
  );
}
