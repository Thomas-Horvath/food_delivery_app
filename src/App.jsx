import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'


const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path="/food_delivery_app/" element={<Home />} />
        <Route path="/food_delivery_app/cart" element={<Cart />} />
        <Route path="/food_delivery_app/order" element={<PlaceOrder />} />
      </Routes>
    
    </div>
  )
}

export default App