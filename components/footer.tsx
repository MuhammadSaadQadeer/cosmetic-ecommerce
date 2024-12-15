import Link from 'next/link'
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-secondary/50 text-secondary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">About Us</h3>
            <p className="text-sm">Glow Cosmetics is your destination for premium beauty products. We believe in enhancing your natural beauty and empowering you to feel confident in your own skin.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Customer Service</h3>
            <ul className="text-sm space-y-2">
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/shipping" className="hover:text-primary transition-colors">Shipping & Returns</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li><Link href="/products" className="hover:text-primary transition-colors">All Products</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <Link href="#" className="text-secondary-foreground hover:text-primary transition-colors">
                <Facebook />
              </Link>
              <Link href="#" className="text-secondary-foreground hover:text-primary transition-colors">
                <Instagram />
              </Link>
              <Link href="#" className="text-secondary-foreground hover:text-primary transition-colors">
                <Twitter />
              </Link>
            </div>
            <div className="text-sm space-y-2">
              <p className="flex items-center">
                <Mail className="mr-2" size={16} />
                info@glowcosmetics.com
              </p>
              <p className="flex items-center">
                <Phone className="mr-2" size={16} />
                +1 (555) 123-4567
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-secondary-foreground/20 text-center text-sm">
          © 2023 Glow Cosmetics. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

