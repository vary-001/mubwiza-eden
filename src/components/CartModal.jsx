import { AnimatePresence, motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faXmark, faTrashCan, faChevronLeft, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const CartModal = ({ isOpen, onClose, cartItems, removeFromCart, clearCart, updateQuantity }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.error('Your cart is empty!');
      return;
    }

    const message = `Hello MUbwiza Eden! I'd like to order:\n\n${cartItems.map(item => 
      `- ${item.name} (${item.quantity} x ${item.price.toLocaleString()} RWF)`
    ).join('\n')}\n\nTotal: ${calculateTotal().toLocaleString()} RWF\n\nMy details: [Your Name, Address, Phone Number]`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/250788759351?text=${encodedMessage}`, '_blank');
    
    toast.success('Redirecting to WhatsApp for checkout!');
    clearCart();
    onClose();
  };

  const handleQuantityChange = (id, newQuantity) => {
  if (newQuantity < 1) {
    removeFromCart(id);
    toast.success('Item removed from cart!');
  } else {
    updateQuantity(id, newQuantity);
  }
};

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Blur Background */}
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(4px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/30 z-40"
            onClick={onClose}
          />
          
          {/* Modal */}
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl rounded-2xl bg-ivory-white shadow-xl overflow-hidden border border-sand/30"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-orange to-amber p-6 flex justify-between items-center">
                <h2 className="text-xl font-bold text-white font-poppins">Your Shopping Cart</h2>
                <button 
                  onClick={onClose}
                  className="text-white hover:text-mahogany transition-transform duration-200 hover:scale-110"
                >
                  <FontAwesomeIcon icon={faXmark} className="text-2xl" />
                </button>
              </div>
              
              {/* Body */}
              <div className="p-6 max-h-[60vh] overflow-y-auto">
                {cartItems.length === 0 ? (
                  <div className="text-center py-10">
                    <div className="text-5xl mb-4 text-orange">🛒</div>
                    <h3 className="text-xl font-bold text-mahogany mb-2 font-poppins">Your cart is empty</h3>
                    <p className="text-charcoal font-poppins">Add some beautiful flowers to your cart!</p>
                    <button
                      onClick={onClose}
                      className="mt-6 px-6 py-2 bg-orange text-white rounded-full font-medium hover:bg-amber transition-colors duration-200"
                    >
                      Browse Products
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <motion.div 
                        key={item.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-4 p-4 bg-white rounded-lg border border-sand/30 hover:shadow-md transition-all duration-200"
                      >
                        <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-lg">
                          <img 
                            src={item.imageUrl} 
                            alt={item.name}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-bold text-mahogany font-poppins">{item.name}</h4>
                          <p className="text-sm text-charcoal font-poppins">{item.price.toLocaleString()} RWF</p>
                          <p className="text-xs text-sand mt-1 font-poppins">{item.category}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {/* Quantity Controls */}
                          <div className="flex items-center border border-sand/50 rounded-full overflow-hidden">
                            <button
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                              className="px-2 py-1 text-charcoal hover:bg-sand/20 transition-colors"
                            >
                              <FontAwesomeIcon icon={faMinus} className="text-xs" />
                            </button>
                            <span className="px-3 py-1 text-sm font-medium font-poppins">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                              className="px-2 py-1 text-charcoal hover:bg-sand/20 transition-colors"
                            >
                              <FontAwesomeIcon icon={faPlus} className="text-xs" />
                            </button>
                          </div>
                          <button 
                            onClick={() => {
                              removeFromCart(item.id);
                              toast.success(`${item.name} removed from cart!`);
                            }}
                            className="p-2 text-charcoal/50 hover:text-orange transition-colors duration-200"
                          >
                            <FontAwesomeIcon icon={faTrashCan} />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Footer */}
              {cartItems.length > 0 && (
                <div className="border-t border-sand/30 p-6 bg-white">
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-bold text-charcoal font-poppins">Subtotal:</span>
                    <span className="font-bold text-orange text-xl font-poppins">
                      {calculateTotal().toLocaleString()} RWF
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={onClose}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-orange text-orange font-medium hover:bg-orange/5 transition-all duration-200 hover:shadow-sm"
                    >
                      <FontAwesomeIcon icon={faChevronLeft} />
                      Continue Shopping
                    </button>
                    <button
                      onClick={handleCheckout}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-green-600 to-green-700 text-white font-medium hover:shadow-lg transition-all duration-200 hover:brightness-110"
                    >
                      <FontAwesomeIcon icon={faWhatsapp} />
                      Checkout via WhatsApp
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartModal;