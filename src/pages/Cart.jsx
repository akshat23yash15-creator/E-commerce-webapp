import { useCart } from "../context/CartContext"

const Cart = () => {
  const { cartItems, removeFromCart } = useCart()

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  )

  if (cartItems.length === 0) {
    return <h2 className="p-10 text-xl">Your cart is empty 🛒</h2>
  }

  return (
    <div className="p-10 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cartItems.map(item => (
        <div key={item.id} className="flex justify-between items-center border-b py-4">
          <div>
            <h3 className="font-semibold">{item.title}</h3>
            <p>₹ {item.price} × {item.quantity}</p>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="text-white hover:bg-red-600 bg-red-500 border rounded p-2"
          >
            Remove
          </button>
        </div>
      ))}

      <h2 className="text-2xl font-bold mt-6">
        Total: ₹ {total}
      </h2>
    </div>
  )
}

export default Cart
