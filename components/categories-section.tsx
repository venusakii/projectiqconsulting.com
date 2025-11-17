'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Home, Briefcase, Tent } from 'lucide-react'

const categories = [
  {
    name: 'Home Cinema',
    icon: Home,
    description: 'Turn your living room into a theater',
    color: 'bg-primary/10 hover:bg-primary/20'
  },
  {
    name: 'Office Tools',
    icon: Briefcase,
    description: 'Professional presentations anywhere',
    color: 'bg-secondary/20 hover:bg-secondary/30'
  },
  {
    name: 'Outdoor',
    icon: Tent,
    description: 'Movie nights under the stars',
    color: 'bg-accent/20 hover:bg-accent/30'
  },
]

export function CategoriesSection() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null)

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-balance">
            {'Project Categories'}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {'Find the perfect projector for your needs'}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon
            const isActive = activeCategory === index
            
            return (
              <Card
                key={index}
                className={`p-8 paper-layer hover:paper-layer-lifted transition-all duration-300 cursor-pointer border-2 ${category.color}`}
                onMouseEnter={() => setActiveCategory(index)}
                onMouseLeave={() => setActiveCategory(null)}
                style={{
                  transform: isActive ? 'translateY(-8px) rotate(2deg)' : 'translateY(0) rotate(0deg)',
                }}
              >
                <div className="text-center">
                  <div className={`inline-flex p-4 rounded-2xl mb-4 paper-layer ${
                    index === 0 ? 'bg-primary/20' : index === 1 ? 'bg-secondary/30' : 'bg-accent/30'
                  }`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl mb-3">{category.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
