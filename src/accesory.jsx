
import { useState, useEffect } from "react";

export default function Accessories() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log(err));
  }, []);

  const categories = [
    "men's clothing",
    "women's clothing",
    "electronics",
    "jewelery"
  ];

  return (
    <div className="accessories">

      <h1 className="explore">Let's Explore More</h1>

      <div className="products">

        {categories.map(category => {
          const product = products.find(
            item => item.category === category
          );

          return (
            <div className="product" key={category}>
              {product && (
                <>
                  <h2>{category}</h2>

                  <img
                    src={product.image}
                    alt={product.title}
                  />

                  <h3>{product.title}</h3>

                  <p>₹{product.price}</p>
                </>
              )}
            </div>
          );
        })}

      </div>
    </div>
  );
}
