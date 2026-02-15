import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App.jsx"
import "./index.css"

import { CartProvider } from "./context/CartContext"
import { LoaderProvider } from "./context/LoaderContext"   

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <LoaderProvider>     
        <CartProvider>     
          <App />
        </CartProvider>
      </LoaderProvider>
    </BrowserRouter>
  </StrictMode>
)
