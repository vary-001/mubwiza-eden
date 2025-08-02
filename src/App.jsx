import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import FlowerInfo from './components/FlowerInfo'
import Delivery from './components/Delivery'
import Story from './components/Story'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="font-poppins bg-ivory-white text-charcoal">
      <Navbar />
      <Hero />
      <Products />
      <FlowerInfo />
      <Delivery />
      <Story />
      <Contact />
      <Footer />
    </div>
  )
}

export default App