import type { Product } from '../types'

export const mockProducts: Product[] = [
  {
    id: 'p-1',
    name: 'Classic Tee',
    description: 'Premium cotton t-shirt with a tailored fit.',
    priceCents: 1999,
    imageUrl: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=800&auto=format&fit=crop',
    category: 'Apparel',
    rating: 4.4,
    stock: 44,
  },
  {
    id: 'p-2',
    name: 'Everyday Sneakers',
    description: 'Lightweight sneakers designed for all-day comfort.',
    priceCents: 5999,
    imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop',
    category: 'Footwear',
    rating: 4.7,
    stock: 23,
  },
  {
    id: 'p-3',
    name: 'Minimal Backpack',
    description: 'Water-resistant backpack with padded laptop sleeve.',
    priceCents: 7499,
    imageUrl: 'https://images.unsplash.com/photo-1618355776460-8f835f25e9e9?q=80&w=800&auto=format&fit=crop',
    category: 'Bags',
    rating: 4.6,
    stock: 15,
  },
]

export function findMockProductById(id: string): Product | undefined {
  return mockProducts.find((p) => p.id === id)
}
