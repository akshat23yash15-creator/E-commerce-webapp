import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const [showSearch, setShowSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);

  const menuRef = useRef();
  const searchRef = useRef();

  // 🔥 SCROLL HIDE / SHOW (Apple style)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // scrolling down
        setShowNavbar(false);
      } else {
        // scrolling up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // 🔹 Outside click
useEffect(() => {
  const handleClickOutside = (e) => {
    // MENU CLOSE
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setMenuOpen(false);
    }

    // SEARCH CLOSE
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setShowSearch(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

  // 🔹 Search debounce
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    const delay = setTimeout(() => {
      fetch(`https://dummyjson.com/products/search?q=${searchQuery}`)
        .then(res => res.json())
        .then(data => setSearchResults(data.products));
    }, 400);

    return () => clearTimeout(delay);
  }, [searchQuery]);

  return (
    <nav
      className={`
      fixed top-0 left-0 w-full z-50
      transition-all duration-500 ease-in-out
      ${showNavbar ? "translate-y-0" : "-translate-y-full"}
      bg-white/30 backdrop-blur-xl border-b border-white/20
      `}
    >
      <div className="max-full mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold text-red-600">
          TYCORE
        </Link>

        {/* DESKTOP MENU */}
       <ul className="hidden md:flex flex-1 justify-center gap-16 lg:gap-20 font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/categories">Categories</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* RIGHT */}
        <div className="flex items-center gap-4">

          {/* SEARCH */}
          <div    ref={searchRef } className="relative hidden sm:block">
            <button onClick={() => setShowSearch(!showSearch)}>
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m1.85-5.4a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"/>
              </svg>
            </button>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className={`absolute right-8 top-1/2 -translate-y-1/2 px-4 py-1 rounded-full border bg-white
              transition-all duration-300
              ${showSearch ? "w-64 opacity-100" : "w-0 opacity-0 px-0 border-0"}`}
            />

            {searchResults.length > 0 && showSearch && (
              <div className="absolute top-14 right-0 w-72 bg-white shadow-lg rounded p-3 max-h-80 overflow-y-auto">
                {searchResults.map((p) => (
                  <Link key={p.id} to={`/product/${p.id}`} className="flex gap-2 p-2 hover:bg-gray-100 rounded">
                    <img src={p.thumbnail} className="w-10 h-10 rounded" />
                    <span className="text-sm">{p.title}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* CART */}
          <Link to="/cart" className="relative">
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.836L5.7 7.5m0 0h13.8l-1.35 6.3a1.125 1.125 0 01-1.102.9H8.25a1.125 1.125 0 01-1.102-.9L5.7 7.5zM9 21a.75.75 0 100-1.5.75.75 0 000 1.5zm9 0a.75.75 0 100-1.5.75.75 0 000 1.5z"/>
            </svg>

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          {/* HAMBURGER */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`h-[2px] w-6 bg-black transition ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
            <span className={`h-[2px] w-6 bg-black transition ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`h-[2px] w-6 bg-black transition ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transition-all duration-500
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-5 flex justify-between border-b">
          <h2>Menu</h2>
          <button onClick={() => setMenuOpen(false)}>✕</button>
        </div>

        <ul className="flex flex-col gap-6 p-5">
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link></li>
          <li><Link to="/categories" onClick={() => setMenuOpen(false)}>Categories</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;