'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

const products = [
  { id: 1, name: 'Radiant Foundation', price: 39.99, image: 'https://images.unsplash.com/photo-1590156206657-aec9b9d91417?auto=format&fit=crop&q=80&w=300&h=300', category: 'Face' },
  { id: 2, name: 'Velvet Lipstick', price: 24.99, image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=300&h=300', category: 'Lips' },
  { id: 3, name: 'Glow Serum', price: 54.99, image: 'https://images.unsplash.com/photo-1570194065650-d99fb4b38b17?auto=format&fit=crop&q=80&w=300&h=300', category: 'Skincare' },
  { id: 4, name: 'Eyeshadow Palette', price: 49.99, image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=300&h=300', category: 'Eyes' },
  { id: 5, name: 'Volumizing Mascara', price: 29.99, image: 'https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?auto=format&fit=crop&q=80&w=300&h=300', category: 'Eyes' },
  { id: 6, name: 'Hydrating Moisturizer', price: 44.99, image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&q=80&w=300&h=300', category: 'Skincare' },
]

const categories = ['Face', 'Lips', 'Skincare', 'Eyes']

export default function ProductsPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 4

  const filteredProducts = products.filter(product => 
    (selectedCategories.length === 0 || selectedCategories.includes(product.category)) &&
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-primary">All Products</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/4">
          <Input 
            type="text" 
            placeholder="Search products..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mb-4"
          />
          <h2 className="text-xl font-semibold mb-4 text-primary">Filter by Category</h2>
          <div className="space-y-2">
            {categories.map(category => (
              <div key={category} className="flex items-center">
                <Checkbox
                  id={category}
                  checked={selectedCategories.includes(category)}
                  onCheckedChange={(checked) => {
                    setSelectedCategories(
                      checked
                        ? [...selectedCategories, category]
                        : selectedCategories.filter(c => c !== category)
                    )
                  }}
                />
                <Label htmlFor={category} className="ml-2">{category}</Label>
              </div>
            ))}
          </div>
        </aside>
        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover-grow">
                <CardHeader className="p-0">
                  <Image src={product.image} alt={product.name} width={300} height={300} className="w-full h-48 object-cover" />
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-primary">{product.name}</CardTitle>
                  <p className="text-lg font-semibold text-secondary-foreground">${product.price.toFixed(2)}</p>
                  <p className="text-sm text-muted-foreground">{product.category}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={`/products/${product.id}`}>View Product</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            {[...Array(Math.ceil(filteredProducts.length / productsPerPage))].map((_, index) => (
              <Button
                key={index}
                onClick={() => paginate(index + 1)}
                variant={currentPage === index + 1 ? 'default' : 'outline'}
                className="mx-1"
              >
                {index + 1}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

