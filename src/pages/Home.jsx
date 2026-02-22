import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const Home = () => {
  const [products, setProducts] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [topRated, setTopRated] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then(res => res.json())
      .then(data => {
        setProducts(data.products)

        const sorted = [...data.products]
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 5)

        setTopRated(sorted)
      })
  }, [])

  useEffect(() => {
    if (!products.length) return

    const interval = setInterval(() => {
      setCurrentIndex(prev =>
        prev < products.length - 1 ? prev + 1 : prev
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [products])

  if (!products.length) return null

  const current = products[currentIndex]

  return (
    <>
      <section className="h-screen w-full bg-gray-300 relative overflow-hidden flex items-center justify-center">

      <button
  onClick={() => setCurrentIndex(prev => prev - 1)}
  disabled={currentIndex === 0}
  className={`absolute left-6 z-30 p-5 rounded-full
    bg-white/20 backdrop-blur-lg border border-white/30
    transition-all duration-300
    ${currentIndex === 0
      ? "opacity-40 cursor-not-allowed"
      : "hover:bg-white/40 hover:scale-110"} `}>
  <FaChevronLeft className="text-xl text-white" />
</button>

        <img
          key={current.id}
          src={current.thumbnail}
          alt={current.title}
          className="
            max-h-[60vh] object-contain z-10 transition-all duration-700 ease-in-out opacity-100 translate-x-0"/>

        <button
          onClick={() => setCurrentIndex(prev => prev + 1)}
          disabled={currentIndex === products.length - 1}
          className={`absolute right-6 z-30 p-5 rounded-full
                               bg-white/50 backdrop-blur-lg border border-white/30
  transition-all duration-300
  ${currentIndex === products.length - 1
    ? "opacity-40 cursor-not-allowed"
    : "hover:bg-white/40 hover:scale-110"}`}>
            <FaChevronRight className="text-xl text-black" />

        </button>

        <div className="absolute inset-0 bg-black/40" />

        <div
          key={`text-${current.id}`}
          className="
            absolute left-16 bottom-28 text-white z-20 max-w-md
            transition-all duration-700 ease-in-out
            opacity-100 translate-y-0 ">
          <h1 className="text-4xl font-bold mb-3">
            {current.title}
          </h1>
          <p className="text-2xl mb-2">
            ₹ {current.price}
          </p>
          <p className="text-yellow-400 text-lg">
            ⭐ {current.rating}
          </p>
        </div>

      </section>

      <section className="max-w-7xl mx-auto px-10 py-20">
        <h2 className="text-3xl font-bold mb-10">
          Best Sellers
        </h2>

        <div className="flex flex-wrap gap-10 justify-between ">
          {topRated.map(product => (
            <div 
              key={product.id}
              className="w-[22%] min-w-65 border rounded-lg">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Home
