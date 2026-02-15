import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"

const Navbar = () => {
  const { cartItems } = useCart()
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">

      <Link to="/" className="text-2xl font-bold text-red-600">
        TYCORE
      </Link>

      <ul className="flex gap-6 font-medium items-center">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>

        <li>
          <Link to="/cart" className="relative flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24"
              strokeWidth={1.8} stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.836L5.7 7.5m0 0h13.8l-1.35 6.3a1.125 1.125 0 01-1.102.9H8.25a1.125 1.125 0 01-1.102-.9L5.7 7.5zM9 21a.75.75 0 100-1.5.75.75 0 000 1.5zm9 0a.75.75 0 100-1.5.75.75 0 000 1.5z"
              />
            </svg>

            <span>Cart</span>

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
