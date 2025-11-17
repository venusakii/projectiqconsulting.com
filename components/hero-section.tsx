'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-muted paper-texture">
      {/* Animated paper clouds - background layer */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-20 left-[10%] w-32 h-20 bg-card rounded-full opacity-80 paper-layer"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
          }}
        />
        <div 
          className="absolute top-40 right-[15%] w-40 h-24 bg-card rounded-full opacity-70 paper-layer"
          style={{
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`
          }}
        />
        <div 
          className="absolute top-[30%] left-[20%] w-28 h-16 bg-muted rounded-full opacity-60 paper-layer"
          style={{
            transform: `translate(${mousePosition.x * 0.008}px, ${mousePosition.y * 0.008}px)`
          }}
        />
      </div>

      {/* Paper moon */}
      <div 
        className="absolute top-[15%] right-[20%] w-24 h-24 bg-secondary rounded-full paper-layer"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
        }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Paper projector illustration */}
        <div 
          className="mb-8 inline-block"
          style={{
            transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)`
          }}
        >
          <div className="relative w-32 h-32 mx-auto">
            {/* Projector body */}
            <div className="absolute inset-0 bg-card rounded-2xl paper-deep rotate-3">
              <div className="absolute top-1/2 left-1/2 w-12 h-12 -translate-x-1/2 -translate-y-1/2 bg-primary/20 rounded-full" />
              <div className="absolute top-1/2 left-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2 bg-primary/40 rounded-full" />
            </div>
            {/* Light beam */}
            <div 
              className="absolute left-1/2 top-1/2 w-0 h-0 -translate-y-1/2"
              style={{
                borderLeft: '60px solid transparent',
                borderRight: '60px solid transparent',
                borderBottom: '120px solid rgba(138, 180, 248, 0.2)',
                transform: 'translateY(-50%) rotate(90deg) translateX(40px)',
              }}
            />
          </div>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 text-balance leading-tight">
          {'Light Up Your World'}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
          {'ProjectIQ Consulting — The Mini Projector Experts'}
        </p>

        <Button 
          size="lg" 
          className="paper-layer hover:paper-layer-lifted transition-all duration-300 bg-primary text-primary-foreground rounded-2xl px-8 py-6 text-lg"
        >
          {'Explore Projectors'}
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-muted-foreground" />
      </div>
    </section>
  )
}
