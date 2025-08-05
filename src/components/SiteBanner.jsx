// src/components/SiteBanner.jsx
import { useState, useEffect } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

export default function SiteBanner() {
  const [banner, setBanner] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const bannerDocRef = doc(db, 'siteConfiguration', 'mainBanner');

    const unsubscribe = onSnapshot(bannerDocRef, (doc) => {
      if (doc.exists()) {
        const data = doc.data();
        if (data.isEnabled && data.title && data.message) {
          setBanner(data);
        } else {
          setBanner(null);
        }
      }
      setIsLoading(false);
    }, (error) => {
      console.error("Error fetching site banner: ", error);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (isLoading || !banner) {
    return null;
  }
  
  const bannerVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        delay: 0.2, // Small delay to let the page load first
      }
    },
  };

  return (
    // Container to provide margin and centering
    <motion.div 
      variants={bannerVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto px-4 pt-8 md:pt-12" // Margin top for spacing
    >
      <a 
        href={banner.link || '#'} 
        // The card itself
        className="block p-6 md:p-8 rounded-2xl bg-hero-gradient font-poppins text-ivory-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
      >
        <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          
          {/* Icon Section */}
          <div className="flex-shrink-0">
            <div className="bg-white/20 p-4 rounded-full">
              <FontAwesomeIcon icon={faBullhorn} className="text-white text-3xl" />
            </div>
          </div>

          {/* Text Content Section */}
          <div className="flex-grow">
            <h3 className="text-2xl font-bold text-white">{banner.title}</h3>
            <p className="mt-1 text-ivory-white/90">{banner.message}</p>
          </div>

          {/* Button/CTA Section */}
          {banner.link && (
            <div className="mt-4 md:mt-0 md:ml-auto flex-shrink-0">
              <div className="group bg-white text-mahogany font-bold py-3 px-6 rounded-full shadow-md hover:bg-ivory-white transition-all inline-flex items-center">
                <span>Learn More</span>
                <FontAwesomeIcon 
                  icon={faArrowRight} 
                  className="ml-2 transform group-hover:translate-x-1.5 transition-transform duration-300" 
                />
              </div>
            </div>
          )}
        </div>
      </a>
    </motion.div>
  );
}