'use client'

import { useEffect, useRef, useState } from 'react'

export function VisionSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-muted relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Paper office illustration */}
          <div 
            className={`relative h-96 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {/* Back layer - building */}
            <div className="absolute bottom-0 left-[10%] w-32 h-48 bg-card paper-layer rounded-t-3xl">
              <div className="grid grid-cols-2 gap-2 p-3">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-full h-8 bg-primary/10 rounded" />
                ))}
              </div>
            </div>

            {/* Middle layer - desk */}
            <div className="absolute bottom-12 right-[15%] w-48 h-32 bg-secondary paper-layer rounded-2xl">
              {/* Tiny projector on desk */}
              <div className="absolute top-1/2 left-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2 bg-card paper-deep rounded-lg">
                <div className="absolute top-1/2 left-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full" />
              </div>
              {/* Light bulbs */}
              <div className="absolute -top-4 left-4 w-6 h-6 bg-accent rounded-full paper-layer animate-pulse" />
              <div className="absolute -top-4 right-4 w-6 h-6 bg-accent rounded-full paper-layer animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>

            {/* Front layer - lamp */}
            <div className="absolute bottom-20 left-[25%] w-2 h-24 bg-foreground/20" />
            <div className="absolute bottom-44 left-[20%] w-12 h-12 bg-secondary paper-layer rounded-full" />
          </div>

          {/* Text content */}
          <div 
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-balance">
              {'Our Paper Vision'}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty mb-4">
              {'At ProjectIQ Consulting, we believe every space deserves to be illuminated with possibility. Our expert reviews help you find the perfect portable projector for your needs.'}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              {'Like a carefully crafted pop-up book, we unfold the details that matter most — from brightness and portability to connectivity and value.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
