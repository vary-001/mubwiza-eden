import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpa, faPhoneAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  const quickLinks = ['Products', 'Flower Info', 'Delivery', 'Our Story', 'Contact']

  return (
    <footer className="bg-mahogany text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left Segment - Logo */}
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-orange">MUbwiza</span>
              <FontAwesomeIcon icon={faSpa} className="text-yellow ml-1 text-xl" />
              <span className="text-xl font-medium text-white ml-1">Eden</span>
            </div>
            <p className="max-w-xs">Bringing the beauty of Rwanda's flowers to your home, hotel, or special event since 2010.</p>
          </div>
          
          {/* Center Segment - Social Media */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="bg-orange hover:bg-amber text-white rounded-full h-10 w-10 flex items-center justify-center transition duration-300">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="bg-orange hover:bg-amber text-white rounded-full h-10 w-10 flex items-center justify-center transition duration-300">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="bg-orange hover:bg-amber text-white rounded-full h-10 w-10 flex items-center justify-center transition duration-300">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://wa.me/250788759351" className="bg-orange hover:bg-amber text-white rounded-full h-10 w-10 flex items-center justify-center transition duration-300">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faPhoneAlt} className="mr-2 text-orange" />
              <span>0788 759 351</span>
            </div>
          </div>
          
          {/* Right Segment - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '-')}`} 
                    className="hover:text-orange transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-orange border-opacity-30 mt-8 pt-8 text-center text-sm text-orange">
          <p>&copy; {new Date().getFullYear()} MUbwiza Eden. All rights reserved. | Designed with <FontAwesomeIcon icon={faPhoneAlt} className="text-red-400" /> by Dev Charm</p>
        </div>
      </div>
    </footer>
  )
}