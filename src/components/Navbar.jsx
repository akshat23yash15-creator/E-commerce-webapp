import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">

            <Link to="/" className="text-2xl font-bold text-red-600">
                MyStore
            </Link>

            <ul className="flex gap-6 font-medium items-center">
                <li>
                    <Link to="/" className="hover:text-red-500">
                        Home
                    </Link>
                </li>

                <li>
                    <Link to="/products" className="hover:text-red-500">
                        Products
                    </Link>
                </li>

                <li>
                    <Link
                        to="/cart"
                        className="flex items-center gap-2 hover:text-red-500"
                    >
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

                        <span>Cart</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
