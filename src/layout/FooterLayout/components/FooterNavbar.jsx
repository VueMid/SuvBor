import React from "react"
import './FooterNavbar.css'
export default function FooterNavbar() {
    const links = [
        {
            texts: 'Mahsulotlar',
            id: '#products'
        },
        {
            texts: 'Nega biz',
            id: '#whyUs'
        },
        {
            texts: 'Hududlar',
            id: '#addresses'
        },
        {
            texts: 'Hamkorlarimiz',
            id: '#partners'
        },
    ]
    return (
        <nav className="footerNavbar__nav">
            <ul className="footerNavbar__list flex flex-col justify-center items-center gap-[20px] md:gap-[40px] xl:flex xl:flex-row xl:justify-center xl:items-center xl:gap-[60px]">
                {links.map((link, index) => (
                    <li className="footerNavbar__lists" key={index}>
                        <a className="footerNavbar__links" href={link.id}>
                            <p className="footerNavbar__link-texts font-semibold text-[18px] text-white active:text-white/80 md:text-[24px] md:leading-[32px] xl:hover:text-white/75">{link.texts}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}