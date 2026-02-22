import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import ProductDetails from "./pages/ProductDetails"
import GlobalLoader from "./components/GlobalLoader"  
import { useEffect } from "react"
import { useLoader } from "./context/LoaderContext"
import CategoriesPage from "./pages/CategoriesPage"
import Contact from "./pages/Contact"



function App() {
  const location = useLocation()
  const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}
const { setLoading } = useLoader()

  useEffect(() => {
    setLoading(true)

    const timer = setTimeout(() => {
      setLoading(false)
    }, 400) 

    return () => clearTimeout(timer)
  }, [location])

  return (
    <>
      <Navbar />
      <GlobalLoader />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          
          <Route path="/" element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            }
          />

          <Route path="/products"
            element={
              <PageWrapper>
                <Products />
              </PageWrapper>
            }
          />

          <Route
            path="/product/:id"
            element={
              <PageWrapper>
                <ProductDetails />
              </PageWrapper>
            }
          />

          <Route
            path="/cart"
            element={
              <PageWrapper>
                <Cart />
              </PageWrapper>
            }
          />
          <Route path="/categories" element={
            <PageWrapper><CategoriesPage /></PageWrapper>} />

              <Route path="/contact" element={
          <PageWrapper><Contact /></PageWrapper>
        } />
        </Routes>

      

      </AnimatePresence>
      
    </>
  )
}

export default App
