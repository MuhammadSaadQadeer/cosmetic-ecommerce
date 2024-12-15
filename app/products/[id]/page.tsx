'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Link from 'next/link'

const products = [
  { 
    id: 1, 
    name: 'Radiant Foundation', 
    price: 39.99, 
    images: [
      'https://images.unsplash.com/photo-1590156206657-aec9b9d91417?auto=format&fit=crop&q=80&w=600&h=600',
      'https://images.unsplash.com/photo-1614159102522-54b0f8e28f95?auto=format&fit=crop&q=80&w=600&h=600',
      'https://images.unsplash.com/photo-1614159102522-54b0f8e28f95?auto=format&fit=crop&q=80&w=600&h=600',
      'https://images.unsplash.com/photo-1614159102522-54b0f8e28f95?auto=format&fit=crop&q=80&w=600&h=600'
    ],
    category: 'Face', 
    description: 'A lightweight foundation that provides a natural, radiant finish.', 
    ingredients: 'Water, Cyclopentasiloxane, Titanium Dioxide, Glycerin, Dimethicone', 
    howToUse: 'Apply a small amount to your face and blend with a brush or sponge.',
    rating: 4.5,
    reviews: [
      { id: 1, user: 'Sarah L.', rating: 5, comment: 'Love this foundation! It gives me a natural glow.' },
      { id: 2, user: 'Emily R.', rating: 4, comment: 'Great coverage, but a bit shiny for my oily skin.' }
    ]
  },
  { 
    id: 2, 
    name: 'Velvet Lipstick', 
    price: 24.99, 
    images: [
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=600&h=600',
      'https://images.unsplash.com/photo-1591360236340-97a8f1a41e84?auto=format&fit=crop&q=80&w=600&h=600',
      'https://images.unsplash.com/photo-1591360236340-97a8f1a41e84?auto=format&fit=crop&q=80&w=600&h=600',
      'https://images.unsplash.com/photo-1591360236340-97a8f1a41e84?auto=format&fit=crop&q=80&w=600&h=600'
    ],
    category: 'Lips', 
    description: 'A creamy, long-lasting lipstick with a velvet matte finish.', 
    ingredients: 'Ricinus Communis (Castor) Seed Oil, Caprylic/Capric Triglyceride, Cetyl Ethylhexanoate', 
    howToUse: 'Apply directly to lips, starting from the center and moving outwards.',
    rating: 4.8,
    reviews: [
      { id: 1, user: 'Jessica M.', rating: 5, comment: `The best lipstick I've ever used! So smooth and long-lasting.` },
      { id: 2, user: 'Amanda K.', rating: 4, comment: 'Beautiful color, but slightly drying. Use with lip balm.' }
    ]
  },
]

export default function ProductPage() {
  const { id } = useParams()
  const product = products.find(p => p.id === Number(id))
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  if (!product) {
    return <div className="container mx-auto px-4 py-8">Product not found</div>
  }

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Card>
            <CardContent className="p-0">
              <Image 
                src={product.images[selectedImage]} 
                alt={product.name} 
                width={600} 
                height={600} 
                className="w-full h-auto"
              />
            </CardContent>
          </Card>
          <div className="mt-4 flex justify-center space-x-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-16 h-16 border-2 ${
                  selectedImage === index ? 'border-primary' : 'border-transparent'
                }`}
              >
                <Image 
                  src={image} 
                  alt={`${product.name} thumbnail ${index + 1}`} 
                  width={64} 
                  height={64} 
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2 text-primary">{product.name}</h1>
          <p className="text-2xl font-semibold mb-4 text-secondary-foreground">${product.price.toFixed(2)}</p>
          <div className="flex items-center mb-4">
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
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="flex items-center space-x-4 mb-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              -
            </Button>
            <span className="text-secondary-foreground">{quantity}</span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setQuantity(quantity + 1)}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              +
            </Button>
          </div>
          <Button className="w-full mb-4" onClick={() => alert(`Added ${quantity} ${product.name} to cart`)}>
            Add to Cart
          </Button>
          <Tabs defaultValue="ingredients" className="mt-8">
            <TabsList className="grid w-full grid-cols-4 bg-secondary">
              <TabsTrigger value="ingredients" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Ingredients</TabsTrigger>
              <TabsTrigger value="how-to-use" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">How to Use</TabsTrigger>
              <TabsTrigger value="reviews" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Reviews</TabsTrigger>
              <TabsTrigger value="related" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Related</TabsTrigger>
            </TabsList>
            <TabsContent value="ingredients">
              <Card>
                <CardContent className="pt-4 text-secondary-foreground">
                  <p>{product.ingredients}</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="how-to-use">
              <Card>
                <CardContent className="pt-4 text-secondary-foreground">
                  <p>{product.howToUse}</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="reviews">
              <Card>
                <CardContent className="pt-4 text-secondary-foreground">
                  {product.reviews.map((review) => (
                    <div key={review.id} className="mb-4">
                      <div className="flex items-center mb-2">
                        <span className="font-semibold mr-2">{review.user}</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating ? 'text-yellow-400' : 'text-gray-300'
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
                      <p>{review.comment}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="related">
              <Card>
                <CardContent className="pt-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {relatedProducts.map((relatedProduct) => (
                      <div key={relatedProduct.id} className="flex items-center space-x-4">
                        <Image
                          src={relatedProduct.images[0]}
                          alt={relatedProduct.name}
                          width={80}
                          height={80}
                          className="rounded-md"
                        />
                        <div>
                          <h3 className="font-semibold text-primary">{relatedProduct.name}</h3>
                          <p className="text-sm text-secondary-foreground">${relatedProduct.price.toFixed(2)}</p>
                          <Button asChild size="sm" className="mt-2">
                            <Link href={`/products/${relatedProduct.id}`}>View</Link>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
