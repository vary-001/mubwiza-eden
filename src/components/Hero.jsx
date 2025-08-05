import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling, faMapMarkerAlt, faChevronRight, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import hero1 from '../assets/media/hero2.jpeg'
import hero2 from '../assets/media/hero1.jpeg'
import hero3 from '../assets/media/hero3.jpeg'
import hero4 from '../assets/media/hero4.jpeg'
import hero5 from '../assets/media/hero5.jpeg'
import hero6 from '../assets/media/hero6.jpeg'
import { motion } from 'framer-motion'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [hero1, hero2, hero3, hero4, hero5, hero6]

  // Auto slide transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section className="relative pt-16 md:pt-20">
      {/* Hero Slider */}
      <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] min-h-[400px] sm:min-h-[500px] max-h-[900px] overflow-hidden">
        {/* Slider Images */}
        <div className="absolute inset-0 z-0">
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.65,0.05,0.36,1)] ${
                index === currentSlide 
                  ? 'opacity-100' 
                  : 'opacity-0'
              }`}
              style={{ 
                backgroundImage: `url(${slide})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
              }}
            ></div>
          ))}
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-black/20 to-black/10"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* First Slide with Special Styling */}
            {currentSlide === 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-md mx-auto text-center bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
              >
                <div className="mb-4">
                  <FontAwesomeIcon 
                    icon={faSeedling} 
                    className="text-yellow text-2xl" 
                  />
                </div>
                
                <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">
                  <span className="block">Welcome to</span>
                  <span className="text-yellow">MUbwiza Eden</span>
                </h1>
                
                <p className="text-sm text-white/90 mb-4">
                  Rwanda's premier floral destination for every special occasion.
                </p>
              </motion.div>
            )}
            
            {/* Common Elements for All Slides */}
            <div className="max-w-4xl mx-auto text-center mt-auto pb-8">
              {/* Location Pin */}
              <div className="flex items-center justify-center mb-4">
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                  <FontAwesomeIcon 
                    icon={faMapMarkerAlt} 
                    className="text-yellow text-sm mr-2" 
                  />
                  <span className="text-white text-xs">
                    MIPC College, Musanze Ruhengeri
                  </span>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-2">
                <a 
                  href="#products" 
                  className="px-4 py-2 bg-gradient-to-r from-orange to-amber text-white font-medium rounded-full text-sm"
                >
                  Explore Collection
                </a>
                
                <a 
                  href="#contact" 
                  className="px-4 py-2 border border-white text-white font-medium rounded-full text-sm"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Slider Dots */}
        <div className="absolute bottom-4 left-0 right-0 z-10">
          <div className="flex justify-center">
            <div className="flex justify-center space-x-2">
              {slides.map((_, index) => (
                <button 
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide ? 'bg-white' : 'bg-white/50'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}