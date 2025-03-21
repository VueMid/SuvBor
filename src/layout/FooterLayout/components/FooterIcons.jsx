import React from "react"
import './FooterIcons.css'
import dark__facebook from '../../../assets/icons/dark__facebook.svg'
import dark__gmail from '../../../assets/icons/dark__gmail.svg'
import dark__instagram from '../../../assets/icons/dark__instagram.svg'
import dark__telegram from '../../../assets/icons/dark__telegram.svg'
import dark__whatsapp from '../../../assets/icons/dark__whatsapp.svg'
export default function FooterIcons() {
    const icons = [
        {
            image: dark__whatsapp,
            link: 'https://www.youtube.com/@VueMid'
        },
        {
            image: dark__telegram,
            link: 'https://t.me/saidoffgrouppseo'
        },
        {
            image: dark__instagram,
            link: 'https://www.instagram.com/saidoffgroup/'
        },
        {
            image: dark__facebook,
            link: 'https://www.facebook.com/profile.php?id=61557297758694'
        },
        {
            image: dark__gmail,
            link: 'https://www.saidoffgroup@gmail.com'
        },
    ]
    return (
        <div className="footerIcons flex flex-row justify-center items-center gap-[32px] xl:mt-[20px]">
            {icons.map((item, index) => (
                <div className="footerIcons__icons-box flex flex-row justify-center items-center gap-[32px] xl:mt-[20px]" key={index}>
                    <a className="footerIcons__icons-link" href={item.link} target="_blank">
                        <img className="footerIcons__icons-images object-contain w-[30px] h-[30px] active:opacity-70 md:w-[40px] md:h-[40px] lg:w-[30px] lg:h-[30px]" src={item.image} alt="social__icons" />
                    </a>
                </div>
            ))}
        </div>
    )
}