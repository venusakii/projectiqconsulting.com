'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Send } from 'lucide-react'

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  return (
    <section className="py-24 px-4 bg-muted relative overflow-hidden">
      {/* Floating paper planes */}
      {isSubmitted && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="animate-[ping_1s_ease-in-out] w-8 h-8 bg-primary/20 rounded-full" />
        </div>
      )}

      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-balance">
            {'Send Us a Paper Plane'}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {'Have questions? We\'d love to hear from you'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="paper-layer bg-card p-4 rounded-2xl transition-all focus-within:paper-layer-lifted">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                {'Name'}
              </label>
              <Input
                id="name"
                placeholder="Your name"
                required
                className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 p-0"
              />
            </div>

            <div className="paper-layer bg-card p-4 rounded-2xl transition-all focus-within:paper-layer-lifted">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                {'Email'}
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                required
                className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 p-0"
              />
            </div>
          </div>

          <div className="paper-layer bg-card p-4 rounded-2xl transition-all focus-within:paper-layer-lifted">
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              {'Message'}
            </label>
            <Textarea
              id="message"
              placeholder="Tell us what you're looking for..."
              rows={6}
              required
              className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 p-0 resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting || isSubmitted}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 paper-layer hover:paper-layer-lifted transition-all duration-300 rounded-2xl py-6 text-lg group"
          >
            {isSubmitted ? (
              '✓ Message Sent!'
            ) : (
              <>
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  )
}
