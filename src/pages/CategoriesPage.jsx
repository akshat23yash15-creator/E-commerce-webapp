import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const SidebarCategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    const url =
      selectedCategory === "all"
        ? "https://dummyjson.com/products"
        : `https://dummyjson.com/products/category/${selectedCategory}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, [selectedCategory]);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-24 px-3 sm:px-6 lg:px-10 max-w-screen-2xl mx-auto">

      <div className="flex flex-col lg:flex-row gap-6">

        {/* 🔹 Sidebar */}
        <div className="lg:w-64 w-full">

          {/* Mobile → Horizontal Scroll */}
          <div className="lg:hidden overflow-x-auto flex gap-3 pb-3">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded whitespace-nowrap ${
                selectedCategory === "all"
                  ? "bg-red-600 text-white"
                  : "bg-gray-100"
              }`}
            >
              All
            </button>

            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-4 py-2 rounded whitespace-nowrap ${
                  selectedCategory === cat.slug
                    ? "bg-red-600 text-white"
                    : "bg-gray-100"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Desktop Sidebar */}
          <div className="hidden lg:block bg-white shadow-md p-5 rounded-lg sticky top-24 h-[calc(100vh-120px)] overflow-y-auto">
            <h2 className="text-lg font-bold mb-4">Categories</h2>

            <ul className="space-y-2">
              <li
                onClick={() => setSelectedCategory("all")}
                className={`cursor-pointer px-3 py-2 rounded ${
                  selectedCategory === "all"
                    ? "bg-red-100 text-red-600"
                    : "hover:bg-gray-100"
                }`}
              >
                All Products
              </li>

              {categories.map((cat, index) => (
                <li
                  key={index}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`cursor-pointer px-3 py-2 rounded ${
                    selectedCategory === cat.slug
                      ? "bg-red-100 text-red-600"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {cat.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 🔹 Products Section */}
        <div className="flex-1">

          {/* Search */}
          <div className="mb-5">
            <input
              type="text"
              placeholder="Search products..."
              className="border px-4 py-2 rounded w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-red-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Grid */}
          <div className="
            grid 
            grid-cols-2 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4 
            xl:grid-cols-5 
            gap-4 sm:gap-6
          ">
            {filteredProducts.map((product) => (
              <Link
                to={`/product/${product.id}`}
                key={product.id}
                className="border p-3 sm:p-4 rounded-lg shadow hover:shadow-xl transition flex flex-col group"
              >
                <div className="overflow-hidden rounded">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="h-36 sm:h-40 w-full object-cover mb-3 group-hover:scale-105 transition duration-300"
                  />
                </div>

                <h2 className="font-medium text-sm sm:text-base line-clamp-2 mb-1">
                  {product.title}
                </h2>

                <p className="text-red-600 font-bold text-sm sm:text-base">
                  ${product.price}
                </p>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    addToCart(product);
                  }}
                  className="bg-red-600 text-white text-xs sm:text-sm px-3 py-2 mt-auto rounded hover:bg-red-700 transition"
                >
                  Add to Cart
                </button>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default SidebarCategoriesPage;