'use client'

import { useState, useEffect, useRef } from 'react'

export function ImaginationSection() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      
      const rect = sectionRef.current.getBoundingClientRect()
      const sectionTop = rect.top
      const sectionHeight = rect.height
      const windowHeight = window.innerHeight
      
      if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
        const progress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight / 2)))
        setScrollProgress(progress)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const backgroundColor = `hsl(${210 + scrollProgress * 30}, ${40 - scrollProgress * 20}%, ${95 - scrollProgress * 25}%)`

  return (
    <section 
      ref={sectionRef}
      className="py-24 px-4 relative overflow-hidden transition-colors duration-300"
      style={{ backgroundColor }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-balance">
            {'Projection of Imagination'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {'Hover over the paper universe to bring it to life'}
          </p>
        </div>

        {/* Interactive paper scene */}
        <div className="relative h-[500px] mx-auto max-w-4xl">
          {/* Planet 1 */}
          <div 
            className="absolute top-[10%] left-[15%] w-24 h-24 bg-primary/30 rounded-full paper-layer group cursor-pointer hover:paper-layer-lifted transition-all"
            style={{ transform: `scale(${1 + scrollProgress * 0.2})` }}
          >
            <div className="absolute inset-0 bg-primary/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-medium opacity-0 group-hover:opacity-100">
              {'Cinema'}
            </div>
          </div>

          {/* Building */}
          <div 
            className="absolute top-[40%] right-[20%] w-32 h-40 bg-card paper-layer rounded-t-3xl group cursor-pointer hover:paper-layer-lifted transition-all"
            style={{ transform: `translateY(${scrollProgress * -10}px)` }}
          >
            <div className="grid grid-cols-3 gap-1 p-2">
              {[...Array(9)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-full h-6 bg-secondary/20 rounded group-hover:bg-secondary/50 transition-colors"
                />
              ))}
            </div>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100">
              {'Office'}
            </div>
          </div>

          {/* Planet 2 */}
          <div 
            className="absolute bottom-[20%] left-[25%] w-28 h-28 bg-accent/30 rounded-full paper-layer group cursor-pointer hover:paper-layer-lifted transition-all"
            style={{ transform: `scale(${1 + scrollProgress * 0.15})` }}
          >
            <div className="absolute inset-0 bg-accent/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-medium opacity-0 group-hover:opacity-100">
              {'Outdoor'}
            </div>
          </div>

          {/* Stars */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-secondary rounded-full paper-layer"
              style={{
                top: `${Math.random() * 80 + 10}%`,
                left: `${Math.random() * 80 + 10}%`,
                opacity: 0.3 + scrollProgress * 0.7,
                transform: `scale(${0.5 + scrollProgress * 0.5})`,
              }}
            />
          ))}

          {/* Central projector */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-card paper-deep rounded-2xl rotate-6 hover:rotate-0 transition-transform">
            <div className="absolute top-1/2 left-1/2 w-12 h-12 -translate-x-1/2 -translate-y-1/2 bg-primary/30 rounded-full" />
            <div className="absolute top-1/2 left-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2 bg-primary/60 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
