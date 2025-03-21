import React from "react"
import './HomePage.css'
import HeroSection from "./HomeSections/HeroSection"
import CarouselSection from "./HomeSections/CarouselSection"
import CertificateSection from "./HomeSections/CertificateSection"
import CategorySection from "./HomeSections/CategorySection"
import FormSection from "./HomeSections/FormSection"
import PartnersSection from "./HomeSections/PartnersSection"
export default function HomePage() {
    return (
        <div className="Home-page">
            <HeroSection />
            <CarouselSection />
            <CertificateSection />
            <CategorySection />
            <FormSection />
            <PartnersSection />
        </div>
    )
}