const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition">
      
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-40 w-full object-contain mb-4"
      />

      <h2 className="font-semibold text-sm mb-2 line-clamp-2">
        {product.title}
      </h2>

      <p className="text-gray-500 text-xs mb-1 capitalize">
        {product.category}
      </p>

      <p className="text-blue-600 font-bold mb-1">
        ₹ {product.price}
      </p>

      <p className="text-yellow-500 text-sm mb-2">
        ⭐ {product.rating}
      </p>

      <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
