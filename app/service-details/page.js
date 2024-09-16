'use client'
import VideoPopup from '@/components/elements/VideoPopup'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState, useEffect } from 'react'
import companyDetails from './detail.JSON'
import { useSearchParams } from 'next/navigation'

export default function ServiceDetails() {
    

    const searchParams = useSearchParams();

    const [activeItem, setActiveItem] = useState(4)
    const [serviceData, setServiceData] = useState()
    const [services, setServices] = useState(companyDetails.company.services)
    const [serviceTitles, setServiceTitles] = useState()
    const [title, setTitle] = useState("System Integration")
    
    const handleClick = (index) => {
        setActiveItem(index)
    }

    useEffect(() => {
        const title1 = searchParams.get('title');
        setTitle(title1);
        console.log(title1);
        setServiceTitles(services.map(service => service.title));
        if (title) {
            setServiceData(services.filter(service => service.title === title));
        }
    }, [services, title]); // Add title to dependency array

    // Fallback for when serviceData is not available
    if (!serviceData) {
        return <div>Loading...</div>;
    }

    return (
        <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Services Details">
            <section className="service-details-section fix section-padding">
                <div className="container">
                    <div className="service-details-wrapper">
                        <div className="row g-4">
                            <div className="col-12 col-lg-4 order-2 order-md-1">
                                <div className="main-sidebar">
                                    <div className="single-sidebar-widget">
                                        <div className="wid-title">
                                            <h3>All Services</h3>
                                        </div>
                                        <div className="widget-categories">
                                            <ul>
                                                {serviceTitles && serviceTitles.map((service, index) => (
                                                    <li key={index}>
                                                        <Link href={`/service-details/${service}`}>{service}</Link>
                                                        <i className="fa-solid fa-arrow-right-long" />
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="single-sidebar-widget">
                                        <div className="wid-title">
                                            <h3>Opening Hours</h3>
                                        </div>
                                        <div className="opening-category">
                                            <ul>
                                                <li><i className="fa-regular fa-clock" />Mon - Sat: 10.00 AM - 4.00 PM</li>
                                                <li><i className="fa-regular fa-clock" />Sun:  09.00 AM - 4.00 PM</li>
                                                <li><i className="fa-regular fa-clock" />Friday: Closed</li>
                                                <li><i className="fa-regular fa-clock" />Emergency: 24 hours</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="single-sidebar-image bg-cover" style={{ backgroundImage: 'url("assets/img/service/post.jpg")' }}>
                                        <div className="contact-text">
                                            <div className="icon">
                                                <i className="fa-solid fa-phone" />
                                            </div>
                                            <h4>Need Help? Call Here</h4>
                                            <h5>
                                                <Link href="/tel:+2085550112">+208-555-0112</Link>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-8 order-1 order-md-2">
                                <div className="service-details-items">
                                    <div className="details-image">
                                        <img src="/assets/img/service/details-1.jpg" alt="img" />
                                    </div>
                                    <div className="details-content">
                                        <h2>{serviceData ? serviceData[0].title : 'Loading...'}</h2>
                                        <p className="mt-3">
                                            {serviceData ? serviceData[0].description : 'Loading...'}
                                        </p>
                                        <div className="details-video-items">
                                            <div className="video-thumb">
                                                <img src="/assets/img/service/details-video.jpg" alt="img" />
                                                <VideoPopup style={1} />
                                            </div>
                                            <div className="content">
                               
                                                <ul className="list">
                                                    {serviceData && serviceData[0].subservices.map((items, index) => (
                                                        <li key={index} >
                                                            <h4 style={{ listStyleType: 'none', padding: '10px 0px', color:'#3838ff'}}>{items.name}</h4>
                                                            <p>{items.description} </p>
                                                            <h5 style={{paddingTop:'10px', paddingLeft:'20px', paddingBottom:'10px'}}>Key Features</h5>
                                                            {items.key_features.map((feature, index) => (
                                                                
                                                                <li key={index} style={{ listStyleType: 'none', paddingLeft: '40px' }}>
                                                                    <i className="fa-regular fa-circle-check" />
                                                                    {feature}
                                                                </li>
                                                            ))}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                               
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}