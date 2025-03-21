import React from "react"
import './FooterIcons.css'
import blue__facebook from '../../../assets/icons/blue__facebook.svg'
import blue__gmail from '../../../assets/icons/blue__gmail.svg'
import blue__instagram from '../../../assets/icons/blue__instagram.svg'
import blue__telegram from '../../../assets/icons/blue__telegram.svg'
import blue__whatsapp from '../../../assets/icons/blue__whatsapp.svg'
import blue__youtube from '../../../assets/icons/blue__youtube.svg'
export default function FooterIcons() {
    const icon = [
        {
            icons: blue__facebook,
            links: 'https://www.facebook.com/profile.php?id=123456789',
            descriptions: 'facebook__icon',
        },
        {
            icons: blue__gmail,
            links: 'https://turabovumid587@gmail.com',
            descriptions: 'gmail__icon',
        },
        {
            icons: blue__instagram,
            links: 'https://www.instagram.com/umid_dev',
            descriptions: 'instagram__icon',
        },
        {
            icons: blue__telegram,
            links: 'https://t.me/vuemid',
            descriptions: 'telegram__icon',
        },
        {
            icons: blue__whatsapp,
            links: 'hhttps://wa.me/998901234567',
            descriptions: 'whatsapp__icon',
        },
        {
            icons: blue__youtube,
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