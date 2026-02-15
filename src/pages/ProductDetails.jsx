import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useCart } from "../context/CartContext"

const ProductDetails = () => {
  const { id } = useParams()
  const { addToCart } = useCart()

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [id])

  
if (loading) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  )
}

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-xl text-red-500">
          Product not found
        </h2>
      </div>
    )
  }
  const discountedPrice =
    product.price -
    (product.price * product.discountPercentage) / 100

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-8">

      <div className="flex justify-start">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-[85%] h-[400px] object-contain rounded-xl shadow"
        />
      </div>

      <div>
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

        <p className="text-gray-600 mb-4">{product.description}</p>

        <div className="flex items-center gap-3 mb-3">
          <p className="text-2xl font-bold text-red-600">
            Sale Price - ₹ {discountedPrice.toFixed(2)}
          </p>

          <p className="text-gray-400 line-through text-lg">
            ₹ {product.price}
          </p>

          <p className="text-green-600 font-semibold">
            ({product.discountPercentage}% OFF)
          </p>
        </div>

        <p className="text-yellow-500 mb-2">
          ⭐ Rating: {product.rating}
        </p>

        <p className="mb-6">
          📦 Stock: {product.stock}
        </p>

        <button
          onClick={() => addToCart(product)}
          className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductDetails
