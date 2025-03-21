import React from "react"
import './FooterIcons.css'
import white__facebook from '../../../assets/icons/white__facebook.svg'
import white__gmail from '../../../assets/icons/white__gmail.svg'
import white__instagram from '../../../assets/icons/white__instagram.svg'
import white__telegram from '../../../assets/icons/white__telegram.svg'
import white__whatsapp from '../../../assets/icons/white__whatsapp.svg'
import white__youtube from '../../../assets/icons/white__youtube.svg'
export default function FooterIcons() {
    const icon = [
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
    return (
        <div className="footerIcons flex flex-row justify-center items-center gap-[32px] md:gap-[42px] xl:mt-[20px]">
            {icon.map((item, index) => (
                <div className="footerIcons__icons-box flex flex-row justify-center items-center gap-[32px] md:gap-[52px] xl:mt-[20px]" key={index}>
                    <a className="footerIcons__icons-link" href={item.links} target="_blank">
                        <img className="footerIcons__icons-images object-contain w-[48px] h-[48px] active:opacity-70 md:w-[38px] md:h-[38px] lg:w-[38px] lg:h-[38px]" src={item.icons} alt={item.descriptions} />
                    </a>
                </div>
            ))}
        </div>
    )
}