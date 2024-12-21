'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your newsletter service
    console.log('Submitted email:', email)
    alert('Thank you for subscribing!')
    setEmail('')
  }

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-primary">Stay Updated</h2>
      <Card>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow" 
              required 
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}

