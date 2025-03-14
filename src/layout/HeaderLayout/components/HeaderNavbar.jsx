import React from 'react'
import './HeaderNavbar.css'
import mini__logo from '../../../assets/icons/mini__logo.svg'
export default function HeaderNavbar() {
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
            texts: 'Manzillar',
            id: '#addresses'
        },
        {
            texts: 'Hamkorlarimiz',
            id: '#partners'
        },
    ]
    return (
        <div className="headerNavbar">
            <a className='headerNavbar__logo-link align-middle active:opacity-50' href="#">
                <img className='headerNavbar__logo-image w-[103px] h-[42px] object-contain' src={mini__logo} alt="logo__image" />
            </a>
            <nav className='headerNavbar__nav'>
                <ul className='headerNavbar__list flex flex-row justify-center items-center gap-[55px]'>
                    {links.map((link, index) => (
                        <li className='headerNavbar__lists' key={index}>
                            <a className='headerNavbar__links' href={link.id}>
                                <p className='headerNavbar__links-text'>{link.texts}</p>
                            </a>
                        </li>
                    ))}
                    <a className="headerNavbar__tel-link text-[#7F868C]" href="tel:+998901234567">+998 90 <span className="headerNavbar__span text-[#485158]">123 45 67</span></a>
                </ul>
            </nav>
        </div>
    )
}