import { createContext, useContext, useState } from "react"
import { toast } from "react-toastify"

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    if (!product) return

    const existing = cartItems.find((item) => item.id === product.id)

    if (existing) {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )

      toast.info("Quantity updated ")
      return
    }

    const discountedPrice =
      product.price -
      (product.price * product.discountPercentage) / 100

    const productWithDiscount = {
      ...product,
      finalPrice: Number(discountedPrice.toFixed(2)),
      quantity: 1,
    }

    setCartItems((prev) => [...prev, productWithDiscount])

    toast.success("Product added to cart ")
  }

  const updateQuantity = (id, newQty) => {
    if (newQty < 1) return

    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: newQty }
          : item
      )
    )

    toast.info("Quantity updated ")
  }

  const removeFromCart = (id) => {
    setCartItems((prev) =>
      prev.filter((item) => item.id !== id)
    )

    toast.error("Product removed from cart ❌")
  }

  const clearCart = () => {
    setCartItems([])
    toast.warn("Cart cleared ")
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
