import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { useState, useEffect } from "react"

const Navbar = () => {
  const { cartItems } = useCart()
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  const [showSearch, setShowSearch] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
      ${scrolled ? "bg-white/30 backdrop-blur-md shadow-md" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">

        {/* LEFT - Logo */}
        <div className="flex-1">
          <Link to="/" className="text-2xl font-bold text-red-600">
            TYCORE
          </Link>
        </div>

        <ul className="flex-1 flex justify-center gap-10 font-medium">
          <li>
            <Link to="/" className="hover:text-red-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-red-600 transition">
              Products
            </Link>
          </li>

          <li>
            <Link to="/categories" className="hover:text-red-600 transition">Categories</Link>
          </li>
        </ul>
        <div className="flex-1 flex justify-end items-center gap-6">

          <div className="relative flex items-center">
            <button onClick={() => setShowSearch(!showSearch)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m1.85-5.4a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
                />
              </svg>
            </button>

            <input
              type="text"
              placeholder="Search..."
              className={`absolute right-8 px-4 py-1 border rounded-full outline-none
              transition-all duration-500 ease-in-out bg-white
              ${showSearch ? "w-64 opacity-100" : "w-0 opacity-0 px-0 border-0"}`}
            />
          </div>

          {/* Cart */}
          <Link to="/cart" className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.836L5.7 7.5m0 0h13.8l-1.35 6.3a1.125 1.125 0 01-1.102.9H8.25a1.125 1.125 0 01-1.102-.9L5.7 7.5zM9 21a.75.75 0 100-1.5.75.75 0 000 1.5zm9 0a.75.75 0 100-1.5.75.75 0 000 1.5z"
              />
            </svg>

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
