  import { useEffect, useState } from "react";
  import { useCart } from "../context/CartContext";
  // import { toast } from "react-toastify"
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
      if (selectedCategory === "all") {
        fetch("https://dummyjson.com/products")
          .then((res) => res.json())
          .then((data) => setProducts(data.products));
      } else {
        fetch(`https://dummyjson.com/products/category/${selectedCategory}`)
          .then((res) => res.json())
          .then((data) => setProducts(data.products));
      }
    }, [selectedCategory]);

    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    return (
      <div className="pt-28 px-6 max-w-7xl mx-auto flex gap-8">
        <div className="w-64 bg-white shadow-md p-5 rounded-lg sticky top-28 h-[calc(100vh-120px)] overflow-y-auto">
          <h2 className="text-lg font-bold mb-4">Categories</h2>

          <ul className="space-y-2">
            <li
              onClick={() => setSelectedCategory("all")}
              className={`cursor-pointer px-3 py-2 rounded 
              ${selectedCategory === "all" ? "bg-red-100 text-red-600" : "hover:bg-gray-100"}`}
            >
              All Products
            </li>

            {categories.map((cat, index) => (
              <li
                key={index}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`cursor-pointer px-3 py-2 rounded 
                ${selectedCategory === cat.slug ? "bg-red-100 text-red-600" : "hover:bg-gray-100"}`}
              >
                {cat.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 overflow-y-auto pr-2">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search in this category..."
              className="border px-4 py-2 rounded w-80"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Link
                to={`/product/${product.id}`}
                key={product.id}
                className="border p-4 rounded-lg shadow hover:shadow-lg transition flex flex-col"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-40 w-full object-cover mb-4 rounded"
                />
                <h2 className="font-semibold min-h-[48px]">{product.title}</h2>
                <p className="text-red-600 font-bold">${product.price}</p>
                <button
                  onClick={(e) => {
                    // toast.success("Product added to cart!")
                    e.stopPropagation();
                    e.preventDefault();
                    addToCart(product);
                  }}
                  className="bg-red-600 text-white px-4 py-2 mt-auto rounded hover:bg-red-700 transition"
                >
                  Add to Cart
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default SidebarCategoriesPage;
