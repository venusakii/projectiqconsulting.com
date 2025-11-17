'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/projectors', label: 'Projectors' },
    { href: '/categories', label: 'Categories' },
    { href: '/reviews', label: 'Reviews' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream/95 backdrop-blur-sm shadow-paper'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-sky to-apricot rounded-lg shadow-paper-sm transform group-hover:scale-105 transition-transform" />
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
              P
            </div>
          </div>
          <span className="font-serif text-xl text-graphite font-semibold">
            ProjectIQ
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-graphite/80 hover:text-graphite font-medium transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/projectors"
            className="px-6 py-2.5 bg-sky text-white rounded-lg shadow-paper-sm hover:shadow-paper transform hover:-translate-y-0.5 transition-all duration-200 font-semibold"
          >
            Shop Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-graphite hover:text-sky transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-cream/98 backdrop-blur-sm border-t border-graphite/10 shadow-paper">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-graphite/80 hover:text-graphite font-medium py-2 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/projectors"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-6 py-2.5 bg-sky text-white rounded-lg shadow-paper-sm text-center font-semibold mt-2"
            >
              Shop Now
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
