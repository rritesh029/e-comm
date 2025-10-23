import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from '../services/products'
import { useCartStore } from '../store/cart'
import QuantitySelector from '../components/QuantitySelector'
import type { Product } from '../types'

export default function ProductPage() {
  const { id } = useParams<{ id: string }>()
  const [product, setProduct] = useState<Product | undefined>()
  const [loading, setLoading] = useState(true)
  const [qty, setQty] = useState(1)
  const addItem = useCartStore((s) => s.addItem)

  useEffect(() => {
    if (!id) return
    let mounted = true
    getProduct(id).then((p) => {
      if (mounted) {
        setProduct(p)
        setLoading(false)
      }
    })
    return () => {
      mounted = false
    }
  }, [id])

  if (loading) return <p className="text-center text-gray-600">Loading…</p>
  if (!product) return <p className="text-center text-gray-600">Product not found.</p>

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <img src={product.imageUrl} alt={product.name} className="w-full rounded-lg object-cover" />
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">{product.name}</h1>
        <p className="text-gray-700">{product.description}</p>
        <p className="text-xl font-semibold">${(product.priceCents / 100).toFixed(2)}</p>
        <QuantitySelector value={qty} onChange={setQty} max={product.stock ?? 99} />
        <div>
          <button
            className="mt-2 rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-black"
            onClick={() => addItem(product, qty)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}
