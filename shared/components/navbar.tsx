import Link from 'next/link'
import { ShoppingCart, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">Glow Cosmetics</Link>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2">
            <Input type="text" placeholder="Search..." className="w-64" />
            <Button size="icon" variant="ghost">
              <Search className="h-5 w-5" />
            </Button>
          </div>
          <Link href="/cart">
            <Button variant="outline" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="bg-secondary text-secondary-foreground text-center py-2 text-sm">
        Free shipping on orders over $50!
      </div>
    </nav>
  )
}

