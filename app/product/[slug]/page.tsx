import { notFound } from 'next/navigation'
import { Star, Check, ShoppingCart, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

const products = [
  {
    name: 'Nebula Capsule Projector',
    slug: 'nebula-capsule-projector',
    category: 'Portable Cinema',
    rating: 4.5,
    reviews: 1243,
    price: '$299',
    image: 'https://m.media-amazon.com/images/I/81jrZ1QCCCL._AC_SX679_.jpg',
    description: 'Palm-sized portable projector with built-in speaker, perfect for on-the-go movie nights and presentations.',
    features: ['720p HD Resolution', 'Built-in Battery', 'Wireless Connectivity', 'Compact Design', 'Integrated Speaker'],
    pros: ['Ultra portable', 'Easy setup', 'Good battery life', 'Clear projection'],
    cons: ['Limited brightness', 'Basic audio'],
    amazonLink: 'https://www.amazon.com/Capsule-Projector-Palm-Sized-Portable-Speaker/dp/B0FY41QXJQ'
  },
  {
    name: 'XGIMI MoGo Pro',
    slug: 'xgimi-mogo-pro',
    category: 'Smart Projector',
    rating: 4.8,
    reviews: 892,
    price: '$499',
    image: 'https://m.media-amazon.com/images/I/81rgJ6m2HlL._AC_SX679_.jpg',
    description: 'Compact smart projector with PowerBase stand, delivering high-quality images and smart features for entertainment anywhere.',
    features: ['1080p Full HD', 'Android TV Integration', 'Harman Kardon Audio', 'Auto Keystone', 'Portable with Stand'],
    pros: ['Stunning visuals', 'Premium sound', 'Versatile setup', 'Smart capabilities'],
    cons: ['Battery optional', 'Slight fan noise'],
    amazonLink: 'https://www.amazon.com/XGIMI-MoGo-Pro-PowerBase-Stand/dp/B0D8KFC85K'
  },
  {
    name: 'ViewSonic M1X',
    slug: 'viewsonic-m1x',
    category: 'Ultra Portable',
    rating: 4.3,
    reviews: 567,
    price: '$229',
    image: 'https://m.media-amazon.com/images/I/61QsauT9RnL._AC_SX679_.jpg',
    description: 'Mini portable projector with smart adjustment and Bluetooth for versatile viewing and presentations.',
    features: ['WVGA Resolution', 'Built-in Battery', 'Harman Kardon Speaker', 'Smart Stand', 'Bluetooth Connectivity'],
    pros: ['Affordable', 'Compact', 'Good for travel', 'Wireless audio'],
    cons: ['Lower resolution', 'Modest brightness'],
    amazonLink: 'https://www.amazon.com/ViewSonic-M1X-Projector-Adjustment-Bluetooth/dp/B0DCZKT4BR'
  },
  {
    name: 'AAXA Pico MAX',
    slug: 'aaxa-pico-max',
    category: 'HD Projector',
    rating: 4.6,
    reviews: 445,
    price: '$399',
    image: 'https://m.media-amazon.com/images/I/61PTyGfmOTL._AC_SX679_.jpg',
    description: 'Mini HD projector with wireless mirroring, ideal for professional and casual use with high portability.',
    features: ['HD 720p Native', '300 ANSI Lumens', 'Wireless Mirroring', 'Built-in Battery', 'HDMI/USB Support'],
    pros: ['Bright display', 'Versatile connectivity', 'Portable', 'Clear HD'],
    cons: ['Limited smart features', 'Battery life varies'],
    amazonLink: 'https://www.amazon.com/AAXA-Pico-MAX-Projector-Mirroring/dp/B0D6QGRNP4'
  },
  {
    name: 'Kodak Luma 150',
    slug: 'kodak-luma-150',
    category: 'Pocket Projector',
    rating: 4.2,
    reviews: 678,
    price: '$249.99',
    image: 'https://m.media-amazon.com/images/I/814bJfVY45L._AC_SX679_.jpg',
    description: 'Wireless mini pico projector with DLP technology, built-in speaker, and rechargeable battery for travel and entertainment.',
    features: ['Supports 1080p Input', '55 ANSI Lumens', 'Wireless Mirroring (Airplay/Miracast)', 'Up to 1.5 Hour Battery', 'HDMI/USB/microSD Connectivity'],
    pros: ['Truly pocket-sized', 'Easy wireless streaming', 'Multiple connection options', 'Includes travel case'],
    cons: ['Best in low light', 'Lower brightness', 'Short battery for long sessions'],
    amazonLink: 'https://www.amazon.com/Kodak-Luma-Wireless-Projector-Built/dp/B0FGGQ2S5N'
  },
  {
    name: 'Anker Portable Projector',
    slug: 'anker-portable-projector',
    category: '1080p Portable',
    rating: 4.7,
    reviews: 1089,
    price: '$549',
    image: 'https://m.media-amazon.com/images/I/71K2YykgvVL._AC_SX679_.jpg',
    description: 'Portable projector with generator charging capability, designed for outdoor and mobile use with high performance.',
    features: ['1080p Resolution', 'Built-in Battery', 'Wireless Streaming', 'Power Bank Function', 'Dual Speakers'],
    pros: ['Versatile power options', 'Bright and clear', 'Long runtime', 'Durable build'],
    cons: ['Higher price', 'Bulkier than mini models'],
    amazonLink: 'https://www.amazon.com/Anker-Portable-Generator-Charging-Projector/dp/B0FLDDVG88'
  },
  {
    name: 'BenQ HT2060',
    slug: 'benq-ht2060',
    category: 'Wireless Projector',
    rating: 4.5,
    reviews: 734,
    price: '$599',
    image: 'https://m.media-amazon.com/images/I/610aJKRDQFL._AC_SX679_.jpg',
    description: 'Home theater projector with vertical keystone correction for easy setup and immersive viewing.',
    features: ['1080p Full HD', 'Vertical Lens Shift', 'Low Input Lag', 'HDR Support', 'Quiet Operation'],
    pros: ['Excellent image quality', 'Flexible installation', 'Gaming friendly', 'Color accuracy'],
    cons: ['Requires power outlet', 'Not battery-powered'],
    amazonLink: 'https://www.amazon.com/BenQ-HT2060-Projector-Vertical-Keystone/dp/B0BWGXHVRV'
  },
  {
    name: 'LG Electronics Projector',
    slug: 'lg-electronics-projector',
    category: 'LED Projector',
    rating: 4.4,
    reviews: 456,
    price: '$329',
    image: 'https://m.media-amazon.com/images/I/51hLmJnpOBS._AC_SX679_.jpg',
    description: 'Portable LED projector with wireless connectivity and Bluetooth for smart home entertainment.',
    features: ['720p Resolution', 'Built-in Battery', 'webOS Smart Platform', 'Bluetooth Audio', 'Wireless Screen Share'],
    pros: ['Smart features', 'Good portability', 'Reliable brand', 'Easy connectivity'],
    cons: ['Average brightness', 'App ecosystem limits'],
    amazonLink: 'https://www.amazon.com/LG-Electronics-Projector-connectivity-Bluetooth/dp/B093L75CRG'
  },
  {
    name: 'SAMSUNG Freestyle',
    slug: 'samsung-freestyle',
    category: 'Smart Portable',
    rating: 4.2,
    reviews: 372,
    price: '$597.99',
    image: 'https://m.media-amazon.com/images/I/71u4IRKLTFL._AC_SX679_.jpg',
    description: 'The Freestyle 2nd Gen smart portable projector with Gaming Hub, offering FHD, HDR, and 360° sound for big screen experiences anywhere.',
    features: ['FHD 1080p Resolution', 'Auto Leveling & Focus', 'Tizen Smart TV', 'Gaming Hub', '360° Audio'],
    pros: ['Incredible portability', 'Easy auto-setup', 'Immersive sound', 'Versatile smart features'],
    cons: ['Poor brightness in light', 'Some connectivity issues', 'Premium pricing'],
    amazonLink: 'https://www.amazon.com/SAMSUNG-Freestyle-Projector-Experience-SP-LFF3CLAXXZA/dp/B0C87Q4R51'
  },
  {
    name: 'Optoma UHZ66',
    slug: 'optoma-uhz66',
    category: 'Business Portable',
    rating: 4.3,
    reviews: 389,
    price: '$449',
    image: 'https://m.media-amazon.com/images/I/613UsHsLk0L._AC_SX679_.jpg',
    description: 'Compact cinema projector with laser technology for professional presentations and home use.',
    features: ['4K UHD Resolution', 'Laser Light Source', 'HDR10 Support', 'Compact Design', 'Vertical Keystone'],
    pros: ['High resolution', 'Long lamp life', 'Bright output', 'Flexible adjustments'],
    cons: ['Higher cost', 'Fan noise in quiet rooms'],
    amazonLink: 'https://www.amazon.com/Optoma-UHZ66-Compact-Cinema-Projector/dp/B0CKXWQQNP'
  },
]

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find(p => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  return (
    <main className="min-h-screen pt-20 pb-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          {' / '}
          <Link href="/projectors" className="hover:text-foreground transition-colors">Projectors</Link>
          {' / '}
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="paper-layer rounded-3xl overflow-hidden border-2 border-border bg-card">
            <img 
              src={product.image || "/placeholder.svg"} 
              alt={product.name}
              className="w-full h-auto"
            />
          </div>

          {/* Product Info */}
          <div>
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium paper-layer mb-4">
              {product.category}
            </div>
            <h1 className="font-serif text-4xl md:text-5xl mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-muted'}`}
                  />
                ))}
              </div>
              <span className="text-lg font-medium">{product.rating}</span>
              <span className="text-muted-foreground">({product.reviews} reviews)</span>
            </div>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {product.description}
            </p>

            

            <div className="flex gap-4 mb-8">
              <Button asChild size="lg" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 paper-layer">
                <a href={product.amazonLink} target="_blank" rel="noopener noreferrer nofollow">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  {'Buy on Amazon'}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>

            <div className="text-xs text-muted-foreground italic">
              {'As an Amazon Associate, we earn from qualifying purchases.'}
            </div>
          </div>
        </div>

        {/* Features */}
        <Card className="paper-layer border-2 border-border mb-8">
          <CardContent className="pt-6">
            <h2 className="font-serif text-2xl mb-4">{'Key Features'}</h2>
            <ul className="space-y-3">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Pros & Cons */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="paper-layer border-2 border-border">
            <CardContent className="pt-6">
              <h2 className="font-serif text-2xl mb-4 text-green-600">{'Pros'}</h2>
              <ul className="space-y-3">
                {product.pros.map((pro, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{pro}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="paper-layer border-2 border-border">
            <CardContent className="pt-6">
              <h2 className="font-serif text-2xl mb-4 text-red-600">{'Cons'}</h2>
              <ul className="space-y-3">
                {product.cons.map((con, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 shrink-0 mt-0.5 flex items-center justify-center">
                      <div className="w-3 h-0.5 bg-red-600 rounded-full"></div>
                    </div>
                    <span className="text-muted-foreground">{con}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
