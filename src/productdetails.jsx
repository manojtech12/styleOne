import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "./cartcontext";
import "./ProductDetails.css";

export default function Product() {

    const { id } = useParams();

    const { addToCart } = useContext(CartContext);

    const [product, setProduct] = useState(null);

    useEffect(() => {

        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));

    }, [id]);

    if (!product) {
        return <h2>Loading product...</h2>;
    }

    const handleAddToCart = () => {

        addToCart(product);

        alert("Product added to cart!");

    };

    return (

        <div className="product-page">

            <div className="product-image">
                <img src={product.image} alt={product.title} />
            </div>

            <div className="product-info">

                <p>{product.category}</p>

                <h1>{product.title}</h1>

                <div>
                    ⭐ {product.rating.rate}
                    ({product.rating.count} reviews)
                </div>

                <h2>₹{(product.price * 85).toFixed(0)}</h2>

                <p>{product.description}</p>

                <button onClick={handleAddToCart}>
                    Add to Cart
                </button>

            </div>

        </div>

    );
}