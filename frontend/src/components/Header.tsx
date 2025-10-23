import { Link, NavLink } from 'react-router-dom'
import { useCartStore } from '../store/cart'

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const itemsCount = useCartStore((s) => s.items.reduce((n, i) => n + i.quantity, 0))

  return (
    <header className="bg-white border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="font-semibold text-lg">Shop</Link>
        <nav className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn('text-sm text-gray-600 hover:text-gray-900', isActive && 'text-gray-900 font-medium')
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              cn('text-sm text-gray-600 hover:text-gray-900', isActive && 'text-gray-900 font-medium')
            }
          >
            Cart <span className="ml-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-gray-900 px-1 text-white text-xs">{itemsCount}</span>
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
