import React from 'react'
import './HeaderLogo.css'
import open__burger from '../../../assets/icons/open__burger.svg'
import logo from '../../../assets/icons/logo.svg'
export default function HeaderLogo({ func }) {
    return (
        <div className="headerLogo">
            <button className='headerLogo__open-burger-button align-middle' onClick={func}>
                <img className='headerLogo__open-burger-icon w-[26px] h-[26px] object-cover md:w-[36px] md:h-[36px]' src={open__burger} alt="open__burger-icon" />
            </button>
            <a className='headerLogo__logo-link md:align-middle md:active:opacity-50' href="#">
                <img className='headerLogo__logo-image md:object-contain w-[103px] h-[42px] xl:w-[145px] xl:h-[64px]' src={logo} alt="logo__image" />
            </a>
        </div>
    )
}