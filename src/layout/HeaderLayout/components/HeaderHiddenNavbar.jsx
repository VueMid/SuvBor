import React from "react"
import './HeaderHiddenNavbar.css'
import location from '../../../assets/icons/location.svg'
import instagram from '../../../assets/icons/instagram.svg'
import telegram from '../../../assets/icons/telegram.svg'
import facebook from '../../../assets/icons/facebook.svg'
import whatsapp from '../../../assets/icons/whatsapp.svg'
import close__burger from '../../../assets/icons/close__burger.svg'
export default function HeaderHiddenNavbar({ status, func }) {
    const icons = [
        {
            icon: location,
            description: 'location__icon'
        },
        {
            icon: instagram,
            description: 'instagram__icon'
        },
        {
            icon: telegram,
            description: 'telegram__icon'
        },
        {
            icon: facebook,
            description: 'facebook__icon'
        },
        {
            icon: whatsapp,
            description: 'whatsapp__icon'
        },
    ]
    const links = [
        {
            texts: 'Bosh sahifa',
            id: '/'
        },
        {
            texts: 'Mahsulotlar',
            id: '#products'
        },
        {
            texts: 'Nega biz',
            id: '#whyUs'
        },
        {
            texts: 'Manzillar',
            id: '#addresses'
        },
        {
            texts: 'Hamkorlarimiz',
            id: '#partners'
        },
    ]
    return (
        <div className={`headerHiddenNavbar z-[1111] fixed w-full h-[100vh] max-h-screen top-0 right-0 left-0 bg-[#1A367C] flex flex-col justify-start items-center px-[17px] py-[30px] duration-500 md:py-[28px] md:px-[33.5px] ${status ? "translate-x-0" : "translate-x-[-100%]"}`}>
            <div className="headerHiddenNavbar__top-box w-full flex flex-row justify-between items-center">
                <button className="headerHiddenNavbar__close-burger align-middle" onClick={func}>
                    <img className="headerHiddenNavbar__close-burger-image object-cover w-[20px] h-[20px] md:w-[30px] md:h-[30px]" src={close__burger} alt="open__burger-icon" />
                </button>
                <button className="headerHiddenNavbar__close-burger align-middle opacity-0">
                    <img className="headerHiddenNavbar__close-burger-image object-cover w-[20px] h-[20px] md:w-[30px] md:h-[30px]" src={close__burger} alt="open__burger-icon" />
                </button>
                <button className="headerHiddenNavbar__close-burger align-middle opacity-0">
                    <img className="headerHiddenNavbar__close-burger-image object-cover w-[20px] h-[20px] md:w-[30px] md:h-[30px]" src={close__burger} alt="open__burger-icon" />
                </button>
            </div>
            <nav className="headerHiddenNavbar__nav flex flex-col justify-center items-center my-auto">
                <ul className="headerHiddenNavbar__list flex flex-col justify-center items-center gap-[40px] md:gap-[60px]">
                    {links.map((link, index) => (
                        <li className="headerHiddenNavbar__lists" key={index}>
                            <a className="headerHiddenNavbar__links" href={link.id} onClick={func}>
                                <p className="headerHiddenNavbar__links-text font-bold text-white text-[18px] leading-[24px] active:opacity-40 duration-75 md:text-[24px] md:leading-[32px]">{link.texts}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="headerHiddenNavbar__bottom-box flex flex-col justify-center items-center gap-[30px] md:gap-[40px]">
                <div className="headerHiddenNavbar__icon-main-box flex flex-row justify-center items-center gap-4 md:gap-[36px]">
                    {icons.map((icon, id) => (
                        <div className="headerHiddenNavbar__icon-box w-full flex flex-row justify-center items-center" key={id}>
                            <img className="headerHiddenNavbar__icons w-[38px] h-[38px] md:w-[48px] md:h-[48px]" src={icon.icon} alt={icon.description} />
                        </div>
                    ))}
                </div>
                <a className="headerHiddenNavbar__tel-link font-bold text-white/60 text-[18px] leading-[24px] active:text-white" href="tel:+998901234567">+998 90 <span className="headerHiddenNavbar__span font-bold text-white text-[18px] leading-[24px]">123 45 67</span></a>
            </div>
        </div>
    )
}