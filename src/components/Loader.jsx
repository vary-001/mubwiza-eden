import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/media/logo.png'; // Make sure this path is correct

const Loader = () => {
  return (
    // The main container with the gradient background, covering the whole screen.
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-ivory-white via-sand/40 to-orange/30"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
    >
      {/* Content Wrapper */}
      <div className="flex flex-col items-center">
        {/* Logo with Heartbeat Animation */}
        <motion.img
          src={Logo}
          alt="Mubwiza Eden Logo"
          className="w-28 h-28 md:w-32 md:h-32 mb-6"
          animate={{
            scale: [1, 1.1, 1, 1.1, 1], // Heartbeat pulse effect
            transition: {
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-mahogany/10 rounded-full overflow-hidden mb-4">
          <motion.div
            className="h-full bg-gradient-to-r from-orange to-amber rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%', transition: { duration: 2.5, ease: 'linear' } }}
          ></motion.div>
        </div>

        {/* Location Text with Fade-in Animation */}
        <motion.div
          className="flex items-center text-mahogany/80"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.8 } }}
        >
          <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-amber" />
          <span className="font-semibold tracking-wide">in MIPC College</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;