
import { useState, useEffect } from "react";
import "./shop.css";
import { Link } from "react-router-dom";
import AISearch from "./AIsearch.jsx";
import { useSearchParams } from "react-router-dom";

export default function ShopItems() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(null);

  const [loading, setLoading] = useState(true);
  const [searching, setSearching] = useState(false);

  const [error, setError] = useState("");
  const [searchError, setSearchError] = useState("");

  const[searchfilter,setsearchfilter]=useSearchParams()
  const typeFilter = searchfilter.get("type")


  // Fetch products from FakeStore API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // AI-powered product filtering
  async function handleAISearch(prompt) {
    try {
      setSearching(true);
      setSearchError("");

      const response = await fetch(
        "http://localhost:5000/api/ai/search",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            message: prompt
          })
        }
      );

      if (!response.ok) {
        throw new Error("AI search failed");
      }

      const filters = await response.json();

      console.log("AI Filters:", filters);

      const results = products.filter((product) => {
        // Check product category
        const categoryMatch =
          !filters.category ||
          product.category.toLowerCase() ===
            filters.category.toLowerCase();

        // Convert USD price to INR (approximation)
        const priceINR = product.price * 85;

        // Check maximum budget
        const priceMatch =
          filters.maxPriceINR == null ||
          priceINR <= filters.maxPriceINR;

        return categoryMatch && priceMatch;
      });

      setFilteredProducts(results);

    } catch (err) {
      console.error("AI Search Error:", err);
      setSearchError(err.message);
    } finally {
      setSearching(false);
    }
  }

  // Reset AI search
  function showAllProducts() {
    setFilteredProducts(null);
    setSearchError("");
  }

  if (loading) {
    return <h2 className="status">Loading products...</h2>;
  }

  if (error) {
    return <h2 className="status">{error}</h2>;
  }
const baseProducts = filteredProducts ?? products;

const displayedProducts = typeFilter
  ? baseProducts.filter((product) => product.category === typeFilter)
  : baseProducts;
  return (
    <div className="shop-page">

      <div className="shop-heading">
        <h1>Our Collection</h1>
        <p>Discover your perfect style with StyleOne.</p>
      </div>

      {/* AI Fashion Search */}
      <AISearch onSearch={handleAISearch} />

     <div className="filter-buttons">
  <button onClick={() => setsearchfilter({})}>
    All
  </button>

  <button onClick={() =>  setsearchfilter({ type: "men's clothing" })}>
    Men
  </button>

  <button onClick={() => setsearchfilter({ type: "women's clothing" })}>
    Women
  </button>

  <button onClick={() =>  setsearchfilter({ type: "electronics" })}>
    Electronics
  </button>

  <button onClick={() =>  setsearchfilter({ type: "jewelery" })}>
    Jewellery
  </button>
</div>

      {searching && (
        <p className="status">
          AI is finding your outfits...
        </p>
      )}

      {searchError && (
        <p className="status">
          {searchError}
        </p>
      )}

      {filteredProducts !== null && (
        <button
          type="button"
          onClick={showAllProducts}
          className="shop-button"
        >
          Show All Products
        </button>
      )}

      {/* Products */}
      {displayedProducts.length === 0 ? (
        <p className="status">
          No matching products found. Try another preference.
        </p>
      ) : (
        <div className="products-grid">
          {displayedProducts.map((product) => (
            <div className="shop-card" key={product.id}>

              <div className="shop-image">
                <img
                  src={product.image}
                  alt={product.title}
                />
              </div>

              <div className="shop-details">
                <p className="shop-category">
                  {product.category}
                </p>

                <h3>{product.title}</h3>

                <div className="shop-rating">
                  ⭐ {product.rating.rate} ({product.rating.count})
                </div>

                <p className="shop-price">
                  ₹{(product.price * 85).toFixed(0)}
                </p>

                <Link to={`/product/${product.id}`}>
                  <button className="shop-button">
                    View Product
                  </button>
                </Link>
              </div>

            </div>
          ))}
        </div>
      )}

    </div>
  );
}
