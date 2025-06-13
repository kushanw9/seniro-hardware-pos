import { useState } from 'react';

export const useCart = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    const clearCart = () => {
        setCart([]);
    };

    return { cart, addToCart, clearCart };
};