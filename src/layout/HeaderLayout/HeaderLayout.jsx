import React, { useEffect, useState } from "react"
import './HeaderLayout.css'
import HeaderLogo from './components/HeaderLogo'
import HeaderNavbar from './components/HeaderNavbar'
import HeaderLanguage from './components/HeaderLanguage'
import HeaderHiddenNavbar from "./components/HeaderHiddenNavbar"
export default function HeaderLayout() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScroll, setIsScroll] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        }
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])
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
            <header className={`header fixed top-0 w-full duration-300 ${isScroll ? "bg-inherit backdrop-blur-lg shadow-md" : "bg-white"}`}>
                <div className="container header__container flex flex-row justify-between items-center px-[15px] py-5 md:px-[32px] md:py-[22px] lg:px-4 lg:py-[39px]">
                    <HeaderLogo func={toggleBurger} />
                    <HeaderNavbar />
                    <HeaderLanguage />
                </div>
                <HeaderHiddenNavbar status={isOpen} func={toggleBurger} />
            </header>
        </div>
    )
}