import { createContext, useContext, useState } from "react"

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  // ✅ ADD TO CART
  const addToCart = (product) => {
    const discountedPrice =
      product.price -
      (product.price * product.discountPercentage) / 100

    const productWithDiscount = {
      ...product,
      finalPrice: Number(discountedPrice.toFixed(2)),
      quantity: 1,
    }

    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id)

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [...prev, productWithDiscount]
    })
  }

  // ✅ UPDATE QUANTITY (NEW FUNCTION)
  const updateQuantity = (id, newQty) => {
    if (newQty < 1) return

    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: newQty }
          : item
      )
    )
  }

  // ✅ REMOVE ITEM
  const removeFromCart = (id) => {
    setCartItems((prev) =>
      prev.filter((item) => item.id !== id)
    )
  }

  // ✅ CLEAR CART
  const clearCart = () => {
    setCartItems([])
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,   // 👈 IMPORTANT
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
