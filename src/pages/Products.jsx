import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products)   
      })
      .catch((err) => console.log(err))
  }, [])
  

  return (
    <div className="min-h-screen p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Products
