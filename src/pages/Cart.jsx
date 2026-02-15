import { useCart } from "../context/CartContext"
import { motion, AnimatePresence } from "framer-motion"
import { FiTrash2 } from "react-icons/fi"
import { HiPlus, HiMinus } from "react-icons/hi"

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart()

  const total = cartItems.reduce(
    (sum, item) => sum + item.finalPrice * item.quantity,
    0
  )

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-semibold">
          Your cart is empty 🛒
        </h2>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto p-8 grid md:grid-cols-3 gap-8">

      <div className="md:col-span-2 space-y-6">
        <h1 className="text-3xl font-bold mb-4">Your Cart</h1>

        <AnimatePresence>
          {cartItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-between bg-white shadow-md rounded-xl p-5"
            >
              <div className="flex items-center gap-5">

                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-24 h-24 object-contain rounded-lg border"
                />

                <div>
                  <h3 className="font-semibold text-lg">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-3 mt-2">
                    <p className="text-blue-600 font-bold text-lg">
                      ₹ {item.finalPrice}
                    </p>

                    <p className="line-through text-gray-400 text-sm">
                      ₹ {item.price}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 mt-3">

                    <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden">

                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="px-3 py-1 hover:bg-gray-200 transition"
                      >
                        <HiMinus />
                      </button>

                      <span className="px-4 font-medium">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="px-3 py-1 hover:bg-gray-200 transition"
                      >
                        <HiPlus />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="flex items-center gap-2 text-red-500 hover:text-red-600 transition"
                    >
                      <FiTrash2 />
                      <span className="font-medium">Delete</span>
                    </button>

                  </div>
                </div>
              </div>

              <div className="font-semibold text-lg">
                ₹ {(item.finalPrice * item.quantity).toFixed(2)}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-6 h-fit">
        <h2 className="text-xl font-semibold mb-4">
          Order Summary
        </h2>

        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>₹ {total.toFixed(2)}</span>
        </div>

        <hr className="my-3" />

        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>₹ {total.toFixed(2)}</span>
        </div>

        <button className="w-full mt-5 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
          Proceed to Checkout
        </button>
      </div>
    </div>
  )
}

export default Cart
