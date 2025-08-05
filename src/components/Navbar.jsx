import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBars, 
  faTimes, 
  faUser, 
  faShoppingCart, 
  faChevronDown,
  faGlobe
} from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/media/logo.png';
import CartModal from './CartModal';
import toast from 'react-hot-toast';

export default function Navbar({ cartItems, removeFromCart, clearCart, updateQuantity }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState('ENG');
  const [cartOpen, setCartOpen] = useState(false);

  const languages = ['ENG', 'FRA', 'KINY'];
  const navItems = ['Products', 'Flower Info', 'Delivery', 'Our Story', 'Contact'];

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo with Image */}
            <div className="flex items-center">
              <a href="#" className="flex items-center transition duration-300 hover:opacity-80">
                <img 
                  src={Logo} 
                  alt="MUbwiza Eden Logo"
                  className="h-10 w-auto mr-2"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23F28C1B'/%3E%3Ctext x='50%' y='50%' font-size='20' fill='white' text-anchor='middle' dominant-baseline='middle'%3ELogo%3C/text%3E%3C/svg%3E";
                  }}
                />
                <span className="hidden sm:inline text-xl font-bold text-orange">MUbwiza Eden</span>
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '-')}`} 
                  className="px-4 py-2 text-charcoal hover:text-orange transition font-medium rounded-lg hover:bg-orange/5"
                >
                  {item}
                </a>
              ))}
            </div>
            
            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              {/* Language Dropdown - Desktop */}
              <div className="relative hidden md:block">
                <button 
                  onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                  className="flex items-center space-x-1 px-3 py-2 text-charcoal hover:text-orange transition rounded-lg hover:bg-orange/5"
                  aria-label="Language selector"
                >
                  <FontAwesomeIcon icon={faGlobe} className="text-base" />
                  <span>{activeLanguage}</span>
                  <FontAwesomeIcon 
                    icon={faChevronDown} 
                    className={`text-xs transition-transform duration-200 ${
                      languageDropdownOpen ? 'transform rotate-180' : ''
                    }`} 
                  />
                </button>
                
                {languageDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-24 bg-white rounded-lg shadow-lg py-1 z-50 border border-gray-100">
                    {languages.map((lang) => (
                      <button
                        key={lang}
                        className={`w-full text-left px-4 py-2 text-sm text-charcoal hover:bg-orange/10 hover:text-orange ${
                          activeLanguage === lang ? 'bg-orange/10 text-orange font-medium' : ''
                        }`}
                        onClick={() => {
                          setActiveLanguage(lang);
                          setLanguageDropdownOpen(false);
                        }}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Login Icon - Desktop */}
              <a 
                href="#" 
                className="hidden md:flex items-center space-x-1 px-3 py-2 text-charcoal hover:text-orange transition rounded-lg hover:bg-orange/5"
                aria-label="Account"
              >
                <FontAwesomeIcon icon={faUser} className="text-base" />
                <span className="hidden lg:inline">Login</span>
              </a>
              
              {/* Cart Icon */}
              <button 
                className="relative flex items-center space-x-1 px-3 py-2 text-charcoal hover:text-orange transition rounded-lg hover:bg-orange/5"
                aria-label="Shopping cart"
                onClick={() => {
                  if (cartItemCount > 0) {
                    setCartOpen(true);
                  } else {
                    toast('Your cart is empty!', {
                      icon: '🛒',
                    });
                  }
                }}
              >
                <FontAwesomeIcon icon={faShoppingCart} className="text-base" />
                <span className="hidden sm:inline">Cart</span>
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </button>
              
              {/* Language Dropdown - Mobile */}
              <div className="relative md:hidden">
                <button 
                  onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                  className="flex items-center p-2 text-charcoal hover:text-orange transition rounded-lg hover:bg-orange/5"
                  aria-label="Language selector"
                >
                  <FontAwesomeIcon icon={faGlobe} className="text-base" />
                  <span>{activeLanguage}</span>
                  <FontAwesomeIcon 
                    icon={faChevronDown} 
                    className={`text-xs transition-transform duration-200 ${
                      languageDropdownOpen ? 'transform rotate-180' : ''
                    }`} 
                  />
                </button>
                
                {languageDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-24 bg-white rounded-lg shadow-lg py-1 z-50 border border-gray-100">
                    {languages.map((lang) => (
                      <button
                        key={lang}
                        className={`w-full text-left px-4 py-2 text-sm text-charcoal hover:bg-orange/10 hover:text-orange ${
                          activeLanguage === lang ? 'bg-orange/10 text-orange font-medium' : ''
                        }`}
                        onClick={() => {
                          setActiveLanguage(lang);
                          setLanguageDropdownOpen(false);
                        }}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Mobile Menu Button */}
              <button 
                className="lg:hidden p-2 text-charcoal rounded-lg hover:bg-orange/5 transition"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Menu"
              >
                <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} className="text-xl" />
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          <div className={`lg:hidden bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
            mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="container mx-auto px-4 py-3">
              {navItems.map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`} 
                  className="block py-3 px-2 text-charcoal hover:text-orange transition font-medium rounded-lg hover:bg-orange/5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              
              {/* Mobile Login */}
              <a 
                href="#" 
                className="flex items-center py-3 px-2 text-charcoal hover:text-orange transition font-medium rounded-lg hover:bg-orange/5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FontAwesomeIcon icon={faUser} className="mr-3" />
                Login / Register
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Cart Modal */}
      <CartModal 
        isOpen={cartOpen} 
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        clearCart={clearCart}
      />
    </>
  );
}