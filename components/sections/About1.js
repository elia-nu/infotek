

import Link from 'next/link'
import VideoPopup from '../elements/VideoPopup'
import CounterUp from '../elements/CounterUp'

export default function About1() {
    const data = [
        {
          id: 1,
          icon: "https://zrtechsolutions.com/demo/html/technoit/assets/images/icons/icon-1.svg",
          title: "Experience",
          subtitle: "Lorem ipsum dolor sit amet.",
          description:
            "Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 2,
          icon: "https://zrtechsolutions.com/demo/html/technoit/assets/images/icons/icon-2.svg",
          title: "Products",
          subtitle: "Lorem ipsum dolor sit amet.",
          description:
            "Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 3,
          icon: "https://zrtechsolutions.com/demo/html/technoit/assets/images/icons/icon-3.svg",
          title: "Approach",
          subtitle: "Lorem ipsum dolor sit amet.",
          description:
            "Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 4,
          icon: "https://zrtechsolutions.com/demo/html/technoit/assets/images/icons/icon-4.svg",
          title: "Pricing",
          subtitle: "Lorem ipsum dolor sit amet.",
          description:
            "Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 5,
          icon: "https://zrtechsolutions.com/demo/html/technoit/assets/images/icons/icon-5.svg",
          title: "Delivery",
          subtitle: "Lorem ipsum dolor sit amet.",
          description:
            "Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 6,
          icon: "https://zrtechsolutions.com/demo/html/technoit/assets/images/icons/icon-6.svg",
          title: "Support",
          subtitle: "Lorem ipsum dolor sit amet.",
          description:
            "Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ];
      
    return (
        <>
            <section className="about-section section-padding fix"  id="about">
                <div className="container">
                    <div className="about-wrapper">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about-image-items">
                                    <div className="counter-shape float-bob-y">
                                        <div className="icon">
                                            <img src="/assets/img/about/icon-1.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h3><CounterUp count={6561}/>+</h3>
                                        </div>
                                    </div>
                                    <VideoPopup style={2} />
                                    <div className="about-image-1 bg-cover wow fadeInLeft" data-wow-delay=".3s" style={{ backgroundImage: 'url("assets/img/about/01.jpg")' }}>
                                        <div className="about-image-2 wow fadeInUp" data-wow-delay=".5s">
                                            <img src="/assets/img/about/02.jpg" alt="about-img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-4 mt-lg-0">
                                <div className="about-content">
                                    <div className="section-title">
                                        <span className="wow fadeInUp">ABOUT QEDAMI</span>
                                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                        We empower clients with innovative solutions that address their  <span>unique challenges.</span>
                                        </h2>
                                    </div>
                                    <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                                     Qedami Software Solution and Services is a leading IT company based in Addis Ababa,
                                     Ethiopia, dedicated to providing innovative software solutions and services to both                                      
                                     national and international clients. Since our inception, we have been committed to 
                                     delivering high-quality, customized software solutions that meet the unique needs of
                                     our clients across various industries.
                                    </p>
                                    <p className="mt-2 mt-md-3 wow fadeInUp" data-wow-delay=".5s">
                                    Our team of highly skilled professionals is passionate about technology and innovation. We specialize in a wide range of IT services, including software development, system integration, IT consulting, and project management. Our goal is to help businesses leverage technology to improve efficiency, drive growth, and achieve their objectives.  </p>
                                    <div className="about-icon-items">
                                        <div className="icon-items wow fadeInUp" data-wow-delay=".7s">
                                            <div className="icon">
                                                <img src="/assets/img/about/icon-2.svg" alt="icon-img" />
                                            </div>
                                            <div className="content">
                                                <h4>Problem Solving</h4>
                                                <p>
                                                    We analyze challenges and develop effective solutions.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="icon-items wow fadeInUp" data-wow-delay=".9s">
                                            <div className="icon">
                                                <img src="/assets/img/about/icon-3.svg" alt="icon-img" />
                                            </div>
                                            <div className="content">
                                                <h4>Mission &amp; Vision</h4>
                                                <p>
                                                    Our mission is to innovate and lead in technology solutions.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="about-author">
                                        <div className="about-button wow fadeInUp" data-wow-delay=".5s">
                                            <Link href="/about" className="theme-btn">
                                                Explore More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
     
b
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
