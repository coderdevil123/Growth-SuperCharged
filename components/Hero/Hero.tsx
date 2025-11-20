"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import DynamicHeadline from "@/components/Hero/DynamicHeadline";
import { Cover } from "@/components/ui/cover";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const HEADLINES = [
  "Power Up Your Potential",
  "Scale Up Your Revenue",
  "Amp Up Your Growth",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const t = setInterval(
      () => setIndex((p) => (p + 1) % HEADLINES.length),
      3200
    );
    return () => clearInterval(t);
  }, []);

  return (
    <header
      ref={heroRef}
      className="relative overflow-hidden pt-24"
      style={{
        background: "linear-gradient(to bottom, #0F172A 0%, #071023 70%, #0a3d2e 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left */}
        <section>
          <h1 
            className="text-3xl md:text-5xl leading-tight tracking-widest uppercase"
            style={{ 
              fontFamily: "'Azonix', sans-serif",
              fontWeight: "normal",
              letterSpacing: "0.2em"
            }}
          >
            <Cover>Growth</Cover>{" "}
            <Cover>SuperCharged</Cover>
          </h1>
          
          <p className="mt-3 text-lg font-medium" style={{ color: "#34D399" }}>
            Own The Edge
          </p>

          <div className="mt-6">
            <div className="text-2xl md:text-3xl font-semibold h-12 overflow-hidden" style={{ color: "#FFFFFF" }}>
              <DynamicHeadline text={HEADLINES[index]} />
            </div>
          </div>

          <p className="mt-6 max-w-xl" style={{ color: "#D1D5DB" }}>
            We partner with companies to design growth strategies, performance
            marketing, and operational scaling—measured by data and driven by
            discipline.
          </p>

          {/* Mini Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 w-full max-w-md flex gap-2"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 py-3 px-4 rounded-lg border focus:ring-2 focus:ring-emerald-200 focus:outline-none"
              style={{ 
                backgroundColor: "#FFFFFF", 
                borderColor: "#34D399",
                color: "#0F172A"
              }}
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-lg font-semibold whitespace-nowrap hover:shadow-lg transition-all"
              style={{ backgroundColor: "#10B981", color: "#FFFFFF" }}
            >
              Get in touch
            </button>
          </form>
        </section>

        {/* Right - Image */}
        <aside className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-lg bg-gray-50 z-10">
          <Image
            src="/images/hero.jpg"
            alt="Hero Image"
            fill
            className="object-cover"
          />
        </aside>
      </div>

      {/* Background Orbs */}
      <div className="pointer-events-none absolute inset-0 z-5">
        <div
          className="absolute left-0 top-24 w-72 h-72 rounded-full blur-3xl opacity-30 -translate-x-12"
          style={{ backgroundColor: "#34D399" }}
        />
        <div
          className="absolute right-0 top-36 w-96 h-96 rounded-full blur-3xl opacity-10 translate-x-10"
          style={{ backgroundColor: "#10B981" }}
        />
      </div>
    </header>
  );
}
