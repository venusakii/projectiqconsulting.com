'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasAccepted = localStorage.getItem('cookies-accepted')
    if (!hasAccepted) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookies-accepted', 'true')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50 animate-in slide-in-from-bottom-5">
      <div className="bg-card paper-deep rounded-2xl p-6 border-2 border-border relative">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="font-serif text-xl mb-2">{'Cookie Notice'}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {'This website uses cookies to improve your experience and to support our affiliate partnerships.'}
        </p>

        <Button
          onClick={handleAccept}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 paper-layer"
        >
          {'Accept Cookies'}
        </Button>
      </div>
    </div>
  )
}
