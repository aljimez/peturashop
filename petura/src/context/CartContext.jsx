import { createContext, useContext, useState, useEffect } from "react";

// CartContext: centraliza el estado del carrito para toda la app.
// - Persiste el carrito en localStorage para mantenerlo entre sesiones.
// - Provee utilidades para añadir, eliminar y actualizar cantidades.
// - Exporta un hook `useCart` para acceder al contexto de forma segura.
const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    // Protección contra uso fuera del proveedor
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  // Inicializa el carrito desde localStorage en la carga (si existe)
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("pawhavenCart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Sincroniza el carrito con localStorage cada vez que cambia
  useEffect(() => {
    localStorage.setItem("pawhavenCart", JSON.stringify(cartItems));
  }, [cartItems]);

  // addToCart: si el producto ya existe incrementa la cantidad, si no lo añade
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // removeFromCart: elimina un producto por id
  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  // updateQuantity: fija la cantidad o elimina si la cantidad <= 0
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // clearCart: vacía el carrito
  const clearCart = () => {
    setCartItems([]);
  };

  // getCartTotal: suma total (precio * cantidad)
  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // getCartCount: total de unidades en el carrito
  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
