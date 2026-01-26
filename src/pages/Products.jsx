import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then(res => res.json())
      .then(data => {
        setProducts(data.products)
      })
  }, [])

  return (
    <div className="px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">
        All Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Products
