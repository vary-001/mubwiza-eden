import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling, faCalendarAlt, faTint, faSun, faArrowRight, faLeaf } from '@fortawesome/free-solid-svg-icons'

export default function FlowerInfo() {
  const flowers = [
    {
      name: 'Rwandan Rose',
      description: 'Vibrant roses thriving in Musanze\'s volcanic soils, known for their exceptional longevity and rich colors.',
      image: 'https://images.unsplash.com/photo-1597318181409-c9135e5a16f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      botanical: 'Rosa rwandensis',
      blooms: 'Year-round',
      water: 'Moderate',
      light: 'Full sun',
      tag: 'Native'
    },
    // Add other flowers similarly
  ]

  return (
    <section id="flower-info" className="py-20 bg-gradient-to-b from-white to-ivory-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-orange font-semibold tracking-widest">FLORAL EDUCATION</span>
          <h2 className="text-4xl md:text-5xl font-bold text-mahogany mt-3 mb-4">
            Discover Our <span className="text-amber">Flower Species</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange to-amber mx-auto mb-6"></div>
          <p className="text-lg text-charcoal/80 max-w-3xl mx-auto">
            Learn about the beautiful native flowers we cultivate and their unique botanical characteristics
          </p>
        </div>
        
        {/* Flower Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {flowers.map((flower, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-sand/20">
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={flower.image} 
                  alt={flower.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <span className="absolute top-4 right-4 bg-white/90 text-orange font-bold py-1 px-3 rounded-full text-xs shadow-md">
                  {flower.botanical}
                </span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-mahogany">{flower.name}</h3>
                  <span className="bg-amber/10 text-amber text-xs font-medium px-2 py-1 rounded-full">
                    {flower.tag}
                  </span>
                </div>
                <p className="text-gray-600 mb-5 text-sm">{flower.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-charcoal/80">
                    <div className="w-8 h-8 rounded-full bg-amber/10 flex items-center justify-center mr-3">
                      <FontAwesomeIcon icon={faCalendarAlt} className="text-amber text-sm" />
                    </div>
                    <span>Blooms: <span className="font-medium">{flower.blooms}</span></span>
                  </div>
                  <div className="flex items-center text-sm text-charcoal/80">
                    <div className="w-8 h-8 rounded-full bg-amber/10 flex items-center justify-center mr-3">
                      <FontAwesomeIcon icon={faTint} className="text-amber text-sm" />
                    </div>
                    <span>Water: <span className="font-medium">{flower.water}</span></span>
                  </div>
                  <div className="flex items-center text-sm text-charcoal/80">
                    <div className="w-8 h-8 rounded-full bg-amber/10 flex items-center justify-center mr-3">
                      <FontAwesomeIcon icon={faSun} className="text-amber text-sm" />
                    </div>
                    <span>Light: <span className="font-medium">{flower.light}</span></span>
                  </div>
                </div>
                
                <button className="w-full py-2.5 border border-orange text-orange hover:bg-orange hover:text-white rounded-lg transition-all duration-300 flex items-center justify-center">
                  <span>Learn More</span>
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-sm" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Conservation Section */}
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-mahogany/90 via-amber/70 to-yellow/60 z-0"></div>
          
          <div className="absolute top-0 left-0 w-full h-full opacity-10 z-0">
           <svg viewBox="0 0 1000 500" className="w-full h-full" preserveAspectRatio="none">
  <path 
    d="M0,250 Q250,100 500,250 T1000,250" 
    fill="none" 
    stroke="white" 
    strokeWidth="2" 
    strokeOpacity="0.2"
  ></path>
  <path 
    d="M0,300 Q250,150 500,300 T1000,300" 
    fill="none" 
    stroke="white" 
    strokeWidth="2" 
    strokeOpacity="0.2"
  ></path>
  <path 
    d="M0,200 Q250,50 500,200 T1000,200" 
    fill="none" 
    stroke="white" 
    strokeWidth="2" 
    strokeOpacity="0.2"
  ></path>
</svg>
          </div>
          
          <div className="relative z-10 p-10 md:p-16 text-white">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-start">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-8 md:mb-0 md:mr-10 flex-shrink-0">
                  <FontAwesomeIcon icon={faSeedling} className="text-4xl text-white" />
                </div>
                
                <div>
                  <span className="text-yellow font-semibold tracking-wider">CONSERVATION EFFORTS</span>
                  <h3 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Preserving Rwanda's Floral Heritage</h3>
                  
                  <div className="prose prose-invert max-w-none">
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
                      <h4 className="font-bold text-lg">Dr. Jean Claude Niyomugabo</h4>
                      <p className="text-white/80">Head of Conservation, MUbwiza Eden</p>
                    </div>
                  </div>
                  
                  <div className="mt-10">
                    <a href="#" className="inline-flex items-center px-6 py-3 bg-white text-mahogany font-medium rounded-full hover:bg-gray-100 transition duration-300">
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
  )
}