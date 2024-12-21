import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import HeroCarousel from '@/components/hero-carousel'
import FeaturedProducts from '@/components/featured-products'
import CategoriesSection from '@/components/categories-section'
import TestimonialsSection from '@/components/testimonials-section'
import NewsletterSignup from '@/components/newsletter-signup'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <HeroCarousel />
      <FeaturedProducts />
      <CategoriesSection />
      <TestimonialsSection />
      <NewsletterSignup />
    </div>
  )
}

