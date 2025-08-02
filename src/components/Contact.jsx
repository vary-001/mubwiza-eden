import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhoneAlt, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-orange font-semibold tracking-widest">GET IN TOUCH</span>
          <h2 className="text-4xl md:text-5xl font-bold text-mahogany mt-3 mb-4">
            Contact <span className="text-amber">MUbwiza Eden</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange to-amber mx-auto mb-6"></div>
          <p className="text-lg text-charcoal/80 max-w-3xl mx-auto">
            Visit our shop or get in touch for custom floral arrangements and events
          </p>
        </div>
        
        {/* Contact Form and Info */}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <form className="bg-ivory-white p-8 rounded-xl shadow-md">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-sand rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-sand rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full px-4 py-2 border border-sand rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-orange hover:bg-amber text-white font-medium py-3 px-4 rounded-lg transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-ivory-white p-8 rounded-xl shadow-md h-full">
              <h3 className="text-xl font-semibold text-mahogany mb-4">Visit Our Shop</h3>
              <div className="mb-6">
                <div className="flex items-start mb-4">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-orange mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-gray-600">Mipc College, Musanze Ruhengeri City, Rwanda</p>
                  </div>
                </div>
                <div className="flex items-start mb-4">
                  <FontAwesomeIcon icon={faPhoneAlt} className="text-orange mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-600">0788 759 351 (Call/WhatsApp)</p>
                  </div>
                </div>
                <div className="flex items-start mb-4">
                  <FontAwesomeIcon icon={faEnvelope} className="text-orange mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600">info@mubwizaeden.rw</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FontAwesomeIcon icon={faClock} className="text-orange mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">Opening Hours</h4>
                    <p className="text-gray-600">Monday-Saturday: 8:00 AM - 6:00 PM<br />Sunday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="rounded-xl overflow-hidden h-64">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.634038933092!2d29.63667731533094!3d-1.499999998691601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMjknNTkuOSJTIDI5wrAzOCcyMS4xIkU!4v1620000000000!5m2!1sen!2srw" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}}
                  allowFullScreen="" 
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}