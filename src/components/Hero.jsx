import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling, faMapMarkerAlt, faChevronRight, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect, useRef } from 'react'
import hero1 from '../assets/media/hero2.jpeg'
import hero2 from '../assets/media/hero1.jpeg'
import hero3 from '../assets/media/hero3.jpeg'
import hero4 from '../assets/media/hero4.jpeg'
import hero5 from '../assets/media/hero5.jpeg'
import hero6 from '../assets/media/hero6.jpeg'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const marqueeRef = useRef(null)
  const slides = [hero1, hero2, hero3, hero4, hero5, hero6]

  // Auto slide transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [slides.length])

  // Marquee animation effect
  useEffect(() => {
    const marquee = marqueeRef.current
    if (marquee) {
      const duration = marquee.scrollWidth / 100
      marquee.style.animationDuration = `${duration}s`
    }
  }, [])

  const announcements = [
    { text: "🌼 Fresh flowers delivered daily in Musanze Ruhengeri!", icon: faChevronRight },
    { text: "🎉 Special discount for hotels and lodges - contact us!", icon: faChevronRight },
    { text: "💐 Custom floral arrangements for weddings and events", icon: faChevronRight },
    { text: "🌱 Now offering flower seedlings - grow your own beauty!", icon: faChevronRight }
  ]

  return (
    <section className="relative pt-16 md:pt-20">
      {/* Enhanced Announcement Banner */}
      <div className="bg-gradient-to-r from-orange to-amber text-white py-3 overflow-hidden w-full">
        <div 
          ref={marqueeRef}
          className="marquee whitespace-nowrap w-full inline-flex items-center"
        >
          {[...announcements, ...announcements].map((item, index) => (
            <div key={index} className="inline-flex items-center mx-8">
              <span className="text-sm md:text-base font-medium mr-2">{item.text}</span>
              <FontAwesomeIcon icon={item.icon} className="text-xs opacity-70" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Hero Slider with Modern Transitions */}
      <div className="relative h-[80vh] sm:h-[85vh] md:h-[90vh] min-h-[400px] sm:min-h-[500px] max-h-[1000px] overflow-hidden">
        {/* Slider Images with Zoom Effect */}
        <div className="absolute inset-0 z-0">
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.65,0.05,0.36,1)] ${
                index === currentSlide 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-105'
              }`}
              style={{ 
                backgroundImage: `url(${slide})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
              }}
            ></div>
          ))}
        </div>
        
        {/* Conditional Gradient Overlay */}
        <div 
          className="absolute inset-0 z-1"
          style={{
            background: currentSlide === 0 
              ? 'linear-gradient(to right, rgba(107,62,34,0.8), rgba(242,140,27,0.6))' 
              : 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.1))'
          }}
        ></div>
        
        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* First Slide with Full Content */}
            {currentSlide === 0 && (
              <div className="max-w-4xl mx-auto text-center">
                <div className="mb-4 sm:mb-6 animate-float">
                  <div className="relative inline-block">
                    <FontAwesomeIcon 
                      icon={faSeedling} 
                      className="text-yellow text-3xl sm:text-4xl md:text-5xl drop-shadow-lg" 
                    />
                    <div className="absolute -inset-2 rounded-full border-2 border-yellow/30 animate-ping-slow opacity-0"></div>
                  </div>
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                  <span className="block text-shadow-lg">Welcome to</span>
                  <span className="text-yellow bg-clip-text bg-gradient-to-r from-yellow to-amber text-transparent">
                    MUbwiza Eden
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-lg animate-fade-in">
                  Rwanda's premier floral destination, where nature's beauty meets artisanal craftsmanship for every special occasion.
                </p>
              </div>
            )}
            
            {/* Common Elements for All Slides */}
            <div className="max-w-4xl mx-auto text-center">
              {/* Location Pin - Visible on All Slides */}
              <div className="flex items-center justify-center mb-8 sm:mb-10">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-yellow/30 rounded-full blur-sm group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
                  <div className="relative flex items-center bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-2 rounded-full border border-white/20 hover:border-yellow/50 transition-all duration-300">
                    <div className="relative mr-2">
                      <FontAwesomeIcon 
                        icon={faMapMarkerAlt} 
                        className="text-yellow text-base sm:text-lg md:text-xl drop-shadow-md" 
                      />
                      <div className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full animate-ping opacity-75"></div>
                    </div>
                    <span className="text-white font-medium tracking-wide text-xs sm:text-sm md:text-base">
                      MIPC College, Musanze Ruhengeri
                    </span>
                  </div>
                </div>
              </div>
              
              {/* CTA Buttons - Visible on All Slides */}
              <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8">
                <a 
                  href="#products" 
                  className="relative overflow-hidden px-4 sm:px-5 md:px-6 py-2 sm:py-3 bg-gradient-to-r from-orange to-amber text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] group text-sm sm:text-base"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Explore Collection
                    <FontAwesomeIcon icon={faChevronRight} className="ml-2 text-xs" />
                  </span>
                </a>
                
                <a 
                  href="#contact" 
                  className="relative overflow-hidden px-4 sm:px-5 md:px-6 py-2 sm:py-3 border-2 border-white text-white font-semibold rounded-full transition-all duration-300 hover:scale-[1.02] group text-sm sm:text-base"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <FontAwesomeIcon icon={faPhoneAlt} className="mr-2 text-xs sm:text-sm" />
                    Contact Us
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Modern Circular Slider Dots */}
        <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 z-10">
          <div className="flex justify-center">
            <div className="flex justify-center space-x-2 sm:space-x-3">
              {slides.map((_, index) => (
                <button 
                  key={index}
                  className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/50'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}