import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import FlowerInfo from './components/FlowerInfo';
import Delivery from './components/Delivery';
import Story from './components/Story';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Loader from './components/Loader'; // 1. Import the new Loader component
import { Toaster } from 'react-hot-toast';
import './App.css';

const HomePage = ({ addToCart }) => (
  <main>
    <Hero />
    <section id="products"><Products addToCart={addToCart} /></section>
    <section id="flower-info"><FlowerInfo /></section>
    <section id="delivery"><Delivery /></section>
    <section id="our-story"><Story /></section>
    <section id="contact"><Contact /></section>
    <Footer />
  </main>
);

const LoginPage = () => (
  <div className="pt-40 text-center">
    <h1 className="text-4xl font-bold text-mahogany">Login Page</h1>
    <p className="mt-4">This is where the login/register form will go.</p>
  </div>
);

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // 2. Add loading state

  // 3. Simulate loading time
  useEffect(() => {
    // Hide loader after 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3000ms = 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  // --- Cart Management Functions ---
  const addToCart = (product) => {
    setCartItems(prevItems => {
      const item = prevItems.find(i => i.id === product.id);
      return item ? prevItems.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i) : [...prevItems, { ...product, quantity: 1 }];
    });
  };
  const removeFromCart = (id) => setCartItems(p => p.filter(i => i.id !== id));
  const updateQuantity = (id, q) => setCartItems(p => p.map(i => i.id === id ? { ...i, quantity: Math.max(1, q) } : i));
  const clearCart = () => setCartItems([]);

  return (
    <Router>
      {/* 4. AnimatePresence handles the exit animation of the Loader */}
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" />
        ) : (
          <div className="font-poppins bg-ivory-white text-charcoal">
            <Toaster
              position="bottom-right"
              toastOptions={{
                style: { fontFamily: "'Poppins', sans-serif", background: '#F28C1B', color: '#fff' },
                success: { iconTheme: { primary: '#fff', secondary: '#F28C1B' } },
                error: { style: { background: '#e74c3c' } },
              }}
            />
            <Navbar cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} clearCart={clearCart} />
            <Routes>
              <Route path="/" element={<HomePage addToCart={addToCart} />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
            <WhatsAppButton />
          </div>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;