'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Ava Lin',
    role: 'Home Theater Enthusiast',
    content: 'ProjectIQ helped me find the perfect projector for my backyard movie nights. The reviews are thorough and honest!',
    rating: 5,
  },
  {
    name: 'Julian Ross',
    role: 'Business Consultant',
    content: 'As someone who travels for presentations, the portable projector recommendations have been invaluable.',
    rating: 5,
  },
  {
    name: 'Maya Ortiz',
    role: 'Content Creator',
    content: 'The detailed comparisons made my decision so much easier. Love my new mini projector!',
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-4 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-balance">
            {'Paper Stories'}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {'What our community says about their projector journey'}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="paper-layer hover:paper-layer-lifted transition-all duration-300 bg-card border-2 border-border group"
            >
              <CardContent className="pt-8 pb-8">
                {/* Hand-drawn style portrait circle */}
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full paper-layer mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-serif">{testimonial.name[0]}</span>
                </div>
                
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-center text-muted-foreground leading-relaxed mb-4 text-pretty">
                  {`"${testimonial.content}"`}
                </p>

                {/* Hand-drawn signature style */}
                <div className="text-center">
                  <p className="font-serif text-lg font-medium">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
