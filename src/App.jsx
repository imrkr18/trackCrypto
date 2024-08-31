import Navbar from './components/Navbar/Navbar.jsx'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Coin from './pages/Coin/Coin.jsx'
import Footer from './components/Footer/Footer.jsx'
import About from './pages/About/About.jsx'
import Pricing from './pages/Pricing/Pricing.jsx'
import News from './pages/News/News.jsx'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/coin/:coinId' element={<Coin/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/pricing' element={<Pricing/>} />
        <Route path='/news' element={<News/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App