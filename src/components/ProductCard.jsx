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
  
  const discountedPrice =
    product.price -
    (product.price * product.discountPercentage) / 100

  return (
    <>
      <div
        onClick={handleNavigate}
        className="group bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition cursor-pointer h-full flex flex-col justify-between overflow-hidden border rounded-xl"
      >
        {/* TOP CONTENT */}
        <div>
          {/* Image Container with overflow-hidden to clip the zoom */}
          <div className="overflow-hidden mb-4 rounded-lg">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-52 w-full object-contain transition-transform duration-500 ease-in-out group-hover:scale-115"
            />
          </div>

          <h3 className="text-base font-semibold line-clamp-2 mb-2">
            {product.title}
          </h3>

          <p className="text-red-600 font-bold text-lg mb-1">
            ₹ {discountedPrice.toFixed(2)}
          </p>

          <p className="text-yellow-500 text-sm mb-4">
            ⭐ {product.rating}
          </p>
        </div>

        {/* BUTTON ALWAYS BOTTOM */}
        <button
          onClick={handleAddToCart}
          className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 mt-auto"
        >
          Add to Cart
        </button>
      </div>
    </>
  )
}

export default ProductCard