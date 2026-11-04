import { useState, useEffect } from "react";

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="carousel-container">

      <div className="product-card">
        <img src="/images/banner.png" alt="Fall Collection" />
      </div>

      <div className="home-eye">
        <h1>The Fall<br />Collection</h1>

        <p>
          Discover timeless styles and elevate your everyday look
          with our latest collection.
        </p>

        <button>Shop Now</button>
      </div>

    </div>
  );
}

export default Shop;