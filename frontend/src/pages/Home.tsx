import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import Grid from '../components/Grid'
import { listProducts } from '../services/products'
import type { Product } from '../types'

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    listProducts().then((p) => {
      if (mounted) {
        setProducts(p)
        setLoading(false)
      }
    })
    return () => {
      mounted = false
    }
  }, [])

  if (loading) {
    return <p className="text-center text-gray-600">Loading products…</p>
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Featured products</h1>
      <Grid>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </Grid>
    </div>
  )
}
