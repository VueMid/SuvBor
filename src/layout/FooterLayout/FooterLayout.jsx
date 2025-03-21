import React from "react"
import './FooterLayout.css'
import FooterLogo from "./components/FooterLogo"
import FooterNavbar from "./components/FooterNavbar"
import FooterIcons from "./components/FooterIcons"
import FooterBottom from "./components/FooterBottom"
export default function FooterLayout() {
    return (
        <div>
            <footer className="footer bg-[#194BC9] pt-8 pb-[26px] md:pt-12 md:pb-[36px] lg:pb-[46px] xl:pt-20">
                <div className="container footer__container flex flex-col justify-center items-center px-4 md:px-[32px] lg:px-4">
                    <div className="footer__main-box flex flex-col justify-center items-center gap-[44px] md:gap-[64px]">
                        <FooterLogo />
                        <FooterNavbar />
                        <FooterIcons />
                    </div>
                    <hr className="footer__hr w-full h-[2px] bg-white my-[26px] md:my-[36px] lg:my-[46px] outline-none border-none" />
                    <FooterBottom />
                </div>
            </footer>
        </div>
    )
}