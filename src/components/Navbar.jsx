import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-red-500">
        TYCORE
      </Link>

      <ul className="flex gap-6 font-medium">
        <li>
          <Link to="/" className="hover:text-blue-500">Home</Link>
        </li>
        <li>
          <Link to="/products" className="hover:text-blue-500">Products</Link>
        </li>
        <li>
          <Link to="/cart" className="hover:text-blue-500">Cart</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
