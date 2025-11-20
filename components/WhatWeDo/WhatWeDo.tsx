"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TrendingUp, BarChart3, Zap, Users } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const features = [
  {
    icon: TrendingUp,
    title: "Growth Strategy",
    description:
      "Tailored strategies that align with your business goals and drive scalable growth.",
  },
  {
    icon: BarChart3,
    title: "Performance Marketing",
    description:
      "Maximize ROI across multiple channels with data-driven campaigns.",
  },
  {
    icon: Zap,
    title: "Operational Scaling",
    description: "Streamline operations and ensure efficiency as you expand.",
  },
  {
    icon: Users,
    title: "Brand Building",
    description:
      "Create lasting impressions with strategic brand positioning.",
  },
];

export default function WhatWeDo() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const items = container.children;
    const itemWidth = (items[0] as HTMLElement).offsetWidth + 32; // width + gap
    const totalWidth = itemWidth * features.length;

    // Duplicate items for seamless loop
    container.innerHTML += container.innerHTML;

    // Infinite scroll animation
    gsap.to(container, {
      x: -totalWidth,
      duration: 20,
      ease: "none",
      repeat: -1,
    });

    return () => {
      gsap.killTweensOf(container);
    };
  }, []);

  return (
    <section
      className="py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, #0a3d2e 0%, #6ee7b7 40%, #d4f4dd 70%, #e0f2e9 100%)",
      }}
    >
      {/* Header */}
      <div className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "#0F172A" }}
          >
            What We Do
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "#374151" }}
          >
            We partner with businesses to create customized strategies that
            fuel sustainable success.
          </motion.p>
        </div>
      </div>

      {/* Infinite Scrolling Container */}
      <div className="relative">
        <div
          ref={containerRef}
          className="flex gap-8"
          style={{ width: "max-content" }}
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                className="p-8 rounded-xl flex-shrink-0 shadow-lg hover:shadow-xl transition-all duration-300"
                style={{
                  width: "400px",
                  height: "320px",
                  backgroundColor: "#FFFFFF",
                  border: "2px solid #34D399",
                }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: "#10B981" }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: "#0F172A" }}
                >
                  {feature.title}
                </h3>
                <p style={{ color: "#6B7280", lineHeight: "1.6" }}>
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Very light gradient overlays */}
        <div
          className="absolute top-0 left-0 h-full w-64 pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(to right, rgba(10, 61, 46, 0.9) 0%, rgba(10, 61, 46, 0.5) 40%, transparent 100%)",
          }}
        />
        <div
          className="absolute top-0 right-0 h-full w-64 pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(to left, rgba(224, 242, 233, 0.9) 0%, rgba(224, 242, 233, 0.5) 40%, transparent 100%)",
          }}
        />
      </div>
    </section>
  );
}
//         <p className="text-sm font-medium" style={{ color: "#6B7280" }}>
//           Scroll down to continue
//         </p>
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 1.5, repeat: Infinity }}
//           className="mt-4"
//         >
//           <svg
//             className="w-6 h-6 mx-auto"
//             fill="none"
//             stroke="#10B981"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M19 14l-7 7m0 0l-7-7m7 7V3"
//             />
//           </svg>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
