import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

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
        prev < products.length - 1 ? prev + 1 : 0  
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [products])

  if (!products.length) return null

  const current = products[currentIndex]

  const discountedPrice =
    current.price -
    (current.price * current.discountPercentage) / 100

  return (
    <>
      <section className="h-screen w-full bg-gray-300 relative overflow-hidden flex items-center justify-center">

        {/* Left Button */}
        <button
          onClick={() =>
            setCurrentIndex(prev =>
              prev === 0 ? products.length - 1 : prev - 1
            )
          }
          className="absolute left-6 z-30 p-5 rounded-full
          bg-white/20 backdrop-blur-lg border border-white/30
          hover:bg-white/40 hover:scale-110
          transition-all duration-300"
        >
          <FaChevronLeft className="text-xl text-white" />
        </button>

        {/* Image */}
        <img
          key={current.id}
          src={current.thumbnail}
          alt={current.title}
          className="max-h-[60vh] object-contain z-10"
        />

        {/* Right Button */}
        <button
          onClick={() =>
            setCurrentIndex(prev =>
              prev === products.length - 1 ? 0 : prev + 1
            )
          }
          className="absolute right-6 z-30 p-5 rounded-full
          bg-white/20 backdrop-blur-lg border border-white/30
          hover:bg-white/40 hover:scale-110
          transition-all duration-300"
        >
          <FaChevronRight className="text-xl text-white" />
        </button>

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute left-16 bottom-28 text-white z-20 max-w-md">
          <h1 className="text-4xl font-bold mb-3">
            {current.title}
          </h1>

          <div className="flex items-center gap-3 mb-2">
            <p className="text-2xl font-bold text-red-400">
              ₹ {discountedPrice.toFixed(2)}
            </p>

            <p className="text-lg text-gray-300 line-through">
              ₹ {current.price}
            </p>

            <p className="text-green-400 font-semibold">
              ({current.discountPercentage}% OFF)
            </p>
          </div>

          <p className="text-yellow-400 text-lg">
            ⭐ {current.rating}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-10 py-20">
        <h2 className="text-3xl font-bold mb-10">
          Best Sellers
        </h2>

        <div className="flex flex-wrap gap-10 justify-between">
          {topRated.map(product => (
            <div
              key={product.id}
              className="w-[22%] min-w-[250px] border rounded-lg"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Home
