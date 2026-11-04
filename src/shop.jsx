 
import { useState, useEffect } from "react";
import "./shop.css";

export default function ShopItems() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 className="status">Loading products...</h2>;

  if (error) return <h2 className="status">{error}</h2>;

  return (
    <div className="shop-page">

      <div className="shop-heading">
        <h1>Our Collection</h1>
        <p>Discover your perfect style with StyleOne.</p>
      </div>

      <div className="products-grid">
        {products.map(product => (
          <div className="shop-card" key={product.id}>

            <div className="shop-image">
              <img src={product.image} alt={product.title} />
            </div>

            <div className="shop-details">
              <p className="shop-category">{product.category}</p>

              <h3>{product.title}</h3>

              <div className="shop-rating">
                ⭐ {product.rating.rate} ({product.rating.count})
              </div>

              <p className="shop-price">
                ₹{(product.price * 85).toFixed(0)}
              </p>

              <button className="shop-button">
                View Product
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

 
 