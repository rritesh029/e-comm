import { useState } from 'react'
import { useCartStore } from '../store/cart'

export default function CheckoutPage() {
  const total = useCartStore((s) => s.totalCents())
  const clear = useCartStore((s) => s.clear)
  const [placing, setPlacing] = useState(false)
  const [placed, setPlaced] = useState(false)

  async function placeOrder(e: React.FormEvent) {
    e.preventDefault()
    setPlacing(true)
    await new Promise((r) => setTimeout(r, 600))
    setPlacing(false)
    setPlaced(true)
    clear()
  }

  if (placed) {
    return <p className="text-center">Thank you! Your order has been placed.</p>
  }

  return (
    <form onSubmit={placeOrder} className="mx-auto max-w-2xl space-y-4">
      <h1 className="text-2xl font-semibold">Checkout</h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium">First name</label>
          <input className="mt-1 w-full rounded-md border p-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Last name</label>
          <input className="mt-1 w-full rounded-md border p-2" required />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium">Address</label>
          <input className="mt-1 w-full rounded-md border p-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium">City</label>
          <input className="mt-1 w-full rounded-md border p-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Postal code</label>
          <input className="mt-1 w-full rounded-md border p-2" required />
        </div>
      </div>

      <div className="flex items-center justify-between border-t pt-4">
        <p>Total</p>
        <p className="text-lg font-semibold">${(total / 100).toFixed(2)}</p>
      </div>

      <button
        type="submit"
        className="rounded-md bg-gray-900 px-4 py-2 text-white disabled:opacity-50"
        disabled={placing}
      >
        {placing ? 'Placing order…' : 'Place order'}
      </button>
    </form>
  )
}
