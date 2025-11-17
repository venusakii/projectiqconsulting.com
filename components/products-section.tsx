'use client'

import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Star } from 'lucide-react'
import Link from 'next/link'

const products = [
  {
    name: 'Nebula Capsule Projector',
    slug: 'nebula-capsule-projector',
    category: 'Portable Cinema',
    rating: 4.5,
    price: '$299',
    image: 'https://m.media-amazon.com/images/I/81jrZ1QCCCL._AC_SX679_.jpg'
  },
  {
    name: 'XGIMI MoGo Pro',
    slug: 'xgimi-mogo-pro',
    category: 'Smart Projector',
    rating: 4.8,
    price: '$499',
    image: 'https://m.media-amazon.com/images/I/81rgJ6m2HlL._AC_SX679_.jpg'
  },
  {
    name: 'ViewSonic M1X',
    slug: 'viewsonic-m1x',
    category: 'Ultra Portable',
    rating: 4.3,
    price: '$229',
    image: 'https://m.media-amazon.com/images/I/61QsauT9RnL._AC_SX679_.jpg'
  },
  {
    name: 'AAXA Pico MAX',
    slug: 'aaxa-pico-max',
    category: 'HD Projector',
    rating: 4.6,
    price: '$399',
    image: 'https://m.media-amazon.com/images/I/61PTyGfmOTL._AC_SX679_.jpg'
  },
  {
    name: 'Kodak Luma 150',
    slug: 'kodak-luma-150',
    category: 'Pocket Projector',
    rating: 4.2,
    price: '$249.99',
    image: 'https://m.media-amazon.com/images/I/814bJfVY45L._AC_SX679_.jpg'
  },
  {
    name: 'Anker Portable Projector',
    slug: 'anker-portable-projector',
    category: '1080p Portable',
    rating: 4.7,
    price: '$549',
    image: 'https://m.media-amazon.com/images/I/71K2YykgvVL._AC_SX679_.jpg'
  },
  {
    name: 'BenQ HT2060',
    slug: 'benq-ht2060',
    category: 'Wireless Projector',
    rating: 4.5,
    price: '$599',
    image: 'https://m.media-amazon.com/images/I/610aJKRDQFL._AC_SX679_.jpg'
  },
  {
    name: 'LG Electronics Projector',
    slug: 'lg-electronics-projector',
    category: 'LED Projector',
    rating: 4.4,
    price: '$329',
    image: 'https://m.media-amazon.com/images/I/51hLmJnpOBS._AC_SX679_.jpg'
  },
  {
    name: 'SAMSUNG Freestyle',
    slug: 'samsung-freestyle',
    category: 'Smart Portable',
    rating: 4.2,
    price: '$597.99',
    image: 'https://m.media-amazon.com/images/I/71u4IRKLTFL._AC_SX679_.jpg'
  },
  {
    name: 'Optoma UHZ66',
    slug: 'optoma-uhz66',
    category: 'Business Portable',
    rating: 4.3,
    price: '$449',
    image: 'https://m.media-amazon.com/images/I/613UsHsLk0L._AC_SX679_.jpg'
  },
]

export function ProductsSection() {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-balance">
            {'Top Mini Projectors'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {'Handpicked projectors that bring your content to life'}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="paper-layer hover:paper-layer-lifted transition-all duration-300 border-2 border-border bg-card overflow-hidden group cursor-pointer"
            >
              <div className="relative h-56 bg-muted overflow-hidden">
                <img 
                  src={product.image || "/placeholder.svg"} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium paper-layer">
                  {product.category}
                </div>
              </div>
              <CardContent className="pt-6">
                <h3 className="font-serif text-2xl mb-2">{product.name}</h3>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-muted'}`}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">
                    {product.rating}
                  </span>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 paper-layer">
                  <Link href={`/product/${product.slug}`}>
                    {'View Details'}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
