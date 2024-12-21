import Link from 'next/link'
import Image from 'next/image'

const categories = [
  { name: 'Lips', image: 'https://images.unsplash.com/photo-1503236823255-94609f598e71?auto=format&fit=crop&q=80&w=300&h=300' },
  { name: 'Eyes', image: 'https://images.unsplash.com/photo-1583241800698-e8ab01830a07?auto=format&fit=crop&q=80&w=300&h=300' },
  { name: 'Face', image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb49?auto=format&fit=crop&q=80&w=300&h=300' },
  { name: 'Skincare', image: 'https://images.unsplash.com/photo-1498843053639-170ff2122f35?auto=format&fit=crop&q=80&w=300&h=300' },
]

export default function CategoriesSection() {
  return (
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
  )
}

