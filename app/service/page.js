
'use client';
import Accordion1 from "@/components/elements/Accordion1";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useEffect, useState } from "react";
import data from "./detail.JSON";

export default function Service() {
   
    const [services, setServices] = useState();

    useEffect(() => {
        setServices(data.company.services);
        console.log(services ,"class");
        console.log(data.company.services);
    }, []);
    console.log(services , "zoz");
    return (
        <>

            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Services">
                <div>
                    <section className="service-section fix section-padding">
                        <div className="container">
                            <div className="section-title text-center">
                                <span className="wow fadeInUp">OUR SERVICES</span>
                                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                    We Provide the Best Quality
                                </h2>
                            </div>
                            <div className="service-wrapper mb-0">
                                <div className="row">
                                {services && services.map((service, index) => (
                                    <div key={index} className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                        <div className="service-box-items box-shadow">
                                            <div className="icon">
                                                <img src="/assets/img/service/icon/s-icon-1.svg" alt="icon-img" />
                                            </div>
                                            <div className="content">
                                                <h4>
                                                    <Link href={`/service-details?title=${encodeURIComponent(service.title)}`}>
                                                        {service.title}
                                                    </Link>
                                                </h4>
                                                <p>
                                                    {service.description.length > 40 ? `${service.description.substring(0, 65)}...` : service.description}
                                                </p>
                                                <Link href={`/service-details?title=${encodeURIComponent(service.title)}`} className="theme-btn-2 mt-3">
                                                    read More
                                                    <i className="fa-solid fa-arrow-right-long" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        </div>

                    </section>
                    {/*<< Faq Section Start >>*/}
                    <section className="faq-section style-2 fix section-padding">
                        <div className="right-shape">
                            <img src="/assets/img/faq/right-shape.png" alt="shape-img" />
                        </div>
                        <div className="faq-shape-box">
                            <div className="faq-shape">
                                <img src="/assets/img/faq/shape.png" alt="shape-img" />
                            </div>
                        </div>
                        <div className="container">
                            <div className="faq-wrapper">
                                <div className="row g-4">
                                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                                        <div className="faq-image">
                                            <img src="/assets/img/faq/faq.png" alt="faq-img" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="faq-content">
                                            <div className="section-title">
                                                <span className="wow fadeInUp">See Our Faqs</span>
                                                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                                    Keep Your Business Safe &amp; <br /> Ensure High Availability
                                                </h2>
                                            </div>
                                            <div className="faq-accordion mt-4 mt-md-0">
                                                <Accordion1 />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Contact Section Start */}
                    <section className="contact-section fix section-padding">
                        <div className="container">
                            <div className="contact-wrapper">
                                <div className="arrow-shape">
                                    <img src="/assets/img/arrow-shape.png" alt="shape-img" />
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="contact-image wow fadeInUp" data-wow-delay=".4s">
                                            <img src="/assets/img/contact.png" alt="contact-img" />
                                            <div className="cricle-shape">
                                                <img src="/assets/img/circle-shape.png" alt="shape-img" />
                                            </div>
                                            <div className="small-cricle-shape">
                                                <img src="/assets/img/choose/circle.png" alt="shape-img" />
                                            </div>
                                            <div className="frame-shape">
                                                <img src="/assets/img/frame.png" alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="contact-content">
                                            <div className="section-title">
                                                <span className="text-white wow fadeInUp">TALK TO US</span>
                                                <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">How May We Help You!</h2>
                                            </div>
                                            <form action="#" id="contact-form" method="POST" className="contact-form-items">
                                                <div className="row g-4">
                                                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                                                        <div className="form-clt">
                                                            <span>Your name*</span>
                                                            <input type="text" name="name" id="name" placeholder="Robot fox" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                                                        <div className="form-clt">
                                                            <span>Your Email*</span>
                                                            <input type="text" name="email" id="email" placeholder="info@example.com" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 wow fadeInUp" data-wow-delay=".7s">
                                                        <div className="form-clt">
                                                            <span>Message*</span>
                                                            <textarea name="message" id="message" placeholder="Write Message" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-7 wow fadeInUp" data-wow-delay=".9s">
                                                        <button type="submit" className="theme-btn bg-white">
                                                            Sand Message
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}