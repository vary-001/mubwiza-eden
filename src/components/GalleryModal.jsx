import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function GalleryModal({ product, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const galleryImages = product.gallery || [product.image]; // Fallback to main image if no gallery

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') showPrevious();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const showPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1));
  };

  const showNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1));
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 15 } },
    exit: { opacity: 0, y: 50, scale: 0.9, transition: { duration: 0.2 } }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-charcoal/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-4xl bg-ivory-white rounded-2xl shadow-2xl flex flex-col overflow-hidden font-poppins border-4 border-white/20"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        {/* Header */}
        <div className="p-5 flex justify-between items-center border-b border-sand">
          <h3 className="text-2xl font-bold text-mahogany">{product.name} Gallery</h3>
          <button onClick={onClose} className="w-10 h-10 flex items-center justify-center rounded-full text-mahogany hover:bg-sand/50 transition-colors">
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>
        </div>

        {/* Gallery Content */}
        <div className="relative p-5 md:p-8 flex-grow">
          <div className="relative w-full h-[60vh] max-h-[500px] bg-charcoal/10 rounded-lg overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={galleryImages[currentIndex]}
                alt={`${product.name} - Image ${currentIndex + 1}`}
                className="w-full h-full object-contain"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>
          </div>

          {/* Navigation */}
          {galleryImages.length > 1 && (
            <>
              <button
                onClick={showPrevious}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/50 hover:bg-white/80 backdrop-blur-sm rounded-full text-mahogany shadow-md transition"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button
                onClick={showNext}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/50 hover:bg-white/80 backdrop-blur-sm rounded-full text-mahogany shadow-md transition"
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-5 py-4 bg-mahogany/5 border-t border-sand flex justify-center items-center">
            {galleryImages.length > 1 && (
                <p className="text-mahogany font-semibold">
                    {currentIndex + 1} / {galleryImages.length}
                </p>
            )}
        </div>
      </motion.div>
    </motion.div>
  );
}