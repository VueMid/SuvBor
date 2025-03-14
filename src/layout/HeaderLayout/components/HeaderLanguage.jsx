import React from 'react'
import './HeaderLanguage.css'
import uzb from '../../../assets/icons/uzb.svg'
import chevron__right from '../../../assets/icons/chevron__right.svg'
export default function HeaderLanguage() {
    const languages = [
        {
            code: 'uz',
            name: 'O’zbekcha',
            flag: uzb,
        },]
    return (
        <div className="headerLanguage">
            {languages.map((icon, index) => (
                <button className='headerLanguage__button flex flex-row justify-center items-center gap-[4px] text-[#7F868C]' key={index}>
                    <img className='headerLanguage__button-flag-icon w-[20px] h-[16px]' src={icon.flag} alt={`${icon.flag}__icon`} />
                    <p className='headerLanguage__button-flag-text font-normal text-[14px] leading-[100%] text-[#7F868C] md:text-[18px] md:leading-[24px]'>{icon.name.slice(0, 4)}</p>
                    <img className='headerLanguage__button-chevron-icon' src={chevron__right} alt='chevron__icon' />
                </button>
            ))}
        </div>
    )
}