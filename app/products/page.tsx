'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const products = [
  { id: 1, name: 'Radiant Foundation', price: 39.99, image: 'https://images.unsplash.com/photo-1590156206657-aec9b9d91417?auto=format&fit=crop&q=80&w=300&h=300', category: 'Face', rating: 4.5 },
  { id: 2, name: 'Velvet Lipstick', price: 24.99, image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=300&h=300', category: 'Lips', rating: 4.8 },
  { id: 3, name: 'Glow Serum', price: 54.99, image: 'https://images.unsplash.com/photo-1570194065650-d99fb4b38b17?auto=format&fit=crop&q=80&w=300&h=300', category: 'Skincare', rating: 4.7 },
  { id: 4, name: 'Eyeshadow Palette', price: 49.99, image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=300&h=300', category: 'Eyes', rating: 4.6 },
  { id: 5, name: 'Volumizing Mascara', price: 29.99, image: 'https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?auto=format&fit=crop&q=80&w=300&h=300', category: 'Eyes', rating: 4.4 },
  { id: 6, name: 'Hydrating Moisturizer', price: 44.99, image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&q=80&w=300&h=300', category: 'Skincare', rating: 4.9 },
]

const categories = ['Face', 'Lips', 'Skincare', 'Eyes']

export default function ProductsPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('name')
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 4

  const filteredProducts = products
    .filter(product => 
      (selectedCategories.length === 0 || selectedCategories.includes(product.category)) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name)
      if (sortBy === 'price') return a.price - b.price
      if (sortBy === 'rating') return b.rating - a.rating
      return 0
    })

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)

  const pageCount = Math.ceil(filteredProducts.length / productsPerPage)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-primary">All Products</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/4">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-4 text-primary">Filters</h2>
              <div className="space-y-4">
                <div className='space-y-2'>
                  <h3 className="font-semibold mb-2">Categories</h3>
                  {categories.map(category => (
                    <div key={category} className="flex items-center space-x-2">
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
                      <Label htmlFor={category}>{category}</Label>
                    </div>
                  ))}
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Sort By</h3>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="name">Name</SelectItem>
                      <SelectItem value="price">Price</SelectItem>
                      <SelectItem value="rating">Rating</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </aside>
        <div className="w-full md:w-3/4">
          <div className="mb-4">
            <Input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
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
          <div className="mt-8 flex justify-center">
            <div className="join">
              {[...Array(pageCount)].map((_, index) => (
                <Button
                  key={index}
                  className={`join-item ${currentPage === index + 1 ? 'bg-primary text-primary-foreground mx-1' : ''}`}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
