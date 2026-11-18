import { useContext } from "react";
import { CartContext } from "./cartcontext";
import "./cart.css";


export default function Cart() {

    const { cart} = useContext(CartContext);

   function removeCart(id) {
    setCart(prevCart =>
        prevCart.filter(item => item.id !== id)
    );
}

    


    return (

        <div className="cart-page">

            <h1>My Cart</h1>

            {cart.length === 0 ? (

                <p>Your cart is empty</p>

            ) : (

                cart.map(item => (

                    <div key={item.id} className="cart-item">

                        <h3>{item.title}</h3>

                        <p>Quantity: {item.quantity}</p>
                      <button onClick={() => removeCart(item.id)}>Remove</button>

                    </div>

                ))

            )}

        </div>

    );
}