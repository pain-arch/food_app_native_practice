import { createContext, PropsWithChildren, useContext, useState } from "react";
import { CartItem, Product } from "../constants/types";

type CartType = {
    items: CartItem[];
    addItem : (product: Product, size: CartItem["size"]) => void;
}

const CartContext = createContext<CartType>({
    items: [],
    addItem: () => {}
});

const CartProvider = ({ children }: PropsWithChildren) => {
    // To-do: if already in cart , increament quantity

    const [items, setItems] = useState<CartItem[]>([]);
    const addItem = (product: Product, size: CartItem["size"]) => {
        const newCartItem: CartItem = { // create a new cart item               
            id: Math.random().toString(36).substr(2, 9),
            product_id: product.id,
            product,
            size,
            quantity: 1 // default quantity
        }
        setItems([newCartItem, ...items]); // add the new cart item to the cart
    }

    //update quantity

    return (
        <CartContext.Provider value={{items, addItem}}>
            {children}
        </CartContext.Provider>)
}

export default CartProvider ;

export const useCart = () => useContext(CartContext);