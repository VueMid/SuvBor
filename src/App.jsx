import './App.css'
import React, { useEffect, useState } from "react"
import HeaderLayout from './layout/HeaderLayout/HeaderLayout'
import HomePage from './pages/HomePage'
import FooterLayout from './layout/FooterLayout/FooterLayout'
import favicon from '../public/favicon.svg'
export default function App() {
  const [loading, setLoading] = useState(true)
  const [showScroll, setShowScroll] = useState(false)
  const moveTop = () => {
    window.scrollTo(0, 0)
  }
  useEffect(() => {
    setTimeout(() => setLoading(false), 1450)
  }, [])
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 336)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);
  return (
    <main className='overflow-x-hidden'>
      <HeaderLayout />
      <HomePage />
      <FooterLayout />
      <button className={`scrollUp__button ${showScroll ? 'scrollUp__show-button' : ''}`} onClick={moveTop}>
        <i className="scrollUp__button-icon fa-solid fa-arrow-up fa-beat-fade fa-sm"></i>
      </button>
      <div className={`preloader__box w-full h-[100vh] fixed top-0 left-0 right-0 flex justify-center items-center mx-auto z-[2222] duration-500 bg-[#1A367C] ${loading ? "opacity-100 visible" : "opacity-0 collapse"}`}>
        <img className='preloader__image animate-ping w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px]' src={favicon} alt="loading..." />
      </div>
    </main>
  )
}