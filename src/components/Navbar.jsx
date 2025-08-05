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
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Logo from '../assets/media/logo.png';
import CartModal from './CartModal';
import toast from 'react-hot-toast';

const navItems = [
  { name: 'Products', to: 'products' },
  { name: 'Flower Info', to: 'flower-info' },
  { name: 'Delivery', to: 'delivery' },
  { name: 'Our Story', to: 'our-story' },
  { name: 'Contact', to: 'contact' }
];

export default function Navbar({ cartItems, removeFromCart, clearCart, updateQuantity }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState('ENG');
  
  const languages = ['ENG', 'FRA', 'KINY'];
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const NavLink = ({ to, children }) => (
    <ScrollLink
      to={to}
      spy={true}
      smooth={true}
      offset={-80} // Adjust for navbar height
      duration={500}
      className="px-4 py-2 transition font-medium rounded-lg text-charcoal hover:text-orange hover:bg-orange/5 cursor-pointer"
      activeClass="text-orange bg-orange/10"
      onClick={() => setMobileMenuOpen(false)}
    >
      {children}
    </ScrollLink>
  );

  return (
    <>
      <nav className="fixed top-0 w-full bg-ivory-white/90 backdrop-blur-md shadow-sm z-50 border-b border-sand/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <RouterLink to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="flex items-center space-x-2">
                <img 
                  src={Logo} 
                  alt="MUbwiza Eden Logo"
                  className="h-14 w-14 object-contain" // Corrected logo styling
                />
                <span className="hidden sm:inline text-xl font-bold text-mahogany">
                  MUbwiza Eden
                </span>
              </div>
            </RouterLink>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to}>{item.name}</NavLink>
              ))}
            </div>
            
            {/* Right Side Icons */}
            <div className="flex items-center space-x-2 md:space-x-4">
              {/* Language Dropdown */}
              <div className="relative hidden md:block">
                <button 
                  onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                  className="flex items-center space-x-1 px-3 py-2 text-charcoal hover:text-orange transition rounded-lg hover:bg-orange/5"
                >
                  <FontAwesomeIcon icon={faGlobe} />
                  <span>{activeLanguage}</span>
                  <FontAwesomeIcon icon={faChevronDown} className={`text-xs transition-transform ${languageDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {languageDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-24 bg-white rounded-lg shadow-xl py-1 border border-sand/30">
                    {languages.map((lang) => (
                      <button key={lang} className="w-full text-left px-4 py-2 text-sm text-charcoal hover:bg-orange/10" onClick={() => { setActiveLanguage(lang); setLanguageDropdownOpen(false); }}>
                        {lang}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Login Icon */}
              <RouterLink to="/login" className="hidden md:flex items-center space-x-2 px-3 py-2 text-charcoal hover:text-orange transition rounded-lg hover:bg-orange/5">
                <FontAwesomeIcon icon={faUser} />
                <span className="hidden lg:inline">Login</span>
              </RouterLink>
              
              {/* Cart Icon */}
              <button 
                className="relative flex items-center space-x-2 px-3 py-2 text-charcoal hover:text-orange transition rounded-lg hover:bg-orange/5"
                onClick={() => cartItemCount > 0 ? setCartOpen(true) : toast('Your cart is empty!', { icon: '🛒' })}
              >
                <FontAwesomeIcon icon={faShoppingCart} />
                <span className="hidden sm:inline">Cart</span>
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                    {cartItemCount}
                  </span>
                )}
              </button>
              
              {/* Mobile Menu Button */}
              <button className="lg:hidden p-2 text-charcoal" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} className="text-xl" />
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${mobileMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
            <div className="flex flex-col space-y-2 py-4">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to}>{item.name}</NavLink>
              ))}
              <RouterLink to="/login" className="flex items-center py-2 px-4 text-charcoal font-medium" onClick={() => setMobileMenuOpen(false)}>
                <FontAwesomeIcon icon={faUser} className="mr-3 w-5" />
                Login / Register
              </RouterLink>
            </div>
          </div>
        </div>
      </nav>

      <CartModal isOpen={cartOpen} onClose={() => setCartOpen(false)} {...{ cartItems, removeFromCart, updateQuantity, clearCart }} />
    </>
  );
}