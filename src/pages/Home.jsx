import { useEffect, useState } from "react"

const Home = () => {
  const [products, setProducts] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=8")
      .then(res => res.json())
      .then(data => setProducts(data.products))
  }, [])

  useEffect(() => {
    if (!products.length) return

    const interval = setInterval(() => {
      setCurrentIndex(prev =>
        prev === products.length - 1 ? 0 : prev + 1
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [products])

  if (!products.length) return null

  const current = products[currentIndex]

  return (
    <>
      {/* HERO BANNER (FULL PAGE) */}
      <section className="h-screen w-full bg-gray-300 flex items-center justify-center relative overflow-hidden">

        {/* Product Image */}
        <img
          src={current.thumbnail}
          alt={current.title}
          className="max-h-[60vh] object-contain z-10"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Text */}
        <div className="absolute left-12 bottom-24 text-white z-20 max-w-md">
          <h1 className="text-4xl font-bold mb-3">
            {current.title}
          </h1>
          <p className="text-xl mb-2">
            ₹ {current.price}
          </p>
          <p className="text-yellow-400">
            ⭐ {current.rating}
          </p>
        </div>

      </section>

      <section className="min-h-screen px-10 py-16 bg-white">
        <h2 className="text-3xl font-bold mb-6">
          Featured Collections
        </h2>

        <p className="text-gray-600 max-w-xl">
          This section proves your page is scrollable.
          You can add categories, product grids, banners,
          testimonials, anything here.
        </p>
      </section>
    </>
  )
}

export default Home
