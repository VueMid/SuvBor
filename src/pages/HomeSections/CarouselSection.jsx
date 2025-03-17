import "swiper/css";
import React from "react"
import "swiper/css/autoplay";
import "swiper/css/navigation";
import './CarouselSection.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import nol__besh__litr from '../../assets/images/nol__besh-litr.png'
import nol__yetmishbesh__litr from '../../assets/images/nol__yetmishbesh-litr.png'
import bir__litr from '../../assets/images/bir__litr.png'
import yigirma__litr from '../../assets/images/yigirma__litr.png'
export default function CarouselSection() {
    const data = [
        {
            image: nol__besh__litr,
            litr: `0.5l`,
            title: `Mineral suv idishi`,
            text: `Turar-joy yashovchilari uchun mineral suv idishi, turli o'lchamlarda mavjud`,
            button: `Sayt o'tish`
        },
        {
            image: nol__yetmishbesh__litr,
            litr: `0.75l`,
            title: `Mineral suv idishi`,
            text: `Turar-joy yashovchilari uchun mineral suv idishi, turli o'lchamlarda mavjud`,
            button: `Sayt o'tish`
        },
        {
            image: bir__litr,
            litr: `1l`,
            title: `Mineral suv idishi`,
            text: `Turar-joy yashovchilari uchun mineral suv idishi, turli o'lchamlarda mavjud`,
            button: `Sayt o'tish`
        },
        {
            image: yigirma__litr,
            litr: `20l`,
            title: `Mineral suv idishi`,
            text: `Turar-joy yashovchilari uchun mineral suv idishi, turli o'lchamlarda mavjud`,
            button: `Sayt o'tish`
        },
        {
            image: nol__besh__litr,
            litr: `0.5l`,
            title: `Mineral suv idishi`,
            text: `Turar-joy yashovchilari uchun mineral suv idishi, turli o'lchamlarda mavjud`,
            button: `Sayt o'tish`
        },
        {
            image: nol__yetmishbesh__litr,
            litr: `0.75l`,
            title: `Mineral suv idishi`,
            text: `Turar-joy yashovchilari uchun mineral suv idishi, turli o'lchamlarda mavjud`,
            button: `Sayt o'tish`
        },
        {
            image: bir__litr,
            litr: `1l`,
            title: `Mineral suv idishi`,
            text: `Turar-joy yashovchilari uchun mineral suv idishi, turli o'lchamlarda mavjud`,
            button: `Sayt o'tish`
        },
        {
            image: yigirma__litr,
            litr: `20l`,
            title: `Mineral suv idishi`,
            text: `Turar-joy yashovchilari uchun mineral suv idishi, turli o'lchamlarda mavjud`,
            button: `Sayt o'tish`
        },
        {
            image: nol__besh__litr,
            litr: `0.5l`,
            title: `Mineral suv idishi`,
            text: `Turar-joy yashovchilari uchun mineral suv idishi, turli o'lchamlarda mavjud`,
            button: `Sayt o'tish`
        },
        {
            image: nol__yetmishbesh__litr,
            litr: `0.75l`,
            title: `Mineral suv idishi`,
            text: `Turar-joy yashovchilari uchun mineral suv idishi, turli o'lchamlarda mavjud`,
            button: `Sayt o'tish`
        },
        {
            image: bir__litr,
            litr: `1l`,
            title: `Mineral suv idishi`,
            text: `Turar-joy yashovchilari uchun mineral suv idishi, turli o'lchamlarda mavjud`,
            button: `Sayt o'tish`
        },
        {
            image: yigirma__litr,
            litr: `20l`,
            title: `Mineral suv idishi`,
            text: `Turar-joy yashovchilari uchun mineral suv idishi, turli o'lchamlarda mavjud`,
            button: `Sayt o'tish`
        },
    ]
    return (
        <div>
            <section className="carousel bg-[#1A367C] py-[40px] mt-[50px] lg:py-[60px] lg:mt-[84px]">
                <div className="container carousel__container w-full px-4 md:px-[32px] lg:px-4">
                    <div className="carousel__top-box">
                        <h4 className="carousel__title font-semibold text-[20px] leading-[100%] text-white md:text-[24px] lg:text-[32px]">Bizning mahsulotlar</h4>
                    </div>
                </div>
                <div className="carousel__bottom w-full mt-[60px] lg:mt-[100px] cursor-grab">
                    <Swiper
                        className='carousel__swiper-box'
                        navigation={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        modules={[Navigation, Autoplay]}
                        slidesPerView={"auto"}
                        spaceBetween={14}
                        centeredSlides={true}>
                        {data.map((card, index) => (
                            <SwiperSlide
                                className="carousel__swiperSlide flex flex-row justify-center items-center"
                                key={index}>
                                <div className="carousel__cards flex flex-col justify-center items-center bg-[#FFFFFF] px-4 pt-4 pb-6 lg:px-6 lg:pt-6 lg:pb-6 rounded-[34px]">
                                    <div className="carousel__image-box w-full border-[2px] border-[#0E8CDE] rounded-[24px]">
                                        <img
                                            className="carousel__images rounded-[24px]"
                                            src={card.image}
                                            alt="bottle__images"
                                        />
                                    </div>
                                    <div className="carousel__card-text-box flex flex-col justify-center items-start">
                                        <h6 className="carousel__litre-texts font-semibold text-[16px] leading-[100%] text-[#0E8CDE] mt-2.5 md:mt-3 lg:text-[18px] lg:mt-4">{card.litr}</h6>
                                        <h4 className="carousel__titles font-normal text-[18px] leading-[100%] text-[#262D32] mt-2.5 md:mt-3 lg:text-[24px]">
                                            {card.title}
                                        </h4>
                                        <p className="carousel__texts font-normal text-[16px] leading-[100%] text-[#7F868C] mb-6 md:mt-3 md:mb-8 lg:text-[18px]">
                                            {card.text}
                                        </p>
                                        <button className="carousel__buttons cursor-pointer text-start flex flex-row justify-center border-2 border-[#0E8CDE] outline-3 outline-white/30 items-center font-normal text-[16px] text-white active:opacity-40 duration-150 rounded-[66px] lg:text-[18px]">
                                            Saytga o'tish
                                            <i className="fa-solid fa-arrow-right ms-4"></i>
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section >
        </div >
    )
}