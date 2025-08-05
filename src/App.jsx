import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import FlowerInfo from './components/FlowerInfo';
import Delivery from './components/Delivery';
import Story from './components/Story';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    setCartItems(prevItems => 
      prevItems.map(item =>
        item.id === productId 
          ? { ...item, quantity: Math.max(1, newQuantity) } // Ensure quantity doesn't go below 1
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="font-poppins bg-ivory-white text-charcoal">
      <Toaster 
        position="bottom-right"
        toastOptions={{
          style: {
            fontFamily: "'Poppins', sans-serif",
            background: '#F28C1B',
            color: '#fff',
          },
          success: {
            iconTheme: {
              primary: '#fff',
              secondary: '#F28C1B',
            },
          },
          error: {
            style: {
              background: '#e74c3c',
            },
          },
        }}
      />
      <Navbar 
        cartItems={cartItems} 
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        clearCart={clearCart}
      />
      <Hero />
      <Products addToCart={addToCart} />
      <FlowerInfo />
      <Delivery />
      <Story />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;