import React from 'react'
import './HeaderLanguage.css'
import uzb from '../../../assets/icons/uzb.svg'
export default function HeaderLanguage() {
    return (
        <div className='headerLanguage'>
            <button className='headerLanguage__button relative flex flex-row justify-center items-center gap-[4px]'>
                <img src={uzb} alt={`${uzb}__icon`} />
                <p>O’zb</p>
                <i className="fa-solid fa-chevron-right"></i>
            </button>
        </div >
    )
}