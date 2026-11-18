
import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {

    const [cart, setCart] = useState([]);

    // Add product to cart
    const addToCart = (product) => {

        setCart(prevCart => {

            const existing = prevCart.find(
                item => item.id === product.id
            );

            if (existing) {

                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );

            }

            return [
                ...prevCart,
                { ...product, quantity: 1 }
            ];

        });

    };

    // Remove product from cart
    const removeCart = (id) => {

        setCart(prevCart =>
            prevCart.filter(item => item.id !== id)
        );

    };

    return (
        <CartContext.Provider
            value={{ cart, addToCart,setCart }}
        >
            {children}
        </CartContext.Provider>
    );
}

