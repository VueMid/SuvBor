import React from "react"
import './HeaderHiddenNavbar.css'
import white__facebook from '../../../assets/icons/white__facebook.svg'
import white__gmail from '../../../assets/icons/white__gmail.svg'
import white__instagram from '../../../assets/icons/white__instagram.svg'
import white__telegram from '../../../assets/icons/white__telegram.svg'
import white__whatsapp from '../../../assets/icons/white__whatsapp.svg'
import white__youtube from '../../../assets/icons/white__youtube.svg'
import close__burger from '../../../assets/icons/close__burger.svg'
export default function HeaderHiddenNavbar({ status, func }) {
    const icons = [
        {
            icons: white__facebook,
            links: 'https://www.facebook.com/profile.php?id=123456789',
            descriptions: 'facebook__icon',
        },
        {
            icons: white__gmail,
            links: 'https://turabovumid587@gmail.com',
            descriptions: 'gmail__icon',
        },
        {
            icons: white__instagram,
            links: 'https://www.instagram.com/umid_dev',
            descriptions: 'instagram__icon',
        },
        {
            icons: white__telegram,
            links: 'https://t.me/vuemid',
            descriptions: 'telegram__icon',
        },
        {
            icons: white__whatsapp,
            links: 'hhttps://wa.me/998901234567',
            descriptions: 'whatsapp__icon',
        },
        {
            icons: white__youtube,
            links: 'https://www.youtube.com/@VueMid',
            descriptions: 'youtube__icon',
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
            <div className="headerHiddenNavbar__bottom-box flex flex-col justify-center items-center gap-[42px] md:gap-[62px]">
                <div className="headerHiddenNavbar__icon-main-box flex flex-row justify-center items-center gap-[22px] md:gap-[42px]">
                    {icons.map((icon, id) => (
                        <div className="headerHiddenNavbar__icon-box w-full flex flex-row justify-center items-center" key={id}>
                            <img className="headerHiddenNavbar__icons w-[30px] h-[30px] md:w-[50px] md:h-[50px]" src={icon.icons} alt={icon.descriptions} />
                        </div>
                    ))}
                </div>
                <a className="headerHiddenNavbar__tel-link font-bold text-white/60 text-[18px] leading-[24px] active:text-white md:text-[32px] md:leading-[38px]" href="tel:+998901234567">+998 90 <span className="headerHiddenNavbar__span font-bold text-white text-[18px] leading-[24px] md:text-[32px] md:leading-[38px]">123 45 67</span></a>
            </div>
        </div>
    )
}