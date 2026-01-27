const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-52 w-full object-contain mb-4"
      />

      <h3 className="text-base font-semibold line-clamp-2 mb-3">
        {product.title}
      </h3>

      <p className="text-red-500 font-bold text-lg">
        ₹ {product.price}
      </p>

      <p className="text-yellow-500 text-sm">
        ⭐ {product.rating}
      </p>
    </div>
  )
}

export default ProductCard
