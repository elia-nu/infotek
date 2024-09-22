'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".dot-2",
        clickable: true,
    },
}

export default function Testimonial1() {
    return (
        <>
            <section className="testimonial-section section-padding fix">
                <div className="container">
                    <div className="testimonial-wrapper">
                        <div className="swiper testimonial-slider">
                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                <SwiperSlide>
                                    <div className="testimonial-items">
                               
                                        <div className="testimonial-content">
                                            <div className="section-title">
                                                <span>Testimonials</span>
                                                <h2>What’s Clients Say </h2>
                                            </div>
                                            <p className="mt-3 mt-md-0">
                                            "Qedami Software Solution and Services has been a phenomenal partner in our software development journey. Their team took the time to understand our vision and translated it into a robust solution that exceeded our expectations. Their commitment to quality and innovation has been a key driver of our success."      </p>
                                            <div className="author-details">
                                                <h5>Biniyam Kabtamu</h5>
                                            
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial-items">
                                     
                                        <div className="testimonial-content">
                                            <div className="section-title">
                                                <span>Testimonials</span>
                                                <h2>What’s Clients Say </h2>
                                            </div>
                                            <p className="mt-3 mt-md-0">
                                            "The consultancy services from Qedami have transformed how we approach our IT strategy. Their insights into best practices and effective solutions have helped us streamline operations and improve efficiency. We appreciate their professionalism and genuine interest in our growth."        </p>
                                            <div className="author-details">
                                                <h5>Mulugeta Awoke</h5>
                                            
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial-items">
                              
                                        <div className="testimonial-content">
                                            <div className="section-title">
                                                <span>Testimonials</span>
                                                <h2>What’s Clients Say </h2>
                                            </div>
                                            <p className="mt-3 mt-md-0">
                                            "Qedami Software Solution and Services has been a crucial ally in our mission. Their team provided expert guidance and support in optimizing our IT infrastructure, allowing us to focus on our community initiatives. Their dedication to our success is evident in every interaction."    </p>
                                            <div className="author-details">
                                                <h5>Alemu Gudeta</h5>
                                           
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                      
                            </Swiper>
                        </div>
                        <div className="swiper-dot-2">
                            <div className="dot-2" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
