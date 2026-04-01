import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="pt-24 text-center"><h1 style={{ fontFamily: "Merriweather" }} className="text-5xl font-bold mb-5">ALL PRODUCTS</h1> {/* navbar space */}

      {/* SAME WIDTH AS NAVBAR */}
      <div className="max-full mx-auto px-4 sm:px-6 lg:px-8">

        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          gap-6 
        ">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Products;