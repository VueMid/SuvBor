import React from "react"
import './FooterLogo.css'
import white__logo from '../../../assets/icons/white__logo.svg'
export default function FooterLogo() {
    return (
        <div className="footerLogo flex flex-col justify-center items-start gap-5">
            <a className='footerLogo__logo-link md:align-middle md:active:opacity-50' href="#">
                <img className='footerLogo__logo-image object-contain w-[145px] h-[64px]' src={white__logo} alt="logo__image" />
            </a>
        </div>
    )
}