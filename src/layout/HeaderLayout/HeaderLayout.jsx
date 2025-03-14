import React, { useEffect, useState } from "react"
import './HeaderLayout.css'
import HeaderLogo from './components/HeaderLogo'
import HeaderNavbar from './components/HeaderNavbar'
import HeaderLanguage from './components/HeaderLanguage'
import HeaderHiddenNavbar from "./components/HeaderHiddenNavbar"
export default function HeaderLayout() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleBurger = () => {
        setIsOpen(!isOpen)
    }
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [isOpen])
    return (
        <div>
            <header className="header">
                <div className="container header__container flex flex-row justify-between items-center px-[15px] py-5 md:px-[32px] md:py-[22px] lg:px-4 lg:py-[32px]">
                    <HeaderLogo func={toggleBurger} />
                    <HeaderNavbar />
                    <HeaderLanguage />
                </div>
                <HeaderHiddenNavbar status={isOpen} func={toggleBurger} />
            </header>
        </div>
    )
}