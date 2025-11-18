'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface DynamicHeadlineProps {
  headlines: string[]
  duration?: number
}

export function DynamicHeadline({ headlines, duration = 3 }: DynamicHeadlineProps) {
  const headlineRef = useRef<HTMLDivElement>(null)
  const currentIndexRef = useRef(0)

  useEffect(() => {
    if (!headlineRef.current) return

    const rotate = () => {
      currentIndexRef.current = (currentIndexRef.current + 1) % headlines.length

      gsap.to(headlineRef.current, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          if (headlineRef.current) {
            headlineRef.current.textContent = headlines[currentIndexRef.current]
            gsap.to(headlineRef.current, {
              opacity: 1,
              duration: 0.5,
            })
          }
        },
      })
    }

    const interval = setInterval(rotate, duration * 1000)
    return () => clearInterval(interval)
  }, [headlines, duration])

  return (
    <div
      ref={headlineRef}
      className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary transition-opacity"
    >
      {headlines[0]}
    </div>
  )
}
