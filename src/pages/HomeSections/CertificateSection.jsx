import React from "react"
import './CertificateSection.css'
import certificate from '../../assets/images/certificate.png'
export default function CertificateSection() {
    return (
        <div>
            <section className="certificate mt-[50px] lg:mt-[84px]">
                <div className="container certificate__container px-4 md:px-[32px] lg:px-4">
                    <div className="certificate__main-box w-full border-[1px] border-[#008CFF] rounded-[32px] flex flex-col justify-center items-center gap-6 px-4 py-6 lg:flex lg:flex-row lg:justify-between lg:items-center lg:py-8 lg:px-8 lg:rounded-[65px] xl:py-[75px] xl:px-[94px]">
                        <div className="certificate__text-box bg-white/75 flex flex-col justify-center items-start gap-3 rounded-[16px] border-[1px] border-[#C0CDD8] px-6 py-6 lg:py-[36px] lg:px-[24px] xl:px-6 xl:py-9">
                            <h4 className="certificate__title font-semibold text-2xl leading-[100%] text-[#262D32] lg:text-[32px] lg:leading-[38px]">Bizning yutuq</h4>
                            <p className="certificate__text font-normal text-[18px] leading-[24px] text-[#262D32] w-full lg:w-[434px] xl:text-[24px] xl:w-[490px] xl:leading-[32px]">
                                “Suv Bor” barcha standartlarga javob beradi. Minerallarni o'zida uyg'unlashtiradi. Mijozlari ishonchi uchun sertifikat buni tasdiqlaydi. Bu sertifikat hali boshlanishi va shu yerda bizning yutuqlar yangilanib borishini kafolatlaymiz.
                            </p>
                        </div>
                        <img className="certificate__certificate-image object-contain w-full h-[202px] px-[14.5px] lg:px-0 lg:w-[304px] lg:h-[100%] xl:w-[462px] xl:h-[330px]" src={certificate} alt="certificate__image" />
                    </div>
                </div>
            </section>
        </div>
    )
}