import Link from "next/link"

export default function Footer1() {
    return (
        <>

            <footer className="footer-section">
                <div className="footer-widgets-wrapper footer-bg">
                    <div className="shape-1">
                        <img src="/assets/img/footer-shape-1.png" alt="shape-img" />
                    </div>
                    <div className="shape-2">
                        <img src="/assets/img/footer-shape-2.png" alt="shape-img" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <Link href="/">
                                            <img src="https://qedamisolution.com/logo.png" style={{ width: '300px' }} alt="logo-img" />
                                        </Link>
                                    </div>
                                    <div className="footer-content">
                                        <p>
                                        Qedami Software Solutions is a technology firm providing advanced, customized solutions for businesses. Specializing in software development, system integration, and IT consulting, Qedami uses the latest technology to optimize operations and drive growth.
                                        </p>
                                        <div className="social-icon d-flex align-items-center">
                                            <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                            <Link href="#"><i className="fab fa-twitter" /></Link>
                                            <Link href="#"><i className="fa-brands fa-linkedin-in" /></Link>
                                            <Link href="#"><i className="fa-brands fa-youtube" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".5s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3>Quick Links</h3>
                                    </div>
                                    <ul className="list-area" >
                                        <li>
                                            <Link href="/about">
                                                <i className="fa-solid fa-chevron-right" />
                                                Qedami About
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service">
                                                <i className="fa-solid fa-chevron-right" />
                                                Our Services
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/news">
                                                <i className="fa-solid fa-chevron-right" />
                                                Our Blogs
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/faq">
                                                <i className="fa-solid fa-chevron-right" />
                                                FAQ’S
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">
                                                <i className="fa-solid fa-chevron-right" />
                                                Contact Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/pricing">
                                                <i className="fa-solid fa-chevron-right" />
                                                Project
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".5s">
                                <div className="single-footer-widget style-margin">
                                    <div className="widget-head">
                                        <h3>IT Solution</h3>
                                    </div>
                                    <ul className="list-area">
                                        <li>
                                            <Link href="/service-details">
                                                <i className="fa-solid fa-chevron-right" />
                                                IT Management
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                <i className="fa-solid fa-chevron-right" />
                                                Web Development
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                <i className="fa-solid fa-chevron-right" />
                                                Cyber Security
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                <i className="fa-solid fa-chevron-right" />
                                                SEO Optimization
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                <i className="fa-solid fa-chevron-right" />
                                                App Development
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp" data-wow-delay=".9s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3>Contact Us</h3>
                                    </div>
                                    <div className="footer-content">
                                        <ul className="contact-info">
                                            <li>
                                                <i className="fas fa-map-marker-alt" />
                                                Lingo Tower Infront sheger Plaza Bole, Addis Ababa, Ethiopia
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-phone-volume" />
                                                <Link href="/tel:+251910813571">+251 91 081 3571</Link>
                                                <br/>
                                                <i className="fa-solid fa-phone-volume" />
                                                <Link href="/tel:+251910813571">+251 94 143 9741</Link>
                                                <br/>
                                                <i className="fa-solid fa-phone-volume" />
                                                <Link href="/tel:+251910813571">+1 206 353 5373</Link>
                                            </li>
                                            <li>
                                                <i className="fa-regular fa-envelope" />
                                                <Link href="/mailto:infotech@gmail.com">info@qedamisolution.com
                                                </Link>
                                                <br/>      <i className="fa-regular fa-envelope" />
                                                <Link href="/mailto:infotech@gmail.com">support@qedamisolution.com
                                                </Link>
                                            </li>
                                        </ul>
                                        <Link href="/contact" className="theme-btn hover-white mt-4">
                                            Contact Us
                                            <i className="fa-solid fa-arrow-right-long" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="footer-wrapper d-flex align-items-center justify-content-between">
                            <p className="wow fadeInLeft color-2" data-wow-delay=".3s">
                                © All Copyright {new Date().getFullYear()} by <Link href="/">QEDAMI SOLUTION</Link>
                            </p>
                            <ul className="footer-menu wow fadeInRight" data-wow-delay=".5s">
                                <li>
                                    <Link href="/contact">
                                        Terms &amp; Condition
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link href="#" id="scrollUp" className="scroll-icon">
                        <i className="far fa-arrow-up" />
                    </Link>
                </div>
            </footer>

        </>
    )
}
