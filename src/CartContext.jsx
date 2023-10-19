// CartContext.jsx
import React, { createContext, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
}

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (variant,price) => {
        const item = {
            id: uuidv4(),
            variation: variant,
            price: price,
        }
        setCart([...cart, item]);
    }

    const removeFromCart = (variant) => {
        const index = cart.findIndex((item) => item.variation === variant);

        if (index !== -1) {
            // Create a new cart array without the item to be removed
            const updatedCart = [...cart];
            updatedCart.splice(index, 1);
            setCart(updatedCart);
        }
    }

    const getVariationCount = (variation) => {
        return cart.reduce((count, item) => (item.variation === variation ? count + 1 : count), 0);
    }
    const getTotalItems = () => {
        const total = cart.reduce((accumulator) => accumulator + 1, 0 )
        return total
    }
    const getTotalPrice = () => {
        const total = cart.reduce((accumulator, item) => accumulator + item.price, 0);
        return total.toFixed(2);
    }
    const getTotalItemsPrice = (variation) => {
        const total = cart.reduce((accumulator, item) => (item.variation === variation ? accumulator + item.price:accumulator), 0);
        return total.toFixed(2);
    }
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, getVariationCount, getTotalPrice, getTotalItems, getTotalItemsPrice}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
