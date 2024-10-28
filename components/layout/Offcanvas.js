'use client'
import Link from "next/link"
import MobileMenu from "./MobileMenu"

export default function Offcanvas({
    isOffCanvas,
    handleOffCanvas,
}) {
    return (
        <>
            <div className="fix-area">
                <div className={`offcanvas__info ${isOffCanvas ? "info-open" : ""}`}>
                    <div className="offcanvas__wrapper">
                        <div className="offcanvas__content">
                            <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                                <div className="offcanvas__logo">
                                    <Link href="/">
                                        <img src="/assets/img/header/logo.png" alt="logo-img" />
                                    </Link>
                                </div>
                                <div className="offcanvas__close" onClick={handleOffCanvas}>
                                    <button>
                                        <i className="fas fa-times" />
                                    </button>
                                </div>
                            </div>
                            <p className="text d-none d-lg-block">
                            "Ready to get started with Qedami Software Solution and Services? Empower your business with our cutting-edge technology solutions, expert software development, and tailored IT services. Let us help you innovate and achieve your goals. Get started today!"                 </p>
                            <div className="d-none d-md-block d-lg-none">
                               
                            </div>
                            <div className="mobile-menu">
                                <MobileMenu />
                            </div>
                            <div className="offcanvas__contact">
                                <h4>Contact Info</h4>
                                <ul>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon">
                                            <i className="fal fa-map-marker-alt" />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <Link target="_blank" href="#">Lingo Tower Infront sheger Plaza Bole, Addis Ababa, Ethiopia</Link>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <i className="fal fa-envelope" />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <Link href="/mailto:info@azent.com"><span className="mailto:info@qedamisolution.com">info@qedamisolution.com</span></Link>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <i className="fal fa-clock" />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <Link target="_blank" href="#">Mod-friday, 09am -05pm</Link>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <i className="far fa-phone" />
                                        </div>
                                        <div className="offcanvas__contact-text ">
                                            <Link href="/tel:+251910813571">+251-91-081-3571</Link>
                                    
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <i className="far fa-phone" />
                                        </div>
                                        <div className="offcanvas__contact-text ">
                                         
                                            <Link href="/tel:+251910813571">+1 206 353 5373</Link>
                                        </div>
                                    </li>
                                </ul>
                                <div className="header-button mt-4">
                                    <Link href="/contact" className="theme-btn text-center">
                                        <span>Contact Us<i className="fa-solid fa-arrow-right-long" /></span>
                                    </Link>
                                </div>
                                <div className="social-icon d-flex align-items-center">
                                    <Link href=" https://www.facebook.com/share/8nDYQiLdk45Ank1V/" target="_blank"><i className="fab fa-facebook-f" /></Link>
                                    <Link href=" https://x.com/Qedamisolutions?t=SZm06VjW8VakIkaNYuaGeA&s=08" target="_blank"><i className="fab fa-twitter" /></Link>
                                    <Link href=" https://t.me/QedamiSolution" target="_blank"><i className="fab fa-telegram" /></Link>
                                    <Link href=" https://www.linkedin.com/company/qedami-software-solution-and-services/about/?viewAsMember=true" target="_blank"><i className="fab fa-linkedin-in" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`offcanvas__overlay ${isOffCanvas ? "overlay-open" : ""}`} onClick={handleOffCanvas} />
        </>

    )
}
