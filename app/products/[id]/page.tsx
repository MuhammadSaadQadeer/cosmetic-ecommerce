'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

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
    howToUse: 'Apply a small amount to your face and blend with a brush or sponge.' 
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
    howToUse: 'Apply directly to lips, starting from the center and moving outwards.' 
  },
  { 
    id: 3, 
    name: 'Glow Serum', 
    price: 54.99, 
    images: [
      'https://images.unsplash.com/photo-1570194065650-d99fb4b38b17?auto=format&fit=crop&q=80&w=600&h=600',
      'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=600&h=600',
      'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=600&h=600',
      'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=600&h=600'
    ],
    category: 'Skincare', 
    description: 'A hydrating serum that gives your skin a healthy, dewy glow.', 
    ingredients: 'Water, Propylene Glycol, Glycerin, Niacinamide, Sodium Hyaluronate', 
    howToUse: 'Apply a few drops to clean, dry skin morning and night before moisturizer.' 
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
            <TabsList className="grid w-full grid-cols-3 bg-secondary">
              <TabsTrigger value="ingredients" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Ingredients</TabsTrigger>
              <TabsTrigger value="how-to-use" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">How to Use</TabsTrigger>
              <TabsTrigger value="reviews" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Reviews</TabsTrigger>
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
                  <p>No reviews yet.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

