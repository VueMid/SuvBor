import React from 'react'
import './HeaderLanguage.css'
import uzb from '../../../assets/icons/uzb.svg'
import chevron__right from '../../../assets/icons/chevron__right.svg'
export default function HeaderLanguage() {
    return (
        <div className='headerLanguage'>
            <button className='headerLanguage__button relative flex flex-row justify-center items-center gap-[4px]'>
                <img className='headerLanguage__icon-flag' src={uzb} alt={`${uzb}__icon`} />
                <p className='headerLanguage__flag-text text-[#7F868C] font-normal text-[14px]'>O’zb</p>
                <img className='headerLanguage__icon-chevron object-cover' src={chevron__right} alt="chevron__right" />
            </button>
        </div >
    )
}