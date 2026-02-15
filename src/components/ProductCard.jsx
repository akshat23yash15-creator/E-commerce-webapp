import { useCart } from "../context/CartContext"
import { useNavigate } from "react-router-dom"

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()
  const navigate = useNavigate()

  if (!product) return null

  const handleNavigate = () => {
    navigate(`/product/${product.id}`)
  }

  const handleAddToCart = (e) => {
    e.stopPropagation()
    addToCart(product)
  }

  return (
    <>
    
    <div
      onClick={handleNavigate}
      className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition cursor-pointer"
    >


      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-52 w-full object-contain mb-4"
      />

      <h3 className="text-base font-semibold line-clamp-2 mb-2">
        {product.title}
      </h3>

      <p className="text-red-600 font-bold text-lg mb-1">
        ₹ {product.price}
      </p>

      <p className="text-yellow-500 text-sm mb-4">
        ⭐ {product.rating}
      </p>

      <button
        onClick={handleAddToCart}
        className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
      >
        Add to Cart
      </button>
    </div>
    </>
  )
}

export default ProductCard
