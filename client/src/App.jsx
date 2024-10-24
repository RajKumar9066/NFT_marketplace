
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import AvatarCards from './pages/BestSellers/AvatarCards'
import AvatarSlider from './pages/BestSellers/AvatarSlider'
import BestSellers from './pages/BestSellers/BestSellers'
import Products from './pages/Products/Products'

function App() {
 

  return (
    <>
    <Navbar/>
    <Hero/>
    <BestSellers/>
    <Products/>
    </>
  )
}

export default App
