import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faCommentAlt, faTruck, faMobileAlt, faGift, faMapMarkerAlt, faClock, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function Delivery() {
  const steps = [
    {
      icon: faShoppingCart,
      title: 'Select Your Flowers',
      description: 'Browse our collection and add your favorite flowers to your cart. We offer custom arrangements tailored to your needs.',
      time: '5-10 minutes'
    },
    {
      icon: faWhatsapp,
      title: 'WhatsApp Checkout',
      description: 'Send your order via WhatsApp for confirmation. Our floral experts will guide you through payment and delivery options.',
      time: 'Instant confirmation'
    },
    {
      icon: faTruck,
      title: 'Fast Delivery',
      description: 'Enjoy fresh flowers delivered within 2 hours in Musanze. Hotels and lodges receive priority express delivery service.',
      time: 'Within 2 hours'
    }
  ]

  const features = [
    { icon: faMobileAlt, title: 'Mobile Friendly', description: 'Order easily from any device' },
    { icon: faGift, title: 'Gift Wrapping', description: 'Free elegant wrapping available' },
    { icon: faMapMarkerAlt, title: 'Delivery Areas', description: 'Throughout Musanze region' },
    { icon: faClock, title: 'Delivery Hours', description: '8:00 AM - 8:00 PM daily' }
  ]

  const deliveryAreas = [
    'Musanze City Center',
    'Kinigi',
    'Musanze markets',
    'Kizungu village ',
    'MIPC College',
    'Hotels & Lodges',
    'Wedding Venues'
  ]

  return (
    <section id="delivery" className="py-20 bg-gradient-to-b from-ivory-white to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-orange font-semibold tracking-widest">FLOWER DELIVERY</span>
          <h2 className="text-4xl md:text-5xl font-bold text-mahogany mt-3 mb-4">
            Our <span className="text-amber">Delivery Process</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange to-amber mx-auto mb-6"></div>
          <p className="text-lg text-charcoal/80 max-w-3xl mx-auto">
            Get your fresh flowers delivered quickly and conveniently throughout Musanze
          </p>
        </div>
        
        {/* Delivery Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-sand/20 group">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-orange/10 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="bg-gradient-to-br from-orange to-amber text-white rounded-full h-16 w-16 flex items-center justify-center mx-auto shadow-md">
                    <FontAwesomeIcon icon={step.icon} className="text-2xl" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-white border-2 border-orange text-orange font-bold rounded-full h-8 w-8 flex items-center justify-center shadow-sm">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-mahogany mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <div className="w-full mt-auto pt-4 border-t border-sand/30">
                  <FontAwesomeIcon icon={faClock} className="text-amber mr-1" />
                  <span className="text-sm text-gray-500">Time: {step.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Delivery Guide */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-mahogany/90 to-amber/80 z-0"></div>
          
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 z-0">
           <svg viewBox="0 0 500 500" className="w-full h-full" preserveAspectRatio="none">
  <path d="M0,250 Q125,100 250,250 T500,250" fill="none" stroke="white" strokeWidth="2"></path>
  <path d="M0,300 Q125,150 250,300 T500,300" fill="none" stroke="white" strokeWidth="2"></path>
  <path d="M0,200 Q125,50 250,200 T500,200" fill="none" stroke="white" strokeWidth="2"></path>
</svg>
          </div>
          
          <div className="relative z-10 p-10 md:p-16">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 md:pr-10 text-white">
                <h3 className="text-3xl font-bold mb-6">Complete Ordering Guide</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-white/20 rounded-full p-2 mr-4 flex-shrink-0">
                        <FontAwesomeIcon icon={feature.icon} className="text-lg" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">{feature.title}</h4>
                        <p className="text-white/90 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center mt-6">
                  <FontAwesomeIcon icon={faPhoneAlt} className="text-amber mr-3 text-xl" />
                  <div>
                    <p className="text-white/80 text-sm">Need assistance?</p>
                    <p className="font-bold text-lg">0788 759 351</p>
                  </div>
                </div>
              </div>
              
              {/* Delivery Illustration */}
              <div className="md:w-1/3 mt-10 md:mt-0">
                <div className="relative">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                   <svg viewBox="0 0 300 200" className="w-full h-auto">
  {/* Delivery Truck */}
  <rect x="50" y="120" width="180" height="50" rx="5" fill="#F28C1B" opacity="0.9"/>
  <rect x="180" y="100" width="50" height="20" fill="#F7B940"/>
  <circle cx="90" cy="170" r="20" fill="#6B3E22"/>
  <circle cx="190" cy="170" r="20" fill="#6B3E22"/>
  {/* Flowers in back */}
  <path d="M70,110 Q75,90 80,110 T90,110" stroke="#FAF6F0" strokeWidth="2" fill="none"/>
  <path d="M80,105 Q85,85 90,105 T100,105" stroke="#FAF6F0" strokeWidth="2" fill="none"/>
  <path d="M90,115 Q95,95 100,115 T110,115" stroke="#FAF6F0" strokeWidth="2" fill="none"/>
  {/* Road */}
  <path d="M0,190 Q150,200 300,190" stroke="#A76C3B" strokeWidth="10" fill="none"/>
  {/* Location Pin */}
  <circle cx="250" cy="70" r="10" fill="#F28C1B" stroke="#FFFFFF" strokeWidth="2"/>
  <path d="M250,80 L250,100 M240,90 L260,90" stroke="#FFFFFF" strokeWidth="2"/>
</svg>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-amber text-white px-4 py-2 rounded-full shadow-md text-sm font-medium">
                    On the way!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Delivery Areas */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-mahogany mb-6">We Deliver To</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {deliveryAreas.map((area, index) => (
              <span key={index} className="bg-amber/10 text-amber px-4 py-2 rounded-full text-sm font-medium">
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}