import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Register from './Pages/Register'
import ThankYou from './components/ThankYou'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './Pages/About'
import GiveBack from './Pages/GiveBack'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>

      <Navbar/>

      <Routes>

<Route path='/' element={<Home/>} />
<Route path='register' element={<Register/>} />
<Route path='/about' element={<About/>} />
<Route path='/give-back' element={<GiveBack/>} />

      </Routes>

      <Footer/>

    </div>
  )
}

export default App