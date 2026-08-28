import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [shopMenuOpen, setShopMenuOpen] = useState(false);

  const addToCart = (product) => {
    setCart((prevCart) => [
      ...prevCart,
      { ...product, selectedOptions: { ...product.selectedOptions } },
    ]);
    setShopMenuOpen(true);
  };
  const removeFromCart = (indexToRemove) => {
    setCart((prevCart) =>
      prevCart.filter((_, index) => index !== indexToRemove),
    );
  };

  const totalPrice = cart.reduce((total, item) => {
    const cleanPrice =
      typeof item.price === "string"
        ? parseFloat(item.price.replace(/[^0-9.-]+/g, ""))
        : parseFloat(item.price);

    return total + (isNaN(cleanPrice) ? 0 : cleanPrice);
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        shopMenuOpen,
        setShopMenuOpen,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
