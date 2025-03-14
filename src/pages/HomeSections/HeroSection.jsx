import React from "react"
import './HeroSection.css'
import cooler from '../../assets/icons/cooler.svg'
export default function HeroSection() {
    const data = [
        {
            number: '240+',
            description: 'Kunlik buyurtmalar'
        },
        {
            number: '1 200+',
            description: 'Haftalik buyurtmalar'
        },
        {
            number: '30 000+',
            description: 'Oylik buyurtmalar'
        },
        {
            number: '300 000+',
            description: 'Yillik buyurtmalar'
        },
    ]
    return (
        <div>
            <section className="hero mt-[42px] md:mt-[58px]">
                <div className="container hero__container px-[15px] md:px-[32px] lg:flex lg:flex-row lg:justify-between lg:items-start">
                    <div className="hero__left-box flex flex-col justify-center items-start">
                        <h2 className="hero__title text-[24px] font-bold text-[#1A367C] mb-3 md:text-[36px]">Suv bor bu - <span className="hero__title-span text-[20px] font-semibold md:text-[32px]">Oson buyurtma</span></h2>
                        <p className="hero__text font-normal text-[16px] leading-[22px] text-[#262D32] mb-6 w-full md:text-[24px] md:leading-[40px] md:w-[485px] md:mb-[36px] xl:text-[32px] xl:leading-[40px] xl:w-[716px]">Siz suv ishlab chiqaruvchimisiz? Unda biz sizga qulay taklif bera olamiz. Ilovamiz orqali buyurtmalarni qabul qilib oling va buyurtmachilar belgilagan vaqtda yetkazib bering.</p>
                        <img className="hero__left-image mb-6 md:mb-[36px] object-contain w-full h-[306px] lg:hidden lg:mb-0" src={cooler} alt="cooler" />
                        <div className="hero__left-mini-box w-full border-[1px] border-[#C0CBE9] rounded-[24px] px-4 py-4 ms-0 mb-4 md:flex md:flex-row md:justify-between md:items-center md:gap-x-[80px] md:mb-[36px]">
                            <div className="flex flex-col justify-center items-start gap-y-2 md:gap-y-3">
                                <h2 className="hero__mini-title font-semibold text-[20px] leading-[100%] text-[#262D32] md:text-[24px]">Bizning statistika</h2>
                                <p className="hero__mini-text font-normal text-[16px] leading-[100%] text-[#7F868C] w-full mb-6 md:w-[187px]">Biz sizga biznesingizdagi sotuvlar oshishiga ko’maklashamiz.</p>
                            </div>
                            <div className="hero__statistics-box w-full flex flex-row flex-wrap justify-center items-center md:flex md:flex-row md:flex-wrap md:justify-center md:items-center gap-6 md:gap-y-[22px] md:gap-x-[0px] xl:gap-y-0">
                                {data.map((item, index) => (
                                    <div className="hero__mini-statistics-box flex flex-col justify-center items-center gap-y-3 xl:gap-y-1" key={index}>
                                        <p className="hero__statistics-number font-bold text-[24px] leading-[21px] text-[#6686D4]">{item.number}</p>
                                        <p className="hero__statistics-text font-normal text-[14px] leading-[21px] text-[#7F868C]">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <a className="hero__link flex flex-row justify-center items-center ont-normal text-[16px] text-white active:opacity-40 duration-150 rounded-[66px] lg:text-[18px]" href="">
                            Saytga o'tish
                            <i className="fa-solid fa-arrow-right fa-beat-fade ms-4"></i>
                        </a>
                    </div>
                    <img className="hero__right-image hidden object-cover lg:block w-[351px] h-[306px] xl:object-contain xl:w-[609px] xl:h-[565px]" src={cooler} alt="cooler" />
                </div>
            </section>
        </div>
    )
}