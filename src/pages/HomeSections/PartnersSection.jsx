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
            <section className="partners overflow-x-hidden bg-white mt-[50px] pb-6 pt-[34px] flex flex-col justify-center items-start gap-[24px] md:pb-8 md:pt-[42px] md:gap-[48px] lg:pt-[57px] lg:pb-[47px] lg:mt-[84px]">
                <div className="partners__top-box flex flex-col justify-center items-start gap-2 px-4 md:gap-[16px] md:px-[32px] lg:px-4 lg:gap-[24px]">
                    <h4 className="partners__title font-semibold text-[20px] leading-[100%] text-[#262D32] md:text-[24px] lg:text-[32px] lg:leading-[38px]">Bizning <span className="text-[#1A367C]">hamkorlar</span> </h4>
                </div>
                <hr className="partners__hr w-full h-[2px] bg-[#1A367C] outline-none border-none" />
                <div className="partners__marquee-box flex flex-row justify-center items-center">
                    <Marquee
                        delay={0}
                        direction="left"
                        speed={50}
                        loop={0}
                        autoFill
                        pauseOnHover
                        left
                    >
                        {image.map((item, index) => (
                            <a className="partners__marquee-link" href={item.links} target="_blank" key={index}>
                                <img
                                    className="partners__marquee-image object-contain w-[100px] h-[100px] cursor-pointer mx-[30px] duration-300 md:w-[200px] md:h-[200px] md:mx-[70px]"
                                    src={item.images}
                                    alt="partners__images"
                                    style={{
                                        filter: "grayscale(100%)",
                                        transition: "filter 0.3s ease-in-out",
                                    }}
                                    onMouseEnter={(e) =>
                                        (e.target.style.filter = "grayscale(0%)")
                                    }
                                    onMouseLeave={(e) =>
                                        (e.target.style.filter = "grayscale(1000%")
                                    }
                                />
                            </a>
                        ))}
                    </Marquee>
                </div>
                <hr className="partners__hr w-full h-[2px] bg-[#1A367C] outline-none border-none" />
            </section>
        </div>
    )
}