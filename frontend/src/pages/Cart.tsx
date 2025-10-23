import { Link } from 'react-router-dom'
import QuantitySelector from '../components/QuantitySelector'
import { useCartStore } from '../store/cart'

export default function CartPage() {
  const { items, setQuantity, removeItem, totalCents } = useCartStore((s) => ({
    items: s.items,
    setQuantity: s.setQuantity,
    removeItem: s.removeItem,
    totalCents: s.totalCents,
  }))

  if (items.length === 0) {
    return (
      <div className="text-center text-gray-600">
        <p>Your cart is empty.</p>
        <Link to="/" className="mt-4 inline-block rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-black">Continue shopping</Link>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Your cart</h1>
      <ul className="space-y-4">
        {items.map(({ product, quantity }) => (
          <li key={product.id} className="flex items-center gap-4 rounded-lg border bg-white p-4">
            <img src={product.imageUrl} alt={product.name} className="h-20 w-20 rounded object-cover" />
            <div className="flex-1">
              <p className="font-medium">{product.name}</p>
              <p className="text-sm text-gray-600">${(product.priceCents / 100).toFixed(2)}</p>
            </div>
            <QuantitySelector value={quantity} onChange={(v) => setQuantity(product.id, v)} />
            <button className="text-sm text-red-600" onClick={() => removeItem(product.id)}>Remove</button>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between border-t pt-4">
        <p className="text-lg font-semibold">Total</p>
        <p className="text-lg font-semibold">${(totalCents() / 100).toFixed(2)}</p>
      </div>

      <div>
        <Link to="/checkout" className="inline-block rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-black">Proceed to checkout</Link>
      </div>
    </div>
  )
}
