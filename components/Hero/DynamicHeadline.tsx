"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface DynamicHeadlineProps {
  text: string;
}

export default function DynamicHeadline({ text }: DynamicHeadlineProps) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );
  }, [text]);

  return (
    <div
      ref={textRef}
      className="text-[#10B981] font-bold"
      style={{ textShadow: "0 0 20px rgba(16, 185, 129, 0.3)" }}
    >
      {text}
    </div>
  );
}
