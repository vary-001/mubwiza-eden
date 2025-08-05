import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling, faTint, faSun, faImages, faLeaf, faArrowRight, faThLarge, faTimes } from '@fortawesome/free-solid-svg-icons';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { motion, AnimatePresence } from 'framer-motion';
import GalleryModal from './GalleryModal'; // Import the new GalleryModal component

// Skeleton component for a consistent loading experience
const InfoCardSkeleton = () => (
  <div className="bg-mahogany/10 rounded-2xl p-5 flex flex-col h-full backdrop-blur-sm border border-white/20">
    <Skeleton height={200} baseColor="#6B3E22" highlightColor="#A76C3B" />
    <div className="mt-4">
      <Skeleton height={30} width="75%" baseColor="#6B3E22" highlightColor="#A76C3B" />
      <Skeleton count={2} className="mt-2" baseColor="#6B3E22" highlightColor="#A76C3B" />
    </div>
    <div className="mt-auto pt-4">
      <Skeleton height={45} baseColor="#6B3E22" highlightColor="#A76C3B" />
    </div>
  </div>
);

export default function ProductInfo() {
  const [productInfo, setProductInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  // Fetch product info from Firestore
  useEffect(() => {
    setIsLoading(true);
    const infoQuery = query(collection(db, 'productInfo'), orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(infoQuery, (snapshot) => {
      const infoData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProductInfo(infoData);
      setIsLoading(false);
    }, (error) => {
      console.error("Error fetching product info:", error);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Functions to handle the gallery modal
  const openGallery = (product) => {
    setSelectedProduct(product);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    setSelectedProduct(null);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        stiffness: 100,
        damping: 15
      },
    }),
  };

  const displayedProducts = showAll ? productInfo : productInfo.slice(0, 4);

  return (
    <>
      <section id="flower-info" className="py-20 bg-gradient-to-b from-ivory-white via-sand/20 to-ivory-white font-poppins">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-orange font-semibold tracking-widest uppercase">Floral Education</span>
            <h2 className="text-4xl md:text-5xl font-bold text-mahogany mt-3 mb-4">
              Discover Our <span className="text-amber">Native Species</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange to-amber mx-auto mb-6"></div>
            <p className="text-lg text-charcoal/80 max-w-3xl mx-auto">
              Learn about the beautiful native flowers we cultivate and their unique botanical characteristics.
            </p>
          </div>

          {/* Flower Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <AnimatePresence>
              {isLoading
                ? Array.from({ length: 4 }).map((_, index) => <InfoCardSkeleton key={index} />)
                : displayedProducts.map((info, index) => (
                  <motion.div
                    key={info.id}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={index}
                    layout
                    className="group flex flex-col bg-white/10 backdrop-blur-md text-mahogany rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20"
                  >
                    <div className="relative h-60 overflow-hidden">
                      <img
                        src={info.image}
                        alt={info.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{info.name}</h3>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <p className="text-charcoal/80 mb-5 text-sm flex-grow">{info.description}</p>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-sm text-charcoal/90">
                          <div className="w-8 h-8 rounded-full bg-mahogany/10 flex items-center justify-center mr-3">
                            <FontAwesomeIcon icon={faTint} className="text-amber" />
                          </div>
                          <span>Water: <span className="font-medium text-mahogany capitalize">{info.water}</span></span>
                        </div>
                        <div className="flex items-center text-sm text-charcoal/90">
                          <div className="w-8 h-8 rounded-full bg-mahogany/10 flex items-center justify-center mr-3">
                            <FontAwesomeIcon icon={faSun} className="text-amber" />
                          </div>
                          <span>Light: <span className="font-medium text-mahogany capitalize">{info.light}</span></span>
                        </div>
                      </div>
                      <button 
                        onClick={() => openGallery(info)}
                        className="mt-auto w-full py-2.5 bg-mahogany text-white font-bold hover:bg-amber rounded-lg transition-all duration-300 flex items-center justify-center group-hover:shadow-lg"
                      >
                        <span>View Gallery</span>
                        <FontAwesomeIcon icon={faImages} className="ml-2 text-sm transform group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>

          {/* View All / View Less Button */}
          {!isLoading && productInfo.length > 4 && (
            <div className="text-center mb-20">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-8 py-3 bg-white text-mahogany font-bold rounded-full shadow-md hover:shadow-lg hover:bg-ivory-white/90 transition-all duration-300 flex items-center justify-center mx-auto border border-mahogany/20"
              >
                <FontAwesomeIcon icon={showAll ? faTimes : faThLarge} className="mr-2" />
                <span>{showAll ? 'View Less' : 'View All Species'}</span>
              </button>
            </div>
          )}

          {/* Conservation Section */}
        <div className="relative rounded-2xl overflow-hidden bg-mahogany/80 backdrop-blur-md border border-white/10">
           <div className="absolute inset-0 bg-gradient-to-br from-mahogany via-amber/80 to-yellow/60 opacity-20 z-0"></div>
          
           <div className="absolute top-0 left-0 w-full h-full opacity-5 z-0">
             <svg viewBox="0 0 1000 500" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0,250 Q250,100 500,250 T1000,250" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.3"></path>
              <path d="M0,300 Q250,150 500,300 T1000,300" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.3"></path>
              <path d="M0,200 Q250,50 500,200 T1000,200" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.3"></path>
            </svg>
          </div>
          
          <div className="relative z-10 p-10 md:p-16 text-white">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-start">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 md:mb-0 md:mr-10 flex-shrink-0 border border-white/20">
                  <FontAwesomeIcon icon={faSeedling} className="text-4xl text-white" />
                </div>
                
                <div>
                  <span className="text-yellow font-semibold tracking-wider">CONSERVATION EFFORTS</span>
                  <h3 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Preserving Rwanda's Floral Heritage</h3>
                  
                  <div className="prose prose-invert max-w-none text-ivory-white/90">
                    <p className="text-lg mb-6">
                      Since 2015, MUbwiza Eden has partnered with local botanists to protect Rwanda's native floral species. Our conservation program has successfully identified and safeguarded over 30 endemic varieties in the Musanze region.
                    </p>
                    <blockquote className="border-l-4 border-yellow pl-6 my-6 italic text-white/90">
                      "Our mission is to cultivate beauty while preserving Rwanda's natural heritage for future generations. Every flower tells a story of our land's rich biodiversity."
                    </blockquote>
                  </div>
                  
                  <div className="flex items-center mt-8">
                    <div className="bg-white text-orange rounded-full h-14 w-14 flex items-center justify-center mr-4 flex-shrink-0">
                      <FontAwesomeIcon icon={faLeaf} className="text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Manager.HAKIZIMANA Dominique.</h4>
                      <p className="text-white/80">Head of Conservation, MUbwiza Eden</p>
                    </div>
                  </div>
                  
                  <div className="mt-10">
                    <a href="#" className="inline-flex items-center px-6 py-3 bg-white text-mahogany font-medium rounded-full hover:bg-ivory-white/90 transition duration-300">
                      <span>Learn About Our Initiatives</span>
                      <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        </div>
      </section>

      <AnimatePresence>
        {isGalleryOpen && selectedProduct && (
          <GalleryModal
            product={selectedProduct}
            onClose={closeGallery}
          />
        )}
      </AnimatePresence>
    </>
  )
}