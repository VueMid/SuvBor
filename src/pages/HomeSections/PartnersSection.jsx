import React from "react"
import './PartnersSection.css'
import Marquee from "react-fast-marquee";
import cocacola from '../../assets/images/cocacola.png'
import fanta from '../../assets/images/fanta.png'
import hydrolife from '../../assets/images/hydrolife.png'
import montella__daily from '../../assets/images/montella__daily.png'
import pepsi from '../../assets/images/pepsi.png'
export default function PartnersSection() {
    const image = [
        {
            images: cocacola,
            links: 'https://www.coca-colacompany.com/'
        },
        {
            images: fanta,
            links: 'https://www.coca-cola.com/us/en/brands/fanta'
        },
        {
            images: hydrolife,
            links: 'https://hydrolife.uz/'
        },
        {
            images: montella__daily,
            links: 'https://dostavka-vody.uz/'
        },
        {
            images: pepsi,
            links: 'https://www.pepsi.com/landing'
        },
    ]
    return (
        <div>
            <section className="partners bg-[#1A367C] mt-[50px] pb-6 pt-[34px] flex flex-col justify-center items-center gap-[24px] md:pb-8 md:pt-[42px] md:gap-[48px] lg:pt-[57px] lg:pb-[47px] lg:mt-[84px]">
                <div className="partners__top-box flex flex-col justify-center items-start gap-2 px-4 md:gap-[16px] md:px-[32px] lg:px-4 lg:gap-[24px]">
                    <h4 className="partners__title font-semibold text-[20px] leading-[100%] text-white md:text-[24px] lg:text-[32px] lg:leading-[38px]">Bizning hamkorlar</h4>
                    <p className="partners__text w-full font-normal text-[14px] leading-[20px] text-white md:text-[16px] md:leading-[24px] lg:text-[24px] lg:leading-[32px]">
                        Siz ko’rib turgan hamkorlar biz bilan bir necha yillar davomida hamkorlik qilib kelgan holda bizni qo’llab kelishadi va boshqa kompaniyalarga ham taklif qilishadi.
                    </p>
                </div>
                <div className="partners__marquee-box flex flex-row justify-center items-center">
                    <Marquee>
                        {image.map((item, index) => (
                            <a className="partners__marquee-link" href={item.links} target="_blank" key={index}>
                                <img className="partners__marquee-image object-contain w-[100px] h-[100px] cursor-pointer mx-[30px] duration-300 md:w-[200px] md:h-[200px]" src={item.images} alt="partners__images" />
                            </a>
                        ))}
                    </Marquee>
                </div>
            </section>
        </div>
    )
}