'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

const featuredProducts = [
  { id: 1, name: 'Radiant Foundation', price: 39.99, image: 'https://images.unsplash.com/photo-1590156206657-aec9b9d91417?auto=format&fit=crop&q=80&w=300&h=300', rating: 4.5 },
  { id: 2, name: 'Velvet Lipstick', price: 24.99, image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=300&h=300', rating: 4.8 },
  { id: 3, name: 'Glow Serum', price: 54.99, image: 'https://images.unsplash.com/photo-1570194065650-d99fb4b38b17?auto=format&fit=crop&q=80&w=300&h=300', rating: 4.7 },
  { id: 4, name: 'Eyeshadow Palette', price: 49.99, image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=300&h=300', rating: 4.6 },
]

const categories = [
  { name: 'Lips', image: 'https://images.unsplash.com/photo-1503236823255-94609f598e71?auto=format&fit=crop&q=80&w=300&h=300' },
  { name: 'Eyes', image: 'https://images.unsplash.com/photo-1583241800698-e8ab01830a07?auto=format&fit=crop&q=80&w=300&h=300' },
  { name: 'Face', image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb49?auto=format&fit=crop&q=80&w=300&h=300' },
  { name: 'Skincare', image: 'https://images.unsplash.com/photo-1498843053639-170ff2122f35?auto=format&fit=crop&q=80&w=300&h=300' },
]

const testimonials = [
  { id: 1, name: 'Sarah L.', content: 'I love the Radiant Foundation! It gives me a natural glow that lasts all day.', rating: 5 },
  { id: 2, name: 'Emily R.', content: 'The Velvet Lipstick is my go-to for a perfect night out look. So smooth and long-lasting!', rating: 4 },
  { id: 3, name: 'Jessica M.', content: 'Glow Serum has completely transformed my skincare routine. My skin has never looked better!', rating: 5 },
]

const carouselItems = [
  { id: 1, image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb49?auto=format&fit=crop&q=80&w=2000&h=600', title: 'Summer Collection', subtitle: 'Discover our new range of summer essentials' },
  { id: 2, image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=2000&h=600', title: 'Glow Up', subtitle: 'Transform your skin with our bestselling serums' },
  { id: 3, image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=2000&h=600', title: 'Vibrant Lips', subtitle: 'Bold colors for every occasion' },
]

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <Carousel className="w-full">
          <CarouselContent>
            {carouselItems.map((item) => (
              <CarouselItem key={item.id}>
                <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden">
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-primary">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden hover-grow">
              <CardHeader className="p-0">
                <Image src={product.image} alt={product.name} width={300} height={300} className="w-full h-48 object-cover" />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-primary">{product.name}</CardTitle>
                <p className="text-lg font-semibold text-secondary-foreground">${product.price.toFixed(2)}</p>
                <div className="flex items-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm text-gray-600">({product.rating})</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={`/products/${product.id}`}>View Product</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-primary">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link key={category.name} href={`/products?category=${category.name.toLowerCase()}`}>
              <div className="relative h-40 rounded-lg overflow-hidden hover-grow">
                <Image 
                  src={category.image}
                  alt={category.name}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white text-shadow">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-primary">What Our Customers Say</h2>
        <div className="bg-secondary/50 p-6 rounded-lg">
          <div className="text-center">
            <p className="text-lg mb-4">&ldquo;{testimonials[activeTestimonial].content}&rdquo;</p>
            <p className="font-semibold">{testimonials[activeTestimonial].name}</p>
            <div className="flex justify-center mt-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${
                    i < testimonials[activeTestimonial].rating ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-primary">Stay Updated</h2>
        <Card>
          <CardContent className="p-6">
            <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }} className="flex flex-col sm:flex-row gap-4">
              <Input type="email" placeholder="Enter your email" className="flex-grow" required />
              <Button type="submit">Subscribe</Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

