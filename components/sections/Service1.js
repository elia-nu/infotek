'use client'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
    },

    breakpoints: {
        1199: {
            slidesPerView: 4,
        },
        991: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 2,
        },
        575: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    },
}

export default function Service1() {
    return (
        <>
            <section className="service-section fix section-padding bg-cover" style={{ backgroundImage: 'url("assets/img/service/service-bg.jpg")' }}  id="service">
                <div className="container">
                    <div className="section-title-area">
                        <div className="section-title">
                            <span className="wow fadeInUp">IT services</span>
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                We Solve IT Problems <br /> With Technology
                            </h2>
                        </div>
                        <div className="array-button">
                            <button className="array-prev"><i className="fal fa-arrow-right" /></button>
                            <button className="array-next"><i className="fal fa-arrow-left" /></button>
                        </div>
                    </div>
                    <div className="service-wrapper">
                        <div className="swiper service-slider">
                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-1.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link  href={`/service-details?title=${encodeURIComponent("Software Development")}`}>
                                                Software Development
                                                </Link>
                                            </h4>
                                            <p>
                                            Our Software Development services encompass Custom Software  
                                            </p>
                                            <Link  href={`/service-details?title=${encodeURIComponent("Software Development")}`} className="theme-btn-2 mt-3">
                                                read More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-2.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link  href={`/service-details?title=${encodeURIComponent("Managed Services")}`}>
                                                Managed Services
                                                </Link>
                                            </h4>
                                            <p>
                                            Our Managed Services offering includes comprehensive IT Support and 
                                            </p>
                                            <Link  href={`/service-details?title=${encodeURIComponent("Managed Services")}`} className="theme-btn-2 mt-3">
                                                read More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-3.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link  href={`/service-details?title=${encodeURIComponent("Infrastructure Services")}`}>
                                                Infrastructure Services
                                                </Link>
                                            </h4>
                                            <p>
                                            We offer comprehensive Infrastructure Services, including Network 
                                            </p>
                                            <Link  href={`/service-details?title=${encodeURIComponent("Infrastructure Services")}`} className="theme-btn-2 mt-3">
                                                read More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-4.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link  href={`/service-details?title=${encodeURIComponent("System Integration")}`}>
                                                System Integration
                                                </Link>
                                            </h4>
                                            <p>
                                            Our System Integration services provide seamless connectivity through 
                                            </p>
                                            <Link  href={`/service-details?title=${encodeURIComponent("System Integration")}`} className="theme-btn-2 mt-3">
                                                read More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-1.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link  href={`/service-details?title=${encodeURIComponent("Training and Development")}`} >
                                                Training and Development
                                                </Link>
                                            </h4>
                                            <p>
                                            Our Training and Development services encompass Technical Training, 
                                            </p>
                                            <Link  href={`/service-details?title=${encodeURIComponent("Training and Development")}`} className="theme-btn-2 mt-3">
                                                read More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-2.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                            <Link  href={`/service-details?title=${encodeURIComponent("Cybersecurity Services")}`}>
                                                Cybersecurity Services
                                                </Link>
                                            </h4>   
                                            <p>
                                            Our Cybersecurity Services provide a robust defense against threats
                                            </p>
                                            <Link  href={`/service-details?title=${encodeURIComponent("Cybersecurity Services")}`} className="theme-btn-2 mt-3">
                                                read More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                          
                              
                       
                                
                            </Swiper>
                        </div>
                        <div className="service-text wow fadeInUp" data-wow-delay=".4s">
                            <h6>
                                Need Any Kind Of IT Solution For Your Business.  <Link  href={`/service-details?title=${encodeURIComponent("Cybersecurity Services")}`}>View Services </Link>
                            </h6>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
