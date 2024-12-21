'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const carouselItems = [
  { id: 1, image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb49?auto=format&fit=crop&q=80&w=2000&h=600', title: 'Summer Collection', subtitle: 'Discover our new range of summer essentials' },
  { id: 2, image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=2000&h=600', title: 'Glow Up', subtitle: 'Transform your skin with our bestselling serums' },
  { id: 3, image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=2000&h=600', title: 'Vibrant Lips', subtitle: 'Bold colors for every occasion' },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)

  return (
    <section className="relative h-[400px] md:h-[600px] mb-12 overflow-hidden rounded-lg">
      {carouselItems.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image 
            src={item.image}
            alt={item.title}
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 text-shadow">{item.title}</h2>
              <p className="text-xl text-white mb-6 text-shadow">{item.subtitle}</p>
              <Button asChild className="bg-white text-primary hover:bg-primary hover:text-white">
                <Link href="/products">Shop Now</Link>
              </Button>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-primary" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-primary" />
      </button>
    </section>
  )
}

