'use client'

import { createContext, useContext, useState, ReactNode } from "react";

// Define the type for a product and cart item
interface Product {
  id: string;
  title: string;
  price: number;
  currency: string;
  image: string;
}

interface CartItem extends Product {}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
}

// Create a Context for the cart
const CartContext = createContext<CartContextType | undefined>(undefined);

// Create a provider component
export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: CartItem) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Create a custom hook to use the CartContext
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
