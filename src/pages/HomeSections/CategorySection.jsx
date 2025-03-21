import React from 'react'
import './CategorySection.css'
import first__character from '../../assets/icons/first__character.svg'
import second__character from '../../assets/icons/second__character.svg'
import third__character from '../../assets/icons/third__character.svg'
export default function CategorySection() {
    const data = [
        {
            image: first__character,
            title: 'Onlayn buyurtma',
            text: 'Iste’molchi onlayn buyurtma qilish orqali buyurtma qilingan mahsulotni aniq kun, soat hamda joylashuvni belgilashi mumkin bo’ladi',
            backgroundColor: '#194BC9'
        },
        {
            image: second__character,
            title: 'Tezkor yetkazma',
            text: 'Biz sizning mahsulotingizni iste’molchi belgilagan vaqtdan boshlab 24-48 soat ichida yetkazib beramiz',
            backgroundColor: '#227FCB'
        },
        {
            image: third__character,
            title: 'Hamyonbop narx',
            text: 'Suv arzonligi, sifatiga ta’sir qilmagan holda iste’molchilarga yetkaziladi.',
            backgroundColor: '#1B3168'
        },
    ]
    return (
        <div>
            <section className="category mt-[50px]">
                <div className="container category__container flex flex-col justify-center items-center gap-[104px] px-4 md:px-[32px] md:gap-[124px] lg:gap-[148px] lg:px-4 xl:gap-[168px]">
                    <div className="category__top-box flex flex-col justify-center items-start gap-3 md:gap-[16px]">
                        <h4 className='category__top-title text-[#262D32] font-semibold text-[20px] leading-[100%] md:text-[24px] lg:text-[32px]'>Nima uchun aynan Suv Bor?</h4>
                        <p className='category__top-text text-[#262D32] font-normal text-[14px] leading-[18px] md:text-[16px] md:leading-[20px] lg:text-[24px] lg:leading-[30px]'>
                            Biz sizning mahsulotingiz yetkazib berish orqali mijozlar fikrlarini inobatga olgan holda, ulardan izohlar qabul qilib keyingi buyurtma va yetkazib berish xizmatalrini yaxshilab boramiz.
                        </p>
                    </div>
                    <div className="category__bottom-box w-full flex flex-col justify-center items-center gap-[74px] md:flex md:flex-row md:justify-center md:text-center md:gap-3 xl:flex-row xl:justify-between xl:items-center xl:gap-0">
                        {data.map((item, index) => (
                            <div
                                className="category__bottom-boxes w-full rounded-tl-[200px] rounded-tr-[200px] flex flex-col justify-center items-center h-[292px] pt-[125px] pb-[40px] px-4 relative xl:w-[408px] xl:h-[400px] xl:px-[52px] xl:pb-[74px] xl:pt-[181px]"
                                style={{ backgroundColor: item.backgroundColor }}
                                key={index}>
                                <img className='category__bottom-boxes-image object-cover w-[150px] top-[-60px] absolute md:top-[-70px] xl:top-[-90px] xl:w-[208px]' src={item.image} alt="person" />
                                <h3 className='category__bottom-boxes-title text-center text-white font-semibold text-[24px] leading-[100%] mb-[12px]'>{item.title}</h3>
                                <p className='category__bottom-boxes-text w-full text-center text-white font-normal text-[16px] leading-[20px] xl:text-[18px] xl:leading-[24px]'>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}