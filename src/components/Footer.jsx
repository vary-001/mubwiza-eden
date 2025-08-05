import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpa, faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTwitter, faWhatsapp, faPinterestP } from '@fortawesome/free-brands-svg-icons'
import Logo from '../assets/media/logo.png' // Import your logo image

export default function Footer() {
  const quickLinks = ['Products', 'Flower Info', 'Delivery', 'Our Story', 'Contact']
  const services = ['Wedding Flowers', 'Event Decor', 'Hotel Arrangements', 'Monthly Subscriptions']

  return (
    <footer className="bg-mahogany text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img 
                src={Logo} 
                alt="MUbwiza Eden Logo"
                className="h-12 w-auto mr-3"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23F28C1B'/%3E%3Ctext x='50%' y='50%' font-size='20' fill='white' text-anchor='middle' dominant-baseline='middle'%3ELogo%3C/text%3E%3C/svg%3E";
                }}
              />
              <span className="text-2xl font-bold text-orange">MUbwiza</span>

              <span className="text-xl font-medium text-white ml-1">Eden</span>
            </div>
            <p className="text-white/80">Bringing the beauty of Rwanda's flowers to your home, hotel, or special event since 2010.</p>
            
            {/* Enhanced Social Media */}
            <div className="flex space-x-3 pt-2">
              {[
                { icon: faFacebookF, color: 'hover:bg-green-600' },
                { icon: faInstagram, color: 'hover:bg-green-600' },
                { icon: faTwitter, color: 'hover:bg-green-400' },
                { icon: faWhatsapp, color: 'hover:bg-green-500' },
                { icon: faPinterestP, color: 'hover:bg-green-600' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href="#" 
                  className={`bg-orange ${social.color} text-white rounded-full h-9 w-9 flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1`}
                >
                  <FontAwesomeIcon icon={social.icon} className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-orange mb-6 pb-2 border-b border-orange/30 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '-')}`} 
                    className="flex items-center text-white/80 hover:text-orange transition group"
                  >
                    <span className="w-1.5 h-1.5 bg-orange rounded-full mr-3 opacity-0 group-hover:opacity-100 transition"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-orange mb-6 pb-2 border-b border-orange/30 inline-block">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="flex items-center text-white/80 hover:text-orange transition group"
                  >
                    <span className="w-1.5 h-1.5 bg-orange rounded-full mr-3 opacity-0 group-hover:opacity-100 transition"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-orange mb-6 pb-2 border-b border-orange/30 inline-block">Newsletter</h3>
              <p className="text-white/80 mb-4">Subscribe for floral tips and special offers</p>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="flex-grow px-4 py-2 rounded-l-full focus:outline-none text-charcoal"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-orange hover:bg-amber text-white px-4 rounded-r-full transition"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </button>
              </form>
            </div>

            <div className="space-y-3">
              <div className="flex items-center text-white/80">
                <FontAwesomeIcon icon={faPhoneAlt} className="text-orange mr-3" />
                <span>0788 759 351</span>
              </div>
              <div className="flex items-center text-white/80">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-orange mr-3" />
                <span>MIPC College, Musanze Ruhengeri</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-orange/30 pt-8 text-center">
          <p className="text-orange/80 text-sm">
            &copy; {new Date().getFullYear()} MUbwiza Eden. All rights reserved. | 
            Designed with <span className="text-red-400">♥</span> by Vary.Dev
          </p>
        </div>
      </div>
    </footer>
  )
}