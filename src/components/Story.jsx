import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Img from '../assets/media/hero5.jpeg';

export default function Story() {
  return (
    <section id="story" className="py-20 bg-gradient-to-b from-ivory-white to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-orange font-semibold tracking-widest">OUR JOURNEY</span>
          <h2 className="text-4xl md:text-5xl font-bold text-mahogany mt-3 mb-4">
            The <span className="text-amber">MUbwiza Eden</span> Story
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange to-amber mx-auto mb-6"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Column */}
          <div className="lg:w-1/2 relative group">
            <div className="relative overflow-hidden rounded-2xl shadow-xl h-96 w-full">
              <img src={Img} alt="MUbwiza Eden Founder" 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 bg-orange text-white py-2 px-6 rounded-lg shadow-lg">
                <span className="font-bold tracking-wider">SINCE 2010</span>
              </div>
            </div>
            <div className="absolute -right-4 -top-4 hidden lg:block">
              <div className="bg-white p-4 rounded-full shadow-lg rotate-12">
                <svg className="w-10 h-10 text-amber" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <path 
    fillRule="evenodd" 
    d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" 
    clipRule="evenodd"
  ></path>
</svg>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:w-1/2">
            <div className="prose max-w-none">
              <h3 className="text-2xl font-bold text-mahogany mb-6">From Humble Beginnings to Floral Excellence</h3>
              
              <div className="space-y-6 text-charcoal/90">
                <p className="flex items-start">
                  <span className="bg-amber/10 text-amber rounded-full h-8 w-8 flex items-center justify-center mr-4 flex-shrink-0">1</span>
                  <span>MUbwiza Eden began in 2010 as a small flower stall in Musanze market, founded by floral artist <span className="font-semibold text-mahogany">Marie Claire Uwase</span>. The name "MUbwiza" (meaning "beauty" in Kinyarwanda) reflects our mission to bring natural beauty to everyday life.</span>
                </p>
                
                <p className="flex items-start">
                  <span className="bg-amber/10 text-amber rounded-full h-8 w-8 flex items-center justify-center mr-4 flex-shrink-0">2</span>
                  <span>What started as a passion project has grown into <span className="font-semibold text-mahogany">Ruhengeri's premier floral destination</span>, serving tourists, hotels, and local residents with handcrafted arrangements using flowers grown in our own gardens.</span>
                </p>
                
                <p className="flex items-start">
                  <span className="bg-amber/10 text-amber rounded-full h-8 w-8 flex items-center justify-center mr-4 flex-shrink-0">3</span>
                  <span>Today, our team of <span className="font-semibold text-mahogany">15 floral artists</span> continues Marie Claire's vision, combining traditional Rwandan floral techniques with modern design to create unique arrangements that celebrate Rwanda's natural beauty.</span>
                </p>
              </div>

              {/* Milestones */}
              <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-sand/20 text-center">
                  <div className="text-3xl font-bold text-orange mb-1">2010</div>
                  <div className="text-sm text-charcoal/80">Founded in Musanze Market</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-sand/20 text-center">
                  <div className="text-3xl font-bold text-orange mb-1">15+</div>
                  <div className="text-sm text-charcoal/80">Floral Artists</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-sand/20 text-center">
                  <div className="text-3xl font-bold text-orange mb-1">30+</div>
                  <div className="text-sm text-charcoal/80">Native Species Preserved</div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10">
                <a href="#contact" className="inline-flex items-center px-6 py-3 bg-orange text-white font-medium rounded-full hover:bg-amber transition duration-300 shadow-md hover:shadow-lg">
                  <span>Visit Our Flower Shop</span>
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}