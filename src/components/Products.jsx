// src/pages/Products.jsx (or wherever this component is)

import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar, faCartPlus, faCarrot, faLeaf, faSeedling, faImages, faPalette,
  faSearch, faSpa, faBoxOpen, faChevronDown, faTimes
} from '@fortawesome/free-solid-svg-icons';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import toast from 'react-hot-toast';
import { AnimatePresence, motion } from 'framer-motion';

// Import the new SiteBanner component
import SiteBanner from '../components/SiteBanner'; // Adjust the path if necessary

const PRODUCTS_PER_PAGE = 4;

// ... (ProductSkeleton and ImageViewModal components remain the same) ...
const ProductSkeleton = () => (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-sand/20 flex flex-col">
      <Skeleton height={256} />
      <div className="p-6 flex flex-col flex-grow">
        <Skeleton height={28} width="80%" />
        <div className="mt-2">
          <Skeleton count={3} />
        </div>
        <div className="flex justify-between items-center mt-5">
          <Skeleton height={44} width={140} />
          <Skeleton height={20} width={60} />
        </div>
      </div>
    </div>
  );
  
  const ImageViewModal = ({ imageUrl, onClose }) => {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Blur Background */}
          <motion.div
            initial={{ backdropFilter: 'blur(0px)' }}
            animate={{ backdropFilter: 'blur(8px)' }}
            exit={{ backdropFilter: 'blur(0px)' }}
            className="fixed inset-0 bg-black/50"
            onClick={onClose}
          />
          
          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative z-50 max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 text-white hover:text-orange transition-transform duration-200 hover:scale-110"
            >
              <FontAwesomeIcon icon={faTimes} className="text-3xl" />
            </button>
            <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
              <img
                src={imageUrl}
                alt="Product preview"
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  };
  

export default function Products({ addToCart }) {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(PRODUCTS_PER_PAGE);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewedImage, setViewedImage] = useState(null);

  const categories = [
    { id: 'all', name: 'All', icon: faStar },
    { id: 'flowers', name: 'Flowers', icon: faSpa },
    { id: 'arts-crafts', name: 'Arts & crafts', icon: faPalette },
    { id: 'crop-seedling', name: 'Crop Seedling', icon: faSeedling },
    { id: 'flower-seedling', name: 'Flower Seedling', icon: faLeaf },
    { id: 'vegetables', name: 'Vegetables', icon: faCarrot }
  ];

  // ... (useEffect hooks and other functions remain the same) ...
  useEffect(() => {
    setIsLoading(true);
    const productsQuery = query(collection(db, 'products'), orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(productsQuery, (snapshot) => {
      const productsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setAllProducts(productsData);
      setFilteredProducts(productsData);
      setIsLoading(false);
    }, (error) => {
      console.error("Error fetching products: ", error);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Effect to filter products and reset visibility on filter change
  useEffect(() => {
    let tempProducts = [...allProducts];

    if (activeCategory !== 'all') {
      tempProducts = tempProducts.filter(p => p.category === activeCategory);
    }

    if (searchTerm.trim() !== '') {
      tempProducts = tempProducts.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(tempProducts);
    setVisibleCount(PRODUCTS_PER_PAGE);
  }, [allProducts, activeCategory, searchTerm]);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + PRODUCTS_PER_PAGE);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`, {
      position: 'bottom-right',
      style: {
        background: '#F28C1B',
        color: '#fff',
      },
      icon: '🛒',
    });
  };

  const handleViewImage = (imageUrl) => {
    setViewedImage(imageUrl);
  };

  const renderProductGrid = () => {
    if (isLoading) {
      return Array.from({ length: PRODUCTS_PER_PAGE }).map((_, index) => (
        <ProductSkeleton key={index} />
      ));
    }

    if (filteredProducts.length === 0) {
      return (
        <div className="col-span-full flex flex-col justify-center items-center h-96 bg-ivory-white/80 rounded-2xl">
          <FontAwesomeIcon icon={faBoxOpen} className="text-sand text-6xl mb-4" />
          <h3 className="text-2xl font-bold font-poppins text-mahogany">No Products Found</h3>
          <p className="text-charcoal mt-2 font-poppins">Try adjusting your search or category filter.</p>
        </div>
      );
    }

    return filteredProducts.slice(0, visibleCount).map(product => (
      <div
        key={product.id}
        className="product-card group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-sand/20 flex flex-col transform hover:-translate-y-2"
      >
        <div className="relative overflow-hidden h-64">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover cursor-pointer"
            onClick={() => handleViewImage(product.imageUrl)}
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute top-4 right-4 bg-orange/95 text-white font-bold font-poppins py-1.5 px-4 rounded-full text-sm shadow-md">
            {product.price.toLocaleString()} RWF
          </div>
        </div>
        <div className="p-6 flex flex-col flex-grow font-poppins">
          <h3 className="text-xl font-bold text-mahogany mb-2">{product.name}</h3>
          <p className="text-charcoal text-sm flex-grow">{product.description}</p>
          <div className="flex justify-between items-center mt-5">
            <button
              onClick={() => handleAddToCart(product)}
              className="add-to-cart bg-gradient-to-r from-orange to-amber text-white font-bold py-2.5 px-6 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-orange/30 flex items-center"
            >
              <FontAwesomeIcon icon={faCartPlus} className="mr-2" />
              Cart
            </button>
            <button 
              onClick={() => handleViewImage(product.imageUrl)}
              className="text-teak hover:text-amber font-medium flex items-center text-sm"
            >
              <FontAwesomeIcon icon={faImages} className="mr-1.5" />
              View
            </button>
          </div>
        </div>
      </div>
    ));
  };


  return (
    // Use a Fragment (<>) to wrap the components
    <>
      {/* RENDER THE BANNER AT THE TOP */}
      <SiteBanner />

      <section id="products" className="py-16 md:py-24 bg-ivory-white font-poppins">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-mahogany mb-4">Our Floral Collection</h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto">Beautifully arranged flowers for every occasion, handpicked with care in Musanze.</p>
          </div>
          
          {/* Filters and Search */}
          <div className="flex flex-col items-center mb-12">
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 w-full">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`px-4 md:px-5 py-2 rounded-full font-medium shadow-md transition-all flex items-center text-sm md:text-base ${
                    activeCategory === category.id
                      ? 'bg-orange text-white ring-2 ring-offset-2 ring-amber'
                      : 'bg-white text-charcoal border border-sand hover:bg-ivory-white hover:border-amber/50'
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <FontAwesomeIcon icon={category.icon} className="mr-2.5" />
                  {category.name}
                </button>
              ))}
            </div>
            <div className="relative w-full max-w-lg mt-4">
              <input
                type="text"
                placeholder="Search products by name..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-sand focus:outline-none focus:ring-2 focus:ring-orange/50 shadow-sm font-poppins"
              />
              <FontAwesomeIcon icon={faSearch} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {renderProductGrid()}
          </div>

          {/* Load More Button */}
          {!isLoading && visibleCount < filteredProducts.length && (
            <div className="text-center mt-12">
              <button
                onClick={handleLoadMore}
                className="bg-mahogany text-ivory-white font-bold font-poppins py-3 px-8 rounded-full shadow-lg hover:bg-amber focus:outline-none focus:ring-4 focus:ring-amber/50 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto"
              >
                <FontAwesomeIcon icon={faChevronDown} className="mr-3" />
                View More Products
              </button>
            </div>
          )}

          {/* Image View Modal */}
          {viewedImage && (
            <ImageViewModal 
              imageUrl={viewedImage} 
              onClose={() => setViewedImage(null)} 
            />
          )}
        </div>
      </section>
    </>
  );
}