'use client'

import { useState, useEffect } from 'react'

const testimonials = [
  { id: 1, name: 'Sarah L.', content: 'I love the Radiant Foundation! It gives me a natural glow that lasts all day.', rating: 5 },
  { id: 2, name: 'Emily R.', content: 'The Velvet Lipstick is my go-to for a perfect night out look. So smooth and long-lasting!', rating: 4 },
  { id: 3, name: 'Jessica M.', content: 'Glow Serum has completely transformed my skincare routine. My skin has never looked better!', rating: 5 },
]

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
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
  )
}

