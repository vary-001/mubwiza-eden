import { createContext, useState, useEffect, useContext } from 'react';
import toast from 'react-hot-toast';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        toast.success(`${product.name} quantity updated in cart!`, {
          style: {
            background: '#F28C1B',
            color: '#fff',
          },
          iconTheme: {
            primary: '#fff',
            secondary: '#F28C1B',
          },
        });
        return prevItems.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      
      toast.success(`${product.name} added to cart!`, {
        style: {
          background: '#F28C1B',
          color: '#fff',
        },
        iconTheme: {
          primary: '#fff',
          secondary: '#F28C1B',
        },
      });
      
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === productId);
      
      if (existingItem.quantity > 1) {
        toast('Item quantity decreased', {
          icon: '➖',
          style: {
            background: '#F28C1B',
            color: '#fff',
          },
        });
        return prevItems.map(item =>
          item.id === productId 
            ? { ...item, quantity: item.quantity - 1 } 
            : item
        );
      }
      
      toast('Item removed from cart', {
        icon: '🗑️',
        style: {
          background: '#6B3E22',
          color: '#fff',
        },
      });
      
      return prevItems.filter(item => item.id !== productId);
    });
  };

  const clearCart = () => {
    setCartItems([]);
    toast('Cart cleared', {
      icon: '🛒',
      style: {
        background: '#6B3E22',
        color: '#fff',
      },
    });
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        totalItems,
        totalPrice,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook for using the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};