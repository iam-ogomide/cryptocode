import './App.css'
import Companies from './components/companies/Companies'
import Earnings from './components/earnings/Earnings'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Pricing from './components/pricing/Pricing'
import Status from './components/status/Status'
import Subscribe from './components/subscribe/Subscribe'

function App() {
  
  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      <Pricing />
      <Earnings />
      <Status />
      <Subscribe />
      <Footer />
    </>
  )
}

export default App
