'use client'

import { useEffect, useRef, useState } from 'react'

export function AboutSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      })
    }

    const section = sectionRef.current
    if (section) {
      section.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Paper city with parallax */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {/* Buildings with different layers */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute bottom-0 bg-card paper-layer rounded-t-2xl"
            style={{
              left: `${i * 18}%`,
              width: `${60 + Math.random() * 40}px`,
              height: `${100 + Math.random() * 100}px`,
              transform: `translateX(${mousePosition.x * (i + 1) * 10}px)`,
            }}
          >
            {/* Windows */}
            <div className="grid grid-cols-2 gap-1 p-2">
              {[...Array(8)].map((_, j) => (
                <div key={j} className="w-full h-4 bg-primary/20 rounded" />
              ))}
            </div>
            {/* Projector light on building */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3 h-3 bg-accent rounded-full animate-pulse" />
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-8 text-balance">
            {'About ProjectIQ'}
          </h2>
          <div className="prose prose-lg mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-pretty">
              {'We are a dedicated team of projection enthusiasts and technology experts who believe that everyone deserves access to quality entertainment and presentation tools, no matter where they are.'}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              {'Like carefully cut paper layers coming together to create depth and dimension, we bring together expertise, research, and real-world testing to illuminate your path to the perfect projector.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
