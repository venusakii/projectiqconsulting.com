import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-foreground/5 border-t border-border relative overflow-hidden">
      {/* Rotating paper stars in background */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-6 h-6 bg-secondary rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `spin ${10 + i * 2}s linear infinite`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 paper-layer bg-card px-6 py-3 rounded-2xl">
            <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-primary rounded-full" />
            </div>
            <span className="font-serif text-2xl">{'ProjectIQ'}</span>
          </div>
        </div>

        {/* Footer content */}
        <div className="text-center text-sm text-muted-foreground space-y-3 max-w-2xl mx-auto">
          <p className="leading-relaxed">
            {'© 2025 ProjectIQConsulting.com. All rights reserved.'}
          </p>
          <p className="leading-relaxed">
            {'Participant in the Amazon Services LLC Associates Program.'}
          </p>
          <p className="leading-relaxed font-medium">
            {'🛒 As an Amazon Associate, we earn from qualifying purchases.'}
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm">
          <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
            {'About'}
          </Link>
          <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
            {'Contact'}
          </Link>
          <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
            {'Privacy Policy'}
          </Link>
          <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
            {'Terms of Service'}
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </footer>
  )
}
