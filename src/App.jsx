import React from 'react'
import NavBar from './components/NavBar/NavBar'
import DashBoard from './components/DashBoard/DashBoard'
import './App.css'
import Profile from './components/Profile/Profile'
import { Routes, Route } from "react-router-dom"
import CardsCarrousel from './components/CreditCards/CardsCarrousel'
import LandingPage from './components/LandingPage/LandingPage'

export const u = 12

function Home() {
  return (
    <>
      <DashBoard />
      <Profile />
    </>
  )
}

function App() {
  return (
    <div className="father-app">
      {/* <NavBar /> */}
      <Routes>
        <Route key={0} path="/" element={<Home />} />
        <Route key={1} path="/Home" element={<Home />} />
        <Route key={3} path="/ReCredit" element={<CardsCarrousel />} />
        <Route key={4} path="/LPage" element={<LandingPage />} />
      </Routes>
    </div>
  )
}

export default App
