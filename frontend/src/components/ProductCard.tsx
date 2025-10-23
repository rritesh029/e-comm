import { Link } from 'react-router-dom'
import type { Product } from '../types'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group rounded-lg border bg-white shadow-sm overflow-hidden">
      <Link to={`/product/${product.id}`} className="block">
        <img src={product.imageUrl} alt={product.name} className="h-56 w-full object-cover transition-transform group-hover:scale-[1.02]" />
        <div className="p-4">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-medium text-gray-900 line-clamp-1">{product.name}</h3>
            <p className="font-semibold text-gray-900">${(product.priceCents / 100).toFixed(2)}</p>
          </div>
          <p className="mt-1 text-sm text-gray-600 line-clamp-2">{product.description}</p>
        </div>
      </Link>
    </div>
  )
}
