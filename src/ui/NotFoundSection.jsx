import React, { useEffect, useState } from "react"
import './NotFoundSection.css'
import bottle from '../assets/icons/bottle.svg'
import drop__water from '../assets/icons/drop__water.svg'
import { Link } from "react-router-dom"
export default function NotFoundSection() {
    const [mouseX, setMouseX] = useState(0)
    const [mouseY, setMouseY] = useState(0)
    const [_isMobile, setIsMobile] = useState(window.innerWidth <= 1024)
    const handleMouseMovement = (event) => {
        setMouseX(event.clientX);
        setMouseY(event.clientY);
    }
    const checkScreenSize = () => {
        setIsMobile(window.innerWidth <= 1024)
    }
    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMovement)
        window.addEventListener('resize', checkScreenSize)
        return () => {
            window.removeEventListener('mousemove', handleMouseMovement)
            window.removeEventListener('resize', checkScreenSize)
        }
    }, [])
    return (
        <div>
            <section className="notFound relative w-full h-[100vh] overflow-hidden">
                <div className="container notFound__container min-h-screen flex flex-col justify-center items-center gap-[60px] md:gap-[70px] lg:gap-[140px] xl:gap-[60px]">
                    <div className="notFound__top-box flex flex-row justify-center items-center gap-x-[15px] md:gap-[25px]">
                        <img
                            style={{
                                transform: `translateX(${(mouseX - window.innerWidth / -2) * -0.02
                                    }px) translateY(${(mouseY - window.innerHeight / -2) * -0.02
                                    }px)`,
                                transition: "transform 0.1s linear",
                            }}
                            className="notFound__bottle-image absolute object-contain w-[150px] h-[150px] blur-[1.1px] right-2 top-2 md:w-[200px] md:h-[200px] md:right-5 md:top-5 rotate-30" src={bottle} alt="bottle__image" />
                        <p className="notFound__number-text font-extrabold text-[120px] leading-[90px] md:text-[200px] md:leading-[150px] lg:text-[300px] lg:leading-[240px]">4</p>
                        <img
                            style={{
                                transform: `translateX(${(mouseX - window.innerWidth / 2) * 0.01
                                    }px) translateY(${(mouseY - window.innerHeight / 2) * 0.01}px)`,
                                transition: "transform 0.1s linear",
                            }} className="notFound__middle-image object-contain w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[250px] lg:h-[250px]" src={drop__water} alt="favicon__icon " />
                        <p className="notFound__number-text font-extrabold text-[120px] leading-[90px] md:text-[200px] md:leading-[150px] lg:text-[300px] lg:leading-[240px]">4</p>
                        <img
                            style={{
                                transform: `translateX(${(mouseX - window.innerWidth / -2) * -0.02
                                    }px) translateY(${(mouseY - window.innerHeight / -2) * -0.02}px)`,
                                transition: "transform 0.1s linear",
                            }}
                            className="notFound__bottle-image absolute object-contain w-[120px] h-[120px] blur-[1.1px] left-2 bottom-2 md:w-[140px] md:h-[140px] md:left-5 md:bottom-5 rotate-[-30deg]" src={bottle} alt="bottle__image" />
                    </div>
                    <div className="notFound__bottom-box flex flex-col justify-center items-center gap-[20px]">
                        <p className="notFound__bottom-text text-[24px] leading-[32px] text-white lg:text-[32px] lg:leading-[38px]">Sahifani topa olmadingizmi?!</p>
                        <Link to='/'>
                            <button className="notFound__bottom-button text-white border-[1px] border-white flex flex-row justify-center items-center font-normal outline-3 outline-white/80 text-[16px] active:opacity-40 duration-150 rounded-[66px] lg:text-[18px]">Asosiyga qaytish <i className="notFound__bottom-icon fa-solid fa-house fa-beat-fade fa-xs ms-4"></i></button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}