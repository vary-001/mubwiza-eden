import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCartPlus, faCarrot,faLeaf, faSeedling,faImages,faPalette, faSearch,faSpa, faMicrophone } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [cartCount, setCartCount] = useState(0)

  const categories = [
    { id: 'all', name: 'All products', icon: faStar },
    { id: 'flowers', name: 'Flowers', icon: faSpa },
    { id: 'arts-crafts', name: 'Arts & crafts', icon: faPalette },
    { id: 'crop-seedling', name: 'Crop seedling', icon: faSeedling },
    { id: 'flower-seedling', name: 'Flower seedling', icon: faLeaf },
    { id: 'vegetables', name: 'Vegetables', icon: faCarrot }
  ]

  const products = [
    {
      id: 1,
      name: 'Premium Rose Bouquet',
      price: '25,000',
      description: 'A dozen fresh red roses hand-tied with seasonal foliage, perfect for romantic occasions.',
      category: 'flowers',
      image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80',
      rating: 4.5
    },
    // Add other products similarly
  ]

  const addToCart = () => {
    setCartCount(prev => prev + 1)
  }

  return (
    <section id="products" className="py-16 bg-gradient-to-b from-ivory-white to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-mahogany mb-4">Our Floral Collection</h2>
          <p className="text-lg text-charcoal max-w-2xl mx-auto">Beautifully arranged flowers for every occasion, handpicked with care in Musanze</p>
        </div>
        
        {/* Filters and Search */}
        <div className="flex flex-col items-center mb-8">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-6 w-full">
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-5 py-2 rounded-full font-medium shadow-md transition-all flex items-center ${
                  activeCategory === category.id
                    ? 'bg-orange text-white'
                    : 'bg-white text-charcoal border border-sand hover:bg-amber/10 hover:border-amber/30'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <FontAwesomeIcon icon={category.icon} className="mr-2" />
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Search Box */}
          <div className="relative w-full max-w-md">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search flowers..."
                className="w-full pl-12 pr-4 py-3 rounded-full border border-sand focus:outline-none focus:ring-2 focus:ring-orange/50 shadow-sm"
              />
              <FontAwesomeIcon icon={faSearch} className="absolute left-4 text-gray-400" />
              <button className="absolute right-3 text-gray-400 hover:text-orange transition">
                <FontAwesomeIcon icon={faMicrophone} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products
            .filter(product => activeCategory === 'all' || product.category === activeCategory)
            .map(product => (
              <div 
                key={product.id}
                className="product-card group bg-gradient-to-b from-white to-amber/5 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-sand/20"
              >
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-orange/95 text-white font-bold py-1.5 px-4 rounded-full text-sm shadow-md">
                    {product.price} RWF
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-mahogany">{product.name}</h3>
                    <div className="flex text-amber">
                      {[...Array(5)].map((_, i) => (
                        <FontAwesomeIcon 
                          key={i}
                          icon={faStar} 
                          className={i < Math.floor(product.rating) ? 'fas' : i < product.rating ? 'fas fa-star-half-alt' : 'far fa-star'}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-5 text-sm">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <button 
                      onClick={addToCart}
                      className="add-to-cart bg-gradient-to-r from-orange to-amber text-white font-medium py-2.5 px-5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-orange/30 flex items-center"
                    >
                      <FontAwesomeIcon icon={faCartPlus} className="mr-2" />
                      Add to Cart
                    </button>
                    <button className="text-orange hover:text-amber font-medium flex items-center text-sm">
                      <FontAwesomeIcon icon={faImages} className="mr-1.5" />
                      Gallery
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-block border-2 border-orange text-orange hover:bg-orange hover:text-white font-medium py-3 px-8 rounded-full transition duration-300"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  )
}