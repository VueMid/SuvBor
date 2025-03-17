import React from "react"
import './HomePage.css'
import HeroSection from "./HomeSections/HeroSection"
import CarouselSection from "./HomeSections/CarouselSection"
export default function HomePage() {
    return (
        <div className="Home-page">
            <HeroSection />
            <CarouselSection />
        </div>
    )
}