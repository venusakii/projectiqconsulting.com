import { HeroSection } from '@/components/hero-section'
import { VisionSection } from '@/components/vision-section'
import { ProductsSection } from '@/components/products-section'
import { ImaginationSection } from '@/components/imagination-section'
import { VideoSection } from '@/components/video-section'
import { CategoriesSection } from '@/components/categories-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { AboutSection } from '@/components/about-section'
import { ContactSection } from '@/components/contact-section'
import { CookieBanner } from '@/components/cookie-banner'
// import { Footer } from '@/components/footer' // Removed Footer import since it's now in layout.tsx

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <VisionSection />
      <ProductsSection />
      <ImaginationSection />
      <VideoSection />
      <CategoriesSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
      <CookieBanner />
    </main>
  )
}
